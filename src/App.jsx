import { useState, useEffect, useRef, useCallback } from "react";
import { Workbook } from "@fortune-sheet/react";
import { transformExcelToFortune } from "./lib/FortuneSheetExcel/main.js";
import { exportToExcel } from "./utils/exportToExcel.js";
import { customLocales } from "./locales/custom.js";

const SUPPORTED_LANGS = ["zh-CN", "zh-TW", "en", "fr-FR", "es-ES"];
const detectedLang =
  SUPPORTED_LANGS.includes(navigator.language)
    ? navigator.language
    : (SUPPORTED_LANGS.find((l) => navigator.language.startsWith(l.split("-")[0])) ?? "en");
const t = customLocales[detectedLang] ?? customLocales["en"];

const App = () => {
  const [sheetData, setSheetData] = useState([]);
  const sheetDataRef = useRef([]);
  useEffect(() => {
    sheetDataRef.current = sheetData;
  }, [sheetData]);

  const workbookRef = useRef(null);
  const formulasRef = useRef({});

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

      if (!fortuneData.sheets[0].config) {
        fortuneData.sheets[0].config = {}; // S'assurer que l'objet config existe
      }
      if (!fortuneData.sheets[0].config.merge) {
        fortuneData.sheets[0].config.merge = {}; // Initialiser l'objet merge s'il est manquant
      }

      fortuneData.sheets[0].celldata.forEach((cell) => {
        if (cell.v?.mc) {
          const { r, c } = cell.v.mc;

          // Vérifier si cette fusion existe déjà dans config.merge
          if (!fortuneData.sheets[0].config.merge[`${r}_${c}`]) {
            // Trouver la cellule principale
            const mainCell = fortuneData.sheets[0].celldata.find(
              (cellItem) => cellItem.r === r && cellItem.c === c,
            );

            if (mainCell?.v?.mc?.rs && mainCell?.v?.mc?.cs) {
              // Ajouter la fusion à config.merge
              fortuneData.sheets[0].config.merge[`${r}_${c}`] = {
                r,
                c,
                rs: mainCell.v.mc.rs,
                cs: mainCell.v.mc.cs,
              };
            }
          }
        }
      });

      // 🔹 Vérification et correction des cellules fusionnées
      if (fortuneData.sheets[0].config?.merge) {
        const merges = fortuneData.sheets[0].config.merge;

        fortuneData.sheets[0].celldata.forEach((cell) => {
          const { r, c } = cell;

          // Vérifier si la cellule est la principale d'une fusion
          const isMergedMainCell = Object.values(merges).some(
            (merge) => merge.r === r && merge.c === c,
          );

          if (isMergedMainCell) {
            // Ajout des informations de fusion sur la cellule principale
            cell.v = cell.v || {};
            cell.v.mc = {
              r,
              c,
              rs: merges[`${r}_${c}`]?.rs || 1,
              cs: merges[`${r}_${c}`]?.cs || 1,
            };
          }
        });

        // 🔹 Ajouter les cellules fusionnées secondaires
        Object.entries(merges).forEach(([, merge]) => {
          const { r, c, rs, cs } = merge;

          for (let row = r; row < r + rs; row++) {
            for (let col = c; col < c + cs; col++) {
              if (row === r && col === c) continue; // Ne pas modifier la cellule principale

              // Chercher si la cellule fusionnée secondaire existe déjà
              let secondaryCell = fortuneData.sheets[0].celldata.find(
                (cell) => cell.r === row && cell.c === col,
              );

              if (secondaryCell) {
                // 🔹 Corriger les cellules fusionnées secondaires en leur assignant "mc"
                secondaryCell.v = secondaryCell.v || {};
                secondaryCell.v.mc = { r, c };
              } else {
                // 🔹 Ajouter une nouvelle cellule fusionnée secondaire si elle n'existe pas encore
                fortuneData.sheets[0].celldata.push({
                  r: row,
                  c: col,
                  v: { mc: { r, c } },
                });
              }
            }
          }
        });

        // 🔹 Supprimer les cellules fusionnées secondaires avec "v": null
        fortuneData.sheets[0].celldata = fortuneData.sheets[0].celldata.filter(
          (cell) => !("v" in cell && cell.v?.v === null),
        );
      }

      // 🔹 Traitement des formules et valeurs affichées
      fortuneData.sheets.forEach((sheet, sheetIndex) => {
        if (sheet.celldata) {
          sheet.celldata.forEach((cell) => {
            if (cell.v?.f) {
              const key = `${sheetIndex}-${cell.r}-${cell.c}`;
              formulas[key] = cell.v.f;
              cell.v.VF = { v: cell.v.v, f: cell.v.f };
              delete cell.v.f;
              delete cell.v.v;
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

      const sheetPrefix =
        {
          "zh-CN": "工作表",
          "zh-TW": "工作表",
          en: "Sheet",
          "fr-FR": "Feuille",
          "es-ES": "Hoja",
        }[detectedLang] ?? "Sheet";

      const isDefaultSheetName = (name) =>
        !name || /^(Sheet|Feuille|Hoja|工作表)\d+$/.test(name);

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

      const formattedData = fortuneData.sheets.map((sheet, index) => ({
        name: isDefaultSheetName(sheet.name)
          ? `${sheetPrefix}${index + 1}`
          : sheet.name,
        id: index.toString(),
        status: 1,
        order: index,
        celldata: sheet.celldata || [],
        config: {
          columnlen: sheet.config?.columnlen || {},
          rowlen: sheet.config?.rowlen || {},
          borderInfo: sheet.config?.borderInfo || [],
          merge: sheet.config?.merge || {},
          authority: sheet.config?.authority,
        },
        images: convertImages(sheet.images),
      }));

      setSheetData(formattedData);
    }
  }, []);

  useEffect(() => {
    if (workbookRef.current && sheetData.length > 0) {
      const instance = workbookRef.current;

      const sortedFormulas = Object.entries(formulasRef.current).sort(
        (a, b) => {
          const [sheetIndexA] = a[0].split("-").map(Number);
          const [sheetIndexB] = b[0].split("-").map(Number);
          return sheetIndexB - sheetIndexA;
        },
      );

      sortedFormulas.forEach(([key, formula]) => {
        const [sheetIndex, row, col] = key.split("-").map(Number);
        instance?.activateSheet?.({ index: sheetIndex });
        instance?.setCellValue?.(row, col, formula);
      });

      // Workbook vraiment exploitable
      markReady();
    }
  }, [sheetData, markReady]);

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
      return await exportToExcel(sheetDataRef.current, { returnBase64: true });
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
        exportToExcel(sheetDataRef.current);
      } else {
        console.error("❌ Aucune donnée à exporter !");
      }
    });

    toolbar.insertBefore(exportButton, openButton.nextSibling);

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
      const sheet = wb.getSheet();
      const isProtected = sheet?.config?.authority?.sheet === 1;
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
      const sheet = wb.getSheet();
      const isProtected = sheet?.config?.authority?.sheet === 1;
      const newAuthority = isProtected ? { sheet: 0 } : { sheet: 1 };

      const allSheets = wb.getAllSheets();
      const updatedSheets = allSheets.map((s) =>
        s.id === sheet.id
          ? { ...s, config: { ...s.config, authority: newAuthority } }
          : s,
      );
      wb.updateSheet(updatedSheets);

      sheetDataRef.current = sheetDataRef.current.map((s) =>
        s.id === sheet.id
          ? { ...s, config: { ...s.config, authority: newAuthority } }
          : s,
      );

      const willBeProtected = !isProtected;
      protectSheetButton.style.background = willBeProtected
        ? "rgba(0,120,212,0.15)"
        : "";
      protectSheetButton.style.outline = willBeProtected
        ? "1px solid rgba(0,120,212,0.4)"
        : "";
    });

    updateProtectButtonStyle();
    toolbar.insertBefore(protectSheetButton, exportButton.nextSibling);
  }, []);

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
            injectLockMenuItem(node);
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
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

      <Workbook
          ref={workbookRef}
          data={sheetData}
          lang={detectedLang}
          onChange={(newData) => {
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

                        newCells.push({
                          r,
                          c,
                          v: {
                            ...cell,
                            v:
                              cell.v === null
                                ? null
                                : isNaN(cell.v)
                                  ? cell.v
                                  : parseFloat(cell.v),
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

              sheetDataRef.current = updatedData;
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
