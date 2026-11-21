// Listes dans les cellules et les formules (src/lib/formula-parser/helper/list.js),
// avec le sens des formules de DocGeo.
import assert from "node:assert/strict";
import test from "node:test";
import {
  api,
  defaultContext,
  delFunctionGroup,
  dropCellCache,
  execFunctionGroup,
  execfunction,
  groupValuesRefresh,
  handleNumberDecrease,
  handleNumberIncrease,
  handlePaste,
  rangeValueToHtml,
  selectionCache,
  setCellValue,
  setFormulaCellInfoMap,
  update,
  updateDropCell,
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
  return { ctx, data, type, cell };
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

test("décimales : les boutons et le format de la cellule s'appliquent aux nombres d'une liste", () => {
  const { type, cell, data, ctx } = createSheet();
  type("A1", "[-0.137278759, 0.270863488]");
  type("A2", "1.5");
  type("A3", "=A1*2");
  // Plage A1:A3, cellule active A1 (une liste).
  ctx.luckysheet_select_save = [{ row: [0, 2], column: [0, 0], row_focus: 0, column_focus: 0 }];
  handleNumberDecrease(ctx, null);
  assert.deepEqual(cell("A1").ct, { fa: "0.00000000", t: "g" });
  assert.equal(cell("A1").m, "[-0.13727876, 0.27086349]");
  assert.equal(cell("A2").m, "1.50000000");
  for (let i = 0; i < 6; i += 1) handleNumberDecrease(ctx, null);
  assert.equal(cell("A1").m, "[-0.14, 0.27]");
  assert.deepEqual(cell("A1").v, [-0.137278759, 0.270863488]);
  assert.equal(cell("A3").m, "[-0.27, 0.54]");
  handleNumberIncrease(ctx, null);
  assert.equal(cell("A1").m, "[-0.137, 0.271]");
  // Le format reste au recalcul et à une nouvelle saisie de liste.
  type("A1", "[1, 2]");
  assert.equal(cell("A1").m, "[1.000, 2.000]");
  assert.equal(cell("A3").m, "[2.000, 4.000]");
  // Cellule active : un nombre, la liste suit.
  ctx.luckysheet_select_save = [{ row: [0, 2], column: [0, 0], row_focus: 1, column_focus: 0 }];
  handleNumberDecrease(ctx, null);
  assert.equal(cell("A1").m, "[1.00, 2.00]");
  // Une liste qui devient un nombre garde le format, comme un nombre.
  type("A1", "5");
  assert.deepEqual([cell("A1").ct, cell("A1").m], [{ fa: "0.00", t: "n" }, "5.00"]);
  // Liste en General, cellule active sans décimales : rien à réduire.
  type("B1", "[2, 1]");
  ctx.luckysheet_select_save = [{ row: [0, 0], column: [1, 1], row_focus: 0, column_focus: 1 }];
  handleNumberIncrease(ctx, null);
  assert.equal(cell("B1").m, "[2.0, 1.0]");
});

test("décimales : colonne sélectionnée depuis une cellule vide, le format vient de la première liste", () => {
  const { type, cell, ctx } = createSheet();
  type("D6", "[-0.137278759, 0.270863488]");
  type("D7", "[0, 0]");
  type("D8", "0");
  // Toute la colonne D, cellule active D1 vide.
  ctx.luckysheet_select_save = [{ row: [0, 19], column: [3, 3], row_focus: 0, column_focus: 3 }];
  handleNumberDecrease(ctx, null);
  assert.equal(cell("D6").m, "[-0.13727876, 0.27086349]");
  assert.equal(cell("D7").m, "[0.00000000, 0.00000000]");
  assert.equal(cell("D8").m, "0.00000000");
  handleNumberIncrease(ctx, null);
  assert.equal(cell("D6").m, "[-0.137278759, 0.270863488]");
});

// Copier-coller dans la feuille (Cmd+C, Cmd+V) : le presse-papiers porte le
// tableau HTML de la copie, reconnu comme une copie de la feuille.
const copyPaste = (ctx, from, to) => {
  const at = (address) => [Number(address.slice(1)) - 1, "ABCDE".indexOf(address[0])];
  const [r, c] = at(from);
  const [r2, c2] = at(to);
  const range = { row: [r, r], column: [c, c] };
  ctx.luckysheet_select_save = [range];
  ctx.luckysheet_copy_save = { dataSheetId: "s", copyRange: [range], RowlChange: false, HasMC: false };
  const html = rangeValueToHtml(ctx, "s", ctx.luckysheet_select_save);
  ctx.luckysheet_select_save = [{ row: [r2, r2], column: [c2, c2], row_focus: r2, column_focus: c2 }];
  selectionCache.isPasteAction = true;
  handlePaste(ctx, { clipboardData: { getData: (kind) => (kind === "text/html" ? html : "") } });
};

test("copier-coller et poignée de recopie d'une formule dont le résultat est une liste", () => {
  const { type, cell, data, ctx } = createSheet();
  type("D2", "[-1.2564, 4.568]");
  type("D3", "=D2^2");
  // Collée sous elle-même : =D3^2, une liste (le collage s'arrêtait sur
  // l'erreur « unsupported value in General format »).
  copyPaste(ctx, "D3", "D4");
  assert.equal(cell("D4").f, "=D3^2");
  assert.deepEqual([cell("D4").m, cell("D4").ct], ["[240.2748646, 442.7953805]", { fa: "General", t: "g" }]);
  // Collée ailleurs : =E1^2 vaut 0, un nombre aligné comme un nombre.
  copyPaste(ctx, "D3", "E2");
  assert.equal(cell("E2").f, "=E1^2");
  assert.deepEqual([cell("E2").v, cell("E2").m, cell("E2").ct], [0, "0", { fa: "General", t: "n" }]);
  // Le format de nombres de la cellule copiée suit la liste.
  data[2][3].ct = { fa: "0.00", t: "g" };
  copyPaste(ctx, "D3", "D5");
  assert.deepEqual([cell("D5").m, cell("D5").ct], ["[-138335.74, 212785.20]", { fa: "0.00", t: "g" }]);
  // Poignée de recopie de D3 vers le bas (la liste prenait le format texte).
  Object.assign(dropCellCache, {
    direction: "down",
    copyRange: { row: [2, 2], column: [3, 3] },
    applyRange: { row: [5, 6], column: [3, 3] },
  });
  ctx.luckysheet_select_save = [{ row: [2, 6], column: [3, 3] }];
  updateDropCell(ctx);
  assert.equal(cell("D6").f, "=D5^2");
  assert.deepEqual(cell("D6").ct, { fa: "0.00", t: "g" });
  assert.match(cell("D6").m, /^\[-?[\d.]+, -?[\d.]+\]$/);
  // Le formateur commun accepte une liste.
  assert.equal(update("General", [1.5, 2]), "[1.5, 2]");
});

// Texte collé depuis une autre application : saisi comme au clavier.
const pasteText = (ctx, to, text) => {
  const r = Number(to.slice(1)) - 1;
  const c = "ABCDE".indexOf(to[0]);
  ctx.luckysheet_copy_save = undefined;
  ctx.luckysheet_select_save = [{ row: [r, r], column: [c, c], row_focus: r, column_focus: c }];
  selectionCache.isPasteAction = true;
  handlePaste(ctx, { clipboardData: { getData: (kind) => (kind === "text/plain" ? text : ""), files: [] } });
};

test("collage de texte venu d'ailleurs : liste et nombre comme à la saisie", () => {
  const { type, cell, data, ctx } = createSheet();
  type("A1", "=B1*2");
  type("B2", "=SUM(B1)");
  // Une liste collée remplace la formule de la cellule.
  pasteText(ctx, "B1", "[1, 2]");
  assert.deepEqual([cell("B1").v, cell("B1").m, cell("B1").f], [[1, 2], "[1, 2]", undefined]);
  // Plusieurs cellules (tabulations), dont une au format Texte.
  data[2][1] = { ct: { fa: "@", t: "s" } };
  pasteText(ctx, "A3", "1.5\t[3, 4]\n'7\t2");
  type("E1", "1.5");
  type("E2", "'7");
  type("E3", "2");
  assert.deepEqual(cell("A3"), cell("E1"));
  assert.equal(cell("B3").v, "[3, 4]");
  assert.deepEqual(cell("A4"), cell("E2"));
  assert.deepEqual(cell("B4"), cell("E3"));
  // Le tableau HTML (Excel, Numbers, une page web) passe par le DOM : testé
  // dans le navigateur.
});

test("classeur relu dans une autre langue : une liste saisie prend les séparateurs de la langue affichée", () => {
  // Enregistrée en français : m n'est qu'un texte d'affichage
  // (WORKBOOK_FORMAT.md), la valeur fait foi. Les tests tournent en anglais.
  const saved = Object.freeze({ v: Object.freeze([0, 0.5]), m: "[0; 0,5]", ct: Object.freeze({ fa: "General", t: "g" }) });
  const number = { v: 2.5, m: "2,5", ct: { fa: "General", t: "n" } };
  const celldata = [
    { r: 0, c: 0, v: saved },
    { r: 0, c: 1, v: number },
  ];
  const data = api.celldataToData(celldata, 1, 2);
  assert.deepEqual(data[0][0], { v: [0, 0.5], m: "[0, 0.5]", ct: { fa: "General", t: "g" } });
  assert.equal(data[0][1], number);
  // Même chemin à l'ouverture d'une feuille par le classeur.
  const ctx = defaultContext({});
  ctx.luckysheetfile = [];
  api.initSheetData(ctx, 0, { name: "Feuille1", id: "s", celldata, row: 1, column: 2 });
  assert.equal(ctx.luckysheetfile[0].data[0][0].m, "[0, 0.5]");
});
