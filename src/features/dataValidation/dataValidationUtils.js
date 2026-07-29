const isFiniteRange = (range) =>
  Array.isArray(range?.row) &&
  Array.isArray(range?.column) &&
  [...range.row, ...range.column].every(Number.isFinite);

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
  value1: options.join(","),
  value2: "",
  checked: false,
  remote: false,
  prohibitInput: true,
  hintShow: false,
  hintText: "",
});

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
        dataVerification[`${row}_${column}`] = { ...rule };
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
  values.map((value) => value.trim()).filter(Boolean);

export const getDataValidationMetadata = (sheet) => {
  const dataVerification = sheet?.dataVerification || {};
  return Object.keys(dataVerification).length > 0 ? dataVerification : undefined;
};

export const toExcelDataValidation = (rule) => {
  if (!rule) return null;
  if (rule.type === "dropdown") {
    const values = String(rule.value1 || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    if (values.length === 0) return null;
    const escapedList = values.join(",").replaceAll('"', '""');
    return {
      type: "list",
      allowBlank: true,
      showErrorMessage: Boolean(rule.prohibitInput),
      errorStyle: "error",
      formulae: [`"${escapedList}"`],
    };
  }
  return null;
};
