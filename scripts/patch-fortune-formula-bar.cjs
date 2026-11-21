/**
 * Postinstall script: the formula bar shows the selected cell's content after
 * any change of the workbook, not only after a change of selection.
 *
 * FxEditor rereads the cell when the workbook changes, but returned at once
 * when the selection was the same as before. So a paste, Delete, undo/redo or
 * the fill handle on the selected cell left the formula bar with the previous
 * content (empty after pasting a formula into an empty cell) until another
 * cell was selected.
 *
 * The early return now only applies during an entry (in the cell or in the
 * formula bar: luckysheetCellUpdate is set, or the bar has the focus), so
 * that what is being typed is never replaced.
 */

const fs = require("fs");
const path = require("path");

const REACT_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "react", "dist");

const VARIANTS = {
  "index.esm.js": "_",
  "index.js": "___default['default']",
};

const guard = (lodash) => `    if (${lodash}.isEqual(prevFirstSelection, firstSelection) && context.currentSheetId === prevSheetId) {
      return;
    }`;

const guardDuringEntry = (lodash) => `    /* __doccells_formula_bar_refresh__: same selection, reread the cell unless an entry is in progress. */
    if (${lodash}.isEqual(prevFirstSelection, firstSelection) && context.currentSheetId === prevSheetId && (context.luckysheetCellUpdate && context.luckysheetCellUpdate.length > 0 || refs.fxInput.current && document.activeElement === refs.fxInput.current)) {
      return;
    }`;

let failures = 0;
for (const [bundle, lodash] of Object.entries(VARIANTS)) {
  const file = path.join(REACT_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-formula-bar: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  const next = guardDuringEntry(lodash);
  if (!src.includes(next)) {
    const old = guard(lodash);
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-formula-bar: ${count} matches instead of 1 in ${bundle}`);
      failures += 1;
      continue;
    }
    src = src.replace(old, () => next);
    fs.writeFileSync(file, src, "utf8");
  }
  console.log(`patch-fortune-formula-bar: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
