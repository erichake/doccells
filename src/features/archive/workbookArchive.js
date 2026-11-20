// Format d'archivage des classeurs (WORKBOOK_FORMAT.md) :
//
//   { format: "doccells", version: 1, definedNames: [...], sheets: [...] }
//
// - writeWorkbookArchive écrit la version courante, avec les seuls champs de
//   feuille décrits dans WORKBOOK_FORMAT.md, dans un ordre fixe ;
// - readWorkbookArchive lit toutes les versions publiées : une archive plus
//   ancienne est convertie, version par version, jusqu'à la version courante
//   (MIGRATIONS). Une version publiée n'est jamais modifiée ; un changement
//   de format passe par une nouvelle version et sa conversion.

export const WORKBOOK_ARCHIVE_FORMAT = "doccells";
export const WORKBOOK_ARCHIVE_VERSION = 1;

// Champs de feuille archivés (version 1), dans l'ordre d'écriture.
export const ARCHIVED_SHEET_FIELDS = [
  "name",
  "id",
  "order",
  "status",
  "hide",
  "color",
  "row",
  "column",
  "addRows",
  "defaultRowHeight",
  "defaultColWidth",
  "zoomRatio",
  "showGridLines",
  "frozen",
  "config",
  "celldata",
  "calcChain",
  "images",
  "hyperlink",
  "dataVerification",
  "filter",
  "filter_select",
  "luckysheet_conditionformat_save",
  "luckysheet_alternateformat_save",
  "customConditionalFormatting",
  "customCharts",
  "pivotTable",
  "isPivotTable",
];

// Champs de feuille connus et volontairement non archivés : dérivés des
// autres ou propres à la session (voir WORKBOOK_FORMAT.md).
export const UNARCHIVED_SHEET_FIELDS = [
  "data",
  "definedNames",
  "luckysheet_select_save",
  "luckysheet_selection_range",
  "scrollLeft",
  "scrollTop",
  "dynamicArray",
  "dynamicArray_compute",
];

const invalid = (reason) => new Error(`Invalid workbook: ${reason}`);

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

// Copie JSON : l'archive ne contient que des données JSON, sans référence à
// l'état vivant de DocCells.
const jsonCopy = (value) => JSON.parse(JSON.stringify(value));

const archiveSheet = (sheet) => {
  const archived = {};
  for (const field of ARCHIVED_SHEET_FIELDS) {
    if (sheet[field] !== undefined) archived[field] = sheet[field];
  }
  return archived;
};

/**
 * @param sheets feuilles DocCells (celldata normalisé, sans marqueurs de mise
 *   en forme conditionnelle), noms définis portés par les feuilles
 * @returns archive de la version courante (objet JSON)
 */
export const writeWorkbookArchive = (sheets) => {
  if (!Array.isArray(sheets) || sheets.length === 0) throw invalid("no sheet");
  const definedNames = sheets.find((sheet) => Array.isArray(sheet?.definedNames))?.definedNames || [];
  return jsonCopy({
    format: WORKBOOK_ARCHIVE_FORMAT,
    version: WORKBOOK_ARCHIVE_VERSION,
    definedNames,
    sheets: sheets.map(archiveSheet),
  });
};

// Conversions d'une version à la suivante : MIGRATIONS[n] transforme une
// archive de version n en archive de version n + 1. Aucune pour l'instant.
const MIGRATIONS = {};

const validateCurrentVersion = (archive) => {
  if (!Array.isArray(archive.sheets) || archive.sheets.length === 0) throw invalid("no sheet");
  if (archive.definedNames !== undefined && !Array.isArray(archive.definedNames)) {
    throw invalid("definedNames must be an array");
  }
  archive.sheets.forEach((sheet, index) => {
    if (!isPlainObject(sheet)) throw invalid(`sheet ${index} is not an object`);
    if (typeof sheet.name !== "string" || sheet.name === "") {
      throw invalid(`sheet ${index} has no name`);
    }
    if (sheet.celldata !== undefined && !Array.isArray(sheet.celldata)) {
      throw invalid(`sheet ${sheet.name}: celldata must be an array`);
    }
    if (sheet.config !== undefined && !isPlainObject(sheet.config)) {
      throw invalid(`sheet ${sheet.name}: config must be an object`);
    }
  });
};

/**
 * Lit une archive de n'importe quelle version publiée.
 * @returns { sheets, definedNames } : feuilles prêtes pour DocCells (copie),
 *   les noms définis étant aussi rattachés à chaque feuille.
 */
export const readWorkbookArchive = (input) => {
  if (!isPlainObject(input) || input.format !== WORKBOOK_ARCHIVE_FORMAT) {
    throw invalid('expected { format: "doccells", version, sheets }');
  }
  if (!Number.isInteger(input.version) || input.version < 1) throw invalid("bad version");
  if (input.version > WORKBOOK_ARCHIVE_VERSION) {
    throw new Error(`Unsupported workbook version: ${input.version}`);
  }
  let archive = jsonCopy(input);
  for (let version = archive.version; version < WORKBOOK_ARCHIVE_VERSION; version += 1) {
    archive = MIGRATIONS[version](archive);
    archive.version = version + 1;
  }
  validateCurrentVersion(archive);
  const definedNames = archive.definedNames || [];
  return {
    definedNames,
    sheets: archive.sheets.map((sheet) => ({
      ...archiveSheet(sheet),
      definedNames: jsonCopy(definedNames),
    })),
  };
};
