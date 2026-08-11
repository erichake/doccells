const getToolbar = () => document.querySelector(".fortune-toolbar");
const SUPPRESS_TOOLBAR_COMBO_CLASS = "dc-suppress-toolbar-combo-popup";

const clickElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) return false;
  element.click();
  return true;
};

const getUseHref = (useElement) =>
  useElement.getAttribute("href") ||
  useElement.getAttribute("xlink:href") ||
  "";

const findControlByIcon = (root, iconId) => {
  if (!root) return null;

  return Array.from(root.querySelectorAll("use"))
    .filter((useElement) => getUseHref(useElement) === `#${iconId}`)
    .map((useElement) => useElement.closest(
      ".fortune-toolbar-button, .fortune-toolbar-combo, .fortune-toobar-combo-container",
    ))
    .find(Boolean) || null;
};

const findToolbarControlByIcon = (iconId) =>
  findControlByIcon(getToolbar(), iconId);

const findMountedControlByIcon = (iconId) =>
  findControlByIcon(document, iconId);

const findToolbarComboOption = (container, optionIconId) => {
  const optionIcon = Array.from(
    container.querySelectorAll(".fortune-toolbar-combo-popup use"),
  ).find((useElement) => getUseHref(useElement) === `#${optionIconId}`);

  return optionIcon?.closest(".fortune-toolbar-select-option") || null;
};

const findToolbarComboByOptionIcon = (optionIconId) => {
  const toolbar = getToolbar();
  if (!toolbar) return null;

  const optionIcon = Array.from(
    toolbar.querySelectorAll(".fortune-toolbar-combo-popup use"),
  ).find((useElement) => getUseHref(useElement) === `#${optionIconId}`);

  return optionIcon?.closest(".fortune-toobar-combo-container") || null;
};

const toolbarComboIconFamilies = [
  ["align-left", "align-center", "align-right"],
  ["align-top", "align-middle", "align-bottom"],
  ["text-clip", "text-overflow", "text-wrap"],
  [
    "text-rotation-none",
    "text-rotation-angleup",
    "text-rotation-angledown",
    "text-rotation-vertical",
    "text-rotation-up",
    "text-rotation-down",
  ],
  ["merge-all", "merge-vertical", "merge-horizontal", "merge-cancel"],
];

const findToolbarComboByOptionFamily = (optionIconId) => {
  const family = toolbarComboIconFamilies.find((icons) =>
    icons.includes(optionIconId),
  );
  if (!family) return null;

  return family
    .map((iconId) => findToolbarControlByIcon(iconId))
    .find(Boolean)
    ?.closest(".fortune-toobar-combo-container") || null;
};

const findFormatCombo = (formatLabels = []) => {
  const mountedMenu = document
    .querySelector(".dc-custom-number-format-menu-item, .more-format")
    ?.closest(".fortune-toobar-combo-container");
  if (mountedMenu) return mountedMenu;

  const labels = new Set(formatLabels);
  const formatText = Array.from(
    getToolbar()?.querySelectorAll(".fortune-toolbar-combo-text") || [],
  ).find((element) => labels.has(element.textContent?.trim()));
  return formatText?.closest(".fortune-toobar-combo-container") || null;
};

const findFormatOptionByLabel = (container, label) =>
  Array.from(
    container?.querySelectorAll(".fortune-toolbar-combo-popup > .fortune-toolbar-select > .fortune-toolbar-select-option") || [],
  ).find((option) => {
    if (
      option.classList.contains("dc-custom-number-format-menu-item") ||
      option.classList.contains("dc-hidden-native-format-item")
    ) {
      return false;
    }
    const optionLabel = option.querySelector(
      ".fortune-toolbar-menu-line > div:first-child",
    );
    return optionLabel?.textContent?.trim() === label?.trim();
  }) || null;

const findToolbarTextCombo = (knownLabels = []) => {
  const labels = new Set(knownLabels.map(String));
  const comboText = Array.from(
    getToolbar()?.querySelectorAll(".fortune-toolbar-combo-text") || [],
  ).find((element) => labels.has(element.textContent?.trim()));
  return comboText?.closest(".fortune-toobar-combo-container") || null;
};

const findTextComboOption = (container, label) =>
  Array.from(
    container?.querySelectorAll(
      ".fortune-toolbar-combo-popup .fortune-toolbar-select-option",
    ) || [],
  ).find((option) => option.textContent?.trim() === String(label)) || null;

const cleanupSuppressedToolbarCombo = () => {
  requestAnimationFrame(() => {
    document.body.classList.remove(SUPPRESS_TOOLBAR_COMBO_CLASS);
  });
};

export const clickToolbarIcon = (iconId) => {
  const control = findToolbarControlByIcon(iconId);
  if (!control) return false;

  const clickable =
    control.matches(".fortune-toobar-combo-container")
      ? control.querySelector(".fortune-toolbar-combo-button")
      : control;
  if (!clickable) return false;

  clickable.click();
  return true;
};

export const triggerToolbarComboOption = (comboIconId, optionIconId) => {
  const runOption = (control) => {
    const container =
      control?.closest(".fortune-toobar-combo-container") ||
      findToolbarComboByOptionFamily(optionIconId) ||
      findToolbarComboByOptionIcon(optionIconId);
    const arrow = container?.querySelector(".fortune-toolbar-combo-arrow");
    if (!container || !arrow) return false;

    document.body.classList.add(SUPPRESS_TOOLBAR_COMBO_CLASS);

    if (!findToolbarComboOption(container, optionIconId)) {
      arrow.click();
    }

    requestAnimationFrame(() => {
      const option = findToolbarComboOption(container, optionIconId);
      if (option) {
        option.click();
        cleanupSuppressedToolbarCombo();
        return;
      }

      requestAnimationFrame(() => {
        findToolbarComboOption(container, optionIconId)?.click();
        cleanupSuppressedToolbarCombo();
      });
    });

    return true;
  };

  const control = comboIconId ? findMountedControlByIcon(comboIconId) : null;
  if (control || !comboIconId) return runOption(control);

  // FortuneSheet moves trailing toolbar controls into its “More” popup on
  // narrower layouts. Mount that popup before looking up the requested combo.
  const moreControl = findToolbarControlByIcon("more");
  if (!moreControl) return false;

  moreControl.click();
  requestAnimationFrame(() => {
    const overflowControl = findMountedControlByIcon(comboIconId);
    if (overflowControl) {
      runOption(overflowControl);
      return;
    }

    requestAnimationFrame(() => {
      runOption(findMountedControlByIcon(comboIconId));
    });
  });

  return true;
};

export const triggerToolbarFormatOption = (label, formatLabels) => {
  const container = findFormatCombo(formatLabels);
  const arrow = container?.querySelector(".fortune-toolbar-combo-arrow");
  if (!container || !arrow || !label) return false;

  document.body.classList.add(SUPPRESS_TOOLBAR_COMBO_CLASS);
  if (!findFormatOptionByLabel(container, label)) arrow.click();

  requestAnimationFrame(() => {
    const option = findFormatOptionByLabel(container, label);
    if (option) {
      option.click();
      cleanupSuppressedToolbarCombo();
      return;
    }

    requestAnimationFrame(() => {
      findFormatOptionByLabel(container, label)?.click();
      cleanupSuppressedToolbarCombo();
    });
  });

  return true;
};

export const triggerToolbarTextComboOption = (
  knownCurrentLabels,
  optionLabel,
) => {
  const container = findToolbarTextCombo(knownCurrentLabels);
  const arrow = container?.querySelector(".fortune-toolbar-combo-arrow");
  if (!container || !arrow) return false;

  document.body.classList.add(SUPPRESS_TOOLBAR_COMBO_CLASS);
  arrow.click();

  requestAnimationFrame(() => {
    const option = findTextComboOption(container, optionLabel);
    if (option) {
      option.click();
      cleanupSuppressedToolbarCombo();
      return;
    }

    requestAnimationFrame(() => {
      findTextComboOption(container, optionLabel)?.click();
      cleanupSuppressedToolbarCombo();
    });
  });

  return true;
};

export const triggerFilterMenuOption = (optionIconId) =>
  triggerToolbarComboOption("filter", optionIconId);

const formatAttrStateKeys = {
  bl: "bold",
  it: "italic",
  un: "underline",
};

export const triggerWorkbookFormat = (workbookRef, attr) => {
  const workbook = workbookRef?.current;
  const setCellFormatByRange = workbook?.setCellFormatByRange;
  if (!workbook || typeof setCellFormatByRange !== "function") return false;

  const range = getActiveRange(workbook);
  const selection = workbook.getSelection?.();
  const ranges = selection?.length
    ? selection
    : [{ row: [range.row, range.row], column: [range.column, range.column] }];
  const stateKey = formatAttrStateKeys[attr];
  const nextValue = getWorkbookMenuState(workbookRef)[stateKey] ? 0 : 1;

  setCellFormatByRange(attr, nextValue, ranges);
  return true;
};

export const triggerWorkbookUndo = (workbookRef) => {
  const handleUndo = workbookRef?.current?.handleUndo;
  if (typeof handleUndo !== "function") return clickToolbarIcon("undo");
  handleUndo();
  return true;
};

export const triggerWorkbookRedo = (workbookRef) => {
  const handleRedo = workbookRef?.current?.handleRedo;
  if (typeof handleRedo !== "function") return clickToolbarIcon("redo");
  handleRedo();
  return true;
};

export const openFilePicker = () =>
  clickElement("#custom-open-button") || clickElement("#fileInput");

export const triggerGridLines = () => clickElement("#custom-gridlines-button");

export const triggerSheetProtection = () =>
  clickElement("#custom-protect-sheet-button");

export const triggerNativeImagePicker = () => {
  const uploadInput = document.querySelector("#fortune-img-upload");
  const uploadButton = uploadInput?.closest(".fortune-toolbar-button");
  if (uploadButton) {
    uploadButton.click();
    return true;
  }

  return clickToolbarIcon("image");
};

const columnNameToIndex = (columnName) =>
  columnName
    .toUpperCase()
    .split("")
    .reduce(
      (index, letter) => index * 26 + letter.charCodeAt(0) - "A".charCodeAt(0) + 1,
      0,
    ) - 1;

const getNameBoxFreezeRange = () => {
  const text = document.querySelector(".fortune-name-box")?.textContent?.trim();
  const firstCell = text?.split(":")?.[0]?.replace(/\s+/g, "");
  const match = firstCell?.match(/^([A-Z]+)(\d+)$/i);
  if (!match) return null;

  return {
    row: Math.max(0, Number(match[2]) - 1),
    column: Math.max(0, columnNameToIndex(match[1])),
  };
};

const getActiveRange = (workbook) => {
  const nameBoxRange = getNameBoxFreezeRange();
  if (nameBoxRange) return nameBoxRange;

  const activeSelection = workbook
    ?.getSheet?.()
    ?.luckysheet_select_save
    ?.find(Boolean);
  const publicSelection = workbook?.getSelection?.()?.find(Boolean);
  const selection = activeSelection || publicSelection;

  return {
    row: selection?.row_focus ?? selection?.row?.[1] ?? selection?.row?.[0] ?? 0,
    column:
      selection?.column_focus ??
      selection?.column?.[1] ??
      selection?.column?.[0] ??
      0,
  };
};

const getActiveCell = (sheet, range) => {
  const dataCell = sheet?.data?.[range.row]?.[range.column];
  if (dataCell) return dataCell;

  return sheet?.celldata?.find(
    (cell) => cell?.r === range.row && cell?.c === range.column,
  )?.v;
};

const normalizeFrozenType = (frozenType) =>
  ({
    row: "row",
    rangeRow: "row",
    column: "column",
    rangeColumn: "column",
    both: "both",
    rangeBoth: "both",
  })[frozenType] || "";

export const getWorkbookFreezeRange = (workbookRef) => {
  const workbook = workbookRef?.current;
  if (!workbook) return getNameBoxFreezeRange() || { row: 0, column: 0 };
  return getActiveRange(workbook);
};

export const getWorkbookMenuState = (workbookRef) => {
  const workbook = workbookRef?.current;
  const sheet = workbook?.getSheet?.();
  const range = workbook ? getActiveRange(workbook) : { row: 0, column: 0 };
  const cell = getActiveCell(sheet, range);

  return {
    activeRange: range,
    activeFrozenType: normalizeFrozenType(sheet?.frozen?.type),
    bold: cell?.bl === 1,
    italic: cell?.it === 1,
    underline: cell?.un === 1,
    filter: Boolean(sheet?.filter_select || sheet?.filter),
  };
};

export const triggerWorkbookFreeze = (workbookRef, type, range) => {
  const workbook = workbookRef?.current;
  if (!workbook) return false;

  if (type === "cancel") {
    const sheet = workbook.getSheet?.();
    if (!sheet) return false;
    const nextSheet = { ...sheet };
    delete nextSheet.frozen;
    workbook.updateSheet?.([nextSheet]);
    return true;
  }

  workbook.freeze?.(type, range || getActiveRange(workbook));
  return true;
};
