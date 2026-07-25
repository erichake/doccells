import { useCallback, useEffect } from "react";
import {
  areGridLinesHidden,
  dataToCelldata,
  isWorkbookProtected,
  setWorkbookGridLines,
  setWorkbookProtection,
} from "../workbook/workbookUtils.js";

const preserveCustomList = (liveList, previousList) => {
  if (Array.isArray(previousList)) return previousList;
  return Array.isArray(liveList) ? liveList : [];
};

const findPreviousSheet = (previousSheets, sheet, fallbackIndex) => {
  if (sheet?.id != null) {
    const byId = previousSheets.find(
      (item) => item?.id != null && String(item.id) === String(sheet.id),
    );
    if (byId) return byId;
  }

  if (sheet?.name) {
    const byName = previousSheets.find((item) => item?.name === sheet.name);
    if (byName) return byName;
  }

  return previousSheets[fallbackIndex];
};

const preserveDocCellsMetadata = (sheets, previousSheets) =>
  sheets.map((sheet, index) => {
    const previousSheet = findPreviousSheet(previousSheets, sheet, index);
    return {
      ...sheet,
      celldata: sheet.celldata || dataToCelldata(sheet.data),
      customConditionalFormatting: preserveCustomList(
        sheet.customConditionalFormatting,
        previousSheet?.customConditionalFormatting,
      ),
      customCharts: preserveCustomList(
        sheet.customCharts,
        previousSheet?.customCharts,
      ),
    };
  });

export const useFortuneToolbarButtons = ({
  appMode,
  sheetData,
  sheetDataRef,
  workbookRef,
  setSheetData,
  setWorkbookKey,
  openChartDialog,
  openConditionalDialog,
  openCustomNumberFormatDialog,
  chartToolbarText,
  openButtonText,
  exportButtonText,
  onOpenDocument,
  onPrimaryFileAction,
  toggleGridLinesText,
  toggleSheetProtectionText,
  conditionalFormattingToolbarText,
  customNumberFormatMenuText,
}) => {
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
    document.getElementById("custom-chart-button")?.remove();
    document.getElementById("custom-conditional-format-button")?.remove();
    document.getElementById("custom-protect-sheet-button")?.remove();
    document.getElementById("custom-after-protect-divider")?.remove();

    const createToolbarDivider = (id) => {
      const divider = document.createElement("div");
      divider.id = id;
      divider.className = "fortune-toolbar-divider";
      return divider;
    };

    const getNativeImageButton = () => {
      const nativeButtons = Array.from(
        toolbar.getElementsByClassName("fortune-toolbar-button"),
      ).filter((button) => !button.id?.startsWith("custom-"));

      const uploadImageButton = nativeButtons.find((button) =>
        button.querySelector("#fortune-img-upload"),
      );
      if (uploadImageButton) return uploadImageButton;

      const labelledImageButton = nativeButtons.find((button) => {
        const label = [
          button.getAttribute("aria-label"),
          button.getAttribute("title"),
          button.textContent,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return (
          label.includes("image") ||
          label.includes("insérer une image") ||
          label.includes("inserer une image")
        );
      });

      return labelledImageButton || null;
    };

    const moveNativeImageButtonAfter = (referenceNode) => {
      const imageButton = getNativeImageButton();
      if (!referenceNode || !imageButton || imageButton === referenceNode) {
        return;
      }
      toolbar.insertBefore(imageButton, referenceNode.nextSibling);
    };

    // 🔹 Création du bouton "Ouvrir..."
    const openButton = document.createElement("div");
    openButton.id = "custom-open-button";
    openButton.className = "fortune-toolbar-button fortune-toolbar-item";
    openButton.innerHTML = `<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 18.5004H5.9C5.05992 18.5004 4.63988 18.5004 4.31901 18.3369C4.03677 18.1931 3.8073 17.9636 3.66349 17.6814C3.5 17.3605 3.5 16.9405 3.5 16.1004V6.9C3.5 6.05992 3.5 5.63988 3.66349 5.31901C3.8073 5.03677 4.03677 4.8073 4.31901 4.66349C4.63988 4.5 5.05992 4.5 5.9 4.5H8.47237C8.84808 4.5 9.03594 4.5 9.20646 4.55179C9.35741 4.59763 9.49785 4.6728 9.61972 4.77298C9.75739 4.88614 9.86159 5.04245 10.07 5.35507L10.93 6.64533C11.1384 6.95795 11.2426 7.11426 11.3803 7.22742C11.5022 7.3276 11.6426 7.40277 11.7935 7.44861C11.9641 7.5004 12.1519 7.5004 12.5276 7.5004H16.5004C16.965 7.5004 17.1973 7.5004 17.3879 7.55143C17.9058 7.69008 18.3103 8.09459 18.449 8.61248C18.5 8.80308 18.5 9.03539 18.5 9.5V9.5M9.5 13.5H16.5" stroke="#222222" stroke-linecap="round"/><path d="M5.95298 11.1411C6.14969 10.551 6.24804 10.2559 6.43047 10.0378C6.59157 9.84512 6.79845 9.69601 7.03216 9.6041C7.2968 9.50002 7.60783 9.50003 8.2299 9.50005L18.1703 9.50031C19.2945 9.50034 19.8566 9.50036 20.2255 9.7357C20.5485 9.94171 20.7804 10.2635 20.8737 10.635C20.9803 11.0595 20.8025 11.5928 20.447 12.6593L19.047 16.8593C18.8503 17.4495 18.752 17.7445 18.5695 17.9627C18.4084 18.1553 18.2016 18.3044 17.9679 18.3963C17.7032 18.5004 17.3922 18.5004 16.7702 18.5004H6.82977C5.70557 18.5004 5.14347 18.5004 4.77449 18.2651C4.4515 18.0591 4.21958 17.7373 4.12628 17.3657C4.01969 16.9413 4.19744 16.408 4.55293 15.3415L5.95298 11.1411Z" stroke="#222222"/>
</svg>
<div class="fortune-tooltip">${openButtonText}</div>`;
    openButton.addEventListener("click", () => {
      onOpenDocument();
    });

    toolbar.insertBefore(openButton, toolbar.firstChild);

    // 🔹 Création du bouton "Exporter..."
    const exportButton = document.createElement("div");
    exportButton.id = "custom-export-button";
    exportButton.className = "fortune-toolbar-button fortune-toolbar-item";
    exportButton.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><path d="M51,53.48H10.52V13A2.48,2.48,0,0,1,13,10.52H46.07l7.41,6.4V51A2.48,2.48,0,0,1,51,53.48Z" stroke-linecap="round"/><rect x="21.5" y="10.52" width="21.01" height="15.5" stroke-linecap="round"/><rect x="17.86" y="36.46" width="28.28" height="17.02" stroke-linecap="round"/></svg>
    <div class="fortune-tooltip">${exportButtonText}</div>`;

    exportButton.addEventListener("click", () => {
      if (sheetDataRef.current.length > 0) {
        onPrimaryFileAction();
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
<div class="fortune-tooltip">${toggleGridLinesText}</div>`;

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
      );

      const preservedSheets = preserveDocCellsMetadata(
        updatedSheets,
        sheetDataRef.current,
      );
      sheetDataRef.current = preservedSheets;
      setSheetData(preservedSheets);
      setWorkbookKey((key) => key + 1);
      updateGridLinesButtonStyle();
    });

    updateGridLinesButtonStyle();
    toolbar.insertBefore(gridLinesButton, exportButton.nextSibling);

    // 🔹 Création du bouton "Graphique"
    const chartButton = document.createElement("div");
    chartButton.id = "custom-chart-button";
    chartButton.className = "fortune-toolbar-button fortune-toolbar-item";
    chartButton.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5h16" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
<rect x="6" y="10" width="3" height="7" rx="0.8" stroke="#222" stroke-width="1.4"/>
<rect x="11" y="6" width="3" height="11" rx="0.8" stroke="#222" stroke-width="1.4"/>
<rect x="16" y="12" width="3" height="5" rx="0.8" stroke="#222" stroke-width="1.4"/>
<path d="M6.5 7.5 10 5l4 2.5 4-4" stroke="#1a73e8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div class="fortune-tooltip">${chartToolbarText}</div>`;
    chartButton.addEventListener("click", openChartDialog);

    // 🔹 Création du bouton "Formatage conditionnel"
    const conditionalFormatButton = document.createElement("div");
    conditionalFormatButton.id = "custom-conditional-format-button";
    conditionalFormatButton.className = "fortune-toolbar-button fortune-toolbar-item";
    conditionalFormatButton.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="5" width="16" height="14" rx="2" stroke="#222" stroke-width="1.4"/>
<path d="M8 9h8M8 12h4" stroke="#222" stroke-width="1.4" stroke-linecap="round"/>
<path d="M8 16l2-2 2 2 4-4" stroke="#d93025" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div class="fortune-tooltip">${conditionalFormattingToolbarText}</div>`;
    conditionalFormatButton.addEventListener("click", openConditionalDialog);
    toolbar.insertBefore(conditionalFormatButton, gridLinesButton.nextSibling);

    let chartAnchor = conditionalFormatButton;
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
<div class="fortune-tooltip">${toggleSheetProtectionText}</div>`;

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
        );

        const preservedSheets = preserveDocCellsMetadata(
          updatedSheets,
          sheetDataRef.current,
        );
        sheetDataRef.current = preservedSheets;
        setSheetData(preservedSheets);
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
      chartAnchor = protectSheetButton;
    }

    const afterProtectDivider = createToolbarDivider(
      "custom-after-protect-divider",
    );
    toolbar.insertBefore(afterProtectDivider, chartAnchor.nextSibling);
    toolbar.insertBefore(chartButton, afterProtectDivider.nextSibling);
    moveNativeImageButtonAfter(chartButton);
  }, [
    appMode,
    chartToolbarText,
    openButtonText,
    exportButtonText,
    onOpenDocument,
    onPrimaryFileAction,
    conditionalFormattingToolbarText,
    openChartDialog,
    openConditionalDialog,
    setSheetData,
    setWorkbookKey,
    sheetDataRef,
    toggleGridLinesText,
    toggleSheetProtectionText,
    workbookRef,
  ]);

  useEffect(() => {
    if (sheetData.length === 0) return undefined;

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

  useEffect(() => {
    if (sheetData.length === 0) return undefined;

    const installMenuItem = () => {
      document.querySelectorAll(".more-format").forEach((menu) => {
        const nativeCustomFormatsItem = menu.closest(
          ".fortune-toolbar-select-option",
        );
        const mainFormatMenu = nativeCustomFormatsItem?.parentElement;
        if (!nativeCustomFormatsItem || !mainFormatMenu) return;

        let item = Array.from(mainFormatMenu.children).find((child) =>
          child.classList.contains("dc-custom-number-format-menu-item"),
        );
        if (!item) {
          item = document.createElement("div");
          item.className =
            "fortune-toolbar-select-option dc-custom-number-format-menu-item";
          item.setAttribute("role", "menuitem");
          item.setAttribute("tabindex", "0");
          item.innerHTML = `<div class="fortuen-toolbar-text"><div class="fortune-toolbar-menu-line"><div>${customNumberFormatMenuText}</div><div class="fortune-toolbar-subtext"></div></div></div>`;
          const openDialog = (event) => {
            if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            event.stopPropagation();
            const popup = item.closest(".fortune-toolbar-combo-popup");
            popup?.parentElement
              ?.querySelector(".fortune-toolbar-combo-arrow")
              ?.click();
            openCustomNumberFormatDialog();
          };
          item.addEventListener("click", openDialog);
          item.addEventListener("keydown", openDialog);
          mainFormatMenu.insertBefore(item, nativeCustomFormatsItem);
        }
        nativeCustomFormatsItem.classList.add("dc-hidden-native-format-item");
      });
    };

    installMenuItem();
    const observer = new MutationObserver(installMenuItem);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      document.querySelectorAll(".dc-custom-number-format-menu-item").forEach((item) => item.remove());
      document.querySelectorAll(".dc-hidden-native-format-item").forEach((item) => {
        item.classList.remove("dc-hidden-native-format-item");
      });
    };
  }, [
    customNumberFormatMenuText,
    openCustomNumberFormatDialog,
    sheetData.length,
  ]);
};
