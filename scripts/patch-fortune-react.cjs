/**
 * Postinstall script: patches @fortune-sheet/react UI improvements.
 *
 * Patch 1: filter value list — remove parentheses from the count badge
 *   Before: "( 3 )"  →  After: "3"  (styled as a pill in App.css)
 */

const fs = require("fs");
const path = require("path");

const REACT_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "react", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

// SelectItem count — plain value list items
const OLD1 = `  }, "( ".concat(item.rows.length, " )")))) : null;
};`;
const NEW1 = `  }, "".concat(item.rows.length)))) : null;
};`;

// DateSelectTreeItem count — date tree items
const OLD2 = `  }, "( ".concat(item.rows.length, " )"))), expand && item.children.map(function (v) {`;
const NEW2 = `  }, "".concat(item.rows.length))), expand && item.children.map(function (v) {`;

const PATCH_GROUPS = [
  { name: "SelectItem count parens fix",      variants: [{ old: OLD1, new: NEW1 }] },
  { name: "DateSelectTreeItem count parens fix", variants: [{ old: OLD2, new: NEW2 }] },
];

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(REACT_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-react: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");
  let groupsOk = 0;
  for (const group of PATCH_GROUPS) {
    let matched = false;
    for (const v of group.variants) {
      if (src.includes(v.old)) { src = src.replace(v.old, v.new); matched = true; break; }
      if (src.includes(v.new)) { matched = true; break; }
    }
    if (matched) { groupsOk++; }
    else { console.warn(`patch-fortune-react: [${group.name}] pattern not found in ${bundle}`); }
  }
  if (groupsOk === PATCH_GROUPS.length) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-react: patched ${bundle}`);
    allPatched++;
  }
}
if (allPatched === 0) process.exit(1);
