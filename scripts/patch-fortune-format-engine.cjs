/**
 * Postinstall script: patches @fortune-sheet/core's number format engine (SSF)
 * so that two kinds of formats no longer throw, which unmounted the app since
 * cells are formatted while they are drawn, and times are shown:
 *
 * - dates separated by points ("dd.MM.yyyy", the German Date format): after a
 *   date part, SSF takes any point for the decimals of the seconds ("ss.00").
 *   A point no zero follows is literal text.
 * - currency signs missing from SSF's list of literal characters ("₽"): every
 *   character of Unicode's currency category is literal text.
 * - times without a date (0.5, =TIME(14,30,0)): date formats showed ##### for
 *   any number under 1. As in Excel, 0 is now the first one they show.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

const PATCHES = [
  {
    name: "times without a date",
    old: "var JAN_1_1900 = 1;",
    next: "var JAN_1_1900 = 0;",
  },
  {
    name: "points in dates",
    old: `while (++i < fmt.length && (c = fmt.charAt(i)) === "0") o += c;
            out[out.length] = {
              t: "s",`,
    next: `while (++i < fmt.length && (c = fmt.charAt(i)) === "0") o += c;
            out[out.length] = {
              t: o === "." ? "t" : "s",`,
  },
  {
    name: "currency signs",
    old: `.indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + fmt);
          out[out.length] = {
            t: "t",`,
    next: `.indexOf(c) === -1 && !/\\p{Sc}/u.test(c)) throw new Error("unrecognized character " + c + " in " + fmt);
          out[out.length] = {
            t: "t",`,
  },
];

let failures = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-format-engine: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  for (const { name, old, next } of PATCHES) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-format-engine: [${name}] ${count} matches instead of 1 in ${bundle}`);
      failures += 1;
      continue;
    }
    src = src.replace(old, () => next);
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-format-engine: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
