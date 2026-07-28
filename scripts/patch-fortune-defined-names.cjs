/**
 * Adds workbook/sheet-scoped Excel defined-name resolution to FortuneSheet's
 * formula parser. DocCells stores the canonical definitions on each sheet as
 * `definedNames`; keeping them in sheet data makes them survive FortuneSheet
 * state updates without introducing a second private workbook store.
 */
const fs = require("fs");
const path = require("path");

const DIST = path.join(
  __dirname,
  "..",
  "node_modules",
  "@fortune-sheet",
  "core",
  "dist",
);
const REACT_DIST = path.join(
  __dirname,
  "..",
  "node_modules",
  "@fortune-sheet",
  "react",
  "dist",
);

const marker = "/* __doccells_defined_names__ */";
const resolverMarker = "/* __doccells_defined_name_resolver__ */";
const classNeedle = "var FormulaCache = /*#__PURE__*/function () {";
const buildReplacement = (needle) => `${needle}
    ${marker}
    this.parser.on("callVariable", function (name, done) {
      var context = that.parser.context;
      var sheets = (context && context.luckysheetfile) || [];
      var definitions = (sheets[0] && sheets[0].definedNames) || [];
      var currentSheetId = context && (context.calculateSheetId || context.currentSheetId);
      var lowerName = String(name || "").toLowerCase();
      var definition = definitions.find(function (item) {
        return item.scopeSheetId != null &&
          String(item.scopeSheetId) === String(currentSheetId) &&
          String(item.name || "").toLowerCase() === lowerName;
      }) || definitions.find(function (item) {
        return item.scopeSheetId == null &&
          String(item.name || "").toLowerCase() === lowerName;
      });
      if (!definition || !definition.refersTo) return;
      var text = String(definition.refersTo).replace(/^=/, "");
      var match = text.match(/^(?:'((?:[^']|'')+)'|([^'!]+))!\\$?([A-Z]{1,3})\\$?(\\d+)(?::\\$?([A-Z]{1,3})\\$?(\\d+))?$/i);
      if (!match) return;
      var sheetName = (match[1] || match[2]).replace(/''/g, "'");
      var sheetId = getSheetIdByName(context, sheetName);
      if (sheetId == null) return;
      var flowdata = getFlowdata(context, sheetId);
      var columnIndex = function (letters) {
        return String(letters).toUpperCase().split("").reduce(function (value, character) {
          return value * 26 + character.charCodeAt(0) - 64;
        }, 0) - 1;
      };
      var startColumn = columnIndex(match[3]);
      var startRow = Number(match[4]) - 1;
      var endColumn = columnIndex(match[5] || match[3]);
      var endRow = Number(match[6] || match[4]) - 1;
      var values = [];
      for (var row = startRow; row <= endRow; row += 1) {
        var rowValues = [];
        for (var column = startColumn; column <= endColumn; column += 1) {
          var cell = flowdata && flowdata[row] && flowdata[row][column];
          rowValues.push(that.tryGetCellAsNumber(cell));
        }
        values.push(rowValues);
      }
      done(startRow === endRow && startColumn === endColumn ? values[0][0] : values);
    });`;

const resolver = `${resolverMarker}
function __doccellsResolveDefinedNames(ctx, formula, sheetId) {
  var sheets = (ctx && ctx.luckysheetfile) || [];
  var definitions = (sheets[0] && sheets[0].definedNames) || [];
  var applicableByName = {};
  definitions.filter(function (item) {
    return !item.hidden && item.scopeSheetId == null &&
      String(item.name || "").toLowerCase().indexOf("_xlnm.") !== 0;
  }).forEach(function (item) {
    applicableByName[String(item.name).toLowerCase()] = item;
  });
  definitions.filter(function (item) {
    return !item.hidden && item.scopeSheetId != null &&
      String(item.scopeSheetId) === String(sheetId) &&
      String(item.name || "").toLowerCase().indexOf("_xlnm.") !== 0;
  }).forEach(function (item) {
    applicableByName[String(item.name).toLowerCase()] = item;
  });
  var applicable = Object.keys(applicableByName).map(function (key) {
    return applicableByName[key];
  }).sort(function (left, right) {
    return String(right.name || "").length - String(left.name || "").length;
  });
  if (!applicable.length) return formula;
  return String(formula || "").split(/("(?:[^"]|"")*")/).map(function (segment, index) {
    if (index % 2 === 1) return segment;
    var result = segment;
    applicable.forEach(function (item) {
      var escapedName = String(item.name).split("").map(function (character) {
        return "\\\\^$.*+?()[]{}|".indexOf(character) > -1 ? "\\\\" + character : character;
      }).join("");
      var pattern = new RegExp("(^|[^\\\\p{L}\\\\p{N}_.\\\\\\\\])" + escapedName + "(?=$|[^\\\\p{L}\\\\p{N}_.\\\\\\\\])", "giu");
      result = result.replace(pattern, function (_match, prefix) {
        return prefix + String(item.refersTo || "").replace(/^=/, "");
      });
    });
    return result;
  }).join("");
}
function __doccellsResolveReferenceFunctions(formula, currentRow, currentColumn) {
  var columnIndex = function (letters) {
    return String(letters).toUpperCase().split("").reduce(function (value, character) {
      return value * 26 + character.charCodeAt(0) - 64;
    }, 0);
  };
  return String(formula || "").split(/("(?:[^"]|"")*")/).map(function (segment, index) {
    if (index % 2 === 1) return segment;
    return segment
      .replace(/\\bROW\\s*\\(\\s*(?:(?:'(?:[^']|'')+'|[^'!()\\s]+)!)?\\$?[A-Z]{1,3}\\$?(\\d+)\\s*\\)/gi, function (_match, row) {
        return String(Number(row));
      })
      .replace(/\\bCOLUMN\\s*\\(\\s*(?:(?:'(?:[^']|'')+'|[^'!()\\s]+)!)?\\$?([A-Z]{1,3})\\$?\\d+\\s*\\)/gi, function (_match, column) {
        return String(columnIndex(column));
      })
      .replace(/\\bROW\\s*\\(\\s*\\)/gi, String(Number(currentRow || 0) + 1))
      .replace(/\\bCOLUMN\\s*\\(\\s*\\)/gi, String(Number(currentColumn || 0) + 1));
  }).join("");
}`;

for (const { fileName, needle } of [
  { fileName: "index.js", needle: "    this.parser = new formulaParser.Parser();" },
  { fileName: "index.esm.js", needle: "    this.parser = new Parser();" },
]) {
  const file = path.join(DIST, fileName);
  let source = fs.readFileSync(file, "utf8");
  if (!source.includes(marker)) {
    if (!source.includes(needle)) {
      throw new Error(`FortuneSheet defined-name patch point missing in ${fileName}`);
    }
    source = source.replace(needle, buildReplacement(needle));
  }

  if (source.includes(resolverMarker)) {
    source = source.replace(
      /\/\* __doccells_defined_name_resolver__ \*\/[\s\S]*?\n}\n(?=var FormulaCache =)/,
      `${resolver}\n`,
    );
  } else {
    if (!source.includes(classNeedle)) {
      throw new Error(`FortuneSheet resolver insertion point missing in ${fileName}`);
    }
    source = source.replace(classNeedle, `${resolver}\n${classNeedle}`);
  }

  const parseNeedle = "  var parsedResponse = ctx.formulaCache.parser.parse(txt.substring(1), {";
  if (!source.includes("__doccellsResolvedFormula") && source.includes(parseNeedle)) {
    source = source.replace(
      parseNeedle,
      `  var __doccellsResolvedFormula = __doccellsResolveReferenceFunctions(__doccellsResolveDefinedNames(ctx, txt, id), r, c);
  var parsedResponse = ctx.formulaCache.parser.parse(__doccellsResolvedFormula.substring(1), {`,
    );
  }
  source = source.replace(
    "  var __doccellsResolvedFormula = __doccellsResolveDefinedNames(ctx, txt, id);",
    "  var __doccellsResolvedFormula = __doccellsResolveReferenceFunctions(__doccellsResolveDefinedNames(ctx, txt, id), r, c);",
  );

  const dependencyNeedle = "  var txt1 = calc_funcStr.toUpperCase();";
  if (!source.includes("__doccellsOriginalFormula") && source.includes(dependencyNeedle)) {
    source = source.replace(
      dependencyNeedle,
      `  var __doccellsOriginalFormula = calc_funcStr;
  calc_funcStr = __doccellsResolveReferenceFunctions(__doccellsResolveDefinedNames(ctx, calc_funcStr, formulaCell.id), formulaCell.r, formulaCell.c);
  var txt1 = calc_funcStr.toUpperCase();`,
    );
    source = source.replace(
      "    calc_funcStr: calc_funcStr,\n    key: key,",
      "    calc_funcStr: __doccellsOriginalFormula,\n    key: key,",
    );
  }
  source = source.replace(
    "  calc_funcStr = __doccellsResolveDefinedNames(ctx, calc_funcStr, formulaCell.id);",
    "  calc_funcStr = __doccellsResolveReferenceFunctions(__doccellsResolveDefinedNames(ctx, calc_funcStr, formulaCell.id), formulaCell.r, formulaCell.c);",
  );

  const autocompleteNeedle = "  var list = [].concat(f, s, t);";
  const autocompleteMarker = "/* __doccells_defined_name_candidates__ */";
  if (!source.includes(autocompleteMarker)) {
    if (!source.includes(autocompleteNeedle)) {
      throw new Error(`FortuneSheet autocomplete patch point missing in ${fileName}`);
    }
    source = source.replace(
      autocompleteNeedle,
      `${autocompleteNeedle}
  ${autocompleteMarker}
  var __doccellsCandidateDefinitions = (ctx.luckysheetfile && ctx.luckysheetfile[0] && ctx.luckysheetfile[0].definedNames) || [];
  var __doccellsCandidateMap = {};
  __doccellsCandidateDefinitions.filter(function (item) {
    return !item.hidden && item.scopeSheetId == null &&
      String(item.name || "").toLowerCase().indexOf("_xlnm.") !== 0;
  }).forEach(function (item) {
    __doccellsCandidateMap[String(item.name).toLowerCase()] = item;
  });
  __doccellsCandidateDefinitions.filter(function (item) {
    return !item.hidden && item.scopeSheetId != null &&
      String(item.scopeSheetId) === String(ctx.currentSheetId) &&
      String(item.name || "").toLowerCase().indexOf("_xlnm.") !== 0;
  }).forEach(function (item) {
    __doccellsCandidateMap[String(item.name).toLowerCase()] = item;
  });
  var __doccellsNameCandidates = Object.keys(__doccellsCandidateMap).map(function (key) {
    return __doccellsCandidateMap[key];
  }).filter(function (item) {
    return String(item.name).toUpperCase().indexOf(searchtxt) > -1;
  }).sort(function (left, right) {
    var leftName = String(left.name).toUpperCase();
    var rightName = String(right.name).toUpperCase();
    var leftRank = leftName === searchtxt ? 0 : leftName.indexOf(searchtxt) === 0 ? 1 : 2;
    var rightRank = rightName === searchtxt ? 0 : rightName.indexOf(searchtxt) === 0 ? 1 : 2;
    return leftRank - rightRank || leftName.localeCompare(rightName);
  }).map(function (item) {
    return {
      n: item.name,
      d: item.refersTo,
      __doccellsDefinedName: true
    };
  });
  list = __doccellsNameCandidates.concat(list).slice(0, 10);`,
    );
  }
  fs.writeFileSync(file, source);
}

for (const fileName of ["index.js", "index.esm.js"]) {
  const file = path.join(REACT_DIST, fileName);
  let source = fs.readFileSync(file, "utf8");
  const signature =
    "var __doccellsInsertFormulaCandidate = function __doccellsInsertFormulaCandidate(setContext, formulaName, isFullInsert) {";
  const nextSignature =
    "var __doccellsInsertFormulaCandidate = function __doccellsInsertFormulaCandidate(setContext, formulaName, isFullInsert, isDefinedName) {";
  if (!source.includes(nextSignature)) {
    if (!source.includes(signature)) {
      throw new Error(`FortuneSheet candidate insertion patch point missing in ${fileName}`);
    }
    source = source.replace(signature, nextSignature);
  }
  source = source.replace(
    "    if (!isFullInsert) {\n      range.insertNode(lParNode);",
    "    if (!isFullInsert && !isDefinedName) {\n      range.insertNode(lParNode);",
  );
  source = source.replace(
    '__doccellsInsertFormulaCandidate(setContext, v.n, !!v.__doccellsFullInsert);',
    '__doccellsInsertFormulaCandidate(setContext, v.n, !!v.__doccellsFullInsert, !!v.__doccellsDefinedName);',
  );
  source = source.replace(
    '      "data-doccells-full": v.__doccellsFullInsert ? "1" : undefined,',
    '      "data-doccells-full": v.__doccellsFullInsert ? "1" : undefined,\n      "data-doccells-name": v.__doccellsDefinedName ? "1" : undefined,',
  );
  source = source.replace(
    '      var __doccellsFullInsert = activeFormula.getAttribute("data-doccells-full") === "1";',
    '      var __doccellsFullInsert = activeFormula.getAttribute("data-doccells-full") === "1";\n      var __doccellsDefinedName = activeFormula.getAttribute("data-doccells-name") === "1";',
  );
  if (!source.includes("if (__doccellsDefinedName) __doccellsFullInsert = true;")) {
    source = source.replace(
      '      var __doccellsDefinedName = activeFormula.getAttribute("data-doccells-name") === "1";',
      '      var __doccellsDefinedName = activeFormula.getAttribute("data-doccells-name") === "1";\n      if (__doccellsDefinedName) __doccellsFullInsert = true;',
    );
  }
  source = source.replace(
    "        if (!__doccellsFullInsert) {\n          range === null || range === void 0 ? void 0 : range.insertNode(lParNode);",
    "        if (!__doccellsFullInsert && !__doccellsDefinedName) {\n          range === null || range === void 0 ? void 0 : range.insertNode(lParNode);",
  );
  fs.writeFileSync(file, source);
}
