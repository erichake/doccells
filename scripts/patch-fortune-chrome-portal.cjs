/**
 * Postinstall script: FortuneSheet's toolbar drawn in an element of a
 * same-origin host page (embedded mode, EMBED.md "Barres dans la page hôte",
 * src/features/embed/chromeMount.js).
 *
 * React (@fortune-sheet/react, ESM bundle only, the one Vite reads):
 *   1. Workbook: with the doccellsToolbarContainer setting (an element), the
 *      toolbar is drawn in it by createPortal, after a copy of the icons' SVG
 *      symbols (a <use href="#id"> only sees the symbols of its own tree,
 *      document or shadow root). Without the setting nothing changes.
 *   2. useOutsideClick (closes lists, palettes…) also listens to the
 *      document of the watched element when it is not DocCells' own, and
 *      recognises a click inside a shadow root (composedPath: in the host
 *      document, the target of such a click is the shadow host).
 *   3. Image button: the file input is taken from the clicked button
 *      (showImgChooser looks for it in DocCells' document).
 *   4. The "More" list (buttons that do not fit in the toolbar) is drawn in
 *      the same element as the toolbar.
 *   5. Toolbar: a ResizeObserver on the toolbar recomputes which buttons go
 *      into "More" when its width changes (FortuneSheet only did it when the
 *      grid's width changed, which the host's element does not follow). It
 *      also measures the buttons again when the toolbar was mounted hidden.
 *   6. Toolbar lists (Combo) near the right edge: compared with the width of
 *      the window that shows them, not DocCells' window.
 *   7. Submenus ("More formats", border styles): placed against the right
 *      edge of the window that shows them when that is not DocCells' window
 *      (they were placed against the workbook's frame inside the iframe).
 */

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "react", "dist", "index.esm.js");
const MARKER = "/* __doccells_chrome_portal__ */";

const IMPORT = `import React, { useContext, useRef, useState, useMemo, useCallback, useEffect, useLayoutEffect, useImperativeHandle } from 'react';`;
const IMPORT_PATCHED = `${IMPORT}
import { createPortal as __doccellsCreatePortal } from 'react-dom';`;

// 1. Toolbar drawn in the host's element.
const TOOLBAR = `mergedSettings.showToolbar && (/*#__PURE__*/React.createElement(Toolbar, {
    moreItemsOpen: moreToolbarItems !== null,
    setMoreItems: setMoreToolbarItems
  }))`;
const TOOLBAR_PATCHED = `mergedSettings.showToolbar && __doccellsToolbarPortal(/*#__PURE__*/React.createElement(Toolbar, {
    moreItemsOpen: moreToolbarItems !== null,
    setMoreItems: setMoreToolbarItems
  }), mergedSettings)`;

// 2. Outside clicks seen in both documents. Helpers of 1, 6 and 7 too.
const OUTSIDE = `function useOutsideClick(containerRef, handler, deps) {
  useEffect(function () {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, deps);
}`;
const OUTSIDE_PATCHED = `${MARKER}
function __doccellsToolbarPortal(toolbar, settings, withoutIcons) {
  var container = settings.doccellsToolbarContainer;
  if (!container) return toolbar;
  if (withoutIcons) return __doccellsCreatePortal(toolbar, container);
  return __doccellsCreatePortal(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SVGDefines, {
    currency: settings.currency
  }), toolbar), container);
}
function __doccellsViewOf(element) {
  var doc = element && element.ownerDocument;
  return doc && doc.defaultView || window;
}
function __doccellsBoundsRect(workbookContainer, element) {
  if (!element || element.ownerDocument === document || !workbookContainer) return workbookContainer.getBoundingClientRect();
  var width = element.ownerDocument.documentElement.clientWidth;
  return { left: 0, right: width, width: width };
}
function useOutsideClick(containerRef, handler, deps) {
  useEffect(function () {
    function handleClickOutside(e) {
      var container = containerRef.current;
      if (!container || container.contains(e.target)) return;
      var path = e.composedPath ? e.composedPath() : [];
      if (path.indexOf(container) >= 0) return;
      handler();
    }
    var docs = [document];
    var own = containerRef.current && containerRef.current.ownerDocument;
    if (own && own !== document) docs.push(own);
    docs.forEach(function (doc) {
      doc.addEventListener("mousedown", handleClickOutside);
    });
    return function () {
      docs.forEach(function (doc) {
        doc.removeEventListener("mousedown", handleClickOutside);
      });
    };
  }, deps);
}`;

// 3. Image button.
const IMAGE = `        onClick: function onClick() {
          if (context.allowEdit === false) return;
          showImgChooser();
        }
      }, /*#__PURE__*/React.createElement("input", {
        id: "fortune-img-upload",`;
const IMAGE_PATCHED = `        onClick: function onClick(e) {
          if (context.allowEdit === false) return;
          var input = e && e.currentTarget && e.currentTarget.querySelector ? e.currentTarget.querySelector("#fortune-img-upload") : null;
          if (input) input.click();else showImgChooser();
        }
      }, /*#__PURE__*/React.createElement("input", {
        id: "fortune-img-upload",`;

// 4. "More" list next to the toolbar.
const MORE = `moreToolbarItems && (/*#__PURE__*/React.createElement(MoreItemsContaier, {
    onClose: onMoreToolbarItemsClose
  }, moreToolbarItems))`;
const MORE_PATCHED = `moreToolbarItems && __doccellsToolbarPortal(/*#__PURE__*/React.createElement(MoreItemsContaier, {
    onClose: onMoreToolbarItemsClose
  }, moreToolbarItems), mergedSettings, true)`;

// 5. Toolbar width observed. The buttons' positions are measured when they
//    are all shown (toolbarWrapIndex -1), then compared with the toolbar's
//    width: a new width compares again, and measures again if all are shown
//    (a toolbar mounted hidden measured zeros).
const WRAP_RESET = `  useEffect(function () {
    setToolbarWrapIndex(-1);
  }, [settings.toolbarItems, settings.customToolbarItems]);`;
const WRAP_RESET_PATCHED = `${WRAP_RESET}
  var __doccellsWidthState = useState(0),
    __doccellsWidth = __doccellsWidthState[0],
    __doccellsSetWidth = __doccellsWidthState[1];
  useEffect(function () {
    var container = containerRef.current;
    var view = __doccellsViewOf(container);
    if (!container || !view.ResizeObserver) return undefined;
    var observer = new view.ResizeObserver(function () {
      var width = container.clientWidth;
      if (width > 0) __doccellsSetWidth(width);
    });
    observer.observe(container);
    return function () {
      observer.disconnect();
    };
  }, []);`;
const MEASURE_DEPS = `  }, [toolbarWrapIndex, sheetWidth]);`;
const MEASURE_DEPS_PATCHED = `  }, [toolbarWrapIndex, sheetWidth, __doccellsWidth]);`;
const WRAP_DEPS = `  }, [itemLocations, setMoreItems, settings.toolbarItems.length, sheetWidth]);`;
const WRAP_DEPS_PATCHED = `  }, [itemLocations, setMoreItems, settings.toolbarItems.length, sheetWidth, __doccellsWidth]);`;

// 6. Lists near the right edge of the window that shows them.
const COMBO = `    var winW = window.innerWidth;
    var rect = popupRef.current.getBoundingClientRect();`;
const COMBO_PATCHED = `    var winW = __doccellsViewOf(popupRef.current).innerWidth;
    var rect = popupRef.current.getBoundingClientRect();`;

// 7. Submenus: "More formats" (Toolbar) and border styles (CustomBorder).
const SUBMENU = `    var workbookContainerRect = refs.workbookContainer.current.getBoundingClientRect();
    var subMenu = menuItem.querySelector(".".concat(className));`;
const SUBMENU_PATCHED = `    var workbookContainerRect = __doccellsBoundsRect(refs.workbookContainer.current, menuItem);
    var subMenu = menuItem.querySelector(".".concat(className));`;
const BORDER_SUBMENU = `    subMenuItem.style.display = "block";
    var workbookContainerRect = refs.workbookContainer.current.getBoundingClientRect();`;
const BORDER_SUBMENU_PATCHED = `    subMenuItem.style.display = "block";
    var workbookContainerRect = __doccellsBoundsRect(refs.workbookContainer.current, target);`;

const PATCHES = [
  [IMPORT, IMPORT_PATCHED],
  [TOOLBAR, TOOLBAR_PATCHED],
  [OUTSIDE, OUTSIDE_PATCHED],
  [IMAGE, IMAGE_PATCHED],
  [MORE, MORE_PATCHED],
  [WRAP_RESET, WRAP_RESET_PATCHED],
  [MEASURE_DEPS, MEASURE_DEPS_PATCHED],
  [WRAP_DEPS, WRAP_DEPS_PATCHED],
  [COMBO, COMBO_PATCHED],
  [SUBMENU, SUBMENU_PATCHED],
  [BORDER_SUBMENU, BORDER_SUBMENU_PATCHED],
];

if (!fs.existsSync(FILE)) {
  console.warn("patch-fortune-chrome-portal: index.esm.js not found, skipping");
  process.exit(0);
}
let src = fs.readFileSync(FILE, "utf8");
const original = src;

let ok = true;
for (const [old, next] of PATCHES) {
  if (src.includes(next)) continue;
  const count = src.split(old).length - 1;
  if (count !== 1) {
    console.error(`patch-fortune-chrome-portal: ${count} matches instead of 1 for:\n${old.slice(0, 120)}`);
    ok = false;
    continue;
  }
  src = src.replace(old, next);
}
if (!ok) process.exit(1);
if (src === original) process.exit(0);
fs.writeFileSync(FILE, src);
console.log("patch-fortune-chrome-portal: patched index.esm.js");
