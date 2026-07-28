const CELL_REF_RE = /^\$?([A-Z]{1,3})\$?(\d+)$/i;
const RANGE_REF_RE =
  /^(?:'((?:[^']|'')+)'|([^'!]+))!(\$?[A-Z]{1,3}\$?\d+)(?::(\$?[A-Z]{1,3}\$?\d+))?$/i;

export const quoteSheetName = (name) =>
  `'${String(name || "").replace(/'/g, "''")}'`;

export const columnNameToIndex = (name) => {
  let value = 0;
  for (const character of String(name || "").toUpperCase()) {
    value = value * 26 + character.charCodeAt(0) - 64;
  }
  return value - 1;
};

const parseCell = (text) => {
  const match = String(text || "").match(CELL_REF_RE);
  if (!match) return null;
  return {
    row: Number(match[2]) - 1,
    column: columnNameToIndex(match[1]),
  };
};

export const parseDefinedNameReference = (refersTo) => {
  const text = String(refersTo || "").trim().replace(/^=/, "");
  const match = text.match(RANGE_REF_RE);
  if (!match) return null;
  const start = parseCell(match[3]);
  const end = parseCell(match[4] || match[3]);
  if (!start || !end) return null;
  return {
    sheetName: (match[1] || match[2]).replace(/''/g, "'"),
    range: {
      row: [Math.min(start.row, end.row), Math.max(start.row, end.row)],
      column: [
        Math.min(start.column, end.column),
        Math.max(start.column, end.column),
      ],
      row_focus: start.row,
      column_focus: start.column,
    },
  };
};

const columnIndexToName = (index) => {
  let result = "";
  let value = Number(index) + 1;
  while (value > 0) {
    value -= 1;
    result = String.fromCharCode(65 + (value % 26)) + result;
    value = Math.floor(value / 26);
  }
  return result;
};

export const selectionToDefinedNameReference = (sheetName, selection) => {
  const row = selection?.row || [0, 0];
  const column = selection?.column || [0, 0];
  const start = `$${columnIndexToName(column[0])}$${row[0] + 1}`;
  const end = `$${columnIndexToName(column[1])}$${row[1] + 1}`;
  return `${quoteSheetName(sheetName)}!${start}${start === end ? "" : `:${end}`}`;
};

export const isSystemDefinedName = (name) =>
  String(name || "").toLowerCase().startsWith("_xlnm.");

export const isValidDefinedName = (name) => {
  const text = String(name || "").trim();
  if (!/^[\p{L}_\\][\p{L}\p{N}_.\\]*$/u.test(text)) return false;
  if (/^[A-Z]{1,3}\d+$/i.test(text) || /^R\d+C\d+$/i.test(text)) return false;
  return text.length <= 255;
};

export const getVisibleDefinedNames = (definedNames) =>
  (definedNames || []).filter(
    (item) => !item.hidden && !isSystemDefinedName(item.name),
  );

export const findDefinedName = (definedNames, name, activeSheetId) => {
  const matches = (definedNames || []).filter(
    (item) => item.name.toLowerCase() === String(name || "").toLowerCase(),
  );
  return (
    matches.find((item) => item.scopeSheetId === activeSheetId) ||
    matches.find((item) => item.scopeSheetId == null) ||
    null
  );
};

const escapeRegExp = (value) =>
  String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const replaceDefinedNamesInFormula = (
  formula,
  definedNames,
  activeSheetId,
) => {
  const applicableByName = new Map();
  getVisibleDefinedNames(definedNames)
    .filter((item) => item.scopeSheetId == null)
    .forEach((item) => applicableByName.set(item.name.toLowerCase(), item));
  getVisibleDefinedNames(definedNames)
    .filter(
      (item) =>
        item.scopeSheetId != null &&
        String(item.scopeSheetId) === String(activeSheetId),
    )
    .forEach((item) => applicableByName.set(item.name.toLowerCase(), item));
  const applicable = Array.from(applicableByName.values())
    .sort((left, right) => right.name.length - left.name.length);
  if (applicable.length === 0) return formula;

  return String(formula || "")
    .split(/("(?:[^"]|"")*")/)
    .map((segment, index) => {
      if (index % 2 === 1) return segment;
      let result = segment;
      applicable.forEach((item) => {
        const pattern = new RegExp(
          `(^|[^\\p{L}\\p{N}_.\\\\])${escapeRegExp(item.name)}(?=$|[^\\p{L}\\p{N}_.\\\\])`,
          "giu",
        );
        result = result.replace(
          pattern,
          (_match, prefix) => `${prefix}${item.refersTo.replace(/^=/, "")}`,
        );
      });
      return result;
    })
    .join("");
};

export const replaceReferenceFunctionsInFormula = (
  formula,
  currentRow = 0,
  currentColumn = 0,
) =>
  String(formula || "")
    .split(/("(?:[^"]|"")*")/)
    .map((segment, index) => {
      if (index % 2 === 1) return segment;
      return segment
        .replace(
          /\bROW\s*\(\s*(?:(?:'(?:[^']|'')+'|[^'!()\s]+)!)?\$?[A-Z]{1,3}\$?(\d+)\s*\)/gi,
          (_match, row) => String(Number(row)),
        )
        .replace(
          /\bCOLUMN\s*\(\s*(?:(?:'(?:[^']|'')+'|[^'!()\s]+)!)?\$?([A-Z]{1,3})\$?\d+\s*\)/gi,
          (_match, column) => String(columnNameToIndex(column) + 1),
        )
        .replace(/\bROW\s*\(\s*\)/gi, String(currentRow + 1))
        .replace(/\bCOLUMN\s*\(\s*\)/gi, String(currentColumn + 1));
    })
    .join("");

export const upsertDefinedName = (definedNames, nextName) => {
  const key = `${nextName.scopeSheetId ?? "workbook"}:${nextName.name.toLowerCase()}`;
  const result = (definedNames || []).filter(
    (item) =>
      `${item.scopeSheetId ?? "workbook"}:${item.name.toLowerCase()}` !== key,
  );
  return [...result, nextName];
};
