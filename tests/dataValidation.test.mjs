import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { deleteSelectedCellText, FormulaCache } from "@fortune-sheet/core";
import JSZip from "jszip";
import {
  applyDataValidation,
  createCheckboxRule,
  createDropdownRangeRule,
  createDropdownRule,
  getDataValidationRulesByCell,
  getDropdownOptions,
  getSelectedRanges,
  isValidDropdownRangeReference,
  requiresExcelDropdownRange,
  shiftDropdownRangeReference,
  toExcelDataValidation,
} from "../src/features/dataValidation/dataValidationUtils.js";
import { getDataValidationTexts } from "../src/features/dataValidation/dataValidationTexts.js";
import { normalizeImportedWorkbook } from "../src/features/excelImport/normalizeImportedWorkbook.js";
import { transformExcelToFortune } from "../src/lib/FortuneSheetExcel/main.js";
import { FortuneSheetCelldata } from "../src/lib/FortuneSheetExcel/ToFortuneSheet/FortuneCell.js";
import { Element } from "../src/lib/FortuneSheetExcel/ToFortuneSheet/ReadXml.js";
import {
  getExcelCheckboxStyleIndexes,
  patchWorkbookWithNativeCheckboxes,
} from "../src/features/dataValidation/excelCheckboxOoxml.js";
import { exportToExcel } from "../src/utils/exportToExcel.js";

test("normalizes the current FortuneSheet selection", () => {
  assert.deepEqual(
    getSelectedRanges([{ row: [4, 2], column: [3, 3] }]),
    [{ row: [2, 4], column: [3, 3] }],
  );
});

test("localizes every dropdown range-mode label", () => {
  const english = getDataValidationTexts("en");
  const locales = [
    "fr-FR",
    "es-ES",
    "de",
    "it",
    "pt",
    "nl",
    "ru",
    "el",
    "hi",
    "zh-CN",
    "zh-TW",
  ];

  locales.forEach((locale) => {
    const texts = getDataValidationTexts(locale);
    assert.notEqual(texts.valuesMode, english.valuesMode, locale);
    assert.notEqual(texts.rangeMode, english.rangeMode, locale);
    assert.notEqual(texts.rangeLabel, english.rangeLabel, locale);
    assert.notEqual(texts.rangePlaceholder, english.rangePlaceholder, locale);
    assert.notEqual(texts.errors.empty, english.errors.empty, locale);
    assert.notEqual(texts.errors.comma, english.errors.comma, locale);
    assert.notEqual(texts.errors.range, english.errors.range, locale);
  });

  const spanish = getDataValidationTexts("es-ES");
  assert.equal(spanish.valuesMode, "Valores");
  assert.equal(spanish.rangeMode, "Desde un rango");
});

test("keeps a formula reference to an empty cell visually empty", () => {
  const formulaCache = new FormulaCache();

  assert.equal(formulaCache.tryGetCellAsNumber(undefined), "");
  assert.equal(formulaCache.tryGetCellAsNumber({ v: null }), "");
  assert.equal(formulaCache.tryGetCellAsNumber({ v: "Option 1" }), "Option 1");
});

test("deleting a range also removes validation rules from empty cells", () => {
  const dropdown = createDropdownRule(["Option 1", "Option 2"]);
  const context = {
    allowEdit: true,
    currentSheetId: "sheet-1",
    config: {},
    luckysheet_select_save: [{
      row: [0, 2],
      column: [0, 2],
      row_focus: 0,
      column_focus: 0,
    }],
    luckysheetfile: [{
      id: "sheet-1",
      data: Array.from({ length: 3 }, () => Array(3).fill(null)),
      dataVerification: {
        "0_1": dropdown,
        "1_1": dropdown,
        "2_1": dropdown,
        "4_1": dropdown,
      },
      hyperlink: {},
    }],
  };

  assert.equal(deleteSelectedCellText(context), "success");
  assert.deepEqual(
    Object.keys(context.luckysheetfile[0].dataVerification),
    ["4_1"],
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

test("normalizes dropdown options and detects lists requiring a helper range", () => {
  const shortRule = createDropdownRule([
    " À faire ",
    "Terminé",
    "À faire",
  ]);
  const longRule = createDropdownRule(
    Array.from({ length: 40 }, (_, index) => `Option ${index + 1}`),
  );
  const quotedRule = createDropdownRule(['Option "spéciale"']);

  assert.deepEqual(getDropdownOptions(shortRule), ["À faire", "Terminé"]);
  assert.equal(requiresExcelDropdownRange(shortRule), false);
  assert.equal(requiresExcelDropdownRange(longRule), true);
  assert.equal(requiresExcelDropdownRange(quotedRule), true);
});

test("preserves a dropdown backed by an Excel cell range", () => {
  const rangeRule = createDropdownRangeRule("='Sources'!$A$1:$A$3");

  assert.deepEqual(toExcelDataValidation(rangeRule), {
    type: "list",
    allowBlank: true,
    showErrorMessage: true,
    errorStyle: "error",
    formulae: ["'Sources'!$A$1:$A$3"],
  });
  assert.equal(isValidDropdownRangeReference("Feuille2!A1:A10"), true);
  assert.equal(
    isValidDropdownRangeReference("'Feuille source'!$B$2:$B$20"),
    true,
  );
  assert.equal(isValidDropdownRangeReference("Feuille2!A0:A10"), false);
  assert.equal(isValidDropdownRangeReference("pas une plage"), false);
});

test("resolves relative and absolute dropdown source references like Excel", () => {
  assert.equal(
    shiftDropdownRangeReference("A1:A10", 5, 0),
    "A6:A15",
  );
  assert.equal(
    shiftDropdownRangeReference("A$1:A$10", 5, 0),
    "A$1:A$10",
  );
  assert.equal(
    shiftDropdownRangeReference("$A1:$A10", 5, 2),
    "$A6:$A15",
  );
  assert.equal(
    shiftDropdownRangeReference("'Source data'!A1:B10", 2, 1),
    "'Source data'!B3:C12",
  );

  const relativeRules = getDataValidationRulesByCell(
    [{ row: [0, 9], column: [2, 2] }],
    createDropdownRangeRule("A1:A10"),
  );
  const absoluteRowRules = getDataValidationRulesByCell(
    [{ row: [0, 9], column: [2, 2] }],
    createDropdownRangeRule("A$1:A$10"),
  );

  assert.equal(relativeRules["5_2"].value1, "A6:A15");
  assert.equal(absoluteRowRules["5_2"].value1, "A$1:A$10");
});

test("exports checkboxes as plain booleans without a fake dropdown", () => {
  assert.equal(toExcelDataValidation(createCheckboxRule()), null);
});

test("exports resolved relative dropdown source ranges", async () => {
  const dataVerification = getDataValidationRulesByCell(
    [{ row: [0, 9], column: [2, 2] }],
    createDropdownRangeRule("A1:A10"),
  );
  const blob = await exportToExcel([
    {
      name: "Feuille1",
      celldata: [],
      dataVerification,
      config: {},
    },
  ], { returnBlob: true });
  const zip = await JSZip.loadAsync(await blob.arrayBuffer());
  const sheetXml = await zip.file("xl/worksheets/sheet1.xml").async("string");

  assert.match(
    sheetXml,
    /sqref="C1"><formula1>A1:A10<\/formula1>/,
  );
  assert.match(
    sheetXml,
    /sqref="C6"><formula1>A6:A15<\/formula1>/,
  );
});

test("patched validation controls notify the formula dependency engine", async () => {
  const coreBundle = await readFile(
    new URL("../node_modules/@fortune-sheet/core/dist/index.js", import.meta.url),
    "utf8",
  );
  const reactBundle = await readFile(
    new URL("../node_modules/@fortune-sheet/react/dist/index.esm.js", import.meta.url),
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
  assert.match(
    coreBundle,
    /dropdownRenderItem\.type\) === "dropdown"/,
  );
  assert.match(
    coreBundle,
    /dropdownBackgroundItem\.type\) === "dropdown"[\s\S]*?doccellsDropdownHoverCell[\s\S]*?"#d3d6da" : "#e8eaed"/,
  );
  assert.match(
    coreBundle,
    /nullDropdownItem\.type\) === "dropdown"[\s\S]*?nullDropdownPillWidth/,
  );
  assert.match(
    coreBundle,
    /dropdownArrowX = endX \+ offsetLeft - 22 \* this\.sheetCtx\.zoomRatio/,
  );
  assert.match(
    coreBundle,
    /if \(clickMode\) \{\s+ctx\.dataVerificationDropDownList = true;/,
  );
  assert.match(
    coreBundle,
    /dropdownHoverCell = getCellRowColumn\([\s\S]*?ctx\.doccellsDropdownHoverCell = dropdownHoverKey;/,
  );
  assert.match(
    coreBundle,
    /tryGetCellAsNumber\(cell\)[\s\S]*?if \(cell == null \|\| isRealNull\(cell\.v\)\) \{\s+return "";/,
  );
  assert.match(
    coreBundle,
    /dropdownTextX = _pos_x \+ 12 \* dropdownTextZoom[\s\S]*?dropdownTextWidth = Math\.max\(0, cellWidth - 44 \* dropdownTextZoom\)[\s\S]*?textBaseline = "middle"/,
  );
  assert.match(
    coreBundle,
    /selectedDataVerification[\s\S]*?delete selectedDataVerification\[""\.concat\(r, "_"\)\.concat\(c\)\]/,
  );
  assert.match(
    coreBundle,
    /dropDownBtn\.style\.width = ""\.concat\(Math\.max\(0, col - col_pre - 10\)/,
  );
  assert.match(
    coreBundle,
    /&& !isRealNull\(value\) && !validateCellData\(/,
  );
  assert.match(
    coreBundle,
    /if \(!cell \|\| isRealNull\(cell\.v\)\)[\s\S]*?var v = isRealNull\(cell\.m\) \? cell\.v : cell\.m;/,
  );
  assert.equal(
    reactBundle.match(/setDataValidation: function setDataValidation/g)?.length,
    1,
  );
  assert.match(
    reactBundle,
    /return setContext\(function \(draftCtx\)[\s\S]*?cellRule = options\.rulesByCell && options\.rulesByCell\[validationKey\] \|\| rule;[\s\S]*?sheet\.dataVerification\[validationKey\] = Object\.assign\(\{\}, cellRule\)/,
  );
  assert.match(
    reactBundle,
    /fortuneApi\.setCellValue\(draftCtx, row, column, rule\.value2, cellInput, \{\}\)/,
  );
  assert.match(
    reactBundle,
    /openDropdownOnFirstPress = draftCtx\.dataVerificationDropDownList === true;[\s\S]*?draftCtx\.dataVerificationDropDownList = true;/,
  );
  assert.match(
    reactBundle,
    /id: "luckysheet-dataVerification-dropdown-btn",\s+onMouseDown: function onMouseDown\(e\)/,
  );
});

test("exports long dropdowns through a hidden helper range", async () => {
  const options = Array.from(
    { length: 40 },
    (_, index) => `Choix numéro ${index + 1}`,
  );
  const blob = await exportToExcel([
    {
      name: "Feuille1",
      celldata: [],
      dataVerification: {
        "0_0": createDropdownRule(options),
      },
      config: {},
    },
  ], { returnBlob: true });
  const exportedBuffer = await blob.arrayBuffer();
  const zip = await JSZip.loadAsync(exportedBuffer);
  const sheetXml = await zip.file("xl/worksheets/sheet1.xml").async("string");
  const workbookXml = await zip.file("xl/workbook.xml").async("string");

  assert.match(
    sheetXml,
    /<formula1>_DocCellsDropdown1<\/formula1>/,
  );
  assert.match(
    workbookXml,
    /<sheet sheetId="2" name="__DOCCELLS_METADATA__" state="veryHidden"/,
  );
  assert.match(
    workbookXml,
    /<definedName name="_DocCellsDropdown1">&apos;__DOCCELLS_METADATA__&apos;!\$B\$1:\$B\$40<\/definedName>/,
  );

  const input = Buffer.from(exportedBuffer);
  input.name = "long-dropdown.xlsx";
  const parsed = await transformExcelToFortune(input);
  const imported = normalizeImportedWorkbook(parsed.sheets, {
    sheetPrefix: "Feuille",
    definedNames: parsed.definedNames,
  });
  assert.equal(
    imported.sheets[0].dataVerification["0_0"].value1,
    options.join(","),
  );
  assert.equal(imported.definedNames.length, 0);
});

test("imports an Excel dropdown backed by a cell range", async () => {
  const { default: ExcelJS } = await import("exceljs");
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Feuille1");
  const sources = workbook.addWorksheet("Sources");
  sources.getCell("A1").value = "À faire";
  sources.getCell("A2").value = "Terminé";
  worksheet.getCell("A1").dataValidation = {
    type: "list",
    formulae: ["Sources!$A$1:$A$2"],
  };
  const input = Buffer.from(await workbook.xlsx.writeBuffer());
  input.name = "dropdown-range.xlsx";

  const parsed = await transformExcelToFortune(input);
  const imported = normalizeImportedWorkbook(parsed.sheets, {
    sheetPrefix: "Feuille",
    definedNames: parsed.definedNames,
  });
  const rule = imported.sheets[0].dataVerification["0_0"];

  assert.equal(rule.type, "dropdown");
  assert.equal(rule.sourceType, "range");
  assert.equal(rule.value1, "Sources!$A$1:$A$2");
});

test("imports Excel dropdown ranges with relative reference semantics", async () => {
  const { default: ExcelJS } = await import("exceljs");
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Feuille1");
  for (let row = 1; row <= 10; row += 1) {
    worksheet.getCell(row, 1).value = row;
  }
  worksheet.dataValidations.add("C1:C10", {
    type: "list",
    formulae: ["A1:A10"],
  });
  worksheet.dataValidations.add("D1:D10", {
    type: "list",
    formulae: ["A$1:A$10"],
  });
  const input = Buffer.from(await workbook.xlsx.writeBuffer());
  input.name = "dropdown-relative-range.xlsx";

  const parsed = await transformExcelToFortune(input);
  const imported = normalizeImportedWorkbook(parsed.sheets, {
    sheetPrefix: "Feuille",
    definedNames: parsed.definedNames,
  });
  const rules = imported.sheets[0].dataVerification;

  assert.equal(rules["0_2"].value1, "A1:A10");
  assert.equal(rules["5_2"].value1, "A6:A15");
  assert.equal(rules["0_3"].value1, "A$1:A$10");
  assert.equal(rules["5_3"].value1, "A$1:A$10");
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
