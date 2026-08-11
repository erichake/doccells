/** Adds SPARKLINE as a visual, dependency-aware FortuneSheet formula. */
const fs = require("fs");
const path = require("path");

const files = ["index.esm.js", "index.js"].map((name) =>
  path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist", name),
);

const functionAnchor = `    this.parser.setFunction("WORKDAY.INTL", function (params) { return __doccellsExcelWorkday(params[0], params[1], params[2], params[3]); });`;
const functionPatch = `${functionAnchor}\n    /* SPARKLINE renders through DocCells' afterRenderCell hook. Parsing the data\n       argument here keeps FortuneSheet's recalculation dependencies intact. */\n    this.parser.setFunction("SPARKLINE", function () { return ""; });`;

const parseAnchor = `  var parsedResponse = ctx.formulaCache.parser.parse(__doccellsResolvedFormula.substring(1), {`;
const parsePatch = `  var __doccellsFormulaToParse = __doccellsResolvedFormula;\n  if (/^=\\s*SPARKLINE\\s*\\(/i.test(__doccellsFormulaToParse)) {\n    /* Fortune's parser has no array-literal grammar. Options are interpreted by\n       the renderer, so evaluate only the first (data) argument. */\n    var __doccellsSparklineMatch = __doccellsFormulaToParse.match(/^=(\\s*SPARKLINE\\s*\\(\\s*[^,;]+)(?:[,;]\\s*\\{[\\s\\S]*\\})?\\s*\\)$/i);\n    if (__doccellsSparklineMatch) __doccellsFormulaToParse = "=" + __doccellsSparklineMatch[1] + ")";\n  }\n  var parsedResponse = ctx.formulaCache.parser.parse(__doccellsFormulaToParse.substring(1), {`;

const hookInfoAnchor = `        endY: cellsize[3] + cellsize[1],\n        endX: cellsize[2] + cellsize[0]\n      }, renderCtx);`;
const hookInfoPatch = `        endY: cellsize[3] + cellsize[1],\n        endX: cellsize[2] + cellsize[0],\n        /* DocCells custom renderers need the live matrix during the very first\n           paint, before the React workbook ref is assigned. */\n        sheetId: this.sheetCtx.currentSheetId,\n        data: flowdata\n      }, renderCtx);`;

const populatedHookInfoAnchor = `        startX: cellsize[0],\n        startY: cellsize[1],\n        endX: cellsize[2] + cellsize[0],\n        endY: cellsize[3] + cellsize[1]\n      }, renderCtx);`;
const populatedHookInfoPatch = `        startX: cellsize[0],\n        startY: cellsize[1],\n        endX: cellsize[2] + cellsize[0],\n        endY: cellsize[3] + cellsize[1],\n        /* DocCells custom renderers need the live matrix in both FortuneSheet\n           cell-rendering paths. */\n        sheetId: this.sheetCtx.currentSheetId,\n        data: flowdata\n      }, renderCtx);`;

const pastedFormulaAnchor = `  d[r][c].f = formulaStr;`;
const pastedFormulaPatch = `  /* execfunction returns the canonicalized formula at index 2. Keeping the\n     localized clipboard text here breaks subsequent dependency recalculation. */\n  d[r][c].f = funcV[2];`;

let patched = 0;
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let source = fs.readFileSync(file, "utf8");
  if (!source.includes(`this.parser.setFunction("SPARKLINE"`)) source = source.replace(functionAnchor, functionPatch);
  if (!source.includes("var __doccellsFormulaToParse")) source = source.replace(parseAnchor, parsePatch);
  if (!source.includes("DocCells custom renderers need the live matrix")) {
    source = source.split(hookInfoAnchor).join(hookInfoPatch);
  }
  source = source.replace("\n+           paint, before the React workbook ref is assigned.", "\n           paint, before the React workbook ref is assigned.");
  if (!source.includes("DocCells custom renderers need the live matrix in both")) {
    source = source.split(populatedHookInfoAnchor).join(populatedHookInfoPatch);
  }
  if (!source.includes("localized clipboard text here breaks")) {
    source = source.replace(pastedFormulaAnchor, pastedFormulaPatch);
  }
  if (!source.includes(`this.parser.setFunction("SPARKLINE"`) || !source.includes("var __doccellsFormulaToParse") || !source.includes("DocCells custom renderers need the live matrix") || !source.includes("DocCells custom renderers need the live matrix in both") || !source.includes("localized clipboard text here breaks")) {
    console.error(`patch-fortune-sparkline: patch point missing in ${path.basename(file)}`);
    continue;
  }
  fs.writeFileSync(file, source, "utf8");
  patched += 1;
  console.log(`patch-fortune-sparkline: patched ${path.basename(file)}`);
}
if (patched !== files.length) process.exit(1);
