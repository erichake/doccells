/**
 * Postinstall script: lets DocCells replace FortuneSheet's formula parser and
 * dependency recalculation (see src/features/recalc/).
 *
 * Patch 1: __doccellsConfigureFormulaEngine({ Parser, execFunctionGroup }) is
 *   exported by @fortune-sheet/core. Passing null restores the original
 *   engine (used by the comparison tests).
 * Patch 2: FormulaCache creates its parser from the configured Parser class
 *   (DocCells' copy, which keeps each formula's tree).
 * Patch 3: execFunctionGroup delegates to the configured function, except
 *   for forced full recalculations, with the internals it needs.
 * Patch 4: setFormulaCellInfo marks the formula key it changes, so that the
 *   reverse dependency index can update just that entry.
 *
 * Must run after patch-fortune-formula-names.cjs (__doccellsExecCanonicalFormula).
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");

const REGISTRY = `/* __doccells_formula_engine__ */
var __doccellsFormulaEngine = { Parser: null, execFunctionGroup: null };
var __doccellsFormulaEngineInternals = null;
function __doccellsConfigureFormulaEngine(engine) {
  __doccellsFormulaEngine.Parser = engine && engine.Parser || null;
  __doccellsFormulaEngine.execFunctionGroup = engine && engine.execFunctionGroup || null;
}
function __doccellsGetFormulaEngineInternals() {
  if (!__doccellsFormulaEngineInternals) {
    __doccellsFormulaEngineInternals = {
      getFlowdata: getFlowdata,
      setCellValue: setCellValue,
      getAllFunctionGroup: getAllFunctionGroup,
      setFormulaCellInfoMap: setFormulaCellInfoMap,
      execCanonicalFormula: __doccellsExecCanonicalFormula
    };
  }
  return __doccellsFormulaEngineInternals;
}
var FormulaCache = /*#__PURE__*/function () {`;

const DELEGATION = `  var isForce = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  if (__doccellsFormulaEngine.execFunctionGroup && !isForce) {
    __doccellsFormulaEngine.execFunctionGroup(ctx, origin_r, origin_c, value, id, data, __doccellsGetFormulaEngineInternals());
    return;
  }`;

const KEY_LINE = `  var key = "r".concat(formulaCell.r, "c").concat(formulaCell.c, "i").concat(formulaCell.id);`;
const KEY_LINE_MARKED = `${KEY_LINE}
  if (ctx.formulaCache.doccellsFormulaIndex) ctx.formulaCache.doccellsFormulaIndex.dirty.add(key);`;

const BUNDLES = {
  "index.esm.js": {
    parser: ["    this.parser = new Parser();", "    this.parser = new (__doccellsFormulaEngine.Parser || Parser)();"],
    exportLine: "\nexport { __doccellsConfigureFormulaEngine };\n",
  },
  "index.js": {
    parser: [
      "    this.parser = new formulaParser.Parser();",
      "    this.parser = new (__doccellsFormulaEngine.Parser || formulaParser.Parser)();",
    ],
    exportLine: "\nexports.__doccellsConfigureFormulaEngine = __doccellsConfigureFormulaEngine;\n",
  },
};

let failures = 0;
for (const [bundle, variant] of Object.entries(BUNDLES)) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-formula-engine: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  const replacements = [
    { old: "var FormulaCache = /*#__PURE__*/function () {", new: REGISTRY },
    {
      old: "  var isForce = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;",
      new: DELEGATION,
    },
    { old: KEY_LINE, new: KEY_LINE_MARKED },
    { old: variant.parser[0], new: variant.parser[1] },
  ];
  let ok = true;
  for (const { old, new: next } of replacements) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-formula-engine: ${count} matches instead of 1 in ${bundle} for:\n${old.slice(0, 120)}`);
      ok = false;
      continue;
    }
    src = src.replace(old, next);
  }
  if (!src.includes(variant.exportLine)) src += variant.exportLine;
  if (!src.includes("function __doccellsExecCanonicalFormula(")) {
    console.error(`patch-fortune-formula-engine: run patch-fortune-formula-names.cjs first (${bundle})`);
    ok = false;
  }
  if (!ok) {
    failures += 1;
    continue;
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-formula-engine: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
