import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import {
  drawSparkline,
  parseSparklineFormula,
  resolveSparklineValues,
} from "../src/features/sparklines/sparklineUtils.js";

const require = createRequire(import.meta.url);

test("parses a French Google Sheets sparkline option matrix", () => {
  const result = parseSparklineFormula(
    '=SPARKLINE(B1:B11;{"charttype"\\"column";"color"\\"#4285F4";"negcolor"\\"red"})',
  );
  assert.equal(result.range, "B1:B11");
  assert.deepEqual(result.options, {
    charttype: "column",
    color: "#4285F4",
    negcolor: "red",
  });
});

test("parses FortuneSheet's canonicalized French matrix", () => {
  const result = parseSparklineFormula(
    '=SPARKLINE(B1:B11,{"charttype"\\"line","color"\\"blue","linewidth"\\2})',
  );
  assert.deepEqual(result.options, {
    charttype: "line",
    color: "blue",
    linewidth: 2,
  });
});

test("parses an English Google Sheets option matrix", () => {
  const result = parseSparklineFormula(
    '=SPARKLINE(B1:B11,{"charttype","bar";"color1","blue";"color2","orange"})',
  );
  assert.deepEqual(result.options, {
    charttype: "bar",
    color1: "blue",
    color2: "orange",
  });
});

test("resolves numeric values and ignores blanks and text", () => {
  const sheets = [{
    id: "sheet-1",
    name: "Feuille 1",
    data: [[{ v: 1 }], [{ v: "2" }], [{ v: "texte" }], null, [{ v: -3 }]],
  }];
  const definition = parseSparklineFormula("=SPARKLINE(A1:A5)");
  assert.deepEqual(resolveSparklineValues(definition, sheets, "sheet-1"), [1, 2, -3]);
});

test("supports zero conversion for empty and non-numeric cells", () => {
  const sheets = [{
    id: "sheet-1",
    name: "Feuille 1",
    data: [[{ v: 1 }], [null], [{ v: "texte" }], [{ v: " " }], [{ v: -3 }]],
  }];
  const definition = parseSparklineFormula(
    '=SPARKLINE(A1:A5;{"empty"\\"zero";"nan"\\"convert"})',
  );
  assert.deepEqual(resolveSparklineValues(definition, sheets, "sheet-1"), [1, 0, 0, 0, -3]);
});

test("applies rtl and horizontal bounds while drawing", () => {
  const operations = [];
  const context = {
    save() {},
    restore() {},
    beginPath() {},
    rect() {},
    clip() {},
    stroke() {},
    moveTo(x, y) { operations.push(["moveTo", x, y]); },
    lineTo(x, y) { operations.push(["lineTo", x, y]); },
  };
  drawSparkline(
    context,
    { startX: 0, startY: 0, endX: 108, endY: 26 },
    [1, 2, 3],
    { rtl: true, xmin: -1, xmax: 3, ymin: 0, ymax: 4 },
  );
  assert.deepEqual(operations.map((entry) => entry[1]), [29, 54, 79]);
  assert.ok(operations[0][2] < operations[2][2], "rtl should draw the last value first");
});

test("keeps first and last column colors attached to the data in rtl mode", () => {
  const fills = [];
  const context = {
    fillStyle: "",
    save() {},
    restore() {},
    beginPath() {},
    rect() {},
    clip() {},
    fillRect(x) { fills.push({ x, color: this.fillStyle }); },
  };
  drawSparkline(
    context,
    { startX: 0, startY: 0, endX: 108, endY: 26 },
    [1, 2, -3],
    {
      charttype: "column",
      color: "blue",
      negcolor: "red",
      firstcolor: "green",
      lastcolor: "purple",
      rtl: true,
    },
  );
  assert.deepEqual(fills.map((fill) => fill.color), ["purple", "blue", "green"]);
  assert.ok(fills[0].x < fills[2].x);
});

test("provides localized autocomplete help in every supported locale", () => {
  const locales = ["en", "fr", "es", "pt", "de", "el", "it", "nl", "ru", "hi", "zh", "zh_tw"];
  for (const locale of locales) {
    const definition = require(`../scripts/${locale}-locale.cjs`).functionlist.find(
      (item) => item.n === "SPARKLINE",
    );
    assert.ok(definition, `SPARKLINE missing from ${locale}`);
    assert.deepEqual(definition.m, [1, 2]);
    assert.equal(definition.p.length, 2);
    assert.ok(definition.d.length > 5);
    assert.equal(definition.p[1].helpHref, `sparkline/${locale}.html`);
  }

  const french = require("../scripts/fr-locale.cjs").functionlist.find(
    (item) => item.n === "SPARKLINE",
  );
  assert.equal(french.p[0].name, "données");
  assert.match(french.d, /graphique miniature/i);
  assert.match(french.p[1].detail, /xmin, xmax/);
  assert.doesNotMatch(french.p[1].detail, /\.md\b/);
  assert.equal(french.p[1].helpHref, "sparkline/fr.html");
  assert.equal(french.p[1].helpLabel, "documentation SPARKLINE");
});

test("renders the SPARKLINE documentation reference as a link", async () => {
  const reactPatch = await readFile(
    new URL("../scripts/patch-fortune-react.cjs", import.meta.url),
    "utf8",
  );
  assert.match(reactPatch, /className: "dc-formula-help-link"/);
  assert.match(reactPatch, /href: param\.helpHref/);
  assert.match(reactPatch, /param\.helpLabel/);
  assert.match(reactPatch, /target: "_blank"/);
});

test("provides one localized SPARKLINE page per supported locale", async () => {
  const locales = ["en", "fr", "es", "pt", "de", "el", "it", "nl", "ru", "hi", "zh", "zh_tw"];
  for (const locale of locales) {
    const page = await readFile(
      new URL(`../public/sparkline/${locale}.html`, import.meta.url),
      "utf8",
    );
    assert.match(page, new RegExp(`data-locale="${locale}"`));
    assert.match(page, /href="sparkline\.css"/);
    assert.match(page, /src="sparkline-doc\.js"/);
  }

  const sharedScript = await readFile(
    new URL("../public/sparkline/sparkline-doc.js", import.meta.url),
    "utf8",
  );
  const sharedStyles = await readFile(
    new URL("../public/sparkline/sparkline.css", import.meta.url),
    "utf8",
  );
  for (const locale of locales) assert.match(sharedScript, new RegExp(`\\b${locale}: \\{`));
  assert.match(sharedStyles, /\.masthead/);
  assert.match(sharedStyles, /\.code-card/);
});

test("documents every supported sparkline option with French syntax", async () => {
  const documentation = await readFile(
    new URL("../public/sparkline/sparkline-doc.js", import.meta.url),
    "utf8",
  );
  for (const option of [
    "charttype", "empty", "nan", "rtl", "color", "linewidth", "xmin", "xmax",
    "ymin", "ymax", "max", "color1", "color2", "negcolor", "lowcolor",
    "highcolor", "firstcolor", "lastcolor", "axis", "axiscolor",
  ]) {
    assert.match(documentation, new RegExp(`\\b${option}\\b`), `${option} is undocumented`);
  }
  assert.match(documentation, /\["charttype", '\"column\"'\]/);
});

test("FortuneSheet evaluates a canonical sparkline with options", async () => {
  const { defaultContext, execfunction, FormulaCache } = await import("@fortune-sheet/core");
  const context = defaultContext({});
  context.currentSheetId = "sheet-1";
  context.calculateSheetId = "sheet-1";
  context.luckysheetfile = [{
    id: "sheet-1",
    name: "Feuille 1",
    data: [[{ v: 1, ct: { t: "n" } }], [{ v: 2, ct: { t: "n" } }]],
  }];
  context.formulaCache = new FormulaCache();

  const formula = '=SPARKLINE(A1:A2,{"charttype"\\"line","color"\\"blue"})';
  const [success, value, storedFormula] = execfunction(
    context,
    formula,
    0,
    1,
    "sheet-1",
  );
  assert.equal(success, true);
  assert.equal(value, "");
  assert.equal(storedFormula, formula);
});
