import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import JSZip from "jszip";
import {
  applyDataValidation,
  createCheckboxRule,
  createDropdownRule,
  getSelectedRanges,
  toExcelDataValidation,
} from "../src/features/dataValidation/dataValidationUtils.js";
import { normalizeImportedWorkbook } from "../src/features/excelImport/normalizeImportedWorkbook.js";
import { FortuneSheetCelldata } from "../src/lib/FortuneSheetExcel/ToFortuneSheet/FortuneCell.js";
import { Element } from "../src/lib/FortuneSheetExcel/ToFortuneSheet/ReadXml.js";
import {
  getExcelCheckboxStyleIndexes,
  patchWorkbookWithNativeCheckboxes,
} from "../src/features/dataValidation/excelCheckboxOoxml.js";

test("normalizes the current FortuneSheet selection", () => {
  assert.deepEqual(
    getSelectedRanges([{ row: [4, 2], column: [3, 3] }]),
    [{ row: [2, 4], column: [3, 3] }],
  );
});

test("inserts initialized checkboxes without losing existing cell formatting", () => {
  const result = applyDataValidation(
    {
      celldata: [{ r: 1, c: 1, v: { bg: "#fff000", v: "old" } }],
      dataVerification: {},
    },
    [{ row: [1, 2], column: [1, 1] }],
    createCheckboxRule(),
    { initializeCheckboxes: true },
  );

  assert.equal(result.dataVerification["1_1"].type, "checkbox");
  assert.equal(result.dataVerification["2_1"].value2, false);
  assert.deepEqual(
    result.celldata.find((cell) => cell.r === 1 && cell.c === 1).v,
    { bg: "#fff000", v: false, m: "FALSE" },
  );
});

test("creates dropdown rules and Excel list validations", () => {
  const rule = createDropdownRule(["À faire", "Terminé"]);
  assert.equal(rule.value1, "À faire,Terminé");
  assert.deepEqual(toExcelDataValidation(rule), {
    type: "list",
    allowBlank: true,
    showErrorMessage: true,
    errorStyle: "error",
    formulae: ['"À faire,Terminé"'],
  });
});

test("exports checkboxes as plain booleans without a fake dropdown", () => {
  assert.equal(toExcelDataValidation(createCheckboxRule()), null);
});

test("patched validation controls notify the formula dependency engine", async () => {
  const coreBundle = await readFile(
    new URL("../node_modules/@fortune-sheet/core/dist/index.js", import.meta.url),
    "utf8",
  );
  const checkboxChange = coreBundle.slice(
    coreBundle.indexOf("function checkboxChange"),
    coreBundle.indexOf("function getFailureText"),
  );
  const dropdownChange = coreBundle.slice(
    coreBundle.indexOf("function setDropcownValue"),
    coreBundle.indexOf("function confirmMessage"),
  );

  assert.match(
    checkboxChange,
    /execFunctionGroup\(ctx, r, c, value\);\s+setCellValue\(ctx, r, c, d, value\);/,
  );
  assert.match(
    dropdownChange,
    /execFunctionGroup\(ctx, rowIndex, colIndex, value\);\s+setCellValue\(ctx, rowIndex, colIndex, d, value\);/,
  );
});

test("restores exported checkbox booleans and dependent formula results", () => {
  const checkboxRules = {
    "0_0": { ...createCheckboxRule(), checked: true },
    "1_0": createCheckboxRule(),
  };
  const metadata = JSON.stringify({
    version: 1,
    sheets: [{
      index: 0,
      name: "Feuille1",
      customCharts: [],
      dataVerification: checkboxRules,
    }],
  });
  const imported = normalizeImportedWorkbook(
    [
      {
        name: "Feuille1",
        celldata: [
          { r: 0, c: 0, v: { v: "1" } },
          { r: 0, c: 1, v: { f: "=A1", v: "1" } },
          { r: 1, c: 0, v: { v: "0" } },
          { r: 1, c: 1, v: { f: "=A2", v: "0" } },
        ],
        config: {},
      },
      {
        name: "__DOCCELLS_METADATA__",
        celldata: [{ r: 0, c: 0, v: { v: metadata } }],
        config: {},
      },
    ],
    { sheetPrefix: "Feuille", definedNames: [] },
  );
  const values = new Map(
    imported.sheets[0].celldata.map((cell) => [
      `${cell.r}_${cell.c}`,
      cell.v,
    ]),
  );

  assert.equal(values.get("0_0").v, true);
  assert.equal(values.get("1_0").v, false);
  assert.equal(values.get("0_1").v, true);
  assert.equal(values.get("0_1").m, "TRUE");
  assert.equal(values.get("1_1").v, false);
  assert.equal(values.get("1_1").m, "FALSE");
});

test("imports XLSX boolean cells as TRUE/FALSE instead of 1/0", () => {
  const styles = {
    cellXfs: [],
    cellStyleXfs: [],
    cellStyles: [],
    fonts: [],
    fills: [],
    borders: [],
    numfmts: [],
    clrScheme: [],
  };
  const createCell = (value) =>
    new FortuneSheetCelldata(
      new Element(`<c r="A1" t="b"><v>${value}</v></c>`),
      styles,
      [],
      [],
      "",
      null,
    ).v;

  assert.deepEqual(
    { v: createCell("1").v, m: createCell("1").m },
    { v: true, m: "TRUE" },
  );
  assert.deepEqual(
    { v: createCell("0").v, m: createCell("0").m },
    { v: false, m: "FALSE" },
  );
});

test("recognizes Excel native checkbox styles", () => {
  const files = {
    "xl/featurePropertyBag/featurePropertyBag.xml":
      `<FeaturePropertyBags>` +
      `<bag type="Checkbox"/>` +
      `<bag type="XFControls"><bagId k="CellControl">0</bagId></bag>` +
      `<bag type="XFComplement"><bagId k="XFControls">1</bagId></bag>` +
      `<bag type="XFComplements"><a><bagId>2</bagId></a></bag>` +
      `</FeaturePropertyBags>`,
  };
  const cellXfs = [
    { elementString: `<xf/>` },
    {
      elementString:
        `<xf><extLst><ext>` +
        `<xfpb:xfComplement i="0"/>` +
        `</ext></extLst></xf>`,
    },
  ];

  assert.deepEqual(
    Array.from(getExcelCheckboxStyleIndexes(files, cellXfs)),
    [1],
  );
});

test("writes Excel native checkbox controls while preserving base styles", async () => {
  const zip = new JSZip();
  zip.file(
    "xl/styles.xml",
    `<styleSheet><cellXfs count="2">` +
      `<xf numFmtId="0" fillId="0"/>` +
      `<xf numFmtId="0" fillId="2" applyFill="1"/>` +
      `</cellXfs></styleSheet>`,
  );
  zip.file(
    "xl/worksheets/sheet1.xml",
    `<worksheet><sheetData><row r="1">` +
      `<c r="A1" s="1" t="b"><v>1</v></c>` +
      `<c r="A2" t="b"><v>0</v></c>` +
      `</row></sheetData></worksheet>`,
  );
  zip.file(
    "[Content_Types].xml",
    `<Types></Types>`,
  );
  zip.file(
    "xl/_rels/workbook.xml.rels",
    `<Relationships></Relationships>`,
  );
  const input = await zip.generateAsync({ type: "arraybuffer" });
  const rule = createCheckboxRule();
  const output = await patchWorkbookWithNativeCheckboxes(input, [{
    dataVerification: { "0_0": rule, "1_0": rule },
  }]);
  const patched = await JSZip.loadAsync(output);
  const sheetXml = await patched
    .file("xl/worksheets/sheet1.xml")
    .async("string");
  const stylesXml = await patched.file("xl/styles.xml").async("string");

  assert.match(sheetXml, /<c r="A1" s="2" t="b">/);
  assert.match(sheetXml, /<c s="3" r="A2" t="b">/);
  assert.match(
    stylesXml,
    /<xf numFmtId="0" fillId="2" applyFill="1"><extLst>/,
  );
  assert.match(stylesXml, /<cellXfs count="4">/);
  assert.ok(patched.file("xl/featurePropertyBag/featurePropertyBag.xml"));
});
