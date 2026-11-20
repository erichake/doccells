// Mesure navigateur de DocCells sans serveur (AGENTS.md : ni npm run dev,
// ni aucun port) : le build est servi par page.route sur
// http://doccells.test/fortunesheet/, Playwright vient de docgeo_MAIN.
//
//   npx vite build --outDir /tmp/dc-dist
//   DIST=/tmp/dc-dist node scripts/bench-live-update.mjs [mode] [N...]
//
// mode : both (défaut) | keyboard | fast | load | idle
//   keyboard : saisie de A1 au clavier (Entrée), recalcul de N formules
//   fast     : window.setCellValues([{ r: 0, c: 0, v }])
//   load     : window.setSheetData d'une feuille de N lignes
//   idle     : bruit de fond de la mesure (400 ms sans action)
// Variables : SCENARIO (table | sparse : N formules dont 20 lisent A1),
// REPEAT (7), CPU (ralentissement, ex. 6), EARLY=1 (appeler
// setSheetData pendant le démarrage, avant la fin du classeur initial).
//
// Le temps « fil principal » est la somme des ThreadControllerImpl::RunTask
// du renderer entre deux performance.mark. Chaque mesure vérifie les valeurs
// recalculées (première ligne, dernière ligne, somme).
import { chromium } from "/Users/erichake/Desktop/BV/html/docgeo_MAIN/node_modules/playwright/index.mjs";
import fs from "node:fs";
import path from "node:path";

const DIST = process.env.DIST;
const CPU = Number(process.env.CPU || 1);
const args = process.argv.slice(2);
const mode = ["keyboard", "fast", "both", "load", "idle"].includes(args[0]) ? args.shift() : "both";
const sizes = args.map(Number).filter(Boolean);
const NS = sizes.length ? sizes : [10, 100, 300, 1000];
const REPEAT = Number(process.env.REPEAT || 7);
const SPARSE = process.env.SCENARIO === "sparse";

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".json": "application/json" };

// Table : A1 piloté, B(i) = SIN($A$1*A(i))+A(i)^2/2, C1 = SUM(B2:B(n+1)).
// Clairsemé : A1 piloté, B2:B21 = $A$1*i, et N formules D(i) = C(i)*2+1.
function makeSparseSheet(n) {
  const id = "s1";
  const celldata = [{ r: 0, c: 0, v: { v: 1, m: "1", ct: { fa: "General", t: "n" } } }];
  const calcChain = [];
  for (let i = 1; i <= 20; i++) {
    celldata.push({ r: i, c: 1, v: { f: `=$A$1*${i}`, v: 0, m: "0" } });
    calcChain.push({ r: i, c: 1, id });
  }
  for (let i = 1; i <= n; i++) {
    celldata.push({ r: i, c: 2, v: { v: i, m: String(i), ct: { fa: "General", t: "n" } } });
    celldata.push({ r: i, c: 3, v: { f: `=C${i + 1}*2+1`, v: 2 * i + 1, m: String(2 * i + 1) } });
    calcChain.push({ r: i, c: 3, id });
  }
  return [{ name: "Feuille1", id, order: 0, status: 1, celldata, calcChain, config: {} }];
}

function makeSheet(n, { withCalcChain = true } = {}) {
  if (SPARSE) return makeSparseSheet(n);
  const id = "s1";
  const celldata = [{ r: 0, c: 0, v: { v: 1, m: "1", ct: { fa: "General", t: "n" } } }];
  const calcChain = [];
  for (let i = 1; i <= n; i++) {
    celldata.push({ r: i, c: 0, v: { v: i, m: String(i), ct: { fa: "General", t: "n" } } });
    celldata.push({ r: i, c: 1, v: { f: `=SIN($A$1*A${i + 1})+A${i + 1}^2/2`, v: 0, m: "0" } });
    calcChain.push({ r: i, c: 1, id });
  }
  celldata.push({ r: 0, c: 2, v: { f: `=SUM(B2:B${n + 1})`, v: 0, m: "0" } });
  calcChain.push({ r: 0, c: 2, id });
  const sheet = { name: "Feuille1", id, order: 0, status: 1, celldata, config: {} };
  if (withCalcChain) sheet.calcChain = calcChain;
  return [sheet];
}
const expected = (n, x) => {
  if (SPARSE) return { first: x, last: 20 * x, sum: 2 * n + 1 };
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += Math.sin(x * i) + (i * i) / 2;
  return { first: Math.sin(x) + 0.5, last: Math.sin(x * n) + (n * n) / 2, sum };
};
const close = (a, b) => typeof a === "number" && Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(b));

const browser = await chromium.launch({ channel: "chrome", headless: true });

async function openPage() {
  const context = await browser.newContext({ locale: "en-US", viewport: { width: 1400, height: 900 } });
  await context.route("http://doccells.test/fortunesheet/**", async (route) => {
    const url = new URL(route.request().url());
    let rel = url.pathname.replace(/^\/fortunesheet\/?/, "") || "index.html";
    const file = path.join(DIST, rel);
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
      await route.fulfill({ body: fs.readFileSync(file), contentType: TYPES[path.extname(file)] || "application/octet-stream" });
    } else await route.fulfill({ status: 404, body: "not found" });
  });
  const page = await context.newPage();
  page.on("pageerror", (e) => console.log("  [pageerror]", e.message));
  page.on("console", (m) => { if (m.type() === "error") console.log("  [console.error]", m.text().slice(0, 200)); });
  if (CPU > 1) {
    const cdp = await context.newCDPSession(page);
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: CPU });
  }
  if (SPARSE) await page.addInitScript(() => { window.__benchSparse = true; });
  await page.goto("http://doccells.test/fortunesheet/", { waitUntil: "domcontentloaded" });
  if (!process.env.EARLY) await page.waitForSelector("#splash-screen", { state: "detached", timeout: 30000 });
  else await page.waitForFunction(() => typeof window.setSheetData === "function");
  return { page, context };
}

async function load(page, n) {
  const sheets = makeSheet(n);
  const t0 = Date.now();
  await page.evaluate((s) => window.setSheetData(s), sheets);
  await page.waitForTimeout(300);
  if (process.env.EARLY) {
    await page.waitForSelector("#splash-screen", { state: "detached", timeout: 30000 });
    await page.waitForTimeout(1000);
  }
  const state = await page.evaluate(() => {
    const sheet = window.getSheetData()?.[0];
    return { rows: sheet?.data?.length, calcChain: sheet?.calcChain?.length, celldata: sheet?.celldata?.length };
  });
  return { ...state, ms: Date.now() - t0 };
}

// Valeurs lues dans la grille vivante (pas dans le cache normalisé d'App).
const readValues = (page, n) =>
  page.evaluate((n) => {
    const data = window.getSheetData()?.[0]?.data;
    const cell = (r, c) => data?.[r]?.[c]?.v;
    if (window.__benchSparse) return { a1: cell(0, 0), first: cell(1, 1), last: cell(20, 1), sum: cell(n, 3) };
    return { a1: cell(0, 0), first: cell(1, 1), last: cell(n, 1), sum: cell(0, 2) };
  }, n);

// Temps de fil principal (somme des ThreadControllerImpl::RunTask du
// renderer) entre deux performance.mark.
async function traced(page, action) {
  await browser.startTracing(page, { categories: ["toplevel", "blink.user_timing", "devtools.timeline", "disabled-by-default-devtools.timeline"] });
  await page.evaluate(() => performance.mark("bench-start"));
  await action();
  await page.evaluate(() => performance.mark("bench-end"));
  const buf = await browser.stopTracing();
  const events = JSON.parse(buf.toString()).traceEvents;
  const start = events.find((e) => e.name === "bench-start");
  const end = events.find((e) => e.name === "bench-end");
  const pid = start.pid;
  const main = events.find((e) => e.pid === pid && e.name === "thread_name" && e.args?.name === "CrRendererMain");
  const tid = main ? main.tid : start.tid;
  let total = 0;
  for (const e of events) {
    if (e.pid !== pid || e.tid !== tid || e.name !== "ThreadControllerImpl::RunTask" || e.ph !== "X") continue;
    if (e.ts >= start.ts && e.ts + e.dur <= end.ts) total += e.dur;
  }
  return total / 1000;
}

const median = (a) => a.slice().sort((x, y) => x - y)[a.length >> 1];

async function benchKeyboard(page, n) {
  const area = await page.locator(".fortune-cell-area").boundingBox();
  const times = [];
  let ok = true;
  for (let k = 0; k < REPEAT; k++) {
    const x = 0.5 + k * 0.01;
    await page.mouse.click(area.x + 49, area.y + 10);
    await page.waitForTimeout(100);
    await page.keyboard.type(String(x));
    await page.waitForTimeout(100);
    const ms = await traced(page, async () => {
      await page.keyboard.press("Enter");
      await page.waitForTimeout(400);
    });
    times.push(ms);
    const v = await readValues(page, n);
    const e = expected(n, x);
    if (!(close(v.first, e.first) && close(v.last, e.last) && close(v.sum, e.sum))) {
      ok = false;
      console.log(`  ✗ clavier N=${n} x=${x}`, v, e);
    }
  }
  return { med: median(times), min: Math.min(...times), max: Math.max(...times), ok };
}

async function benchFast(page, n) {
  const times = [];
  const inner = [];
  let ok = true;
  for (let k = 0; k < REPEAT; k++) {
    const x = 0.7 + k * 0.01;
    let innerMs;
    const ms = await traced(page, async () => {
      innerMs = await page.evaluate(
        (x) =>
          new Promise((resolve) => {
            const t = performance.now();
            const res = window.setCellValues([{ r: 0, c: 0, v: x }]);
            const dt = { total: performance.now() - t, ...(res?.ms || {}) };
            requestAnimationFrame(() => setTimeout(() => resolve(dt), 0));
          }),
        x,
      );
      await page.waitForTimeout(100);
    });
    times.push(ms);
    inner.push(innerMs);
    const v = await readValues(page, n);
    const e = expected(n, x);
    if (!(close(v.a1, x) && close(v.first, e.first) && close(v.last, e.last) && close(v.sum, e.sum))) {
      ok = false;
      console.log(`  ✗ rapide N=${n} x=${x}`, v, e);
    }
  }
  const pick = (k) => median(inner.map((x) => x[k] ?? NaN));
  return { med: median(times), min: Math.min(...times), max: Math.max(...times), inner: pick("total"), recalc: pick("recalc"), draw: pick("draw"), ok };
}

try {
  for (const n of NS) {
    const { page, context } = await openPage();
    const st = await load(page, n);
    const loadedOk = st.rows >= n + 1 && st.calcChain === (SPARSE ? n + 20 : n + 1);
    console.log(`N=${n}: chargement ${st.ms} ms, data=${st.rows} lignes, calcChain=${st.calcChain} ${loadedOk ? "✓" : "✗ ÉCHEC"}`);
    if (mode === "idle") {
      const t = [];
      for (let k = 0; k < REPEAT; k++) t.push(await traced(page, () => page.waitForTimeout(400)));
      console.log(`  inactif 400 ms : médiane ${median(t).toFixed(1)} ms`);
    }
    if (mode !== "load" && mode !== "idle" && loadedOk) {
      if (mode === "keyboard" || mode === "both") {
        const r = await benchKeyboard(page, n);
        console.log(`  clavier : médiane ${r.med.toFixed(1)} ms (min ${r.min.toFixed(1)}, max ${r.max.toFixed(1)}) ${r.ok ? "valeurs ✓" : "valeurs ✗"}`);
      }
      if (mode === "fast" || mode === "both") {
        const r = await benchFast(page, n);
        console.log(`  setCellValues : médiane ${r.med.toFixed(1)} ms fil principal (min ${r.min.toFixed(1)}, max ${r.max.toFixed(1)}), appel synchrone ${r.inner.toFixed(2)} ms (recalcul ${r.recalc.toFixed(2)}${Number.isFinite(r.draw) ? `, dessin ${r.draw.toFixed(2)}` : ""}) ${r.ok ? "valeurs ✓" : "valeurs ✗"}`);
      }
    }
    await context.close();
  }
} finally {
  await browser.close();
}
