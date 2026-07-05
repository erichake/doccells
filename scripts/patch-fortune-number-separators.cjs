/**
 * Postinstall script: patches @fortune-sheet/core so numeric cell display
 * (grouping separator and decimal separator) matches the convention of the
 * detected browser language, instead of the US convention ("," group, "."
 * decimal) that the vendored SSF number-format engine hardcodes everywhere.
 *
 * Approach: SSF's internal grouping/decimal-joining logic is deeply
 * entangled with its own format-pattern parsing (which also uses literal
 * "," and "." characters), so patching those internals directly is risky.
 * Instead this wraps the single public entry point, `SSF.format`, and
 * post-processes its OUTPUT STRING: swap "," <-> group char and "." <->
 * decimal char, but only when the value being formatted is a plain number
 * (not text) and the format code is not a date/time format (so "dd.MM.yyyy"
 * German dates, which use "." as a date separator, are left untouched) and
 * not the "@" text format (which shows numbers as literal unformatted text
 * in Excel, unaffected by locale).
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

const OLD = `  SSF.init_table = init_table;
  SSF.format = format;
};
make_ssf(SSF);`;

const NEW = `  SSF.init_table = init_table;
  var __doccellsOrigFormat = format;
  var __doccellsNumberLocale = function () {
    var lang = (typeof navigator !== "undefined" && navigator.language) || "en";
    var short = lang.split("-")[0];
    var table = {
      fr: { group: " ", decimal: "," },
      es: { group: ".", decimal: "," },
      de: { group: ".", decimal: "," },
      it: { group: ".", decimal: "," },
      el: { group: ".", decimal: "," },
      nl: { group: ".", decimal: "," },
      pt: { group: ".", decimal: "," },
      ru: { group: " ", decimal: "," }
    };
    return table[short] || { group: ",", decimal: "." };
  }();
  function __doccellsLocalizeNumberString(s) {
    if (__doccellsNumberLocale.group === "," && __doccellsNumberLocale.decimal === ".") return s;
    return s.replace(/,/g, "\\u0000").replace(/\\./g, __doccellsNumberLocale.decimal).replace(/\\u0000/g, __doccellsNumberLocale.group);
  }
  SSF.format = function doccellsFormat(fmt, v) {
    var out = __doccellsOrigFormat(fmt, v);
    if (typeof v === "number" && typeof out === "string" && fmt !== "@" && !fmt_is_date(fmt)) {
      out = __doccellsLocalizeNumberString(out);
    }
    return out;
  };
};
make_ssf(SSF);`;

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-number-separators: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");
  if (src.includes(OLD)) {
    src = src.replace(OLD, NEW);
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-number-separators: patched ${bundle}`);
    allPatched++;
  } else if (src.includes(NEW)) {
    console.log(`patch-fortune-number-separators: ${bundle} already patched`);
    allPatched++;
  } else {
    console.warn(`patch-fortune-number-separators: pattern not found in ${bundle}`);
  }
}
if (allPatched === 0) process.exit(1);
