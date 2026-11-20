// Références de cellules du mode intégré : notation A1 avec nom de feuille
// obligatoire (« Feuille1!B3 », « 'Données 2'!A1:C10 »), pour qu'une feuille
// déplacée ne change pas le sens d'une référence.

export const MAX_REFERENCE_CELLS = 10000;
const MAX_COLUMNS = 16384;

const REFERENCE =
  /^(?:'((?:[^']|'')+)'|([^'!]+))!\$?([A-Za-z]{1,3})\$?(\d+)(?::\$?([A-Za-z]{1,3})\$?(\d+))?$/;

const columnIndex = (letters) =>
  letters
    .toUpperCase()
    .split("")
    .reduce((value, character) => value * 26 + character.charCodeAt(0) - 64, 0) - 1;

export const columnName = (index) => {
  let name = "";
  for (let n = index + 1; n > 0; n = Math.floor((n - 1) / 26)) {
    name = String.fromCharCode(65 + ((n - 1) % 26)) + name;
  }
  return name;
};

const invalid = (text, reason) =>
  new Error(`Invalid reference: ${text}${reason ? ` (${reason})` : ""}`);

/**
 * @returns { sheetName, r0, c0, r1, c1 } (bornes incluses, r0 <= r1, c0 <= c1)
 */
export const parseReference = (text) => {
  if (typeof text !== "string") throw invalid(String(text));
  const match = text.trim().match(REFERENCE);
  if (!match) {
    throw invalid(text, text.includes("!") ? "" : "sheet name required");
  }
  const sheetName = match[1] != null ? match[1].replace(/''/g, "'") : match[2].trim();
  const startColumn = columnIndex(match[3]);
  const startRow = Number(match[4]) - 1;
  const endColumn = match[5] ? columnIndex(match[5]) : startColumn;
  const endRow = match[6] ? Number(match[6]) - 1 : startRow;
  if (startRow < 0 || endRow < 0 || startColumn >= MAX_COLUMNS || endColumn >= MAX_COLUMNS) {
    throw invalid(text);
  }
  const reference = {
    sheetName,
    r0: Math.min(startRow, endRow),
    r1: Math.max(startRow, endRow),
    c0: Math.min(startColumn, endColumn),
    c1: Math.max(startColumn, endColumn),
  };
  const cells = (reference.r1 - reference.r0 + 1) * (reference.c1 - reference.c0 + 1);
  if (cells > MAX_REFERENCE_CELLS) throw invalid(text, `more than ${MAX_REFERENCE_CELLS} cells`);
  return reference;
};

// Nom de feuille entre apostrophes sauf s'il n'a que des lettres, chiffres et
// soulignés (règle de FortuneSheet).
const formatSheetName = (name) =>
  /^[A-Za-z0-9_À-ʯ]+$/.test(name) ? name : `'${name.replace(/'/g, "''")}'`;

// Forme canonique : « Feuille1!B2:C3 », sans $.
export const formatReference = ({ sheetName, r0, c0, r1, c1 }) => {
  const start = `${columnName(c0)}${r0 + 1}`;
  const end = `${columnName(c1)}${r1 + 1}`;
  return `${formatSheetName(sheetName)}!${start === end ? start : `${start}:${end}`}`;
};
