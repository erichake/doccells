import {
  columnNameToIndex,
  parseRangeText,
  rangeToText,
} from "../conditionalFormatting/conditionalFormattingUtils.js";

export const CHART_TYPES = [
  { value: "bar", label: "Barres" },
  { value: "line", label: "Courbe" },
  { value: "scatter", label: "Nuage de points" },
  { value: "pie", label: "Secteurs" },
];

export const CHART_LABEL_TYPES = [
  { value: "none" },
  { value: "sameRowColumn" },
  { value: "sameColumnRow" },
  { value: "range" },
];

export const DOCCELLS_METADATA_SHEET_NAME = "__DOCCELLS_METADATA__";

export const DEFAULT_CHART = {
  type: "bar",
  title: "Graphique",
  rangeText: "A1:B5",
  range: parseRangeText("A1:B5"),
  labels: {
    type: "none",
    reference: "",
  },
  color: "#4F81BD",
  showValues: false,
  showLegend: false,
  showXAxis: true,
  showYAxis: true,
  showGridlines: true,
};

export const CHART_COLORS = [
  "#2563eb",
  "#dc2626",
  "#16a34a",
  "#ca8a04",
  "#7c3aed",
  "#0891b2",
  "#ea580c",
  "#4f46e5",
];

export const CHART_TEXTS = {
  toolbar: "Graphique",
  title: "Graphiques",
  defaultTitle: "Graphique",
  activeSheet: "Feuille active",
  existingCharts: "Graphiques de la feuille",
  noCharts: "Aucun graphique pour cette feuille.",
  newChart: "Nouveau graphique",
  editChart: "Modifier le graphique",
  chartTitle: "Titre",
  type: "Type",
  range: "Données",
  values: "Afficher les valeurs",
  legend: "Afficher la légende",
  color: "Couleur",
  xAxis: "Afficher les abscisses",
  yAxis: "Afficher les ordonnées",
  gridlines: "Afficher la grille",
  displayOptions: "Affichage",
  labels: "Étiquettes",
  labelReference: "Référence",
  labelColumnReference: "Lettre de la colonne",
  labelRowReference: "Numéro de la ligne",
  preview: "Aperçu",
  close: "Fermer",
  reset: "Nouveau",
  add: "Ajouter",
  save: "Enregistrer",
  edit: "Modifier",
  delete: "Supprimer",
  types: {
    bar: "Barres",
    line: "Courbe",
    scatter: "Nuage de points",
    pie: "Secteurs",
  },
  labelTypes: {
    none: "Sans",
    sameRowColumn: "Colonne d'une même ligne",
    sameColumnRow: "Ligne d'une même colonne",
    range: "Plage personnalisée",
  },
  errors: {
    range: "La plage doit ressembler à A1:B5.",
    dataColumn: "La plage de données doit être une seule ligne ou une seule colonne de valeurs.",
    labelColumn: "La colonne d'étiquettes doit ressembler à B.",
    labelRow: "La ligne d'étiquettes doit ressembler à 2.",
    labelRange: "La plage d'étiquettes doit ressembler à B3:B24.",
    labelRangeSize: "La plage d'étiquettes doit avoir le même nombre de valeurs que les données.",
    title: "Ajoute un titre court au graphique.",
  },
};

export const getChartTexts = (texts = {}) => ({
  ...CHART_TEXTS,
  ...texts,
  types: {
    ...CHART_TEXTS.types,
    ...(texts?.types || {}),
  },
  errors: {
    ...CHART_TEXTS.errors,
    ...(texts?.errors || {}),
  },
  labelTypes: {
    ...CHART_TEXTS.labelTypes,
    ...(texts?.labelTypes || {}),
  },
});

const MAX_POINTS = 120;
const MAX_PIE_POINTS = 24;

const getCellKey = (row, column) => `${row}_${column}`;

const getCellDisplayValue = (cell) => {
  const value = cell?.v;
  if (!value || typeof value !== "object") return value;
  return value.v ?? value.m ?? "";
};

const getSheetCelldata = (sheet) => {
  if (Array.isArray(sheet?.celldata)) return sheet.celldata;
  const celldata = [];
  if (!Array.isArray(sheet?.data)) return celldata;
  sheet.data.forEach((row, r) => {
    if (!Array.isArray(row)) return;
    row.forEach((cell, c) => {
      if (cell == null) return;
      celldata.push({
        r,
        c,
        v: typeof cell === "object" ? cell : { v: cell, m: String(cell) },
      });
    });
  });
  return celldata;
};

const toNumber = (value) => {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value.replace(",", "."));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
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

export const rowReferenceToIndex = (reference) => {
  const text = String(reference || "").trim().replace(/\$/g, "");
  if (!/^\d+$/.test(text)) return null;
  const row = Number(text) - 1;
  return row >= 0 ? row : null;
};

const normalizeChartType = (type) =>
  CHART_TYPES.some((item) => item.value === type) ? type : "bar";

const normalizeLabelType = (type) =>
  CHART_LABEL_TYPES.some((item) => item.value === type) ? type : "none";

const getRangeHeight = (range) =>
  range?.row ? range.row[1] - range.row[0] + 1 : 0;

const getRangeWidth = (range) =>
  range?.column ? range.column[1] - range.column[0] + 1 : 0;

const getRangeLength = (range) => {
  const height = getRangeHeight(range);
  const width = getRangeWidth(range);
  if (!height || !width) return 0;
  return width === 1 ? height : width;
};

const isHorizontalRange = (range) =>
  getRangeHeight(range) === 1 && getRangeWidth(range) > 1;

const isOneDimensionalRange = (range) =>
  Boolean(
    range?.row &&
      range?.column &&
      getRangeHeight(range) > 0 &&
      getRangeWidth(range) > 0 &&
      (getRangeHeight(range) === 1 || getRangeWidth(range) === 1),
  );

const toFiniteNumber = (value, fallback) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

const normalizeColor = (color) =>
  /^#[0-9a-f]{6}$/i.test(String(color || "")) ? String(color).toUpperCase() : DEFAULT_CHART.color;

export const normalizeChart = (chart) => {
  const sourceRange = chart?.range || parseRangeText(chart?.rangeText);
  const sourceRows = sourceRange?.row
    ? sourceRange.row[1] - sourceRange.row[0] + 1
    : 1;
  const sourceColumns = sourceRange?.column
    ? sourceRange.column[1] - sourceRange.column[0] + 1
    : 1;
  const hasExplicitLabels = Boolean(chart?.labels?.type);
  const legacyTwoRowLabels =
    !hasExplicitLabels && sourceRows === 2 && sourceColumns > 1;
  const legacyTwoColumnLabels =
    !legacyTwoRowLabels && !hasExplicitLabels && sourceRows > 1 && sourceColumns >= 2;
  let range = sourceRange;
  let labelType = normalizeLabelType(chart?.labels?.type);
  let labelReference = String(chart?.labels?.reference || "");

  if (legacyTwoRowLabels) {
    range = {
      row: [sourceRange.row[0] + 1, sourceRange.row[0] + 1],
      column: [...sourceRange.column],
    };
    labelType = "sameColumnRow";
    labelReference = String(sourceRange.row[0] + 1);
  } else if (legacyTwoColumnLabels) {
    range = {
      row: [...sourceRange.row],
      column: [sourceRange.column[0] + 1, sourceRange.column[0] + 1],
    };
    labelType = "sameRowColumn";
    labelReference = columnToName(sourceRange.column[0]);
  }

  return {
    ...DEFAULT_CHART,
    ...chart,
    id: chart?.id || `dc_chart_${Date.now()}`,
    type: normalizeChartType(chart?.type),
    title: String(chart?.title || DEFAULT_CHART.title).slice(0, 80),
    range: range || DEFAULT_CHART.range,
    rangeText: rangeToText(range || DEFAULT_CHART.range),
    labels: {
      type: labelType,
      reference: labelReference,
    },
    color: normalizeColor(chart?.color),
    position: {
      left: toFiniteNumber(chart?.position?.left, 140),
      top: toFiniteNumber(chart?.position?.top, 128),
      width: Math.max(260, toFiniteNumber(chart?.position?.width, 380)),
      height: Math.max(190, toFiniteNumber(chart?.position?.height, 260)),
    },
    showValues: chart?.showValues ?? DEFAULT_CHART.showValues,
    showLegend: chart?.showLegend ?? DEFAULT_CHART.showLegend,
    showXAxis: chart?.showXAxis ?? DEFAULT_CHART.showXAxis,
    showYAxis: chart?.showYAxis ?? DEFAULT_CHART.showYAxis,
    showGridlines: chart?.showGridlines ?? DEFAULT_CHART.showGridlines,
  };
};

export const getChartValueRange = (chart) => normalizeChart(chart).range;

export const getChartLabelRange = (chart) => {
  const normalized = normalizeChart(chart);
  const labels = normalized.labels || DEFAULT_CHART.labels;
  const dataRange = normalized.range;
  if (!dataRange?.row || !dataRange?.column || labels.type === "none") {
    return null;
  }
  if (labels.type === "sameRowColumn") {
    const column = columnNameToIndex(labels.reference);
    if (column == null) return null;
    return {
      row: [...dataRange.row],
      column: [column, column],
    };
  }
  if (labels.type === "sameColumnRow") {
    const row = rowReferenceToIndex(labels.reference);
    if (row == null) return null;
    return {
      row: [row, row],
      column: [...dataRange.column],
    };
  }
  if (labels.type === "range") {
    const labelRange = parseRangeText(labels.reference);
    if (!labelRange) return null;
    if (isOneDimensionalRange(labelRange)) {
      return labelRange;
    }
    return {
      row: [...labelRange.row],
      column: [labelRange.column[0], labelRange.column[0]],
    };
  }
  return null;
};

export const isChartDataRangeValid = (range) => isOneDimensionalRange(range);

export const isChartLabelRangeSizeValid = (dataRange, labelRange) =>
  !labelRange || getRangeLength(dataRange) === getRangeLength(labelRange);

export const extractChartData = (sheet, chart) => {
  const normalized = normalizeChart(chart);
  const range = normalized.range;
  if (!range?.row || !range?.column) {
    return { points: [], error: "La plage est invalide." };
  }

  const rows = range.row[1] - range.row[0] + 1;
  const columns = range.column[1] - range.column[0] + 1;
  if (rows < 1 || columns < 1) {
    return { points: [], error: "La plage est vide." };
  }
  if (!isChartDataRangeValid(range)) {
    return {
      points: [],
      error: "La plage de données doit être une seule ligne ou une seule colonne de valeurs.",
    };
  }
  const cellMap = new Map(
    getSheetCelldata(sheet).map((cell) => [getCellKey(cell.r, cell.c), cell]),
  );
  const isHorizontalData = isHorizontalRange(range);
  const pointCount = getRangeLength(range);
  const labelRange = getChartLabelRange(normalized);
  const isHorizontalLabelRange = isHorizontalRange(labelRange);
  const points = [];

  for (let index = 0; index < pointCount; index++) {
    const row = isHorizontalData ? range.row[0] : range.row[0] + index;
    const valueColumn = isHorizontalData ? range.column[0] + index : range.column[0];
    const valueCell = cellMap.get(getCellKey(row, valueColumn));
    const value = toNumber(getCellDisplayValue(valueCell));
    const labelRow = labelRange
      ? isHorizontalLabelRange
        ? labelRange.row[0]
        : labelRange.row[0] + index
      : null;
    const labelColumn = labelRange
      ? isHorizontalLabelRange
        ? labelRange.column[0] + index
        : labelRange.column[0]
      : null;
    const labelCell =
      labelRow == null || labelColumn == null
        ? null
        : cellMap.get(getCellKey(labelRow, labelColumn));
    const rawLabel = labelCell ? getCellDisplayValue(labelCell) : index + 1;
    const label = String(rawLabel ?? "").trim() || String(index + 1);
    if (value == null) continue;
    points.push({
      label,
      value,
      x: toNumber(rawLabel) ?? points.length + 1,
    });
  }

  if (points.length === 0) {
    return {
      points,
      error: "Aucune valeur numérique trouvée dans la plage.",
    };
  }

  const maxPoints = normalized.type === "pie" ? MAX_PIE_POINTS : MAX_POINTS;
  if (points.length > maxPoints) {
    return {
      points: [],
      error: `Choisis au plus ${maxPoints} valeurs pour garder le graphique lisible.`,
    };
  }

  if (normalized.type === "pie") {
    if (points.some((point) => point.value < 0)) {
      return {
        points,
        error: "Un graphique en secteurs ne peut pas utiliser de valeurs négatives.",
      };
    }
    if (points.every((point) => point.value === 0)) {
      return {
        points,
        error: "Un graphique en secteurs a besoin d'au moins une valeur positive.",
      };
    }
  }

  return { points, error: "" };
};

export const getInitialChartPosition = () => ({
  left: Math.max(80, Math.round(window.innerWidth * 0.5 - 190)),
  top: Math.max(96, Math.round(window.innerHeight * 0.5 - 130)),
  width: 380,
  height: 260,
});
