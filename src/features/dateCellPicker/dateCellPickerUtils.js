import {
  datenum_local,
  is_date as isDateFormat,
  update as formatCellValue,
} from "@fortune-sheet/core";

const BUILT_IN_DATE_FORMATS = {
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  22: "m/d/yy h:mm",
};

const normalizeDateFormat = (format) =>
  BUILT_IN_DATE_FORMATS[format] || BUILT_IN_DATE_FORMATS[Number(format)] || format;

const stripExcelFormatLiterals = (format) =>
  String(format ?? "")
    .replace(/"(?:[^"]|"")*"/g, "")
    .replace(/\[[^\]]*\]/g, "")
    .replace(/\\./g, "");

const hasCalendarDateToken = (format) => {
  const cleanFormat = stripExcelFormatLiterals(format).toLowerCase();
  if (/[yd]/.test(cleanFormat)) return true;
  if (/[hs]/.test(cleanFormat)) return false;
  return /m{1,5}/.test(cleanFormat);
};

export const getCellDateFormat = (cell) => {
  const format = normalizeDateFormat(cell?.ct?.fa);
  if (cell?.ct?.t === "d") {
    if (!format || format === "General") return "yyyy-MM-dd";
    return hasCalendarDateToken(format) ? format : null;
  }
  if (!format || format === "General" || format === "@") return null;
  try {
    return isDateFormat(format) && hasCalendarDateToken(format) ? format : null;
  } catch {
    return hasCalendarDateToken(format) ? format : null;
  }
};

export const getEditableCell = (sheet, row, column) => {
  const cell = sheet?.data?.[row]?.[column];
  const merge = cell?.mc;
  if (
    merge &&
    Number.isInteger(merge.r) &&
    Number.isInteger(merge.c) &&
    (merge.r !== row || merge.c !== column)
  ) {
    return {
      row: merge.r,
      column: merge.c,
      cell: sheet?.data?.[merge.r]?.[merge.c],
    };
  }
  return { row, column, cell };
};

export const isCellLockedByProtection = (sheet, cell) =>
  sheet?.config?.authority?.sheet === 1 && cell?.lo !== 0;

export const padDatePart = (value) => String(value).padStart(2, "0");

export const dateToInputValue = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  return [
    date.getFullYear(),
    padDatePart(date.getMonth() + 1),
    padDatePart(date.getDate()),
  ].join("-");
};

export const dateInputValueToLocalDate = (value) => {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(date.getTime()) ? null : date;
};

export const serialToDateInputValue = (value) => {
  const serial =
    typeof value === "number"
      ? value
      : String(value ?? "").trim() !== ""
        ? Number(value)
        : NaN;
  if (!Number.isFinite(serial)) return "";
  const wholeDays = Math.floor(serial);
  const excelLeapYearOffset = wholeDays > 60 ? 1 : 0;
  const utcDate = new Date(
    Date.UTC(1899, 11, 31 + wholeDays - excelLeapYearOffset),
  );
  if (Number.isNaN(utcDate.getTime())) return "";
  return [
    utcDate.getUTCFullYear(),
    padDatePart(utcDate.getUTCMonth() + 1),
    padDatePart(utcDate.getUTCDate()),
  ].join("-");
};

export const getInitialDatePickerValue = (cell) =>
  serialToDateInputValue(cell?.v) ||
  serialToDateInputValue(cell?.m) ||
  dateToInputValue(new Date());

export const dateInputValueToExcelSerial = (value) => {
  const date = dateInputValueToLocalDate(value);
  return date ? datenum_local(date) : null;
};

export const getDatePickerPosition = (clientX, clientY) => {
  const width = 284;
  const height = 340;
  const margin = 10;
  return {
    left: Math.max(margin, Math.min(clientX, window.innerWidth - width - margin)),
    top: Math.max(margin, Math.min(clientY + 8, window.innerHeight - height - margin)),
  };
};

export const addMonths = (date, offset) =>
  new Date(date.getFullYear(), date.getMonth() + offset, 1);

export const getMonthCells = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const mondayFirstOffset = (firstDay.getDay() + 6) % 7;
  const firstCell = new Date(year, month, 1 - mondayFirstOffset);
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(
      firstCell.getFullYear(),
      firstCell.getMonth(),
      firstCell.getDate() + index,
    );
    return {
      date,
      inputValue: dateToInputValue(date),
      inMonth: date.getMonth() === month,
    };
  });
};

export const formatDateDisplayValue = (format, serial, fallback) => {
  try {
    return String(formatCellValue(format, serial));
  } catch {
    return fallback;
  }
};
