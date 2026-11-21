/**
 * Postinstall script: lets a cell hold a list ([2; 1], see
 * src/lib/formula-parser/helper/list.js).
 *
 * Patch 1: __doccellsConfigureLists({ parse, format }) is exported by
 *   @fortune-sheet/core (called by src/features/recalc/installFormulaEngine.js).
 * Patch 2: setCellValue keeps a list (a formula's result, or a list typed in
 *   the cell) as the cell's value, shown by its text in the language's
 *   separators.
 * Patch 3: valueShowEs gives the cell editor the list's text in the current
 *   language, instead of the array's toString.
 * Patch 4: a character typed with Option (Mac) or AltGr (Windows) on a
 *   selected cell starts the entry, like a digit: "[" is Option+Shift+5 on
 *   a French Mac keyboard, AltGr+5 on Windows. FortuneSheet ignored every
 *   key pressed with Alt, and sent AltGr (Ctrl+Alt) to its shortcuts.
 * Patch 5: a list keeps its cell's number format (0.00, 0%...), applied to
 *   each of its numbers; the decimal buttons (number-decrease and
 *   number-increase) also act on a list, from its number with the most
 *   decimals shown, like on a number. Its type stays "g", so the fill handle
 *   and conditional formatting do not take it for a number. When the active
 *   cell holds no number nor list (a column selected from an empty cell),
 *   the buttons take the format of the selection's first list or nonzero
 *   number.
 * Patch 6: a formula's result written outside setCellValue (paste, fill
 *   handle, sort, a formula pasted as text) is shown like one typed in the
 *   cell: update() formats a list instead of throwing ("unsupported value in
 *   General format", which stopped a paste halfway), a list result gets its
 *   text and type "g" (the fill handle gave it the text format "@"), and a
 *   number result in a cell copied from a list is a number again (type "n",
 *   aligned right).
 * Patch 7: a list read from a saved workbook (celldata, by initSheetData in
 *   @fortune-sheet/core and its copy in @fortune-sheet/react, and by
 *   celldataToData) gets its text in the language shown: m was written in
 *   the language of the browser that saved it ("[0; 0]" in French), and is
 *   only a display text (WORKBOOK_FORMAT.md). The saved cell is left
 *   untouched (it may be frozen by immer): the grid gets a copy.
 *
 * Must run after patch-fortune-formula-names.cjs (__doccellsShortLocale).
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const REACT_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "react", "dist");

const REGISTRY = `/* __doccells_lists__ */
var __doccellsLists = null;
function __doccellsConfigureLists(lists) {
  __doccellsLists = lists;
}
function __doccellsListSeparator() {
  return __doccellsDecimalCommaLocales.indexOf(__doccellsShortLocale()) > -1 ? ";" : ",";
}
function __doccellsFormatListNumber(n) {
  return update("General", Math.round(n * 1000000000) / 1000000000).toString();
}
// A list's number format: the cell's, if it is one for numbers.
function __doccellsListFormat(ct) {
  var fa = ct && ct.fa;
  return typeof fa === "string" && fa !== "@" && (ct.t === "n" || ct.t === "g") && !is_date(fa) ? fa : "General";
}
function __doccellsFormatList(list, fa) {
  return __doccellsLists.format(list, fa === "General" ? __doccellsFormatListNumber : function (n) {
    return update(fa, n).toString();
  }, __doccellsListSeparator());
}
// The list's number with the most decimals shown in General, for the decimal
// buttons (genarate gives its format, as for a number).
function __doccellsListMaskValue(list) {
  var best = null;
  var bestDecimals = -1;
  (function visit(items) {
    for (var i = 0; i < items.length; i += 1) {
      if (Array.isArray(items[i])) {
        visit(items[i]);
        continue;
      }
      if (typeof items[i] !== "number" || !isFinite(items[i])) continue;
      var rounded = Math.round(items[i] * 1000000000) / 1000000000;
      var text = String(rounded);
      var decimals = text.indexOf("e") > -1 ? 0 : (text.split(".")[1] || "").length;
      if (decimals > bestDecimals) {
        best = rounded;
        bestDecimals = decimals;
      }
    }
  })(list);
  return best;
}
// The cell the decimal buttons take the format from: the active cell if it
// holds a number or a list, else the first list or nonzero number of the
// selection (a whole column selected from an empty cell, for instance).
function __doccellsDecimalsFocus(ctx, d, r, c) {
  var usable = function (cell) {
    return !!cell && (Array.isArray(cell.v) || !!cell.ct && cell.ct.t === "n" && isRealNum(cell.v) && Number(cell.v) !== 0);
  };
  if (d[r] && usable(d[r][c])) return [r, c];
  var ranges = ctx.luckysheet_select_save || [];
  for (var i = 0; i < ranges.length; i += 1) {
    var rowEnd = Math.min(ranges[i].row[1], d.length - 1);
    for (var row = ranges[i].row[0]; row <= rowEnd; row += 1) {
      if (!d[row]) continue;
      var colEnd = Math.min(ranges[i].column[1], d[row].length - 1);
      for (var col = ranges[i].column[0]; col <= colEnd; col += 1) {
        if (usable(d[row][col])) return [row, col];
      }
    }
  }
  return [r, c];
}
function setCellValue(ctx, r, c, d, v) {`;

const NULL_CHECK = `    vupdate = v;
  }
  if (isRealNull(vupdate)) {`;

// Before the empty-value check: [] is a list, not an empty cell.
const LIST_BRANCH = `    vupdate = v;
  }
  if (__doccellsLists) {
    var __doccellsList = Array.isArray(vupdate) ? vupdate : !(cell && (cell.qp === 1 || cell.ct && cell.ct.fa === "@")) ? __doccellsLists.parse(vupdate, __doccellsListSeparator()) : null;
    if (__doccellsList) {
      if (cell == null || typeof cell !== "object") cell = {};
      var __doccellsListFa = __doccellsListFormat(cell.ct);
      cell.v = __doccellsList;
      cell.m = __doccellsFormatList(__doccellsList, __doccellsListFa);
      cell.ct = { fa: __doccellsListFa, t: "g" };
      d[r][c] = cell;
      return;
    }
    // A list replaced by a number: its number format is a number's again.
    if (cell && Array.isArray(cell.v) && cell.ct && cell.ct.t === "g" && cell.ct.fa !== "General") {
      cell.ct = { fa: cell.ct.fa, t: "n" };
    }
  }
  if (isRealNull(vupdate)) {`;

const SHOW_START = `function valueShowEs(r, c, d) {
  var value = getCellValue(r, c, d, "m");`;

const SHOW_LIST = `function valueShowEs(r, c, d) {
  if (d[r] && d[r][c] && Array.isArray(d[r][c].v)) return __doccellsLists.format(d[r][c].v, __doccellsFormatListNumber, __doccellsListSeparator());
  var value = getCellValue(r, c, d, "m");`;

const CTRL_START = `    if (e.ctrlKey || e.metaKey) {
      handleWithCtrlOrMetaKey(ctx, cache, e, cellInput, fxInput, handleUndo, handleRedo);`;

const CTRL_TYPED = `    var __doccellsAltChar = !!kstr && kstr.length === 1 && e.altKey && !e.metaKey && (!e.ctrlKey || !!(e.getModifierState && e.getModifierState("AltGraph")));
    if ((e.ctrlKey || e.metaKey) && !__doccellsAltChar) {
      handleWithCtrlOrMetaKey(ctx, cache, e, cellInput, fxInput, handleUndo, handleRedo);`;

const EDIT_KEYS = `kcode === 0 || e.ctrlKey && kcode === 86) {`;

const EDIT_KEYS_TYPED = `kcode === 0 || e.ctrlKey && kcode === 86 || __doccellsAltChar) {`;

// updateFormatCell: a number format applies to a list's numbers; another
// format (text, date) leaves the list in General.
const FORMAT_CELL_START = `        var mask = update(foucsStatus, value);
        var type = "n";`;

const FORMAT_CELL_LIST = `        if (__doccellsLists && Array.isArray(value) && _.isPlainObject(cell)) {
          var __doccellsListFa = __doccellsListFormat({ fa: foucsStatus, t: "g" });
          cell.ct = { fa: __doccellsListFa, t: "g" };
          cell.m = __doccellsFormatList(value, __doccellsListFa);
          continue;
        }
        var mask = update(foucsStatus, value);
        var type = "n";`;

// handleNumberDecrease and handleNumberIncrease (same lines in both).
const DECIMALS_FOCUS = `  if (row_index === undefined || col_index === undefined) return;
  var foucsStatus = normalizedAttr(flowdata, row_index, col_index, "ct");
  var cell = flowdata[row_index][col_index];`;

const DECIMALS_FOCUS_SELECTION = `  if (row_index === undefined || col_index === undefined) return;
  var __doccellsFocus = __doccellsDecimalsFocus(ctx, flowdata, row_index, col_index);
  row_index = __doccellsFocus[0];
  col_index = __doccellsFocus[1];
  var foucsStatus = normalizedAttr(flowdata, row_index, col_index, "ct");
  var cell = flowdata[row_index][col_index];`;

const DECIMALS_START = `  if (foucsStatus == null || foucsStatus.t !== "n") {
    return;
  }
  if (foucsStatus.fa === "General") {
    if (!cell || !cell.v) return;
    var mask = genarate(cell.v);`;

const DECIMALS_LIST = `  var __doccellsListCell = !!__doccellsLists && !!cell && Array.isArray(cell.v);
  if (foucsStatus == null || foucsStatus.t !== "n" && !__doccellsListCell) {
    return;
  }
  if (foucsStatus.fa === "General") {
    if (!cell || !cell.v) return;
    var mask = genarate(__doccellsListCell ? __doccellsListMaskValue(cell.v) : cell.v);`;

const UPDATE_START = `function update(fmt, v) {
  return SSF.format(fmt, v);
}`;

const UPDATE_LIST = `// A formula's result written outside setCellValue (paste, fill handle,
// sort): a list gets its text and keeps the cell's number format, with type
// "g"; a number in a cell copied from a list is a number again. True when the
// cell holds a list.
function __doccellsFormulaResult(cell) {
  if (!__doccellsLists || !cell || typeof cell !== "object") return false;
  if (Array.isArray(cell.v)) {
    var fa = __doccellsListFormat(cell.ct);
    cell.ct = { fa: fa, t: "g" };
    cell.m = __doccellsFormatList(cell.v, fa);
    return true;
  }
  if (cell.ct && cell.ct.t === "g" && typeof cell.v === "number") {
    cell.ct = { fa: cell.ct.fa || "General", t: "n" };
  }
  return false;
}
function update(fmt, v) {
  if (__doccellsLists && Array.isArray(v)) return __doccellsFormatList(v, __doccellsListFormat({ fa: fmt, t: "n" }));
  return SSF.format(fmt, v);
}`;

// pasteHandlerOfCopyPaste: a pasted formula, recalculated at its new place.
const PASTE_RESULT = `                value.m = update("General", funcV[1]);
              }`;

const PASTE_RESULT_LIST = `                value.m = update("General", funcV[1]);
              }
              __doccellsFormulaResult(value);`;

// handleFormulaStringPaste: a formula pasted as text.
const TEXT_PASTE_RESULT = `  d[r][c].m = val.toString();
  d[r][c].v = val;`;

const TEXT_PASTE_RESULT_LIST = `  d[r][c].m = val.toString();
  d[r][c].v = val;
  __doccellsFormulaResult(d[r][c]);`;

// updateDropCell (fill handle), down, up, right and left.
const fillResult = (cell, v) => [
  `            if (${cell}.spl != null) {
              ${cell}.spl = ${v}[3].data;
            } else if (${cell}.v != null) {`,
  `            if (${cell}.spl != null) {
              ${cell}.spl = ${v}[3].data;
            } else if (__doccellsFormulaResult(${cell})) ; else if (${cell}.v != null) {`,
];

// sortSelection and the sort patches of patch-fortune-core.cjs.
const SORT_RESULT_LINES = [
  `        cell.m = update(((_cell$ct = cell.ct) === null || _cell$ct === void 0 ? void 0 : _cell$ct.fa) || "General", cell.v);`,
  `          _cellSort4.m = update((((_ct4 = _cellSort4.ct) === null || _ct4 === void 0 ? void 0 : _ct4.fa) || "General"), _cellSort4.v);`,
  `          _cellSort5.m = update((((_ct5 = _cellSort5.ct) === null || _ct5 === void 0 ? void 0 : _ct5.fa) || "General"), _cellSort5.v);`,
];
const sortResult = (line) => {
  const indent = line.match(/^ */)[0];
  return [line, `${line}\n${indent}__doccellsFormulaResult(${line.trim().split(".")[0]});`];
};

// Patch 7: celldata to the grid's rows.
const LOAD_CELL = `      expandedData[d.r][d.c] = d.v;`;
const LOAD_CELL_LIST = (fn) => `      expandedData[d.r][d.c] = ${fn}(d.v);`;
const LOADED_CELL_START = `function initSheetData(draftCtx, index, newData) {`;
const LOADED_CELL = `// A list read from a saved workbook: its text in the language shown.
function __doccellsLoadedCell(cell) {
  if (!__doccellsLists || !cell || typeof cell !== "object" || !Array.isArray(cell.v)) return cell;
  var fa = __doccellsListFormat(cell.ct);
  return Object.assign({}, cell, { m: __doccellsFormatList(cell.v, fa), ct: { fa: fa, t: "g" } });
}
function initSheetData(draftCtx, index, newData) {`;

const EXPORT_LINES = {
  "index.esm.js": "\nexport { __doccellsConfigureLists };\n",
  "index.js": "\nexports.__doccellsConfigureLists = __doccellsConfigureLists;\n",
};

const LOADED_EXPORT_LINES = {
  "index.esm.js": "export { __doccellsLoadedCell };\n",
  "index.js": "exports.__doccellsLoadedCell = __doccellsLoadedCell;\n",
};

// Patch 7 in @fortune-sheet/react, whose initSheetData is its own copy.
const REACT_LOAD = {
  "index.esm.js": {
    fn: "__doccellsLoadedCell",
    header: "import { __doccellsLoadedCell } from '@fortune-sheet/core';\n",
  },
  "index.js": { fn: "core.__doccellsLoadedCell", header: "" },
};

let failures = 0;
for (const [bundle, exportLine] of Object.entries(EXPORT_LINES)) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-lists: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("function __doccellsShortLocale(")) {
    console.error(`patch-fortune-lists: run patch-fortune-formula-names.cjs first (${bundle})`);
    failures += 1;
    continue;
  }
  const replacements = [
    { old: "function setCellValue(ctx, r, c, d, v) {", new: REGISTRY },
    { old: NULL_CHECK, new: LIST_BRANCH },
    { old: SHOW_START, new: SHOW_LIST },
    { old: CTRL_START, new: CTRL_TYPED },
    { old: EDIT_KEYS, new: EDIT_KEYS_TYPED },
    { old: FORMAT_CELL_START, new: FORMAT_CELL_LIST },
    { old: DECIMALS_FOCUS, new: DECIMALS_FOCUS_SELECTION, count: 2 },
    { old: DECIMALS_START, new: DECIMALS_LIST, count: 2 },
    { old: UPDATE_START, new: UPDATE_LIST },
    { old: PASTE_RESULT, new: PASTE_RESULT_LIST },
    { old: TEXT_PASTE_RESULT, new: TEXT_PASTE_RESULT_LIST },
    ...[["cell", "v"], ["_cell", "_v2"], ["_cell2", "_v4"], ["_cell3", "_v6"]].map(([cell, v]) => {
      const [old, next] = fillResult(cell, v);
      return { old, new: next };
    }),
    ...SORT_RESULT_LINES.map((line) => {
      const [old, next] = sortResult(line);
      return { old, new: next };
    }),
    { old: LOADED_CELL_START, new: LOADED_CELL },
    { old: LOAD_CELL, new: LOAD_CELL_LIST("__doccellsLoadedCell"), count: 2 },
  ];
  let ok = true;
  for (const { old, new: next, count: expected = 1 } of replacements) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== expected) {
      console.error(`patch-fortune-lists: ${count} matches instead of ${expected} in ${bundle} for:\n${old.slice(0, 120)}`);
      ok = false;
      continue;
    }
    src = src.split(old).join(next);
  }
  if (!src.includes(exportLine)) src += exportLine;
  if (!src.includes(LOADED_EXPORT_LINES[bundle])) src += LOADED_EXPORT_LINES[bundle];
  if (!ok) {
    failures += 1;
    continue;
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-lists: patched ${bundle}`);
}
for (const [bundle, { fn, header }] of Object.entries(REACT_LOAD)) {
  const file = path.join(REACT_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-lists: react ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  const next = LOAD_CELL_LIST(fn);
  if (src.includes(next)) continue;
  const count = src.split(LOAD_CELL).length - 1;
  if (count !== 1) {
    console.error(`patch-fortune-lists: ${count} matches instead of 1 in react ${bundle} for:\n${LOAD_CELL}`);
    failures += 1;
    continue;
  }
  src = header + src.replace(LOAD_CELL, next);
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-lists: patched react ${bundle}`);
}
if (failures > 0) process.exit(1);
