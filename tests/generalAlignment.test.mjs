// Alignement « Général » : sans alignement choisi, un nombre est à droite et
// le reste à gauche, d'après la valeur du moment
// (scripts/patch-fortune-general-alignment.cjs).
import assert from "node:assert/strict";
import test from "node:test";
import { normalizedCellAttr } from "@fortune-sheet/core";
import { chosenHorizontalAlignment } from "../src/features/workbook/excelGeneralAlignment.js";

const LEFT = "1";
const RIGHT = "2";

test("sans alignement choisi : d'après la valeur", () => {
  const ht = (cell) => normalizedCellAttr(cell, "ht");
  assert.equal(ht({ v: 0, m: "0", ct: { fa: "General", t: "n" } }), RIGHT);
  assert.equal(ht({ v: "1.5", m: "1,5", ct: { fa: "General", t: "n" } }), RIGHT);
  assert.equal(ht({ v: 46347, m: "2026-11-21", ct: { fa: "yyyy-MM-dd", t: "d" } }), RIGHT);
  assert.equal(ht({ v: "abc", m: "abc", ct: { fa: "General", t: "g" } }), LEFT);
  assert.equal(ht({ v: [1, 2], m: "[1, 2]", ct: { fa: "General", t: "g" } }), LEFT);
  assert.equal(ht({ v: "#VALUE!", m: "#VALUE!", ct: { fa: "General", t: "e" } }), LEFT);
  // Format Texte : un nombre saisi reste du texte, à gauche.
  assert.equal(ht({ v: "12", m: "12", ct: { fa: "@", t: "s" } }), LEFT);
  assert.equal(ht({}), LEFT);
});

test("alignement automatique stocké (anciens classeurs) : recalculé ; alignement choisi : gardé", () => {
  const ht = (cell) => normalizedCellAttr(cell, "ht");
  // Une formule passée d'un nombre à une erreur ne reste pas à droite.
  assert.equal(ht({ v: "#VALUE!", ct: { t: "e" }, ht: 2, _dcAutoGeneralHt: 1 }), LEFT);
  assert.equal(ht({ v: "abc", ht: 2 }), RIGHT);
  assert.equal(ht({ v: 5, ht: 1 }), LEFT);
  assert.equal(ht({ v: 5, ht: 0 }), "0");
  assert.equal(chosenHorizontalAlignment({ v: 5, ht: 2, _dcAutoGeneralHt: 1 }), undefined);
  assert.equal(chosenHorizontalAlignment({ v: 5, ht: 0 }), 0);
});
