/**
 * Postinstall script: replaces ALL locales in @fortune-sheet/core with the
 * versions stored in scripts/*-locale.cjs.
 *
 * This makes the project fully independent from the upstream npm package for
 * translations. To modify any locale, edit the corresponding scripts/*-locale.cjs
 * file and re-run:  npm install  (or:  node scripts/inject-locales.cjs)
 *
 * Locales managed here: en, zh, es, hi, ru, zh_tw, fr
 */

const fs = require("fs");
const path = require("path");

const SCRIPTS = __dirname;
const CORE_DIST = path.join(SCRIPTS, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

// Load all locale data from scripts/
const locales = {
  en:    require("./en-locale.cjs"),
  zh:    require("./zh-locale.cjs"),
  es:    require("./es-locale.cjs"),
  hi:    require("./hi-locale.cjs"),
  ru:    require("./ru-locale.cjs"),
  zh_tw: require("./zh_tw-locale.cjs"),
  fr:    require("./fr-locale.cjs"),
};

// Build the replacement locale block (variables + localeObj)
function buildLocaleBlock() {
  let block = "";
  for (const [name, data] of Object.entries(locales)) {
    block += `var ${name} = ${JSON.stringify(data)};\n\n`;
  }
  block += `var localeObj = {\n`;
  block += `  en: en,\n`;
  block += `  zh: zh,\n`;
  block += `  es: es,\n`;
  block += `  "zh-TW": zh_tw,\n`;
  block += `  hi: hi,\n`;
  block += `  ru: ru,\n`;
  block += `  fr: fr\n`;
  block += `};\n`;
  return block;
}

// Markers that delimit the locale section in the bundle
const START_MARKER = "var en = {";
const END_MARKER   = "function locale(ctx) {";

const localeBlock = buildLocaleBlock();
let patchedCount = 0;

for (const bundle of BUNDLES) {
  const filePath = path.join(CORE_DIST, bundle);

  if (!fs.existsSync(filePath)) {
    console.warn(`[inject-locales] Warning: ${bundle} not found, skipping.`);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf-8");

  const startIdx = content.indexOf(START_MARKER);
  const endIdx   = content.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    console.error(
      `[inject-locales] ERROR: Could not find locale section markers in ${bundle}.\n` +
      "The package structure may have changed. Please update this script."
    );
    process.exit(1);
  }

  const before = content.slice(0, startIdx);
  const after  = content.slice(endIdx);
  content = before + localeBlock + "\n" + after;

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`[inject-locales] Patched ${bundle} ✓`);
  patchedCount++;
}

console.log(`[inject-locales] Done. ${patchedCount} bundle(s) patched with all locales.`);
