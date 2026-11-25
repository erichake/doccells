// Saisie d'une formule au clavier, caractère par caractère, contre le build
// dist/ (sans serveur, comme embedMode.browser.mjs) : les opérateurs < et >
// plaçaient le curseur hors du texte colorié, et l'exception démontait
// l'application (scripts/patch-fortune-html-safety.cjs).
//
// DOCCELLS_DIST=<repo>/dist PLAYWRIGHT_MODULE=<chemin>/playwright/index.mjs \
//   node tests/browser/formulaTyping.browser.mjs
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE
    ? pathToFileURL(path.resolve(process.env.PLAYWRIGHT_MODULE)).href
    : "playwright"
);
const DIST = process.env.DOCCELLS_DIST;
const TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};
const BASE = "http://localhost:5174/fortunesheet/";

const browser = await chromium.launch();
const context = await browser.newContext({ locale: "fr-FR" });
await context.route(`${BASE}**`, async (route) => {
  const name = new URL(route.request().url()).pathname.replace("/fortunesheet/", "");
  const file = path.join(DIST, name || "index.html");
  if (fs.existsSync(file)) {
    await route.fulfill({
      body: fs.readFileSync(file),
      contentType: TYPES[path.extname(file)] ?? "application/octet-stream",
    });
  } else {
    await route.fulfill({ status: 404, body: "" });
  }
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await page.goto(BASE);
await page.evaluate(() => window.whenDocCellsReady());
await page.waitForSelector("#splash-screen", { state: "detached" });
await page.evaluate(() =>
  window.setCellValues([
    { r: 0, c: 0, v: 1 },
    { r: 0, c: 1, v: 5 },
  ]),
);
await page.waitForTimeout(500);

const area = await page.locator(".fortune-cell-area").boundingBox();
const FORMULAS = [
  ["=A1>0", true],
  ["=5<A1", false],
  ["=A1<>B1", true],
  ['=SI(A1>=10;"oui";"non")', "non"],
  ["=SI(ET(A1>0;B1<=9);A1&B1;0)", "15"],
  ['="a<b>c&d"', "a<b>c&d"],
];
let failures = 0;
for (const [row, [formula, expected]] of FORMULAS.entries()) {
  await page.mouse.click(area.x + 248, area.y + (row + 2) * 20 + 10);
  let typed = "";
  let problem = "";
  for (const character of formula) {
    await page.keyboard.type(character);
    await page.waitForTimeout(40);
    typed += character;
    const shown = await page.evaluate(
      () => document.querySelector(".luckysheet-cell-input")?.innerText,
    );
    if (shown !== typed) {
      problem = `« ${shown} » au lieu de « ${typed} »`;
      break;
    }
  }
  await page.keyboard.press("Enter");
  await page.waitForTimeout(300);
  const value = await page.evaluate(
    (r) =>
      window.getSheetData?.()[0].celldata.find((cell) => cell.r === r && cell.c === 2)?.v.v,
    row + 2,
  );
  // Un texte fait de chiffres est rendu en nombre par getSheetData.
  if (!problem && String(value) !== String(expected)) problem = `valeur ${JSON.stringify(value)}`;
  if (problem) failures += 1;
  console.log(`${problem ? "❌" : "✅"} ${formula}${problem ? ` — ${problem}` : ""}`);
}
if (errors.length) {
  failures += 1;
  console.log(`❌ exceptions : ${errors.join(" ; ")}`);
}
await browser.close();
console.log(failures ? `${failures} échec(s)` : `${FORMULAS.length}/${FORMULAS.length} tests OK`);
process.exit(failures ? 1 : 0);
