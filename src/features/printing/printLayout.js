const DEFAULT_COLUMN_WIDTH = 73;
const DEFAULT_ROW_HEIGHT = 19;
const PAGE_SIZES = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
};
const MARGINS = {
  normal: 72,
  narrow: 36,
  wide: 108,
};
const FORTUNE_FONT_FAMILIES = [
  "Arial",
  "Times New Roman",
  "Tahoma",
  "Verdana",
  "Helvetica",
  "Trebuchet MS",
  "Georgia",
  "Garamond",
  "Courier New",
  "Lucida Console",
  "Impact",
  "Comic Sans MS",
  "Segoe UI",
];
const FORTUNE_FALLBACK_FONTS = [
  '"Helvetica Neue"',
  "Helvetica",
  "Arial",
  '"PingFang SC"',
  '"Hiragino Sans GB"',
  '"Heiti SC"',
  '"Microsoft YaHei"',
  '"WenQuanYi Micro Hei"',
  "sans-serif",
].join(", ");

const isHidden = (map, index) =>
  map?.[index] === 0 || map?.[index] === "0" || map?.[index] === true;

const normalizeRange = (range) => {
  if (!range?.row || !range?.column) return null;
  const rowStart = Math.max(0, Math.min(...range.row));
  const rowEnd = Math.max(rowStart, Math.max(...range.row));
  const columnStart = Math.max(0, Math.min(...range.column));
  const columnEnd = Math.max(columnStart, Math.max(...range.column));
  return { row: [rowStart, rowEnd], column: [columnStart, columnEnd] };
};

export const getPrintableRange = (sheet, requestedRange) => {
  const selection = normalizeRange(requestedRange);
  if (selection) return selection;

  let rowEnd = 0;
  let columnEnd = 0;
  (sheet?.data || []).forEach((row, rowIndex) => {
    if (!Array.isArray(row)) return;
    row.forEach((cell, columnIndex) => {
      if (cell == null) return;
      const value = typeof cell === "object" ? (cell.m ?? cell.v ?? cell.f) : cell;
      if (value === "" || value == null) return;
      rowEnd = Math.max(rowEnd, rowIndex);
      columnEnd = Math.max(columnEnd, columnIndex);
    });
  });
  (sheet?.celldata || []).forEach(({ r, c, v }) => {
    if (v == null) return;
    rowEnd = Math.max(rowEnd, Number(r) || 0);
    columnEnd = Math.max(columnEnd, Number(c) || 0);
  });
  Object.values(sheet?.config?.merge || {}).forEach((merge) => {
    rowEnd = Math.max(rowEnd, merge.r + merge.rs - 1);
    columnEnd = Math.max(columnEnd, merge.c + merge.cs - 1);
  });
  return { row: [0, rowEnd], column: [0, columnEnd] };
};

const splitBySize = (indices, getSize, availableSize) => {
  if (!indices.length) return [[]];
  const groups = [];
  let current = [];
  let size = 0;
  indices.forEach((index) => {
    const itemSize = getSize(index);
    if (current.length && size + itemSize > availableSize) {
      groups.push(current);
      current = [];
      size = 0;
    }
    current.push(index);
    size += itemSize;
  });
  if (current.length) groups.push(current);
  return groups;
};

export const createPrintLayout = (sheet, requestedRange, options = {}) => {
  const range = getPrintableRange(sheet, requestedRange);
  const config = sheet?.config || {};
  const orientation = options.orientation === "landscape" ? "landscape" : "portrait";
  const basePage = PAGE_SIZES[options.paperSize] || PAGE_SIZES.A4;
  const pageWidth = orientation === "landscape" ? basePage.height : basePage.width;
  const pageHeight = orientation === "landscape" ? basePage.width : basePage.height;
  const margin = MARGINS[options.margins] ?? MARGINS.normal;
  const showHeaders = Boolean(options.showHeaders);
  const headerWidth = showHeaders ? 38 : 0;
  const headerHeight = showHeaders ? 24 : 0;
  const contentWidth = pageWidth - margin * 2 - headerWidth;
  const contentHeight = pageHeight - margin * 2 - headerHeight;

  const columns = [];
  for (let column = range.column[0]; column <= range.column[1]; column++) {
    if (!isHidden(config.colhidden, column)) columns.push(column);
  }
  const rows = [];
  for (let row = range.row[0]; row <= range.row[1]; row++) {
    if (!isHidden(config.rowhidden, row)) rows.push(row);
  }

  const columnWidth = (column) =>
    Math.max(2, Number(config.columnlen?.[column]) || DEFAULT_COLUMN_WIDTH);
  const rowHeight = (row) =>
    Math.max(2, Number(config.rowlen?.[row]) || DEFAULT_ROW_HEIGHT);
  const totalWidth = columns.reduce((sum, column) => sum + columnWidth(column), 0);
  const totalHeight = rows.reduce((sum, row) => sum + rowHeight(row), 0);

  let scale = 1;
  if (options.scale === "fitWidth") {
    scale = Math.min(1, contentWidth / Math.max(1, totalWidth));
  } else if (options.scale === "fitPage") {
    scale = Math.min(
      1,
      contentWidth / Math.max(1, totalWidth),
      contentHeight / Math.max(1, totalHeight),
    );
  }
  scale = Math.max(0.1, scale);

  const columnGroups =
    options.scale === "fitWidth" || options.scale === "fitPage"
      ? [columns]
      : splitBySize(columns, columnWidth, contentWidth / scale);
  const rowGroups = splitBySize(rows, rowHeight, contentHeight / scale);
  const pages = [];
  rowGroups.forEach((pageRows, verticalIndex) => {
    columnGroups.forEach((pageColumns, horizontalIndex) => {
      pages.push({
        rows: pageRows,
        columns: pageColumns,
        verticalIndex,
        horizontalIndex,
      });
    });
  });

  return {
    pages,
    scale,
    range,
    pageWidth,
    pageHeight,
    margin,
    columnWidth,
    rowHeight,
  };
};

export const columnToName = (index) => {
  let name = "";
  let value = index + 1;
  while (value > 0) {
    value -= 1;
    name = String.fromCharCode(65 + (value % 26)) + name;
    value = Math.floor(value / 26);
  }
  return name;
};

export const getCellDisplayText = (cell) => {
  if (cell == null) return "";
  if (typeof cell !== "object") return String(cell);
  if (cell.m != null) return String(cell.m);
  if (cell.v === true) return "TRUE";
  if (cell.v === false) return "FALSE";
  return cell.v == null ? "" : String(cell.v);
};

export const getCellFontFamily = (fontFamily) => {
  const numericIndex =
    typeof fontFamily === "number" ||
    (typeof fontFamily === "string" && /^\d+$/.test(fontFamily))
      ? Number(fontFamily)
      : null;
  const requested =
    numericIndex != null
      ? FORTUNE_FONT_FAMILIES[numericIndex]
      : String(fontFamily || FORTUNE_FONT_FAMILIES[0])
          .replace(/["']/g, "")
          .trim();
  const escaped = requested.includes(" ") ? `"${requested}"` : requested;
  return `${escaped}, ${FORTUNE_FALLBACK_FONTS}`;
};

const BORDER_STYLES = {
  2: "dotted",
  3: "dotted",
  4: "dashed",
  7: "double",
};

export const getCellStyle = (
  cell,
  showGridLines,
  showBackgroundColors = true,
  scale = 1,
) => {
  const horizontal = Number(cell?.ht);
  const vertical = Number(cell?.vt);
  const rotation = Number(cell?.tr);
  const rawAngle = Number(cell?.rt);
  const angle =
    rotation === 1 ? 45
      : rotation === 2 ? -45
        : rotation === 4 ? 90
          : rotation === 5 ? -90
            : Number.isFinite(rawAngle) && rawAngle !== 0
              ? (rawAngle <= 90 ? rawAngle : -(rawAngle - 90))
              : 0;
  const gridBorder = showGridLines ? "1px solid #d7dce2" : "none";
  return {
    color: cell?.fc || "#000000",
    backgroundColor:
      showBackgroundColors && cell?.bg ? cell.bg : "transparent",
    fontFamily: getCellFontFamily(cell?.ff),
    // FortuneSheet construit son canvas avec des tailles en points.
    fontSize: `${Math.ceil(Number(cell?.fs) || 10) * scale}pt`,
    fontWeight: cell?.bl ? 700 : 400,
    fontStyle: cell?.it ? "italic" : "normal",
    textDecoration: cell?.ul ? "underline" : "none",
    textAlign: horizontal === 0 ? "center" : horizontal === 2 ? "right" : "left",
    verticalAlign: vertical === 1 ? "top" : vertical === 2 ? "bottom" : "middle",
    whiteSpace: Number(cell?.tb) === 2 ? "pre-wrap" : "nowrap",
    overflow: "hidden",
    // Ne jamais mélanger le raccourci `border` avec les propriétés par côté
    // ajoutées ensuite pour les vraies bordures. Lors d'une mise à jour React,
    // le raccourci peut effacer les côtés explicites sans qu'ils soient
    // réappliqués, puisque leur valeur n'a pas changé dans l'objet de style.
    borderTop: gridBorder,
    borderRight: gridBorder,
    borderBottom: gridBorder,
    borderLeft: gridBorder,
    "--dc-cell-rotation": angle ? `${angle}deg` : "0deg",
  };
};

export const getBorderStyle = (border) => {
  if (!border?.style || border.style === "none") return null;
  const style = BORDER_STYLES[Number(border.style)] || "solid";
  const width = Number(border.style) >= 8 ? 2 : 1;
  return `${width}px ${style} ${border.color || "#000000"}`;
};

export const createBorderMap = (borderInfo) => {
  const map = new Map();
  const get = (row, column) => {
    const key = `${row}_${column}`;
    if (!map.has(key)) map.set(key, {});
    return map.get(key);
  };
  const set = (row, column, side, border) => {
    const value = getBorderStyle(border);
    if (value) get(row, column)[side] = value;
  };

  (borderInfo || []).forEach((border) => {
    if (border?.rangeType === "cell" && border.value) {
      const { row_index: row, col_index: column, l, r, t, b } = border.value;
      set(row, column, "borderLeft", l);
      set(row, column, "borderRight", r);
      set(row, column, "borderTop", t);
      set(row, column, "borderBottom", b);
      return;
    }
    if (border?.rangeType !== "range") return;
    (border.range || []).forEach((range) => {
      if (!range?.row || !range?.column || border.borderType === "border-none") return;
      const [rowStart, rowEnd] = range.row;
      const [columnStart, columnEnd] = range.column;
      for (let row = rowStart; row <= rowEnd; row++) {
        for (let column = columnStart; column <= columnEnd; column++) {
          const style = { style: border.style, color: border.color };
          const type = border.borderType || "border-all";
          if (type === "border-all" || type === "border-outside" && column === columnStart || type === "border-left" && column === columnStart) {
            set(row, column, "borderLeft", style);
          }
          if (type === "border-all" || type === "border-outside" && column === columnEnd || type === "border-right" && column === columnEnd || type === "border-inside" && column < columnEnd || type === "border-vertical" && column < columnEnd) {
            set(row, column, "borderRight", style);
          }
          if (type === "border-all" || type === "border-outside" && row === rowStart || type === "border-top" && row === rowStart) {
            set(row, column, "borderTop", style);
          }
          if (type === "border-all" || type === "border-outside" && row === rowEnd || type === "border-bottom" && row === rowEnd || type === "border-inside" && row < rowEnd || type === "border-horizontal" && row < rowEnd) {
            set(row, column, "borderBottom", style);
          }
        }
      }
    });
  });
  return map;
};
