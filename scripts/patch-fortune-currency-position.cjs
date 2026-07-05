/**
 * Postinstall script: patches @fortune-sheet/core so the "Comptabilité"
 * (Accounting) and "Monnaie" (Currency) default formats put the currency
 * symbol after the number for locales where that's conventional (matches
 * Intl.NumberFormat CLDR data, e.g. new Intl.NumberFormat("fr-FR", {style:
 * "currency", currency: "EUR"}).format(1200.09) === "1 200,09 €").
 *
 * Upstream hardcodes the symbol before the number for every locale
 * ("".concat(currency, "0.00")). en/hi/pt/zh/zh-TW/nl already want the
 * symbol first, so they're left untouched.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

function prettyBlock(accountingText, currencyText) {
  return `      text: "${accountingText}",
      value: "".concat(currency, "(0.00)"),
      example: "".concat(currency, "(1200.09)")
    }, {
      text: "${currencyText}",
      value: "".concat(currency, "0.00"),
      example: "".concat(currency, "1200.09")
    }, {`;
}

function prettyBlockNew(accountingText, currencyText) {
  return `      text: "${accountingText}",
      value: "(0.00) ".concat(currency),
      example: "(1200.09) ".concat(currency)
    }, {
      text: "${currencyText}",
      value: "0.00 ".concat(currency),
      example: "1200.09 ".concat(currency)
    }, {`;
}

function minifiedBlock(accountingText, currencyText) {
  return `{ text: '${accountingText}', value: ''.concat(currency, '(0.00)'), example: ''.concat(currency, '(1200.09)') }, { text: '${currencyText}', value: ''.concat(currency, '0.00'), example: ''.concat(currency, '1200.09') }`;
}

function minifiedBlockNew(accountingText, currencyText) {
  return `{ text: '${accountingText}', value: '(0.00) '.concat(currency), example: '(1200.09) '.concat(currency) }, { text: '${currencyText}', value: '0.00 '.concat(currency), example: '1200.09 '.concat(currency) }`;
}

// Locales where CLDR puts the currency symbol after the number.
const PRETTY_LOCALES = [
  { name: "fr", labels: ["Comptabilité", "Monnaie"] },
  { name: "es", labels: ["Contabilidad", "Moneda"] },
  { name: "de", labels: ["Buchhaltung", "Währung"] },
];

const MINIFIED_LOCALES = [
  { name: "el", labels: ["Λογιστική", "Νόμισμα"] },
  { name: "it", labels: ["Contabilità", "Valuta"] },
];

const PATCH_GROUPS = [
  ...PRETTY_LOCALES.map((l) => ({
    name: `${l.name} currency symbol after amount`,
    old: prettyBlock(...l.labels),
    new: prettyBlockNew(...l.labels),
  })),
  ...MINIFIED_LOCALES.map((l) => ({
    name: `${l.name} currency symbol after amount`,
    old: minifiedBlock(...l.labels),
    new: minifiedBlockNew(...l.labels),
  })),
];

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-currency-position: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");
  let groupsOk = 0;
  for (const group of PATCH_GROUPS) {
    if (src.includes(group.old)) { src = src.replace(group.old, group.new); groupsOk++; }
    else if (src.includes(group.new)) { groupsOk++; }
    else { console.warn(`patch-fortune-currency-position: [${group.name}] pattern not found in ${bundle}`); }
  }
  if (groupsOk === PATCH_GROUPS.length) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-currency-position: patched ${bundle}`);
    allPatched++;
  }
}
if (allPatched === 0) process.exit(1);
