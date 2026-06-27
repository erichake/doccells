import { applyImportedFormulaResults } from "./importedFormulaResults.js";
import {
  isDefaultSheetName,
  isWorkbookProtected,
  normalizeShowGridLines,
  setWorkbookProtection,
} from "../workbook/workbookUtils.js";

const normalizeImportedMerges = (sheet) => {
  if (!sheet) return;
  sheet.config ||= {};
  sheet.config.merge ||= {};

  const celldata = sheet.celldata || [];
  const cellByPosition = new Map();
  celldata.forEach((cell) => {
    cellByPosition.set(`${cell.r}_${cell.c}`, cell);
  });

  Object.assign(
    sheet.config.merge,
    Object.fromEntries(
      celldata
        .map((cell) => cell.v?.mc)
        .filter((merge) => merge?.rs && merge?.cs)
        .map((merge) => [`${merge.r}_${merge.c}`, merge]),
    ),
  );

  const merges = Object.values(sheet.config.merge);
  merges.forEach((merge) => {
    const mainCell = cellByPosition.get(`${merge.r}_${merge.c}`);
    if (!mainCell) return;
    mainCell.v ||= {};
    mainCell.v.mc = {
      r: merge.r,
      c: merge.c,
      rs: merge.rs || 1,
      cs: merge.cs || 1,
    };
  });

  merges.forEach((merge) => {
    const { r, c, rs = 1, cs = 1 } = merge;
    for (let row = r; row < r + rs; row++) {
      for (let col = c; col < c + cs; col++) {
        if (row === r && col === c) continue;
        const key = `${row}_${col}`;
        const secondaryCell = cellByPosition.get(key);
        if (secondaryCell) {
          secondaryCell.v ||= {};
          secondaryCell.v.mc = { r, c };
        } else {
          const cell = { r: row, c: col, v: { mc: { r, c } } };
          celldata.push(cell);
          cellByPosition.set(key, cell);
        }
      }
    }
  });

  sheet.celldata = celldata.filter((cell) => !("v" in cell && cell.v?.v === null));
};

const collectFormulaMetadata = (sheets) => {
  const formulas = {};

  sheets.forEach((sheet, sheetIndex) => {
    if (sheet.celldata) {
      sheet.celldata.forEach((cell) => {
        if (cell.v?.f) {
          const key = `${sheetIndex}-${cell.r}-${cell.c}`;
          formulas[key] = cell.v.f;
          cell.v.VF = { v: cell.v.v, f: cell.v.f };
        } else if (cell.v?.v === undefined) {
          if (
            Array.isArray(cell.v?.ct?.s) &&
            cell.v.ct.s.length > 0 &&
            cell.v.ct.s[0]?.v
          ) {
            cell.v.v = cell.v.ct.s[0].v;
            cell.v.m = cell.v.ct.s[0].v;
          }
        }
      });
    }
  });

  return formulas;
};

// Convertit les images du format importeur Excel (objet keyed avec .default)
// vers le tableau {id, src, left, top, width, height} attendu par FortuneSheet.
const convertImages = (images) => {
  if (!images) return undefined;
  const entries = Array.isArray(images)
    ? images.map((img, i) => [img.id ?? `img_${i}`, img])
    : Object.entries(images);
  const result = [];
  for (const [key, img] of entries) {
    if (!img?.src) continue;
    result.push({
      id: img.id ?? key,
      src: img.src,
      left: img.left ?? img.default?.left ?? 0,
      top: img.top ?? img.default?.top ?? 0,
      width: img.width ?? img.default?.width ?? 144,
      height: img.height ?? img.default?.height ?? 84,
    });
  }
  return result.length > 0 ? result : undefined;
};

const formatImportedSheets = (sheets, sheetPrefix) =>
  sheets.map((sheet, index) => {
    const sheetId = index.toString();
    const calcChain = Array.isArray(sheet.calcChain)
      ? sheet.calcChain.map((entry) => ({ ...entry, id: sheetId }))
      : undefined;
    return {
      name: isDefaultSheetName(sheet.name)
        ? `${sheetPrefix}${index + 1}`
        : sheet.name,
      id: sheetId,
      status: 1,
      order: index,
      celldata: sheet.celldata || [],
      calcChain,
      filter: sheet.filter,
      filter_select: sheet.filter_select,
      customConditionalFormatting: sheet.customConditionalFormatting || [],
      showGridLines: normalizeShowGridLines(sheet.showGridLines),
      config: {
        columnlen: sheet.config?.columnlen || {},
        rowlen: sheet.config?.rowlen || {},
        colhidden: sheet.config?.colhidden,
        rowhidden: sheet.config?.rowhidden,
        borderInfo: sheet.config?.borderInfo || [],
        merge: sheet.config?.merge || {},
        authority: sheet.config?.authority,
      },
      images: convertImages(sheet.images),
    };
  });

export const normalizeImportedWorkbook = (sheets, { sheetPrefix }) => {
  sheets.forEach(normalizeImportedMerges);
  applyImportedFormulaResults(sheets);

  const formulas = collectFormulaMetadata(sheets);
  const formattedSheets = formatImportedSheets(sheets, sheetPrefix);
  const normalizedSheets = isWorkbookProtected(formattedSheets)
    ? setWorkbookProtection(formattedSheets, 1)
    : formattedSheets;

  return {
    formulas,
    sheets: normalizedSheets,
  };
};
