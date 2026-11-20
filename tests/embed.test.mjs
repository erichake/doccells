// Mode intégré (EMBED.md) : références, valeurs transmises et cœur partagé
// par window.docCells et le protocole postMessage, sur un vrai contexte
// FortuneSheet.
import assert from "node:assert/strict";
import test from "node:test";
import { defaultContext, setFormulaCellInfoMap } from "@fortune-sheet/core";
import "../src/features/recalc/installFormulaEngine.js";
import { applyLiveCellUpdates } from "../src/features/liveUpdate/liveCellUpdates.js";
import { formatReference, parseReference } from "../src/features/embed/references.js";
import { readRange, toPublicValue } from "../src/features/embed/cellValues.js";
import { createDocCellsCore } from "../src/features/embed/docCellsCore.js";

test("références : nom de feuille obligatoire, plages normalisées", () => {
  assert.deepEqual(parseReference("Feuille1!B3"), { sheetName: "Feuille1", r0: 2, r1: 2, c0: 1, c1: 1 });
  assert.deepEqual(parseReference("'Données 2'!$C$10:A1"), {
    sheetName: "Données 2", r0: 0, r1: 9, c0: 0, c1: 2,
  });
  assert.equal(parseReference("'L''été'!AA1").sheetName, "L'été");
  assert.equal(parseReference(" Feuille1!b3 ").c0, 1);
  assert.throws(() => parseReference("B3"), /Invalid reference: B3 \(sheet name required\)/);
  assert.throws(() => parseReference("Feuille1!A:A"), /Invalid reference/);
  assert.throws(() => parseReference("Feuille1!3:3"), /Invalid reference/);
  assert.throws(() => parseReference("Feuille1!A1:Z1000"), /more than 10000 cells/);
  assert.throws(() => parseReference("Feuille1!A0"), /Invalid reference/);
  assert.throws(() => parseReference(42), /Invalid reference/);
});

test("références : forme canonique, apostrophes si nécessaire", () => {
  const format = (text) => formatReference(parseReference(text));
  assert.equal(format("Feuille1!$B$2:C3"), "Feuille1!B2:C3");
  assert.equal(format("Feuille1!C3:B2"), "Feuille1!B2:C3");
  assert.equal(format("'Données 2'!A1"), "'Données 2'!A1");
  assert.equal(format("'L''été'!A1"), "'L''été'!A1");
  assert.equal(format("Été!ZZ10"), "Été!ZZ10");
});

test("valeurs : erreurs distinguées, DIV/0 normalisé, affichage", () => {
  assert.equal(toPublicValue(null), null);
  assert.equal(toPublicValue({ v: 3.5, m: "3,5" }), 3.5);
  assert.equal(toPublicValue({ v: "texte" }), "texte");
  assert.equal(toPublicValue({ v: true }), true);
  assert.deepEqual(toPublicValue({ v: "#N/A" }), { error: "#N/A" });
  assert.deepEqual(toPublicValue({ v: "DIV/0", m: "DIV/0" }), { error: "#DIV/0!" });
  assert.deepEqual(toPublicValue({ v: 46345, m: "19/11/2026" }, true), { v: 46345, m: "19/11/2026" });
  // m : le texte affiché tel quel, ou le code d'erreur s'il manque.
  assert.deepEqual(toPublicValue({ v: "DIV/0", m: "DIV/0" }, true), { v: { error: "#DIV/0!" }, m: "DIV/0" });
  assert.deepEqual(toPublicValue({ v: "DIV/0" }, true), { v: { error: "#DIV/0!" }, m: "#DIV/0!" });
  assert.deepEqual(toPublicValue(null, true), { v: null, m: "" });
  assert.equal(toPublicValue({ ct: { t: "inlineStr", s: [{ v: "a" }, { v: "b" }] } }), "ab");
  assert.deepEqual(readRange([[{ v: 1 }]], { r0: 0, c0: 0, r1: 1, c1: 1 }), [[1, null], [null, null]]);
});

const number = (v) => ({ v, m: String(v), ct: { fa: "General", t: "n" } });

// Classeur de deux feuilles : B1:B3 = $A$1*k sur Feuille1, Autre!A1 =
// Feuille1!B3*10.
const createWorkbookContext = () => {
  const ctx = defaultContext({});
  const grid = () => Array.from({ length: 10 }, () => new Array(5).fill(null));
  const main = grid();
  main[0][0] = number(2);
  for (let k = 1; k <= 3; k += 1) main[k - 1][1] = { f: `=$A$1*${k}`, v: 2 * k, m: String(2 * k) };
  main[5][0] = { f: "=A1/0", v: "DIV/0", m: "DIV/0" };
  const other = grid();
  other[0][0] = { f: "=Feuille1!B3*10", v: 60, m: "60" };
  const mainChain = [0, 1, 2].map((r) => ({ r, c: 1, id: "a" })).concat([{ r: 5, c: 0, id: "a" }]);
  const otherChain = [{ r: 0, c: 0, id: "b" }];
  ctx.luckysheetfile = [
    { name: "Feuille1", id: "a", order: 0, status: 1, data: main, calcChain: mainChain, config: {} },
    { name: "Autre", id: "b", order: 1, status: 0, data: other, calcChain: otherChain, config: {} },
  ];
  ctx.currentSheetId = "a";
  setFormulaCellInfoMap(ctx, mainChain, main);
  setFormulaCellInfoMap(ctx, otherChain, other);
  return ctx;
};

const createCore = (ctx) =>
  createDocCellsCore({
    getContext: () => ctx,
    whenReady: async () => {},
    writeValues: (updates) => {
      const result = applyLiveCellUpdates(ctx, updates, updates[0]?.sheetId);
      return {
        written: result.written,
        recalculated: result.recalculated,
        skipped: result.skipped.length,
        formulas: 0,
      };
    },
    loadWorkbook: async () => {},
    saveWorkbook: () => [],
  });

const nextTurn = () => new Promise((resolve) => setTimeout(resolve, 10));

test("setCellValues renvoie les valeurs modifiées de ses abonnements", () => {
  const ctx = createWorkbookContext();
  const core = createCore(ctx);
  const column = core.subscribe("Feuille1!B1:B3", {}, "window");
  assert.deepEqual(column.values, [[2], [4], [6]]);
  const other = core.subscribe("Autre!A1", {}, "window");
  const error = core.subscribe("Feuille1!A6", {}, "window");
  assert.deepEqual(error.values, [[{ error: "#DIV/0!" }]]);

  const result = core.setCellValues([{ ref: "Feuille1!A1", v: 5 }], "window");
  assert.equal(result.written, 1);
  assert.equal(result.recalculated, 5);
  assert.deepEqual(result.values, [
    { subscription: column.subscription, ref: "Feuille1!B1:B3", values: [[5], [10], [15]] },
    { subscription: other.subscription, ref: "Autre!A1", values: [[150]] },
  ]);
  // Rien ne change : rien n'est renvoyé.
  assert.deepEqual(core.setCellValues([{ ref: "Feuille1!A1", v: 5 }], "window").values, []);
  assert.deepEqual(core.getValues("Feuille1!A1:B1", { display: true }), [[{ v: 5, m: "5" }, { v: 5, m: "5" }]]);
});

test("les autres clients reçoivent les valeurs en événements", () => {
  const ctx = createWorkbookContext();
  const core = createCore(ctx);
  const events = [];
  core.listen("message", (event) => events.push(event));
  const theirs = core.subscribe("Autre!A1", {}, "message");
  core.subscribe("Feuille1!B1", {}, "window");

  const result = core.setCellValues([{ ref: "Feuille1!A1", v: 1 }], "window");
  assert.equal(result.values.length, 1);
  assert.deepEqual(events, [
    { event: "values", subscription: theirs.subscription, ref: "Autre!A1", values: [[30]], source: "host" },
  ]);
});

test("écritures refusées en entier : feuille inconnue, plage, requête invalide", () => {
  const core = createCore(createWorkbookContext());
  assert.throws(() => core.setCellValues([{ ref: "Inconnue!A1", v: 1 }], "window"), /Unknown sheet: Inconnue/);
  assert.throws(() => core.setCellValues([{ ref: "Feuille1!A1:A2", v: 1 }], "window"), /single cell expected/);
  assert.throws(() => core.setCellValues({}, "window"), /Invalid request/);
  assert.throws(() => core.unsubscribe(99, "window"), /Unknown subscription: 99/);
  const { subscription } = core.subscribe("Feuille1!A1", {}, "window");
  assert.throws(() => core.unsubscribe(subscription, "message"), /Unknown subscription/);
  assert.equal(core.unsubscribe(subscription, "window"), null);
});

test("feuille renommée ou supprimée : événements et abonnements suivis", async () => {
  const ctx = createWorkbookContext();
  const core = createCore(ctx);
  const events = [];
  core.listen("window", (event) => events.push(event));
  const { subscription } = core.subscribe("Autre!A1", {}, "window");
  core.observeWorkbook(ctx.luckysheetfile, "user");

  ctx.luckysheetfile = ctx.luckysheetfile.map((sheet) =>
    sheet.id === "b" ? { ...sheet, name: "Résultats" } : sheet,
  );
  core.observeWorkbook(ctx.luckysheetfile, "user");
  assert.deepEqual(events.shift(), { event: "sheetRenamed", id: "b", oldName: "Autre", newName: "Résultats" });
  assert.deepEqual(core.getValues("Résultats!A1"), [[60]]);
  core.setCellValues([{ ref: "Feuille1!A1", v: 3 }], "message");
  assert.deepEqual(events.shift(), {
    event: "values", subscription, ref: "Résultats!A1", values: [[90]], source: "host",
  });

  ctx.luckysheetfile = ctx.luckysheetfile.filter((sheet) => sheet.id !== "b");
  core.observeWorkbook(ctx.luckysheetfile, "user");
  assert.deepEqual(events.shift(), { event: "sheetDeleted", id: "b", name: "Résultats" });
  assert.deepEqual(events.shift(), {
    event: "values", subscription, ref: "Résultats!A1", values: null,
    error: "Unknown sheet: Résultats", source: "user",
  });
  await nextTurn();
  assert.deepEqual(events, [{ event: "change" }]);
});

test("« change » seulement pour une modification du contenu par l'utilisateur", async () => {
  const ctx = createWorkbookContext();
  const core = createCore(ctx);
  const events = [];
  core.listen("window", (event) => events.push(event.event));
  core.observeWorkbook(ctx.luckysheetfile, "user");

  // Sélection ou défilement seulement.
  ctx.luckysheetfile = ctx.luckysheetfile.map((sheet) => ({ ...sheet, scrollTop: 40 }));
  core.observeWorkbook(ctx.luckysheetfile, "user");
  // Resynchronisation après des écritures de l'hôte.
  ctx.luckysheetfile = ctx.luckysheetfile.map((sheet) => ({ ...sheet, data: sheet.data.slice() }));
  core.observeWorkbook(ctx.luckysheetfile, "sync");
  await nextTurn();
  assert.deepEqual(events, []);

  ctx.luckysheetfile = ctx.luckysheetfile.map((sheet) => ({ ...sheet, data: sheet.data.slice() }));
  core.observeWorkbook(ctx.luckysheetfile, "user");
  core.observeWorkbook(ctx.luckysheetfile.map((sheet) => ({ ...sheet, config: {} })), "user");
  await nextTurn();
  assert.deepEqual(events, ["change"]);
});
