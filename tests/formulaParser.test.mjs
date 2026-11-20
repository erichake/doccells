// La copie de formula-parser (src/lib/formula-parser), qui garde l'arbre de
// chaque formule, doit donner exactement les résultats du paquet d'origine.
import assert from "node:assert/strict";
import test from "node:test";
import { Parser as OriginalParser } from "@fortune-sheet/formula-parser";
import { Parser as DocCellsParser } from "../src/lib/formula-parser/index.js";
import { compileFormula, LEGACY } from "../src/lib/formula-parser/compiled-formula.js";

const columnIndex = (label) =>
  label.split("").reduce((value, character) => value * 26 + character.charCodeAt(0) - 64, 0) - 1;

// Grille factice : valeurs par feuille, lues par les rappels comme le fait
// FortuneSheet (callCellValue, callRangeValue, callVariable).
const makeGrid = (offset) => ({
  null: {
    A1: 1 + offset, A2: 2, A3: "", A4: "texte", A5: true, B1: 10, B2: -3.5,
    B3: "4", C1: 45000, C2: 45010, D1: "#N/A",
  },
  Autre: { A1: 100 + offset, B2: "x" },
  "Feuille 2": { A1: 7, A2: 8 },
});

const attach = (parser, getGrid) => {
  parser.on("callCellValue", (coord, _options, done) => {
    const grid = getGrid();
    if (coord.row.index === 99) return; // valeur undefined
    const sheet = grid[coord.sheetName ?? "null"];
    if (!sheet) throw Error("#REF!");
    done(sheet[`${coord.column.label}${coord.row.index + 1}`] ?? "");
  });
  parser.on("callRangeValue", (start, end, _options, done) => {
    const sheet = getGrid()[start.sheetName ?? "null"] || {};
    const rows = [];
    for (let r = start.row.index; r <= end.row.index; r += 1) {
      const row = [];
      for (let c = start.column.index; c <= end.column.index; c += 1) {
        const label = String.fromCharCode(65 + c);
        row.push(sheet[`${label}${r + 1}`] ?? "");
      }
      rows.push(row);
    }
    done(rows);
  });
  parser.on("callVariable", (name, done) => {
    if (name.toLowerCase() === "taux") done(0.2);
  });
  parser.setFunction("DOUBLE", (params) => params[0] * 2);
  parser.setFunction("RIEN", () => undefined);
  return parser;
};

const EXPRESSIONS = [
  "1+2*3", "(1+2)*3", "2^3^2", "-A1", "+B3", "--A1", "-\"abc\"", "+A4", "5%", "1.5*2", ".5+1",
  "A1+B1", "$A$1*B$2-$B2", "A1&B1", "A1&\" \"&A4", "\"a\"=\"A\"", "A1<>2", "A1<=2", "A1>=2", "A1<2", "A1>2",
  "SUM(A1:B2)", "SUM(B2:A1)", "SUM($A$1:$B$2,10)", "AVERAGE(A1:A5)", "COUNT(A1:D1)", "COUNTA(A1:A5)",
  "MAX(A1:B3)", "MIN(A1,B2,-1)", "SUMPRODUCT(A1:A2,B1:B2)", "ROUND(B2,0)", "ABS(B2)", "SQRT(A2)",
  "IF(A1>1,\"grand\",\"petit\")", "IF(A5,1,2)", "IFERROR(1/0,\"div\")", "IFERROR(D1,0)", "AND(TRUE,A5)", "OR(FALSE,A1>5)",
  "NOT(A5)", "TRUE", "FALSE", "NULL", "taux*A1", "inconnu+1",
  "Autre!A1*2", "'Feuille 2'!A1+'Feuille 2'!A2", "SUM('Feuille 2'!A1:A2)", "SUM(Autre!A1:Autre!B2)", "SUM(Autre!A1:'Feuille 2'!A2)",
  "Manquante!A1", "DATE(2026,11,19)", "WORKDAY(C1,5)", "C2-C1", "YEAR(C1)", "TEXT(C1,\"yyyy-mm-dd\")",
  "1/0", "A4*2", "#N/A", "#DIV/0!", "1/0+#N/A", "SUM(1,#REF!)", "FOO(1)", "DOUBLE(A1)", "RIEN()",
  "CONCATENATE(\"a\",1,TRUE)", "LEN(A4)", "UPPER(A4)", "MID(A4,2,3)", "VLOOKUP(2,A1:B2,2,FALSE)",
  "INDEX(A1:B3,2,2)", "MATCH(2,A1:A3,0)", "A100", "A100+1", "SUM(A1:A3)*-1", "1+", "SUM(1,", ")",
  "1 + 2", "\"texte avec , virgule\"", "PI()", "ROW(A1)", "B2*-B2", "-(A1+B1)^2", "1e3", "A1:B2",
];

const normalize = (value) => {
  if (value instanceof Date) return { date: value.getTime() };
  if (typeof value === "number" && Number.isNaN(value)) return "NaN";
  if (Array.isArray(value)) return value.map(normalize);
  return value;
};
const run = (parser, expression) => {
  const { error, result } = parser.parse(expression, { sheetId: "0" });
  return { error, result: normalize(result) };
};

test("la copie de formula-parser donne les mêmes résultats que l'original", () => {
  let offset = 0;
  const getGrid = () => makeGrid(offset);
  const original = attach(new OriginalParser(), getGrid);
  const copy = attach(new DocCellsParser(), getGrid);
  for (const step of [0, 5, 0]) {
    offset = step;
    for (const expression of EXPRESSIONS) {
      // Deux passages : le second utilise l'arbre mis en cache.
      for (let pass = 0; pass < 2; pass += 1) {
        assert.deepEqual(
          run(copy, expression),
          run(original, expression),
          `${expression} (décalage ${step}, passage ${pass})`,
        );
      }
    }
  }
});

test("l'arbre en cache relit les cellules à chaque évaluation", () => {
  let value = 1;
  const parser = new DocCellsParser();
  parser.on("callCellValue", (_coord, _options, done) => done(value));
  assert.equal(parser.parse("A1*2").result, 2);
  value = 21;
  assert.equal(parser.parse("A1*2").result, 42);
});

test("seules les expressions que l'arbre ne peut pas reproduire retombent sur l'analyseur d'origine", () => {
  const legacy = EXPRESSIONS.filter((expression) => compileFormula(expression) === LEGACY);
  // Erreurs de syntaxe (le résultat d'origine peut dépendre d'une évaluation
  // partielle) et nombres que le lexer ne lit pas seul (.5, 1e3).
  assert.deepEqual(legacy, [".5+1", "1+", "SUM(1,", ")", "1e3"]);
});
