/**
 * Postinstall script: the autoFillCell API can copy, for Fill down (Ctrl+D)
 * and Fill right (Ctrl+R) in the Edit menu.
 *
 * autoFillCell(copyRange, applyRange, direction) runs the fill handle on a
 * range: formulas shifted like relative references, formats, borders,
 * validations and conditional formats. But it chooses alone between a copy
 * and a series: a cell holding 1 filled down gave 1, 2, 3...
 *
 * It now takes an optional fifth argument, the applyType of the fill handle
 * ("0" copies the cells, "1" fills a series). Without it, nothing changes.
 */

const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet");
const MARKER = "/* __doccells_fill_apply_type__ */";

const corePatch = {
  old: `function autoFillCell(ctx, copyRange, applyRange, direction) {
  dropCellCache.copyRange = copyRange;
  dropCellCache.applyRange = applyRange;
  dropCellCache.direction = direction;
  var typeItemHide = getTypeItemHide(ctx);
  if (`,
  next: `function autoFillCell(ctx, copyRange, applyRange, direction, applyType) {
  ${MARKER}
  dropCellCache.copyRange = copyRange;
  dropCellCache.applyRange = applyRange;
  dropCellCache.direction = direction;
  var typeItemHide = getTypeItemHide(ctx);
  if (applyType === "0" || applyType === "1") {
    dropCellCache.applyType = applyType;
  } else if (`,
};

const reactPatch = (api) => ({
  old: `    autoFillCell: function autoFillCell(copyRange, applyRange, direction) {
      return setContext(function (draftCtx) {
        return ${api}.autoFillCell(draftCtx, copyRange, applyRange, direction);`,
  next: `    autoFillCell: function autoFillCell(copyRange, applyRange, direction, applyType) {
      ${MARKER}
      return setContext(function (draftCtx) {
        return ${api}.autoFillCell(draftCtx, copyRange, applyRange, direction, applyType);`,
});

const TARGETS = [
  ["core", "index.esm.js", corePatch],
  ["core", "index.js", corePatch],
  ["react", "index.esm.js", reactPatch("api")],
  ["react", "index.js", reactPatch("core.api")],
];

let failures = 0;
for (const [pkg, bundle, patch] of TARGETS) {
  const file = path.join(DIST, pkg, "dist", bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-fill: ${pkg}/${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes(MARKER)) {
    const count = src.split(patch.old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-fill: ${count} matches instead of 1 in ${pkg}/${bundle}`);
      failures += 1;
      continue;
    }
    src = src.replace(patch.old, () => patch.next);
    fs.writeFileSync(file, src, "utf8");
  }
  console.log(`patch-fortune-fill: patched ${pkg}/${bundle}`);
}
if (failures > 0) process.exit(1);
