const isFiniteRange = (range) =>
  Array.isArray(range?.row) &&
  Array.isArray(range?.column) &&
  [...range.row, ...range.column].every(Number.isFinite);

export const DOCCELLS_DROPDOWN_NAME_PREFIX = "_DocCellsDropdown";

export const getSelectedRanges = (selection) => {
  const ranges = (selection || [])
    .filter(isFiniteRange)
    .map((range) => ({
      row: [Math.min(...range.row), Math.max(...range.row)],
      column: [Math.min(...range.column), Math.max(...range.column)],
    }));

  return ranges.length
    ? ranges
    : [{ row: [0, 0], column: [0, 0] }];
};

export const createCheckboxRule = () => ({
  type: "checkbox",
  type2: null,
  value1: true,
  value2: false,
  checked: false,
  remote: false,
  prohibitInput: true,
  hintShow: false,
  hintText: "",
});

export const createDropdownRule = (options) => ({
  type: "dropdown",
  type2: "",
  sourceType: "list",
  value1: options.join(","),
  value2: "",
  checked: false,
  remote: false,
  prohibitInput: true,
  hintShow: false,
  hintText: "",
});

export const normalizeDropdownRangeReference = (reference) =>
  String(reference || "").trim().replace(/^=/, "");

export const isValidDropdownRangeReference = (reference) => {
  const normalized = normalizeDropdownRangeReference(reference);
  const sheetName = String.raw`(?:'(?:[^']|'')+'|[A-Za-z0-9_.]+)!`;
  const cell = String.raw`\$?[A-Za-z]{1,3}\$?[1-9]\d*`;
  return new RegExp(`^(?:${sheetName})?${cell}(?::${cell})?$`).test(
    normalized,
  );
};

export const createDropdownRangeRule = (reference) => ({
  ...createDropdownRule([]),
  sourceType: "range",
  value1: normalizeDropdownRangeReference(reference),
});

const columnNameToIndex = (name) =>
  String(name)
    .toUpperCase()
    .split("")
    .reduce((index, character) => index * 26 + character.charCodeAt(0) - 64, 0) -
  1;

const columnIndexToName = (index) => {
  let value = index + 1;
  let name = "";
  while (value > 0) {
    value -= 1;
    name = String.fromCharCode(65 + (value % 26)) + name;
    value = Math.floor(value / 26);
  }
  return name;
};

export const shiftDropdownRangeReference = (
  reference,
  rowOffset,
  columnOffset,
) => {
  const normalized = normalizeDropdownRangeReference(reference);
  const match = normalized.match(
    /^((?:'(?:[^']|'')+'|[A-Za-z0-9_.]+)!)?(\$?)([A-Za-z]{1,3})(\$?)([1-9]\d*)(?::(\$?)([A-Za-z]{1,3})(\$?)([1-9]\d*))?$/,
  );
  if (!match) return normalized;

  const shiftCell = (columnAbsolute, columnName, rowAbsolute, rowNumber) => {
    const column = columnNameToIndex(columnName) +
      (columnAbsolute ? 0 : columnOffset);
    const row = Number(rowNumber) - 1 + (rowAbsolute ? 0 : rowOffset);
    if (column < 0 || row < 0) return "#REF!";
    return `${columnAbsolute}${columnIndexToName(column)}${rowAbsolute}${row + 1}`;
  };

  const start = shiftCell(match[2], match[3], match[4], match[5]);
  if (start === "#REF!") return start;
  if (!match[7]) return `${match[1] || ""}${start}`;
  const end = shiftCell(match[6], match[7], match[8], match[9]);
  if (end === "#REF!") return end;
  return `${match[1] || ""}${start}:${end}`;
};

export const getDataValidationRulesByCell = (ranges, rule) => {
  if (rule?.type !== "dropdown" || rule?.sourceType !== "range") return {};
  const rules = {};

  (ranges || []).forEach((range) => {
    const anchorRow = range.row[0];
    const anchorColumn = range.column[0];
    for (let row = range.row[0]; row <= range.row[1]; row += 1) {
      for (
        let column = range.column[0];
        column <= range.column[1];
        column += 1
      ) {
        rules[`${row}_${column}`] = {
          ...rule,
          value1: shiftDropdownRangeReference(
            rule.value1,
            row - anchorRow,
            column - anchorColumn,
          ),
        };
      }
    }
  });

  return rules;
};

const setCelldataValue = (byPosition, row, column, value) => {
  const key = `${row}_${column}`;
  const previous = byPosition.get(key);
  byPosition.set(key, {
    r: row,
    c: column,
    v: {
      ...(previous?.v || {}),
      v: value,
      m: String(value).toUpperCase(),
    },
  });
};

export const applyDataValidation = (
  sheet,
  ranges,
  rule,
  { initializeCheckboxes = false } = {},
) => {
  const dataVerification = { ...(sheet?.dataVerification || {}) };
  const rulesByCell = getDataValidationRulesByCell(ranges, rule);
  const celldataByPosition = new Map(
    (sheet?.celldata || []).map((cell) => [`${cell.r}_${cell.c}`, cell]),
  );

  ranges.forEach((range) => {
    for (let row = range.row[0]; row <= range.row[1]; row += 1) {
      for (
        let column = range.column[0];
        column <= range.column[1];
        column += 1
      ) {
        const key = `${row}_${column}`;
        dataVerification[key] = { ...(rulesByCell[key] || rule) };
        if (initializeCheckboxes) {
          setCelldataValue(
            celldataByPosition,
            row,
            column,
            rule.value2,
          );
        }
      }
    }
  });

  return {
    ...sheet,
    celldata: Array.from(celldataByPosition.values()),
    dataVerification,
  };
};

export const parseDropdownOptions = (values) =>
  Array.from(
    new Set(values.map((value) => value.trim()).filter(Boolean)),
  );

export const getDropdownOptions = (rule) =>
  rule?.sourceType === "range"
    ? []
    : parseDropdownOptions(String(rule?.value1 || "").split(","));

export const requiresExcelDropdownRange = (rule) => {
  const options = getDropdownOptions(rule);
  if (options.length === 0) return false;
  const inlineValue = options.join(",");
  return inlineValue.length > 255 || options.some((option) => option.includes('"'));
};

export const getDataValidationMetadata = (sheet) => {
  const dataVerification = sheet?.dataVerification || {};
  return Object.keys(dataVerification).length > 0 ? dataVerification : undefined;
};

export const toExcelDataValidation = (rule, { formula1 } = {}) => {
  if (!rule) return null;
  if (rule.type === "dropdown") {
    if (rule.sourceType === "range") {
      const sourceFormula = String(rule.value1 || "").trim().replace(/^=/, "");
      if (!sourceFormula) return null;
      return {
        type: "list",
        allowBlank: true,
        showErrorMessage: Boolean(rule.prohibitInput),
        errorStyle: "error",
        formulae: [sourceFormula],
      };
    }
    const values = getDropdownOptions(rule);
    if (values.length === 0) return null;
    const escapedList = values.join(",").replaceAll('"', '""');
    return {
      type: "list",
      allowBlank: true,
      showErrorMessage: Boolean(rule.prohibitInput),
      errorStyle: "error",
      formulae: [formula1 || `"${escapedList}"`],
    };
  }
  return null;
};
