import saveAs from "file-saver";
import {
  patchWorkbookWithNativeCharts,
} from "../features/charts/excelChartOoxml.js";
import { DOCCELLS_METADATA_SHEET_NAME } from "../features/charts/chartUtils.js";

export const exportToExcel = async (
  sheetsData,
  {
    fileName = "export.xlsx",
    returnBase64 = false,
    returnBlob = false,
  } = {},
) => {
  const convertColor = (hex) => {
    if (!hex || !hex.startsWith("#")) return undefined;
    const cleanHex = hex.replace("#", "").toUpperCase();
    return `FF${cleanHex}`;
  };
  const shouldKeepCellValueAsText = (cellValue) => {
    const type = cellValue?.ct?.t;
    return type === "s" || type === "inlineStr" || type === "str";
  };
  const getExcelNumberFormat = (cellValue) => {
    const format = cellValue?.ct?.fa;
    if (!format || format === "General" || format === "@") return undefined;
    return format;
  };
  const sanitizeCellValue = (value, cellValue) => {
    if (value === null || value === undefined) {
      return undefined;
    }
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : undefined;
    }
    const format = getExcelNumberFormat(cellValue);
    const text = String(value).trim();
    if (format && !shouldKeepCellValueAsText(cellValue) && numericTextPattern.test(text)) {
      const numericValue = Number(text);
      return Number.isFinite(numericValue) ? numericValue : value;
    }
    return value;
  };
  const numericTextPattern = /^-?(?:\d+|\d*\.\d+)(?:[eE][+-]?\d+)?$/;
  const hasBinaryFloatTail = (text) =>
    /\.\d*(?:0{6,}\d*|9{6,}\d*)$/i.test(text);
  const sanitizeFormulaResult = (value, cellValue) => {
    const result = sanitizeCellValue(value, cellValue);
    if (typeof result !== "string") return result;

    const text = result.trim();
    if (!text || !numericTextPattern.test(text)) return result;

    if (shouldKeepCellValueAsText(cellValue) && !hasBinaryFloatTail(text)) return result;

    const numericResult = Number(text);
    return Number.isFinite(numericResult) ? numericResult : result;
  };
  const normalizeShowGridLines = (showGridLines) => {
    if (showGridLines == null) return true;
    return !(showGridLines === "0" || showGridLines === 0 || showGridLines === false);
  };
  const getFrozenView = (sheet) => {
    const view = { showGridLines: normalizeShowGridLines(sheet.showGridLines) };
    const frozen = sheet?.frozen;
    let xSplit = 0;
    let ySplit = 0;

    if (frozen?.type) {
      const range = frozen.range || {};
      if (frozen.type === "column" || frozen.type === "rangeColumn" || frozen.type === "both" || frozen.type === "rangeBoth") {
        xSplit = Math.max(1, (parseInt(range.column_focus, 10) || 0) + 1);
      }
      if (frozen.type === "row" || frozen.type === "rangeRow" || frozen.type === "both" || frozen.type === "rangeBoth") {
        ySplit = Math.max(1, (parseInt(range.row_focus, 10) || 0) + 1);
      }
    } else if (sheet?.freezen) {
      xSplit = parseInt(sheet.freezen.vertical?.freezenverticaldata?.[1] ?? sheet.freezen.vertical, 10) || 0;
      ySplit = parseInt(sheet.freezen.horizontal?.freezenhorizontaldata?.[1] ?? sheet.freezen.horizen, 10) || 0;
    }

    if (xSplit > 0 || ySplit > 0) {
      view.state = "frozen";
      if (xSplit > 0) view.xSplit = xSplit;
      if (ySplit > 0) view.ySplit = ySplit;
    }

    return view;
  };
  const fortuneBorderStyles = {
    1: "thin",
    2: "hair",
    3: "dotted",
    4: "dashed",
    5: "dashDot",
    6: "dashDotDot",
    7: "double",
    8: "medium",
    9: "mediumDashed",
    10: "mediumDashDot",
    11: "mediumDashDotDot",
    12: "slantDashDot",
    13: "thick",
  };
  const normalizeBorderStyle = (style) => {
    if (style === "none" || style === 0 || style === "0") return null;
    return fortuneBorderStyles[Number(style)] || style || "thin";
  };
  const normalizeBorderSide = (side) => {
    if (!side) return undefined;
    const style = normalizeBorderStyle(side.style);
    if (!style) return undefined;
    const color = convertColor(side.color) || "FF000000";
    return { style, color: { argb: color } };
  };
  const borderKey = (rowIndex, colIndex) => `${rowIndex}_${colIndex}`;
  const getBorderCell = (borderMap, rowIndex, colIndex) => {
    const key = borderKey(rowIndex, colIndex);
    if (!borderMap.has(key)) borderMap.set(key, {});
    return borderMap.get(key);
  };
  const pruneBorderCell = (borderMap, rowIndex, colIndex) => {
    const key = borderKey(rowIndex, colIndex);
    const cellBorder = borderMap.get(key);
    if (
      cellBorder &&
      !cellBorder.left &&
      !cellBorder.right &&
      !cellBorder.top &&
      !cellBorder.bottom
    ) {
      borderMap.delete(key);
    }
  };
  const setBorderSide = (borderMap, rowIndex, colIndex, side, value) => {
    if (rowIndex < 0 || colIndex < 0) return;
    const cellBorder = getBorderCell(borderMap, rowIndex, colIndex);
    const borderSide = normalizeBorderSide(value);
    if (borderSide) {
      cellBorder[side] = borderSide;
    } else {
      delete cellBorder[side];
      pruneBorderCell(borderMap, rowIndex, colIndex);
    }
  };
  const clearBorderCell = (borderMap, rowIndex, colIndex) => {
    borderMap.delete(borderKey(rowIndex, colIndex));
  };
  const clearBorderSide = (borderMap, rowIndex, colIndex, side) => {
    if (rowIndex < 0 || colIndex < 0) return;
    const cellBorder = borderMap.get(borderKey(rowIndex, colIndex));
    if (!cellBorder) return;
    delete cellBorder[side];
    pruneBorderCell(borderMap, rowIndex, colIndex);
  };
  const forEachCellInRange = (range, callback) => {
    if (!Array.isArray(range?.row) || !Array.isArray(range?.column)) return;
    for (let rowIndex = range.row[0]; rowIndex <= range.row[1]; rowIndex++) {
      for (let colIndex = range.column[0]; colIndex <= range.column[1]; colIndex++) {
        callback(rowIndex, colIndex);
      }
    }
  };
  const applyRangeBorder = (borderMap, border) => {
    const style = { style: border.style, color: border.color };
    (border.range || []).forEach((range) => {
      if (!Array.isArray(range?.row) || !Array.isArray(range?.column)) return;
      const [rowStart, rowEnd] = range.row;
      const [colStart, colEnd] = range.column;

      if (border.borderType === "border-none") {
        forEachCellInRange(range, (rowIndex, colIndex) => {
          clearBorderCell(borderMap, rowIndex, colIndex);
          if (rowIndex === rowStart) clearBorderSide(borderMap, rowStart - 1, colIndex, "bottom");
          if (rowIndex === rowEnd) clearBorderSide(borderMap, rowEnd + 1, colIndex, "top");
          if (colIndex === colStart) clearBorderSide(borderMap, rowIndex, colStart - 1, "right");
          if (colIndex === colEnd) clearBorderSide(borderMap, rowIndex, colEnd + 1, "left");
        });
        return;
      }

      forEachCellInRange(range, (rowIndex, colIndex) => {
        const onTop = rowIndex === rowStart;
        const onBottom = rowIndex === rowEnd;
        const onLeft = colIndex === colStart;
        const onRight = colIndex === colEnd;

        switch (border.borderType) {
          case "border-left":
            if (onLeft) setBorderSide(borderMap, rowIndex, colIndex, "left", style);
            break;
          case "border-right":
            if (onRight) setBorderSide(borderMap, rowIndex, colIndex, "right", style);
            break;
          case "border-top":
            if (onTop) setBorderSide(borderMap, rowIndex, colIndex, "top", style);
            break;
          case "border-bottom":
            if (onBottom) setBorderSide(borderMap, rowIndex, colIndex, "bottom", style);
            break;
          case "border-outside":
            if (onTop) setBorderSide(borderMap, rowIndex, colIndex, "top", style);
            if (onBottom) setBorderSide(borderMap, rowIndex, colIndex, "bottom", style);
            if (onLeft) setBorderSide(borderMap, rowIndex, colIndex, "left", style);
            if (onRight) setBorderSide(borderMap, rowIndex, colIndex, "right", style);
            break;
          case "border-inside":
            if (!onBottom) setBorderSide(borderMap, rowIndex, colIndex, "bottom", style);
            if (!onRight) setBorderSide(borderMap, rowIndex, colIndex, "right", style);
            break;
          case "border-horizontal":
            if (!onBottom) setBorderSide(borderMap, rowIndex, colIndex, "bottom", style);
            break;
          case "border-vertical":
            if (!onRight) setBorderSide(borderMap, rowIndex, colIndex, "right", style);
            break;
          case "border-all":
          default:
            setBorderSide(borderMap, rowIndex, colIndex, "left", style);
            setBorderSide(borderMap, rowIndex, colIndex, "right", style);
            setBorderSide(borderMap, rowIndex, colIndex, "top", style);
            setBorderSide(borderMap, rowIndex, colIndex, "bottom", style);
            break;
        }
      });
    });
  };
  const buildBorderMap = (borderInfo) => {
    const borderMap = new Map();
    if (!Array.isArray(borderInfo)) return borderMap;

    borderInfo.forEach((border) => {
      if (border.rangeType === "cell" && border.value) {
        const { row_index, col_index, l, r, t, b } = border.value;
        setBorderSide(borderMap, row_index, col_index, "left", l);
        setBorderSide(borderMap, row_index, col_index, "right", r);
        setBorderSide(borderMap, row_index, col_index, "top", t);
        setBorderSide(borderMap, row_index, col_index, "bottom", b);
      } else if (border.rangeType === "range" && Array.isArray(border.range)) {
        applyRangeBorder(borderMap, border);
      }
    });

    return borderMap;
  };
  const columnToLetter = (idx) => {
    let r = "";
    let n = idx + 1;
    while (n > 0) { n--; r = String.fromCharCode(65 + (n % 26)) + r; n = Math.floor(n / 26); }
    return r;
  };
  const columnNameToIndex = (name) => {
    const text = String(name || "").replace(/[^A-Za-z]/g, "").toUpperCase();
    if (!text) return null;
    let value = 0;
    for (const char of text) value = value * 26 + char.charCodeAt(0) - 64;
    return value - 1;
  };
  const rangeToExcelRef = (range) => {
    if (!range?.row || !range?.column) return null;
    const start = `${columnToLetter(range.column[0])}${range.row[0] + 1}`;
    const end = `${columnToLetter(range.column[1])}${range.row[1] + 1}`;
    return start === end ? start : `${start}:${end}`;
  };
  const absoluteCellRef = (text) => {
    const match = String(text || "").trim().replace(/\$/g, "").match(/^([A-Za-z]+)(\d+)$/);
    if (!match) return null;
    return `$${match[1].toUpperCase()}$${match[2]}`;
  };
  const cfStyle = (rule) => {
    const style = {};
    if (rule.textColor || rule.bold || rule.italic || rule.underline) {
      style.font = {};
      if (rule.textColor) {
        style.font.color = { argb: convertColor(rule.textColor) };
      }
      if (rule.bold) style.font.bold = true;
      if (rule.italic) style.font.italic = true;
      if (rule.underline) style.font.underline = true;
    }
    if (rule.backgroundColor) {
      style.fill = {
        type: "pattern",
        pattern: "solid",
        bgColor: { argb: convertColor(rule.backgroundColor) },
        fgColor: { argb: convertColor(rule.backgroundColor) },
      };
    }
    return style;
  };
  const getFixedFormulaValue = (value) => {
    if (typeof value === "number") return String(value);
    const parsed = Number(String(value || "").replace(",", "."));
    if (String(value || "").trim() !== "" && Number.isFinite(parsed)) {
      return String(parsed);
    }
    return `"${String(value || "").replace(/"/g, '""')}"`;
  };
  const getConditionalFormattingRule = (rule, priority) => {
    const style = cfStyle(rule);
    if (!Object.keys(style).length) return null;
    const topLeft = `${columnToLetter(rule.range.column[0])}${rule.range.row[0] + 1}`;
    const opMap = {
      greaterThan: ">",
      lessThan: "<",
      equal: "=",
      notEqual: "<>",
    };
    if (rule.condition === "textContains") {
      const text = String(rule.value || "").replace(/"/g, '""');
      return {
        type: "containsText",
        operator: "containsText",
        text,
        priority,
        formulae: [`NOT(ISERROR(SEARCH("${text}",${topLeft})))`],
        style,
      };
    }
    if (rule.condition === "between") {
      return {
        type: "cellIs",
        operator: "between",
        priority,
        formulae: [getFixedFormulaValue(rule.value), getFixedFormulaValue(rule.value2)],
        style,
      };
    }
    if (!opMap[rule.condition]) return null;
    if (rule.compareType === "sameRowColumn") {
      const column = columnNameToIndex(rule.reference);
      if (column == null) return null;
      const compareRef = `$${columnToLetter(column)}${rule.range.row[0] + 1}`;
      return {
        type: "expression",
        priority,
        formulae: [`${topLeft}${opMap[rule.condition]}${compareRef}`],
        style,
      };
    }
    const formulae =
      rule.compareType === "cell"
        ? [absoluteCellRef(rule.reference)]
        : [getFixedFormulaValue(rule.value)];
    if (!formulae[0]) return null;
    return {
      type: "cellIs",
      operator:
        rule.condition === "greaterThan"
          ? "greaterThan"
          : rule.condition === "lessThan"
            ? "lessThan"
            : rule.condition === "notEqual"
              ? "notEqual"
              : "equal",
      priority,
      formulae,
      style,
    };
  };
  const isCellInRuleRange = (r, c, rule) =>
    rule?.range?.row &&
    rule?.range?.column &&
    r >= rule.range.row[0] &&
    r <= rule.range.row[1] &&
    c >= rule.range.column[0] &&
    c <= rule.range.column[1];
  const stripConditionalDisplayStyle = (v, r, c, rules) => {
    if (!v || typeof v !== "object") return v;
    const isInConditionalRange = (rules || []).some((rule) =>
      rule.enabled !== false && isCellInRuleRange(r, c, rule),
    );
    if (!isInConditionalRange) return v;
    const cleanValue = { ...v };
    delete cleanValue.fc;
    delete cleanValue.bg;
    delete cleanValue.bl;
    delete cleanValue.it;
    delete cleanValue.ul;
    return cleanValue;
  };

  const sheetsToExport = Array.isArray(sheetsData) && sheetsData.length > 0
    ? sheetsData.filter((sheet) => sheet?.name !== DOCCELLS_METADATA_SHEET_NAME)
    : [{ name: "Feuille1", celldata: [], config: {} }];
  const chartMetadata = sheetsToExport
    .map((sheet, index) => ({
      index,
      name: sheet.name || `Feuille${index + 1}`,
      customCharts: sheet.customCharts || [],
    }))
    .filter((sheet) => sheet.customCharts.length > 0);

  // Chargé à la demande : exceljs (~1 Mo minifié) ne sert qu'à l'export et
  // resterait sinon dans le bundle initial.
  const { default: ExcelJS } = await import("exceljs");
  const workbook = new ExcelJS.Workbook();

  for (let sheetIndex = 0; sheetIndex < sheetsToExport.length; sheetIndex++) {
    const sheet = sheetsToExport[sheetIndex] || {};
    const { celldata, config = {} } = sheet;
    const name = sheet.name || `Feuille${sheetIndex + 1}`;
    const filter_select = sheet.filter_select;

    const worksheet = workbook.addWorksheet(name);
    worksheet.views = [getFrozenView(sheet)];

    // Déclarer les dimensions par défaut FortuneSheet dans le fichier Excel
    // pour que le ré-import reconstruise les positions d'images correctement.
    // 73px → (73-5)/8+0.83 = 9.33 chars ; 19px → 19×0.75 = 14.25 pt
    worksheet.properties.defaultColWidth = (73 - 5) / 8 + 0.83; // 9.33 chars
    worksheet.properties.defaultRowHeight = 19 * 0.75;           // 14.25 pt

    // Lignes cachées par le filtre (ou manuellement)
    if (config?.rowhidden) {
      Object.keys(config.rowhidden).forEach((rowIndex) => {
        worksheet.getRow(parseInt(rowIndex, 10) + 1).hidden = true;
      });
    }

    // AutoFilter
    if (filter_select) {
      const headerRow = filter_select.row[0] + 1;
      const endRow = filter_select.row[1] + 1;
      const startColLetter = columnToLetter(filter_select.column[0]);
      const endColLetter = columnToLetter(filter_select.column[1]);
      worksheet.autoFilter = `${startColLetter}${headerRow}:${endColLetter}${endRow}`;
    }

    if (config?.columnlen) {
      Object.keys(config.columnlen).forEach((colIndex) => {
        worksheet.getColumn(parseInt(colIndex, 10) + 1).width =
          (config.columnlen[colIndex] - 5) / 8 + 0.83;
      });
    }

    if (config?.colhidden) {
      Object.keys(config.colhidden).forEach((colIndex) => {
        worksheet.getColumn(parseInt(colIndex, 10) + 1).hidden = true;
      });
    }

    if (config?.rowlen) {
      Object.keys(config.rowlen).forEach((rowIndex) => {
        worksheet.getRow(parseInt(rowIndex, 10) + 1).height =
          config.rowlen[rowIndex] * 0.75;
      });
    }

    // 🔹 Appliquer les cellules fusionnées
    if (config?.merge) {
      Object.values(config.merge).forEach(({ r, c, rs, cs }) => {
        worksheet.mergeCells(r + 1, c + 1, r + rs, c + cs);
      });
    }

    (celldata || []).forEach(({ r, c, v }) => {
      const styleValue = stripConditionalDisplayStyle(
        v,
        r,
        c,
        sheet.customConditionalFormatting,
      );
      // Récupération et modification d'une cellule spécifique
      const cell = worksheet.getCell(r + 1, c + 1);
      const formula = v?.VF?.f || v?.f;
      if (formula) {
        const result = sanitizeFormulaResult(v?.VF?.v ?? v?.v, v);
        cell.value = {
          formula: formula.startsWith("=") ? formula.slice(1) : formula,
          ...(result !== undefined ? { result } : {}),
        };
      } else if (v?.v !== undefined) {
        const value = sanitizeCellValue(v.v, v);
        if (value !== undefined) {
          cell.value = value;
        }
      }

      let cellStyle = {};

      if (styleValue?.bg) {
        // Remplissage des cellules avec une couleur de fond
        cellStyle.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: convertColor(styleValue.bg) },
        };
      }

      if (
        styleValue?.fc ||
        styleValue?.fs ||
        styleValue?.ff ||
        styleValue?.bl ||
        styleValue?.it ||
        styleValue?.ul
      ) {
        // Définition du style de police (gras, italique, taille...)
        cellStyle.font = {
          name: styleValue.ff || "Arial",
          size: styleValue.fs ? parseInt(styleValue.fs) : 11,
          bold: !!styleValue.bl,
          italic: !!styleValue.it,
          underline: styleValue.ul ? "single" : false,
          color: styleValue.fc ? { argb: convertColor(styleValue.fc) } : null,
        };
      }
      if (
        v?.ht !== undefined ||
        v?.vt !== undefined ||
        v?.tb !== undefined ||
        v?.tr !== undefined ||
        v?.rt !== undefined
      ) {
        // Configuration de l'alignement des cellules (centré, gauche, droite, renvoi à la ligne, rotation...)
        const vt = v.vt === undefined ? 0 : parseInt("" + v.vt);
        const ht = v.ht === undefined ? 1 : parseInt("" + v.ht);
        const tb = v.tb !== undefined ? parseInt("" + v.tb) : undefined;
        const tr = v.tr !== undefined ? parseInt("" + v.tr) : undefined;
        const rt = v.rt !== undefined ? parseInt("" + v.rt) : undefined;
        // Mapping des valeurs tr de FortuneSheet vers ExcelJS (-90..90 ou 'vertical')
        // tr=0 → angle libre (utilise rt), tr=1 → +45°, tr=2 → -45°, tr=3 → vertical, tr=4 → +90°, tr=5 → -90°
        let textRotation;
        if (tr === 3) {
          textRotation = "vertical";
        } else if (tr === 1) {
          textRotation = 45;
        } else if (tr === 2) {
          textRotation = -45;
        } else if (tr === 4) {
          textRotation = 90;
        } else if (tr === 5) {
          textRotation = -90;
        } else if (rt !== undefined && rt !== 0) {
          // tr=0 (ou absent) avec angle brut OOXML : 0-90 = CCW, 91-180 = CW
          textRotation = rt <= 90 ? rt : -(rt - 90);
        }
        cellStyle.alignment = {
          horizontal: ht === 1 ? "left" : ht === 0 ? "center" : "right",
          vertical: vt === 1 ? "top" : vt === 0 ? "middle" : "bottom",
          wrapText: tb === 2 ? true : tb === 1 ? false : undefined,
          textRotation,
        };
      }

      // Cellule explicitement déverrouillée (lo=0) : protection = false
      if (v?.lo === 0) {
        cellStyle.protection = { locked: false };
      }

      const numberFormat = getExcelNumberFormat(v);
      if (numberFormat) {
        cellStyle.numFmt = numberFormat;
      }

      if (Object.keys(cellStyle).length > 0) {
        cell.style = cellStyle;
      }
    });

    const borderMap = buildBorderMap(config?.borderInfo);
    borderMap.forEach((cellBorder, key) => {
      const [rowIndex, colIndex] = key.split("_").map(Number);
      const cell = worksheet.getCell(rowIndex + 1, colIndex + 1);
      cell.border = {
        left: cellBorder.left,
        right: cellBorder.right,
        top: cellBorder.top,
        bottom: cellBorder.bottom,
      };
    });
    // Protection de la feuille
    if (config?.authority?.sheet === 1) {
      await worksheet.protect("", { selectLockedCells: true, selectUnlockedCells: true });
    }

    // Images
    // ⚠️ L'API fractionnaire col/row d'ExcelJS est buggée pour les colonnes
    // avec largeur personnalisée : elle écrit `chars × 10000` au lieu d'EMU.
    // On utilise nativeCol/nativeColOff en EMU vrais (1px = 9525 EMU, à 96 DPI).
    if (sheet.images && typeof sheet.images === "object") {
      const DEFAULT_COL_WIDTH_PX = 73;  // défaut FortuneSheet
      const DEFAULT_ROW_HEIGHT_PX = 19; // défaut FortuneSheet
      const PX_TO_EMU = 9525;           // 914400 EMU/pouce ÷ 96 px/pouce

      // FortuneSheet ajoute 1px de séparateur par colonne/ligne dans ses calculs
      // cumulatifs (visibledatacolumn et extendArray/imagePositionCaculation).
      // Il faut reproduire ce +1 ici pour que les anchors EMU soient exacts.

      // Convertit une position pixel absolue → { nativeCol, nativeColOff (EMU) }
      const pxToColAnchor = (px) => {
        let cum = 0;
        for (let col = 0; col < 500; col++) {
          const w = Math.round((config?.columnlen?.[col] ?? DEFAULT_COL_WIDTH_PX) + 1);
          if (cum + w > px) {
            return { nativeCol: col, nativeColOff: Math.max(0, Math.round((px - cum) * PX_TO_EMU)) };
          }
          cum += w;
        }
        return { nativeCol: 0, nativeColOff: 0 };
      };

      // Convertit une position pixel absolue → { nativeRow, nativeRowOff (EMU) }
      const pxToRowAnchor = (py) => {
        let cum = 0;
        for (let row = 0; row < 5000; row++) {
          const h = Math.round((config?.rowlen?.[row] ?? DEFAULT_ROW_HEIGHT_PX) + 1);
          if (cum + h > py) {
            return { nativeRow: row, nativeRowOff: Math.max(0, Math.round((py - cum) * PX_TO_EMU)) };
          }
          cum += h;
        }
        return { nativeRow: 0, nativeRowOff: 0 };
      };

      const imgList = Array.isArray(sheet.images)
        ? sheet.images
        : Object.values(sheet.images);

      for (const img of imgList) {
        if (!img?.src) continue;

        const match = img.src.match(/^data:image\/(\w+);base64,(.+)$/);
        if (!match) continue;

        const rawExt = match[1].toLowerCase();
        const extension = rawExt === "jpg" ? "jpeg" : rawExt;
        const base64Data = match[2];

        let imageId;
        try {
          imageId = workbook.addImage({ base64: base64Data, extension });
        } catch (e) {
          console.warn(`⚠️ Image ignorée (format non supporté : ${extension})`, e);
          continue;
        }

        let tl, br;

        if (img.left !== undefined && img.top !== undefined) {
          // Image insérée via toolbar : coordonnées absolues en pixels
          const left   = img.left   ?? 0;
          const top    = img.top    ?? 0;
          const width  = img.width  ?? 144;
          const height = img.height ?? 84;
          const tlCol = pxToColAnchor(left);
          const tlRow = pxToRowAnchor(top);
          const brCol = pxToColAnchor(left + width);
          const brRow = pxToRowAnchor(top + height);
          tl = { nativeCol: tlCol.nativeCol, nativeColOff: tlCol.nativeColOff, nativeRow: tlRow.nativeRow, nativeRowOff: tlRow.nativeRowOff };
          br = { nativeCol: brCol.nativeCol, nativeColOff: brCol.nativeColOff, nativeRow: brRow.nativeRow, nativeRowOff: brRow.nativeRowOff };
        } else if (img.fromCol !== undefined) {
          // Image importée depuis Excel : déjà en col+offsetPx, convertir en EMU
          tl = {
            nativeCol: img.fromCol ?? 0,
            nativeColOff: Math.round((img.fromColOff ?? 0) * PX_TO_EMU),
            nativeRow: img.fromRow ?? 0,
            nativeRowOff: Math.round((img.fromRowOff ?? 0) * PX_TO_EMU),
          };
          br = {
            nativeCol: img.toCol ?? (img.fromCol ?? 0) + 3,
            nativeColOff: Math.round((img.toColOff ?? 0) * PX_TO_EMU),
            nativeRow: img.toRow ?? (img.fromRow ?? 0) + 5,
            nativeRowOff: Math.round((img.toRowOff ?? 0) * PX_TO_EMU),
          };
        } else {
          continue;
        }

        worksheet.addImage(imageId, { tl, br });
      }
    }
    if (Array.isArray(sheet.customConditionalFormatting)) {
      sheet.customConditionalFormatting
        .filter((rule) => rule.enabled !== false && rule.range)
        .forEach((rule, ruleIndex) => {
          const ref = rangeToExcelRef(rule.range);
          if (!ref) return;
          const cfRule = getConditionalFormattingRule(rule, ruleIndex + 1);
          if (!cfRule) return;
          worksheet.addConditionalFormatting({
            ref,
            rules: [cfRule],
          });
        });
    }
  }

  if (chartMetadata.length > 0) {
    const metadataWorksheet = workbook.addWorksheet(DOCCELLS_METADATA_SHEET_NAME, {
      state: "veryHidden",
    });
    metadataWorksheet.getCell("A1").value = JSON.stringify({
      version: 1,
      sheets: chartMetadata,
    });
  }

  const buffer = await workbook.xlsx.writeBuffer();
  const finalBuffer = await patchWorkbookWithNativeCharts(buffer, sheetsToExport);
  if (returnBase64) {
    const bytes = new Uint8Array(finalBuffer);
    let binary = "";
    for (let i = 0; i < bytes.length; i++)
      binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
  const blob = new Blob([finalBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  if (returnBlob) return blob;
  saveAs(blob, fileName);
};
