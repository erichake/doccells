// Format d'archivage (WORKBOOK_FORMAT.md) : lecture de toutes les versions
// publiées, écriture de la version courante, accord entre la description
// écrite des champs et le code.
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  ARCHIVED_SHEET_FIELDS,
  UNARCHIVED_SHEET_FIELDS,
  WORKBOOK_ARCHIVE_VERSION,
  readWorkbookArchive,
  writeWorkbookArchive,
} from "../src/features/archive/workbookArchive.js";

const fixture = (version) =>
  JSON.parse(fs.readFileSync(new URL(`./fixtures/workbook-v${version}.json`, import.meta.url), "utf8"));

test("chaque version publiée a son fichier d'exemple, qui se lit", () => {
  for (let version = 1; version <= WORKBOOK_ARCHIVE_VERSION; version += 1) {
    const { sheets, definedNames } = readWorkbookArchive(fixture(version));
    assert.ok(sheets.length > 0, `version ${version}`);
    for (const sheet of sheets) assert.deepEqual(sheet.definedNames, definedNames);
  }
});

test("version 1 : contenu de l'exemple", () => {
  const { sheets, definedNames } = readWorkbookArchive(fixture(1));
  assert.deepEqual(sheets.map((sheet) => sheet.name), ["Feuille1", "Données"]);
  assert.deepEqual(definedNames, [{ name: "taux", refersTo: "=Feuille1!$B$10", scopeSheetId: null }]);
  const cell = (sheet, r, c) => sheet.celldata.find((entry) => entry.r === r && entry.c === c)?.v;
  const [main, other] = sheets;
  assert.equal(cell(main, 6, 3).f, "=SUM(D2:D5)");
  assert.equal(cell(main, 6, 3).v, 40.2);
  assert.equal(cell(main, 8, 2).v, 46375);
  assert.equal(cell(other, 2, 1).v, 40.2);
  assert.deepEqual(main.config.merge, { "14_0": { r: 14, c: 0, rs: 1, cs: 3 } });
  assert.equal(main.customConditionalFormatting.length, 1);
  assert.equal(main.customCharts.length, 1);
  assert.equal(main.dataVerification["1_4"].type, "checkbox");
  assert.equal(other.showGridLines, false);
});

test("l'écriture de la version courante reproduit l'exemple à l'identique", () => {
  const current = fixture(WORKBOOK_ARCHIVE_VERSION);
  assert.deepEqual(writeWorkbookArchive(readWorkbookArchive(current).sheets), current);
});

test("seuls les champs décrits sont archivés, dans l'ordre décrit", () => {
  const archive = writeWorkbookArchive([
    {
      celldata: [],
      data: [[null]],
      luckysheet_select_save: [{ row: [0, 0], column: [0, 0] }],
      inconnu: 1,
      name: "F",
      definedNames: [{ name: "n", refersTo: "=F!$A$1", scopeSheetId: null }],
      id: "7",
    },
  ]);
  assert.deepEqual(Object.keys(archive), ["format", "version", "definedNames", "sheets"]);
  assert.deepEqual(Object.keys(archive.sheets[0]), ["name", "id", "celldata"]);
  assert.deepEqual(archive.definedNames, [{ name: "n", refersTo: "=F!$A$1", scopeSheetId: null }]);
});

test("archives refusées", () => {
  const valid = fixture(1);
  const reject = (input, message) => assert.throws(() => readWorkbookArchive(input), message);
  reject(null, /Invalid workbook/);
  reject([{ name: "F" }], /Invalid workbook/);
  reject({ ...valid, format: "autre" }, /Invalid workbook/);
  reject({ ...valid, version: 0 }, /Invalid workbook: bad version/);
  reject({ ...valid, version: "1" }, /Invalid workbook: bad version/);
  reject({ ...valid, version: WORKBOOK_ARCHIVE_VERSION + 1 }, /Unsupported workbook version: 2/);
  reject({ ...valid, sheets: [] }, /Invalid workbook: no sheet/);
  reject({ ...valid, sheets: [{ celldata: [] }] }, /sheet 0 has no name/);
  reject({ ...valid, sheets: [{ name: "F", celldata: {} }] }, /celldata must be an array/);
  reject({ ...valid, definedNames: {} }, /definedNames must be an array/);
});

test("la lecture ne modifie pas l'archive reçue", () => {
  const archive = fixture(1);
  const copy = structuredClone(archive);
  const { sheets } = readWorkbookArchive(archive);
  sheets[0].celldata[0].v.v = "modifié";
  assert.deepEqual(archive, copy);
});

// Les tableaux de champs de WORKBOOK_FORMAT.md (version 1) sont ceux du code.
test("WORKBOOK_FORMAT.md décrit exactement les champs du code", () => {
  const text = fs.readFileSync(new URL("../WORKBOOK_FORMAT.md", import.meta.url), "utf8");
  const section = (start, end) => text.slice(text.indexOf(start), text.indexOf(end, text.indexOf(start)));
  const fieldsOfTable = (part) =>
    part
      .split("\n")
      .filter((line) => line.startsWith("| `"))
      .flatMap((line) => [...line.split("|")[1].matchAll(/`([^`]+)`/g)].map((match) => match[1]));
  const archived = fieldsOfTable(section("### Feuille", "Champs connus d'une feuille"));
  const unarchived = fieldsOfTable(section("Champs connus d'une feuille", "### Cellule"));
  assert.deepEqual(archived, ARCHIVED_SHEET_FIELDS);
  assert.deepEqual(unarchived, UNARCHIVED_SHEET_FIELDS);
});

test("images : seules les images en URL data: sont gardées", () => {
  const png = "data:image/png;base64,iVBORw0KGgo=";
  const { sheets } = readWorkbookArchive({
    format: "doccells",
    version: 1,
    sheets: [
      {
        name: "Feuille1",
        images: [
          { id: "a", src: png, left: 0, top: 0, width: 10, height: 10 },
          { id: "b", src: "https://evil.test/pixel.png" },
          { id: "c", src: "javascript:alert(1)" },
          { id: "d", src: 'data:image/png;base64,x"),url(https://evil.test/' },
          { id: "e" },
          "f",
        ],
      },
      { name: "Feuille2", images: "x" },
    ],
  });
  assert.deepEqual(sheets[0].images.map((image) => image.id), ["a"]);
  assert.deepEqual(sheets[1].images, []);
});
