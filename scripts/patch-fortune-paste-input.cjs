/**
 * Postinstall script: text pasted from outside DocCells (another application,
 * a web page, another DocCells tab) is entered like text typed in the cell.
 *
 * FortuneSheet's two external paste paths built the cells themselves, with
 * genarate() or parseFloat(), and so skipped what setCellValue does for a
 * typed entry: a list ([2; 1], patch-fortune-lists.cjs) and a decimal comma
 * ("1,5" in French, patch-fortune-number-input.cjs) stayed text, while the
 * same characters typed gave a list and a number.
 *
 * Patch 1: plain text (tab-separated rows), pasteHandler: each value goes
 *   through setCellValue, after removing the formula of a cell it replaces,
 *   as before. A cell formatted as Text ("@") or quote-locked still keeps the
 *   characters, as when typed.
 * Patch 2: an HTML table (Excel, Numbers, a web page), handlePaste: each
 *   cell's text goes through setCellValue on a scratch grid, which gives its
 *   value, display and type; the table's styles are kept as before.
 *
 * Must run after patch-fortune-lists.cjs and patch-fortune-number-input.cjs.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

const TEXT_PASTE = `        var originCell = _x[_c2 + curC];
        var _value = dataChe[r][_c2];
        if (isRealNum(_value)) {
          if (originCell && originCell.ct && originCell.ct.fa === "@") {
            _value = String(_value);
          } else {
            _value = parseFloat(_value);
          }
        }
        if (originCell) {
          originCell.v = _value;
          if (originCell.ct != null && originCell.ct.fa != null) {
            originCell.m = update(originCell.ct.fa, _value);
          } else {
            originCell.m = _value;
          }
          if (originCell.f != null && originCell.f.length > 0) {
            originCell.f = "";
            delFunctionGroup(ctx, r + curR, _c2 + curC, ctx.currentSheetId);
          }
        } else {
          var cell = {};
          var mask = genarate(_value);
          var _mask = _slicedToArray(mask, 3);
          cell.m = _mask[0];
          cell.ct = _mask[1];
          cell.v = _mask[2];
          _x[_c2 + curC] = cell;
        }`;

const TEXT_PASTE_TYPED = `        var originCell = _x[_c2 + curC];
        var _value = dataChe[r][_c2];
        /* __doccells_paste_typed__: entered like typed text. */
        if (originCell && originCell.f != null && originCell.f.length > 0) {
          delete originCell.f;
          delete originCell.spl;
          delFunctionGroup(ctx, r + curR, _c2 + curC, ctx.currentSheetId);
        }
        setCellValue(ctx, r + curR, _c2 + curC, _d, _value);
        _x = _d[r + curR];`;

const TABLE_PASTE = `                var mask = genarate(txt);
                var _mask2 = _slicedToArray(mask, 3);
                cell.m = _mask2[0];
                cell.ct = _mask2[1];
                cell.v = _mask2[2];`;

const TABLE_PASTE_TYPED = `                /* __doccells_paste_typed__: entered like typed text. */
                var __doccellsTyped = [[null]];
                setCellValue(ctx, 0, 0, __doccellsTyped, txt);
                __doccellsTyped = __doccellsTyped[0][0] || {};
                cell.m = __doccellsTyped.m;
                cell.ct = __doccellsTyped.ct;
                cell.v = __doccellsTyped.v;
                if (__doccellsTyped.qp) cell.qp = __doccellsTyped.qp;`;

let failures = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-paste-input: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("function __doccellsConfigureLists(") || !src.includes("__doccellsNormalizeNumberInput(")) {
    console.error(`patch-fortune-paste-input: run patch-fortune-lists.cjs and patch-fortune-number-input.cjs first (${bundle})`);
    failures += 1;
    continue;
  }
  let ok = true;
  for (const [old, next] of [
    [TEXT_PASTE, TEXT_PASTE_TYPED],
    [TABLE_PASTE, TABLE_PASTE_TYPED],
  ]) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-paste-input: ${count} matches instead of 1 in ${bundle} for:\n${old.slice(0, 120)}`);
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
  console.log(`patch-fortune-paste-input: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
