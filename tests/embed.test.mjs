// Mode intégré (EMBED.md) : références, valeurs transmises et cœur partagé
// par window.docCells et le protocole postMessage, sur un vrai contexte
// FortuneSheet.
import assert from "node:assert/strict";
import test from "node:test";
import { defaultContext, setFormulaCellInfoMap } from "@fortune-sheet/core";
import "../src/features/recalc/installFormulaEngine.js";
import {
  applyHostValueUpdates,
  applyLiveCellUpdates,
  readHostDependencies,
  readHostNames,
  recalculateWorkbook,
} from "../src/features/liveUpdate/liveCellUpdates.js";
import { replaceHostValues } from "../src/features/recalc/hostValues.js";
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

test("valeurs : un nombre saisi au clavier (texte de type n) est un nombre", () => {
  assert.equal(toPublicValue({ v: "3", m: "3", ct: { fa: "General", t: "n" } }), 3);
  assert.equal(toPublicValue({ v: "-2.5e3", ct: { t: "n" } }), -2500);
  assert.deepEqual(toPublicValue({ v: "3", m: "3,00", ct: { t: "n" } }, true), { v: 3, m: "3,00" });
  assert.equal(toPublicValue({ v: "3", ct: { t: "s" } }), "3");
  assert.equal(toPublicValue({ v: "abc", ct: { t: "n" } }), "abc");
  assert.equal(toPublicValue({ v: "", ct: { t: "n" } }), "");
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
    writeHostValues: (updates) => applyHostValueUpdates(ctx, updates),
    readHostNames,
    readHostDependencies,
    loadWorkbook: async () => {},
    saveWorkbook: () => [],
    setPicking: (on) => (ctx.picking = on),
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

// Classeur qui lit des valeurs d'hôte : Feuille1!C1 = GEO("AB")*2,
// C2 = C1+1, C3 = GEO(A1) (argument calculé), C4 = GEO("absent"),
// C5 = GEO("t")&"!" ; Autre!A1 = Feuille1!C2*10.
const createHostWorkbookContext = () => {
  replaceHostValues([]);
  const ctx = defaultContext({});
  const grid = () => Array.from({ length: 10 }, () => new Array(5).fill(null));
  const main = grid();
  main[0][0] = { v: "AB", m: "AB", ct: { fa: "General", t: "g" } };
  const formulas = ['=GEO("AB")*2', "=C1+1", "=GEO(A1)", '=GEO("absent")', '=GEO("t")&"!"'];
  formulas.forEach((f, r) => {
    main[r][2] = { f, v: 0, m: "0" };
  });
  const other = grid();
  other[0][0] = { f: "=Feuille1!C2*10", v: 0, m: "0" };
  const mainChain = formulas.map((_, r) => ({ r, c: 2, id: "a" }));
  const otherChain = [{ r: 0, c: 0, id: "b" }];
  ctx.luckysheetfile = [
    { name: "Feuille1", id: "a", order: 0, status: 1, data: main, calcChain: mainChain, config: {} },
    { name: "Autre", id: "b", order: 1, status: 0, data: other, calcChain: otherChain, config: {} },
  ];
  ctx.currentSheetId = "a";
  setFormulaCellInfoMap(ctx, mainChain, main);
  setFormulaCellInfoMap(ctx, otherChain, other);
  recalculateWorkbook(ctx);
  return ctx;
};

test("GEO : valeurs de l'hôte, nom absent, argument calculé", () => {
  const ctx = createHostWorkbookContext();
  const core = createCore(ctx);
  const values = () => core.getValues("Feuille1!C1:C5").map((row) => row[0]);
  // Rien de fourni : #N/A ; argument qui n'est pas un texte écrit : #VALUE!.
  // (FortuneSheet ne propage pas l'erreur : #N/A+1 donne #VALUE!.)
  assert.deepEqual(values(), [
    { error: "#N/A" }, { error: "#VALUE!" }, { error: "#VALUE!" }, { error: "#N/A" }, { error: "#N/A" },
  ]);

  const column = core.subscribe("Feuille1!C1:C2", {}, "window");
  const other = core.subscribe("Autre!A1", {}, "window");
  const result = core.setHostValues([{ name: "AB", v: 3 }, { name: "t", v: "texte" }], "window");
  assert.equal(result.recalculated, 4);
  assert.deepEqual(result.values, [
    { subscription: column.subscription, ref: "Feuille1!C1:C2", values: [[6], [7]] },
    { subscription: other.subscription, ref: "Autre!A1", values: [[70]] },
  ]);
  assert.deepEqual(values(), [6, 7, { error: "#VALUE!" }, { error: "#N/A" }, "texte!"]);

  // Même valeur : rien n'est recalculé.
  assert.equal(core.setHostValues([{ name: "AB", v: 3 }], "window").recalculated, 0);
  core.setHostValues([{ name: "absent", v: true }], "window");
  assert.equal(values()[3], true);
  // Valeur indéfinie (ou nombre non fini) : #N/A.
  core.setHostValues([{ name: "AB", v: null }], "window");
  assert.deepEqual(values().slice(0, 2), [{ error: "#N/A" }, { error: "#VALUE!" }]);
  core.setHostValues([{ name: "AB", v: 1 }], "window");
  core.setHostValues([{ name: "AB", v: Number.NaN }], "window");
  assert.deepEqual(values()[0], { error: "#N/A" });
});

test("GEO et setCellValues : listes (points de DocGeo)", () => {
  const ctx = createHostWorkbookContext();
  const core = createCore(ctx);
  const result = core.setHostValues([{ name: "AB", v: [2, 1] }], "window");
  assert.equal(result.recalculated, 3);
  // C1 = GEO("AB")*2, C2 = C1+1 (complexes), Autre!A1 = C2*10.
  assert.deepEqual(core.getValues("Feuille1!C1:C2"), [[[4, 2]], [[5, 2]]]);
  assert.deepEqual(core.getValues("Autre!A1", { display: true }), [[{ v: [50, 20], m: "[50, 20]" }]]);
  // Même liste : rien n'est recalculé ; liste invalide : requête refusée.
  assert.equal(core.setHostValues([{ name: "AB", v: [2, 1] }], "window").recalculated, 0);
  assert.throws(() => core.setHostValues([{ name: "AB", v: [2, "1"] }], "window"), /Invalid request/);
  assert.throws(() => core.setHostValues([{ name: "AB", v: [2, Number.NaN] }], "window"), /Invalid request/);

  core.setCellValues([{ ref: "Feuille1!B1", v: [[1, 2], [3]] }], "window");
  assert.deepEqual(core.getValues("Feuille1!B1", { display: true }), [[{ v: [[1, 2], [3]], m: "[[1, 2], [3]]" }]]);
});

test("GEO : les autres clients reçoivent les valeurs en événements", () => {
  const ctx = createHostWorkbookContext();
  const core = createCore(ctx);
  const events = [];
  core.listen("message", (event) => events.push(event));
  const theirs = core.subscribe("Autre!A1", {}, "message");
  core.setHostValues([{ name: "AB", v: 1 }], "window");
  assert.deepEqual(events, [
    { event: "values", subscription: theirs.subscription, ref: "Autre!A1", values: [[30]], source: "host" },
  ]);
});

test("GEO : setHostValues refuse une requête invalide sans rien écrire", () => {
  const ctx = createHostWorkbookContext();
  const core = createCore(ctx);
  assert.throws(() => core.setHostValues({}, "window"), /Invalid request/);
  assert.throws(() => core.setHostValues([{ name: 3, v: 1 }], "window"), /Invalid request/);
  assert.throws(
    () => core.setHostValues([{ name: "AB", v: 1 }, { name: "t", v: { x: 1 } }], "window"),
    /Invalid request/,
  );
  assert.deepEqual(core.getValues("Feuille1!C1"), [[{ error: "#N/A" }]]);
});

test("GEO : noms lus par le classeur et dépendances d'une plage", () => {
  const ctx = createHostWorkbookContext();
  const core = createCore(ctx);
  assert.deepEqual(core.hostNames(), ["AB", "absent", "t"]);
  assert.deepEqual(core.hostDependencies("Feuille1!C1"), ["AB"]);
  // Indirectement : C2 lit C1 ; Autre!A1 lit C2.
  assert.deepEqual(core.hostDependencies("Feuille1!C2"), ["AB"]);
  assert.deepEqual(core.hostDependencies("Autre!A1"), ["AB"]);
  assert.deepEqual(core.hostDependencies("Feuille1!A1:C5"), ["AB", "absent", "t"]);
  assert.deepEqual(core.hostDependencies("Feuille1!A1:B10"), []);
  assert.throws(() => core.hostDependencies("Inconnue!A1"), /Unknown sheet/);
  assert.throws(() => core.hostDependencies("A1"), /Invalid reference/);
});

test("GEO : hostNamesChanged quand l'utilisateur ajoute ou retire un nom", () => {
  const ctx = createHostWorkbookContext();
  const core = createCore(ctx);
  const events = [];
  core.listen("window", (event) => events.push(event));
  // Le premier état observé sert de référence, sans événement.
  core.observeWorkbook(ctx.luckysheetfile, "user");
  core.observeWorkbook(ctx.luckysheetfile, "user");
  assert.deepEqual(events, []);

  // Formule saisie dans D1 : un nouveau nom.
  const main = ctx.luckysheetfile[0];
  main.data[0][3] = { f: '=GEO("CD")+GEO("AB")', v: 0 };
  main.calcChain.push({ r: 0, c: 3, id: "a" });
  setFormulaCellInfoMap(ctx, [{ r: 0, c: 3, id: "a" }], main.data);
  core.observeWorkbook(ctx.luckysheetfile, "user");
  assert.deepEqual(events, [{ event: "hostNamesChanged", names: ["AB", "CD", "absent", "t"] }]);
  // Rien de changé : pas d'événement.
  core.observeWorkbook(ctx.luckysheetfile, "user");
  assert.equal(events.length, 1);
  core.setHostValues([{ name: "CD", v: 10 }, { name: "AB", v: 1 }], "window");
  assert.deepEqual(core.getValues("Feuille1!D1"), [[11]]);
});

test("désignation : setPicking ouvert et fermé par l'hôte, pick à tous les clients", () => {
  const ctx = createWorkbookContext();
  const core = createCore(ctx);
  assert.equal(core.setPicking(true), null);
  assert.equal(ctx.picking, true);
  assert.throws(() => core.setPicking("yes"), /Invalid request/);
  assert.equal(ctx.picking, true);
  const events = [];
  core.listen("window", (event) => events.push(event));
  core.listen("message", (event) => events.push(event));
  core.notifyPick("Feuille1!A1:A3", false);
  assert.deepEqual(events, [
    { event: "pick", ref: "Feuille1!A1:A3", done: false },
    { event: "pick", ref: "Feuille1!A1:A3", done: false },
  ]);
  core.setPicking(false);
  assert.equal(ctx.picking, false);
});
