export const AUTO_GENERAL_ALIGNMENT_KEY = "_dcAutoGeneralHt";

const numericTextPattern = /^-?(?:\d+|\d*\.\d+)(?:[eE][+-]?\d+)?$/i;

export const hasExcelGeneralNumericValue = (cellValue) => {
  const value = cellValue?.v;
  const hasValue = value !== undefined && value !== null && value !== "";
  if (cellValue?.ct?.t === "n" && hasValue) return true;

  if (typeof value === "number") return Number.isFinite(value);
  if (typeof value !== "string") return false;

  const trimmed = value.trim();
  return trimmed !== "" && numericTextPattern.test(trimmed);
};

export const applyAutoGeneralAlignment = (cellValue) => {
  if (!cellValue || cellValue.ht !== undefined || !hasExcelGeneralNumericValue(cellValue)) {
    return cellValue;
  }

  cellValue.ht = 2;
  cellValue[AUTO_GENERAL_ALIGNMENT_KEY] = 1;
  return cellValue;
};
