/**
 * Postinstall script: patches @fortune-sheet/core so typing a locale-formatted
 * decimal number (e.g. "2,5" in French) is recognized as a number, instead of
 * being stored as literal text — which is what happens today because the
 * vendored numeric-detection code (isRealNum/genarate) hardcodes the US
 * convention ("," thousands separator, "." decimal separator).
 *
 * Approach: rather than touching isRealNum/genarate (used in 20+ places for
 * many unrelated purposes), normalize the raw typed string to the US
 * convention at the single choke point where every commit path (typing,
 * paste, the public setCellValue API) converges: setCellValue(), right after
 * `vupdateStr = vupdate.toString()`. Downstream code then sees a string it
 * already understands perfectly (exactly as if the user had typed "2.5"),
 * so no existing numeric-format-detection logic needs to change.
 *
 * Only fires when the detected browser language's decimal separator is a
 * comma (same locale table as patch-fortune-number-separators.cjs, which
 * handles the display side of this). Guarded off for: quoted text (leading
 * '), quote-locked cells (qp === 1), and cells explicitly formatted as Text
 * (ct.fa === "@") — those must keep the literal characters the user typed.
 *
 * One extra spot needs its own fix: the "%"-suffix branch builds its display
 * mask directly from the raw typed string (bypassing the SSF-based renderer
 * that the display-locale patch wraps), so it would otherwise show the
 * normalized "2.5%" instead of what the user actually typed ("2,5%"). We
 * stash the pre-normalization string in __doccellsRawInput and use that for
 * the percent branch's display mask.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

const HELPER_OLD = `function setCellValue(ctx, r, c, d, v) {`;

const HELPER_NEW = `function __doccellsNormalizeNumberInput(str) {
  if (typeof str !== "string" || str === "") return str;
  var lang = (typeof navigator !== "undefined" && navigator.language) || "en";
  var short = lang.split("-")[0];
  var groupTable = {
    fr: " ",
    es: ".",
    de: ".",
    it: ".",
    el: ".",
    nl: ".",
    pt: ".",
    ru: " "
  };
  var groupChar = groupTable[short];
  if (groupChar === undefined) return str;
  var suffix = "";
  var body = str;
  if (body.substr(-1) === "%") {
    suffix = "%";
    body = body.substring(0, body.length - 1);
  }
  var plain = /^-?\\d+,\\d+$/;
  var groupedSpace = /^-?\\d{1,3}(?:[ \\u00A0\\u202F]\\d{3})+,\\d+$/;
  var groupedDot = /^-?\\d{1,3}(?:\\.\\d{3})+,\\d+$/;
  var grouped = groupChar === " " ? groupedSpace : groupedDot;
  if (!grouped.test(body) && !plain.test(body)) return str;
  var stripped = groupChar === " " ? body.replace(/[ \\u00A0\\u202F]/g, "") : body.replace(/\\./g, "");
  var normalized = stripped.replace(",", ".");
  return normalized + suffix;
}
function setCellValue(ctx, r, c, d, v) {`;

const COMMIT_OLD = `  var vupdateStr = vupdate.toString();
  if (vupdateStr.substr(0, 1) === "'") {`;

const COMMIT_NEW = `  var vupdateStr = vupdate.toString();
  var __doccellsRawInput = vupdateStr;
  if (vupdateStr.substr(0, 1) !== "'" && cell.qp !== 1 && !(cell.ct && cell.ct.fa === "@")) {
    var __doccellsNormalized = __doccellsNormalizeNumberInput(vupdateStr);
    if (__doccellsNormalized !== vupdateStr) {
      vupdateStr = __doccellsNormalized;
      if (typeof vupdate === "string") vupdate = __doccellsNormalized;
    }
  }
  if (vupdateStr.substr(0, 1) === "'") {`;

const PERCENT_OLD = `    cell.v = vupdateStr.substring(0, vupdateStr.length - 1) / 100;
    cell.m = vupdate;`;

const PERCENT_NEW = `    cell.v = vupdateStr.substring(0, vupdateStr.length - 1) / 100;
    cell.m = __doccellsRawInput;`;

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-number-input: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");

  const alreadyPatched = src.includes("__doccellsNormalizeNumberInput") && src.includes("__doccellsNormalized");
  if (alreadyPatched) {
    console.log(`patch-fortune-number-input: ${bundle} already patched`);
    allPatched++;
    continue;
  }

  let ok = 0;
  if (src.includes(HELPER_OLD)) {
    src = src.replace(HELPER_OLD, HELPER_NEW);
    ok++;
  }
  if (src.includes(COMMIT_OLD)) {
    src = src.replace(COMMIT_OLD, COMMIT_NEW);
    ok++;
  }
  if (src.includes(PERCENT_OLD)) {
    src = src.replace(PERCENT_OLD, PERCENT_NEW);
    ok++;
  }

  if (ok === 3) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-number-input: patched ${bundle}`);
    allPatched++;
  } else {
    console.warn(`patch-fortune-number-input: pattern not found in ${bundle}`);
  }
}
if (allPatched === 0) process.exit(1);
