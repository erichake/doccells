/**
 * Postinstall script: makes FortuneSheet's text measurement cache work.
 *
 * getMeasureText reads measureTextCache with the key "<text>_<font>" but
 * writes it with "<text>_<zoom>_<font>", so it never hits: every redraw
 * measures every visible text again, and the cache object grows by one entry
 * per new value for ever (a dragged DocGeo point produces new values on every
 * frame).
 *
 * The patched function reads and writes one key that also includes the text
 * baseline (the measurement depends on it), so a cached result is exactly the
 * one that would be measured (a hit still applies fontset to the context, as
 * a measurement did); the cache is emptied every 20 000 entries.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");

const READ = `function getMeasureText(value, renderCtx, sheetCtx, fontset) {
  var mtc = measureTextCache["".concat(value, "_").concat(renderCtx.font)];
  if (fontset) {
    mtc = measureTextCache["".concat(value, "_").concat(fontset)];
  }
  if (mtc != null) {
    return mtc;
  }`;
const READ_FIXED = `function getMeasureText(value, renderCtx, sheetCtx, fontset) {
  /* __doccells_measure_text_cache__ */
  var __doccellsMeasureKey = "".concat(value, "_").concat(sheetCtx.zoomRatio, "_").concat(fontset || renderCtx.font, "_").concat(renderCtx.textBaseline);
  var mtc = measureTextCache[__doccellsMeasureKey];
  if (mtc != null) {
    // Comme une mesure : la police demandée reste celle du contexte.
    if (fontset) {
      renderCtx.font = fontset;
    }
    return mtc;
  }`;

const WRITE = `  measureTextCache["".concat(value, "_").concat(sheetCtx.zoomRatio, "_").concat(renderCtx.font)] = cache;
  return cache;`;
const WRITE_FIXED = `  __doccellsMeasureTextCacheSize += 1;
  if (__doccellsMeasureTextCacheSize > 20000) {
    measureTextCache = {};
    __doccellsMeasureTextCacheSize = 1;
  }
  measureTextCache[__doccellsMeasureKey] = cache;
  return cache;`;

const CLEAR = `function clearMeasureTextCache() {
  measureTextCache = {};`;
const CLEAR_FIXED = `var __doccellsMeasureTextCacheSize = 0;
function clearMeasureTextCache() {
  __doccellsMeasureTextCacheSize = 0;
  measureTextCache = {};`;

let failures = 0;
for (const bundle of ["index.esm.js", "index.js"]) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-measure-text-cache: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  let ok = true;
  for (const [old, next] of [[READ, READ_FIXED], [WRITE, WRITE_FIXED], [CLEAR, CLEAR_FIXED]]) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-measure-text-cache: ${count} matches instead of 1 in ${bundle} for:\n${old.slice(0, 120)}`);
      ok = false;
      continue;
    }
    src = src.replace(old, next);
  }
  if (!ok) {
    failures += 1;
    continue;
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-measure-text-cache: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
