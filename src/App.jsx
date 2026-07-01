import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Workbook } from "@fortune-sheet/react";
import { transformExcelToFortune } from "./lib/FortuneSheetExcel/main.js";
import { exportToExcel } from "./utils/exportToExcel.js";
import { customLocales } from "./locales/custom.js";
import { ConditionalFormattingDialog } from "./features/conditionalFormatting/ConditionalFormattingDialog.jsx";
import { getConditionalFormattingTexts } from "./features/conditionalFormatting/conditionalFormattingConstants.js";
import { ChartDialog } from "./features/charts/ChartDialog.jsx";
import { ChartLayer } from "./features/charts/ChartRenderer.jsx";
import {
  columnToName,
  getChartTexts,
  normalizeChart,
} from "./features/charts/chartUtils.js";
import { normalizeImportedWorkbook } from "./features/excelImport/normalizeImportedWorkbook.js";
import { useFortuneToolbarButtons } from "./features/fortuneSheet/useFortuneToolbarButtons.js";
import {
  dataToCelldata,
  getAvailableDefaultSheetName,
  getDefaultSheetNumber,
  getWorkbookGridLinesPreference,
  isDefaultSheetName,
  normalizeShowGridLines,
  setWorkbookGridLines,
} from "./features/workbook/workbookUtils.js";
import {
  applyConditionalFormatting,
  createConditionalFormatApiCalls,
  rangeToText,
  stripConditionalFormattingMarkers,
} from "./features/conditionalFormatting/conditionalFormattingUtils.js";

const SUPPORTED_LANGS = ["zh-CN", "zh-TW", "en", "fr-FR", "es-ES"];
const detectedLang =
  SUPPORTED_LANGS.includes(navigator.language)
    ? navigator.language
    : (SUPPORTED_LANGS.find((l) => navigator.language.startsWith(l.split("-")[0])) ?? "en");
const t = customLocales[detectedLang] ?? customLocales["en"];
const conditionalFormattingTexts = getConditionalFormattingTexts(t.conditionalFormatting);
const chartTexts = getChartTexts(t.charts);
const DEFAULT_COLUMN_WIDTH = 99;
const sheetPrefix =
  {
    "zh-CN": "工作表",
    "zh-TW": "工作表",
    en: "Sheet",
    "fr-FR": "Feuille",
    "es-ES": "Hoja",
  }[detectedLang] ?? "Sheet";

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

const App = () => {
  const [sheetData, setSheetData] = useState([]);
  const [appMode, setAppMode] = useState("teacher");
  const [workbookKey, setWorkbookKey] = useState(0);
  const [conditionalDialogOpen, setConditionalDialogOpen] = useState(false);
  const [conditionalSheetIndex, setConditionalSheetIndex] = useState(0);
  const [conditionalInitialRange, setConditionalInitialRange] = useState("A1");
  const [chartDialogOpen, setChartDialogOpen] = useState(false);
  const [chartSheetIndex, setChartSheetIndex] = useState(0);
  const [chartInitialRange, setChartInitialRange] = useState("A1:B5");
  const [chartInitialLabels, setChartInitialLabels] = useState(null);
  const [chartEditing, setChartEditing] = useState(null);
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const [, setChartRenderKey] = useState(0);
  const sheetDataRef = useRef([]);
  useEffect(() => {
    sheetDataRef.current = sheetData;
  }, [sheetData]);

  const workbookRef = useRef(null);
  const formulasRef = useRef({});
  const syncingConditionalRef = useRef(false);

  // Ready state for external API (docshare iframe caller)
  const isReadyRef = useRef(false);
  const pendingRef = useRef([]);
  const opQueueRef = useRef(Promise.resolve());

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

  const nextFrame = useCallback(
    () => new Promise((resolve) => requestAnimationFrame(() => resolve())),
    [],
  );

  const enqueueOp = useCallback((task) => {
    const run = opQueueRef.current.then(task, task);
    opQueueRef.current = run.catch(() => {});
    return run;
  }, []);

  const resetWorkbook = useCallback(async () => {
    formulasRef.current = {};
    isReadyRef.current = false;
    pendingRef.current = [];
    setSheetData([]);
    await nextFrame();
  }, [nextFrame]);

  const handleExcelLoad = useCallback(async (file) => {
    const fortuneData = await transformExcelToFortune(file);
    const { formulas, sheets } = normalizeImportedWorkbook(fortuneData.sheets, {
      sheetPrefix,
    });

    formulasRef.current = formulas;
    setSheetData(applyConditionalFormatting(sheets));
  }, []);

  useEffect(() => {
    if (workbookRef.current && sheetData.length > 0) {
      // Workbook vraiment exploitable
      markReady();
    }
  }, [sheetData, markReady]);

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

  const loadFallback = useCallback(async () => {
    try {
      await loadExcelFromURL("empty.xlsx", "empty.xlsx");
    } catch {
      console.error("❌ Impossible de charger le fichier de repli empty.xlsx");
    }
  }, [loadExcelFromURL]);

  const handleLoadError = useCallback(
    async (error) => {
      alert(`Impossible d'ouvrir ce fichier.\n${error?.message || String(error)}`);
      await loadFallback();
    },
    [loadFallback],
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

  const commitConditionalSheets = useCallback((sheets, { remount = true } = {}) => {
    const formatted = applyConditionalFormatting(sheets);
    syncingConditionalRef.current = true;
    sheetDataRef.current = formatted;
    setSheetData(formatted);
    if (remount) setWorkbookKey((key) => key + 1);
    requestAnimationFrame(() => {
      syncingConditionalRef.current = false;
    });
  }, []);

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
    },
    [chartSheetIndex, getWorkbookSheetsForCommit],
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
      setChartEditing((chart) => (chart?.id === chartId ? null : chart));
    },
    [chartSheetIndex, getWorkbookSheetsForCommit],
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
    },
    [activeSheetIndex],
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
        await waitUntilReady();
      });

    window.getSheetData = () => sheetDataRef.current;

    window.setSheetData = (data) =>
      enqueueOp(async () => {
        await resetWorkbook();
        setSheetData(typeof data === "string" ? JSON.parse(data) : data);
        await waitUntilReady();
      });

    window.getExcelAsBase64 = async () => {
      return await exportToExcel(stripConditionalFormattingMarkers(sheetDataRef.current), {
        returnBase64: true,
      });
    };

    return () => {
      delete window.openExcel;
      delete window.getSheetData;
      delete window.setSheetData;
      delete window.getExcelAsBase64;
      delete window.whenDocCellsReady;
    };
  }, [
    enqueueOp,
    handleLoadError,
    loadExcelFromFile,
    loadExcelFromURL,
    resetWorkbook,
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
    chartToolbarText: chartTexts.toolbar,
    toggleGridLinesText: t.toggleGridLines ?? "Afficher / masquer le quadrillage",
    toggleSheetProtectionText: t.toggleSheetProtection,
    conditionalFormattingToolbarText: conditionalFormattingTexts.toolbar,
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

  // Injecte "Verrouiller / Déverrouiller" dans le menu contextuel FortuneSheet
  useEffect(() => {
    const injectLockMenuItem = (menuEl) => {
      const wb = workbookRef.current;
      if (!wb) return;
      const sel = wb.getSelection();
      if (!sel?.length) return;

      // lo===0 → déverrouillé explicitement ; lo===1 ou undefined → verrouillé (par défaut)
      const allUnlocked = sel.every((range) => {
        const cells = wb.getCellsByRange(range);
        return cells.every((row) => row.every((cell) => cell?.lo === 0));
      });
      const label = allUnlocked ? t.lockCells : t.unlockCells;
      const newLo = allUnlocked ? 1 : 0;

      const divider = document.createElement("div");
      divider.className = "fortune-context-menu-divider";

      const item = document.createElement("div");
      item.className = "luckysheet-cols-menuitem";
      const content = document.createElement("div");
      content.className = "luckysheet-cols-menuitem-content";
      content.textContent = label;
      item.appendChild(content);

      item.addEventListener("click", () => {
        sel.forEach((range) => wb.setCellFormatByRange("lo", newLo, range));
        // Ferme le menu contextuel : mousedown hors-limites sur la zone cellule
        // handleCellAreaMouseDown efface contextMenu avant le bounds-check
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
      });

      menuEl.appendChild(divider);
      menuEl.appendChild(item);
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
              injectLockMenuItem(node);
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

    const fileName = urlParams.get("url") || "empty.xlsx";
    loadExcelFromURL(fileName, fileName).catch(handleLoadError);
  }, [loadExcelFromURL, handleLoadError]);
  const workbookHooks = useMemo(() => ({
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
  }), []);

  const handleWorkbookChange = useCallback((newData) => {
    if (syncingConditionalRef.current) return;
    if (Array.isArray(newData) && newData.length > 0) {
      const updatedData = newData.map((sheet, index) => {
        const oldCells = sheetDataRef.current[index]?.celldata || [];
        const newCells = [];

        if (sheet.data) {
          sheet.data.forEach((row, r) => {
            row.forEach((cell, c) => {
              if (cell) {
                const oldCell = oldCells.find(
                  (oc) => oc.r === r && oc.c === c,
                );

                let updatedVF = oldCell?.v?.VF || {};
                if (cell.f) {
                  updatedVF = { f: cell.f, v: cell.v };
                } else {
                  updatedVF = {};
                }

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

                newCells.push({
                  r,
                  c,
                  v: {
                    ...cell,
                    v: parsedValue,
                    VF: Object.keys(updatedVF).length
                      ? updatedVF
                      : undefined,
                  },
                });
              }
            });
          });
        }

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
          showGridLines: normalizeShowGridLines(
            sheet.showGridLines ??
              sheetDataRef.current[index]?.showGridLines,
          ),
        };
      });

      const hasConditionalRules = updatedData.some(
        (sheet) => (sheet.customConditionalFormatting || []).length > 0,
      );
      const finalData = hasConditionalRules
        ? applyConditionalFormatting(updatedData)
        : updatedData;
      sheetDataRef.current = finalData;
      if (
        finalData.some(
          (sheet) => (sheet.customCharts || []).length > 0,
        )
      ) {
        setChartRenderKey((key) => key + 1);
      }
      if (hasConditionalRules) {
        syncingConditionalRef.current = true;
        setSheetData(finalData);
        requestAnimationFrame(() => {
          const apiCalls = createConditionalFormatApiCalls(finalData);
          if (apiCalls.length > 0) {
            workbookRef.current?.batchCallApis?.(apiCalls);
          }
          requestAnimationFrame(() => {
            syncingConditionalRef.current = false;
          });
        });
      }
    } else {
      console.warn(
        "⚠️ `onChange` a capturé des données invalides, mise à jour ignorée !",
      );
    }
  }, []);

  return sheetData.length !== 0 ? (
    <>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept=".xlsx"
        onChange={(e) => {
          if (e.target.files.length > 0) {
            // 🔹 Reset complet des variables liées à FortuneSheet
            formulasRef.current = {};
            setSheetData([]);

            requestAnimationFrame(() => {
              loadExcelFromFile(e.target.files[0]).catch(handleLoadError);
            });
          }
        }}
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

      <Workbook
          key={workbookKey}
          ref={workbookRef}
          data={sheetData}
          lang={detectedLang}
          defaultColWidth={DEFAULT_COLUMN_WIDTH}
          hooks={workbookHooks}
          onChange={handleWorkbookChange}
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
    </>
  ) : null;
};

export default App;
