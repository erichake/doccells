// Listes dans les cellules et les formules (src/lib/formula-parser/helper/list.js),
// avec le sens des formules de DocGeo.
import assert from "node:assert/strict";
import test from "node:test";
import {
  defaultContext,
  delFunctionGroup,
  execFunctionGroup,
  execfunction,
  groupValuesRefresh,
  setCellValue,
  setFormulaCellInfoMap,
  valueShowEs,
} from "@fortune-sheet/core";
import "../src/features/recalc/installFormulaEngine.js";
import {
  formatList,
  listOperation,
  parseListInput,
  rewriteListLiterals,
} from "../src/lib/formula-parser/helper/list.js";

const createSheet = () => {
  const ctx = defaultContext({});
  const data = Array.from({ length: 20 }, () => new Array(5).fill(null));
  ctx.luckysheetfile = [{ name: "Feuille1", id: "s", order: 0, status: 1, data, calcChain: [], config: {} }];
  ctx.currentSheetId = "s";
  // Saisie au clavier, valeur ou formule (chemin d'updateCell).
  const type = (address, content) => {
    const r = Number(address.slice(1)) - 1;
    const c = "ABCDE".indexOf(address[0]);
    if (content.startsWith("=")) {
      const [, v, canonical] = execfunction(ctx, content, r, c, undefined, undefined, true);
      setCellValue(ctx, r, c, data, { f: canonical, v });
    } else {
      delFunctionGroup(ctx, r, c);
      execFunctionGroup(ctx, r, c, content);
      setCellValue(ctx, r, c, data, content);
    }
    setFormulaCellInfoMap(ctx, [{ r, c, id: "s" }], data);
    ctx.formulaCache.execFunctionGlobalData = null;
    groupValuesRefresh(ctx);
  };
  const cell = (address) => data[Number(address.slice(1)) - 1]["ABCDE".indexOf(address[0])];
  return { data, type, cell };
};

test("opérateurs : complexes, terme à terme, multiples, comme DocGeo", () => {
  assert.deepEqual(listOperation("*", [2, 1], [3, 2]), [4, 7]);
  assert.deepEqual(listOperation("/", [4, 7], [3, 2]), [2, 1]);
  assert.deepEqual(listOperation("+", [2, 1], 3), [5, 1]);
  assert.deepEqual(listOperation("-", 3, [2, 1]), [1, -1]);
  assert.deepEqual(listOperation("^", [0, 1], 2), [-1, 1.2246467991473532e-16]);
  assert.deepEqual(listOperation("+", [1, 2, 3], [1, 1, 1]), [2, 3, 4]);
  assert.deepEqual(listOperation("*", 2, [1, 2, 3]), [2, 4, 6]);
  assert.deepEqual(listOperation("/", [2, 4, 6], 2), [1, 2, 3]);
  assert.deepEqual(listOperation("*", [[1, 2], [3, 4]], 2), [[2, 4], [6, 8]]);
  // Cellule vide : 0.
  assert.deepEqual(listOperation("+", [2, 1], ""), [2, 1]);
  // Racines n-ièmes : la liste des n racines.
  assert.equal(listOperation("^", [8, 0], 1 / 3).length, 3);
  for (const [op, l, r] of [
    ["*", [1, 2, 3], [1, 2, 3]],
    ["+", [1, 2, 3], 1],
    ["+", [1, 2], [1, 2, 3]],
    ["/", 2, [1, 2, 3]],
    ["*", [1, 2], "texte"],
    ["^", [1, 2], [1, 2]],
  ]) {
    assert.throws(() => listOperation(op, l, r), /VALUE/, `${JSON.stringify(l)} ${op} ${JSON.stringify(r)}`);
  }
  assert.throws(() => listOperation("/", [2, 1], 0), /DIV\/0/);
  assert.throws(() => listOperation("/", [2, 1], [0, 0]), /DIV\/0/);
});

test("saisie et affichage d'une liste, selon le séparateur de la langue", () => {
  assert.deepEqual(parseListInput("[2, 1]", ","), [2, 1]);
  assert.deepEqual(parseListInput(" [ [1,2] , [3, -4.5e1] ] ", ","), [[1, 2], [3, -45]]);
  assert.deepEqual(parseListInput("[]", ","), []);
  assert.deepEqual(parseListInput("[2,5; 1.5]", ";"), [2.5, 1.5]);
  for (const text of ["[2;1]", "[2, 1", "[2, 1]x", "[a]", "[2,,1]", "texte", "2"]) {
    assert.equal(parseListInput(text, ","), null, text);
  }
  const fr = (n) => String(n).replace(".", ",");
  assert.equal(formatList([[2.5, 1], []], fr, ";"), "[[2,5; 1]; []]");
  assert.equal(formatList([1, 2], String, ","), "[1, 2]");
});

test("crochets des formules hors textes et noms de feuilles", () => {
  assert.equal(rewriteListLiterals("[1,[2,3]]*2"), "LIST(1,LIST(2,3))*2");
  assert.equal(rewriteListLiterals(`LEN("[a]")+'F[1]'!A1`), `LEN("[a]")+'F[1]'!A1`);
});

test("cellules : liste saisie, formules, recalcul des dépendantes", () => {
  const { type, cell, data } = createSheet();
  type("A1", "[2, 1]");
  type("A2", "[3,2]");
  type("A3", "=A1*A2");
  type("A4", "=-A1");
  type("A5", "=SUM([1,2,3]+[1,1,1]*2)");
  type("A6", "=INDEX(A3,2)");
  type("A7", "=[[1,2],[3,4]]*2");
  type("A8", "=[]");
  type("A9", "=[1,2,3]*[1,2,3]");
  type("A10", "'[2, 1]");
  assert.deepEqual(cell("A1"), { v: [2, 1], m: "[2, 1]", ct: { fa: "General", t: "g" } });
  assert.deepEqual([cell("A3").v, cell("A3").m], [[4, 7], "[4, 7]"]);
  assert.deepEqual(cell("A4").v, [-2, -1]);
  assert.equal(cell("A5").v, 12);
  assert.equal(cell("A6").v, 7);
  assert.deepEqual(cell("A7").v, [[2, 4], [6, 8]]);
  assert.deepEqual(cell("A8").v, []);
  assert.equal(cell("A9").v, "#VALUE!");
  // Apostrophe : un texte.
  assert.equal(cell("A10").v, "[2, 1]");
  // L'éditeur de la cellule montre la liste comme elle s'écrit.
  assert.equal(valueShowEs(0, 0, data), "[2, 1]");

  type("A1", "[0, 1]");
  assert.deepEqual(cell("A3").v, [-2, 3]);
  assert.deepEqual([cell("A4").v.map((x) => x + 0), cell("A4").m], [[0, -1], "[0, -1]"]);
  type("A1", "5");
  assert.deepEqual(cell("A3").v, [15, 10]);
});
