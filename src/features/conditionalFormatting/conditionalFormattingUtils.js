import {
  CONDITIONAL_RULE_TYPES,
  getConditionalFormattingTexts,
} from "./conditionalFormattingConstants.js";

const CONDITIONAL_DISPLAY_KEYS = ["fc", "bg", "bl", "it", "ul"];

const dataToCelldata = (data) => {
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

const columnToName = (index) => {
  let name = "";
  let value = index + 1;
  while (value > 0) {
    value -= 1;
    name = String.fromCharCode(65 + (value % 26)) + name;
    value = Math.floor(value / 26);
  }
  return name;
};

export const columnNameToIndex = (name) => {
  const text = String(name || "").replace(/[^A-Za-z]/g, "").toUpperCase();
  if (!text) return null;
  let value = 0;
  for (const char of text) {
    value = value * 26 + char.charCodeAt(0) - 64;
  }
  return value - 1;
};

const cellToText = (row, column) => `${columnToName(column)}${row + 1}`;

export const rangeToText = (range) => {
  if (!range?.row || !range?.column) return "A1";
  const start = cellToText(range.row[0], range.column[0]);
  const end = cellToText(range.row[1], range.column[1]);
  return start === end ? start : `${start}:${end}`;
};

export const parseCellReference = (text) => {
  const match = String(text || "")
    .trim()
    .replace(/\$/g, "")
    .match(/^([A-Za-z]+)(\d+)$/);
  if (!match) return null;
  const column = columnNameToIndex(match[1]);
  const row = Number(match[2]) - 1;
  if (column == null || row < 0) return null;
  return { row, column };
};

export const parseRangeText = (text) => {
  const clean = String(text || "").trim().replace(/\$/g, "");
  const parts = clean.split(":");
  if (parts.length > 2) return null;
  const start = parseCellReference(parts[0]);
  const end = parseCellReference(parts[1] || parts[0]);
  if (!start || !end) return null;
  return {
    row: [Math.min(start.row, end.row), Math.max(start.row, end.row)],
    column: [
      Math.min(start.column, end.column),
      Math.max(start.column, end.column),
    ],
  };
};

const getCellKey = (row, column) => `${row}_${column}`;

const getCellDisplayValue = (cell) => {
  const value = cell?.v;
  if (!value || typeof value !== "object") return value;
  return value.v ?? value.m ?? "";
};

const toComparableNumber = (value) => {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value.replace(",", "."));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

const compareConditionalValue = (cellValue, ruleValue, ruleValue2, condition) => {
  if (condition === "textContains") {
    return String(cellValue ?? "")
      .toLowerCase()
      .includes(String(ruleValue ?? "").toLowerCase());
  }

  const leftNumber = toComparableNumber(cellValue);
  const rightNumber = toComparableNumber(ruleValue);
  const rightNumber2 = toComparableNumber(ruleValue2);

  if (condition === "equal") {
    if (leftNumber != null && rightNumber != null) return leftNumber === rightNumber;
    return String(cellValue ?? "") === String(ruleValue ?? "");
  }
  if (condition === "notEqual") {
    if (leftNumber != null && rightNumber != null) return leftNumber !== rightNumber;
    return String(cellValue ?? "") !== String(ruleValue ?? "");
  }

  if (leftNumber == null || rightNumber == null) return false;
  if (condition === "greaterThan") return leftNumber > rightNumber;
  if (condition === "lessThan") return leftNumber < rightNumber;
  if (condition === "between") {
    if (rightNumber2 == null) return false;
    const min = Math.min(rightNumber, rightNumber2);
    const max = Math.max(rightNumber, rightNumber2);
    return leftNumber >= min && leftNumber <= max;
  }
  return false;
};

const getActiveRules = (rules) =>
  (rules || []).filter((rule) => rule.enabled !== false && rule.range);

const collectTouchedCellKeys = (rules) => {
  const touched = new Set();
  rules.forEach((rule) => {
    const { row, column } = rule.range;
    for (let r = row[0]; r <= row[1]; r++) {
      for (let c = column[0]; c <= column[1]; c++) {
        touched.add(getCellKey(r, c));
      }
    }
  });
  return touched;
};

const hasConditionalMarker = (value) =>
  Boolean(value && typeof value === "object" && value._dcCf);

const sheetHasConditionalMarkers = (sheet) => {
  if (Array.isArray(sheet.celldata)) {
    return sheet.celldata.some((cell) => hasConditionalMarker(cell?.v));
  }
  if (Array.isArray(sheet.data)) {
    return sheet.data.some(
      (row) => Array.isArray(row) && row.some(hasConditionalMarker),
    );
  }
  return false;
};

// Seules les cellules des plages de règles et celles portant un marqueur
// _dcCf sont mutées ensuite : les autres gardent leur référence d'origine.
const cloneSheetForConditionalFormatting = (sheet, touchedCells) => ({
  ...sheet,
  celldata: (sheet.celldata || dataToCelldata(sheet.data)).map((cell) => {
    if (
      !touchedCells.has(getCellKey(cell.r, cell.c)) &&
      !hasConditionalMarker(cell.v)
    ) {
      return cell;
    }
    return {
      ...cell,
      v:
        cell.v && typeof cell.v === "object"
          ? { ...cell.v, ct: cell.v.ct ? { ...cell.v.ct } : cell.v.ct }
          : cell.v,
    };
  }),
});

const resetConditionalFormattingCells = (sheet) => {
  sheet.celldata.forEach((cell) => {
    if (!cell.v || typeof cell.v !== "object" || !cell.v._dcCf) return;
    const { baseFc, baseBg, baseBl, baseIt, baseUl } = cell.v._dcCf;
    if (baseFc == null) delete cell.v.fc;
    else cell.v.fc = baseFc;
    if (baseBg == null) delete cell.v.bg;
    else cell.v.bg = baseBg;
    if (baseBl == null) delete cell.v.bl;
    else cell.v.bl = baseBl;
    if (baseIt == null) delete cell.v.it;
    else cell.v.it = baseIt;
    if (baseUl == null) delete cell.v.ul;
    else cell.v.ul = baseUl;
    delete cell.v._dcCf;
  });
};

const clearConditionalDisplayStyles = (sheet, touchedCells) => {
  if (!touchedCells.size) return;

  sheet.celldata.forEach((cell) => {
    if (!touchedCells.has(getCellKey(cell.r, cell.c)) || !cell.v) return;
    const v = cell.v;
    if (typeof v !== "object") return;
    delete v.fc;
    delete v.bg;
    delete v.bl;
    delete v.it;
    delete v.ul;
  });
};

const buildCellMap = (sheet) => {
  const map = new Map();
  sheet.celldata.forEach((cell) => {
    map.set(getCellKey(cell.r, cell.c), cell);
  });
  return map;
};

const resolveRuleCompareValue = (rule, row, cellMap) => {
  if (rule.condition === "between") {
    return [rule.value, rule.value2];
  }
  if (rule.compareType === "cell") {
    const ref = parseCellReference(rule.reference);
    const refCell = ref ? cellMap.get(getCellKey(ref.row, ref.column)) : null;
    return [getCellDisplayValue(refCell), null];
  }
  if (rule.compareType === "sameRowColumn") {
    const column = columnNameToIndex(rule.reference);
    const refCell =
      column == null ? null : cellMap.get(getCellKey(row, column));
    return [getCellDisplayValue(refCell), null];
  }
  return [rule.value, null];
};

const applyConditionalStyle = (cell, rule) => {
  if (!cell.v || typeof cell.v !== "object") cell.v = {};
  if (!cell.v._dcCf) {
    cell.v._dcCf = {
      baseFc: cell.v.fc ?? null,
      baseBg: cell.v.bg ?? null,
      baseBl: cell.v.bl ?? null,
      baseIt: cell.v.it ?? null,
      baseUl: cell.v.ul ?? null,
    };
  }
  if (rule.textColor) cell.v.fc = rule.textColor;
  if (rule.backgroundColor) cell.v.bg = rule.backgroundColor;
  if (rule.bold) cell.v.bl = 1;
  if (rule.italic) cell.v.it = 1;
  if (rule.underline) cell.v.ul = 1;
};

export const applyConditionalFormatting = (sheets) =>
  sheets.map((originalSheet) => {
    const rules = getActiveRules(originalSheet.customConditionalFormatting);
    if (!rules.length && !sheetHasConditionalMarkers(originalSheet)) {
      return originalSheet;
    }
    const touchedCells = collectTouchedCellKeys(rules);
    const sheet = cloneSheetForConditionalFormatting(originalSheet, touchedCells);
    resetConditionalFormattingCells(sheet);
    if (!rules.length) return sheet;
    clearConditionalDisplayStyles(sheet, touchedCells);

    const cellMap = buildCellMap(sheet);
    rules.forEach((rule) => {
      const { row, column } = rule.range;
      for (let r = row[0]; r <= row[1]; r++) {
        for (let c = column[0]; c <= column[1]; c++) {
          let cell = cellMap.get(getCellKey(r, c));
          if (!cell) {
            cell = { r, c, v: {} };
            sheet.celldata.push(cell);
            cellMap.set(getCellKey(r, c), cell);
          }
          const cellValue = getCellDisplayValue(cell);
          const [value1, value2] = resolveRuleCompareValue(rule, r, cellMap);
          if (
            compareConditionalValue(cellValue, value1, value2, rule.condition)
          ) {
            applyConditionalStyle(cell, rule);
          }
        }
      }
    });

    return sheet;
  });

export const stripConditionalFormattingMarkers = (sheets) =>
  sheets.map((sheet) => ({
    ...sheet,
    celldata: (sheet.celldata || []).map((cell) => {
      if (!cell.v || typeof cell.v !== "object" || !cell.v._dcCf) return cell;
      const v = { ...cell.v };
      const { baseFc, baseBg, baseBl, baseIt, baseUl } = v._dcCf;
      if (baseFc == null) delete v.fc;
      else v.fc = baseFc;
      if (baseBg == null) delete v.bg;
      else v.bg = baseBg;
      if (baseBl == null) delete v.bl;
      else v.bl = baseBl;
      if (baseIt == null) delete v.it;
      else v.it = baseIt;
      if (baseUl == null) delete v.ul;
      else v.ul = baseUl;
      delete v._dcCf;
      return { ...cell, v };
    }),
  }));

const interpolate = (template, values) =>
  String(template || "").replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");

export const describeConditionalRule = (rule, texts) => {
  const cf = getConditionalFormattingTexts(texts);
  const type = CONDITIONAL_RULE_TYPES.find((item) => item.value === rule.condition);
  if (!type) return "";
  if (rule.condition === "between") {
    return interpolate(cf.descriptions.between, {
      value1: rule.value || "...",
      value2: rule.value2 || "...",
    });
  }
  if (rule.condition === "textContains") {
    return interpolate(cf.descriptions.textContains, {
      value: rule.value || "",
    });
  }
  const compareLabel =
    rule.compareType === "sameRowColumn"
      ? interpolate(cf.descriptions.sameRowColumn, {
          reference: String(rule.reference || "").toUpperCase(),
        })
      : rule.compareType === "cell"
        ? interpolate(cf.descriptions.fixedCell, {
            reference: String(rule.reference || "").toUpperCase(),
          })
        : rule.value || "...";
  return interpolate(cf.descriptions.comparison, {
    cell: cf.descriptions.cell,
    operator: type.symbol,
    target: compareLabel,
  });
};

export const getRulePreviewStyle = (rule) => ({
  color: rule.textColor || "#202124",
  background: rule.backgroundColor || "#ffffff",
  fontWeight: rule.bold ? 700 : 400,
  fontStyle: rule.italic ? "italic" : "normal",
  textDecoration: rule.underline ? "underline" : "none",
});

export const createConditionalFormatApiCalls = (sheets) => {
  const calls = [];
  sheets.forEach((sheet) => {
    const rules = getActiveRules(sheet.customConditionalFormatting);
    if (!rules.length) return;

    const touchedCells = collectTouchedCellKeys(rules);
    const cellMap = buildCellMap(sheet);
    // La grille vivante (sheet.data, émise par onChange) sert de référence :
    // seuls les styles qui diffèrent réellement génèrent un appel API.
    const liveData = Array.isArray(sheet.data) ? sheet.data : null;
    touchedCells.forEach((key) => {
      const [row, column] = key.split("_").map(Number);
      const cellValue = cellMap.get(key)?.v;
      const liveValue = liveData?.[row]?.[column];
      const options = sheet.id != null ? { id: sheet.id } : {};

      CONDITIONAL_DISPLAY_KEYS.forEach((cellKey) => {
        const desired =
          cellValue && typeof cellValue === "object" ? cellValue[cellKey] : undefined;
        const live =
          liveValue && typeof liveValue === "object" ? liveValue[cellKey] : undefined;
        if (liveData && (desired ?? null) === (live ?? null)) return;
        calls.push({
          name: "setCellFormat",
          args: [row, column, cellKey, desired, options],
        });
      });
    });
  });
  return calls;
};
