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

const findToolbarControlByIcon = (iconId) => {
  const toolbar = getToolbar();
  if (!toolbar) return null;

  const iconUse = Array.from(toolbar.querySelectorAll("use")).find(
    (useElement) => getUseHref(useElement) === `#${iconId}`,
  );
  if (!iconUse) return null;

  return iconUse.closest(
    ".fortune-toolbar-button, .fortune-toolbar-combo, .fortune-toobar-combo-container",
  );
};

const findToolbarComboOption = (container, optionIconId) => {
  const optionIcon = Array.from(
    container.querySelectorAll(".fortune-toolbar-combo-popup use"),
  ).find((useElement) => getUseHref(useElement) === `#${optionIconId}`);

  return optionIcon?.closest(".fortune-toolbar-select-option") || null;
};

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
  const control = findToolbarControlByIcon(comboIconId);
  const container = control?.closest(".fortune-toobar-combo-container");
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
