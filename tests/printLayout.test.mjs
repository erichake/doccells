import assert from "node:assert/strict";
import test from "node:test";
import {
  columnToName,
  createBorderMap,
  createPrintLayout,
  getCellDisplayText,
  getCellFontFamily,
  getCellStyle,
  getPrintableRange,
} from "../src/features/printing/printLayout.js";

test("detects the used range from cells and merged cells", () => {
  const sheet = {
    data: [[{ v: "Title", m: "Title" }], [], [null, null, { v: 12, m: "12" }]],
    config: { merge: { A1_B1: { r: 0, c: 0, rs: 1, cs: 4 } } },
  };
  assert.deepEqual(getPrintableRange(sheet), {
    row: [0, 2],
    column: [0, 3],
  });
});

test("fit-to-page produces one page and fit-to-width keeps vertical pages", () => {
  const data = Array.from({ length: 120 }, () =>
    Array.from({ length: 12 }, () => ({ v: "x", m: "x" })),
  );
  const sheet = { data, config: {} };
  const fitPage = createPrintLayout(sheet, null, {
    paperSize: "A4",
    orientation: "portrait",
    margins: "normal",
    scale: "fitPage",
  });
  const fitWidth = createPrintLayout(sheet, null, {
    paperSize: "A4",
    orientation: "portrait",
    margins: "normal",
    scale: "fitWidth",
  });

  assert.equal(fitPage.pages.length, 1);
  assert.ok(fitPage.scale < fitWidth.scale);
  assert.ok(fitWidth.pages.length > 1);
  assert.equal(fitWidth.pages[0].columns.length, 12);
});

test("selection, hidden dimensions and display values are respected", () => {
  const sheet = {
    data: Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => ({ v: true, m: "Oui" })),
    ),
    config: {
      rowhidden: { 2: 0 },
      colhidden: { 3: 0 },
    },
  };
  const layout = createPrintLayout(
    sheet,
    { row: [1, 3], column: [2, 4] },
    { scale: "fitWidth", paperSize: "A4", margins: "normal" },
  );

  assert.deepEqual(layout.pages[0].rows, [1, 3]);
  assert.deepEqual(layout.pages[0].columns, [2, 4]);
  assert.equal(getCellDisplayText(sheet.data[0][0]), "Oui");
  assert.equal(columnToName(27), "AB");
});

test("gridline toggles never use a border shorthand that can erase explicit sides", () => {
  const withoutGridlines = getCellStyle({ v: "Total" }, false);
  const withGridlines = getCellStyle({ v: "Total" }, true);
  const borders = createBorderMap([
    {
      rangeType: "cell",
      value: {
        row_index: 2,
        col_index: 1,
        l: { style: 1, color: "#123456" },
        b: { style: 8, color: "#654321" },
      },
    },
  ]);
  const withoutGridlinesAndBorders = {
    ...withoutGridlines,
    ...borders.get("2_1"),
  };
  const withGridlinesAndBorders = {
    ...withGridlines,
    ...borders.get("2_1"),
  };

  assert.equal("border" in withoutGridlines, false);
  assert.equal("border" in withGridlines, false);
  assert.equal(withoutGridlinesAndBorders.borderLeft, "1px solid #123456");
  assert.equal(withoutGridlinesAndBorders.borderBottom, "2px solid #654321");
  assert.equal(withGridlinesAndBorders.borderLeft, "1px solid #123456");
  assert.equal(withGridlinesAndBorders.borderBottom, "2px solid #654321");
  assert.equal(withGridlinesAndBorders.borderTop, "1px solid #d7dce2");
});

test("print fonts use FortuneSheet family identifiers and point sizes", () => {
  const defaultStyle = getCellStyle({ v: "Arial" }, true);
  const timesStyle = getCellStyle({ v: "Times", ff: 1, fs: 12 }, true);
  const namedStyle = getCellStyle({ v: "Named", ff: "Trebuchet MS", fs: "9" }, true);

  assert.match(defaultStyle.fontFamily, /^Arial,/);
  assert.equal(defaultStyle.fontSize, "10pt");
  assert.match(timesStyle.fontFamily, /^"Times New Roman",/);
  assert.equal(timesStyle.fontSize, "12pt");
  assert.match(namedStyle.fontFamily, /^"Trebuchet MS",/);
  assert.equal(namedStyle.fontSize, "9pt");
  assert.match(getCellFontFamily("0"), /^Arial,/);
});

test("background colors are printable by default and can be disabled", () => {
  const cell = { v: "Header", bg: "#92d050" };

  assert.equal(getCellStyle(cell, false).backgroundColor, "#92d050");
  assert.equal(
    getCellStyle(cell, false, false).backgroundColor,
    "transparent",
  );
});

test("fit scaling is applied directly to cell typography", () => {
  const scaled = getCellStyle({ v: "Header", fs: 12 }, true, true, 0.5);

  assert.equal(scaled.fontSize, "6pt");
});
