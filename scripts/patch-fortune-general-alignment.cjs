/**
 * Postinstall script: a cell without a chosen horizontal alignment is aligned
 * like in Excel's General alignment, from its current value: a number (date,
 * percentage...) to the right, anything else (text, list, error, boolean) to
 * the left.
 *
 * DocCells used to store this alignment (ht = 2, marked _dcAutoGeneralHt = 1,
 * see src/features/workbook/excelGeneralAlignment.js) after an entry typed in
 * the cell only: a number pasted, filled with the handle, sorted, written by
 * setCellValues or given by a recalculated formula stayed on the left, and a
 * formula whose result became text stayed on the right.
 *
 * normalizedCellAttr(cell, "ht"), which the canvas and the copied HTML read,
 * now computes it when the cell has no alignment or only that automatic one.
 * An alignment chosen by the user (ht without the mark) is kept.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

const HELPER_ANCHOR = "function normalizedCellAttr(cell, attr) {";

const HELPER = `/* __doccells_general_alignment__ */
var __doccellsNumericText = /^-?(?:\\d+|\\d*\\.\\d+)(?:[eE][+-]?\\d+)?$/;
// Excel's General alignment: "2" (right) for a number, "1" (left) otherwise.
function __doccellsGeneralHt(cell) {
  var v = cell.v;
  if (Array.isArray(v) || cell.ct && (cell.ct.fa === "@" || cell.ct.t === "s")) return "1";
  if (typeof v === "number") return isFinite(v) ? "2" : "1";
  if (typeof v !== "string" || v.trim() === "") return "1";
  return cell.ct && cell.ct.t === "n" || __doccellsNumericText.test(v.trim()) ? "2" : "1";
}
function normalizedCellAttr(cell, attr) {`;

const HT_BRANCH = `  } else if (attr === "ht" || attr === "vt") {`;

const HT_BRANCH_GENERAL = `  } else if (attr === "ht" && cell && (cell.ht == null || cell._dcAutoGeneralHt === 1)) {
    value = __doccellsGeneralHt(cell);
  } else if (attr === "ht" || attr === "vt") {`;

let failures = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-general-alignment: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  let ok = true;
  for (const [old, next] of [
    [HELPER_ANCHOR, HELPER],
    [HT_BRANCH, HT_BRANCH_GENERAL],
  ]) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-general-alignment: ${count} matches instead of 1 in ${bundle} for:\n${old}`);
      ok = false;
      continue;
    }
    src = src.replace(old, () => next);
  }
  if (!ok) {
    failures += 1;
    continue;
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-general-alignment: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
