export const CONDITIONAL_RULE_TYPES = [
  { value: "lessThan", label: "est inferieure a", symbol: "<" },
  { value: "greaterThan", label: "est superieure a", symbol: ">" },
  { value: "equal", label: "est egale a", symbol: "=" },
  { value: "notEqual", label: "est differente de", symbol: "!=" },
  { value: "between", label: "est comprise entre", symbol: "[]" },
  { value: "textContains", label: "contient le texte", symbol: "abc" },
];

export const CONDITIONAL_COMPARE_TYPES = [
  { value: "value", label: "une valeur fixe" },
  { value: "cell", label: "une cellule fixe" },
  { value: "sameRowColumn", label: "une colonne meme ligne" },
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
};
