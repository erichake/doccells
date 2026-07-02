import { locale as getFortuneLocale } from "@fortune-sheet/core";

const FALLBACK_TEXTS = {
  menuBarLabel: "DocCells menus",
  file: "File",
  edit: "Edit",
  view: "View",
  insert: "Insert",
  data: "Data",
  tools: "Tools",
  open: "Open",
  export: "Export",
  show: "Show",
  gridlines: "Gridlines",
};

const stripShortcutHint = (text) =>
  typeof text === "string" ? text.replace(/\s*\([^)]*\)\s*$/, "") : text;

const pick = (...values) =>
  values.find((value) => typeof value === "string" && value.trim().length > 0) ||
  "";

export const getStandaloneMenuTexts = (appTexts, lang) => {
  const fortuneTexts = getFortuneLocale({ lang });
  const custom = appTexts?.standaloneMenu || {};
  const toolbar = fortuneTexts.toolbar || {};
  const freezen = fortuneTexts.freezen || {};
  const sort = fortuneTexts.sort || {};
  const filter = fortuneTexts.filter || {};

  return {
    menuBarLabel: pick(custom.menuBarLabel, FALLBACK_TEXTS.menuBarLabel),
    roots: {
      file: pick(custom.file, FALLBACK_TEXTS.file),
      edit: pick(custom.edit, FALLBACK_TEXTS.edit),
      view: pick(custom.view, FALLBACK_TEXTS.view),
      insert: pick(custom.insert, FALLBACK_TEXTS.insert),
      format: pick(toolbar.format, "Format"),
      data: pick(custom.data, FALLBACK_TEXTS.data),
      tools: pick(custom.tools, FALLBACK_TEXTS.tools),
    },
    items: {
      open: pick(custom.open, FALLBACK_TEXTS.open),
      export: pick(custom.export, FALLBACK_TEXTS.export),
      undo: pick(toolbar.undo, "Undo"),
      redo: pick(toolbar.redo, "Redo"),
      clearFormat: pick(toolbar["clear-format"], "Clear format"),
      show: pick(custom.show, FALLBACK_TEXTS.show),
      gridlines: pick(custom.gridlines, FALLBACK_TEXTS.gridlines),
      freeze: pick(toolbar.freeze, freezen.default, "Freeze"),
      freezeRow: pick(
        freezen.freezenRowRange,
        toolbar.freezenRowRange,
        "Freeze to current row",
      ),
      freezeColumn: pick(
        freezen.freezenColumnRange,
        toolbar.freezenColumnRange,
        "Freeze to current column",
      ),
      freezeCell: pick(
        freezen.freezenRCRange,
        toolbar.freezenRCRange,
        "Freeze to current cell",
      ),
      freezeCancel: pick(
        freezen.freezenCancel,
        toolbar.freezenCancel,
        "Cancel freezing",
      ),
      image: pick(filter.image, "Image"),
      chart: pick(appTexts?.charts?.toolbar, toolbar.chart, "Chart"),
      bold: pick(
        stripShortcutHint(toolbar.bold),
        appTexts?.conditionalFormatting?.styleLabels?.bold,
        "Bold",
      ),
      italic: pick(
        stripShortcutHint(toolbar.italic),
        appTexts?.conditionalFormatting?.styleLabels?.italic,
        "Italic",
      ),
      underline: pick(
        stripShortcutHint(toolbar.underline),
        appTexts?.conditionalFormatting?.styleLabels?.underline,
        "Underline",
      ),
      conditionalFormatting: pick(
        appTexts?.conditionalFormatting?.toolbar,
        toolbar.conditionalFormat,
        "Conditional formatting",
      ),
      sortAndFilter: pick(toolbar.sortAndFilter, "Sort and filter"),
      sortAscending: pick(sort.asc, filter.sortByAsc, "Ascending"),
      sortDescending: pick(sort.desc, filter.sortByDesc, "Descending"),
      createFilter: pick(filter.filter, toolbar.filter, "Create filter"),
      clearFilter: pick(filter.clearFilter, "Clear filter"),
      protectWorkbook: pick(
        appTexts?.toggleSheetProtection,
        "Protect / Unprotect workbook",
      ),
    },
  };
};
