/**
 * Postinstall script: patches @fortune-sheet/core so the "Comptabilité"
 * (Accounting) and "Monnaie" (Currency) default formats group thousands
 * (matches real Excel, which groups thousands for Accounting/Currency but
 * NOT for the plain Number format — confirmed against Excel's own French
 * format menu, which shows "Nombre" ungrouped but "Comptabilité"/"Monétaire"
 * grouped, e.g. "105 000,00 €").
 *
 * Also updates each locale's default-format menu preview ("example") text
 * to show a properly grouped number using that locale's separator
 * convention, matching what patch-fortune-number-separators.cjs will
 * actually render at runtime.
 *
 * Must run after patch-fortune-currency-position.cjs (which already moved
 * the symbol to the end for fr/es/de/it/el) since this patch's OLD strings
 * match whichever form (prefix or postfix) is currently in the file.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

// group="," decimal="." (US-style, unchanged from upstream)
function beforePretty(accountingText, currencyText, example) {
  return {
    old: `      text: "${accountingText}",
      value: "".concat(currency, "(0.00)"),
      example: "".concat(currency, "(1200.09)")`,
    new: `      text: "${accountingText}",
      value: "".concat(currency, "(#,##0.00)"),
      example: "".concat(currency, "(${example})")`,
  };
}
function beforePrettyCurrency(currencyText, example) {
  return {
    old: `      text: "${currencyText}",
      value: "".concat(currency, "0.00"),
      example: "".concat(currency, "1200.09")`,
    new: `      text: "${currencyText}",
      value: "".concat(currency, "#,##0.00"),
      example: "".concat(currency, "${example}")`,
  };
}
function afterPretty(accountingText, example) {
  return {
    old: `      text: "${accountingText}",
      value: "(0.00) ".concat(currency),
      example: "(1200.09) ".concat(currency)`,
    new: `      text: "${accountingText}",
      value: "(#,##0.00) ".concat(currency),
      example: "(${example}) ".concat(currency)`,
  };
}
function afterPrettyCurrency(currencyText, example) {
  return {
    old: `      text: "${currencyText}",
      value: "0.00 ".concat(currency),
      example: "1200.09 ".concat(currency)`,
    new: `      text: "${currencyText}",
      value: "#,##0.00 ".concat(currency),
      example: "${example} ".concat(currency)`,
  };
}
function afterMinified(accountingText, currencyText, example) {
  return {
    old: `{ text: '${accountingText}', value: '(0.00) '.concat(currency), example: '(1200.09) '.concat(currency) }, { text: '${currencyText}', value: '0.00 '.concat(currency), example: '1200.09 '.concat(currency) }`,
    new: `{ text: '${accountingText}', value: '(#,##0.00) '.concat(currency), example: '(${example}) '.concat(currency) }, { text: '${currencyText}', value: '#,##0.00 '.concat(currency), example: '${example} '.concat(currency) }`,
  };
}
function beforeMinified(accountingText, currencyText, example) {
  return {
    old: `{ text: '${accountingText}', value: ''.concat(currency, '(0.00)'), example: ''.concat(currency, '(1200.09)') }, { text: '${currencyText}', value: ''.concat(currency, '0.00'), example: ''.concat(currency, '1200.09') }`,
    new: `{ text: '${accountingText}', value: ''.concat(currency, '(#,##0.00)'), example: ''.concat(currency, '(${example})') }, { text: '${currencyText}', value: ''.concat(currency, '#,##0.00'), example: ''.concat(currency, '${example}') }`,
  };
}

const US = "1,200.09";
const EU = "1.200,09"; // period group, comma decimal (es/de/it/el/pt/nl)
const FR = "1 200,09"; // space group, comma decimal

const PATCH_GROUPS = [
  // "before" pretty locales: symbol stays in front, group "," decimal "."
  { name: "en accounting", ...beforePretty("Accounting", "Currency", US) },
  { name: "en currency", ...beforePrettyCurrency("Currency", US) },
  { name: "zh accounting", ...beforePretty("会计", "货币", US) },
  { name: "zh currency", ...beforePrettyCurrency("货币", US) },
  { name: "hi accounting", ...beforePretty("लेखांकन", "मुद्रा", US) },
  { name: "hi currency", ...beforePrettyCurrency("मुद्रा", US) },
  { name: "zh_tw accounting", ...beforePretty("會計", "貨幣", US) },
  { name: "zh_tw currency", ...beforePrettyCurrency("貨幣", US) },
  { name: "pt accounting", ...beforePretty("Contabilidade", "Moeda", EU) },
  { name: "pt currency", ...beforePrettyCurrency("Moeda", EU) },
  // "after" pretty locales (already moved to postfix by patch-fortune-currency-position.cjs)
  { name: "fr accounting+currency", ...afterPretty("Comptabilité", FR) },
  { name: "fr currency", ...afterPrettyCurrency("Monnaie", FR) },
  { name: "es accounting", ...afterPretty("Contabilidad", EU) },
  { name: "es currency", ...afterPrettyCurrency("Moneda", EU) },
  { name: "de accounting", ...afterPretty("Buchhaltung", EU) },
  { name: "de currency", ...afterPrettyCurrency("Währung", EU) },
  // minified "after" locales
  { name: "el accounting+currency", ...afterMinified("Λογιστική", "Νόμισμα", EU) },
  { name: "it accounting+currency", ...afterMinified("Contabilità", "Valuta", EU) },
  // minified "before" locale
  { name: "nl accounting+currency", ...beforeMinified("Boekhouding", "Valuta", EU) },
];

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-currency-grouping: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");
  let groupsOk = 0;
  for (const group of PATCH_GROUPS) {
    if (src.includes(group.old)) { src = src.replace(group.old, group.new); groupsOk++; }
    else if (src.includes(group.new)) { groupsOk++; }
    else { console.warn(`patch-fortune-currency-grouping: [${group.name}] pattern not found in ${bundle}`); }
  }
  if (groupsOk === PATCH_GROUPS.length) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-currency-grouping: patched ${bundle}`);
    allPatched++;
  }
}
if (allPatched === 0) process.exit(1);
