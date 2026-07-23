import { Parser } from "@fortune-sheet/formula-parser";
import {
  configureExcelDateFunctions,
  getFormulaDisplayValue,
  shouldRecalculateFormula,
  toExcelFormulaValue,
} from "../workbook/excelDateFormulaUtils.js";

const getFormulaCellText = (cellValue) => {
  if (Array.isArray(cellValue?.ct?.s)) {
    return cellValue.ct.s.map((item) => item?.v || "").join("");
  }
  return cellValue?.v ?? cellValue?.m;
};

const normalizeFormulaOperand = (value, cellValue) => {
  if (value == null) return undefined;
  if (typeof value === "number" || typeof value === "boolean") return value;
  const text = String(value);
  if (
    cellValue?.ct?.t !== "s" &&
    cellValue?.ct?.t !== "inlineStr" &&
    /^-?(?:\d+|\d*\.\d+)$/.test(text.trim())
  ) {
    const number = Number(text);
    return Number.isFinite(number) ? number : value;
  }
  return value;
};

export const applyImportedFormulaResults = (sheets) => {
  if (!Array.isArray(sheets) || sheets.length === 0) return;

  const parser = configureExcelDateFunctions(new Parser());
  let activeFormulaStack = null;
  const sheetNameToIndex = new Map();
  const cellMaps = sheets.map((sheet, sheetIndex) => {
    if (sheet?.name) sheetNameToIndex.set(sheet.name, sheetIndex);
    const map = new Map();
    (sheet?.celldata || []).forEach((cell) => {
      map.set(`${cell.r}_${cell.c}`, cell);
    });
    return map;
  });

  const getSheetIndex = (sheetName, fallbackSheetIndex) => {
    if (!sheetName) return fallbackSheetIndex;
    return sheetNameToIndex.get(String(sheetName).replace(/^'|'$/g, "").replace(/''/g, "'"));
  };

  const getCellValue = (sheetIndex, row, column, visiting) => {
    const cell = cellMaps[sheetIndex]?.get(`${row}_${column}`);
    const cellValue = cell?.v;
    if (cellValue == null) return undefined;

    if (cellValue.f && (cellValue.v == null || shouldRecalculateFormula(cellValue))) {
      const result = calculateCellFormula(sheetIndex, cell, visiting);
      if (result !== undefined) return result;
    }

    return normalizeFormulaOperand(getFormulaCellText(cellValue), cellValue);
  };

  const getRangeValues = (sheetIndex, startCell, endCell, visiting) => {
    const values = [];
    for (let row = startCell.row.index; row <= endCell.row.index; row += 1) {
      const rowValues = [];
      for (let column = startCell.column.index; column <= endCell.column.index; column += 1) {
        rowValues.push(getCellValue(sheetIndex, row, column, visiting));
      }
      values.push(rowValues);
    }
    return values;
  };

  const calculateCellFormula = (sheetIndex, cell, visiting = new Set()) => {
    const cellValue = cell?.v;
    const formula = cellValue?.f;
    if (!formula) return undefined;

    const key = `${sheetIndex}_${cell.r}_${cell.c}`;
    if (visiting.has(key)) return undefined;
    visiting.add(key);

    const expression = formula.startsWith("=") ? formula.slice(1) : formula;
    const previousFormulaStack = activeFormulaStack;
    let response;
    try {
      activeFormulaStack = visiting;
      response = parser.parse(expression, { sheetIndex });
    } finally {
      activeFormulaStack = previousFormulaStack;
      visiting.delete(key);
    }

    if (response?.error != null || response?.result == null) return undefined;

    const result = toExcelFormulaValue(response.result);
    cellValue.v = result;
    cellValue.m = getFormulaDisplayValue(result, cellValue);
    return normalizeFormulaOperand(result, cellValue);
  };

  parser.on("callCellValue", (cellCoord, options, done) => {
    const sheetIndex = getSheetIndex(cellCoord.sheetName, options.sheetIndex);
    done(
      sheetIndex == null
        ? undefined
        : getCellValue(
            sheetIndex,
            cellCoord.row.index,
            cellCoord.column.index,
            activeFormulaStack || new Set(),
          ),
    );
  });

  parser.on("callRangeValue", (startCell, endCell, options, done) => {
    const sheetIndex = getSheetIndex(startCell.sheetName, options.sheetIndex);
    done(
      sheetIndex == null
        ? []
        : getRangeValues(sheetIndex, startCell, endCell, activeFormulaStack || new Set()),
    );
  });

  sheets.forEach((sheet, sheetIndex) => {
    (sheet?.celldata || []).forEach((cell) => {
      const cellValue = cell?.v;
      if (!cellValue?.f) return;

      if (cellValue.v == null || shouldRecalculateFormula(cellValue)) {
        calculateCellFormula(sheetIndex, cell);
      }

      // Excel may provide a valid cached result (`v`) without the display
      // value (`m`) expected by FortuneSheet's internal copy/paste check.
      // Without `m`, copying an untouched imported formula falls back to a
      // plain-text paste and loses the formula. Editing the cell once happens
      // to create `m`, which is why the same copy then works.
      if (cellValue.m == null && cellValue.v != null) {
        cellValue.m = getFormulaDisplayValue(cellValue.v, cellValue);
      }
    });
  });
};
