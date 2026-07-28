import assert from "node:assert/strict";
import test from "node:test";
import {
  isValidDefinedName,
  parseDefinedNameReference,
  replaceDefinedNamesInFormula,
  replaceReferenceFunctionsInFormula,
  selectionToDefinedNameReference,
} from "../src/features/definedNames/definedNamesUtils.js";
import { extractExcelDefinedNames } from "../src/features/definedNames/excelDefinedNames.js";
import { applyImportedFormulaResults } from "../src/features/excelImport/importedFormulaResults.js";
import { patchWorkbookWithDefinedNames } from "../src/features/definedNames/definedNamesOoxml.js";
import { getDefinedNamesTexts } from "../src/features/definedNames/definedNamesTexts.js";
import ExcelJS from "exceljs";
import JSZip from "jszip";

test("imports workbook and sheet-scoped Excel names", () => {
  const names = extractExcelDefinedNames(`
    <workbook>
      <definedNames>
        <definedName name="Global">Sheet1!$A$1</definedName>
        <definedName name="Local" localSheetId="1" hidden="1">'Sheet 2'!$B$2</definedName>
      </definedNames>
    </workbook>
  `);
  assert.deepEqual(names, [
    {
      name: "Global",
      refersTo: "Sheet1!$A$1",
      localSheetIndex: null,
      hidden: false,
      comment: "",
    },
    {
      name: "Local",
      refersTo: "'Sheet 2'!$B$2",
      localSheetIndex: 1,
      hidden: true,
      comment: "",
    },
  ]);
});

test("parses and formats absolute rectangular references", () => {
  assert.deepEqual(parseDefinedNameReference("'My Sheet'!$B$2:$D$4"), {
    sheetName: "My Sheet",
    range: {
      row: [1, 3],
      column: [1, 3],
      row_focus: 1,
      column_focus: 1,
    },
  });
  assert.equal(
    selectionToDefinedNameReference("O'Brien", {
      row: [1, 3],
      column: [1, 3],
    }),
    "'O''Brien'!$B$2:$D$4",
  );
});

test("validates Excel-style names", () => {
  assert.equal(isValidDefinedName("Jour_Début"), true);
  assert.equal(isValidDefinedName("A1"), false);
  assert.equal(isValidDefinedName("R1C1"), false);
  assert.equal(isValidDefinedName("1Nom"), false);
});

test("sheet scope overrides workbook scope during formula evaluation", () => {
  const names = [
    { name: "Taux", refersTo: "'Global'!$A$1", scopeSheetId: null },
    { name: "Taux", refersTo: "'Local'!$B$2", scopeSheetId: "1" },
  ];
  assert.equal(
    replaceDefinedNamesInFormula("=Taux*2", names, "0"),
    "='Global'!$A$1*2",
  );
  assert.equal(
    replaceDefinedNamesInFormula("=Taux*2", names, "1"),
    "='Local'!$B$2*2",
  );
});

test("ROW and COLUMN references are evaluated as coordinates", () => {
  assert.equal(
    replaceReferenceFunctionsInFormula(
      '="ROW(A1)"&ROW(K3)&ROW($K$3)&COLUMN(K3)&COLUMN($K$3)&ROW()&COLUMN()',
      4,
      6,
    ),
    '="ROW(A1)"&3&3&11&11&5&7',
  );
});

test("evaluates an accented defined name without changing the stored formula", () => {
  const sheets = [
    {
      name: "1",
      celldata: [
        { r: 23, c: 29, v: { v: 2, m: "2" } },
        { r: 0, c: 0, v: { f: "=Jour_Début+1", v: null } },
      ],
    },
  ];
  applyImportedFormulaResults(sheets, [
    {
      name: "Jour_Début",
      refersTo: "'1'!$AD$24",
      scopeSheetId: null,
    },
  ]);
  assert.equal(sheets[0].celldata[1].v.f, "=Jour_Début+1");
  assert.equal(sheets[0].celldata[1].v.v, 3);
});

test("evaluates a workbook-scoped bare name from another sheet", () => {
  const sheets = [
    {
      name: "Sheet1",
      celldata: [{ r: 1, c: 1, v: { v: 45, m: "45" } }],
    },
    {
      name: "Sheet2",
      celldata: [{ r: 1, c: 1, v: { f: "=toto", v: null } }],
    },
  ];
  applyImportedFormulaResults(sheets, [
    {
      name: "toto",
      refersTo: "'Sheet1'!$B$2",
      scopeSheetId: null,
    },
  ]);
  assert.equal(sheets[1].celldata[0].v.f, "=toto");
  assert.equal(sheets[1].celldata[0].v.v, 45);
});

test("exports workbook and sheet scopes to workbook.xml", async () => {
  const workbook = new ExcelJS.Workbook();
  workbook.addWorksheet("Sheet1");
  const original = await workbook.xlsx.writeBuffer();
  const patched = await patchWorkbookWithDefinedNames(
    original,
    [{ id: "sheet-1", name: "Sheet1" }],
    [
      { name: "Global", refersTo: "'Sheet1'!$A$1", scopeSheetId: null },
      { name: "Local", refersTo: "'Sheet1'!$B$2", scopeSheetId: "sheet-1" },
    ],
  );
  const zip = await JSZip.loadAsync(patched);
  const workbookXml = await zip.file("xl/workbook.xml").async("string");
  assert.match(
    workbookXml,
    /<definedName name="Global">'Sheet1'!\$A\$1<\/definedName>/,
  );
  assert.match(
    workbookXml,
    /<definedName name="Local" localSheetId="0">'Sheet1'!\$B\$2<\/definedName>/,
  );
});

test("provides every defined-name text in every supported locale", () => {
  const locales = [
    "zh-CN",
    "zh-TW",
    "en",
    "fr-FR",
    "es-ES",
    "hi",
    "ru",
    "pt",
    "de",
    "el",
    "it",
    "nl",
  ];
  const expectedKeys = Object.keys(getDefinedNamesTexts("en")).sort();
  locales.forEach((locale) => {
    const texts = getDefinedNamesTexts(locale);
    assert.deepEqual(Object.keys(texts).sort(), expectedKeys, locale);
    expectedKeys.forEach((key) => {
      assert.equal(typeof texts[key], "string", `${locale}.${key}`);
      assert.notEqual(texts[key].trim(), "", `${locale}.${key}`);
    });
  });
});
