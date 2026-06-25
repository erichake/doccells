/**
 * Postinstall script: patches @fortune-sheet/formula-parser so arithmetic
 * formulas treat blank cell references as 0, matching Excel behaviour.
 *
 * Bug: after clearing a referenced cell, formulas such as =3*B2 evaluate to
 * #VALUE! because the parser's numeric conversion returns undefined/NaN for
 * null, undefined, or empty-string values.
 *
 * Fix: convert only blank values to 0. Non-empty text remains non-numeric and
 * still produces #VALUE! in arithmetic formulas.
 */

const fs = require("fs");
const path = require("path");

const PARSER_ROOT = path.join(
  __dirname,
  "..",
  "node_modules",
  "@fortune-sheet",
  "formula-parser",
);

const FILES = [
  {
    name: "ES helper",
    path: path.join(PARSER_ROOT, "es", "helper", "number.js"),
    old: `export function toNumber(number) {
  var result;

  if (typeof number === "number") {
    result = number;
  } else if (typeof number === "string") {
    result = number.indexOf(".") > -1 ? parseFloat(number) : parseInt(number, 10);
  }

  return result;
}`,
    new: `export function toNumber(number) {
  var result;

  if (number == null || number === "") {
    return 0;
  }

  if (typeof number === "number") {
    result = number;
  } else if (typeof number === "string") {
    result = number.indexOf(".") > -1 ? parseFloat(number) : parseInt(number, 10);
  }

  return result;
}`,
  },
  {
    name: "CommonJS helper",
    path: path.join(PARSER_ROOT, "lib", "helper", "number.js"),
    old: `function toNumber(number) {
  var result;

  if (typeof number === "number") {
    result = number;
  } else if (typeof number === "string") {
    result = number.indexOf(".") > -1 ? parseFloat(number) : parseInt(number, 10);
  }

  return result;
}`,
    new: `function toNumber(number) {
  var result;

  if (number == null || number === "") {
    return 0;
  }

  if (typeof number === "number") {
    result = number;
  } else if (typeof number === "string") {
    result = number.indexOf(".") > -1 ? parseFloat(number) : parseInt(number, 10);
  }

  return result;
}`,
  },
];

let patched = 0;
for (const fileDef of FILES) {
  if (!fs.existsSync(fileDef.path)) {
    console.warn(`patch-fortune-formula-parser: ${fileDef.name} not found, skipping`);
    continue;
  }

  let src = fs.readFileSync(fileDef.path, "utf8");
  if (src.includes(fileDef.old)) {
    src = src.replace(fileDef.old, fileDef.new);
    fs.writeFileSync(fileDef.path, src, "utf8");
    console.log(`patch-fortune-formula-parser: patched ${fileDef.name}`);
    patched++;
  } else if (src.includes(fileDef.new)) {
    console.log(`patch-fortune-formula-parser: ${fileDef.name} already patched`);
    patched++;
  } else {
    console.warn(`patch-fortune-formula-parser: pattern not found in ${fileDef.name}`);
  }
}

if (patched === 0) process.exit(1);
