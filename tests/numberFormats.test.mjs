import assert from "node:assert/strict";
import test from "node:test";
import { update as format } from "@fortune-sheet/core";

// scripts/patch-fortune-format-engine.cjs
const DATE = 43068.625; // 29/11/2017 15:00

test("dates separated by points", () => {
  assert.equal(format("dd.MM.yyyy", DATE), "29.11.2017");
  assert.equal(format("dd.MM.yyyy hh:mm", DATE), "29.11.2017 15:00");
  assert.equal(format("dd.mm.yy", DATE), "29.11.17");
  assert.equal(format("d. mmmm yyyy", DATE), "29. November 2017");
  assert.equal(format("hh.mm", DATE), "15.00");
});

test("decimals of the seconds are kept", () => {
  assert.equal(format("mm:ss.00", 43068 + 1.5 / 86400), "00:01.50");
  assert.equal(format("[h]:mm:ss", 1.5), "36:00:00");
});

test("times without a date", () => {
  assert.equal(format("hh:mm", 0.5), "12:00");
  assert.equal(format("hh:mm", 14.5 / 24), "14:30");
  assert.equal(format("hh:mm AM/PM", 14.5 / 24), "02:30 PM");
  assert.equal(format("hh:mm:ss", 1 / 86400), "00:00:01");
  assert.equal(format("hh:mm", 0), "00:00");
  assert.equal(format("yyyy-MM-dd", 1), "1900-01-01");
  for (let m = 0; m < 1440; m += 1)
    assert.equal(
      format("hh:mm", m / 1440),
      `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`,
    );
});

test("currency signs are literal text", () => {
  assert.equal(format("₽0.00", 1200.09), "₽1200.09");
  assert.equal(format("₽(0.00)", 1200.09), "₽(1200.09)");
  assert.equal(format("#,##0.00 ₺", 1200.09), "1,200.09 ₺");
  assert.equal(format("0.00 €", 2.5), "2.50 €");
  assert.throws(() => format("0.00 Ж", 2.5), /unrecognized character/);
});
