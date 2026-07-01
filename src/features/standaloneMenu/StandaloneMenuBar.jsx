/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { exportToExcel } from "../../utils/exportToExcel.js";
import { stripConditionalFormattingMarkers } from "../conditionalFormatting/conditionalFormattingUtils.js";
import { areGridLinesHidden, isWorkbookProtected } from "../workbook/workbookUtils.js";
import {
  clickToolbarIcon,
  getWorkbookFreezeRange,
  getWorkbookMenuState,
  openFilePicker,
  triggerGridLines,
  triggerFilterMenuOption,
  triggerNativeImagePicker,
  triggerWorkbookFormat,
  triggerWorkbookRedo,
  triggerSheetProtection,
  triggerWorkbookUndo,
  triggerWorkbookFreeze,
} from "./standaloneMenuCommands.js";
import "./StandaloneMenuBar.css";

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
        <div className="dc-menu-popover dc-menu-submenu" role="menu">
          {item.items.map((subItem, index) =>
            subItem === "divider" ? (
              <MenuDivider key={`${item.label}-divider-${index}`} />
            ) : (
              <MenuItem
                key={subItem.label}
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
  workbookRef,
  onOpenChartDialog,
  onOpenConditionalDialog,
}) => {
  const [isStandalone, setIsStandalone] = useState(isTopWindow);
  const [openMenu, setOpenMenu] = useState(null);
  const [menuState, setMenuState] = useState({});
  const menuRef = useRef(null);
  const freezeRangeRef = useRef({ row: 0, column: 0 });

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

  const exportWorkbook = useCallback(() => {
    const sheets = sheetDataRef.current;
    if (sheets.length > 0) {
      exportToExcel(stripConditionalFormattingMarkers(sheets));
    }
  }, [sheetDataRef]);

  const isGridLinesVisible = !areGridLinesHidden(sheetDataRef.current);
  const isProtected = isWorkbookProtected(
    workbookRef.current?.getAllSheets?.() || sheetDataRef.current,
  );

  useEffect(() => {
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
        o: openFilePicker,
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
  }, [runCommand, workbookRef]);

  const menus = useMemo(
    () => [
      {
        id: "file",
        label: "Fichier",
        items: [
          { icon: "folder", label: "Ouvrir", shortcut: "⌘O", command: openFilePicker },
          { icon: "download", label: "Exporter", command: exportWorkbook },
        ],
      },
      {
        id: "edit",
        label: "Édition",
        items: [
          { icon: "undo", label: "Annuler", shortcut: "⌘Z", command: () => triggerWorkbookUndo(workbookRef) },
          { icon: "redo", label: "Rétablir", shortcut: "⌘Y", command: () => triggerWorkbookRedo(workbookRef) },
          "divider",
          { icon: "eraser", label: "Effacer la mise en forme", command: () => clickToolbarIcon("clear-format") },
        ],
      },
      {
        id: "view",
        label: "Affichage",
        items: [
          {
            icon: "eye",
            label: "Afficher",
            items: [
              {
                icon: "grid",
                label: "Quadrillage",
                checked: isGridLinesVisible,
                command: triggerGridLines,
              },
            ],
          },
          {
            icon: "freeze",
            label: "Figer",
            items: [
              {
                icon: "freezeRow",
                label: "Figer jusqu'à la ligne actuelle",
                checked: menuState.activeFrozenType === "row",
                command: () =>
                  triggerWorkbookFreeze(workbookRef, "row", freezeRangeRef.current),
              },
              {
                icon: "freezeColumn",
                label: "Figer jusqu'à la colonne actuelle",
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
                label: "Figer jusqu'à la cellule actuelle",
                checked: menuState.activeFrozenType === "both",
                command: () =>
                  triggerWorkbookFreeze(workbookRef, "both", freezeRangeRef.current),
              },
              "divider",
              {
                icon: "freezeCancel",
                label: "Annuler le figement",
                disabled: !menuState.activeFrozenType,
                command: () => triggerWorkbookFreeze(workbookRef, "cancel"),
              },
            ],
          },
        ],
      },
      {
        id: "insert",
        label: "Insertion",
        items: [
          { icon: "image", label: "Image", command: triggerNativeImagePicker },
          { icon: "chart", label: "Graphique", command: onOpenChartDialog },
        ],
      },
      {
        id: "format",
        label: "Format",
        items: [
          { icon: "bold", label: "Gras", shortcut: "⌘B", checked: menuState.bold, command: () => triggerWorkbookFormat(workbookRef, "bl") },
          { icon: "italic", label: "Italique", shortcut: "⌘I", checked: menuState.italic, command: () => triggerWorkbookFormat(workbookRef, "it") },
          { icon: "underline", label: "Souligné", shortcut: "⌘U", checked: menuState.underline, command: () => triggerWorkbookFormat(workbookRef, "un") },
          "divider",
          { icon: "spark", label: "Formatage conditionnel", command: onOpenConditionalDialog },
        ],
      },
      {
        id: "data",
        label: "Données",
        items: [
          {
            icon: "filter",
            label: "Créer un filtre",
            items: [
              {
                icon: "sortAsc",
                label: "Trier de A à Z",
                command: () => triggerFilterMenuOption("sort-asc"),
              },
              {
                icon: "sortDesc",
                label: "Trier de Z à A",
                command: () => triggerFilterMenuOption("sort-desc"),
              },
              "divider",
              {
                icon: "filter",
                label: "Créer un filtre",
                checked: menuState.filter,
                command: () => triggerFilterMenuOption("filter1"),
              },
              {
                icon: "eraser",
                label: "Effacer le filtre",
                disabled: !menuState.filter,
                command: () => triggerFilterMenuOption("eraser"),
              },
            ],
          },
        ],
      },
      {
        id: "tools",
        label: "Outils",
        items: [
          {
            icon: "shield",
            label: "Protéger / déprotéger le classeur",
            checked: isProtected,
            command: triggerSheetProtection,
            disabled: appMode === "student",
          },
        ],
      },
    ],
    [
      appMode,
      exportWorkbook,
      isGridLinesVisible,
      isProtected,
      menuState,
      onOpenChartDialog,
      onOpenConditionalDialog,
      workbookRef,
    ],
  );

  if (!isStandalone) return null;

  return (
    <nav
      className="dc-menu-bar"
      aria-label="Menus DocCells"
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
    </nav>
  );
};

const icons = {
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
};
