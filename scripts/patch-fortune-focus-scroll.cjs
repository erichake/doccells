/**
 * Postinstall script: giving the focus back to the grid never scrolls it.
 *
 * The cell area (.fortune-cell-area) is overflow: hidden, and its native
 * scroll position is copied from context.scrollTop/scrollLeft, while the grid
 * itself is drawn on a canvas from the context. The hidden cell input
 * (.luckysheet-cell-input) sits on the first cell of the selection, inside
 * that area.
 *
 * A click on a scroll bar takes the focus away from the grid. The next key
 * (Shift alone, before a Shift+click) goes through handleGlobalKeyDown, which
 * calls cellInput.focus(): the browser then scrolls the cell area natively to
 * show the selected cell, out of view. The canvas stays where it was, so the
 * selection frame was drawn on the first visible cell (A575 for A1) while the
 * name box still said A1. A Shift+click on A600 did the same, because the cell
 * input then sits on A1, the top of A1:A600.
 *
 * The focus calls on the cell input now pass { preventScroll: true }: the
 * scroll position stays the one of the context.
 */

const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet");

const PATCHES = [
  {
    package: "core",
    // End of handleGlobalKeyDown: any key gives the focus back to the grid.
    old: "cellInput === null || cellInput === void 0 ? void 0 : cellInput.focus();",
    next: "cellInput === null || cellInput === void 0 ? void 0 : cellInput.focus({ preventScroll: true }) /* __doccells_focus_no_scroll__ */;",
  },
  {
    package: "core",
    // Ctrl+Shift+F, back from the toolbar to the grid.
    old: "        selectedCell.focus();",
    next: "        selectedCell.focus({ preventScroll: true }) /* __doccells_focus_no_scroll__ */;",
  },
  {
    package: "react",
    // After a click in the cell area (Shift+click included).
    old: "_refs$cellInput$curre.focus();",
    next: "_refs$cellInput$curre.focus({ preventScroll: true }) /* __doccells_focus_no_scroll__ */;",
  },
];

let failures = 0;
for (const pkg of ["core", "react"]) {
  for (const bundle of ["index.esm.js", "index.js"]) {
    const file = path.join(DIST, pkg, "dist", bundle);
    if (!fs.existsSync(file)) {
      console.warn(`patch-fortune-focus-scroll: ${pkg}/${bundle} not found, skipping`);
      continue;
    }
    let src = fs.readFileSync(file, "utf8");
    let changed = false;
    for (const patch of PATCHES.filter((item) => item.package === pkg)) {
      if (src.includes(patch.next)) continue;
      const count = src.split(patch.old).length - 1;
      if (count !== 1) {
        console.error(`patch-fortune-focus-scroll: ${count} matches instead of 1 in ${pkg}/${bundle} for ${patch.old.trim()}`);
        failures += 1;
        continue;
      }
      src = src.replace(patch.old, () => patch.next);
      changed = true;
    }
    if (changed) fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-focus-scroll: patched ${pkg}/${bundle}`);
  }
}
if (failures > 0) process.exit(1);
