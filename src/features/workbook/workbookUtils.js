const DEFAULT_SHEET_NAME_RE = /^(Sheet|Feuille|Hoja|工作表)\d+$/;

export const isDefaultSheetName = (name) =>
  !name || DEFAULT_SHEET_NAME_RE.test(name);

export const normalizeShowGridLines = (showGridLines) => {
  if (showGridLines == null) return true;
  return !(showGridLines === "0" || showGridLines === 0 || showGridLines === false);
};

export const areGridLinesHidden = (sheets) =>
  Array.isArray(sheets) &&
  sheets.length > 0 &&
  sheets.every((sheet) => !normalizeShowGridLines(sheet?.showGridLines));

export const setWorkbookGridLines = (sheets, showGridLines) =>
  sheets.map((sheet) => ({
    ...sheet,
    showGridLines,
  }));

export const getWorkbookGridLinesPreference = (sheets) =>
  areGridLinesHidden(sheets) ? false : true;

export const getDefaultSheetNumber = (name, fallback) => {
  const match = String(name || "").match(/\d+$/);
  return match ? Number(match[0]) : fallback;
};

export const getAvailableDefaultSheetName = (
  sheets,
  preferredNumber,
  sheetPrefix,
) => {
  const usedNames = new Set((sheets || []).map((sheet) => sheet?.name));
  let number = Math.max(1, preferredNumber || 1);
  let name = `${sheetPrefix}${number}`;
  while (usedNames.has(name)) {
    number += 1;
    name = `${sheetPrefix}${number}`;
  }
  return name;
};

export const dataToCelldata = (data) => {
  const celldata = [];
  if (!Array.isArray(data)) return celldata;
  data.forEach((row, r) => {
    if (!Array.isArray(row)) return;
    row.forEach((cell, c) => {
      if (cell == null) return;
      celldata.push({
        r,
        c,
        v:
          typeof cell === "object"
            ? cell
            : { v: cell, m: String(cell) },
      });
    });
  });
  return celldata;
};

export const isSheetProtected = (sheet) =>
  sheet?.config?.authority?.sheet === 1 ||
  sheet?.config?.authority?.sheet === "1";

export const isWorkbookProtected = (sheets) =>
  Array.isArray(sheets) && sheets.some(isSheetProtected);

export const setWorkbookProtection = (sheets, sheetProtectionValue) =>
  sheets.map((sheet) => ({
    ...sheet,
    config: {
      ...sheet.config,
      authority: {
        ...(sheet.config?.authority || {}),
        sheet: sheetProtectionValue,
      },
    },
  }));
