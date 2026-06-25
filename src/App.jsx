import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Workbook } from "@fortune-sheet/react";
import { transformExcelToFortune } from "./lib/FortuneSheetExcel/main.js";
import { exportToExcel } from "./utils/exportToExcel.js";
import { customLocales } from "./locales/custom.js";
import { ConditionalFormattingDialog } from "./features/conditionalFormatting/ConditionalFormattingDialog.jsx";
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
const DEFAULT_COLUMN_WIDTH = 99;
const DEFAULT_SHEET_NAME_RE = /^(Sheet|Feuille|Hoja|工作表)\d+$/;
const sheetPrefix =
  {
    "zh-CN": "工作表",
    "zh-TW": "工作表",
    en: "Sheet",
    "fr-FR": "Feuille",
    "es-ES": "Hoja",
  }[detectedLang] ?? "Sheet";

const isDefaultSheetName = (name) =>
  !name || DEFAULT_SHEET_NAME_RE.test(name);

const normalizeShowGridLines = (showGridLines) => {
  if (showGridLines == null) return true;
  return !(showGridLines === "0" || showGridLines === 0 || showGridLines === false);
};

const areGridLinesHidden = (sheets) =>
  Array.isArray(sheets) &&
  sheets.length > 0 &&
  sheets.every((sheet) => !normalizeShowGridLines(sheet?.showGridLines));

const setWorkbookGridLines = (sheets, showGridLines) =>
  sheets.map((sheet) => ({
    ...sheet,
    showGridLines,
  }));

const getWorkbookGridLinesPreference = (sheets) =>
  areGridLinesHidden(sheets) ? false : true;

const getDefaultSheetNumber = (name, fallback) => {
  const match = String(name || "").match(/\d+$/);
  return match ? Number(match[0]) : fallback;
};

const getAvailableDefaultSheetName = (sheets, preferredNumber) => {
  const usedNames = new Set((sheets || []).map((sheet) => sheet?.name));
  let number = Math.max(1, preferredNumber || 1);
  let name = `${sheetPrefix}${number}`;
  while (usedNames.has(name)) {
    number += 1;
    name = `${sheetPrefix}${number}`;
  }
  return name;
};

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

const isSheetProtected = (sheet) =>
  sheet?.config?.authority?.sheet === 1 ||
  sheet?.config?.authority?.sheet === "1";

const isWorkbookProtected = (sheets) =>
  Array.isArray(sheets) && sheets.some(isSheetProtected);

const setWorkbookProtection = (sheets, sheetProtectionValue) =>
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

const App = () => {
  const [sheetData, setSheetData] = useState([]);
  const [appMode, setAppMode] = useState("teacher");
  const [workbookKey, setWorkbookKey] = useState(0);
  const [conditionalDialogOpen, setConditionalDialogOpen] = useState(false);
  const [conditionalSheetIndex, setConditionalSheetIndex] = useState(0);
  const [conditionalInitialRange, setConditionalInitialRange] = useState("A1");
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
    {
      const fortuneData = await transformExcelToFortune(file);
      const formulas = {};

      fortuneData.sheets.forEach(normalizeImportedMerges);

      // 🔹 Traitement des formules et valeurs affichées
      fortuneData.sheets.forEach((sheet, sheetIndex) => {
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

      formulasRef.current = formulas;

      // Convertit les images du format importeur Excel (objet keyed avec .default)
      // vers le tableau {id, src, left, top, width, height} attendu par FortuneSheet
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
            left:   img.left   ?? img.default?.left   ?? 0,
            top:    img.top    ?? img.default?.top    ?? 0,
            width:  img.width  ?? img.default?.width  ?? 144,
            height: img.height ?? img.default?.height ?? 84,
          });
        }
        return result.length > 0 ? result : undefined;
      };

      const formattedData = fortuneData.sheets.map((sheet, index) => {
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
      const normalizedData = isWorkbookProtected(formattedData)
        ? setWorkbookProtection(formattedData, 1)
        : formattedData;

      setSheetData(applyConditionalFormatting(normalizedData));
    }
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
      customConditionalFormatting:
        sheet.customConditionalFormatting ||
        sheetDataRef.current[index]?.customConditionalFormatting ||
        [],
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

  const addButtons = useCallback(() => {
    const toolbar = document.getElementsByClassName("fortune-toolbar")[0];
    if (!toolbar) return;
    const statArea = document.getElementsByClassName("fortune-stat-area")[0];
    if (statArea) {
      statArea.style.height = "0px";
      statArea.style.display = "none";
    }

    // 🔹 Supprimer les anciens boutons pour éviter les doublons
    document.getElementById("custom-open-button")?.remove();
    document.getElementById("custom-export-button")?.remove();
    document.getElementById("custom-gridlines-button")?.remove();
    document.getElementById("custom-conditional-format-button")?.remove();
    document.getElementById("custom-protect-sheet-button")?.remove();

    // 🔹 Création du bouton "Ouvrir..."
    const openButton = document.createElement("div");
    openButton.id = "custom-open-button";
    openButton.className = "fortune-toolbar-button fortune-toolbar-item";
    openButton.innerHTML = `<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 18.5004H5.9C5.05992 18.5004 4.63988 18.5004 4.31901 18.3369C4.03677 18.1931 3.8073 17.9636 3.66349 17.6814C3.5 17.3605 3.5 16.9405 3.5 16.1004V6.9C3.5 6.05992 3.5 5.63988 3.66349 5.31901C3.8073 5.03677 4.03677 4.8073 4.31901 4.66349C4.63988 4.5 5.05992 4.5 5.9 4.5H8.47237C8.84808 4.5 9.03594 4.5 9.20646 4.55179C9.35741 4.59763 9.49785 4.6728 9.61972 4.77298C9.75739 4.88614 9.86159 5.04245 10.07 5.35507L10.93 6.64533C11.1384 6.95795 11.2426 7.11426 11.3803 7.22742C11.5022 7.3276 11.6426 7.40277 11.7935 7.44861C11.9641 7.5004 12.1519 7.5004 12.5276 7.5004H16.5004C16.965 7.5004 17.1973 7.5004 17.3879 7.55143C17.9058 7.69008 18.3103 8.09459 18.449 8.61248C18.5 8.80308 18.5 9.03539 18.5 9.5V9.5M9.5 13.5H16.5" stroke="#222222" stroke-linecap="round"/><path d="M5.95298 11.1411C6.14969 10.551 6.24804 10.2559 6.43047 10.0378C6.59157 9.84512 6.79845 9.69601 7.03216 9.6041C7.2968 9.50002 7.60783 9.50003 8.2299 9.50005L18.1703 9.50031C19.2945 9.50034 19.8566 9.50036 20.2255 9.7357C20.5485 9.94171 20.7804 10.2635 20.8737 10.635C20.9803 11.0595 20.8025 11.5928 20.447 12.6593L19.047 16.8593C18.8503 17.4495 18.752 17.7445 18.5695 17.9627C18.4084 18.1553 18.2016 18.3044 17.9679 18.3963C17.7032 18.5004 17.3922 18.5004 16.7702 18.5004H6.82977C5.70557 18.5004 5.14347 18.5004 4.77449 18.2651C4.4515 18.0591 4.21958 17.7373 4.12628 17.3657C4.01969 16.9413 4.19744 16.408 4.55293 15.3415L5.95298 11.1411Z" stroke="#222222"/>
</svg>
<div class="fortune-tooltip">Ouvrir...</div>`;
    openButton.addEventListener("click", () => {
      document.getElementById("fileInput").click();
    });

    toolbar.insertBefore(openButton, toolbar.firstChild);

    // 🔹 Création du bouton "Exporter..."
    const exportButton = document.createElement("div");
    exportButton.id = "custom-export-button";
    exportButton.className = "fortune-toolbar-button fortune-toolbar-item";
    exportButton.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><path d="M51,53.48H10.52V13A2.48,2.48,0,0,1,13,10.52H46.07l7.41,6.4V51A2.48,2.48,0,0,1,51,53.48Z" stroke-linecap="round"/><rect x="21.5" y="10.52" width="21.01" height="15.5" stroke-linecap="round"/><rect x="17.86" y="36.46" width="28.28" height="17.02" stroke-linecap="round"/></svg>
    <div class="fortune-tooltip">Exporter...</div>`;

    exportButton.addEventListener("click", () => {
      if (sheetDataRef.current.length > 0) {
        exportToExcel(stripConditionalFormattingMarkers(sheetDataRef.current));
      } else {
        console.error("❌ Aucune donnée à exporter !");
      }
    });

    toolbar.insertBefore(exportButton, openButton.nextSibling);

    // 🔹 Création du bouton "Afficher / masquer le quadrillage"
    const gridLinesButton = document.createElement("div");
    gridLinesButton.id = "custom-gridlines-button";
    gridLinesButton.className = "fortune-toolbar-button fortune-toolbar-item";
    gridLinesButton.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="16" height="16" rx="1.5" stroke="#222" stroke-width="1.5"/>
<path d="M9.33 4v16M14.67 4v16M4 9.33h16M4 14.67h16" stroke="#222" stroke-width="1.2"/>
<path d="M5 19L19 5" stroke="#222" stroke-width="1.8" stroke-linecap="round"/>
</svg>
<div class="fortune-tooltip">${t.toggleGridLines ?? "Afficher / masquer le quadrillage"}</div>`;

    const updateGridLinesButtonStyle = () => {
      const wb = workbookRef.current;
      const allSheets = wb?.getAllSheets?.() || sheetDataRef.current;
      const isHidden = areGridLinesHidden(allSheets);
      gridLinesButton.style.background = isHidden
        ? "rgba(0,120,212,0.15)"
        : "";
      gridLinesButton.style.outline = isHidden
        ? "1px solid rgba(0,120,212,0.4)"
        : "";
      gridLinesButton.setAttribute("aria-pressed", String(isHidden));
    };

    gridLinesButton.addEventListener("click", () => {
      const wb = workbookRef.current;
      if (!wb) return;
      const allSheets = wb.getAllSheets?.() || sheetDataRef.current;
      const nextShowGridLines = areGridLinesHidden(allSheets);

      const updatedSheets = setWorkbookGridLines(
        allSheets,
        nextShowGridLines,
      ).map((s) => ({
        ...s,
        celldata: s.celldata || dataToCelldata(s.data),
      }));

      sheetDataRef.current = updatedSheets;
      setSheetData(updatedSheets);
      setWorkbookKey((key) => key + 1);
      updateGridLinesButtonStyle();
    });

    updateGridLinesButtonStyle();
    toolbar.insertBefore(gridLinesButton, exportButton.nextSibling);

    // 🔹 Création du bouton "Formatage conditionnel"
    const conditionalFormatButton = document.createElement("div");
    conditionalFormatButton.id = "custom-conditional-format-button";
    conditionalFormatButton.className = "fortune-toolbar-button fortune-toolbar-item";
    conditionalFormatButton.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="5" width="16" height="14" rx="2" stroke="#222" stroke-width="1.4"/>
<path d="M8 9h8M8 12h4" stroke="#222" stroke-width="1.4" stroke-linecap="round"/>
<path d="M8 16l2-2 2 2 4-4" stroke="#d93025" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div class="fortune-tooltip">Formatage conditionnel</div>`;
    conditionalFormatButton.addEventListener("click", openConditionalDialog);
    toolbar.insertBefore(conditionalFormatButton, gridLinesButton.nextSibling);

    if (appMode !== "student") {
      // 🔹 Création du bouton "Protéger / Déprotéger la feuille"
      const protectSheetButton = document.createElement("div");
      protectSheetButton.id = "custom-protect-sheet-button";
      protectSheetButton.className = "fortune-toolbar-button fortune-toolbar-item";
      protectSheetButton.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L4 6v5c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6L12 2z" stroke="#222" stroke-width="1.5" stroke-linejoin="round"/>
<rect x="8.5" y="10.5" width="7" height="5" rx="1" stroke="#222" stroke-width="1.2"/>
<path d="M10 10.5V9a2 2 0 0 1 4 0v1.5" stroke="#222" stroke-width="1.2" stroke-linecap="round"/>
</svg>
<div class="fortune-tooltip">${t.toggleSheetProtection}</div>`;

      const updateProtectButtonStyle = () => {
        const wb = workbookRef.current;
        if (!wb) return;
        const allSheets = wb.getAllSheets?.() || sheetDataRef.current;
        const isProtected = isWorkbookProtected(allSheets);
        protectSheetButton.style.background = isProtected
          ? "rgba(0,120,212,0.15)"
          : "";
        protectSheetButton.style.outline = isProtected
          ? "1px solid rgba(0,120,212,0.4)"
          : "";
      };

      protectSheetButton.addEventListener("click", () => {
        const wb = workbookRef.current;
        if (!wb) return;
        const allSheets = wb.getAllSheets();
        const isProtected = isWorkbookProtected(allSheets);
        const nextProtectionValue = isProtected ? 0 : 1;

        const updatedSheets = setWorkbookProtection(
          allSheets,
          nextProtectionValue,
        ).map((s) => ({
          ...s,
          celldata: s.celldata || dataToCelldata(s.data),
        }));

        sheetDataRef.current = updatedSheets;
        setSheetData(updatedSheets);
        setWorkbookKey((key) => key + 1);

        const willBeProtected = nextProtectionValue === 1;
        protectSheetButton.style.background = willBeProtected
          ? "rgba(0,120,212,0.15)"
          : "";
        protectSheetButton.style.outline = willBeProtected
          ? "1px solid rgba(0,120,212,0.4)"
          : "";
      });

      updateProtectButtonStyle();
      toolbar.insertBefore(protectSheetButton, conditionalFormatButton.nextSibling);
    }
  }, [appMode, openConditionalDialog]);

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


  useEffect(() => {
    if (sheetData.length === 0) return;

    const observer = new MutationObserver(() => {
      const toolbar = document.getElementsByClassName("fortune-toolbar")[0];
      if (toolbar) {
        addButtons();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [sheetData, addButtons]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const toolbar = document.getElementsByClassName("fortune-toolbar")[0];
      if (toolbar) {
        addButtons();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [addButtons]);

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
      );
      requestAnimationFrame(() => workbookRef.current?.setSheetName(name));
    },
  }), []);

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
      />

      <Workbook
          key={workbookKey}
          ref={workbookRef}
          data={sheetData}
          lang={detectedLang}
          defaultColWidth={DEFAULT_COLUMN_WIDTH}
          hooks={workbookHooks}
          onChange={(newData) => {
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
                  customConditionalFormatting:
                    sheet.customConditionalFormatting ||
                    sheetDataRef.current[index]?.customConditionalFormatting ||
                    [],
                  showGridLines: normalizeShowGridLines(
                    sheet.showGridLines ??
                      sheetDataRef.current[index]?.showGridLines,
                  ),
                };
              });

              updatedData.forEach((sheet, index) => {
                if (sheet.config?.borderInfo) {
                  const removedBorders = new Set();

                  sheet.config.borderInfo.forEach((border) => {
                    if (
                      border.borderType === "border-none" &&
                      border.range?.[0]
                    ) {
                      const key = `${border.range[0].row_focus}-${border.range[0].column_focus}`;
                      removedBorders.add(key);
                    }
                  });

                  const filteredBorders = sheet.config.borderInfo.filter(
                    (border) => {
                      if (!border.range?.[0]) return true;
                      const key = `${border.range[0].row_focus}-${border.range[0].column_focus}`;
                      return !removedBorders.has(key);
                    },
                  );

                  updatedData[index] = {
                    ...sheet,
                    config: {
                      ...sheet.config,
                      borderInfo: filteredBorders,
                    },
                  };
                }
              });

              const hasConditionalRules = updatedData.some(
                (sheet) => (sheet.customConditionalFormatting || []).length > 0,
              );
              const finalData = hasConditionalRules
                ? applyConditionalFormatting(updatedData)
                : updatedData;
              sheetDataRef.current = finalData;
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
          }}
          toolbarItems={[
            "|",
            "undo",
            "redo",
            "clear-format",
            "|",
            "percentage-format",
            "number-decrease",
            "number-increase",
            "format",
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
            "image",
          ]}
      />
    </>
  ) : null;
};

export default App;
