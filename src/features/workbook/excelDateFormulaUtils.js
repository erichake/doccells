import { datenum_local, is_date as isDateFormat, update as formatCellValue } from "@fortune-sheet/core";

export const VOLATILE_FORMULA_RE = /\b(?:TODAY|NOW|RAND|RANDBETWEEN)\s*\(/i;

const WORKDAY_FORMULA_RE = /^=?WORKDAY\s*\(\s*([^,]+)\s*,\s*([+-]?\d+)/i;
const EXCEL_EPOCH_MS = Date.UTC(1899, 11, 30);
const DAY_MS = 24 * 60 * 60 * 1000;
const A1_RE = /^\$?([A-Z]+)\$?(\d+)$/i;

const weekendCodes = {
  1: [0, 6],
  2: [0, 1],
  3: [1, 2],
  4: [2, 3],
  5: [3, 4],
  6: [4, 5],
  7: [5, 6],
  11: [0],
  12: [1],
  13: [2],
  14: [3],
  15: [4],
  16: [5],
  17: [6],
};

export const toExcelFormulaValue = (value) => {
  if (value instanceof Date) return datenum_local(value);
  return value;
};

export const getFormulaDisplayValue = (value, cellValue) => {
  if (value == null) return undefined;
  const format = cellValue?.ct?.fa;
  if (format && format !== "General") {
    try {
      return String(formatCellValue(format, value));
    } catch {
      // Fall back to a simple display string if the imported format is not supported.
    }
  }
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : undefined;
  }
  if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
  return String(value);
};

export const shouldRecalculateFormula = (cellValue) => {
  const formula = cellValue?.f || "";
  return VOLATILE_FORMULA_RE.test(formula) || isDateFormat(cellValue?.ct?.fa || "");
};

export const toExcelSerial = (value) => {
  if (value instanceof Date) return datenum_local(value);
  if (typeof value === "number") return Number.isFinite(value) ? Math.floor(value) : undefined;
  if (typeof value === "string" && value.trim() !== "") {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? Math.floor(numeric) : undefined;
  }
  return undefined;
};

const getWeekendDays = (weekend = 1) => {
  if (typeof weekend === "string" && /^[01]{7}$/.test(weekend)) {
    return new Set(
      weekend
        .split("")
        .map((flag, index) => (flag === "1" ? (index + 1) % 7 : null))
        .filter((day) => day != null),
    );
  }

  return new Set(weekendCodes[Number(weekend)] || weekendCodes[1]);
};

const getDayOfWeek = (serial) =>
  new Date(EXCEL_EPOCH_MS + Math.floor(serial) * DAY_MS).getUTCDay();

export const excelWorkday = (startDate, days, weekend = 1, holidays = []) => {
  let serial = toExcelSerial(startDate);
  const stepCount = Number(days);
  if (serial == null || !Number.isFinite(stepCount)) return undefined;

  const weekendDays = getWeekendDays(weekend);
  const holidaySet = new Set(
    (Array.isArray(holidays) ? holidays.flat(Infinity) : [holidays])
      .map(toExcelSerial)
      .filter((holiday) => holiday != null),
  );
  const step = stepCount < 0 ? -1 : 1;
  let remaining = Math.abs(Math.trunc(stepCount));

  while (remaining > 0) {
    serial += step;
    const day = getDayOfWeek(serial);
    if (!weekendDays.has(day) && !holidaySet.has(serial)) remaining -= 1;
  }

  return serial;
};

export const configureExcelDateFunctions = (parser) => {
  parser.setFunction("WORKDAY", ([startDate, days, holidays]) =>
    excelWorkday(startDate, days, 1, holidays),
  );
  parser.setFunction("WORKDAY.INTL", ([startDate, days, weekend, holidays]) =>
    excelWorkday(startDate, days, weekend, holidays),
  );
  return parser;
};

const columnNameToIndex = (name) =>
  name.toUpperCase().split("").reduce((index, char) => index * 26 + char.charCodeAt(0) - 64, 0) - 1;

export const calculateSimpleWorkdayFormula = (formula, resolveCellValue) => {
  const match = String(formula || "").match(WORKDAY_FORMULA_RE);
  if (!match) return undefined;

  const startRef = match[1].trim();
  const days = Number(match[2]);
  const refMatch = startRef.match(A1_RE);
  if (!refMatch || !Number.isFinite(days)) return undefined;

  const startValue = resolveCellValue(Number(refMatch[2]) - 1, columnNameToIndex(refMatch[1]));
  return excelWorkday(startValue, days);
};
