/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import docToolsFavicon from "../../assets/doctools-favicon.png";
import SplashLogo from "../../shared/SplashLogo.js";
import { areGridLinesHidden, isWorkbookProtected } from "../workbook/workbookUtils.js";
import {
  clickToolbarIcon,
  getWorkbookFreezeRange,
  getWorkbookMenuState,
  triggerGridLines,
  triggerFilterMenuOption,
  triggerNativeImagePicker,
  triggerToolbarComboOption,
  triggerToolbarFormatOption,
  triggerToolbarTextComboOption,
  triggerWorkbookFormat,
  triggerWorkbookRedo,
  triggerSheetProtection,
  triggerWorkbookUndo,
  triggerWorkbookFreeze,
} from "./standaloneMenuCommands.js";
import "./StandaloneMenuBar.css";

const FONT_SIZES = [9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];

const isTopWindow = () => {
  try {
    return window.self === window.top;
  } catch {
    return false;
  }
};

const isFortuneCellEditing = (cellInput) => {
  const inputBox = cellInput?.closest?.(".luckysheet-input-box");
  if (!inputBox) return false;

  return window.getComputedStyle(inputBox).zIndex !== "-1";
};

const isEditableTarget = (target) => {
  if (!target?.closest) return false;

  const cellInput = target.closest(".luckysheet-cell-input");
  if (cellInput) return isFortuneCellEditing(cellInput);

  return Boolean(
    target.closest('input, textarea, select, [contenteditable="true"]'),
  );
};

const isPrimaryShortcut = (event) =>
  (event.metaKey || event.ctrlKey) && !event.altKey;

const openExternalPage = (url) => {
  const openedWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (openedWindow) openedWindow.opener = null;
};

const Icon = ({ name, checked }) => (
  <span className="dc-menu-icon" aria-hidden="true">
    {checked ? icons.check : (icons[name] ?? null)}
  </span>
);

const MenuItem = ({ item, onRun }) => {
  const hasSubmenu = Array.isArray(item.items);

  return (
    <div className="dc-menu-item-wrap">
      <button
        type="button"
        className="dc-menu-item"
        disabled={item.disabled}
        title={item.title}
        onClick={() => {
          if (!hasSubmenu) onRun(item.command);
        }}
        onMouseEnter={item.onMouseEnter}
      >
        <Icon name={item.icon} checked={item.checked} />
        <span className="dc-menu-label">{item.label}</span>
        {item.shortcut ? (
          <span className="dc-menu-shortcut">{item.shortcut}</span>
        ) : null}
        {hasSubmenu ? <span className="dc-menu-chevron" aria-hidden="true" /> : null}
      </button>

      {hasSubmenu ? (
        <div
          className={`dc-menu-popover dc-menu-submenu ${item.submenuClassName || ""}`}
          role="menu"
        >
          {item.items.map((subItem, index) =>
            subItem === "divider" ? (
              <MenuDivider key={`${item.label}-divider-${index}`} />
            ) : (
              <MenuItem
                key={subItem.key || subItem.label}
                item={subItem}
                onRun={onRun}
              />
            ),
          )}
        </div>
      ) : null}
    </div>
  );
};

const MenuDivider = () => <div className="dc-menu-divider" role="separator" />;

export const StandaloneMenuBar = ({
  appMode,
  sheetDataRef,
  texts,
  workbookRef,
  onOpenChartDialog,
  onOpenConditionalDialog,
  onOpenCustomNumberFormatDialog,
  documentName,
  documentDirty,
  supportsNativeFileSave,
  onOpenDocument,
  onSaveDocument,
  onSaveDocumentAs,
  onExportDocument,
  recentFiles,
  onOpenRecentFile,
  onClearRecentFiles,
}) => {
  const [isStandalone, setIsStandalone] = useState(isTopWindow);
  const [openMenu, setOpenMenu] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [menuState, setMenuState] = useState({});
  const menuRef = useRef(null);
  const freezeRangeRef = useRef({ row: 0, column: 0 });
  const buildVersion = import.meta.env.DOCCELLS_BUILD_VERSION || "dev";

  useEffect(() => {
    setIsStandalone(isTopWindow());
  }, []);

  useEffect(() => {
    if (!openMenu) return undefined;

    const closeOnPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", closeOnPointerDown);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnPointerDown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openMenu]);

  const refreshMenuState = useCallback(() => {
    freezeRangeRef.current = getWorkbookFreezeRange(workbookRef);
    setMenuState(getWorkbookMenuState(workbookRef));
  }, [workbookRef]);

  const runCommand = useCallback((command) => {
    command?.();
    setOpenMenu(null);
    requestAnimationFrame(refreshMenuState);
  }, [refreshMenuState]);

  useEffect(() => {
    if (!isAboutOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsAboutOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isAboutOpen]);

  const isGridLinesVisible = !areGridLinesHidden(sheetDataRef.current);
  const isProtected = isWorkbookProtected(
    workbookRef.current?.getAllSheets?.() || sheetDataRef.current,
  );

  useEffect(() => {
    if (!isStandalone) return undefined;

    const runShortcut = (event) => {
      if (
        event.defaultPrevented ||
        event.isComposing ||
        !isPrimaryShortcut(event) ||
        isEditableTarget(event.target)
      ) {
        return;
      }

      const key = event.key.toLowerCase();
      const commandByKey = {
        b: () => triggerWorkbookFormat(workbookRef, "bl"),
        i: () => triggerWorkbookFormat(workbookRef, "it"),
        o: onOpenDocument,
        s: supportsNativeFileSave ? onSaveDocument : onExportDocument,
        u: () => triggerWorkbookFormat(workbookRef, "un"),
        y: () => triggerWorkbookRedo(workbookRef),
        z: () =>
          event.shiftKey
            ? triggerWorkbookRedo(workbookRef)
            : triggerWorkbookUndo(workbookRef),
      };
      const command = commandByKey[key];
      if (!command) return;

      event.preventDefault();
      event.stopPropagation();
      runCommand(command);
    };

    document.addEventListener("keydown", runShortcut, true);
    return () => {
      document.removeEventListener("keydown", runShortcut, true);
    };
  }, [
    isStandalone,
    onExportDocument,
    onOpenDocument,
    onSaveDocument,
    runCommand,
    supportsNativeFileSave,
    workbookRef,
  ]);

  const menus = useMemo(
    () => [
      {
        id: "file",
        label: texts.roots.file,
        items: supportsNativeFileSave
          ? [
              { icon: "folder", label: texts.items.open, shortcut: "⌘O", command: onOpenDocument },
              recentFiles.length > 0
                ? {
                    icon: "folder",
                    label: texts.items.openRecent,
                    items: [
                      ...recentFiles.map((entry) => ({
                        key: entry.id,
                        icon: "file",
                        label: entry.name,
                        title: entry.name,
                        command: () => onOpenRecentFile(entry),
                      })),
                      "divider",
                      {
                        icon: "trash",
                        label: texts.items.clearRecentFiles,
                        command: onClearRecentFiles,
                      },
                    ],
                  }
                : {
                    icon: "folder",
                    label: texts.items.openRecent,
                    disabled: true,
                  },
              "divider",
              { icon: "download", label: texts.items.save, shortcut: "⌘S", command: onSaveDocument },
              { icon: "download", label: texts.items.saveAs, command: onSaveDocumentAs },
            ]
          : [
              { icon: "folder", label: texts.items.open, shortcut: "⌘O", command: onOpenDocument },
              { icon: "download", label: texts.items.export, command: onExportDocument },
            ],
      },
      {
        id: "edit",
        label: texts.roots.edit,
        items: [
          { icon: "undo", label: texts.items.undo, shortcut: "⌘Z", command: () => triggerWorkbookUndo(workbookRef) },
          { icon: "redo", label: texts.items.redo, shortcut: "⌘Y", command: () => triggerWorkbookRedo(workbookRef) },
        ],
      },
      {
        id: "view",
        label: texts.roots.view,
        items: [
          {
            icon: "eye",
            label: texts.items.show,
            items: [
              {
                icon: "grid",
                label: texts.items.gridlines,
                checked: isGridLinesVisible,
                command: triggerGridLines,
              },
            ],
          },
          {
            icon: "freeze",
            label: texts.items.freeze,
            items: [
              {
                icon: "freezeRow",
                label: texts.items.freezeRow,
                checked: menuState.activeFrozenType === "row",
                command: () =>
                  triggerWorkbookFreeze(workbookRef, "row", freezeRangeRef.current),
              },
              {
                icon: "freezeColumn",
                label: texts.items.freezeColumn,
                checked: menuState.activeFrozenType === "column",
                command: () =>
                  triggerWorkbookFreeze(
                    workbookRef,
                    "column",
                    freezeRangeRef.current,
                  ),
              },
              {
                icon: "freeze",
                label: texts.items.freezeCell,
                checked: menuState.activeFrozenType === "both",
                command: () =>
                  triggerWorkbookFreeze(workbookRef, "both", freezeRangeRef.current),
              },
              "divider",
              {
                icon: "freezeCancel",
                label: texts.items.freezeCancel,
                disabled: !menuState.activeFrozenType,
                command: () => triggerWorkbookFreeze(workbookRef, "cancel"),
              },
            ],
          },
        ],
      },
      {
        id: "insert",
        label: texts.roots.insert,
        items: [
          { icon: "image", label: texts.items.image, command: triggerNativeImagePicker },
          { icon: "chart", label: texts.items.chart, command: onOpenChartDialog },
        ],
      },
      {
        id: "format",
        label: texts.roots.format,
        items: [
          {
            icon: "number",
            label: texts.items.number,
            submenuClassName: "dc-menu-number-submenu",
            items: [
              ...texts.numberFormats
                .filter(
                  (item, index) =>
                    item !== "divider"
                      ? item.value !== "fmtOtherSelf"
                      : texts.numberFormats
                          .slice(index + 1)
                          .some(
                            (nextItem) =>
                              nextItem !== "divider" &&
                              nextItem.value !== "fmtOtherSelf",
                          ),
                )
                .map((item) =>
                  item === "divider"
                    ? item
                    : {
                        label: item.text,
                        shortcut: item.example,
                        command: () =>
                          triggerToolbarFormatOption(
                            item.text,
                            texts.numberFormats
                              .filter((format) => format !== "divider")
                              .map((format) => format.text),
                          ),
                      },
                ),
              "divider",
              {
                icon: "decimalLess",
                label: texts.items.decreaseDecimals,
                command: () => clickToolbarIcon("number-decrease"),
              },
              {
                icon: "decimalMore",
                label: texts.items.increaseDecimals,
                command: () => clickToolbarIcon("number-increase"),
              },
              "divider",
              {
                label: texts.items.customNumberFormat,
                command: onOpenCustomNumberFormatDialog,
              },
            ],
          },
          {
            icon: "text",
            label: texts.items.text,
            items: [
              { icon: "bold", label: texts.items.bold, shortcut: "⌘B", checked: menuState.bold, command: () => triggerWorkbookFormat(workbookRef, "bl") },
              { icon: "italic", label: texts.items.italic, shortcut: "⌘I", checked: menuState.italic, command: () => triggerWorkbookFormat(workbookRef, "it") },
              { icon: "underline", label: texts.items.underline, shortcut: "⌘U", checked: menuState.underline, command: () => triggerWorkbookFormat(workbookRef, "un") },
            ],
          },
          {
            icon: "alignment",
            label: texts.items.alignment,
            items: [
              { icon: "alignLeft", label: texts.items.alignLeft, command: () => triggerToolbarComboOption(null, "align-left") },
              { icon: "alignCenter", label: texts.items.alignCenter, command: () => triggerToolbarComboOption(null, "align-center") },
              { icon: "alignRight", label: texts.items.alignRight, command: () => triggerToolbarComboOption(null, "align-right") },
              "divider",
              { icon: "alignTop", label: texts.items.alignTop, command: () => triggerToolbarComboOption(null, "align-top") },
              { icon: "alignMiddle", label: texts.items.alignMiddle, command: () => triggerToolbarComboOption(null, "align-middle") },
              { icon: "alignBottom", label: texts.items.alignBottom, command: () => triggerToolbarComboOption(null, "align-bottom") },
            ],
          },
          {
            icon: "wrap",
            label: texts.items.textWrap,
            items: [
              { label: texts.items.wrapOverflow, command: () => triggerToolbarComboOption(null, "text-overflow") },
              { label: texts.items.wrap, command: () => triggerToolbarComboOption(null, "text-wrap") },
              { label: texts.items.wrapClip, command: () => triggerToolbarComboOption(null, "text-clip") },
            ],
          },
          {
            icon: "rotation",
            label: texts.items.rotation,
            items: [
              { label: texts.items.rotationNone, command: () => triggerToolbarComboOption(null, "text-rotation-none") },
              { label: texts.items.rotationAngleUp, command: () => triggerToolbarComboOption(null, "text-rotation-angleup") },
              { label: texts.items.rotationAngleDown, command: () => triggerToolbarComboOption(null, "text-rotation-angledown") },
              { label: texts.items.rotationVertical, command: () => triggerToolbarComboOption(null, "text-rotation-vertical") },
              { label: texts.items.rotationUp, command: () => triggerToolbarComboOption(null, "text-rotation-up") },
              { label: texts.items.rotationDown, command: () => triggerToolbarComboOption(null, "text-rotation-down") },
            ],
          },
          "divider",
          {
            icon: "fontSize",
            label: texts.items.fontSize,
            items: FONT_SIZES.map((size) => ({
              label: String(size),
              command: () =>
                triggerToolbarTextComboOption(FONT_SIZES, size),
            })),
          },
          {
            icon: "merge",
            label: texts.items.mergeCells,
            items: [
              { label: texts.items.mergeAll, command: () => triggerToolbarComboOption(null, "merge-all") },
              { label: texts.items.mergeVertical, command: () => triggerToolbarComboOption(null, "merge-vertical") },
              { label: texts.items.mergeHorizontal, command: () => triggerToolbarComboOption(null, "merge-horizontal") },
              { label: texts.items.unmerge, command: () => triggerToolbarComboOption(null, "merge-cancel") },
            ],
          },
          "divider",
          { icon: "spark", label: texts.items.conditionalFormatting, command: onOpenConditionalDialog },
          "divider",
          { icon: "eraser", label: texts.items.clearFormat, command: () => clickToolbarIcon("clear-format") },
        ],
      },
      {
        id: "data",
        label: texts.roots.data,
        items: [
          {
            icon: "filter",
            label: texts.items.sortAndFilter,
            items: [
              {
                icon: "sortAsc",
                label: texts.items.sortAscending,
                command: () => triggerFilterMenuOption("sort-asc"),
              },
              {
                icon: "sortDesc",
                label: texts.items.sortDescending,
                command: () => triggerFilterMenuOption("sort-desc"),
              },
              "divider",
              {
                icon: "filter",
                label: texts.items.createFilter,
                checked: menuState.filter,
                command: () => triggerFilterMenuOption("filter1"),
              },
              {
                icon: "eraser",
                label: texts.items.clearFilter,
                disabled: !menuState.filter,
                command: () => triggerFilterMenuOption("eraser"),
              },
            ],
          },
        ],
      },
      {
        id: "tools",
        label: texts.roots.tools,
        items: [
          {
            icon: "shield",
            label: texts.items.protectWorkbook,
            checked: isProtected,
            command: triggerSheetProtection,
            disabled: appMode === "student",
          },
          "divider",
          {
            icon: "docTools",
            label: "DocTools",
            command: () => openExternalPage("https://doctools.org"),
          },
          {
            icon: "licenseGithub",
            label: texts.items.licenseGithub,
            command: () =>
              openExternalPage("https://github.com/erichake/doccells"),
          },
          "divider",
          {
            icon: "info",
            label: texts.items.about,
            command: () => setIsAboutOpen(true),
          },
        ],
      },
    ],
    [
      appMode,
      isGridLinesVisible,
      isProtected,
      menuState,
      onOpenChartDialog,
      onOpenConditionalDialog,
      onOpenCustomNumberFormatDialog,
      onExportDocument,
      onClearRecentFiles,
      onOpenDocument,
      onOpenRecentFile,
      onSaveDocument,
      onSaveDocumentAs,
      recentFiles,
      supportsNativeFileSave,
      texts,
      workbookRef,
    ],
  );

  if (!isStandalone) return null;

  return (
    <nav
      className="dc-menu-bar"
      aria-label={texts.menuBarLabel}
      ref={menuRef}
      onMouseEnter={refreshMenuState}
      onFocus={refreshMenuState}
    >
      {menus.map((menu) => (
        <div className="dc-menu-root" key={menu.id}>
          <button
            type="button"
            className="dc-menu-root-button"
            aria-expanded={openMenu === menu.id}
            onClick={() => {
              refreshMenuState();
              setOpenMenu(openMenu === menu.id ? null : menu.id);
            }}
            onMouseEnter={() => {
              refreshMenuState();
              if (openMenu) setOpenMenu(menu.id);
            }}
          >
            {menu.label}
          </button>
          {openMenu === menu.id ? (
            <div className="dc-menu-popover" role="menu">
              {menu.items.map((item, index) =>
                item === "divider" ? (
                  <MenuDivider key={`${menu.id}-divider-${index}`} />
                ) : (
                  <MenuItem key={item.label} item={item} onRun={runCommand} />
                ),
              )}
            </div>
          ) : null}
        </div>
      ))}

      {supportsNativeFileSave ? (
        <div
          className={`dc-document-identity${documentDirty ? " dc-document-dirty" : ""}`}
          title={
            documentDirty
              ? `${documentName} — ${texts.items.unsavedChanges}`
              : documentName
          }
        >
          <span className="dc-document-name">{documentName}</span>
          {documentDirty ? <span className="dc-document-dirty-dot" aria-hidden="true" /> : null}
        </div>
      ) : null}

      {isAboutOpen ? (
        <div
          className="dc-about-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={texts.items.about}
          onMouseDown={() => setIsAboutOpen(false)}
        >
          <div
            className="dc-about-card"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <SplashLogo
              className="dc-about-splash"
              tagline={texts.items.splashTagline}
              version={`version ${buildVersion}`}
            />
            <div className="dc-about-doctools">
              <strong className="dc-about-doctools-title">
                {texts.items.docToolsTitle}
              </strong>
              <p className="dc-about-doctools-description">
                {texts.items.docToolsDescription}
              </p>
              <a
                className="dc-about-doctools-link"
                href="https://doctools.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts.items.discoverDocTools}
              </a>
            </div>
            <div className="dc-about-footer">
              <a
                className="dc-about-license-link"
                href="https://github.com/erichake/doccells"
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts.items.licenseGithub}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

const icons = {
  docTools: (
    <img
      className="dc-menu-image-icon"
      src={docToolsFavicon}
      alt=""
    />
  ),
  licenseGithub: (
    <svg className="dc-github-icon" viewBox="0 0 24 24">
      <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.02c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  ),
  check: (
    <svg className="dc-check-icon" viewBox="0 0 24 24">
      <path d="m5.5 12.5 4.2 4.2 8.8-9.4" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24">
      <path d="M3.75 12s3-5.25 8.25-5.25S20.25 12 20.25 12s-3 5.25-8.25 5.25S3.75 12 3.75 12Z" />
      <circle cx="12" cy="12" r="2.25" />
    </svg>
  ),
  folder: (
    <svg viewBox="0 0 24 24">
      <path d="M3.75 6.75h5l1.55 2h9.95v8.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1V6.75Z" />
      <path d="M3.75 8.75V6.5a1 1 0 0 1 1-1h4.1l1.55 2" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24">
      <path d="M6.5 3.75h7l4 4v12.5h-11Z" />
      <path d="M13.5 3.75v4h4M9 12h6M9 15.5h6" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 24 24">
      <path d="M5.5 7h13M9 7V4.5h6V7M7.5 7l.75 13h7.5l.75-13M10 10.5v6M14 10.5v6" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 24 24">
      <path d="M12 4.75v9.5" />
      <path d="m8.5 11 3.5 3.5 3.5-3.5" />
      <path d="M5.5 18.75h13" />
    </svg>
  ),
  undo: (
    <svg viewBox="0 0 24 24">
      <path d="M9 8H5V4" />
      <path d="M5.6 8.1a7.3 7.3 0 1 1-.1 7.7" />
    </svg>
  ),
  redo: (
    <svg viewBox="0 0 24 24">
      <path d="M15 8h4V4" />
      <path d="M18.4 8.1a7.3 7.3 0 1 0 .1 7.7" />
    </svg>
  ),
  eraser: (
    <svg viewBox="0 0 24 24">
      <path d="m4.5 15.5 7.8-7.8a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 1 0 2.8l-5.55 5.55H8.25L4.5 15.5Z" />
      <path d="m10 10 5 5" />
      <path d="M13 19.25h7" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24">
      <rect x="5" y="5" width="14" height="14" rx="1.5" />
      <path d="M9.67 5v14M14.33 5v14M5 9.67h14M5 14.33h14" />
    </svg>
  ),
  freeze: (
    <svg viewBox="0 0 24 24">
      <rect x="5.75" y="5.75" width="12.5" height="12.5" />
      <path d="M5.75 12h12.5M12 5.75v12.5" />
      <path d="M18 6 6 18" />
    </svg>
  ),
  freezeRow: (
    <svg viewBox="0 0 24 24">
      <rect x="5.75" y="5.75" width="12.5" height="12.5" />
      <path d="M5.75 12h12.5M12 5.75v12.5" />
      <path d="M18 6.5 11.5 12.25" />
      <path d="M11.25 6 5.75 11.5" />
    </svg>
  ),
  freezeColumn: (
    <svg viewBox="0 0 24 24">
      <rect x="5.75" y="5.75" width="12.5" height="12.5" />
      <path d="M5.75 12h12.5M12 5.75v12.5" />
      <path d="M12 12 5.5 17.75" />
      <path d="M11.25 6 5.75 11.5" />
    </svg>
  ),
  freezeCancel: (
    <svg viewBox="0 0 24 24">
      <rect x="5.75" y="5.75" width="12.5" height="12.5" />
      <path d="M6.5 12h11M12 17.5v-11" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24">
      <rect x="4.75" y="5.25" width="14.5" height="13.5" rx="1.5" />
      <path d="m6.75 16 3.25-3.25 2.35 2.35 1.9-1.9L17.25 16" />
      <circle cx="15.5" cy="9.5" r="1.25" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24">
      <path d="M4.75 19.25h14.5" />
      <rect x="6.5" y="11" width="2.75" height="5.75" rx=".6" />
      <rect x="10.75" y="7.25" width="2.75" height="9.5" rx=".6" />
      <rect x="15" y="13" width="2.75" height="3.75" rx=".6" />
    </svg>
  ),
  bold: (
    <svg viewBox="0 0 24 24">
      <path d="M8 5.75h4.65a3.15 3.15 0 0 1 0 6.3H8Z" />
      <path d="M8 12.05h5.15a3.35 3.35 0 0 1 0 6.7H8Z" />
    </svg>
  ),
  italic: (
    <svg viewBox="0 0 24 24">
      <path d="M10 5.75h7" />
      <path d="M7 18.25h7" />
      <path d="m14.5 5.75-3 12.5" />
    </svg>
  ),
  underline: (
    <svg viewBox="0 0 24 24">
      <path d="M7.5 5.75v5.5a4.5 4.5 0 0 0 9 0v-5.5" />
      <path d="M6.5 19.25h11" />
    </svg>
  ),
  number: (
    <svg viewBox="0 0 24 24">
      <path d="M4 7h5M6.5 7v10M4 17h5M13 7h2.5a2 2 0 0 1 0 4H13h2.5a2 2 0 0 1 0 4H13" />
    </svg>
  ),
  text: (
    <svg viewBox="0 0 24 24">
      <path d="M5 6h14M12 6v12M8.5 18h7" />
    </svg>
  ),
  alignment: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16M4 10h11M4 14h16M4 18h8" />
    </svg>
  ),
  alignLeft: (
    <svg viewBox="0 0 24 24"><path d="M4 6h16M4 10h11M4 14h16M4 18h9" /></svg>
  ),
  alignCenter: (
    <svg viewBox="0 0 24 24"><path d="M4 6h16M7 10h10M4 14h16M6.5 18h11" /></svg>
  ),
  alignRight: (
    <svg viewBox="0 0 24 24"><path d="M4 6h16M9 10h11M4 14h16M11 18h9" /></svg>
  ),
  alignTop: (
    <svg viewBox="0 0 24 24"><path d="M5 5h14M8 9h8M8 13h8M8 17h8" /></svg>
  ),
  alignMiddle: (
    <svg viewBox="0 0 24 24"><path d="M5 12h14M8 6h8M8 9h8M8 15h8M8 18h8" /></svg>
  ),
  alignBottom: (
    <svg viewBox="0 0 24 24"><path d="M8 7h8M8 11h8M8 15h8M5 19h14" /></svg>
  ),
  wrap: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16M4 10h13a3 3 0 0 1 0 6h-5M14 13l-3 3 3 3M4 16h4" />
    </svg>
  ),
  rotation: (
    <svg viewBox="0 0 24 24">
      <path d="m6 17 7-11 5 11M8.5 13h7M5 6l2-2 2 2" />
    </svg>
  ),
  merge: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="14" rx="1" />
      <path d="M4 12h16M12 5v14M8 9l2 3-2 3M16 9l-2 3 2 3" />
    </svg>
  ),
  decimalLess: (
    <svg viewBox="0 0 24 24"><path d="M4 9h4M6 7v8M11 15h2M16 9h4M18 7v8M15 18h6" /></svg>
  ),
  decimalMore: (
    <svg viewBox="0 0 24 24"><path d="M4 9h4M6 7v8M11 15h2M16 9h4M18 7v8M15 18h6M18 16l3 2-3 2" /></svg>
  ),
  fontSize: (
    <svg viewBox="0 0 24 24">
      <path d="M4 7V5h8v2M8 5v14M5.5 19h5M14 11V9h6v2M17 9v10M15 19h4" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24">
      <path d="M13 4.75 14.5 9l4.25 1.5-4.25 1.5L13 16.25 11.5 12l-4.25-1.5L11.5 9Z" />
      <path d="m6.5 15.5.65 1.85L9 18l-1.85.65-.65 1.85-.65-1.85L4 18l1.85-.65Z" />
    </svg>
  ),
  filter: (
    <svg viewBox="0 0 24 24">
      <path d="M5 6.25h14l-5.25 6v5l-3.5 1.5v-6.5Z" />
    </svg>
  ),
  sortAsc: (
    <svg viewBox="0 0 24 24">
      <path d="M6.75 17.25h5.5" />
      <path d="M6.75 12h8.5" />
      <path d="M6.75 6.75h11.5" />
      <path d="m17 14.25 2.25 2.25 2.25-2.25" />
      <path d="M19.25 7.5v9" />
    </svg>
  ),
  sortDesc: (
    <svg viewBox="0 0 24 24">
      <path d="M6.75 17.25h11.5" />
      <path d="M6.75 12h8.5" />
      <path d="M6.75 6.75h5.5" />
      <path d="M17 9.75 19.25 7.5l2.25 2.25" />
      <path d="M19.25 16.5v-9" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3.75 5.25 6.7v4.55c0 4.3 2.8 7.7 6.75 9 3.95-1.3 6.75-4.7 6.75-9V6.7Z" />
      <path d="M9.5 12.25 11.25 14 15 10.25" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 11.5v5" />
      <path d="M12 7.75h.01" />
    </svg>
  ),
};
