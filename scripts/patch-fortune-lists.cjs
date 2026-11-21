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
 *
 * Must run after patch-fortune-formula-names.cjs (__doccellsShortLocale).
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");

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
      cell.v = __doccellsList;
      cell.m = __doccellsLists.format(__doccellsList, __doccellsFormatListNumber, __doccellsListSeparator());
      cell.ct = { fa: "General", t: "g" };
      d[r][c] = cell;
      return;
    }
  }
  if (isRealNull(vupdate)) {`;

const SHOW_START = `function valueShowEs(r, c, d) {
  var value = getCellValue(r, c, d, "m");`;

const SHOW_LIST = `function valueShowEs(r, c, d) {
  if (d[r] && d[r][c] && Array.isArray(d[r][c].v)) return __doccellsLists.format(d[r][c].v, __doccellsFormatListNumber, __doccellsListSeparator());
  var value = getCellValue(r, c, d, "m");`;

const EXPORT_LINES = {
  "index.esm.js": "\nexport { __doccellsConfigureLists };\n",
  "index.js": "\nexports.__doccellsConfigureLists = __doccellsConfigureLists;\n",
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
  ];
  let ok = true;
  for (const { old, new: next } of replacements) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-lists: ${count} matches instead of 1 in ${bundle} for:\n${old.slice(0, 120)}`);
      ok = false;
      continue;
    }
    src = src.replace(old, next);
  }
  if (!src.includes(exportLine)) src += exportLine;
  if (!ok) {
    failures += 1;
    continue;
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-lists: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
