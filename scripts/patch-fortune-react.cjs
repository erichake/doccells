/**
 * Postinstall script: patches @fortune-sheet/react UI improvements.
 *
 * Patch 1: filter value list — remove parentheses from the count badge
 *   Before: "( 3 )"  →  After: "3"  (styled as a pill in App.css)
 *
 * Patch 7: fill handle — prevent the browser's native drag operation from
 * competing with FortuneSheet's mouse-driven autofill. This especially
 * affected a second consecutive drag after the first fill had enlarged the
 * selection, showing a native drag cursor and blocking the autofill.
 */

const fs = require("fs");
const path = require("path");

const REACT_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "react", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

// SelectItem count — plain value list items
const OLD1 = `  }, "( ".concat(item.rows.length, " )")))) : null;
};`;
const NEW1 = `  }, "".concat(item.rows.length)))) : null;
};`;

// DateSelectTreeItem count — date tree items
const OLD2 = `  }, "( ".concat(item.rows.length, " )"))), expand && item.children.map(function (v) {`;
const NEW2 = `  }, "".concat(item.rows.length))), expand && item.children.map(function (v) {`;

// LocationBox — hide transient invalid selection label at startup
const OLD3 = `  }, rangeText));`;
const NEW3 = `  }, rangeText && !rangeText.includes("NaN") ? rangeText : ""));`;

// Sheet tabs — call the existing activation hook on direct tab clicks.
// FortuneSheet core calls afterActivateSheet when the API changes sheets, but
// the React sheet-tab UI updates currentSheetId directly and bypasses it.
const OLD4 = `        cancelActiveImgItem(draftCtx, refs.globalCache);
        cancelNormalSelected(draftCtx);
      });
    },
    tabIndex: 0,
    onContextMenu: function onContextMenu(e) {`;
const NEW4 = `        cancelActiveImgItem(draftCtx, refs.globalCache);
        cancelNormalSelected(draftCtx);
      });
      if (context.hooks && context.hooks.afterActivateSheet) {
        setTimeout(function () {
          context.hooks.afterActivateSheet(sheet.id);
        });
      }
    },
    tabIndex: 0,
    onContextMenu: function onContextMenu(e) {`;

const OLD4_CJS = `        core.cancelActiveImgItem(draftCtx, refs.globalCache);
        core.cancelNormalSelected(draftCtx);
      });
    },
    tabIndex: 0,
    onContextMenu: function onContextMenu(e) {`;
const NEW4_CJS = `        core.cancelActiveImgItem(draftCtx, refs.globalCache);
        core.cancelNormalSelected(draftCtx);
      });
      if (context.hooks && context.hooks.afterActivateSheet) {
        setTimeout(function () {
          context.hooks.afterActivateSheet(sheet.id);
        });
      }
    },
    tabIndex: 0,
    onContextMenu: function onContextMenu(e) {`;

// Sheet list menu — same hook for sheet changes made through the list.
const OLD5 = `        draftCtx.currentSheetId = sheet.id;
        draftCtx.zoomRatio = sheet.zoomRatio || 1;
        cancelActiveImgItem(draftCtx, refs.globalCache);
        cancelNormalSelected(draftCtx);
      });
    },
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("span", {`;
const NEW5 = `        draftCtx.currentSheetId = sheet.id;
        draftCtx.zoomRatio = sheet.zoomRatio || 1;
        cancelActiveImgItem(draftCtx, refs.globalCache);
        cancelNormalSelected(draftCtx);
      });
      if (context.hooks && context.hooks.afterActivateSheet) {
        setTimeout(function () {
          context.hooks.afterActivateSheet(sheet.id);
        });
      }
    },
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("span", {`;

const OLD5_CJS = `        draftCtx.currentSheetId = sheet.id;
        draftCtx.zoomRatio = sheet.zoomRatio || 1;
        core.cancelActiveImgItem(draftCtx, refs.globalCache);
        core.cancelNormalSelected(draftCtx);
      });
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default['default'].createElement("span", {`;
const NEW5_CJS = `        draftCtx.currentSheetId = sheet.id;
        draftCtx.zoomRatio = sheet.zoomRatio || 1;
        core.cancelActiveImgItem(draftCtx, refs.globalCache);
        core.cancelNormalSelected(draftCtx);
      });
      if (context.hooks && context.hooks.afterActivateSheet) {
        setTimeout(function () {
          context.hooks.afterActivateSheet(sheet.id);
        });
      }
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default['default'].createElement("span", {`;

// Formula library — add a real, localized dialog title. The upstream dialog
// only renders field labels, leaving its header visually empty.
const OLD6 = `  return /*#__PURE__*/React.createElement("div", {
    id: "luckysheet-search-formula"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inpbox"
  }, /*#__PURE__*/React.createElement("div", null, formulaMore.findFunctionTitle, "\\uFF1A"),`;
const NEW6 = `  return /*#__PURE__*/React.createElement("div", {
    id: "luckysheet-search-formula"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-formula-dialog-title"
  }, formulaMore.dialogTitle), /*#__PURE__*/React.createElement("div", {
    className: "inpbox"
  }, /*#__PURE__*/React.createElement("div", null, formulaMore.findFunctionTitle, "\\uFF1A"),`;

const OLD6_CJS = `  return /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-search-formula"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "inpbox"
  }, /*#__PURE__*/React__default['default'].createElement("div", null, formulaMore.findFunctionTitle, "\\uFF1A"),`;
const NEW6_CJS = `  return /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-search-formula"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "dc-formula-dialog-title"
  }, formulaMore.dialogTitle), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "inpbox"
  }, /*#__PURE__*/React__default['default'].createElement("div", null, formulaMore.findFunctionTitle, "\\uFF1A"),`;

const OLD7 = `      className: "luckysheet-cs-fillhandle",
      onMouseDown: function onMouseDown(e) {
        var nativeEvent = e.nativeEvent;
        setContext(function (draftContext) {
          createDropCellRange(draftContext, nativeEvent, containerRef.current);
        });
        e.stopPropagation();
      }
    }),`;

const NEW7 = `      className: "luckysheet-cs-fillhandle",
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        var nativeEvent = e.nativeEvent;
        setContext(function (draftContext) {
          createDropCellRange(draftContext, nativeEvent, containerRef.current);
        });
        e.stopPropagation();
      }
    }),`;

const OLD7_CJS = OLD7.replace(
  "createDropCellRange(draftContext, nativeEvent, containerRef.current);",
  "core.createDropCellRange(draftContext, nativeEvent, containerRef.current);",
);

const NEW7_CJS = NEW7.replace(
  "createDropCellRange(draftContext, nativeEvent, containerRef.current);",
  "core.createDropCellRange(draftContext, nativeEvent, containerRef.current);",
);

const OLD8 = `    getCellValue: function getCellValue(row, column) {`;

const OLD_DATA_VALIDATION_API_METHOD = `    setDataValidation: function setDataValidation(ranges, rule) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return setContext(function (draftCtx) {
        var getSheetIndexApi = typeof getSheetIndex === "function" ? getSheetIndex : core.getSheetIndex;
        var fortuneApi = typeof api !== "undefined" ? api : core.api;
        var sheetIndex = getSheetIndexApi(draftCtx, draftCtx.currentSheetId);
        if (sheetIndex == null) return;
        var sheet = draftCtx.luckysheetfile[sheetIndex];
        if (!sheet) return;
        if (!sheet.dataVerification) sheet.dataVerification = {};
        (ranges || []).forEach(function (range) {
          for (var row = range.row[0]; row <= range.row[1]; row += 1) {
            for (var column = range.column[0]; column <= range.column[1]; column += 1) {
              sheet.dataVerification["".concat(row, "_").concat(column)] = Object.assign({}, rule);
              if (options.initializeCheckboxes) {
                fortuneApi.setCellValue(draftCtx, row, column, rule.value2, cellInput, {});
              }
            }
          }
        });
      });
    },
`;

const DATA_VALIDATION_API_METHOD = OLD_DATA_VALIDATION_API_METHOD.replace(
  `              sheet.dataVerification["".concat(row, "_").concat(column)] = Object.assign({}, rule);`,
  `              var validationKey = "".concat(row, "_").concat(column);
              var cellRule = options.rulesByCell && options.rulesByCell[validationKey] || rule;
              sheet.dataVerification[validationKey] = Object.assign({}, cellRule);`,
);

const NEW8 = `${DATA_VALIDATION_API_METHOD}${OLD8}`;

const OLD9 = `  var cellAreaMouseDown = useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    if (e.button !== 2) {
      setContext(function (draftCtx) {
        var _draftCtx$luckysheet_;
        handleCellAreaMouseDown(draftCtx, refs.globalCache, nativeEvent, refs.cellInput.current, refs.cellArea.current, refs.fxInput.current, refs.canvas.current.getContext("2d"));
        if (!_.isEmpty((_draftCtx$luckysheet_ = draftCtx.luckysheet_select_save) === null || _draftCtx$luckysheet_ === void 0 ? void 0 : _draftCtx$luckysheet_[0]) && refs.cellInput.current) {
          setTimeout(function () {
            var _refs$cellInput$curre;
            (_refs$cellInput$curre = refs.cellInput.current) === null || _refs$cellInput$curre === void 0 ? void 0 : _refs$cellInput$curre.focus();
          });
        }
      });
    }
  }, [setContext, refs.globalCache, refs.cellInput, refs.cellArea, refs.fxInput, refs.canvas]);`;

const NEW9 = OLD9.replace(
  `    if (e.button !== 2) {
      setContext(function (draftCtx) {`,
  `    if (e.button !== 2) {
      var openDropdownOnFirstPress = false;
      setContext(function (draftCtx) {`,
).replace(
  `        handleCellAreaMouseDown(draftCtx, refs.globalCache, nativeEvent, refs.cellInput.current, refs.cellArea.current, refs.fxInput.current, refs.canvas.current.getContext("2d"));`,
  `        handleCellAreaMouseDown(draftCtx, refs.globalCache, nativeEvent, refs.cellInput.current, refs.cellArea.current, refs.fxInput.current, refs.canvas.current.getContext("2d"));
        openDropdownOnFirstPress = draftCtx.dataVerificationDropDownList === true;`,
).replace(
  `      });
    }
  }, [setContext, refs.globalCache, refs.cellInput, refs.cellArea, refs.fxInput, refs.canvas]);`,
  `      });
      if (openDropdownOnFirstPress) {
        setTimeout(function () {
          setContext(function (draftCtx) {
            draftCtx.dataVerificationDropDownList = true;
          });
        });
      }
    }
  }, [setContext, refs.globalCache, refs.cellInput, refs.cellArea, refs.fxInput, refs.canvas]);`,
);

const OLD9_CJS = OLD9
  .replace("useCallback", "React.useCallback")
  .replace(
    "handleCellAreaMouseDown(draftCtx",
    "core.handleCellAreaMouseDown(draftCtx",
  )
  .replace("!_.isEmpty", "!___default['default'].isEmpty");

const NEW9_CJS = NEW9
  .replace("useCallback", "React.useCallback")
  .replace(
    "handleCellAreaMouseDown(draftCtx",
    "core.handleCellAreaMouseDown(draftCtx",
  )
  .replace("!_.isEmpty", "!___default['default'].isEmpty");

const OLD10 = `    onClick: function onClick() {
      setContext(function (ctx) {
        ctx.dataVerificationDropDownList = true;
        dataVerificationHintBoxRef.current.style.display = "none";
      });
    },`;

const NEW10 = `    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      setContext(function (ctx) {
        ctx.dataVerificationDropDownList = true;
        dataVerificationHintBoxRef.current.style.display = "none";
      });
    },`;

const PATCH_GROUPS = [
  { name: "SelectItem count parens fix",      variants: [{ old: OLD1, new: NEW1 }] },
  { name: "DateSelectTreeItem count parens fix", variants: [{ old: OLD2, new: NEW2 }] },
  { name: "LocationBox NaN range guard", variants: [{ old: OLD3, new: NEW3 }] },
  {
    name: "Sheet tab afterActivateSheet hook",
    variants: [{ old: OLD4, new: NEW4 }, { old: OLD4_CJS, new: NEW4_CJS }],
  },
  {
    name: "Sheet list afterActivateSheet hook",
    variants: [{ old: OLD5, new: NEW5 }, { old: OLD5_CJS, new: NEW5_CJS }],
  },
  {
    name: "Localized formula dialog title",
    variants: [{ old: OLD6, new: NEW6 }, { old: OLD6_CJS, new: NEW6_CJS }],
  },
  {
    name: "Fill handle native drag guard",
    variants: [{ old: OLD7, new: NEW7 }, { old: OLD7_CJS, new: NEW7_CJS }],
  },
  {
    name: "Undoable data-validation API",
    variants: [{ old: OLD8, new: NEW8 }],
  },
  {
    name: "Dropdown opens on first cell press",
    variants: [
      { old: OLD9, new: NEW9 },
      { old: OLD9_CJS, new: NEW9_CJS },
    ],
  },
  {
    name: "Dropdown button opens on mouse down",
    variants: [{ old: OLD10, new: NEW10 }],
  },
];

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(REACT_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-react: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");
  src = src.replace(
    OLD_DATA_VALIDATION_API_METHOD,
    DATA_VALIDATION_API_METHOD,
  );
  while (src.includes(
    `${DATA_VALIDATION_API_METHOD}${DATA_VALIDATION_API_METHOD}`,
  )) {
    src = src.replace(
      `${DATA_VALIDATION_API_METHOD}${DATA_VALIDATION_API_METHOD}`,
      DATA_VALIDATION_API_METHOD,
    );
  }
  let groupsOk = 0;
  for (const group of PATCH_GROUPS) {
    let matched = false;
    for (const v of group.variants) {
      if (src.includes(v.new)) { matched = true; break; }
      if (src.includes(v.old)) { src = src.replace(v.old, v.new); matched = true; break; }
    }
    if (matched) { groupsOk++; }
    else { console.warn(`patch-fortune-react: [${group.name}] pattern not found in ${bundle}`); }
  }
  if (groupsOk === PATCH_GROUPS.length) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-react: patched ${bundle}`);
    allPatched++;
  }
}
if (allPatched === 0) process.exit(1);
