// Mode intégré (EMBED.md) contre le build dist/, sans serveur ni port : les
// pages sont servies par interception de requêtes Playwright.
//
// Playwright n'est pas une dépendance de DocCells : PLAYWRIGHT_MODULE donne
// le chemin de son module (par défaut « playwright »).
//
//   npx vite build --outDir /tmp/dc-dist
//   DOCCELLS_DIST=/tmp/dc-dist \
//   PLAYWRIGHT_MODULE=../docgeo_MAIN/node_modules/playwright/index.mjs \
//   node tests/browser/embedMode.browser.mjs
//
// - http://doccells.test/fortunesheet/ : DocCells (?embed) ;
// - http://hote.test/host.html : hôte d'une autre origine (postMessage) ;
// - http://doccells.test/host.html : hôte de même origine (window.docCells) ;
// - http://evil.test/evil.html : fenêtre tierce qui écrit à l'iframe.
// Affiche aussi des mesures (aller-retour setCellValues → values).
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { isDeepStrictEqual } from "node:util";
import {
  ARCHIVED_SHEET_FIELDS,
  UNARCHIVED_SHEET_FIELDS,
} from "../../src/features/archive/workbookArchive.js";

const playwrightModule = process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(path.resolve(process.env.PLAYWRIGHT_MODULE)).href
  : "playwright";
const { chromium } = await import(playwrightModule);

const DIST = process.env.DOCCELLS_DIST;
if (!DIST || !fs.existsSync(path.join(DIST, "index.html"))) {
  console.error("DOCCELLS_DIST doit pointer vers un dossier dist/ construit.");
  process.exit(2);
}

const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".json": "application/json",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const HOST_HTML = `<!doctype html><html><body style="margin:0">
<iframe id="dc" style="width:1200px;height:700px;border:0"></iframe>
<script>
const iframe = document.getElementById("dc");
window.events = [];
window.stray = [];
let nextId = 0;
const pending = new Map();
window.addEventListener("message", ({ source, data }) => {
  if (source !== iframe.contentWindow) { window.stray.push(data); return; }
  if (!data || data.doccells !== 1) return;
  if (data.event) { window.events.push({ ...data, at: performance.now() }); return; }
  const waiter = pending.get(data.id);
  if (!waiter) { window.stray.push(data); return; }
  pending.delete(data.id);
  data.ok ? waiter.resolve(data.result) : waiter.reject(new Error(data.error));
});
window.request = (type, params = {}) => new Promise((resolve, reject) => {
  const id = ++nextId;
  pending.set(id, { resolve, reject });
  iframe.contentWindow.postMessage({ doccells: 1, id, type, ...params }, "*");
});
window.send = (type, params = {}) =>
  iframe.contentWindow.postMessage({ doccells: 1, type, ...params }, "*");
window.waitEvent = (predicate, timeout = 5000) => new Promise((resolve, reject) => {
  const started = performance.now();
  const poll = () => {
    const found = window.events.find(predicate);
    if (found) resolve(found);
    else if (performance.now() - started > timeout) reject(new Error("timeout"));
    else setTimeout(poll, 5);
  };
  poll();
});
const hostParams = new URLSearchParams(location.search);
if (hostParams.has("hidden")) iframe.style.display = "none";
iframe.src = hostParams.get("src");
</script></body></html>`;

const EVIL_HTML = `<!doctype html><script>
window.received = [];
window.addEventListener("message", ({ data }) => window.received.push(data));
parent.frames[0].postMessage({ doccells: 1, id: 999, type: "save" }, "*");
parent.frames[0].postMessage({ doccells: 1, id: 998, type: "setCellValues", updates: [{ ref: "Feuille1!A1", v: 666 }] }, "*");
</script>`;

// Classeur : A1 piloté, A(i) = i, B(i) = SIN($A$1*A(i))+A(i)^2/2 (valeurs
// enregistrées fausses, à corriger par le recalcul au chargement),
// C1 = SOMME, D1 = division par zéro, D2 = date, et une feuille 'Données 2'.
const N = 300;
const workbook = () => {
  const celldata = [{ r: 0, c: 0, v: { v: 1, m: "1", ct: { fa: "General", t: "n" } } }];
  for (let i = 1; i <= N; i += 1) {
    celldata.push({ r: i, c: 0, v: { v: i, m: String(i), ct: { fa: "General", t: "n" } } });
    celldata.push({ r: i, c: 1, v: { f: `=SIN($A$1*A${i + 1})+A${i + 1}^2/2`, v: 0, m: "0" } });
  }
  celldata.push({ r: 0, c: 2, v: { f: `=SUM(B2:B${N + 1})`, v: 0, m: "0" } });
  celldata.push({ r: 0, c: 3, v: { f: "=A1/0", v: 0, m: "0" } });
  celldata.push({ r: 1, c: 3, v: { f: "=DATE(2026,11,19)", v: 0, m: "0", ct: { fa: "yyyy-MM-dd", t: "d" } } });
  return {
    format: "doccells",
    version: 1,
    sheets: [
      { name: "Feuille1", order: 0, celldata, config: {} },
      {
        name: "Données 2",
        order: 1,
        celldata: [{ r: 0, c: 0, v: { f: "=Feuille1!C1*2", v: 0, m: "0" } }],
        config: {},
      },
    ],
  };
};

// Classeur qui lit une valeur de l'hôte : A1 = GEO("AB"), le reste comme
// workbook() (300 formules qui dépendent de $A$1).
const hostWorkbook = () => {
  const wb = workbook();
  wb.sheets[0].celldata[0] = { r: 0, c: 0, v: { f: '=GEO("AB")', v: 0, m: "0" } };
  return wb;
};

// Archive piégée : chaque texte tente d'exécuter top.__xss.push(…) s'il est
// injecté en HTML.
const xss = (name) => `<img src=x onerror="top.__xss.push('${name}')">`;
const trappedWorkbook = () => ({
  format: "doccells",
  version: 1,
  sheets: [
    {
      name: "Feuille1",
      order: 0,
      status: 1,
      config: {},
      celldata: [
        { r: 0, c: 0, v: { f: `="${xss("formula")}"`, v: xss("formula"), m: xss("formula") } },
        { r: 1, c: 0, v: { v: `<span>${xss("span-text")}</span>`, m: `<span>${xss("span-text")}</span>`, ct: { fa: "@", t: "s" } } },
        {
          r: 2, c: 0,
          v: { ct: { fa: "General", t: "inlineStr", s: [{ v: xss("inline"), ff: `Arial' onmouseover='top.__xss.push("style")` }] } },
        },
        {
          r: 3, c: 0,
          v: { v: "note", m: "note", ps: { value: xss("comment"), isShow: true, left: 200, top: 60, width: 150, height: 60 } },
        },
        { r: 4, c: 0, v: { v: "hint", m: "hint" } },
        { r: 6, c: 0, v: { f: '=IF(SUM(B1:B3)<2,"a<b&c",1)', v: "a<b&c", m: "a<b&c" } },
        { r: 5, c: 0, v: { v: "copy", m: "copy", bg: `red"><img src=x onerror="top.__xss.push('copy')"><b x="`, fc: `#000"><img src=x onerror="top.__xss.push('copy-fc')"><b x="` } },
      ],
      dataVerification: {
        "4_0": {
          type: "text_content", type2: "include", value1: xss("hint-value"), value2: "",
          hintShow: true, hintValue: xss("hint"), prohibitInput: false, remote: false, checked: false,
        },
      },
      images: [{ id: "img", src: "http://evil.test/pixel.png", left: 400, top: 100, width: 20, height: 20 }],
    },
    { name: `Feuille<b>2</b>${xss("sheet")}`, order: 1, celldata: [], config: {} },
  ],
});

// Exemple publié du format d'archivage (WORKBOOK_FORMAT.md), enregistré par
// DocCells en français.
const archiveFixture = JSON.parse(
  fs.readFileSync(new URL("../fixtures/workbook-v1.json", import.meta.url), "utf8"),
);

const listDifferences = (a, b, where = "", out = []) => {
  if (isDeepStrictEqual(a, b)) return out;
  if (a && b && typeof a === "object" && typeof b === "object") {
    for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) listDifferences(a[key], b[key], `${where}.${key}`, out);
  } else out.push(`${where}: ${JSON.stringify(a)?.slice(0, 50)} → ${JSON.stringify(b)?.slice(0, 50)}`);
  return out;
};
const expectedSum = (x) => {
  let sum = 0;
  for (let i = 1; i <= N; i += 1) sum += Math.sin(x * i) + (i * i) / 2;
  return sum;
};
const close = (a, b) => typeof a === "number" && Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(b));

const results = [];
const check = (name, ok, detail = "") => {
  results.push(ok);
  console.log(`${ok ? "✅" : "❌"} ${name}${detail ? ` — ${detail}` : ""}`);
};
const median = (values) => values.slice().sort((a, b) => a - b)[values.length >> 1];

const browser = await chromium.launch({ channel: "chrome", headless: true });

const newContext = async (locale = "en-US") => {
  const context = await browser.newContext({ locale, viewport: { width: 1300, height: 800 } });
  await context.route("http://doccells.test/**", async (route) => {
    const url = new URL(route.request().url());
    if (url.pathname === "/host.html") return route.fulfill({ body: HOST_HTML, contentType: "text/html" });
    const rel = url.pathname.replace(/^\/fortunesheet\/?/, "") || "index.html";
    const file = path.join(DIST, rel);
    if (url.pathname.startsWith("/fortunesheet") && fs.existsSync(file) && fs.statSync(file).isFile()) {
      return route.fulfill({ body: fs.readFileSync(file), contentType: TYPES[path.extname(file)] || "application/octet-stream" });
    }
    return route.fulfill({ status: 404, body: "not found" });
  });
  await context.route("http://hote.test/**", (route) => route.fulfill({ body: HOST_HTML, contentType: "text/html" }));
  context.evilRequests = [];
  await context.route("http://evil.test/**", (route) => {
    context.evilRequests.push(route.request().url());
    return route.fulfill({ body: EVIL_HTML, contentType: "text/html" });
  });
  return context;
};

const openHost = async (context, hostUrl, embedParam = "embed", hostQuery = "") => {
  const page = await context.newPage();
  page.on("pageerror", (error) => console.log("  [pageerror]", error.message));
  const src = `http://doccells.test/fortunesheet/?${embedParam}`;
  await page.goto(`${hostUrl}?${hostQuery}src=${encodeURIComponent(src)}`);
  return page;
};

try {
  // ------------------------------------------------------------------
  console.log("--- hôte d'une autre origine (postMessage) ---");
  let context = await newContext();
  let page = await openHost(context, "http://hote.test/host.html");
  const ready = await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
  check("ready reçu", ready.event === "ready", `version ${ready.version}`);

  const frame = page.frame({ url: /doccells\.test\/fortunesheet/ });
  const menus = await frame.locator(".dc-menu-root-button").allTextContents();
  check("menus sans Fichier", menus.length > 0 && !menus.includes("File"), menus.join(", "));

  const loadResult = await page.evaluate((wb) => window.request("load", { workbook: wb }), workbook());
  check("load", loadResult.sheets.map((sheet) => sheet.name).join("|") === "Feuille1|Données 2", JSON.stringify(loadResult));

  const loaded = await page.evaluate(() => window.request("getValues", { ref: "Feuille1!B1:D2" }));
  check(
    "recalcul complet au chargement",
    close(loaded.values[1][0], Math.sin(1) + 0.5) &&
      close(loaded.values[0][1], expectedSum(1)) &&
      loaded.values[0][2]?.error === "#DIV/0!" &&
      loaded.values[1][2] === 46345,
    JSON.stringify(loaded.values),
  );
  const display = await page.evaluate(() => window.request("getValues", { ref: "Feuille1!D2", display: true }));
  check("display : texte affiché", display.values[0][0].m === "2026-11-19", JSON.stringify(display.values));

  const sub = await page.evaluate(() => window.request("subscribe", { ref: "Feuille1!C1" }));
  const subOther = await page.evaluate(() => window.request("subscribe", { ref: "'Données 2'!A1" }));
  check("subscribe", close(sub.values[0][0], expectedSum(1)) && subOther.ref === "'Données 2'!A1", JSON.stringify(sub));

  const ordered = await page.evaluate(async (id) => {
    window.events.length = 0;
    const result = await window.request("setCellValues", { updates: [{ ref: "Feuille1!A1", v: 0.5 }] });
    const values = window.events.filter((e) => e.event === "values");
    return { result, values, ownFirst: values.some((e) => e.subscription === id) };
  }, sub.subscription);
  check(
    "setCellValues : values avant la réponse, source host",
    ordered.ownFirst && ordered.values.every((e) => e.source === "host") &&
      close(ordered.values.find((e) => e.subscription === sub.subscription).values[0][0], expectedSum(0.5)) &&
      // B2:B301, C1, D1 (=A1/0) et 'Données 2'!A1.
      ordered.result.written === 1 && ordered.result.recalculated === N + 3,
    JSON.stringify(ordered.result),
  );

  const burst = await page.evaluate(async (id) => {
    window.events.length = 0;
    for (let k = 1; k <= 20; k += 1) window.send("setCellValues", { updates: [{ ref: "Feuille1!A1", v: 0.6 + k / 100 }] });
    const result = await window.request("getValues", { ref: "Feuille1!A1" });
    return { a1: result.values[0][0], events: window.events.filter((e) => e.subscription === id).length };
  }, sub.subscription);
  check("rafale de 20 setCellValues fusionnée", burst.a1 === 0.8 && burst.events < 20, `${burst.events} événements values pour 20 envois`);

  const errors = await page.evaluate(async () => {
    const attempt = async (type, params) => {
      try {
        await window.request(type, params);
        return "ok";
      } catch (error) {
        return error.message;
      }
    };
    return [
      await attempt("inconnue", {}),
      await attempt("getValues", { ref: "B3" }),
      await attempt("getValues", { ref: "Absente!A1" }),
      await attempt("setCellValues", { updates: [{ ref: "Feuille1!A1:A2", v: 1 }] }),
      await attempt("load", { workbook: "x" }),
      await attempt("unsubscribe", { subscription: 1234 }),
      await attempt("getValues", {}),
    ];
  });
  check(
    "erreurs",
    errors.join("|") ===
      "Unknown request: inconnue|Invalid reference: B3 (sheet name required)|Unknown sheet: Absente|" +
        "Invalid reference: Feuille1!A1:A2 (single cell expected)|" +
        'Invalid workbook: expected { format: "doccells", version, sheets }|Unknown subscription: 1234|Invalid request',
    errors.join(" | "),
  );

  // Saisie de l'utilisateur dans l'iframe.
  const area = await frame.locator(".fortune-cell-area").boundingBox();
  await page.evaluate(() => { window.events.length = 0; });
  await page.mouse.click(area.x + 49, area.y + 10);
  await page.keyboard.type("2");
  await page.keyboard.press("Enter");
  const userValues = await page.evaluate((id) => window.waitEvent((e) => e.event === "values" && e.subscription === id), sub.subscription);
  const changeEvent = await page.evaluate(() => window.waitEvent((e) => e.event === "change").then(() => true, () => false));
  check("saisie : values source user, puis change", userValues.source === "user" && close(userValues.values[0][0], expectedSum(2)) && changeEvent);

  // Cmd-S / Ctrl-S.
  await page.keyboard.press("Control+s");
  const saveEvent = await page.evaluate(() => window.waitEvent((e) => e.event === "save").then(() => true, () => false));
  check("Ctrl-S : événement save", saveEvent);

  // Renommage d'une feuille par l'interface.
  await page.evaluate(() => { window.events.length = 0; });
  const tab = frame.locator(".luckysheet-sheets-item-name", { hasText: "Données 2" });
  await tab.dblclick();
  await page.keyboard.press("ControlOrMeta+a");
  await page.keyboard.type("Résultats");
  await page.keyboard.press("Enter");
  const renamed = await page.evaluate(() => window.waitEvent((e) => e.event === "sheetRenamed").catch(() => null));
  check(
    "feuille renommée : sheetRenamed",
    renamed?.oldName === "Données 2" && renamed?.newName === "Résultats",
    JSON.stringify(renamed),
  );
  const followed = await page.evaluate(async (id) => {
    window.events.length = 0;
    await window.request("setCellValues", { updates: [{ ref: "Feuille1!A1", v: 1 }] });
    return window.events.find((e) => e.subscription === id);
  }, subOther.subscription);
  check("l'abonnement suit la feuille renommée", followed?.ref === "Résultats!A1", JSON.stringify(followed?.ref));

  // Suppression par le menu contextuel de l'onglet.
  await page.evaluate(() => { window.events.length = 0; });
  await frame.locator(".luckysheet-sheets-item-name", { hasText: "Résultats" }).click({ button: "right" });
  await frame.locator(".fortune-sheet-list-item, .luckysheet-cols-menuitem", { hasText: /^\s*Delete\s*$/ }).first().click();
  const confirm = frame.locator(".fortune-modal-dialog button, .fortune-message-box-button", { hasText: /OK|Confirm/i });
  if (await confirm.count()) await confirm.first().click();
  const deleted = await page.evaluate(() => window.waitEvent((e) => e.event === "sheetDeleted").catch(() => null));
  check("feuille supprimée : sheetDeleted", deleted?.name === "Résultats", JSON.stringify(deleted));

  // save puis load(save) : le classeur est reproduit.
  const saved = await page.evaluate(() => window.request("save"));
  await page.evaluate((wb) => window.request("load", { workbook: wb }), saved.workbook);
  const resaved = await page.evaluate(() => window.request("save"));
  const differences = [];
  const compare = (a, b, where) => {
    if (JSON.stringify(a) === JSON.stringify(b)) return;
    if (a && b && typeof a === "object" && typeof b === "object") {
      for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) compare(a[key], b[key], `${where}.${key}`);
    } else differences.push(`${where}: ${JSON.stringify(a)?.slice(0, 60)} → ${JSON.stringify(b)?.slice(0, 60)}`);
  };
  compare(saved.workbook, resaved.workbook, "workbook");
  check(
    "load(save()) reproduit le classeur",
    differences.length === 0,
    differences.length ? differences.slice(0, 6).join(" ; ") : `${JSON.stringify(saved.workbook).length} caractères`,
  );

  // Fenêtre tierce : ignorée, et l'origine de l'hôte reste épinglée.
  await page.evaluate(() => {
    const evil = document.createElement("iframe");
    evil.src = "http://evil.test/evil.html";
    document.body.appendChild(evil);
  });
  await page.waitForTimeout(500);
  const evilFrame = page.frame({ url: /evil\.test/ });
  const evilReceived = await evilFrame.evaluate(() => window.received.length);
  const afterEvil = await page.evaluate(() => window.request("getValues", { ref: "Feuille1!A1" }));
  check(
    "messages d'une autre fenêtre ignorés",
    evilReceived === 0 && afterEvil.values[0][0] !== 666 && (await page.evaluate(() => window.stray.length)) === 0,
    `A1 = ${afterEvil.values[0][0]}`,
  );

  // Mesure : aller-retour setCellValues → values, une écriture par image.
  const roundTrips = await page.evaluate(async (id) => {
    const times = [];
    for (let k = 0; k < 60; k += 1) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      window.events.length = 0;
      const started = performance.now();
      window.send("setCellValues", { updates: [{ ref: "Feuille1!A1", v: 0.3 + k / 1000 }] });
      await window.waitEvent((e) => e.subscription === id);
      times.push(performance.now() - started);
    }
    return times;
  }, sub.subscription);
  console.log(`   mesure : aller-retour postMessage (autre origine), 300 formules : médiane ${median(roundTrips).toFixed(1)} ms, max ${Math.max(...roundTrips).toFixed(1)} ms`);
  await context.close();

  // ------------------------------------------------------------------
  for (const locale of ["fr-FR", "en-US"]) {
    console.log(`--- format d'archivage (${locale}) ---`);
    context = await newContext(locale);
    page = await openHost(context, "http://doccells.test/host.html");
    await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
    const archive = await page.evaluate(async (fixture) => {
      const iframe = document.getElementById("dc");
      const dc = iframe.contentWindow.docCells;
      await dc.load(fixture);
      const saved = dc.save();
      const keys = [...new Set(iframe.contentWindow.getSheetData().flatMap((sheet) => Object.keys(sheet)))];
      const values = dc.getValues("Feuille1!A7:D13");
      const other = dc.getValues("Données!B3");
      let refused = null;
      try {
        await dc.load({ ...fixture, version: 2 });
      } catch (error) {
        refused = error.message;
      }
      return { saved, keys, values, other, refused, after: dc.getValues("Feuille1!D7") };
    }, archiveFixture);
    const cellsOf = (workbook) =>
      workbook.sheets.map((sheet) => sheet.celldata.map(({ r, c, v }) => [r, c, v?.v ?? null, v?.f ?? null]));
    if (locale === "fr-FR") {
      const diff = listDifferences(archiveFixture, archive.saved);
      check("exemple v1 : load puis save le reproduit à l'identique", diff.length === 0, diff.slice(0, 4).join(" ; "));
    } else {
      check(
        "exemple v1 dans une autre langue : mêmes valeurs et formules",
        isDeepStrictEqual(cellsOf(archive.saved), cellsOf(archiveFixture)),
      );
    }
    check(
      `exemple v1 : valeurs recalculées (${locale})`,
      close(archive.values[0][3], 40.2) && close(archive.values[1][3], 8.04) && archive.values[2][2] === 46375 &&
        archive.values[4][0]?.error === "#DIV/0!" && archive.values[5][0] === 42 && archive.values[6][0] === "gros" &&
        close(archive.other[0][0], 40.2),
      JSON.stringify(archive.values.map((row) => row.filter((value) => value !== null))),
    );
    const unknown = archive.keys.filter(
      (key) => !ARCHIVED_SHEET_FIELDS.includes(key) && !UNARCHIVED_SHEET_FIELDS.includes(key),
    );
    check(`champs de feuille tous décrits dans WORKBOOK_FORMAT.md (${locale})`, unknown.length === 0, unknown.join(", "));
    check(
      `archive d'une version future refusée, classeur conservé (${locale})`,
      archive.refused === "Unsupported workbook version: 2" && close(archive.after[0][0], 40.2),
      archive.refused,
    );
    await context.close();
  }

  // ------------------------------------------------------------------
  console.log("--- origine restreinte (?embed=https://autre.test) ---");
  context = await newContext();
  page = await openHost(context, "http://hote.test/host.html", `embed=${encodeURIComponent("https://autre.test")}`);
  await page.waitForTimeout(3000);
  const restricted = await page.evaluate(() =>
    Promise.race([
      window.request("getValues", { ref: "Sheet1!A1" }).then(() => "réponse"),
      new Promise((resolve) => setTimeout(() => resolve("aucune réponse"), 1500)),
    ]),
  );
  const restrictedReady = await page.evaluate(() => window.events.some((e) => e.event === "ready"));
  check("hôte non autorisé : ni ready ni réponse", restricted === "aucune réponse" && !restrictedReady, restricted);
  await context.close();

  // ------------------------------------------------------------------
  console.log("--- hôte de même origine (window.docCells) ---");
  context = await newContext();
  page = await openHost(context, "http://doccells.test/host.html");
  await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
  const sync = await page.evaluate(async (wb) => {
    const dc = document.getElementById("dc").contentWindow.docCells;
    await dc.load(wb);
    const subscription = dc.subscribe("Feuille1!C1");
    const own = [];
    dc.on("values", (event) => own.push(event));
    const times = [];
    let last;
    for (let k = 0; k < 40; k += 1) {
      const started = performance.now();
      last = dc.setCellValues([{ ref: "Feuille1!A1", v: 0.4 + k / 1000 }]);
      times.push(performance.now() - started);
    }
    return { subscription, last, times, own: own.length };
  }, workbook());
  check(
    "setCellValues synchrone renvoie les valeurs",
    sync.last.values.length === 1 && close(sync.last.values[0].values[0][0], expectedSum(0.4 + 39 / 1000)) && sync.own === 0,
    `médiane ${median(sync.times).toFixed(2)} ms (recalcul seul, dessin à l'image suivante)`,
  );

  // Iframe masquée : recalculs et réponses continuent, aucun dessin ; un
  // seul dessin au retour.
  const hidden = await page.evaluate(async () => {
    const iframe = document.getElementById("dc");
    const dc = iframe.contentWindow.docCells;
    const frames = (n) => new Promise((resolve) => {
      let left = n;
      const step = () => (--left > 0 ? requestAnimationFrame(step) : resolve());
      requestAnimationFrame(step);
    });
    await frames(5);
    iframe.style.display = "none";
    await frames(5);
    const before = dc.stats().draws;
    const syncValues = dc.setCellValues([{ ref: "Feuille1!A1", v: 0.9 }]).values.length;
    window.events.length = 0;
    const response = await window.request("setCellValues", { updates: [{ ref: "Feuille1!A1", v: 0.95 }] });
    await frames(10);
    const whileHidden = dc.stats().draws - before;
    // load remonte le Workbook : son compteur de dessins repart de zéro.
    const loadResult = await window.request("load", { workbook: await window.request("save").then((r) => r.workbook) });
    const afterLoad = iframe.contentWindow.docCells.stats().draws;
    dc.setCellValues([{ ref: "Feuille1!A1", v: 0.97 }]);
    await frames(10);
    const whileHiddenAfterLoad = dc.stats().draws - afterLoad;
    const beforeShow = dc.stats().draws;
    iframe.style.display = "";
    await frames(15);
    return {
      syncValues,
      response: response.written,
      loaded: loadResult.sheets.length,
      whileHidden: whileHidden + whileHiddenAfterLoad,
      drawsDuringHiddenLoad: afterLoad,
      afterShow: dc.stats().draws - beforeShow,
    };
  });
  check(
    "iframe masquée : écritures, réponses et load continuent",
    hidden.syncValues === 1 && hidden.response === 1 && hidden.loaded === 2,
    JSON.stringify(hidden),
  );
  check(
    "iframe masquée : aucun dessin (load compris), un seul au retour",
    hidden.whileHidden === 0 && hidden.drawsDuringHiddenLoad === 0 && hidden.afterShow === 1,
    `${hidden.whileHidden} dessin(s) masquée, ${hidden.drawsDuringHiddenLoad} pendant load, ${hidden.afterShow} au retour`,
  );

  const perFrame = await page.evaluate(async () => {
    const dc = document.getElementById("dc").contentWindow.docCells;
    await new Promise((resolve) => setTimeout(resolve, 300));
    const draws = dc.stats().draws;
    for (let k = 0; k < 10; k += 1) dc.setCellValues([{ ref: "Feuille1!A1", v: 0.2 + k / 100 }]);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    return dc.stats().draws - draws;
  });
  check("10 écritures dans une image : un seul dessin", perFrame === 1, `${perFrame} dessin(s)`);

  // Barre de formule : A1 est sélectionnée ; une écriture rapide y apparaît
  // à la resynchronisation qui suit la rafale (300 ms).
  const formulaBar = await page.evaluate(async () => {
    const iframe = document.getElementById("dc");
    const dc = iframe.contentWindow.docCells;
    const read = () => iframe.contentDocument.querySelector(".fortune-fx-input")?.textContent;
    dc.setCellValues([{ ref: "Feuille1!A1", v: 0.125 }]);
    const immediately = read();
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { immediately, after: read() };
  });
  check(
    "barre de formule à jour après la rafale",
    formulaBar.after === "0.125",
    `${formulaBar.immediately} → ${formulaBar.after}`,
  );
  await context.close();

  // ------------------------------------------------------------------
  console.log("--- iframe chargée masquée (fenêtre de taille nulle) ---");
  context = await newContext();
  page = await openHost(context, "http://doccells.test/host.html", "embed", "hidden&");
  const hiddenStart = await page.evaluate(async (wb) => {
    await window.waitEvent((e) => e.event === "ready", 15000);
    const iframe = document.getElementById("dc");
    const dc = iframe.contentWindow.docCells;
    const size = [iframe.contentWindow.innerWidth, iframe.contentWindow.innerHeight];
    await dc.load(wb);
    const subscription = dc.subscribe("Feuille1!C1");
    const written = dc.setCellValues([{ ref: "Feuille1!A1", v: 0.25 }]);
    const drawsHidden = dc.stats().draws;
    iframe.style.display = "";
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { size, value: written.values[0]?.values[0][0], first: subscription.values[0][0], drawsHidden, drawsShown: dc.stats().draws };
  }, workbook());
  check(
    "iframe chargée masquée : ready, load et valeurs, dessin au retour",
    hiddenStart.size.join("x") === "0x0" && close(hiddenStart.first, expectedSum(1)) &&
      close(hiddenStart.value, expectedSum(0.25)) && hiddenStart.drawsHidden === 0 && hiddenStart.drawsShown >= 1,
    JSON.stringify(hiddenStart),
  );
  await context.close();

  // ------------------------------------------------------------------
  console.log("--- GEO : valeurs fournies par l'hôte (postMessage, ?lang=fr) ---");
  context = await newContext("en-US");
  page = await openHost(context, "http://hote.test/host.html", "embed&lang=fr");
  await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
  const geoFrame = page.frame({ url: /doccells\.test\/fortunesheet/ });
  const language = await geoFrame.evaluate(() => navigator.language);
  const frenchMenus = await geoFrame.locator(".dc-menu-root-button").allTextContents();
  check("?lang=fr : langue imposée", language === "fr" && frenchMenus.includes("Édition"), `${language} : ${frenchMenus.join(", ")}`);

  await page.evaluate((wb) => window.request("load", { workbook: wb }), hostWorkbook());
  const geo = await page.evaluate(async () => {
    const names = await window.request("hostNames");
    const sum = await window.request("subscribe", { ref: "Feuille1!C1" });
    const a1 = await window.request("subscribe", { ref: "Feuille1!A1" });
    window.events.length = 0;
    const result = await window.request("setHostValues", { updates: [{ name: "AB", v: 0.5 }] });
    const values = window.events.filter((e) => e.event === "values");
    const dependencies = [
      await window.request("hostDependencies", { ref: "Feuille1!C1" }),
      await window.request("hostDependencies", { ref: "Feuille1!A2:A10" }),
    ];
    let invalid = null;
    try {
      await window.request("setHostValues", { updates: [{ name: "AB", v: [1, "a"] }] });
    } catch (error) {
      invalid = error.message;
    }
    return { names, before: [a1.values, sum.values], result, values, dependencies, invalid, sum: sum.subscription };
  });
  const geoSum = geo.values.find((e) => e.subscription === geo.sum);
  check(
    "GEO : #N/A avant toute valeur, hostNames",
    geo.before[0][0][0]?.error === "#N/A" && geo.names.names.join() === "AB",
    JSON.stringify({ names: geo.names, a1: geo.before[0] }),
  );
  check(
    "setHostValues : values avant la réponse, 300 formules recalculées",
        // A1 (GEO), B2:B301, C1, D1 et 'Données 2'!A1.
    geoSum?.source === "host" && close(geoSum.values[0][0], expectedSum(0.5)) && geo.result.recalculated === N + 4,
    JSON.stringify(geo.result),
  );
  check(
    "hostDependencies, requête invalide",
    geo.dependencies[0].names.join() === "AB" && geo.dependencies[1].names.length === 0 && geo.invalid === "Invalid request",
    JSON.stringify(geo.dependencies),
  );

  const geoBurst = await page.evaluate(async (id) => {
    window.events.length = 0;
    for (let k = 1; k <= 20; k += 1) window.send("setHostValues", { updates: [{ name: "AB", v: 0.6 + k / 100 }] });
    const result = await window.request("getValues", { ref: "Feuille1!A1" });
    return { a1: result.values[0][0], events: window.events.filter((e) => e.subscription === id).length };
  }, geo.sum);
  check("rafale de 20 setHostValues fusionnée", geoBurst.a1 === 0.8 && geoBurst.events < 20, `${geoBurst.events} événements values pour 20 envois`);

  // Saisie de l'utilisateur : une formule GEO (nouveau nom), puis un nombre.
  const geoArea = await geoFrame.locator(".fortune-cell-area").boundingBox();
  const typed = await page.evaluate(() => window.request("subscribe", { ref: "Feuille1!E1" }));
  await page.evaluate(() => { window.events.length = 0; });
  await page.mouse.click(geoArea.x + 3 * 99 + 49, geoArea.y + 10);
  await page.keyboard.type('=GEO("CD")*2');
  await page.keyboard.press("Enter");
  const namesChanged = await page.evaluate(() => window.waitEvent((e) => e.event === "hostNamesChanged").catch(() => null));
  check("saisie d'une formule GEO : hostNamesChanged", namesChanged?.names.join() === "AB,CD", JSON.stringify(namesChanged?.names));
  const cd = await page.evaluate(async () => {
    await window.request("setHostValues", { updates: [{ name: "CD", v: 21 }] });
    return (await window.request("getValues", { ref: "Feuille1!D1" })).values[0][0];
  });
  check("la formule saisie lit la valeur de l'hôte", cd === 42, String(cd));
  await page.evaluate(() => { window.events.length = 0; });
  await page.mouse.click(geoArea.x + 4 * 99 + 49, geoArea.y + 10);
  await page.keyboard.type("7");
  await page.keyboard.press("Enter");
  const typedNumber = await page.evaluate((id) => window.waitEvent((e) => e.event === "values" && e.subscription === id).catch(() => null), typed.subscription);
  check("nombre saisi au clavier rendu comme un nombre", typedNumber?.values[0][0] === 7, JSON.stringify(typedNumber?.values));

  const reloaded = await page.evaluate(async (wb) => {
    window.events.length = 0;
    await window.request("load", { workbook: wb, hostValues: [{ name: "AB", v: 1 }] });
    const sum = window.events.find((e) => e.event === "values" && e.source === "load" && e.ref === "Feuille1!C1");
    const cleared = await window.request("getValues", { ref: "Feuille1!D1" });
    await window.request("load", { workbook: wb });
    const empty = await window.request("getValues", { ref: "Feuille1!A1" });
    return { sum: sum?.values[0][0], cleared: cleared.values[0][0], empty: empty.values[0][0] };
  }, hostWorkbook());
  check(
    "load : hostValues avant le recalcul, valeurs précédentes effacées",
    close(reloaded.sum, expectedSum(1)) && reloaded.empty?.error === "#N/A",
    JSON.stringify(reloaded),
  );
  await context.close();

  // ------------------------------------------------------------------
  console.log("--- GEO : hôte de même origine (window.docCells) ---");
  context = await newContext();
  page = await openHost(context, "http://doccells.test/host.html");
  await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
  const geoSync = await page.evaluate(async (wb) => {
    const dc = document.getElementById("dc").contentWindow.docCells;
    await dc.load(wb);
    const names = dc.hostNames();
    const dependencies = dc.hostDependencies("Feuille1!B2:B301");
    dc.subscribe("Feuille1!C1");
    const times = [];
    let last;
    for (let k = 0; k < 40; k += 1) {
      const started = performance.now();
      last = dc.setHostValues([{ name: "AB", v: 0.4 + k / 1000 }]);
      times.push(performance.now() - started);
    }
    return { names, dependencies, last, times };
  }, hostWorkbook());
  check(
    "setHostValues synchrone renvoie les valeurs",
    geoSync.names.join() === "AB" && geoSync.dependencies.join() === "AB" &&
      geoSync.last.values.length === 1 && close(geoSync.last.values[0].values[0][0], expectedSum(0.4 + 39 / 1000)),
    `médiane ${median(geoSync.times).toFixed(2)} ms pour 300 formules (recalcul seul)`,
  );
  await context.close();

  // ------------------------------------------------------------------
  console.log("--- archive piégée (hôte de même origine) ---");
  context = await newContext();
  page = await openHost(context, "http://doccells.test/host.html");
  await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
  const trapped = await page.evaluate(async (wb) => {
    window.__xss = [];
    const dc = document.getElementById("dc").contentWindow.docCells;
    await dc.load(wb);
    return { images: dc.save().sheets[0].images?.length ?? 0 };
  }, trappedWorkbook());
  const trapFrame = page.frame({ url: /doccells\.test\/fortunesheet/ });
  const trapArea = await trapFrame.locator(".fortune-cell-area").boundingBox();
  const cellAt = (r) => ({ x: trapArea.x + 49, y: trapArea.y + r * 20 + 10 });
  const fxTexts = [];
  for (const r of [0, 1, 2, 4, 5, 6]) {
    await page.mouse.click(cellAt(r).x, cellAt(r).y);
    await page.waitForTimeout(150);
    fxTexts.push(await trapFrame.locator(".fortune-fx-input").textContent());
    await page.mouse.dblclick(cellAt(r).x, cellAt(r).y);
    await page.waitForTimeout(150);
    await page.keyboard.press("End");
    await page.keyboard.type(" ");
    await page.waitForTimeout(150);
    await page.keyboard.press("Escape");
  }
  await page.mouse.click(cellAt(0).x, cellAt(0).y);
  await page.mouse.click(cellAt(5).x, cellAt(5).y, { modifiers: ["Shift"] });
  await page.keyboard.press("ControlOrMeta+c");
  await trapFrame.locator(".luckysheet-sheets-item-name").nth(1).click();
  await page.waitForTimeout(800);
  const fired = await page.evaluate(() => window.__xss);
  check(
    "aucun script de l'archive exécuté (formule, texte, texte enrichi, commentaire, aide, copie, onglet)",
    fired.length === 0,
    fired.length ? fired.join(", ") : "aucun",
  );
  check(
    "les textes s'affichent tels quels",
    fxTexts[0] === `="${xss("formula")}"` && fxTexts[1] === `<span>${xss("span-text")}</span>` &&
      fxTexts[5] === '=IF(SUM(B1:B3)<2,"a<b&c",1)',
    JSON.stringify([fxTexts[0], fxTexts[1], fxTexts[5]]),
  );
  check(
    "image d'une autre adresse retirée, aucune requête",
    trapped.images === 0 && !context.evilRequests.some((url) => url.includes("pixel")),
    `${trapped.images} image(s), ${context.evilRequests.length} requête(s)`,
  );
  await context.close();

  // ------------------------------------------------------------------
  console.log("--- désignation de cellules (setPicking, pick) ---");
  context = await newContext();
  page = await openHost(context, "http://doccells.test/host.html", "embed&singleSheet");
  await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
  await page.evaluate(async (wb) => {
    const dc = document.getElementById("dc").contentWindow.docCells;
    await dc.load(wb);
    window.picks = [];
    dc.on("pick", ({ ref, done }) => window.picks.push({ ref, done }));
  }, { format: "doccells", version: 1, sheets: [{ name: "Feuille 1", order: 0, celldata: [], config: {} }] });
  const pickFrame = page.frame({ url: /doccells\.test\/fortunesheet/ });
  const pickArea = await pickFrame.locator(".fortune-cell-area").boundingBox();
  const nameBox = () => pickFrame.locator(".fortune-name-box").textContent();
  // Colonnes de 100 px, lignes de 20 px (valeurs par défaut de DocCells).
  const at = (r, c) => ({ x: pickArea.x + c * 100 + 50, y: pickArea.y + r * 20 + 10 });
  await page.mouse.click(at(0, 0).x, at(0, 0).y);
  const before = await nameBox();
  await page.evaluate(() => {
    const input = document.body.appendChild(document.createElement("input"));
    input.id = "formula";
    input.focus();
  });
  const protocolAnswers = await page.evaluate(async () => [
    await window.request("setPicking", { on: true }),
    await window.request("setPicking", { on: 1 }).catch((error) => error.message),
  ]);
  check("setPicking par le protocole", protocolAnswers[0] === null && protocolAnswers[1] === "Invalid request", JSON.stringify(protocolAnswers));
  await page.mouse.move(at(1, 1).x, at(1, 1).y);
  await page.mouse.down();
  await page.mouse.move(at(2, 1).x, at(2, 1).y, { steps: 3 });
  const frameBox = await pickFrame.locator(".dc-pick-frame").boundingBox();
  await page.mouse.move(at(3, 2).x, at(3, 2).y, { steps: 3 });
  await page.mouse.up();
  const dragged = await page.evaluate(() => ({
    picks: window.picks.splice(0),
    focus: document.activeElement.id,
  }));
  check(
    "glissé : pick à chaque plage, done au relâchement",
    JSON.stringify(dragged.picks) ===
      JSON.stringify([
        { ref: "'Feuille 1'!B2", done: false },
        { ref: "'Feuille 1'!B2:B3", done: false },
        { ref: "'Feuille 1'!B2:C4", done: false },
        { ref: "'Feuille 1'!B2:C4", done: true },
      ]),
    JSON.stringify(dragged.picks),
  );
  check(
    "cadre de la plage désignée pendant le glissé",
    frameBox && Math.abs(frameBox.x - (pickArea.x + 99)) <= 2 && Math.abs(frameBox.height - 41) <= 2,
    JSON.stringify(frameBox),
  );
  check(
    "sélection et focus inchangés",
    (await nameBox()) === before && dragged.focus === "formula",
    `${before} → ${await nameBox()}, focus ${dragged.focus}`,
  );
  await page.mouse.dblclick(at(4, 3).x, at(4, 3).y);
  await page.waitForTimeout(150);
  const clicked = await page.evaluate(() => ({
    picks: window.picks.splice(0),
    focus: document.activeElement.id,
  }));
  check(
    "double clic : pick, aucun éditeur de cellule",
    clicked.picks.at(-1)?.ref === "'Feuille 1'!D5" && clicked.picks.every((p) => p.ref === "'Feuille 1'!D5") &&
      clicked.focus === "formula" && (await nameBox()) === before &&
      !(await pickFrame.locator(".luckysheet-cell-input.editable, #luckysheet-rich-text-editor:focus").count()),
    JSON.stringify(clicked),
  );
  await page.evaluate(() => document.getElementById("dc").contentWindow.docCells.setPicking(false));
  await page.mouse.click(at(4, 3).x, at(4, 3).y);
  await page.waitForTimeout(150);
  check(
    "fermé : plus de cadre ni de pick, la grille sélectionne",
    (await pickFrame.locator(".dc-pick-frame").count()) === 0 &&
      (await page.evaluate(() => window.picks.length)) === 0 && (await nameBox()) === "D5",
    await nameBox(),
  );
  await context.close();

  // ------------------------------------------------------------------
  console.log("--- nom de l'hôte dans la formule éditée (insertHostName, formulaEditing) ---");
  context = await newContext();
  page = await openHost(context, "http://doccells.test/host.html", "embed&singleSheet");
  await page.evaluate(() => window.waitEvent((e) => e.event === "ready", 15000));
  await page.evaluate(async (wb) => {
    const dc = document.getElementById("dc").contentWindow.docCells;
    await dc.load(wb);
    window.editing = [];
    dc.on("formulaEditing", ({ on }) => window.editing.push(on));
    // Deux « points » de la figure, hors de l'iframe : un clic (qui prend le
    // focus à l'iframe, sans preventDefault) insère leur nom.
    window.inserted = [];
    for (const [name, top] of [["A", 100], ["B", 140]]) {
      const point = document.body.appendChild(document.createElement("button"));
      point.textContent = name;
      point.style.cssText = `position:absolute;left:1220px;top:${top}px;width:40px;height:30px`;
      point.addEventListener("click", () => window.inserted.push(dc.insertHostName(name)));
    }
  }, { format: "doccells", version: 1, sheets: [{ name: "Feuille 1", order: 0, celldata: [], config: {} }] });
  const nameFrame = page.frame({ url: /doccells\.test\/fortunesheet/ });
  const nameArea = await nameFrame.locator(".fortune-cell-area").boundingBox();
  const cell = (r, c) => ({ x: nameArea.x + c * 100 + 50, y: nameArea.y + r * 20 + 10 });
  const clickPoint = (name) => page.mouse.click(1240, name === "A" ? 115 : 155);
  const readState = () =>
    page.evaluate(() => ({ editing: window.editing.splice(0), inserted: window.inserted.splice(0) }));
  const formulaOf = (ref) =>
    page.evaluate((target) => {
      const sheet = document.getElementById("dc").contentWindow.docCells.save().sheets[0];
      const [r, c] = target;
      return sheet.celldata.find((item) => item.r === r && item.c === c)?.v?.f ?? null;
    }, ref);

  // Cellule sélectionnée, sans édition : rien.
  await page.mouse.click(cell(1, 1).x, cell(1, 1).y);
  await clickPoint("A");
  const idle = await readState();
  check("sans édition : rien d'inséré, pas de formulaEditing", idle.inserted.join() === "false" && idle.editing.length === 0, JSON.stringify(idle));

  // Formule tapée, puis clics sur A puis B (B remplace A), puis suite au clavier.
  await page.mouse.click(cell(1, 1).x, cell(1, 1).y);
  await page.keyboard.type("=2*");
  await page.waitForTimeout(100);
  await clickPoint("A");
  const afterA = await nameFrame.locator("#luckysheet-rich-text-editor").textContent();
  await clickPoint("B");
  await page.waitForTimeout(50);
  const afterB = {
    cell: await nameFrame.locator("#luckysheet-rich-text-editor").textContent(),
    bar: await nameFrame.locator(".fortune-fx-input").textContent(),
    focus: await nameFrame.evaluate(() => document.activeElement?.id),
  };
  await page.keyboard.type("+1");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(150);
  const typedState = await readState();
  check(
    "édition : GEO inséré au curseur, focus rendu à l'éditeur",
    afterA === '=2*GEO("A")' && afterB.cell === '=2*GEO("B")' && afterB.bar === '=2*GEO("B")' &&
      afterB.focus === "luckysheet-rich-text-editor",
    JSON.stringify({ afterA, afterB }),
  );
  check(
    "deux clics de suite : le second remplace le premier, la saisie continue",
    (await formulaOf([1, 1])) === '=2*GEO("B")+1' && typedState.inserted.join() === "true,true",
    `${await formulaOf([1, 1])} ${JSON.stringify(typedState.inserted)}`,
  );
  check("formulaEditing : true à l'ouverture, false à la validation", typedState.editing.join() === "true,false", JSON.stringify(typedState.editing));
  const geoValue = await page.evaluate(() => {
    const dc = document.getElementById("dc").contentWindow.docCells;
    dc.setHostValues([{ name: "B", v: 5 }]);
    return dc.getValues("'Feuille 1'!B2")[0][0];
  });
  check("la formule insérée lit la valeur de l'hôte", geoValue === 11, String(geoValue));

  // Éditeur vide (double clic sur une cellule vide) : formule complète.
  await page.mouse.dblclick(cell(2, 1).x, cell(2, 1).y);
  await page.waitForTimeout(100);
  await clickPoint("A");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(150);
  const emptyState = await readState();
  check(
    "éditeur vide : =GEO(\"A\")",
    (await formulaOf([2, 1])) === '=GEO("A")' && emptyState.editing.join() === "true,false",
    `${await formulaOf([2, 1])} ${JSON.stringify(emptyState)}`,
  );

  // Texte qui n'est pas une formule : rien, formulaEditing faux dès la frappe.
  await page.mouse.click(cell(3, 1).x, cell(3, 1).y);
  await page.keyboard.type("abc");
  await page.waitForTimeout(100);
  await clickPoint("A");
  const textEditor = await nameFrame.locator("#luckysheet-rich-text-editor").textContent();
  await nameFrame.locator("#luckysheet-rich-text-editor").focus();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  const textState = await readState();
  check(
    "texte (pas une formule) : rien d'inséré",
    textEditor === "abc" && textState.inserted.join() === "false" && !textState.editing.includes(true),
    JSON.stringify({ textEditor, textState }),
  );

  // Barre de formule : insertion au curseur, dans la barre.
  await page.mouse.click(cell(4, 1).x, cell(4, 1).y);
  await nameFrame.locator(".fortune-fx-input").click();
  await page.keyboard.type("=1+");
  await page.waitForTimeout(100);
  await clickPoint("B");
  await page.waitForTimeout(50);
  const barFocus = await nameFrame.evaluate(() => document.activeElement?.className);
  await page.keyboard.type("*3");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(150);
  check(
    "barre de formule : insertion au curseur",
    (await formulaOf([4, 1])) === '=1+GEO("B")*3' && String(barFocus).includes("fortune-fx-input"),
    `${await formulaOf([4, 1])}, focus ${barFocus}`,
  );

  // Entrée dans la barre de formule laisse FortuneSheet éditer la cellule
  // suivante : Échap la ferme.
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  const nameAnswers = await page.evaluate(async () => [
    await window.request("insertHostName", { name: "A" }),
    await window.request("insertHostName", { name: 'A"B' }).catch((error) => error.message),
    await window.request("insertHostName", {}).catch((error) => error.message),
  ]);
  check(
    "insertHostName par le protocole",
    nameAnswers[0]?.inserted === false && nameAnswers[1] === "Invalid request" && nameAnswers[2] === "Invalid request",
    JSON.stringify(nameAnswers),
  );
  await context.close();
} finally {
  await browser.close();
}

const ok = results.filter(Boolean).length;
console.log(`\n${ok}/${results.length} tests OK`);
process.exit(ok === results.length ? 0 : 1);
