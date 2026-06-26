export const CONDITIONAL_RULE_TYPES = [
  { value: "lessThan", symbol: "<" },
  { value: "greaterThan", symbol: ">" },
  { value: "equal", symbol: "=" },
  { value: "notEqual", symbol: "!=" },
  { value: "between", symbol: "[]" },
  { value: "textContains", symbol: "abc" },
];

export const CONDITIONAL_COMPARE_TYPES = [
  { value: "value" },
  { value: "cell" },
  { value: "sameRowColumn" },
];

export const DEFAULT_CONDITIONAL_RULE = {
  id: "",
  enabled: true,
  rangeText: "A1",
  range: { row: [0, 0], column: [0, 0] },
  condition: "lessThan",
  compareType: "value",
  value: "",
  value2: "",
  reference: "",
  textColor: "#d93025",
  backgroundColor: "",
  bold: false,
  italic: false,
  underline: false,
};

export const DEFAULT_CONDITIONAL_FORMATTING_TEXTS = {
  toolbar: "Conditional formatting",
  title: "Conditional formatting",
  activeSheet: "Active sheet",
  appliedRules: "Applied rules",
  noRules: "No rules for this sheet.",
  editRule: "Edit rule",
  newRule: "New rule",
  applyTo: "Apply to",
  condition: "Condition",
  compareTo: "Compare to",
  minValue: "Minimum value",
  maxValue: "Maximum value",
  cell: "Cell",
  sameRowColumn: "Same-row column",
  text: "Text",
  value: "Value",
  textColor: "Text",
  backgroundColor: "Fill",
  style: "Style",
  preview: "Cell preview",
  close: "Close",
  reset: "New",
  save: "Save",
  add: "Add",
  edit: "Edit",
  delete: "Delete",
  none: "None",
  sample: "Aa",
  textPlaceholder: "late",
  conditions: {
    lessThan: "is less than",
    greaterThan: "is greater than",
    equal: "is equal to",
    notEqual: "is different from",
    between: "is between",
    textContains: "contains text",
  },
  compareTypes: {
    value: "a fixed value",
    cell: "a fixed cell",
    sameRowColumn: "a same-row column",
  },
  descriptions: {
    cell: "cell",
    between: "cell between {value1} and {value2}",
    textContains: "text contains \"{value}\"",
    sameRowColumn: "column {reference} same row",
    fixedCell: "cell {reference}",
    comparison: "cell {operator} {target}",
  },
  errors: {
    range: "The range must look like A2:A100.",
    between: "Enter two values for the between condition.",
    text: "Enter the text to search for.",
    compareCell: "The comparison cell must look like B1.",
    compareColumn: "The comparison column must look like B.",
    compareValue: "Enter a comparison value.",
    style: "Choose at least one color or style.",
  },
  styleLabels: {
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
  },
};

export const getConditionalFormattingTexts = (texts = {}) => ({
  ...DEFAULT_CONDITIONAL_FORMATTING_TEXTS,
  ...texts,
  conditions: {
    ...DEFAULT_CONDITIONAL_FORMATTING_TEXTS.conditions,
    ...(texts.conditions || {}),
  },
  compareTypes: {
    ...DEFAULT_CONDITIONAL_FORMATTING_TEXTS.compareTypes,
    ...(texts.compareTypes || {}),
  },
  descriptions: {
    ...DEFAULT_CONDITIONAL_FORMATTING_TEXTS.descriptions,
    ...(texts.descriptions || {}),
  },
  errors: {
    ...DEFAULT_CONDITIONAL_FORMATTING_TEXTS.errors,
    ...(texts.errors || {}),
  },
  styleLabels: {
    ...DEFAULT_CONDITIONAL_FORMATTING_TEXTS.styleLabels,
    ...(texts.styleLabels || {}),
  },
});
