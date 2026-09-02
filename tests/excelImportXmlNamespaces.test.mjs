import assert from "node:assert/strict";
import test from "node:test";
import { FortuneFile } from "../src/lib/FortuneSheetExcel/ToFortuneSheet/FortuneFile.js";
import { ReadXml } from "../src/lib/FortuneSheetExcel/ToFortuneSheet/ReadXml.js";

const prefixedWorkbookFiles = {
  "xl/workbook.xml":
    `<?xml version="1.0" encoding="utf-8"?>` +
    `<x:workbook xmlns:x="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` +
    `<x:sheets>` +
    `<x:sheet name="Élèves" sheetId="1" r:id="rId1" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" />` +
    `</x:sheets>` +
    `</x:workbook>`,
  "xl/_rels/workbook.xml.rels":
    `<?xml version="1.0" encoding="utf-8"?>` +
    `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
    `<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="/xl/worksheets/sheet1.xml" Id="rId1" />` +
    `</Relationships>`,
  "xl/worksheets/sheet1.xml":
    `<?xml version="1.0" encoding="utf-8"?>` +
    `<x:worksheet xmlns:x="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` +
    `<x:sheetFormatPr defaultRowHeight="15" />` +
    `<x:sheetData>` +
    `<x:row r="1"><x:c r="A1" s="0" t="str"><x:v>Classe</x:v></x:c><x:c r="B1" s="0" t="str"><x:v>Nom</x:v></x:c></x:row>` +
    `<x:row r="2"><x:c r="A2" s="0" t="str"><x:v>31</x:v></x:c><x:c r="B2" s="0" t="str"><x:v>ABE</x:v></x:c></x:row>` +
    `</x:sheetData>` +
    `</x:worksheet>`,
  "xl/styles.xml":
    `<?xml version="1.0" encoding="utf-8"?>` +
    `<x:styleSheet xmlns:x="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` +
    `<x:fonts count="1"><x:font /></x:fonts>` +
    `<x:fills count="1"><x:fill /></x:fills>` +
    `<x:borders count="1"><x:border /></x:borders>` +
    `<x:cellStyleXfs count="1"><x:xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></x:cellStyleXfs>` +
    `<x:cellXfs count="1"><x:xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyBorder="1" /></x:cellXfs>` +
    `<x:cellStyles count="1"><x:cellStyle name="Normal" xfId="0" builtinId="0" /></x:cellStyles>` +
    `</x:styleSheet>`,
  "xl/theme/theme1.xml": "",
  "xl/sharedStrings.xml": "",
  "xl/calcChain.xml": "",
  "docProps/core.xml": "",
  "docProps/app.xml": "",
};

test("ReadXml resolves prefixed SpreadsheetML tags from unprefixed paths", () => {
  const readXml = new ReadXml(prefixedWorkbookFiles);

  assert.equal(
    readXml.getElementsByTagName("sheets/sheet", "xl/workbook.xml").length,
    1,
  );
  assert.equal(
    readXml.getElementsByTagName("sheetData/row", "xl/worksheets/sheet1.xml").length,
    2,
  );
  assert.equal(
    readXml.getElementsByTagName("sheetData/row/c", "xl/worksheets/sheet1.xml").length,
    4,
  );
  assert.equal(
    readXml.getElementsByTagName("borders/border", "xl/styles.xml").length,
    1,
  );
});

test("FortuneFile imports prefixed SpreadsheetML sheets and self-closing styles", () => {
  const fortuneFile = new FortuneFile(prefixedWorkbookFiles, "prefixed.xlsx");

  fortuneFile.Parse();
  const workbook = fortuneFile.serialize();

  assert.equal(workbook.sheets.length, 1);
  assert.equal(workbook.sheets[0].name, "Élèves");
  assert.equal(workbook.sheets[0].celldata.length, 4);
  assert.deepEqual(
    workbook.sheets[0].celldata.map((cell) => cell.v.v),
    ["Classe", "Nom", "31", "ABE"],
  );
});
