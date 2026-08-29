import { useCallback, useEffect, useRef, useState } from "react";
import {
  addMonths,
  dateInputValueToExcelSerial,
  dateInputValueToLocalDate,
  formatDateDisplayValue,
  getCellDateFormat,
  getDatePickerPosition,
  getEditableCell,
  getInitialDatePickerValue,
  isCellLockedByProtection,
} from "./dateCellPickerUtils.js";
import { calculateFormulaResultUpdates } from "../excelImport/importedFormulaResults.js";

const DOUBLE_CLICK_DELAY_MS = 900;

const cloneCellForCalculation = (cell) => {
  if (!cell || typeof cell !== "object") return cell;
  return {
    ...cell,
    ct: cell.ct ? { ...cell.ct } : cell.ct,
    VF: cell.VF ? { ...cell.VF } : cell.VF,
  };
};

const getSheetIndexById = (sheets, sheetId, fallbackIndex) => {
  const byId = sheets.findIndex((sheet) => String(sheet?.id) === String(sheetId));
  return byId >= 0 ? byId : fallbackIndex;
};

const cloneSheetsWithPatchedCell = (sheets, sheetIndex, row, column, nextCell) =>
  sheets.map((sheet, index) => {
    const data = Array.isArray(sheet?.data)
      ? sheet.data.map((sheetRow) =>
          Array.isArray(sheetRow)
            ? sheetRow.map(cloneCellForCalculation)
            : sheetRow,
        )
      : [];

    const celldata = (sheet?.celldata || []).map((cell) => {
      return { ...cell, v: cloneCellForCalculation(cell.v) };
    });

    if (index === sheetIndex) {
      data[row] = Array.isArray(data[row]) ? data[row] : [];
      data[row][column] = cloneCellForCalculation(nextCell);

      let patchedCelldata = false;
      celldata.forEach((cell) => {
        if (cell.r !== row || cell.c !== column) return;
        patchedCelldata = true;
        cell.v = cloneCellForCalculation(nextCell);
      });
      if (!patchedCelldata) {
        celldata.push({ r: row, c: column, v: cloneCellForCalculation(nextCell) });
      }
    }

    return {
      ...sheet,
      data,
      celldata,
    };
  });

export const useDateCellPicker = ({
  activeSheetIndex,
  definedNames = [],
  workbookRef,
  sheetDataRef,
}) => {
  const [datePicker, setDatePicker] = useState(null);
  const lastCellMouseDownRef = useRef(null);
  const lastPointerRef = useRef({ clientX: 0, clientY: 0 });

  const closeDatePicker = useCallback(() => {
    setDatePicker(null);
  }, []);

  const getCurrentSheet = useCallback(() => {
    const workbook = workbookRef.current;
    return workbook?.getSheet?.() || sheetDataRef.current[activeSheetIndex];
  }, [activeSheetIndex, sheetDataRef, workbookRef]);

  const getOpenableDateCell = useCallback(
    (row, column) => {
      const sheet = getCurrentSheet();
      if (!sheet) return null;

      const editableCell = getEditableCell(sheet, row, column);
      const cell = editableCell.cell;
      if (!cell || typeof cell !== "object" || cell.f) return null;
      if (isCellLockedByProtection(sheet, cell)) return null;

      const format = getCellDateFormat(cell);
      if (!format) return null;

      return { sheet, editableCell, cell, format };
    },
    [getCurrentSheet],
  );

  const openDatePicker = useCallback(
    ({ row, column, clientX, clientY }) => {
      const target = getOpenableDateCell(row, column);
      if (!target) return false;

      const inputValue = getInitialDatePickerValue(target.cell);
      const selectedDate = dateInputValueToLocalDate(inputValue) || new Date();
      setDatePicker({
        row: target.editableCell.row,
        column: target.editableCell.column,
        sheetId: target.sheet.id,
        format: target.format,
        value: inputValue,
        viewYear: selectedDate.getFullYear(),
        viewMonth: selectedDate.getMonth(),
        position: getDatePickerPosition(clientX, clientY),
      });
      return true;
    },
    [getOpenableDateCell],
  );

  const getFallbackClientX = (cellInfo) => {
    if (lastPointerRef.current.clientX) return lastPointerRef.current.clientX;
    const cellArea = document.querySelector(".fortune-cell-area");
    const rect = cellArea?.getBoundingClientRect();
    return rect && Number.isFinite(Number(cellInfo.endColumn))
      ? rect.left + Number(cellInfo.endColumn)
      : window.innerWidth / 2;
  };

  const getFallbackClientY = (cellInfo) => {
    if (lastPointerRef.current.clientY) return lastPointerRef.current.clientY;
    const cellArea = document.querySelector(".fortune-cell-area");
    const rect = cellArea?.getBoundingClientRect();
    return rect && Number.isFinite(Number(cellInfo.endRow))
      ? rect.top + Number(cellInfo.endRow)
      : window.innerHeight / 2;
  };

  const beforeCellMouseDown = useCallback(
    (_cell, cellInfo) => {
      const row = cellInfo?.row;
      const column = cellInfo?.column;
      if (!Number.isInteger(row) || !Number.isInteger(column)) return undefined;

      const now = Date.now();
      const previous = lastCellMouseDownRef.current;
      const isSecondClick =
        previous &&
        previous.row === row &&
        previous.column === column &&
        now - previous.timestamp <= DOUBLE_CLICK_DELAY_MS;

      lastCellMouseDownRef.current = {
        row,
        column,
        timestamp: now,
        startColumn: Number(cellInfo.startColumn),
        startRow: Number(cellInfo.startRow),
        endColumn: Number(cellInfo.endColumn),
        endRow: Number(cellInfo.endRow),
      };

      if (!isSecondClick) return undefined;

      const clientX = getFallbackClientX(cellInfo);
      const clientY = getFallbackClientY(cellInfo);
      return openDatePicker({ row, column, clientX, clientY }) ? false : undefined;
    },
    [openDatePicker],
  );

  useEffect(() => {
    const rememberPointer = (event) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest(".fortune-cell-area")) {
        return;
      }
      lastPointerRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
      };
    };

    const interceptNativeDoubleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest(".fortune-container")) {
        return;
      }

      const lastCell = lastCellMouseDownRef.current;
      const selection = workbookRef.current?.getSelection?.()?.[0];
      const fallbackRow = selection?.row?.[0];
      const fallbackColumn = selection?.column?.[0];
      const canUseLastCell =
        lastCell && Date.now() - lastCell.timestamp <= DOUBLE_CLICK_DELAY_MS;
      const row = canUseLastCell ? lastCell.row : fallbackRow;
      const column = canUseLastCell ? lastCell.column : fallbackColumn;
      if (!Number.isInteger(row) || !Number.isInteger(column)) return;
      if (!getOpenableDateCell(row, column)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      openDatePicker({
        row,
        column,
        clientX: event.clientX,
        clientY: event.clientY,
      });
    };

    document.addEventListener("mousedown", rememberPointer, true);
    document.addEventListener("dblclick", interceptNativeDoubleClick, true);
    return () => {
      document.removeEventListener("mousedown", rememberPointer, true);
      document.removeEventListener("dblclick", interceptNativeDoubleClick, true);
    };
  }, [getOpenableDateCell, openDatePicker, workbookRef]);

  useEffect(() => {
    if (!datePicker) return undefined;

    const closeOnPointerDown = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest(".dc-date-picker-popover")) {
        return;
      }
      closeDatePicker();
    };

    document.addEventListener("mousedown", closeOnPointerDown, true);
    window.addEventListener("resize", closeDatePicker);
    window.addEventListener("blur", closeDatePicker);
    return () => {
      document.removeEventListener("mousedown", closeOnPointerDown, true);
      window.removeEventListener("resize", closeDatePicker);
      window.removeEventListener("blur", closeDatePicker);
    };
  }, [closeDatePicker, datePicker]);

  const commitDatePickerValue = useCallback(
    (inputValue) => {
      const serial = dateInputValueToExcelSerial(inputValue);
      if (serial == null || !datePicker) return;

      const workbook = workbookRef.current;
      const sheet = workbook?.getSheet?.();
      if (!workbook || !sheet || String(sheet.id) !== String(datePicker.sheetId)) {
        closeDatePicker();
        return;
      }

      const { cell } = getEditableCell(sheet, datePicker.row, datePicker.column);
      if (cell?.f || isCellLockedByProtection(sheet, cell)) {
        closeDatePicker();
        return;
      }

      const format = datePicker.format || getCellDateFormat(cell) || "yyyy-MM-dd";
      const nextCell = {
        ...(cell && typeof cell === "object" ? cell : {}),
        v: serial,
        m: formatDateDisplayValue(format, serial, inputValue),
        ct: {
          ...(cell?.ct || {}),
          fa: format,
          t: "d",
        },
      };
      const sheets = workbook.getAllSheets?.() || sheetDataRef.current;
      const sheetIndex = getSheetIndexById(sheets, datePicker.sheetId, activeSheetIndex);
      const calculationSheets = cloneSheetsWithPatchedCell(
        sheets,
        sheetIndex,
        datePicker.row,
        datePicker.column,
        nextCell,
      );
      const formulaUpdates = calculateFormulaResultUpdates(
        calculationSheets,
        definedNames,
      );
      const apiCalls = [
        {
          name: "setCellValue",
          args: [datePicker.row, datePicker.column, nextCell],
        },
        ...formulaUpdates.map((update) => {
          const targetSheet = calculationSheets[update.sheetIndex];
          return {
            name: "setCellValue",
            args: [
              update.row,
              update.column,
              update.value,
              undefined,
              targetSheet?.id == null ? undefined : { id: targetSheet.id },
            ],
          };
        }),
      ];

      if (typeof workbook.batchCallApis === "function") {
        workbook.batchCallApis(apiCalls);
      } else {
        workbook.setCellValue?.(datePicker.row, datePicker.column, nextCell);
        formulaUpdates.forEach((update) => {
          const targetSheet = calculationSheets[update.sheetIndex];
          workbook.setCellValue?.(
            update.row,
            update.column,
            update.value,
            targetSheet?.id == null ? undefined : { id: targetSheet.id },
          );
        });
      }
      closeDatePicker();
      requestAnimationFrame(() => {
        document.querySelector(".fortune-sheet-overlay")?.focus();
      });
    },
    [activeSheetIndex, closeDatePicker, datePicker, definedNames, sheetDataRef, workbookRef],
  );

  const changeDatePickerViewMonth = useCallback((offset) => {
    setDatePicker((current) => {
      if (!current) return current;
      const nextDate = addMonths(
        new Date(current.viewYear, current.viewMonth, 1),
        offset,
      );
      return {
        ...current,
        viewYear: nextDate.getFullYear(),
        viewMonth: nextDate.getMonth(),
      };
    });
  }, []);

  return {
    datePicker,
    closeDatePicker,
    commitDatePickerValue,
    changeDatePickerViewMonth,
    beforeDateCellMouseDown: beforeCellMouseDown,
  };
};
