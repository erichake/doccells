// Le moteur de DocCells (copie de formula-parser qui garde l'arbre des
// formules + recalcul par index inverse, src/features/recalc) doit donner
// exactement les mêmes cellules que le moteur d'origine de FortuneSheet, sur
// des formules variées : plages, autres feuilles, noms définis, dates,
// erreurs, chaînes et losanges de dépendances, INDIRECT/OFFSET/INDEX.
import assert from "node:assert/strict";
import test from "node:test";
import {
  defaultContext,
  delFunctionGroup,
  execFunctionGroup,
  execfunction,
  getSheetIndex,
  groupValuesRefresh,
  setCellValue,
  setFormulaCellInfoMap,
} from "@fortune-sheet/core";
import {
  installFormulaEngine,
  uninstallFormulaEngine,
} from "../src/features/recalc/installFormulaEngine.js";
import { applyLiveCellUpdates } from "../src/features/liveUpdate/liveCellUpdates.js";
import { compileFormula, LEGACY } from "../src/lib/formula-parser/compiled-formula.js";

const MAIN = "s1";
const OTHER = "s2";
const ROWS = 40;
const COLUMNS = 10;
const COLUMN_LETTERS = "ABCDEFGHIJ";

const at = (address) => {
  const column = COLUMN_LETTERS.indexOf(address[0]);
  return [Number(address.slice(1)) - 1, column];
};

const number = (v) => ({ v, m: String(v), ct: { fa: "General", t: "n" } });
const date = (serial, text) => ({ v: serial, m: text, ct: { fa: "yyyy-MM-dd", t: "d" } });
const text = (v) => ({ v, m: v, ct: { fa: "@", t: "s" } });

const MAIN_CELLS = {
  A1: number(3), A2: number(4), A3: number(5), A4: number(0.2), A5: number(7),
  A6: number(1), A7: number(2), A8: number(8), A9: number(9), A10: number(10),
  B1: date(46345, "2026-11-19"), B2: date(46360, "2026-12-04"), B3: number(30), B4: number(40),
  C1: text("Bonjour"), C2: text("12"), C3: { v: "#N/A", m: "#N/A", ct: { fa: "General", t: "e" } },
  D1: "=SUM(A1:A10)",
  D2: "=AVERAGE(A1:A5)*2",
  D3: "=A1+A2*A3",
  D4: '=IF(A1>5,"grand","petit")',
  D5: "=A1/A6",
  D6: '=IFERROR(D5,"erreur")',
  D7: "='Données 2'!A1*2",
  D8: "=SUM('Données 2'!A1:B3)",
  D9: "=taux*A1",
  D10: "=SUM(plage)",
  E1: "=WORKDAY(B1,5)",
  E2: "=B2-B1",
  E3: '=YEAR(B1)&"-"&MONTH(B1)',
  E4: "=DATE(2026,A1,1)",
  E5: "=DAY(B2)+A1",
  E6: "=C3",
  E7: "=SUM(A1,C3)",
  E8: "=C2*2",
  E9: "=C1&A1",
  F1: "=D1+D3",
  F2: "=F1*2",
  F3: "=F1+F2",
  F4: '=INDIRECT("A"&A3)',
  F5: "=OFFSET(A1,1,0)",
  F6: "=INDEX(A1:A10,3)",
  F7: "=ROW()+A1",
  F8: "=COLUMN(B2)*A1",
  F9: "=VLOOKUP(A3,A1:B10,1,FALSE)",
  F10: '=COUNTIF(A1:A10,">3")',
  G1: "=-A1",
  G2: "=5%*A2",
  G3: '=CONCATENATE(C1," ",A1)',
  G4: "=#N/A+A1",
  G5: "=SUM(A1:A3)/0",
  G6: '="x"&D4',
  G7: "=SUM(A:A)",
  G8: "=SUM(A1:A30)+SUM(A1:J1)",
  G9: "=MAX(A1:C4)-MIN(A1:A10)",
  G10: "=SUM($A$1:A5)",
  H1: "=G1+G10",
  H2: "=AND(A1>2,A2<10)",
  H3: "=NOT(A1=3)",
  H4: "=A1^2^0.5",
  H5: '=A1>"2"',
  H6: "=SUM(1,)",
  H7: "=Manquante!A1",
  H8: "=PI()*A1",
  H9: "=ROUND(A4*A5,1)",
  H10: '=TEXT(A1,"0.00")',
};

const OTHER_CELLS = {
  A1: number(11), A2: number(12), A3: number(13), B1: number(21), B2: number(22), B3: number(23),
  C1: "=Feuille1!A1+A1",
  C2: "=SUM(Feuille1!A1:A3)*B1",
  C3: "=Feuille1!D3+C1",
};

const DEFINED_NAMES = [
  { name: "taux", refersTo: "=Feuille1!$A$4", scopeSheetId: null },
  { name: "plage", refersTo: "=Feuille1!$A$1:$A$3", scopeSheetId: null },
];

const buildSheet = (name, id, order, cells) => {
  const data = Array.from({ length: ROWS }, () => new Array(COLUMNS).fill(null));
  const calcChain = [];
  for (const [address, content] of Object.entries(cells)) {
    const [r, c] = at(address);
    if (typeof content === "string") {
      data[r][c] = { f: content, v: 0, m: "0" };
      calcChain.push({ r, c, id });
    } else {
      data[r][c] = structuredClone(content);
    }
  }
  return { name, id, order, status: order === 0 ? 1 : 0, data, calcChain, config: {} };
};

const createContext = () => {
  const ctx = defaultContext({});
  ctx.luckysheetfile = [
    { ...buildSheet("Feuille1", MAIN, 0, MAIN_CELLS), definedNames: structuredClone(DEFINED_NAMES) },
    buildSheet("Données 2", OTHER, 1, OTHER_CELLS),
  ];
  ctx.currentSheetId = MAIN;
  // Comme le Workbook à son initialisation.
  for (const sheet of ctx.luckysheetfile) setFormulaCellInfoMap(ctx, sheet.calcChain, sheet.data);
  // Valeurs initiales : recalcul forcé (chemin d'origine dans les deux cas).
  execFunctionGroup(ctx, null, null, null, MAIN, ctx.luckysheetfile[0].data, true);
  groupValuesRefresh(ctx);
  ctx.formulaCache.execFunctionGlobalData = null;
  return ctx;
};

const sheetData = (ctx, sheetId) => ctx.luckysheetfile[getSheetIndex(ctx, sheetId)].data;

// Saisie d'une valeur au clavier (chemin d'updateCell).
const typeValue = (ctx, sheetId, address, value) => {
  const [r, c] = at(address);
  ctx.currentSheetId = sheetId;
  const data = sheetData(ctx, sheetId);
  delFunctionGroup(ctx, r, c);
  execFunctionGroup(ctx, r, c, value);
  setCellValue(ctx, r, c, data, value);
  setFormulaCellInfoMap(ctx, [{ r, c, id: sheetId }], data);
  ctx.formulaCache.execFunctionGlobalData = null;
  groupValuesRefresh(ctx);
};

// Saisie d'une formule (chemin d'updateCell).
const typeFormula = (ctx, sheetId, address, formula) => {
  const [r, c] = at(address);
  ctx.currentSheetId = sheetId;
  const data = sheetData(ctx, sheetId);
  const [, value, canonical] = execfunction(ctx, formula, r, c, undefined, undefined, true);
  setCellValue(ctx, r, c, data, { f: canonical, v: value });
  setFormulaCellInfoMap(ctx, [{ r, c, id: sheetId }], data);
  ctx.formulaCache.execFunctionGlobalData = null;
  groupValuesRefresh(ctx);
};

// Mise à jour rapide (window.setCellValues).
const liveUpdate = (ctx, sheetId, values) => {
  const updates = Object.entries(values).map(([address, v]) => {
    const [r, c] = at(address);
    return { r, c, v };
  });
  applyLiveCellUpdates(ctx, updates, sheetId);
};

const OPERATIONS = [
  ["A1 = 6", (ctx) => typeValue(ctx, MAIN, "A1", 6)],
  ["A6 = 0 (division par zéro)", (ctx) => typeValue(ctx, MAIN, "A6", 0)],
  ["A4 = 0,5 (nom défini taux)", (ctx) => typeValue(ctx, MAIN, "A4", 0.5)],
  ["B1 = autre date", (ctx) => typeValue(ctx, MAIN, "B1", 46400)],
  ["'Données 2'!A1 = 50", (ctx) => typeValue(ctx, OTHER, "A1", 50)],
  ["A3 = 2 (INDIRECT, VLOOKUP)", (ctx) => typeValue(ctx, MAIN, "A3", 2)],
  ["C2 = texte", (ctx) => typeValue(ctx, MAIN, "C2", "abc")],
  ["A20 = 100 (SUM(A:A), A1:A30)", (ctx) => typeValue(ctx, MAIN, "A20", 100)],
  ["lot rapide A1..A3", (ctx) => liveUpdate(ctx, MAIN, { A1: 1.5, A2: -2, A3: 4 })],
  ["lot rapide autre feuille", (ctx) => liveUpdate(ctx, OTHER, { A1: 3, B1: 0.25 })],
  ["D3 devient =A5*A7", (ctx) => typeFormula(ctx, MAIN, "D3", "=A5*A7")],
  ["A2 = 9 (D3 ne dépend plus de A2)", (ctx) => typeValue(ctx, MAIN, "A2", 9)],
  ["A7 = 3 (nouvelle dépendance de D3)", (ctx) => typeValue(ctx, MAIN, "A7", 3)],
  ["nouvelle formule J1 = F3+D9", (ctx) => typeFormula(ctx, MAIN, "J1", "=F3+D9")],
  ["A5 = 1 (J1 en bout de chaîne)", (ctx) => typeValue(ctx, MAIN, "A5", 1)],
  ["rapide : D1 formule → valeur 1000", (ctx) => liveUpdate(ctx, MAIN, { D1: 1000 })],
  ["A8 = 80 (D1 n'est plus une formule)", (ctx) => typeValue(ctx, MAIN, "A8", 80)],
  ["rapide : A6 vide, A1 texte", (ctx) => liveUpdate(ctx, MAIN, { A6: null, A1: "dix" })],
  ["rapide : A1 = 2, A6 = 3", (ctx) => liveUpdate(ctx, MAIN, { A1: 2, A6: 3 })],
];

const snapshot = (ctx) =>
  ctx.luckysheetfile.map((sheet) =>
    sheet.data.flatMap((row, r) =>
      row.flatMap((cell, c) =>
        cell == null
          ? []
          : [{ cell: `${sheet.name}!${COLUMN_LETTERS[c]}${r + 1}`, v: cell.v, m: cell.m, f: cell.f }],
      ),
    ),
  );

const runScenario = (useDocCellsEngine) => {
  if (useDocCellsEngine) installFormulaEngine();
  else uninstallFormulaEngine();
  try {
    const ctx = createContext();
    const states = [{ step: "initial", cells: snapshot(ctx) }];
    for (const [step, operation] of OPERATIONS) {
      operation(ctx);
      states.push({ step, cells: snapshot(ctx) });
    }
    return states;
  } finally {
    installFormulaEngine();
  }
};

test("le nouveau moteur donne les mêmes cellules que l'ancien, étape par étape", () => {
  const before = runScenario(false);
  const after = runScenario(true);
  assert.equal(after.length, before.length);
  for (let i = 0; i < before.length; i += 1) {
    assert.deepEqual(after[i], before[i], `après « ${before[i].step} »`);
  }
});

test("le scénario recalcule vraiment des formules variées", () => {
  const states = runScenario(true);
  const value = (state, cell) => states[state].cells.flat().find((entry) => entry.cell === cell);
  // Après A1 = 6 : dépendants directs et chaîne F1 → F2 → F3.
  assert.equal(value(1, "Feuille1!D4").v, "grand");
  assert.equal(value(1, "Feuille1!F3").v, value(1, "Feuille1!F1").v * 3);
  // Division par zéro : FortuneSheet produit la chaîne « DIV/0 », qu'IFERROR
  // ne rattrape pas (comportement d'origine, conservé).
  assert.equal(value(2, "Feuille1!D5").v, "DIV/0");
  // Nom défini : taux (A4) * A1.
  assert.equal(value(3, "Feuille1!D9").v, 3);
  // Date ouvrée après changement de B1.
  assert.equal(value(4, "Feuille1!E1").v, 46407);
  // Autre feuille, dans les deux sens.
  assert.equal(value(5, "Feuille1!D7").v, 100);
  assert.equal(value(5, "Données 2!C1").v, 56);
  // Formule modifiée : D3 suit ses nouvelles dépendances.
  assert.equal(value(13, "Feuille1!D3").v, 21);
  // Erreurs propagées et formule invalide.
  assert.equal(value(0, "Feuille1!G4").v, "#N/A");
  assert.equal(value(0, "Feuille1!H6").v, "#ERROR!");
  assert.equal(value(0, "Feuille1!H7").v, "#REF!");
});

test("les formules du scénario passent presque toutes par l'arbre en cache", () => {
  const formulas = [...Object.values(MAIN_CELLS), ...Object.values(OTHER_CELLS)]
    .filter((content) => typeof content === "string");
  const legacy = formulas.filter((formula) => compileFormula(formula.slice(1)) === LEGACY);
  assert.deepEqual(legacy, ["=SUM(1,)"]);
});

// Seul écart voulu : FortuneSheet range les cellules des plages B12:B24 et
// B2:B124 sous la même clé et oublie alors de recalculer la seconde.
test("le nouveau moteur recalcule une plage que l'ancien oubliait", () => {
  const run = (useDocCellsEngine) => {
    if (useDocCellsEngine) installFormulaEngine();
    else uninstallFormulaEngine();
    try {
      const ctx = defaultContext({});
      const data = Array.from({ length: 130 }, () => new Array(4).fill(null));
      for (let r = 0; r < 130; r += 1) data[r][1] = number(1);
      data[0][2] = { f: "=SUM(B12:B24)", v: 13, m: "13" };
      data[1][2] = { f: "=SUM(B2:B124)", v: 123, m: "123" };
      const calcChain = [{ r: 0, c: 2, id: MAIN }, { r: 1, c: 2, id: MAIN }];
      ctx.luckysheetfile = [{ name: "Feuille1", id: MAIN, order: 0, status: 1, data, calcChain, config: {} }];
      ctx.currentSheetId = MAIN;
      setFormulaCellInfoMap(ctx, calcChain, data);
      typeValue(ctx, MAIN, "B100", 2);
      return data[1][2].v;
    } finally {
      installFormulaEngine();
    }
  };
  assert.equal(run(true), 124);
  assert.equal(run(false), 123, "défaut connu de l'ancien moteur");
});
