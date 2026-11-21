import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { flushSync } from "react-dom";
import { Workbook } from "@fortune-sheet/react";
import { update as formatNumber } from "@fortune-sheet/core";
import { transformExcelToFortune } from "./lib/FortuneSheetExcel/main.js";
import {
  drawSparkline,
  parseSparklineFormula,
  resolveSparklineValues,
} from "./features/sparklines/sparklineUtils.js";
import { exportToExcel } from "./utils/exportToExcel.js";
import { customLocales } from "./locales/custom.js";
import { ConditionalFormattingDialog } from "./features/conditionalFormatting/ConditionalFormattingDialog.jsx";
import { getConditionalFormattingTexts } from "./features/conditionalFormatting/conditionalFormattingConstants.js";
import { ChartDialog } from "./features/charts/ChartDialog.jsx";
import { ChartLayer } from "./features/charts/ChartRenderer.jsx";
import { CustomNumberFormatDialog } from "./features/customNumberFormat/CustomNumberFormatDialog.jsx";
import { getCustomNumberFormatTexts } from "./features/customNumberFormat/customNumberFormatUtils.js";
import { AlternatingColorsDialog } from "./features/alternatingColors/AlternatingColorsDialog.jsx";
import {
  columnToName,
  getChartTexts,
  normalizeChart,
} from "./features/charts/chartUtils.js";
import { normalizeImportedWorkbook } from "./features/excelImport/normalizeImportedWorkbook.js";
import {
  extractGoogleSheetId,
  buildGoogleSheetProxyUrl,
} from "./utils/googleSheetsUrl.js";
import { useFortuneToolbarButtons } from "./features/fortuneSheet/useFortuneToolbarButtons.js";
import { StandaloneMenuBar } from "./features/standaloneMenu/StandaloneMenuBar.jsx";
import { DefinedNamesUI } from "./features/definedNames/DefinedNamesUI.jsx";
import { getDefinedNamesTexts } from "./features/definedNames/definedNamesTexts.js";
import {
  parseDefinedNameReference,
  selectionToDefinedNameReference,
  upsertDefinedName,
} from "./features/definedNames/definedNamesUtils.js";
import { getStandaloneMenuTexts } from "./features/standaloneMenu/standaloneMenuTexts.js";
import { DropdownDialog } from "./features/dataValidation/DropdownDialog.jsx";
import { getDataValidationTexts } from "./features/dataValidation/dataValidationTexts.js";
import { PrintDialog } from "./features/printing/PrintDialog.jsx";
import { getPrintingTexts } from "./features/printing/printingTexts.js";
import { FileDropVeil } from "./features/fileDrop/FileDropVeil.jsx";
import { getFileDropTexts } from "./features/fileDrop/fileDropTexts.js";
import { DateCellPickerPopover } from "./features/dateCellPicker/DateCellPickerPopover.jsx";
import { useDateCellPicker } from "./features/dateCellPicker/useDateCellPicker.js";
import {
  applyDataValidation,
  createCheckboxRule,
  createDropdownRangeRule,
  createDropdownRule,
  getDataValidationRulesByCell,
  getSelectedRanges,
} from "./features/dataValidation/dataValidationUtils.js";
import {
  clearRecentFiles,
  forgetRecentFile,
  getRecentFiles,
  isMissingRecentFileError,
  rememberRecentFile,
  requestRecentFilePermission,
} from "./features/recentFiles/indexedDbRecentFiles.js";
import {
  dataToCelldata,
  ensureSheetCalcChains,
  getAvailableDefaultSheetName,
  getDefaultSheetNumber,
  getWorkbookGridLinesPreference,
  isDefaultSheetName,
  normalizeShowGridLines,
  setWorkbookGridLines,
} from "./features/workbook/workbookUtils.js";
import {
  calculateSimpleWorkdayFormula,
  getFormulaDisplayValue,
  toExcelFormulaValue,
} from "./features/workbook/excelDateFormulaUtils.js";
import {
  applyConditionalFormatting,
  createConditionalFormatApiCalls,
  rangeToText,
  stripConditionalFormattingMarkers,
} from "./features/conditionalFormatting/conditionalFormattingUtils.js";
import {
  applyHostValueUpdates,
  applyLiveCellUpdates,
  isFormulaUpdate,
  readHostDependencies,
  readHostNames,
  recalculateWorkbook,
  resolveSheetId,
} from "./features/liveUpdate/liveCellUpdates.js";
import {
  createDocCellsCore,
  createWindowApi,
  embedConfig,
} from "./features/embed/embedMode.js";
import { startMessageProtocol } from "./features/embed/messageProtocol.js";
import {
  readWorkbookArchive,
  writeWorkbookArchive,
} from "./features/archive/workbookArchive.js";
import { afterFrameOrTask, createRedrawScheduler } from "./features/embed/visibility.js";
// Barres dans la page hôte (EMBED.md, section 14).
import {
  getChrome,
  setChromeAvailable,
  subscribeChrome,
  unmountChrome,
} from "./features/embed/chromeMount.js";
import { watchDialogs } from "./features/embed/dialogWatch.js";
import {
  AUTOSAVE_DEBOUNCE_MS,
  deleteRecoverySnapshot,
  getRecoverySnapshot,
  saveRecoverySnapshot,
} from "./features/autosave/indexedDbAutosave.js";

const SUPPORTED_LANGS = ["zh-CN", "zh-TW", "en", "fr-FR", "es-ES", "hi", "ru", "pt", "de", "el", "it", "nl"];
const detectedLang =
  SUPPORTED_LANGS.includes(navigator.language)
    ? navigator.language
    : (SUPPORTED_LANGS.find((l) => navigator.language.startsWith(l.split("-")[0])) ?? "en");
const t = customLocales[detectedLang] ?? customLocales["en"];
const conditionalFormattingTexts = getConditionalFormattingTexts(t.conditionalFormatting);
const chartTexts = getChartTexts(t.charts);
const customNumberFormatTexts = getCustomNumberFormatTexts(
  t.customNumberFormat,
  detectedLang,
);
const DEFAULT_COLUMN_WIDTH = 99;
// Délai sans mise à jour rapide (window.setCellValues) après lequel App
// resynchronise son état (getSheetData, autosauvegarde, mise en forme
// conditionnelle, graphiques) : une seule fois en fin de glissement.
const LIVE_UPDATE_COMMIT_DELAY_MS = 300;
const sheetPrefix =
  {
    "zh-CN": "工作表",
    "zh-TW": "工作表",
    en: "Sheet",
    "fr-FR": "Feuille",
    "es-ES": "Hoja",
    hi: "शीट",
    ru: "Лист",
    pt: "Folha",
    de: "Tabelle",
    el: "Φύλλο",
    it: "Foglio",
    nl: "Blad",
  }[detectedLang] ?? "Sheet";
const currencySymbol =
  {
    "zh-CN": "¥",
    "zh-TW": "NT$",
    en: "$",
    "fr-FR": "€",
    "es-ES": "€",
    hi: "₹",
    ru: "₽",
    pt: "R$",
    de: "€",
    el: "€",
    it: "€",
    nl: "€",
  }[detectedLang] ?? "$";
const dataValidationTexts = getDataValidationTexts(detectedLang);
const printingTexts = getPrintingTexts(detectedLang);
const fileDropTexts = getFileDropTexts(detectedLang);
const standaloneMenuTextsBase = getStandaloneMenuTexts(
  t,
  detectedLang,
  currencySymbol,
);
const standaloneMenuTexts = {
  ...standaloneMenuTextsBase,
  items: {
    ...standaloneMenuTextsBase.items,
    checkbox: dataValidationTexts.checkbox,
    dropdown: dataValidationTexts.dropdown,
    print: printingTexts.menuItem,
  },
};
const definedNamesTexts = getDefinedNamesTexts(detectedLang);
const alternatingColorsTexts = standaloneMenuTexts.alternatingColors;

const isSingleColumnRange = (range) =>
  Boolean(range?.row && range?.column && range.column[0] === range.column[1]);

const isSingleRowRange = (range) =>
  Boolean(range?.row && range?.column && range.row[0] === range.row[1]);

const haveSameRows = (left, right) =>
  left?.row?.[0] === right?.row?.[0] && left?.row?.[1] === right?.row?.[1];

const haveSameColumns = (left, right) =>
  left?.column?.[0] === right?.column?.[0] &&
  left?.column?.[1] === right?.column?.[1];

const getChartInitialSelection = (selection) => {
  const ranges = Array.isArray(selection)
    ? selection.filter((range) => range?.row && range?.column)
    : [];
  if (
    ranges.length === 2 &&
    ranges.every(isSingleColumnRange) &&
    haveSameRows(ranges[0], ranges[1])
  ) {
    return {
      rangeText: rangeToText(ranges[1]),
      labels: {
        type: "sameRowColumn",
        reference: columnToName(ranges[0].column[0]),
      },
    };
  }
  if (
    ranges.length === 2 &&
    ranges.every(isSingleRowRange) &&
    haveSameColumns(ranges[0], ranges[1])
  ) {
    return {
      rangeText: rangeToText(ranges[1]),
      labels: {
        type: "sameColumnRow",
        reference: String(ranges[0].row[0] + 1),
      },
    };
  }
  const range = ranges[ranges.length - 1];
  return {
    rangeText: range ? rangeToText(range) : "A1:B5",
    labels: null,
  };
};

const preserveCustomList = (liveList, previousList) => {
  if (Array.isArray(previousList)) return previousList;
  return Array.isArray(liveList) ? liveList : [];
};

const isTopLevelWindow = () => {
  try {
    return window.self === window.top;
  } catch {
    return false;
  }
};

const requestRecoveryChoice = (snapshot) =>
  new Promise((resolve) => {
    // During a Vite refresh the splash may already have completed its exit.
    // Do not leave application startup waiting forever for controls that no
    // longer exist.
    if (!document.getElementById("splash-screen")) {
      resolve("ignore");
      return;
    }

    const handleChoice = (event) => {
      window.removeEventListener("doccells:recovery-choice", handleChoice);
      resolve(event.detail);
    };

    window.addEventListener("doccells:recovery-choice", handleChoice);
    window.dispatchEvent(
      new CustomEvent("doccells:recovery-available", {
        detail: { savedAt: snapshot.savedAt },
      }),
    );
  });

// Normalise le celldata d'une feuille à partir de sa grille vivante, en
// réutilisant le cache du passage précédent : FortuneSheet passe par immer,
// donc une feuille (ou une ligne) inchangée garde la même référence d'objet.
// Une ligne n'est réutilisable que si elle ne contient aucune formule : la
// normalisation d'une cellule sans formule est purement locale, alors qu'une
// formule (WORKDAY) peut dépendre de cellules situées ailleurs.
const normalizeSheetCelldata = (sheet, cached) => {
  if (!sheet.data) return null;
  if (cached && cached.dataRef === sheet.data) return cached;

  const rowCache = [];
  const celldata = [];
  const normalizedValues = new Map();

  const resolveCellValue = (targetRow, targetColumn) => {
    const normalized = normalizedValues.get(`${targetRow}_${targetColumn}`);
    if (normalized !== undefined) return normalized;

    const targetCell = sheet.data?.[targetRow]?.[targetColumn];
    if (!targetCell || typeof targetCell !== "object") return targetCell;
    return targetCell.v ?? targetCell.m;
  };

  sheet.data.forEach((row, r) => {
    const prevRow = cached?.rowCache?.[r];
    if (prevRow && prevRow.rowRef === row && !prevRow.hasFormula) {
      rowCache[r] = prevRow;
      prevRow.cells.forEach((entry) => celldata.push(entry));
      return;
    }

    const cells = [];
    let hasFormula = false;
    row.forEach((cell, c) => {
      if (!cell) return;
      if (cell.f) hasFormula = true;
      const parsedValue =
        cell.v === null
          ? null
          : typeof cell.v === "number"
            ? Number.isFinite(cell.v)
              ? cell.v
              : undefined
            : typeof cell.v === "string" && cell.v.trim() === ""
              ? cell.v
              : typeof cell.v === "string" && !Number.isNaN(Number(cell.v))
                ? parseFloat(cell.v)
                : cell.v;
      const formulaValue = cell.f
        ? (calculateSimpleWorkdayFormula(cell.f, resolveCellValue) ??
          toExcelFormulaValue(parsedValue))
        : parsedValue;
      const displayValue =
        cell.f && formulaValue !== parsedValue
          ? getFormulaDisplayValue(formulaValue, cell)
          : (cell.m ?? getFormulaDisplayValue(formulaValue, cell));
      const updatedVF = cell.f ? { f: cell.f, v: formulaValue } : {};
      normalizedValues.set(`${r}_${c}`, formulaValue);

      const normalizedCell = {
        ...cell,
        v: formulaValue,
        VF: Object.keys(updatedVF).length ? updatedVF : undefined,
      };
      if (displayValue === undefined) {
        delete normalizedCell.m;
      } else {
        normalizedCell.m = displayValue;
      }

      cells.push({
        r,
        c,
        v: normalizedCell,
      });
    });
    rowCache[r] = { rowRef: row, cells, hasFormula };
    cells.forEach((entry) => celldata.push(entry));
  });

  return { dataRef: sheet.data, rowCache, celldata };
};

// Feuille unique (?singleSheet, EMBED.md) : la première feuille, dans l'ordre
// des onglets, est celle qui est montrée.
const showFirstSheet = (sheets) => {
  if (sheets.length === 0) return sheets;
  const first = sheets.reduce((best, sheet) =>
    (Number(sheet.order) || 0) < (Number(best.order) || 0) ? sheet : best,
  );
  return sheets.map((sheet) => ({ ...sheet, status: sheet === first ? 1 : 0 }));
};

const App = () => {
  const [sheetData, setSheetData] = useState([]);
  const [documentName, setDocumentName] = useState(
    standaloneMenuTexts.items.untitled,
  );
  const [documentDirty, setDocumentDirty] = useState(false);
  const [recentFiles, setRecentFiles] = useState([]);
  const [appMode, setAppMode] = useState("teacher");
  // Mode élève intégré : ni barre de menus ni barre de boutons (la barre de
  // formule reste), donc rien à sortir dans la page hôte (EMBED.md).
  const embeddedWithoutBars =
    embedConfig.enabled && (embedConfig.student || appMode === "student");
  useEffect(() => {
    setChromeAvailable(!embeddedWithoutBars);
    if (embeddedWithoutBars) unmountChrome();
  }, [embeddedWithoutBars]);
  const [workbookKey, setWorkbookKey] = useState(0);
  // Barres dessinées dans la page hôte (chromeMount.js), ou null.
  const [chrome, setChrome] = useState(getChrome);
  useEffect(
    () => subscribeChrome((next) => flushSync(() => setChrome(next))),
    [],
  );
  const [conditionalDialogOpen, setConditionalDialogOpen] = useState(false);
  const [conditionalSheetIndex, setConditionalSheetIndex] = useState(0);
  const [conditionalInitialRange, setConditionalInitialRange] = useState("A1");
  const [chartDialogOpen, setChartDialogOpen] = useState(false);
  const [chartSheetIndex, setChartSheetIndex] = useState(0);
  const [chartInitialRange, setChartInitialRange] = useState("A1:B5");
  const [chartInitialLabels, setChartInitialLabels] = useState(null);
  const [chartEditing, setChartEditing] = useState(null);
  const [customNumberFormatOpen, setCustomNumberFormatOpen] = useState(false);
  const [customNumberFormatInitial, setCustomNumberFormatInitial] = useState("#,##0.00");
  const [customNumberFormatSelection, setCustomNumberFormatSelection] = useState([]);
  const [customNumberFormatSelectionLabel, setCustomNumberFormatSelectionLabel] = useState("A1");
  const [alternatingColorsOpen, setAlternatingColorsOpen] = useState(false);
  const [alternatingColorsInitialRange, setAlternatingColorsInitialRange] = useState("A1");
  const [alternatingColorsSheetIndex, setAlternatingColorsSheetIndex] = useState(0);
  const [dropdownDialogOpen, setDropdownDialogOpen] = useState(false);
  const [dataValidationSelection, setDataValidationSelection] = useState([]);
  const [dataValidationSelectionLabel, setDataValidationSelectionLabel] = useState("A1");
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const [definedNames, setDefinedNames] = useState([]);
  const [printDialogOpen, setPrintDialogOpen] = useState(false);
  const [printSheet, setPrintSheet] = useState(null);
  const [printSelection, setPrintSelection] = useState(null);
  const [nameBoxLocation, setNameBoxLocation] = useState("");
  const [nameBoxReference, setNameBoxReference] = useState("");
  const [, setChartRenderKey] = useState(0);
  const sheetDataRef = useRef([]);
  useEffect(() => {
    sheetDataRef.current = sheetData;
  }, [sheetData]);

  const workbookRef = useRef(null);
  const formulasRef = useRef({});
  const syncingConditionalRef = useRef(false);
  const normalizeCacheRef = useRef(new Map());
  const autosaveTimerRef = useRef(null);
  const autosaveArmTimerRef = useRef(null);
  const autosaveEnabledRef = useRef(false);
  const autosaveGenerationRef = useRef(0);
  const awaitingInitialWorkbookChangeRef = useRef(true);
  const handleWorkbookChangeRef = useRef(null);
  const liveUpdateTimerRef = useRef(null);
  const liveUpdatePendingRef = useRef(false);
  const redrawSchedulerRef = useRef(null);
  const workbookChangeOriginRef = useRef("user");
  const docCellsCoreRef = useRef(null);
  const embedOperationsRef = useRef(null);

  const {
    datePicker,
    closeDatePicker,
    commitDatePickerValue,
    changeDatePickerViewMonth,
    beforeDateCellMouseDown,
  } = useDateCellPicker({
    activeSheetIndex,
    definedNames,
    workbookRef,
    sheetDataRef,
  });

  useEffect(() => {
    const commitPastedSparkline = (event) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest(".fortune-container")) return;

      const formula = event.clipboardData?.getData("text/plain")?.trim();
      if (!parseSparklineFormula(formula)) return;

      const workbook = workbookRef.current;
      const selection = workbook?.getSelection?.();
      const row = selection?.[0]?.row?.[0];
      const column = selection?.[0]?.column?.[0];
      if (!Number.isInteger(row) || !Number.isInteger(column)) return;

      // FortuneSheet sometimes treats a paste as text editing instead of a
      // cell paste. In that path the formula remains in the floating editor
      // and is discarded when the user clicks elsewhere. Commit a complete
      // SPARKLINE formula directly to the selected cell instead.
      event.preventDefault();
      event.stopImmediatePropagation();
      workbook.setCellValue(row, column, formula);
    };

    document.addEventListener("paste", commitPastedSparkline, true);
    return () => document.removeEventListener("paste", commitPastedSparkline, true);
  }, []);
  const documentNameRef = useRef(standaloneMenuTexts.items.untitled);
  const fileHandleRef = useRef(null);

  // Ready state for external API (docshare iframe caller)
  const isReadyRef = useRef(false);
  const pendingRef = useRef([]);
  const opQueueRef = useRef(Promise.resolve());
  const supportsNativeFileSave =
    isTopLevelWindow() &&
    typeof window.showOpenFilePicker === "function" &&
    typeof window.showSaveFilePicker === "function";

  useEffect(() => {
    if (!supportsNativeFileSave) return;

    getRecentFiles()
      .then(setRecentFiles)
      .catch((error) => {
        console.warn("Liste des fichiers récents indisponible :", error);
      });
  }, [supportsNativeFileSave]);

  const flushPending = useCallback(() => {
    const queue = pendingRef.current.splice(0);
    queue.forEach((fn) => {
      try {
        fn();
      } catch (e) {
        console.error("❌ Erreur callback ready :", e);
      }
    });
  }, []);

  const runWhenReady = useCallback((fn) => {
    if (isReadyRef.current) fn();
    else pendingRef.current.push(fn);
  }, []);

  const waitUntilReady = useCallback(
    () => new Promise((resolve) => runWhenReady(resolve)),
    [runWhenReady],
  );

  const markReady = useCallback(() => {
    if (isReadyRef.current) return;
    isReadyRef.current = true;
    window.dispatchEvent(new Event("doccells:ready"));
    flushPending();
  }, [flushPending]);

  const scheduleAutosave = useCallback((sheets) => {
    if (!autosaveEnabledRef.current || !Array.isArray(sheets) || sheets.length === 0) {
      return;
    }

    const generation = autosaveGenerationRef.current;
    setDocumentDirty(true);
    window.clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = window.setTimeout(async () => {
      try {
        await saveRecoverySnapshot(sheets, {
          documentName: documentNameRef.current,
        });
        if (generation !== autosaveGenerationRef.current) {
          await deleteRecoverySnapshot();
        }
      } catch (error) {
        console.warn("Autosauvegarde IndexedDB indisponible :", error);
      }
    }, AUTOSAVE_DEBOUNCE_MS);
  }, []);

  const markSessionClean = useCallback(async () => {
    autosaveGenerationRef.current += 1;
    window.clearTimeout(autosaveTimerRef.current);
    setDocumentDirty(false);
    await deleteRecoverySnapshot().catch((error) => {
      console.warn("Impossible de supprimer l'autosauvegarde après export :", error);
    });
  }, []);

  const updateDocumentIdentity = useCallback((name, handle = null) => {
    const nextName = name || standaloneMenuTexts.items.untitled;
    documentNameRef.current = nextName;
    fileHandleRef.current = handle;
    setDocumentName(nextName);
    setDocumentDirty(false);
  }, []);

  const armAutosaveAfterInitialization = useCallback(() => {
    window.clearTimeout(autosaveArmTimerRef.current);
    autosaveArmTimerRef.current = window.setTimeout(() => {
      awaitingInitialWorkbookChangeRef.current = false;
      autosaveEnabledRef.current = isTopLevelWindow();
    }, 250);
  }, []);

  const enqueueOp = useCallback((task) => {
    const run = opQueueRef.current.then(task, task);
    opQueueRef.current = run.catch(() => {});
    return run;
  }, []);

  const resetWorkbook = useCallback(async () => {
    autosaveGenerationRef.current += 1;
    autosaveEnabledRef.current = false;
    awaitingInitialWorkbookChangeRef.current = true;
    window.clearTimeout(autosaveTimerRef.current);
    window.clearTimeout(autosaveArmTimerRef.current);
    formulasRef.current = {};
    setDefinedNames([]);
    normalizeCacheRef.current = new Map();
    // Les attentes de whenDocCellsReady en cours sont gardées : elles seront
    // résolues quand le classeur suivant sera prêt.
    isReadyRef.current = false;
    window.clearTimeout(liveUpdateTimerRef.current);
    liveUpdatePendingRef.current = false;
    // FortuneSheet n'accepte la prop data que tant que son classeur interne
    // est vide : sans remontage, le document suivant serait ignoré et la
    // grille garderait l'ancien. flushSync applique ces changements tout de
    // suite, sans attendre une image (suspendue dans une iframe masquée).
    flushSync(() => {
      setSheetData([]);
      setWorkbookKey((key) => key + 1);
    });
  }, []);

  // Resynchronise App avec la grille vivante après des mises à jour rapides.
  const flushLiveUpdates = useCallback(() => {
    window.clearTimeout(liveUpdateTimerRef.current);
    if (!liveUpdatePendingRef.current) return;
    liveUpdatePendingRef.current = false;
    const sheets = workbookRef.current?.getAllSheets?.();
    if (Array.isArray(sheets) && sheets.length > 0) {
      workbookChangeOriginRef.current = "sync";
      try {
        handleWorkbookChangeRef.current?.(sheets);
      } finally {
        workbookChangeOriginRef.current = "user";
      }
    }
    // La barre de formule ne suit pas les écritures rapides (pas de rendu
    // React) : elle est remise à jour ici, une fois la rafale terminée.
    workbookRef.current?.doccellsRefreshFormulaBar?.();
  }, []);

  // Dessin du canevas après des écritures rapides : au plus un par image,
  // aucun tant que la fenêtre est masquée.
  const requestRedraw = useCallback(() => {
    if (redrawSchedulerRef.current) redrawSchedulerRef.current.request();
    else workbookRef.current?.doccellsRedraw?.();
  }, []);

  // Créé dès le montage : il fait aussi, au retour d'une iframe masquée, le
  // dessin que la garde de FortuneSheet a sauté (mode intégré).
  useEffect(() => {
    const scheduler = createRedrawScheduler(() => workbookRef.current?.doccellsRedraw?.());
    redrawSchedulerRef.current = scheduler;
    return () => {
      scheduler.dispose();
      redrawSchedulerRef.current = null;
    };
  }, []);

  // Lignes modifiées sur place : elles gardent leur référence, on les retire
  // donc du cache de normalisation pour que la resynchronisation les relise.
  const markLiveRowsChanged = useCallback((touched) => {
    touched.forEach((rows, id) => {
      const cached = normalizeCacheRef.current.get(id);
      if (!cached) return;
      cached.dataRef = null;
      rows.forEach((row) => {
        cached.rowCache[row] = undefined;
      });
    });
    liveUpdatePendingRef.current = true;
    window.clearTimeout(liveUpdateTimerRef.current);
    liveUpdateTimerRef.current = window.setTimeout(
      flushLiveUpdates,
      LIVE_UPDATE_COMMIT_DELAY_MS,
    );
  }, [flushLiveUpdates]);

  // Écrit des valeurs par le chemin rapide (voir liveCellUpdates.js) ; une
  // formule passe par le chemin normal (historique, dépendances).
  // updates : [{ r, c, v, sheetId? }]. Renvoie null sans classeur prêt.
  const writeLiveValues = useCallback((updates, defaultSheetId) => {
    const workbook = workbookRef.current;
    const ctx = isReadyRef.current ? workbook?.doccellsGetLiveContext?.() : null;
    if (!ctx) return null;
    const formulas = updates.filter(isFormulaUpdate);
    const values = formulas.length > 0
      ? updates.filter((update) => !isFormulaUpdate(update))
      : updates;
    const startedAt = performance.now();
    const result = values.length > 0
      ? applyLiveCellUpdates(ctx, values, defaultSheetId)
      : { written: 0, recalculated: 0, skipped: [], touched: new Map() };
    const recalc = performance.now() - startedAt;
    if (result.written > 0) {
      markLiveRowsChanged(result.touched);
      requestRedraw();
    }
    formulas.forEach(({ r, c, v, sheetId }) => {
      workbook.setCellValue(r, c, v, { id: sheetId ?? defaultSheetId });
    });
    return {
      written: result.written + formulas.length,
      recalculated: result.recalculated,
      skipped: result.skipped.length,
      formulas: formulas.length,
      ms: { recalc },
    };
  }, [markLiveRowsChanged, requestRedraw]);

  // Valeurs fournies par l'hôte (GEO), même chemin rapide que writeLiveValues.
  // updates : [{ name, v }]. Renvoie null sans classeur prêt.
  const writeHostValuesLive = useCallback((updates) => {
    const ctx = isReadyRef.current ? workbookRef.current?.doccellsGetLiveContext?.() : null;
    if (!ctx) return null;
    const result = applyHostValueUpdates(ctx, updates);
    if (result.recalculated > 0) {
      markLiveRowsChanged(result.touched);
      requestRedraw();
    }
    return { recalculated: result.recalculated };
  }, [markLiveRowsChanged, requestRedraw]);

  // Recalcul complet du classeur chargé (FortuneSheet affiche sinon les
  // valeurs enregistrées), sans historique, puis resynchronisation d'App.
  const recalculateLiveWorkbook = useCallback(() => {
    const ctx = workbookRef.current?.doccellsGetLiveContext?.();
    if (!ctx) return;
    recalculateWorkbook(ctx);
    normalizeCacheRef.current = new Map();
    liveUpdatePendingRef.current = true;
    flushLiveUpdates();
    requestRedraw();
  }, [flushLiveUpdates, requestRedraw]);

  // window.setCellValues : mise à jour rapide d'un lot de cellules d'une
  // feuille, sans historique ni rendu React ; dessin à l'image suivante.
  // Renvoie null si aucun classeur n'est prêt.
  const setCellValuesLive = useCallback((updates, options = {}) => {
    const ctx = isReadyRef.current ? workbookRef.current?.doccellsGetLiveContext?.() : null;
    if (!ctx || !Array.isArray(updates)) return null;
    const sheetId = resolveSheetId(ctx, options.sheet);
    if (sheetId == null) throw new Error(`Feuille inconnue : ${options.sheet}`);
    const result = writeLiveValues(updates, sheetId);
    docCellsCoreRef.current?.notifyHostWrite();
    if (!result) return null;
    return {
      written: result.written,
      recalculated: result.recalculated,
      skipped: result.skipped,
      ms: result.ms,
    };
  }, [writeLiveValues]);

  const handleExcelLoad = useCallback(async (file) => {
    const fortuneData = await transformExcelToFortune(file);
    const { formulas, sheets, definedNames: importedDefinedNames } = normalizeImportedWorkbook(fortuneData.sheets, {
      sheetPrefix,
      definedNames: fortuneData.definedNames,
    });

    autosaveGenerationRef.current += 1;
    window.clearTimeout(autosaveTimerRef.current);
    await deleteRecoverySnapshot().catch((error) => {
      console.warn("Impossible de supprimer l'ancienne autosauvegarde :", error);
    });
    formulasRef.current = formulas;
    setDefinedNames(importedDefinedNames);
    setNameBoxLocation("");
    setNameBoxReference("");
    normalizeCacheRef.current = new Map();
    autosaveEnabledRef.current = false;
    awaitingInitialWorkbookChangeRef.current = true;
    setSheetData(applyConditionalFormatting(sheets));
  }, []);

  useEffect(() => {
    if (sheetData.length === 0) return undefined;
    // Le Workbook n'initialise sa grille qu'après son propre rendu : on
    // attend qu'elle existe pour que l'appelant puisse s'en servir dès la
    // résolution de whenDocCellsReady / setSheetData. Sondage par minuterie
    // et non par requestAnimationFrame, suspendu dans une iframe masquée.
    let timer = 0;
    const markWhenGridIsReady = () => {
      const liveSheets = workbookRef.current?.getAllSheets?.();
      if (
        Array.isArray(liveSheets) &&
        liveSheets.some((sheet) => Array.isArray(sheet?.data))
      ) {
        markReady();
      } else {
        timer = window.setTimeout(markWhenGridIsReady, 16);
      }
    };
    markWhenGridIsReady();
    return () => window.clearTimeout(timer);
  }, [sheetData, markReady]);

  useEffect(
    () => () => {
      window.clearTimeout(autosaveTimerRef.current);
      window.clearTimeout(autosaveArmTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!isTopLevelWindow()) return;
    document.title = supportsNativeFileSave
      ? `${documentDirty ? "● " : ""}${documentName} — DocCells`
      : "DocCells";
  }, [documentDirty, documentName, supportsNativeFileSave]);

  useEffect(() => {
    const sanitizeNameBox = () => {
      document.querySelectorAll(".fortune-name-box").forEach((box) => {
        const text = box.textContent || "";
        if (!text.includes("NaN")) return;

        const sanitized = text.replace(/:?NaN/g, "");
        box.textContent = sanitized || "A1";
      });
    };

    sanitizeNameBox();
    const rafId = requestAnimationFrame(sanitizeNameBox);
    const observer = new MutationObserver(sanitizeNameBox);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const loadExcelFromURL = useCallback(
    async (url, fileName = "empty.xlsx") => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const file = new File([blob], fileName);
      await handleExcelLoad(file);
    },
    [handleExcelLoad],
  );

  const loadExcelFromFile = useCallback(
    async (file) => {
      await handleExcelLoad(file);
    },
    [handleExcelLoad],
  );

  const loadDocumentFromFile = useCallback(
    async (file, handle = null) => {
      await resetWorkbook();
      await loadExcelFromFile(file);
      updateDocumentIdentity(file.name, handle);
    },
    [loadExcelFromFile, resetWorkbook, updateDocumentIdentity],
  );

  const rememberFileHandle = useCallback(async (handle) => {
    if (!handle) return;
    try {
      setRecentFiles(await rememberRecentFile(handle));
    } catch (error) {
      console.warn("Impossible de mémoriser le fichier récent :", error);
    }
  }, []);

  const openDocument = useCallback(async () => {
    if (!isTopLevelWindow()) return;

    if (!supportsNativeFileSave) {
      document.getElementById("fileInput")?.click();
      return;
    }

    try {
      const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
          {
            description: "Excel workbook",
            accept: {
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
                ".xlsx",
              ],
            },
          },
        ],
      });
      if (!handle) return;
      await loadDocumentFromFile(await handle.getFile(), handle);
      await rememberFileHandle(handle);
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("❌ Impossible d'ouvrir ce fichier :", error);
        alert(`Impossible d'ouvrir ce fichier.\n${error?.message || String(error)}`);
      }
    }
  }, [loadDocumentFromFile, rememberFileHandle, supportsNativeFileSave]);

  const openRecentFile = useCallback(
    async (entry) => {
      try {
        if (!(await requestRecentFilePermission(entry.handle))) return;
        await loadDocumentFromFile(await entry.handle.getFile(), entry.handle);
        await rememberFileHandle(entry.handle);
      } catch (error) {
        if (isMissingRecentFileError(error)) {
          try {
            setRecentFiles(await forgetRecentFile(entry.id));
          } catch (storageError) {
            setRecentFiles((entries) =>
              entries.filter((recentEntry) => recentEntry.id !== entry.id),
            );
            console.warn(
              "Impossible de retirer le fichier récent disparu :",
              storageError,
            );
          }
        } else if (error?.name !== "AbortError") {
          console.error("❌ Impossible d'ouvrir ce fichier récent :", error);
          alert(`Impossible d'ouvrir ce fichier.\n${error?.message || String(error)}`);
        }
      }
    },
    [loadDocumentFromFile, rememberFileHandle],
  );

  const clearRecentFileList = useCallback(async () => {
    try {
      setRecentFiles(await clearRecentFiles());
    } catch (error) {
      console.warn("Impossible d'effacer la liste des fichiers récents :", error);
    }
  }, []);

  const getSuggestedFileName = useCallback(() => {
    const name = documentNameRef.current || standaloneMenuTexts.items.untitled;
    return name.toLowerCase().endsWith(".xlsx") ? name : `${name}.xlsx`;
  }, []);

  const writeDocumentToHandle = useCallback(
    async (handle) => {
      const permission = await handle.queryPermission?.({ mode: "readwrite" });
      if (
        permission !== "granted" &&
        (await handle.requestPermission?.({ mode: "readwrite" })) !== "granted"
      ) {
        throw new DOMException("Write permission was not granted.", "NotAllowedError");
      }

      const blob = await exportToExcel(
        stripConditionalFormattingMarkers(sheetDataRef.current),
        { returnBlob: true },
      );
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();

      updateDocumentIdentity(handle.name, handle);
      await markSessionClean();
      await rememberFileHandle(handle);
    },
    [markSessionClean, rememberFileHandle, updateDocumentIdentity],
  );

  const saveDocumentAs = useCallback(async () => {
    if (!supportsNativeFileSave || !isTopLevelWindow()) return;

    try {
      // Le picker doit précéder la génération asynchrone du classeur afin de
      // conserver l'activation utilisateur exigée par le navigateur.
      const handle = await window.showSaveFilePicker({
        suggestedName: getSuggestedFileName(),
        types: [
          {
            description: "Excel workbook",
            accept: {
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
                ".xlsx",
              ],
            },
          },
        ],
      });
      if (handle) await writeDocumentToHandle(handle);
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("❌ Échec de l'enregistrement :", error);
      }
    }
  }, [getSuggestedFileName, supportsNativeFileSave, writeDocumentToHandle]);

  const saveDocument = useCallback(async () => {
    if (!supportsNativeFileSave || !isTopLevelWindow()) return;
    if (!fileHandleRef.current) {
      await saveDocumentAs();
      return;
    }

    try {
      await writeDocumentToHandle(fileHandleRef.current);
    } catch (error) {
      if (error?.name === "NotAllowedError") {
        await saveDocumentAs();
      } else if (error?.name !== "AbortError") {
        console.error("❌ Échec de l'enregistrement :", error);
      }
    }
  }, [saveDocumentAs, supportsNativeFileSave, writeDocumentToHandle]);

  const exportDocument = useCallback(async () => {
    if (!isTopLevelWindow() || sheetDataRef.current.length === 0) return;

    try {
      await exportToExcel(
        stripConditionalFormattingMarkers(sheetDataRef.current),
        { fileName: getSuggestedFileName() },
      );
      await markSessionClean();
    } catch (error) {
      console.error("❌ Échec de l'export :", error);
    }
  }, [getSuggestedFileName, markSessionClean]);

  const loadFallback = useCallback(async () => {
    try {
      await loadExcelFromURL("empty.xlsx", "empty.xlsx");
    } catch {
      console.error("❌ Impossible de charger le fichier de repli empty.xlsx");
    }
  }, [loadExcelFromURL]);

  const syncExcelDateFormulaResult = useCallback((row, column, newValue) => {
    if (!newValue || typeof newValue !== "object" || !newValue.f) return;

    const workbook = workbookRef.current;
    if (!workbook?.batchCallApis) return;

    const sheets = workbook.getAllSheets?.() || sheetDataRef.current;
    const currentSheet = workbook.getSheet?.() || sheets[activeSheetIndex];
    const sheetIndex = Math.max(
      0,
      sheets.findIndex((sheet) => sheet?.id === currentSheet?.id),
    );
    const sheet = sheets[sheetIndex] || currentSheet;
    const resolveCellValue = (targetRow, targetColumn) => {
      const cell = sheet?.data?.[targetRow]?.[targetColumn];
      if (!cell || typeof cell !== "object") return cell;
      return cell.v ?? cell.m;
    };

    const recalculatedValue =
      calculateSimpleWorkdayFormula(newValue.f, resolveCellValue) ??
      toExcelFormulaValue(newValue.v);

    if (recalculatedValue == null || recalculatedValue === newValue.v) return;

    workbook.batchCallApis([
      {
        name: "setCellValue",
        args: [
          row,
          column,
          {
            ...newValue,
            v: recalculatedValue,
            m: getFormulaDisplayValue(recalculatedValue, newValue),
          },
        ],
      },
    ]);
  }, [activeSheetIndex]);

  const handleLoadError = useCallback(
    async (error) => {
      alert(`Impossible d'ouvrir ce fichier.\n${error?.message || String(error)}`);
      await loadFallback();
    },
    [loadFallback],
  );

  // A dropped workbook opens like a chosen one, keeping its handle when the
  // browser provides it so that saving writes back to the dropped file.
  const openDroppedFile = useCallback(
    async (file, handlePromise) => {
      const handle = await handlePromise;
      const fileHandle =
        supportsNativeFileSave && handle?.kind === "file" ? handle : null;
      try {
        await loadDocumentFromFile(file, fileHandle);
      } catch (error) {
        await handleLoadError(error);
        return;
      }
      await rememberFileHandle(fileHandle);
    },
    [handleLoadError, loadDocumentFromFile, rememberFileHandle, supportsNativeFileSave],
  );

  const getActiveSheetIndex = useCallback(() => {
    const wb = workbookRef.current;
    const currentSheet = wb?.getSheet?.();
    const sheets = wb?.getAllSheets?.() || sheetDataRef.current;
    if (currentSheet?.id != null) {
      const byId = sheets.findIndex((sheet) => sheet.id === currentSheet.id);
      if (byId >= 0) return byId;
    }
    if (currentSheet?.name) {
      const byName = sheets.findIndex((sheet) => sheet.name === currentSheet.name);
      if (byName >= 0) return byName;
    }
    return 0;
  }, []);

  const getWorkbookSheetsForCommit = useCallback(() => {
    const wb = workbookRef.current;
    const liveSheets = wb?.getAllSheets?.() || sheetDataRef.current;
    return liveSheets.map((sheet, index) => ({
      ...sheet,
      celldata: sheet.celldata || dataToCelldata(sheet.data),
      customConditionalFormatting: preserveCustomList(
        sheet.customConditionalFormatting,
        sheetDataRef.current[index]?.customConditionalFormatting,
      ),
      customCharts: preserveCustomList(
        sheet.customCharts,
        sheetDataRef.current[index]?.customCharts,
      ),
      showGridLines: normalizeShowGridLines(
        sheet.showGridLines ?? sheetDataRef.current[index]?.showGridLines,
      ),
    }));
  }, []);

  const openPrintDialog = useCallback(() => {
    const workbook = workbookRef.current;
    const sheet = workbook?.getSheet?.() || sheetDataRef.current[getActiveSheetIndex()];
    if (!sheet) return;
    const ranges = (workbook?.getSelection?.() || []).filter(
      (range) => range?.row && range?.column,
    );
    const selection = ranges.length ? ranges[ranges.length - 1] : null;
    setPrintSheet({
      ...sheet,
      celldata: sheet.celldata || dataToCelldata(sheet.data),
    });
    setPrintSelection(
      selection
        ? { row: [...selection.row], column: [...selection.column] }
        : null,
    );
    setPrintDialogOpen(true);
  }, [getActiveSheetIndex]);

  const commitConditionalSheets = useCallback((sheets, { remount = true } = {}) => {
    const formatted = applyConditionalFormatting(sheets);
    syncingConditionalRef.current = true;
    sheetDataRef.current = formatted;
    setSheetData(formatted);
    scheduleAutosave(formatted);
    if (remount) setWorkbookKey((key) => key + 1);
    afterFrameOrTask(() => {
      syncingConditionalRef.current = false;
    });
  }, [scheduleAutosave]);

  const openConditionalDialog = useCallback(() => {
    const sheetIndex = getActiveSheetIndex();
    const selection = workbookRef.current?.getSelection?.();
    const range = selection?.[selection.length - 1];
    setConditionalSheetIndex(sheetIndex);
    setConditionalInitialRange(range ? rangeToText(range) : "A1");
    setConditionalDialogOpen(true);
  }, [getActiveSheetIndex]);

  const openChartDialog = useCallback(() => {
    const sheetIndex = getActiveSheetIndex();
    const selection = workbookRef.current?.getSelection?.();
    const initialSelection = getChartInitialSelection(selection);
    setChartSheetIndex(sheetIndex);
    setChartInitialRange(initialSelection.rangeText);
    setChartInitialLabels(initialSelection.labels);
    setChartEditing(null);
    setChartDialogOpen(true);
  }, [getActiveSheetIndex]);

  const openCustomNumberFormatDialog = useCallback(() => {
    const workbook = workbookRef.current;
    if (!workbook) return;
    const selection = (workbook.getSelection?.() || [])
      .filter((range) => range?.row && range?.column)
      .map((range) => ({
        row: [...range.row],
        column: [...range.column],
        row_focus: range.row_focus,
        column_focus: range.column_focus,
      }));
    const ranges = selection.length
      ? selection
      : [{ row: [0, 0], column: [0, 0], row_focus: 0, column_focus: 0 }];
    const focusRange = ranges[ranges.length - 1];
    const row = focusRange.row_focus ?? focusRange.row[0];
    const column = focusRange.column_focus ?? focusRange.column[0];
    const activeCell = workbook.getSheet?.()?.data?.[row]?.[column];
    const activeFormat = activeCell?.ct?.fa;

    setCustomNumberFormatInitial(
      activeFormat && activeFormat !== "General" && activeFormat !== "@"
        ? activeFormat
        : "#,##0.00",
    );
    setCustomNumberFormatSelection(ranges);
    setCustomNumberFormatSelectionLabel(ranges.map(rangeToText).join(", "));
    setCustomNumberFormatOpen(true);
  }, []);

  const openAlternatingColorsDialog = useCallback(() => {
    const workbook = workbookRef.current;
    const ranges = getSelectedRanges(workbook?.getSelection?.());
    const range = ranges[ranges.length - 1];
    setAlternatingColorsSheetIndex(getActiveSheetIndex());
    setAlternatingColorsInitialRange(rangeToText(range));
    setAlternatingColorsOpen(true);
  }, [getActiveSheetIndex]);

  const applyAlternatingColors = useCallback((options) => {
    const workbook = workbookRef.current;
    const activeSheet = workbook?.getSheet?.();
    if (!workbook || activeSheet?.config?.authority?.sheet === 1) return;

    const { range, hasHeader, headerColor, firstRowColor, secondRowColor } = options;
    const calls = [];
    const pushFormat = (attr, value, rowStart, rowEnd) => {
      if (rowStart > rowEnd) return;
      calls.push({
        name: "setCellFormatByRange",
        args: [
          attr,
          value,
          [{
            row: [rowStart, rowEnd],
            column: [...range.column],
          }],
        ],
      });
    };

    let firstDataRow = range.row[0];
    if (hasHeader) {
      pushFormat("bg", headerColor, range.row[0], range.row[0]);
      firstDataRow += 1;
    }

    for (let row = firstDataRow; row <= range.row[1]; row += 1) {
      const color = (row - firstDataRow) % 2 === 0 ? firstRowColor : secondRowColor;
      pushFormat("bg", color, row, row);
    }

    if (typeof workbook.batchCallApis === "function") {
      workbook.batchCallApis(calls);
    } else {
      calls.forEach((call) => {
        workbook.setCellFormatByRange?.(...call.args);
      });
    }
    setAlternatingColorsOpen(false);
  }, []);

  const clearAlternatingColors = useCallback((range) => {
    const workbook = workbookRef.current;
    const activeSheet = workbook?.getSheet?.();
    if (!workbook || activeSheet?.config?.authority?.sheet === 1) return;

    workbook.setCellFormatByRange?.("bg", undefined, [range]);
    setAlternatingColorsOpen(false);
  }, []);

  const getCurrentValidationSelection = useCallback(() => {
    const ranges = getSelectedRanges(workbookRef.current?.getSelection?.());
    return {
      ranges,
      label: ranges.map(rangeToText).join(", "),
    };
  }, []);

  const commitDataValidation = useCallback(
    (rule, ranges, options) => {
      const workbook = workbookRef.current;
      const activeSheet = workbook?.getSheet?.();
      if (activeSheet?.config?.authority?.sheet === 1) return;
      if (typeof workbook?.setDataValidation === "function") {
        workbook.setDataValidation(ranges, rule, {
          ...options,
          rulesByCell: getDataValidationRulesByCell(ranges, rule),
        });
        return;
      }

      const sheets = getWorkbookSheetsForCommit();
      const sheetIndex = getActiveSheetIndex();
      if (!sheets[sheetIndex]) return;
      if (sheets[sheetIndex]?.config?.authority?.sheet === 1) return;
      sheets[sheetIndex] = applyDataValidation(
        sheets[sheetIndex],
        ranges,
        rule,
        options,
      );
      sheetDataRef.current = sheets;
      setSheetData(sheets);
      setWorkbookKey((key) => key + 1);
      scheduleAutosave(sheets);
    },
    [getActiveSheetIndex, getWorkbookSheetsForCommit, scheduleAutosave],
  );

  const insertCheckboxes = useCallback(() => {
    const { ranges } = getCurrentValidationSelection();
    commitDataValidation(createCheckboxRule(), ranges, {
      initializeCheckboxes: true,
    });
  }, [commitDataValidation, getCurrentValidationSelection]);

  const openDropdownDialog = useCallback(() => {
    const { ranges, label } = getCurrentValidationSelection();
    setDataValidationSelection(ranges);
    setDataValidationSelectionLabel(label);
    setDropdownDialogOpen(true);
  }, [getCurrentValidationSelection]);

  const insertDropdown = useCallback(
    ({ sourceType, options, reference }) => {
      commitDataValidation(
        sourceType === "range"
          ? createDropdownRangeRule(reference)
          : createDropdownRule(options),
        dataValidationSelection,
      );
      setDropdownDialogOpen(false);
      requestAnimationFrame(() => {
        document.querySelector(".fortune-sheet-overlay")?.focus();
      });
    },
    [commitDataValidation, dataValidationSelection],
  );

  const applyCustomNumberFormat = useCallback(
    (format) => {
      const workbook = workbookRef.current;
      if (!workbook || customNumberFormatSelection.length === 0) return;
      const sheet = workbook.getSheet?.();
      const apiCalls = [{
        name: "setCellFormatByRange",
        args: ["ct", { fa: format, t: "n" }, customNumberFormatSelection],
      }];
      const numericTextPattern = /^-?(?:\d+|\d*\.\d+)(?:[eE][+-]?\d+)?$/;

      customNumberFormatSelection.forEach((range) => {
        for (let row = range.row[0]; row <= range.row[1]; row += 1) {
          for (let column = range.column[0]; column <= range.column[1]; column += 1) {
            const cell = sheet?.data?.[row]?.[column];
            const value = cell?.v;
            const numericValue =
              typeof value === "number"
                ? value
                : cell?.ct?.t !== "s" && numericTextPattern.test(String(value ?? "").trim())
                  ? Number(value)
                  : null;
            if (numericValue == null || !Number.isFinite(numericValue)) continue;
            apiCalls.push({
              name: "setCellFormat",
              args: [row, column, "m", String(formatNumber(format, numericValue))],
            });
          }
        }
      });

      if (typeof workbook.batchCallApis === "function") {
        workbook.batchCallApis(apiCalls);
      } else {
        workbook.setCellFormatByRange?.(
          "ct",
          { fa: format, t: "n" },
          customNumberFormatSelection,
        );
      }
      setCustomNumberFormatOpen(false);
    },
    [customNumberFormatSelection],
  );

  const saveConditionalRule = useCallback(
    (rule) => {
      const sheets = getWorkbookSheetsForCommit();
      const sheetIndex = Math.min(conditionalSheetIndex, sheets.length - 1);
      if (sheetIndex < 0) return;
      const currentRules = sheets[sheetIndex].customConditionalFormatting || [];
      const exists = currentRules.some((item) => item.id === rule.id);
      sheets[sheetIndex] = {
        ...sheets[sheetIndex],
        customConditionalFormatting: exists
          ? currentRules.map((item) => (item.id === rule.id ? rule : item))
          : [...currentRules, rule],
      };
      commitConditionalSheets(sheets);
    },
    [commitConditionalSheets, conditionalSheetIndex, getWorkbookSheetsForCommit],
  );

  const deleteConditionalRule = useCallback(
    (ruleId) => {
      const sheets = getWorkbookSheetsForCommit();
      const sheetIndex = Math.min(conditionalSheetIndex, sheets.length - 1);
      if (sheetIndex < 0) return;
      sheets[sheetIndex] = {
        ...sheets[sheetIndex],
        customConditionalFormatting: (
          sheets[sheetIndex].customConditionalFormatting || []
        ).filter((rule) => rule.id !== ruleId),
      };
      commitConditionalSheets(sheets);
    },
    [commitConditionalSheets, conditionalSheetIndex, getWorkbookSheetsForCommit],
  );

  const saveChart = useCallback(
    (chart) => {
      const sheets = getWorkbookSheetsForCommit();
      const sheetIndex = Math.min(chartSheetIndex, sheets.length - 1);
      if (sheetIndex < 0) return;
      const normalized = normalizeChart(chart);
      const currentCharts = sheets[sheetIndex].customCharts || [];
      const exists = currentCharts.some((item) => item.id === normalized.id);
      sheets[sheetIndex] = {
        ...sheets[sheetIndex],
        customCharts: exists
          ? currentCharts.map((item) => (item.id === normalized.id ? normalized : item))
          : [...currentCharts, normalized],
      };
      sheetDataRef.current = sheets;
      setSheetData(sheets);
      scheduleAutosave(sheets);
    },
    [chartSheetIndex, getWorkbookSheetsForCommit, scheduleAutosave],
  );

  const deleteChart = useCallback(
    (chartId, sheetIndexOverride = chartSheetIndex) => {
      const sheets = getWorkbookSheetsForCommit();
      const sheetIndex = Math.min(sheetIndexOverride, sheets.length - 1);
      if (sheetIndex < 0) return;
      sheets[sheetIndex] = {
        ...sheets[sheetIndex],
        customCharts: (sheets[sheetIndex].customCharts || []).filter(
          (chart) => chart.id !== chartId,
        ),
      };
      sheetDataRef.current = sheets;
      setSheetData(sheets);
      scheduleAutosave(sheets);
      setChartEditing((chart) => (chart?.id === chartId ? null : chart));
    },
    [chartSheetIndex, getWorkbookSheetsForCommit, scheduleAutosave],
  );

  const updateChartPosition = useCallback(
    (chartId, position, sheetIndexOverride = activeSheetIndex) => {
      const sheets = sheetDataRef.current.map((sheet) => ({
        ...sheet,
        celldata: sheet.celldata || dataToCelldata(sheet.data),
      }));
      const sheetIndex = Math.min(sheetIndexOverride, sheets.length - 1);
      if (sheetIndex < 0) return;
      const currentCharts = sheets[sheetIndex].customCharts || [];
      sheets[sheetIndex] = {
        ...sheets[sheetIndex],
        customCharts: currentCharts.map((chart) =>
          chart.id === chartId ? normalizeChart({ ...chart, position }) : chart,
        ),
      };
      sheetDataRef.current = sheets;
      setSheetData(sheets);
      scheduleAutosave(sheets);
    },
    [activeSheetIndex, scheduleAutosave],
  );

  const editChartFromLayer = useCallback(
    (chart, sheetIndexOverride = activeSheetIndex) => {
      setChartSheetIndex(sheetIndexOverride);
      setChartInitialRange(chart.rangeText || rangeToText(chart.range));
      setChartInitialLabels(null);
      setChartEditing(chart);
      setChartDialogOpen(true);
    },
    [activeSheetIndex],
  );

  // Mode intégré (EMBED.md) : chargement et enregistrement pour l'hôte, au
  // format d'archivage (WORKBOOK_FORMAT.md).
  const loadWorkbookFromHost = useCallback(
    (workbook, { recalculate }) =>
      enqueueOp(async () => {
        // Lu (et copié) avant de vider le classeur : une archive refusée
        // laisse le classeur courant affiché.
        const { sheets } = readWorkbookArchive(workbook);
        await resetWorkbook();
        updateDocumentIdentity(standaloneMenuTexts.items.untitled);
        setSheetData(
          ensureSheetCalcChains(embedConfig.singleSheet ? showFirstSheet(sheets) : sheets),
        );
        await waitUntilReady();
        if (recalculate) recalculateLiveWorkbook();
      }),
    [enqueueOp, recalculateLiveWorkbook, resetWorkbook, updateDocumentIdentity, waitUntilReady],
  );

  const saveWorkbookForHost = useCallback(() => {
    flushLiveUpdates();
    return writeWorkbookArchive(stripConditionalFormattingMarkers(sheetDataRef.current));
  }, [flushLiveUpdates]);

  useEffect(() => {
    embedOperationsRef.current = {
      writeLiveValues,
      writeHostValuesLive,
      loadWorkbookFromHost,
      saveWorkbookForHost,
    };
  }, [loadWorkbookFromHost, saveWorkbookForHost, writeHostValuesLive, writeLiveValues]);

  useEffect(() => {
    if (!embedConfig.enabled) return undefined;
    const core = createDocCellsCore({
      getContext: () =>
        (isReadyRef.current && workbookRef.current?.doccellsGetLiveContext?.()) || null,
      whenReady: () => waitUntilReady(),
      writeValues: (updates) => {
        const result = embedOperationsRef.current.writeLiveValues(updates);
        if (!result) throw new Error("Workbook not ready");
        return result;
      },
      writeHostValues: (updates) => {
        const result = embedOperationsRef.current.writeHostValuesLive(updates);
        if (!result) throw new Error("Workbook not ready");
        return result;
      },
      readHostNames,
      readHostDependencies,
      loadWorkbook: (workbook, options) =>
        embedOperationsRef.current.loadWorkbookFromHost(workbook, options),
      saveWorkbook: () => embedOperationsRef.current.saveWorkbookForHost(),
    });
    docCellsCoreRef.current = core;
    window.docCells = createWindowApi(core, {
      stats: () => ({ draws: workbookRef.current?.doccellsDrawCount?.() ?? 0 }),
    });
    const stopProtocol = startMessageProtocol({
      core,
      allowedOrigins: embedConfig.allowedOrigins,
      version: import.meta.env.DOCCELLS_BUILD_VERSION || "dev",
    });
    const stopDialogs = watchDialogs((open, veil) => core.notifyDialog(open, veil));
    return () => {
      stopDialogs();
      stopProtocol();
      delete window.docCells;
      docCellsCoreRef.current = null;
    };
  }, [waitUntilReady]);

  // 🌐 Exposition des fonctions globales sur window pour pilotage externe
  useEffect(() => {
    window.whenDocCellsReady = () => waitUntilReady();

    // Accepte : une URL (string), un Blob, un ArrayBuffer, ou une string Base64
    window.openExcel = (source, fileName = "file.xlsx") =>
      enqueueOp(async () => {
        await resetWorkbook();
        try {
          if (typeof source === "string" && !source.startsWith("data:")) {
            await loadExcelFromURL(source, fileName);
          } else {
            let blob;
            if (source instanceof Blob) {
              blob = source;
            } else if (source instanceof ArrayBuffer) {
              blob = new Blob([source], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              });
            } else if (typeof source === "string") {
              const base64 = source.startsWith("data:")
                ? source.split(",")[1]
                : source;
              const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
              blob = new Blob([bytes], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              });
            } else {
              throw new Error("Type de source non supporté");
            }
            const file = new File([blob], fileName, { type: blob.type });
            await loadExcelFromFile(file);
          }
        } catch (error) {
          await handleLoadError(error);
        }
        updateDocumentIdentity(fileName);
        await waitUntilReady();
      });

    window.getSheetData = () => {
      flushLiveUpdates();
      return sheetDataRef.current;
    };

    window.setSheetData = (data) =>
      enqueueOp(async () => {
        await resetWorkbook();
        updateDocumentIdentity(standaloneMenuTexts.items.untitled);
        setSheetData(
          ensureSheetCalcChains(typeof data === "string" ? JSON.parse(data) : data),
        );
        await waitUntilReady();
      });

    window.setCellValues = setCellValuesLive;

    window.getExcelAsBase64 = async () => {
      flushLiveUpdates();
      return await exportToExcel(stripConditionalFormattingMarkers(sheetDataRef.current), {
        returnBase64: true,
      });
    };

    return () => {
      delete window.openExcel;
      delete window.getSheetData;
      delete window.setSheetData;
      delete window.setCellValues;
      delete window.getExcelAsBase64;
      delete window.whenDocCellsReady;
    };
  }, [
    enqueueOp,
    flushLiveUpdates,
    handleLoadError,
    loadExcelFromFile,
    loadExcelFromURL,
    resetWorkbook,
    setCellValuesLive,
    updateDocumentIdentity,
    waitUntilReady,
  ]);

  useFortuneToolbarButtons({
    appMode,
    sheetData,
    sheetDataRef,
    workbookRef,
    setSheetData,
    setWorkbookKey,
    openChartDialog,
    openConditionalDialog,
    openCustomNumberFormatDialog,
    openAlternatingColorsDialog,
    chartToolbarText: chartTexts.toolbar,
    openButtonText: t.standaloneMenu?.open ?? "Open...",
    exportButtonText: supportsNativeFileSave
      ? standaloneMenuTexts.items.save
      : (t.standaloneMenu?.export ?? "Export..."),
    onOpenDocument: openDocument,
    onPrimaryFileAction: supportsNativeFileSave
      ? saveDocument
      : exportDocument,
    toggleGridLinesText: t.toggleGridLines ?? "Show / hide gridlines",
    toggleSheetProtectionText: t.toggleSheetProtection,
    conditionalFormattingToolbarText: conditionalFormattingTexts.toolbar,
    alternatingColorsToolbarText: alternatingColorsTexts.menuItem,
    customNumberFormatMenuText: customNumberFormatTexts.menuItem,
    chrome,
  });

  // Bloque le redimensionnement colonnes/lignes quand la feuille est protégée
  useEffect(() => {
    const blockResizeIfProtected = (e) => {
      const target = e.target;
      const isResizeHandle =
        target?.id === "fortune-cols-change-size" ||
        target?.classList?.contains("fortune-rows-change-size");
      if (!isResizeHandle) return;

      const wb = workbookRef.current;
      if (!wb) return;
      const sheet = wb.getSheet();
      if (sheet?.config?.authority?.sheet === 1) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    document.addEventListener("mousedown", blockResizeIfProtected, true);
    return () =>
      document.removeEventListener("mousedown", blockResizeIfProtected, true);
  }, []);

  // Injecte les commandes propres à DocCells dans le menu contextuel FortuneSheet.
  useEffect(() => {
    const injectDocCellsMenuItems = (menuEl) => {
      const wb = workbookRef.current;
      if (!wb) return;
      const sel = wb.getSelection();
      if (!sel?.length) return;

      const closeContextMenu = () => {
        const cellArea = document.querySelector(".fortune-cell-area");
        if (cellArea) {
          cellArea.dispatchEvent(
            new MouseEvent("mousedown", {
              bubbles: true,
              cancelable: true,
              button: 0,
              clientX: 999999,
              clientY: 999999,
            }),
          );
        }
      };
      const createMenuItem = (label, onClick) => {
        const item = document.createElement("div");
        item.className = "luckysheet-cols-menuitem";
        const content = document.createElement("div");
        content.className = "luckysheet-cols-menuitem-content";
        content.textContent = label;
        item.appendChild(content);
        item.addEventListener("click", () => {
          onClick();
          closeContextMenu();
        });
        return item;
      };

      // lo===0 → déverrouillé explicitement ; lo===1 ou undefined → verrouillé (par défaut)
      const allUnlocked = sel.every((range) => {
        const cells = wb.getCellsByRange(range);
        return cells.every((row) => row.every((cell) => cell?.lo === 0));
      });
      const label = allUnlocked ? t.lockCells : t.unlockCells;
      const newLo = allUnlocked ? 1 : 0;

      const divider = document.createElement("div");
      divider.className = "fortune-context-menu-divider";

      const lockItem = createMenuItem(label, () => {
        sel.forEach((range) => wb.setCellFormatByRange("lo", newLo, range));
      });
      const defineNameItem = createMenuItem(definedNamesTexts.define, () => {
        window.dispatchEvent(
          new Event("doccells:open-defined-name-dialog"),
        );
      });

      menuEl.appendChild(divider);
      menuEl.appendChild(defineNameItem);
      menuEl.appendChild(lockItem);
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (
            node instanceof Element &&
            node.classList.contains("fortune-context-menu") &&
            !node.classList.contains("fortune-filter-menu") &&
            !node.classList.contains("fortune-sheet-list")
          ) {
            if (appMode !== "student") {
              injectDocCellsMenuItems(node);
            }
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [appMode]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get("mode")?.toLowerCase();
    const knownModes = ["teacher", "student"];
    if (knownModes.includes(mode)) {
      setAppMode(mode);
    } else if (window.DOCELLS_MODE) {
      const externalMode = String(window.DOCELLS_MODE).toLowerCase();
      if (knownModes.includes(externalMode)) {
        setAppMode(externalMode);
      }
    }

    const start = async () => {
      if (isTopLevelWindow()) {
        try {
          const snapshot = await getRecoverySnapshot();
          if (snapshot) {
            const choice = await requestRecoveryChoice(snapshot);
            if (choice === "restore") {
              normalizeCacheRef.current = new Map();
              autosaveEnabledRef.current = false;
              awaitingInitialWorkbookChangeRef.current = true;
              const restoredName =
                snapshot.documentName || standaloneMenuTexts.items.untitled;
              documentNameRef.current = restoredName;
              fileHandleRef.current = null;
              setDocumentName(restoredName);
              setDocumentDirty(true);
              setSheetData(applyConditionalFormatting(snapshot.sheets));
              return;
            }
            await deleteRecoverySnapshot();
          }
        } catch (error) {
          console.warn("Récupération IndexedDB indisponible :", error);
        }
      }

      // Mode intégré : l'hôte fournit le classeur (requête load).
      const rawUrl = (!embedConfig.enabled && urlParams.get("url")) || "empty.xlsx";
      const googleSheetId = extractGoogleSheetId(rawUrl);
      const fetchUrl = googleSheetId
        ? buildGoogleSheetProxyUrl(googleSheetId)
        : rawUrl;
      const fileName = googleSheetId ? `${googleSheetId}.xlsx` : rawUrl;
      await loadExcelFromURL(fetchUrl, fileName);
      updateDocumentIdentity(
        rawUrl === "empty.xlsx"
          ? standaloneMenuTexts.items.untitled
          : fileName.split("/").pop(),
      );
    };

    // Dans la file des chargements : un document fourni par l'API pendant le
    // démarrage (window.setSheetData, openExcel) passe après le classeur
    // initial au lieu d'être écrasé par lui.
    enqueueOp(start).catch(handleLoadError);
  }, [enqueueOp, loadExcelFromURL, handleLoadError, updateDocumentIdentity]);
  const workbookHooks = useMemo(() => ({
    afterRenderCell: (cell, cellInfo, context) => {
      const definition = parseSparklineFormula(cell?.f);
      if (!definition) return;
      const sheets = workbookRef.current?.getAllSheets?.() || sheetDataRef.current;
      const activeSheetId =
        cellInfo.sheetId ||
        workbookRef.current?.getSheet?.()?.id ||
        sheetDataRef.current[activeSheetIndex]?.id;
      const liveSheets = cellInfo.data
        ? [
            ...sheets.filter((sheet) => String(sheet.id) !== String(activeSheetId)),
            {
              ...(sheets.find((sheet) => String(sheet.id) === String(activeSheetId)) || {}),
              id: activeSheetId,
              data: cellInfo.data,
            },
          ]
        : sheets;
      const values = resolveSparklineValues(definition, liveSheets, activeSheetId);
      drawSparkline(context, cellInfo, values, definition.options);
    },
    beforeAddSheet: (sheet) => {
      sheet.showGridLines = getWorkbookGridLinesPreference(sheetDataRef.current);
      if (!isDefaultSheetName(sheet?.name)) return;
      const preferredNumber = getDefaultSheetNumber(
        sheet?.name,
        (sheet?.order ?? sheetDataRef.current.length) + 1,
      );
      sheet.name = getAvailableDefaultSheetName(
        sheetDataRef.current,
        preferredNumber,
        sheetPrefix,
      );
    },
    afterAddSheet: (sheet) => {
      const showGridLines = normalizeShowGridLines(sheet?.showGridLines);
      if (!showGridLines) {
        const wb = workbookRef.current;
        const allSheets = wb?.getAllSheets?.() || sheetDataRef.current;
        const updatedSheets = setWorkbookGridLines(
          allSheets,
          showGridLines,
        ).map((currentSheet) => ({
          ...currentSheet,
          celldata: currentSheet.celldata || dataToCelldata(currentSheet.data),
        }));

        sheetDataRef.current = updatedSheets;
        setSheetData(updatedSheets);
        setWorkbookKey((key) => key + 1);
      }

      if (!isDefaultSheetName(sheet?.name) || sheet?.name?.startsWith(sheetPrefix)) {
        return;
      }
      const preferredNumber = getDefaultSheetNumber(
        sheet?.name,
        (sheet?.order ?? sheetDataRef.current.length) + 1,
      );
      const name = getAvailableDefaultSheetName(
        sheetDataRef.current,
        preferredNumber,
        sheetPrefix,
      );
      requestAnimationFrame(() => workbookRef.current?.setSheetName(name));
    },
    afterActivateSheet: (id) => {
      const sheets = workbookRef.current?.getAllSheets?.() || sheetDataRef.current;
      const index = sheets.findIndex((sheet) => sheet.id === id);
      setActiveSheetIndex(index >= 0 ? index : 0);
    },
    afterSelectionChange: (id, selection) => {
      const sheets = workbookRef.current?.getAllSheets?.() || sheetDataRef.current;
      const sheet = sheets.find((item) => String(item.id) === String(id));
      if (!sheet || !selection?.row || !selection?.column) return;
      const coordinates = [...selection.row, ...selection.column];
      if (!coordinates.every(Number.isFinite)) {
        setNameBoxLocation("");
        setNameBoxReference("");
        return;
      }
      const reference = selectionToDefinedNameReference(sheet.name, selection);
      const matchingName =
        definedNames.find(
          (item) =>
            String(item.scopeSheetId) === String(id) &&
            item.refersTo.replace(/^=/, "") === reference,
        ) ||
        definedNames.find(
          (item) =>
            item.scopeSheetId == null &&
            item.refersTo.replace(/^=/, "") === reference,
        );
      setNameBoxLocation(matchingName?.name || rangeToText(selection));
      setNameBoxReference(reference);
    },
    beforeCellMouseDown: (_cell, cellInfo) => {
      return beforeDateCellMouseDown(_cell, cellInfo);
    },
    afterUpdateCell: (row, column, _oldValue, newValue) => {
      syncExcelDateFormulaResult(row, column, newValue);
    },
  }), [
    activeSheetIndex,
    definedNames,
    beforeDateCellMouseDown,
    syncExcelDateFormulaResult,
  ]);

  const handleWorkbookChange = useCallback((newData) => {
    if (syncingConditionalRef.current) {
      docCellsCoreRef.current?.observeWorkbook(newData, "sync");
      return;
    }
    if (Array.isArray(newData) && newData.length > 0) {
      const nextCache = new Map();
      const updatedData = newData.map((sheet, index) => {
        const oldCells = sheetDataRef.current[index]?.celldata || [];
        const cached =
          sheet.id != null ? normalizeCacheRef.current.get(sheet.id) : undefined;
        const normalized = normalizeSheetCelldata(sheet, cached);
        if (normalized && sheet.id != null) nextCache.set(sheet.id, normalized);
        const newCells = normalized ? normalized.celldata : [];

        return {
          ...sheet,
          celldata: newCells.length > 0 ? newCells : oldCells,
          customConditionalFormatting: preserveCustomList(
            sheet.customConditionalFormatting,
            sheetDataRef.current[index]?.customConditionalFormatting,
          ),
          customCharts: preserveCustomList(
            sheet.customCharts,
            sheetDataRef.current[index]?.customCharts,
          ),
          definedNames:
            sheet.definedNames ||
            sheetDataRef.current[index]?.definedNames ||
            definedNames,
          showGridLines: normalizeShowGridLines(
            sheet.showGridLines ??
              sheetDataRef.current[index]?.showGridLines,
          ),
        };
      });

      normalizeCacheRef.current = nextCache;

      const hasConditionalRules = updatedData.some(
        (sheet) => (sheet.customConditionalFormatting || []).length > 0,
      );
      const finalData = hasConditionalRules
        ? applyConditionalFormatting(updatedData)
        : updatedData;
      sheetDataRef.current = finalData;
      const liveDefinedNames = finalData[0]?.definedNames;
      if (Array.isArray(liveDefinedNames)) setDefinedNames(liveDefinedNames);
      if (awaitingInitialWorkbookChangeRef.current) {
        armAutosaveAfterInitialization();
      } else {
        scheduleAutosave(finalData);
      }
      if (
        finalData.some(
          (sheet) => (sheet.customCharts || []).length > 0,
        )
      ) {
        setChartRenderKey((key) => key + 1);
      }
      if (hasConditionalRules) {
        const apiCalls = createConditionalFormatApiCalls(finalData);
        if (apiCalls.length > 0) {
          syncingConditionalRef.current = true;
          setSheetData(finalData);
          // Image suivante, ou tâche suivante dans une iframe masquée (où
          // requestAnimationFrame est suspendu et bloquerait la synchronisation).
          afterFrameOrTask(() => {
            workbookRef.current?.batchCallApis?.(apiCalls);
            afterFrameOrTask(() => {
              syncingConditionalRef.current = false;
            });
          });
        }
      }
      // Mode intégré : abonnements, feuilles renommées ou supprimées, « change ».
      docCellsCoreRef.current?.observeWorkbook(newData, workbookChangeOriginRef.current);
    } else {
      console.warn(
        "⚠️ `onChange` a capturé des données invalides, mise à jour ignorée !",
      );
    }
  }, [armAutosaveAfterInitialization, definedNames, scheduleAutosave]);

  useEffect(() => {
    handleWorkbookChangeRef.current = handleWorkbookChange;
  }, [handleWorkbookChange]);

  const commitDefinedNames = useCallback(
    (nextDefinedNames) => {
      const sheets = sheetDataRef.current.map((sheet) => ({
        ...sheet,
        celldata: sheet.celldata || dataToCelldata(sheet.data),
        definedNames: nextDefinedNames,
      }));
      setDefinedNames(nextDefinedNames);
      sheetDataRef.current = sheets;
      setSheetData(sheets);
      setWorkbookKey((key) => key + 1);
      scheduleAutosave(sheets);
    },
    [scheduleAutosave],
  );

  const saveDefinedName = useCallback(
    (definition, editingKey) => {
      const withoutEdited = editingKey
        ? definedNames.filter(
            (item) =>
              `${item.scopeSheetId ?? "workbook"}:${item.name.toLowerCase()}` !==
              editingKey,
          )
        : definedNames;
      commitDefinedNames(upsertDefinedName(withoutEdited, definition));
    },
    [commitDefinedNames, definedNames],
  );

  const deleteDefinedName = useCallback(
    (key) => {
      commitDefinedNames(
        definedNames.filter(
          (item) =>
            `${item.scopeSheetId ?? "workbook"}:${item.name.toLowerCase()}` !== key,
        ),
      );
    },
    [commitDefinedNames, definedNames],
  );

  const navigateToDefinedName = useCallback((definition) => {
    const parsed = parseDefinedNameReference(definition.refersTo);
    if (!parsed) return;
    const workbook = workbookRef.current;
    const sheets = workbook?.getAllSheets?.() || sheetDataRef.current;
    const targetSheet = sheets.find((sheet) => sheet.name === parsed.sheetName);
    if (!workbook || !targetSheet) return;
    workbook.activateSheet?.({ id: targetSheet.id });
    requestAnimationFrame(() => {
      workbook.setSelection?.([parsed.range]);
      setNameBoxLocation(definition.name);
      setNameBoxReference(definition.refersTo);
    });
  }, []);

  return sheetData.length !== 0 ? (
    <div className="dc-app-shell">
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept=".xlsx"
        onChange={async (event) => {
          const file = event.target.files[0];
          if (!file) return;

          try {
            await loadDocumentFromFile(file);
          } catch (error) {
            await handleLoadError(error);
          }
        }}
      />

      <FileDropVeil
        enabled={isTopLevelWindow() && appMode !== "student"}
        texts={fileDropTexts}
        onDropFile={openDroppedFile}
      />

      <ConditionalFormattingDialog
        open={conditionalDialogOpen}
        sheetName={sheetDataRef.current[conditionalSheetIndex]?.name}
        rules={
          sheetDataRef.current[conditionalSheetIndex]?.customConditionalFormatting ||
          []
        }
        initialRangeText={conditionalInitialRange}
        onClose={() => setConditionalDialogOpen(false)}
        onSave={saveConditionalRule}
        onDelete={deleteConditionalRule}
        texts={conditionalFormattingTexts}
      />

      <CustomNumberFormatDialog
        open={customNumberFormatOpen}
        initialFormat={customNumberFormatInitial}
        selectionLabel={customNumberFormatSelectionLabel}
        locale={detectedLang}
        currencySymbol={currencySymbol}
        onApply={applyCustomNumberFormat}
        onClose={() => setCustomNumberFormatOpen(false)}
        texts={customNumberFormatTexts}
      />

      <AlternatingColorsDialog
        open={alternatingColorsOpen}
        initialRangeText={alternatingColorsInitialRange}
        sheetName={sheetDataRef.current[alternatingColorsSheetIndex]?.name}
        texts={alternatingColorsTexts}
        onApply={applyAlternatingColors}
        onClear={clearAlternatingColors}
        onClose={() => setAlternatingColorsOpen(false)}
      />

      <DropdownDialog
        open={dropdownDialogOpen}
        selectionLabel={dataValidationSelectionLabel}
        texts={dataValidationTexts}
        onClose={() => setDropdownDialogOpen(false)}
        onInsert={insertDropdown}
      />

      <ChartDialog
        open={chartDialogOpen}
        sheet={sheetDataRef.current[chartSheetIndex]}
        charts={sheetDataRef.current[chartSheetIndex]?.customCharts || []}
        initialRangeText={chartInitialRange}
        initialLabels={chartInitialLabels}
        editingChart={chartEditing}
        onClose={() => {
          setChartDialogOpen(false);
          setChartEditing(null);
        }}
        onSave={saveChart}
        onDelete={deleteChart}
        texts={chartTexts}
      />

      <PrintDialog
        open={printDialogOpen}
        sheet={printSheet}
        selection={printSelection}
        texts={printingTexts}
        onClose={() => setPrintDialogOpen(false)}
      />

      <DateCellPickerPopover
        locale={detectedLang}
        picker={datePicker}
        onClose={closeDatePicker}
        onCommit={commitDatePickerValue}
        onViewMonthChange={changeDatePickerViewMonth}
      />

      <StandaloneMenuBar
        appMode={appMode}
        chromeContainer={chrome?.menus.mount ?? null}
        embedded={embedConfig.enabled}
        hidden={embeddedWithoutBars}
        onRequestSave={() => docCellsCoreRef.current?.requestSave()}
        sheetDataRef={sheetDataRef}
        texts={standaloneMenuTexts}
        workbookRef={workbookRef}
        onOpenChartDialog={openChartDialog}
        onOpenConditionalDialog={openConditionalDialog}
        onOpenCustomNumberFormatDialog={openCustomNumberFormatDialog}
        onOpenAlternatingColorsDialog={openAlternatingColorsDialog}
        onInsertCheckbox={insertCheckboxes}
        onOpenDropdownDialog={openDropdownDialog}
        documentName={documentName}
        documentDirty={documentDirty}
        supportsNativeFileSave={supportsNativeFileSave}
        onOpenDocument={openDocument}
        onSaveDocument={saveDocument}
        onSaveDocumentAs={saveDocumentAs}
        onExportDocument={exportDocument}
        onPrintDocument={openPrintDialog}
        recentFiles={recentFiles}
        onOpenRecentFile={openRecentFile}
        onClearRecentFiles={clearRecentFileList}
      />

      <div className="dc-workbook-shell">
        <DefinedNamesUI
          activeSheetId={sheetDataRef.current[activeSheetIndex]?.id ?? null}
          definedNames={definedNames}
          initialReference={nameBoxReference}
          locale={detectedLang}
          locationText={nameBoxLocation}
          sheets={sheetDataRef.current}
          onDelete={deleteDefinedName}
          onNavigate={navigateToDefinedName}
          onSave={saveDefinedName}
        />
        <Workbook
          key={workbookKey}
          ref={workbookRef}
          data={sheetData}
          lang={detectedLang}
          currency={currencySymbol}
          defaultColWidth={DEFAULT_COLUMN_WIDTH}
          hooks={workbookHooks}
          onChange={handleWorkbookChange}
          doccellsToolbarContainer={chrome?.toolbar.mount ?? null}
          showToolbar={!embeddedWithoutBars}
          showSheetTabs={!embedConfig.singleSheet}
          toolbarItems={[
            "image",
            "|",
            "undo",
            "redo",
            "clear-format",
            "|",
            "percentage-format",
            "number-decrease",
            "number-increase",
            "format",
            "font",
            "font-size",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "font-color",
            "background",
            "border",
            "merge-cell",
            "|",
            "horizontal-align",
            "vertical-align",
            "text-rotation",
            "text-wrap",
            "|",
            "freeze",
            "quick-formula",
            "|",
            "filter",
            "|",
          ]}
        />
        <ChartLayer
          sheets={sheetDataRef.current}
          activeSheetIndex={activeSheetIndex}
          onEdit={editChartFromLayer}
          onDelete={deleteChart}
          onPositionChange={updateChartPosition}
        />
      </div>
    </div>
  ) : null;
};

export default App;
