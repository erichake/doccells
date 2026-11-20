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

// FortuneSheet ne recalcule que les formules listées dans calcChain. Une
// feuille fournie par programme (window.setSheetData) peut ne pas l'avoir :
// on la reconstruit depuis les formules de celldata. Les feuilles sans
// identifiant en reçoivent un, pour que calcChain le désigne.
export const ensureSheetCalcChains = (sheets) => {
  if (!Array.isArray(sheets)) return sheets;
  const usedIds = new Set(sheets.map((sheet) => sheet?.id).filter((id) => id != null));
  let nextId = 0;
  const freshId = () => {
    while (usedIds.has(String(nextId))) nextId += 1;
    usedIds.add(String(nextId));
    return String(nextId);
  };
  return sheets.map((sheet) => {
    if (!sheet || typeof sheet !== "object") return sheet;
    const id = sheet.id ?? freshId();
    if (Array.isArray(sheet.calcChain) && sheet.id != null) return sheet;
    const cells = Array.isArray(sheet.celldata) ? sheet.celldata : dataToCelldata(sheet.data);
    const calcChain = Array.isArray(sheet.calcChain)
      ? sheet.calcChain.map((entry) => ({ ...entry, id }))
      : cells
          .filter((cell) => typeof cell?.v?.f === "string" && cell.v.f.startsWith("="))
          .map((cell) => ({ r: cell.r, c: cell.c, id }));
    return { ...sheet, id, calcChain };
  });
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
