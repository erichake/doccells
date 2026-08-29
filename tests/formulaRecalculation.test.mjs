import assert from "node:assert/strict";
import test from "node:test";
import { calculateFormulaResultUpdates } from "../src/features/excelImport/importedFormulaResults.js";

test("recalculates formulas after a date cell changes", () => {
  const sheet = {
    name: "Feuille1",
    id: "0",
    data: [
      [],
      [, { v: 46235, m: "01/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } }],
      [
        ,
        { v: 46236, m: "02/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
        { f: "=B3-B4", v: -1, m: "-1", VF: { f: "=B3-B4", v: -1 } },
      ],
      [
        ,
        { v: 46235, m: "01/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
        { f: "=B4-B5", v: -1, m: "-1", VF: { f: "=B4-B5", v: -1 } },
      ],
      [
        ,
        { v: 46238, m: "04/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
      ],
    ],
  };

  const updates = calculateFormulaResultUpdates([sheet]);

  assert.deepEqual(
    updates.map((update) => ({
      row: update.row,
      column: update.column,
      value: update.value.v,
      display: update.value.m,
    })),
    [
      { row: 2, column: 2, value: 1, display: "1" },
      { row: 3, column: 2, value: -3, display: "-3" },
    ],
  );
  assert.equal(updates[0].value.VF.v, 1);
  assert.equal(updates[1].value.VF.v, -3);
});

test("recalculates formula chains without leaving stale formula caches", () => {
  const sheet = {
    name: "Feuille1",
    id: "0",
    data: [
      [],
      [
        ,
        { v: 46235, m: "01/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
        { f: "=B2-B3", v: -1, m: "-1", VF: { f: "=B2-B3", v: -1 } },
        { f: "=C2-C3", v: 0, m: "0", VF: { f: "=C2-C3", v: 0 } },
      ],
      [
        ,
        { v: 46236, m: "02/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
        { f: "=B3-B4", v: -1, m: "-1", VF: { f: "=B3-B4", v: -1 } },
        { f: "=C3-C4", v: 0, m: "0", VF: { f: "=C3-C4", v: 0 } },
      ],
      [
        ,
        { v: 46265, m: "31/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
        { f: "=B4-B5", v: -1, m: "-1", VF: { f: "=B4-B5", v: -1 } },
        { f: "=C4-C5", v: 0, m: "0", VF: { f: "=C4-C5", v: 0 } },
      ],
      [
        ,
        { v: 46238, m: "04/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
        { f: "=B5-B6", v: -1, m: "-1", VF: { f: "=B5-B6", v: -1 } },
        { f: "=C5-C6", v: 0, m: "0", VF: { f: "=C5-C6", v: 0 } },
      ],
      [
        ,
        { v: 46239, m: "05/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
        { f: "=B6-B7", v: -1, m: "-1", VF: { f: "=B6-B7", v: -1 } },
      ],
      [
        ,
        { v: 46240, m: "06/08/2026", ct: { fa: "dd/MM/yyyy", t: "d" } },
      ],
    ],
  };

  const updates = calculateFormulaResultUpdates([sheet]);
  const byCell = new Map(
    updates.map((update) => [`${update.row}_${update.column}`, update.value]),
  );

  assert.equal(byCell.get("2_2").v, -29);
  assert.equal(byCell.get("2_2").VF.v, -29);
  assert.equal(byCell.get("3_2").v, 27);
  assert.equal(byCell.get("3_2").VF.v, 27);
  assert.equal(byCell.get("1_3").v, 28);
  assert.equal(byCell.get("2_3").v, -56);
  assert.equal(byCell.get("3_3").v, 28);
});
