/**
 * Postinstall script: patches @fortune-sheet/core so the "Format" toolbar
 * menu's default Date / Date+time entries use the date order that's
 * conventional for each UI language, instead of the ISO "yyyy-MM-dd" that
 * upstream hardcodes identically across every locale.
 *
 * Currency does NOT need patching here: defaultFmt() already takes a
 * `currency` argument and interpolates it into the Comptabilité/Monnaie
 * entries. DocCells just needs to pass the right symbol via the `currency`
 * prop on <Workbook>, which is done in src/App.jsx.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

// Pretty-printed locales (en, es, hi, fr, pt, de): one object literal per line.
function prettyBlock(dateText, timeText, time24Text, dateTimeText, dateTime24Text) {
  return `      text: "${dateText}",
      value: "yyyy-MM-dd",
      example: "2017-11-29"
    }, {
      text: "${timeText}",
      value: "hh:mm AM/PM",
      example: "3:00 PM"
    }, {
      text: "${time24Text}",
      value: "hh:mm",
      example: "15:00"
    }, {
      text: "${dateTimeText}",
      value: "yyyy-MM-dd hh:mm AM/PM",
      example: "2017-11-29 3:00 PM"
    }, {
      text: "${dateTime24Text}",
      value: "yyyy-MM-dd hh:mm",
      example: "2017-11-29 15:00"
    }, {`;
}

function prettyBlockNew(dateText, timeText, time24Text, dateTimeText, dateTime24Text, dateValue, dateExample) {
  return `      text: "${dateText}",
      value: "${dateValue}",
      example: "${dateExample}"
    }, {
      text: "${timeText}",
      value: "hh:mm AM/PM",
      example: "3:00 PM"
    }, {
      text: "${time24Text}",
      value: "hh:mm",
      example: "15:00"
    }, {
      text: "${dateTimeText}",
      value: "${dateValue} hh:mm AM/PM",
      example: "${dateExample} 3:00 PM"
    }, {
      text: "${dateTime24Text}",
      value: "${dateValue} hh:mm",
      example: "${dateExample} 15:00"
    }, {`;
}

// Minified locales (el, it, nl): one single-quoted object literal per entry, all on one line.
function minifiedBlock(dateText, timeText, time24Text, dateTimeText, dateTime24Text) {
  return `{ text: '${dateText}', value: 'yyyy-MM-dd', example: '2017-11-29' }, { text: '${timeText}', value: 'hh:mm AM/PM', example: '3:00 PM' }, { text: '${time24Text}', value: 'hh:mm', example: '15:00' }, { text: '${dateTimeText}', value: 'yyyy-MM-dd hh:mm AM/PM', example: '2017-11-29 3:00 PM' }, { text: '${dateTime24Text}', value: 'yyyy-MM-dd hh:mm', example: '2017-11-29 15:00' }`;
}

function minifiedBlockNew(dateText, timeText, time24Text, dateTimeText, dateTime24Text, dateValue, dateExample) {
  return `{ text: '${dateText}', value: '${dateValue}', example: '${dateExample}' }, { text: '${timeText}', value: 'hh:mm AM/PM', example: '3:00 PM' }, { text: '${time24Text}', value: 'hh:mm', example: '15:00' }, { text: '${dateTimeText}', value: '${dateValue} hh:mm AM/PM', example: '${dateExample} 3:00 PM' }, { text: '${dateTime24Text}', value: '${dateValue} hh:mm', example: '${dateExample} 15:00' }`;
}

// Locale, labels (Date, Time, Time24H, DateTime, DateTime24H), and the date
// order conventional for that language. zh/zh_tw are omitted: yyyy-MM-dd is
// already the native (year-month-day) order for Chinese.
const PRETTY_LOCALES = [
  { name: "en", labels: ["Date", "Time", "Time 24H", "Date time", "Date time 24 H"], dateValue: "MM/dd/yyyy", dateExample: "11/29/2017" },
  { name: "es", labels: ["Fecha", "Hora", "Hora 24H", "Fecha Hora", "Fecha Hora 24 H"], dateValue: "dd/MM/yyyy", dateExample: "29/11/2017" },
  { name: "hi", labels: ["दिनांक", "समय", "24 घंटे का समय", "दिनांक समय", "दिनांक समय 24 घंटे"], dateValue: "dd/MM/yyyy", dateExample: "29/11/2017" },
  { name: "fr", labels: ["Date", "Heure", "Heure 24H", "Date heure", "Date heure 24 H"], dateValue: "dd/MM/yyyy", dateExample: "29/11/2017" },
  { name: "pt", labels: ["Data", "Hora", "Hora 24h", "Data e hora", "Data e hora 24h"], dateValue: "dd/MM/yyyy", dateExample: "29/11/2017" },
  { name: "de", labels: ["Datum", "Uhrzeit", "Uhrzeit 24h", "Datum und Uhrzeit", "Datum und Uhrzeit 24h"], dateValue: "dd.MM.yyyy", dateExample: "29.11.2017" },
];

const MINIFIED_LOCALES = [
  { name: "el", labels: ["Ημερομηνία", "Ώρα", "Ώρα 24ωρη", "Ημερομηνία και ώρα", "Ημερομηνία και ώρα 24ωρη"], dateValue: "dd/MM/yyyy", dateExample: "29/11/2017" },
  { name: "it", labels: ["Data", "Ora", "Ora 24h", "Data e ora", "Data e ora 24h"], dateValue: "dd/MM/yyyy", dateExample: "29/11/2017" },
  { name: "nl", labels: ["Datum", "Tijd", "Tijd 24u", "Datum en tijd", "Datum en tijd 24u"], dateValue: "dd-MM-yyyy", dateExample: "29-11-2017" },
];

const PATCH_GROUPS = [
  ...PRETTY_LOCALES.map((l) => ({
    name: `${l.name} default date format`,
    old: prettyBlock(...l.labels),
    new: prettyBlockNew(...l.labels, l.dateValue, l.dateExample),
  })),
  ...MINIFIED_LOCALES.map((l) => ({
    name: `${l.name} default date format`,
    old: minifiedBlock(...l.labels),
    new: minifiedBlockNew(...l.labels, l.dateValue, l.dateExample),
  })),
];

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-date-format: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");
  let groupsOk = 0;
  for (const group of PATCH_GROUPS) {
    if (src.includes(group.old)) { src = src.replace(group.old, group.new); groupsOk++; }
    else if (src.includes(group.new)) { groupsOk++; }
    else { console.warn(`patch-fortune-date-format: [${group.name}] pattern not found in ${bundle}`); }
  }
  if (groupsOk === PATCH_GROUPS.length) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-date-format: patched ${bundle}`);
    allPatched++;
  }
}
if (allPatched === 0) process.exit(1);
