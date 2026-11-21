// Barres de DocCells (menus et boutons) dessinées dans la page hôte par
// window.docCells.mountChrome (EMBED.md, section 14), police et taille du
// texte des menus données par l'hôte, apparence des menus par les propriétés
// --dc-menu-*, événement dialog et son voile,
// feuille unique (&singleSheet) et mode élève intégré (&mode=student).
// Contre le build dist/, sans serveur ni port (comme embedMode.browser.mjs).
//
//   npx vite build --outDir /tmp/dc-dist
//   DOCCELLS_DIST=/tmp/dc-dist \
//   PLAYWRIGHT_MODULE=../docgeo_MAIN/node_modules/playwright/index.mjs \
//   SHOTS=/tmp/dc-shots node tests/browser/chromePortal.browser.mjs
//
// Page hôte (http://doccells.test/host.html, même origine que DocCells) : en
// haut une bande de la hauteur des barres de DocGeo (menus 32 px, boutons
// 48 px) avec un faux menu « Fichier » suivi de l'élément menus, puis
// l'élément toolbar ; en dessous, une fausse figure (zone cliquable et champ
// de saisie) à côté de l'iframe. Elle note les événements dialog reçus par
// window.docCells et par le protocole postMessage. Chaque point vérifié est
// affiché, avec des captures dans SHOTS.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const playwrightModule = process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(path.resolve(process.env.PLAYWRIGHT_MODULE)).href
  : "playwright";
const { chromium } = await import(playwrightModule);

const DIST = process.env.DOCCELLS_DIST;
if (!DIST || !fs.existsSync(path.join(DIST, "index.html"))) {
  console.error("DOCCELLS_DIST doit pointer vers un dossier dist/ construit.");
  process.exit(2);
}
const SHOTS = process.env.SHOTS || null;
if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });

const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".json": "application/json",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const MENU_H = 32;
const BAR_H = 48;
const HOST_HTML = `<!doctype html><html><head><style>
  body { margin: 0; font: 13px system-ui, sans-serif; }
  #strip { position: relative; z-index: 10; background: #fff; border-bottom: 1px solid #e2e8f0; }
  #menurow { height: ${MENU_H}px; display: flex; align-items: stretch; }
  #file { padding: 0 10px; border: 0; background: none; font: inherit; }
  #menus { flex: 1; min-width: 0; height: ${MENU_H}px; }
  #toolbar { height: ${BAR_H}px; background: #f8fafc; }
  #main { display: flex; }
  #figure { width: 260px; height: 640px; background: #eef6ff; box-sizing: border-box; padding: 12px; }
  #dc { width: 1000px; height: 640px; border: 0; }
</style></head><body>
<div id="strip">
  <div id="menurow"><button id="file">Fichier</button><div id="menus"></div></div>
  <div id="toolbar"></div>
</div>
<div id="main">
  <div id="figure"><div id="canvas" style="height:300px;background:#dbeafe">figure</div><input id="field" value="x = 1"></div>
  <iframe id="dc"></iframe>
</div>
<script>
const iframe = document.getElementById("dc");
window.dc = () => iframe.contentWindow.docCells;
window.dialogEvents = { window: [], message: [] };
// Événements complets ({ open, veil }), remis à zéro par les tests du voile.
window.dialogFull = { window: [], message: [] };
window.addEventListener("message", ({ source, data }) => {
  if (source !== iframe.contentWindow || data?.doccells !== 1) return;
  if (data.event === "ready") iframe.contentWindow.postMessage({ doccells: 1, id: 1, type: "hostNames" }, "*");
  if (data.event === "dialog") {
    window.dialogEvents.message.push(data.open);
    window.dialogFull.message.push({ open: data.open, veil: data.veil });
  }
});
window.listenDialogs = () => window.dc().on("dialog", (event) => {
  window.dialogEvents.window.push(event.open);
  window.dialogFull.window.push({ open: event.open, veil: event.veil });
});
iframe.src = new URLSearchParams(location.search).get("src");
</script></body></html>`;

// A1 nombre gras, B1 nombre, C1 texte, A2:A5 nombres.
const workbook = () => ({
  format: "doccells",
  version: 1,
  sheets: [{
    name: "Feuille1",
    order: 0,
    config: {},
    celldata: [
      { r: 0, c: 0, v: { v: 1.5, m: "1.5", ct: { fa: "General", t: "n" }, bl: 1 } },
      { r: 0, c: 1, v: { v: 2, m: "2", ct: { fa: "General", t: "n" } } },
      { r: 0, c: 2, v: { v: "texte", m: "texte", ct: { fa: "General", t: "g" } } },
      { r: 1, c: 0, v: { v: 10, m: "10", ct: { fa: "General", t: "n" } } },
      { r: 2, c: 0, v: { v: 20, m: "20", ct: { fa: "General", t: "n" } } },
    ],
  }],
});

const results = [];
const check = (name, ok, detail = "") => {
  results.push(ok);
  console.log(`${ok ? "✅" : "❌"} ${name}${detail ? ` — ${detail}` : ""}`);
};
const note = (text) => console.log(`   ${text}`);

const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({ locale: "en-US", viewport: { width: 1300, height: 760 } });
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

const shot = async (page, name, clip) => {
  if (!SHOTS) return;
  await page.screenshot({ path: path.join(SHOTS, `${name}.png`), clip });
};

const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (error) => {
  pageErrors.push(error.message);
  console.log("  [pageerror]", error.message);
});
page.on("console", (message) => {
  if (message.type() === "error") console.log("  [console]", message.text().slice(0, 200));
});
const src = "http://doccells.test/fortunesheet/?embed";
await page.goto(`http://doccells.test/host.html?src=${encodeURIComponent(src)}`);
await page.waitForFunction(() => window.dc()?.whenReady, null, { timeout: 15000 });
await page.evaluate(() => window.dc().whenReady());
const frame = page.frame({ url: /doccells\.test\/fortunesheet/ });
await page.evaluate((wb) => window.dc().load(wb), workbook());
await page.evaluate(() => window.listenDialogs());
await page.waitForTimeout(300);
const dialogEvents = () => page.evaluate(() => ({ ...window.dialogEvents }));

const iframeBox = await page.locator("#dc").boundingBox();
const cellArea = async () => {
  const box = await frame.locator(".fortune-cell-area").boundingBox();
  return { cell: (r, c) => ({ x: box.x + c * 100 + 50, y: box.y + r * 20 + 10 }) };
};
const clickCell = async (r, c, options) => {
  const { cell } = await cellArea();
  await page.mouse.click(cell(r, c).x, cell(r, c).y, options);
};
const cellOf = async (r, c) => page.evaluate(([r, c]) => {
  const sheet = window.dc().save().sheets[0];
  return sheet.celldata.find((item) => item.r === r && item.c === c)?.v ?? null;
}, [r, c]);

// Description des barres pour comparer avant / après : tailles, polices,
// couleurs et icônes de chaque élément, positions relatives à la barre.
const describe = (root, selector) => {
  const bar = root.querySelector(selector);
  if (!bar) return null;
  const base = bar.getBoundingClientRect();
  const view = bar.ownerDocument.defaultView;
  const items = Array.from(bar.querySelectorAll(".fortune-toolbar-item, .dc-menu-root-button")).map((item) => {
    const rect = item.getBoundingClientRect();
    const style = view.getComputedStyle(item);
    const use = item.querySelector("use");
    const svg = item.querySelector("svg");
    const svgRect = svg?.getBoundingClientRect();
    // Une icône <use> visible a une boîte de dessin non vide.
    let drawn = null;
    try {
      drawn = use ? use.getBBox().width > 0 : null;
    } catch {
      drawn = false;
    }
    return {
      label: item.getAttribute("aria-label") || item.textContent.trim().slice(0, 20),
      x: Math.round(rect.left - base.left), y: Math.round(rect.top - base.top),
      w: Math.round(rect.width), h: Math.round(rect.height),
      font: `${style.fontFamily}|${style.fontSize}|${style.fontWeight}|${style.color}`,
      bg: style.backgroundColor,
      icon: svgRect ? `${Math.round(svgRect.width)}x${Math.round(svgRect.height)}` : "",
      drawn,
    };
  });
  const style = view.getComputedStyle(bar);
  return {
    w: Math.round(base.width), h: Math.round(base.height),
    bar: `${style.backgroundColor}|${style.borderBottom}|${style.fontFamily}`,
    items,
  };
};
const compare = (a, b) => {
  const out = [];
  if (!a || !b) return ["barre absente"];
  // Hauteur et position verticale : imposées par l'élément de l'hôte
  // (vérifiées à part).
  if (a.bar !== b.bar) out.push(`barre ${a.bar} → ${b.bar}`);
  // La barre de l'iframe range dans « More » ce qui ne tient pas : comparer
  // jusque-là.
  const more = (list) => {
    const index = list.findIndex((item) => item.label === "More");
    return index < 0 ? list.length : index;
  };
  const count = Math.min(more(a.items), more(b.items));
  if (more(a.items) !== more(b.items)) out.push(`(${more(a.items)} → ${more(b.items)} éléments avant « More »)`);
  for (let i = 0; i < count; i += 1) {
    const x = a.items[i];
    const y = b.items[i];
    for (const key of ["label", "x", "w", "font", "bg", "icon", "drawn"]) {
      if (x[key] !== y[key]) out.push(`${x.label} ${key}: ${x[key]} → ${y[key]}`);
    }
  }
  return out;
};

// 3. Double-clic dans une cellule, « abc », Gras, « def », Entrée : la saisie
// est-elle gardée, la cellule garde-t-elle le focus ?
const boldWhileEditing = async (boldButton, r, c) => {
  const { cell } = await cellArea();
  await page.mouse.dblclick(cell(r, c).x, cell(r, c).y);
  await page.waitForTimeout(150);
  await page.keyboard.type("abc");
  await page.waitForTimeout(100);
  await boldButton.click();
  await page.waitForTimeout(150);
  const focus = await frame.evaluate(() => ({
    active: document.activeElement?.className || document.activeElement?.tagName,
    editing: window.getComputedStyle(document.querySelector(".luckysheet-input-box")).zIndex !== "-1",
  }));
  const hostActive = await page.evaluate(() => document.activeElement?.id || document.activeElement?.tagName);
  await page.keyboard.type("def");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(150);
  const value = await cellOf(r, c);
  const text = value?.ct?.s ? value.ct.s.map((part) => part.v).join("") : value?.v;
  const boldParts = value?.ct?.s ? value.ct.s.filter((part) => part.bl === 1).map((part) => part.v).join("") : "";
  return {
    ok: text === "abcdef" && focus.editing,
    detail: `cellule « ${text} », en gras « ${boldParts || (value?.bl === 1 ? "tout" : "")} » ; après le clic : focus hôte ${hostActive}, iframe ${focus.active}, édition ${focus.editing}`,
  };
};
let boldWhileEditingBaseline = null;

// Apparence des menus (EMBED.md, section 14) : valeurs de DocGeo données par
// l'hôte, et ce qu'on attend avec et sans elles.
const DOCGEO_MENU_VARS = {
  "--dc-menu-color": "#1f2937",
  "--dc-menu-title-radius": "6px",
  "--dc-menu-list-padding": "4px",
  "--dc-menu-list-min-width": "220px",
  "--dc-menu-list-border": "1px solid #d1d5db",
  "--dc-menu-list-shadow": "0 6px 20px rgb(0 0 0 / 0.14)",
  "--dc-menu-item-height": "32px",
  "--dc-menu-item-padding": "6px 12px 6px 4px",
  "--dc-menu-item-radius": "5px",
  "--dc-menu-item-hover-background": "#2563eb",
  "--dc-menu-item-hover-color": "#fff",
  "--dc-menu-icon-size": "18px",
  "--dc-menu-shortcut-opacity": "0.6",
  "--dc-menu-divider-margin": "4px 8px",
};
const DOCCELLS_LOOK = {
  color: "rgb(32, 33, 36)", titleRadius: "4px", listPadding: "8px 0px", listMinWidth: "288px",
  listBorder: "1px rgb(218, 220, 224)", itemHeight: 38, itemRadius: "0px",
  hoverBackground: "rgb(241, 243, 244)", hoverColor: "rgb(32, 33, 36)", iconSize: "22x22",
  iconStroke: "rgb(75, 85, 99)", chevron: "rgb(32, 33, 36)", iconInside: true, submenuAligned: true,
  shortcutColor: "rgb(32, 33, 36)", shortcutOpacity: "0.45", dividerMargin: "8px 0px",
  openParentBackground: "rgb(241, 243, 244)",
};
const DOCGEO_LOOK = {
  color: "rgb(31, 41, 55)", titleRadius: "6px", listPadding: "4px 4px", listMinWidth: "220px",
  listBorder: "1px rgb(209, 213, 219)", itemHeight: 32, itemRadius: "5px",
  hoverBackground: "rgb(37, 99, 235)", hoverColor: "rgb(255, 255, 255)", iconSize: "18x18",
  iconStroke: "rgb(255, 255, 255)", chevron: "rgb(255, 255, 255)", iconInside: true, submenuAligned: true,
  shortcutColor: "rgb(255, 255, 255)", shortcutOpacity: "0.6", dividerMargin: "4px 8px",
  openParentBackground: "rgb(37, 99, 235)",
};
const lookDiff = (look, expected) =>
  Object.entries(expected)
    .filter(([key, value]) => look[key] !== value)
    .map(([key, value]) => `${key}: ${JSON.stringify(look[key])} au lieu de ${JSON.stringify(value)}`);

// Ouvre Format, survole sa première ligne à sous-menu (Nombre, dont les
// lignes ont des exemples en raccourci), puis une ligne à raccourci du
// sous-menu ; relève police, tailles et couleurs, puis referme.
// scope : la page (barre sortie, prefix "#menus ") ou l'iframe (prefix "").
const menuLooks = async (scope, prefix, shotName) => {
  const rootButton = scope.locator(`${prefix}.dc-menu-root-button`, { hasText: "Format" });
  await rootButton.click();
  await scope.locator(`${prefix}.dc-menu-popover > .dc-menu-item-wrap > .dc-menu-item:has(.dc-menu-chevron)`).first().hover();
  await page.waitForTimeout(100);
  const inHost = prefix !== "";
  const first = await scope.evaluate((inHost) => {
    const root = inHost ? document.getElementById("menus").shadowRoot : document;
    const style = (element) => getComputedStyle(element);
    const popover = root.querySelector(".dc-menu-root > .dc-menu-popover");
    const parent = popover.querySelector(":scope > .dc-menu-item-wrap > .dc-menu-item:has(.dc-menu-chevron)");
    const plain = Array.from(popover.querySelectorAll(":scope > .dc-menu-item-wrap > .dc-menu-item"))
      .find((item) => item !== parent && !item.disabled);
    const icon = parent.querySelector(".dc-menu-icon svg");
    const parentBox = parent.getBoundingClientRect();
    const iconBox = icon.getBoundingClientRect();
    const submenu = parent.parentElement.querySelector(".dc-menu-submenu");
    const subFirst = submenu.querySelector(".dc-menu-item");
    const divider = popover.querySelector(".dc-menu-divider");
    const p = style(popover);
    return {
      fonts: [root.querySelector(".dc-menu-root-button"), parent, plain, subFirst]
        .map((element) => style(element).fontFamily),
      color: style(plain).color,
      titleRadius: style(root.querySelector(".dc-menu-root-button")).borderTopLeftRadius,
      listPadding: `${p.paddingTop} ${p.paddingLeft}`,
      listMinWidth: p.minWidth,
      listBorder: `${p.borderTopWidth} ${p.borderTopColor}`,
      itemHeight: Math.round(plain.getBoundingClientRect().height),
      itemRadius: style(parent).borderTopLeftRadius,
      hoverBackground: style(parent).backgroundColor,
      hoverColor: style(parent).color,
      iconSize: `${Math.round(iconBox.width)}x${Math.round(iconBox.height)}`,
      iconStroke: style(icon).stroke,
      chevron: style(parent.querySelector(".dc-menu-chevron")).borderLeftColor,
      iconInside: iconBox.top >= parentBox.top && iconBox.bottom <= parentBox.bottom,
      submenuAligned: Math.abs(subFirst.getBoundingClientRect().top - parentBox.top) <= 1,
      dividerMargin: divider ? `${style(divider).marginTop} ${style(divider).marginLeft}` : null,
    };
  }, inHost);
  await scope.locator(`${prefix}.dc-menu-submenu .dc-menu-item:has(.dc-menu-shortcut)`).first().hover();
  await page.waitForTimeout(100);
  const second = await scope.evaluate((inHost) => {
    const root = inHost ? document.getElementById("menus").shadowRoot : document;
    const item = Array.from(root.querySelectorAll(".dc-menu-submenu .dc-menu-item"))
      .find((element) => element.matches(":hover") && element.querySelector(".dc-menu-shortcut"));
    const parent = item.closest(".dc-menu-submenu").parentElement.querySelector(":scope > .dc-menu-item");
    const shortcut = getComputedStyle(item.querySelector(".dc-menu-shortcut"));
    return {
      fonts: [getComputedStyle(item.querySelector(".dc-menu-shortcut")).fontFamily],
      shortcutColor: shortcut.color,
      shortcutOpacity: shortcut.opacity,
      openParentBackground: getComputedStyle(parent).backgroundColor,
    };
  }, inHost);
  if (shotName) await shot(page, shotName, { x: 0, y: 0, width: 900, height: 520 });
  await rootButton.click();
  if (await scope.locator(`${prefix}.dc-menu-popover`).count()) await page.keyboard.press("Escape");
  const fonts = [...new Set([...first.fonts, ...second.fonts])];
  return { ...first, ...second, fonts };
};

try {
  // ------------------------------------------------------------------
  console.log("--- 0. barres dans l'iframe, puis mountChrome ---");
  // Même sélection (B1, pas en gras) pour les deux descriptions.
  await clickCell(0, 1);
  await page.mouse.move(1250, 700);
  const before = await frame.evaluate((fn) => {
    const describe = new Function(`return (${fn})`)();
    return {
      toolbar: describe(document, ".fortune-toolbar"),
      menus: describe(document, ".dc-menu-bar"),
      menuBarHeight: Math.round(document.querySelector(".dc-menu-bar").getBoundingClientRect().height),
      gridTop: Math.round(document.querySelector(".fortune-cell-area").getBoundingClientRect().top),
    };
  }, describe.toString());
  await shot(page, "0-iframe-bars", { x: iframeBox.x, y: iframeBox.y, width: 1000, height: 110 });
  boldWhileEditingBaseline = await boldWhileEditing(frame.locator('.fortune-toolbar-button[aria-label^="Bold"]'), 3, 3);
  await page.mouse.move(1250, 700);

  // Menus à la taille et à la police de ceux de l'iframe (15 px, Inter…)
  // pour comparer ; la page hôte donne ensuite les siennes (point 1, taille
  // du texte, apparence des menus).
  const mountTimed = await page.evaluate(() => {
    document.getElementById("menus").style.fontSize = "15px";
    document.getElementById("menus").style.fontFamily = "Inter, Roboto, Arial, Helvetica, sans-serif";
    const started = performance.now();
    const ok = window.dc().mountChrome({
      menus: document.getElementById("menus"),
      toolbar: document.getElementById("toolbar"),
    });
    const ms = performance.now() - started;
    const menus = document.getElementById("menus").shadowRoot;
    const toolbar = document.getElementById("toolbar").shadowRoot;
    const sheet = toolbar.adoptedStyleSheets[0];
    return {
      ok,
      ms,
      css: sheet ? Array.from(sheet.cssRules).reduce((sum, rule) => sum + rule.cssText.length, 0) : 0,
      shared: Boolean(sheet) && menus.adoptedStyleSheets.length === 1 && menus.adoptedStyleSheets[0] === sheet
        && toolbar.adoptedStyleSheets.length === 1 && sheet instanceof CSSStyleSheet,
      styleElements: menus.querySelectorAll("style").length + toolbar.querySelectorAll("style").length,
    };
  });
  const mounted = mountTimed.ok;
  note(`mountChrome : ${mountTimed.ms.toFixed(1)} ms (styles et premier dessin des deux barres), ${Math.round(mountTimed.css / 1024)} Ko de CSS dans la feuille partagée`);
  check(
    "styles : une seule feuille construite dans le document hôte, adoptée par les deux shadow roots",
    mountTimed.shared && mountTimed.styleElements === 0,
    `partagée ${mountTimed.shared}, éléments <style> ${mountTimed.styleElements}`,
  );
  await page.waitForTimeout(400);
  const after = await page.evaluate((fn) => {
    const describe = new Function(`return (${fn})`)();
    const menus = document.getElementById("menus").shadowRoot;
    const toolbar = document.getElementById("toolbar").shadowRoot;
    return {
      toolbar: describe(toolbar, ".fortune-toolbar"),
      menus: describe(menus, ".dc-menu-bar"),
      toolbarHeight: Math.round(toolbar.querySelector(".fortune-toolbar").getBoundingClientRect().height),
      menuBarHeight: Math.round(menus.querySelector(".dc-menu-bar").getBoundingClientRect().height),
      custom: Array.from(toolbar.querySelectorAll("[id^=custom-]")).map((item) => item.id),
    };
  }, describe.toString());
  const inFrame = await frame.evaluate(() => ({
    toolbar: Boolean(document.querySelector(".fortune-toolbar")),
    menus: Boolean(document.querySelector(".dc-menu-bar")),
    gridTop: Math.round(document.querySelector(".fortune-cell-area").getBoundingClientRect().top),
  }));
  check(
    "mountChrome : barres sorties de l'iframe",
    mounted === true && !inFrame.toolbar && !inFrame.menus && after.toolbar && after.menus,
    `grille ${before.gridTop} → ${inFrame.gridTop} px du haut de l'iframe ; boutons ajoutés par DocCells : ${after.custom.join(", ")}`,
  );
  await shot(page, "1-host-bars", { x: 0, y: 0, width: 1300, height: 200 });

  // 1. Apparence
  const toolbarDiff = compare(before.toolbar, after.toolbar);
  const menuDiff = compare(before.menus, after.menus);
  check("1. barre de boutons identique (tailles, polices, couleurs, icônes)", toolbarDiff.every((line) => line.startsWith("(")), toolbarDiff.slice(0, 8).join(" ; "));
  check("1. barre de menus identique (élément menus à 15 px, police d'Inter)", menuDiff.length === 0, menuDiff.slice(0, 8).join(" ; "));
  await page.evaluate(() => document.getElementById("menus").style.removeProperty("font-family"));
  // Taille du texte : celle de l'élément menus, héritée de la page hôte
  // (13 px), pour les boutons, les listes, les sous-menus et les raccourcis,
  // et suivie quand elle change.
  const menuFonts = async () => {
    await page.locator("#menus .dc-menu-root-button", { hasText: "Format" }).click();
    await page.locator("#menus .dc-menu-popover > .dc-menu-item-wrap > .dc-menu-item:has(.dc-menu-chevron)").first().hover();
    await page.waitForTimeout(100);
    const sizes = await page.evaluate(() => {
      const root = document.getElementById("menus").shadowRoot;
      const sizes = (selector) => [...new Set(Array.from(root.querySelectorAll(selector))
        .filter((item) => item.getBoundingClientRect().width > 0)
        .map((item) => getComputedStyle(item).fontSize))];
      return {
        buttons: sizes(".dc-menu-root-button"),
        items: sizes(".dc-menu-popover > .dc-menu-item-wrap > .dc-menu-item"),
        submenu: sizes(".dc-menu-submenu .dc-menu-item"),
        shortcuts: sizes(".dc-menu-shortcut"),
      };
    });
    await page.locator("#menus .dc-menu-root-button", { hasText: "Format" }).click();
    return sizes;
  };
  const only = (sizes, px) => Object.values(sizes).every((list) => list.length === 1 && list[0] === px);
  await page.evaluate(() => document.getElementById("menus").style.removeProperty("font-size"));
  const fonts13 = await menuFonts();
  await page.evaluate(() => { document.body.style.fontSize = "11px"; });
  const fonts11 = await menuFonts();
  await page.evaluate(() => document.body.style.removeProperty("font-size"));
  await shot(page, "1-menus-13px", { x: 0, y: 0, width: 700, height: 420 });
  check(
    "1. menus sortis à la taille du texte de l'élément menus (13 px hérités, puis 11 px), listes, sous-menus et raccourcis compris",
    only(fonts13, "13px") && only(fonts11, "11px") && fonts13.shortcuts.length === 1,
    `13 px : ${JSON.stringify(fonts13)} ; 11 px : ${JSON.stringify(fonts11)}`,
  );
  // Apparence des menus : police de l'élément menus, puis propriétés
  // --dc-menu-* (valeurs de DocGeo) ; sans elles, celles de DocCells.
  console.log("--- 1. apparence des menus ---");
  const looks = await menuLooks(page, "#menus ", "1-menus-default");
  await page.evaluate((vars) => {
    const menus = document.getElementById("menus");
    for (const [name, value] of Object.entries(vars)) menus.style.setProperty(name, value);
  }, DOCGEO_MENU_VARS);
  const styled = await menuLooks(page, "#menus ", "1-menus-docgeo");
  await page.evaluate((vars) => {
    const menus = document.getElementById("menus");
    for (const name of Object.keys(vars)) menus.style.removeProperty(name);
  }, DOCGEO_MENU_VARS);
  const hostFont = await page.evaluate(() => getComputedStyle(document.getElementById("menus")).fontFamily);
  check(
    "1. menus sortis dans la police de l'élément menus (titres, listes, sous-menus, raccourcis)",
    [looks.fonts, styled.fonts].every((fonts) => fonts.length === 1 && fonts[0] === hostFont) && !/Inter/.test(hostFont),
    `hôte « ${hostFont} », sans variables ${JSON.stringify(looks.fonts)}, avec ${JSON.stringify(styled.fonts)}`,
  );
  const defaultsDiff = lookDiff(looks, DOCCELLS_LOOK);
  check("1. sans variables : apparence de DocCells (lignes 38 px, survol #f1f3f4, icônes 22 px…)", defaultsDiff.length === 0, defaultsDiff.join(" ; ") || JSON.stringify(looks));
  const styledDiff = lookDiff(styled, DOCGEO_LOOK);
  check("1. avec les variables de DocGeo : lignes 32 px, survol bleu, texte, icônes, chevron et raccourcis blancs, icônes 18 px dans la ligne", styledDiff.length === 0, styledDiff.join(" ; ") || JSON.stringify(styled));
  note(`avec les variables : ${JSON.stringify(styled)}`);
  note(`hauteurs dans l'iframe : menus ${before.menuBarHeight} px, boutons ${before.toolbar.h} px`);
  // Hauteur de l'élément reçu, contenu centré verticalement.
  const centering = await page.evaluate(() => {
    const measure = (id, selector, itemSelector) => {
      const root = document.getElementById(id).shadowRoot;
      const bar = root.querySelector(selector);
      const rect = bar.getBoundingClientRect();
      const style = window.getComputedStyle(bar);
      const border = parseFloat(style.borderBottomWidth) || 0;
      const middle = rect.top + (rect.height - border) / 2;
      const offsets = Array.from(bar.querySelectorAll(itemSelector))
        .map((item) => item.getBoundingClientRect())
        .filter((box) => box.width > 0)
        .map((box) => Math.round((box.top + box.height / 2 - middle) * 10) / 10);
      return { h: Math.round(rect.height), worst: Math.max(...offsets.map(Math.abs)), count: offsets.length };
    };
    return {
      menus: measure("menus", ".dc-menu-bar", ".dc-menu-root-button"),
      toolbar: measure("toolbar", ".fortune-toolbar", ".fortune-toolbar-button, .fortune-toolbar-combo, .fortune-toolbar-divider"),
    };
  });
  check(
    `hauteurs imposées par l'hôte : menus ${MENU_H} px, boutons ${BAR_H} px, contenu centré`,
    centering.menus.h === MENU_H && centering.toolbar.h === BAR_H && centering.menus.worst <= 1 && centering.toolbar.worst <= 1.5,
    `menus ${centering.menus.h} px (écart max ${centering.menus.worst} px sur ${centering.menus.count}), boutons ${centering.toolbar.h} px (écart max ${centering.toolbar.worst} px sur ${centering.toolbar.count})`,
  );
  const undrawn = after.toolbar.items.filter((item) => item.drawn === false).map((item) => item.label);
  check("1. icônes dessinées dans la page hôte", undrawn.length === 0, undrawn.join(", "));

  // 2. Sélection : Gras, couleurs, police, format ; état des boutons.
  console.log("--- 2. boutons sur une sélection ---");
  const host = {
    button: (label) => page.locator(`#toolbar .fortune-toolbar-button[aria-label^="${label}"]`),
    combo: (label) => page.locator(`#toolbar .fortune-toobar-combo-container:has(> .fortune-toolbar-combo > [data-tips="${label}"])`),
  };
  const labels = await page.evaluate(() =>
    Array.from(document.getElementById("toolbar").shadowRoot.querySelectorAll("[data-tips]"))
      .map((item) => item.getAttribute("data-tips")));
  note(`boutons : ${[...new Set(labels)].join(", ")}`);
  const boldState = () => page.evaluate(() => {
    const bold = document.getElementById("toolbar").shadowRoot.querySelector('.fortune-toolbar-button[aria-label^="Bold"]');
    return bold?.style.backgroundColor || "";
  });

  await clickCell(0, 0);
  const boldOnA1 = await boldState();
  await clickCell(0, 1);
  const boldOnB1 = await boldState();
  check("2. l'état de Gras suit la cellule (A1 gras, B1 non)", boldOnA1 !== "" && boldOnB1 === "", `A1 « ${boldOnA1} », B1 « ${boldOnB1} »`);

  await host.button("Bold").click();
  await page.waitForTimeout(100);
  const b1Bold = (await cellOf(0, 1))?.bl;
  const boldNow = await boldState();
  check("2. Gras sur B1", b1Bold === 1 && boldNow !== "", `bl=${b1Bold}, bouton « ${boldNow} »`);

  // Couleur du texte et du fond : flèche de la liste, puis une couleur.
  const pickColor = async (label) => {
    const combo = host.combo(label);
    await combo.locator(".fortune-toolbar-combo-arrow").click();
    await page.waitForTimeout(100);
    const popup = combo.locator(".fortune-toolbar-combo-popup");
    const visible = await popup.isVisible();
    const item = combo.locator(".fortune-toolbar-color-picker-item").nth(12);
    const color = visible ? await item.evaluate((el) => el.style.backgroundColor) : null;
    if (visible) await item.click();
    await page.waitForTimeout(100);
    return { visible, color };
  };
  const textColor = await pickColor("Font color");
  const fillColor = await pickColor("Fill color");
  const b1 = await cellOf(0, 1);
  check(
    "2. couleur du texte et du fond",
    textColor.visible && fillColor.visible && Boolean(b1?.fc) && Boolean(b1?.bg),
    `palette ${textColor.visible}/${fillColor.visible}, fc=${b1?.fc}, bg=${b1?.bg}`,
  );

  // Police : liste de polices, « Arial ».
  const pickOption = async (label, text) => {
    const combo = host.combo(label);
    await combo.locator(".fortune-toolbar-combo-button").click();
    await page.waitForTimeout(100);
    let option = combo.locator(".fortune-toolbar-select-option", { hasText: text }).first();
    if (!(await option.isVisible().catch(() => false))) {
      await combo.locator(".fortune-toolbar-combo-arrow").click();
      await page.waitForTimeout(100);
      option = combo.locator(".fortune-toolbar-select-option", { hasText: text }).first();
    }
    const visible = await option.isVisible().catch(() => false);
    if (visible) await option.click();
    await page.waitForTimeout(100);
    return visible;
  };
  const fontOk = await pickOption("Font", "Arial");
  const ff = (await cellOf(0, 1))?.ff;
  check("2. police", fontOk && ff != null, `option vue ${fontOk}, ff=${JSON.stringify(ff)}`);

  // Format des nombres : « Percent ».
  const formatOk = await pickOption("Format", "Percent");
  const fa = (await cellOf(0, 1))?.ct?.fa;
  check("2. format des nombres", formatOk && /%/.test(fa || ""), `option vue ${formatOk}, fa=${fa}`);
  await shot(page, "2-formatted", { x: 0, y: 0, width: 1300, height: 260 });

  // 2b. Commandes des menus qui passent par la barre de boutons (liste des
  // formats, alignement, taille).
  await clickCell(1, 0);
  await page.locator("#menus .dc-menu-root-button", { hasText: "Format" }).click();
  await page.locator("#menus .dc-menu-popover > .dc-menu-item-wrap > .dc-menu-item:has(.dc-menu-chevron)").nth(2).hover();
  await page.waitForTimeout(80);
  await page.locator("#menus .dc-menu-submenu:visible .dc-menu-item").nth(1).click();
  await page.waitForTimeout(250);
  await page.locator("#menus .dc-menu-root-button", { hasText: "Format" }).click();
  await page.locator("#menus .dc-menu-popover > .dc-menu-item-wrap > .dc-menu-item:has(.dc-menu-chevron)").nth(0).hover();
  await page.waitForTimeout(80);
  await page.locator("#menus .dc-menu-submenu:visible .dc-menu-item", { hasText: "%" }).first().click();
  await page.waitForTimeout(250);
  const a2 = await cellOf(1, 0);
  const listsLeftOpen = await page.evaluate(() =>
    document.getElementById("toolbar").shadowRoot.querySelectorAll(".fortune-toolbar-combo-popup").length);
  check(
    "2. menus qui pilotent la barre : alignement centré, format pourcentage",
    Number(a2?.ht) === 0 && /%/.test(a2?.ct?.fa || "") && listsLeftOpen === 0,
    `ht=${a2?.ht}, fa=${a2?.ct?.fa}, listes restées ouvertes ${listsLeftOpen}`,
  );

  // 3. Gras pendant la saisie.
  console.log("--- 3. Gras pendant la saisie ---");
  {
    const baseline = boldWhileEditingBaseline;
    const hosted = await boldWhileEditing(host.button("Bold"), 3, 2);
    note(`dans l'iframe (référence) : ${baseline.detail}`);
    check("3. Gras pendant la saisie, barre dans la page hôte", hosted.ok, hosted.detail);
  }

  // 4. Menu ouvert, puis clic dans la grille, puis dans la figure.
  console.log("--- 4. fermeture des menus et listes ---");
  const menuOpen = () => page.evaluate(() =>
    Boolean(document.getElementById("menus").shadowRoot.querySelector(".dc-menu-popover")));
  const formatRoot = page.locator("#menus .dc-menu-root-button", { hasText: "Format" });
  await formatRoot.click();
  const opened = await menuOpen();
  await shot(page, "4-menu-open", { x: 0, y: 0, width: 1300, height: 520 });
  await clickCell(6, 4);
  const afterGrid = await menuOpen();
  await formatRoot.click();
  const reopened = await menuOpen();
  await page.locator("#canvas").click();
  const afterFigure = await menuOpen();
  await formatRoot.click();
  await page.locator("#field").click();
  const afterField = await menuOpen();
  await formatRoot.click();
  await page.locator("#file").click();
  const afterFile = await menuOpen();
  check(
    "4. menu fermé par un clic dans la grille, la figure, son champ, « Fichier »",
    opened && !afterGrid && reopened && !afterFigure && !afterField && !afterFile,
    `ouvert ${opened}, après grille ${afterGrid}, figure ${afterFigure}, champ ${afterField}, Fichier ${afterFile}`,
  );
  // Un clic dans le menu ne le ferme pas (sous-menu Texte).
  await formatRoot.click();
  await page.locator("#menus .dc-menu-popover > .dc-menu-item-wrap > .dc-menu-item:has(.dc-menu-chevron)").first().hover();
  await page.waitForTimeout(100);
  const submenuVisible = await page.locator("#menus .dc-menu-submenu").first().isVisible().catch(() => false);
  await page.keyboard.press("Escape");
  const afterEscape = await menuOpen();
  check("4. sous-menu au survol, Échap ferme (focus dans la page hôte)", submenuVisible && !afterEscape, `sous-menu ${submenuVisible}, après Échap ${afterEscape}`);

  const comboOpen = (label) => host.combo(label).locator(".fortune-toolbar-combo-popup").isVisible().catch(() => false);
  await host.combo("Font color").locator(".fortune-toolbar-combo-arrow").click();
  const paletteOpen = await comboOpen("Font color");
  await clickCell(6, 4);
  const paletteAfterGrid = await comboOpen("Font color");
  await host.combo("Font color").locator(".fortune-toolbar-combo-arrow").click();
  await page.locator("#canvas").click();
  const paletteAfterFigure = await comboOpen("Font color");
  await host.combo("Font color").locator(".fortune-toolbar-combo-arrow").click();
  await host.combo("Font color").locator(".fortune-toolbar-color-picker").click({ position: { x: 2, y: 2 } }).catch(() => {});
  const paletteAfterInside = await comboOpen("Font color");
  await page.locator("#canvas").click();
  check(
    "4. palette fermée par la grille et la figure, gardée par un clic dedans",
    paletteOpen && !paletteAfterGrid && !paletteAfterFigure && paletteAfterInside,
    `ouverte ${paletteOpen}, après grille ${paletteAfterGrid}, figure ${paletteAfterFigure}, clic dedans ${paletteAfterInside}`,
  );

  // 5. Listes déroulantes et palettes sous leur bouton.
  console.log("--- 5. position des listes ---");
  const positions = [];
  for (const label of ["Format", "Font", "Font size", "Font color", "Fill color", "Border", "Merge cells", "Horizontal align", "Text rotate"]) {
    const combo = host.combo(label);
    if ((await combo.count()) === 0) {
      positions.push({ label, missing: true });
      continue;
    }
    await combo.locator(".fortune-toolbar-combo-arrow").click();
    await page.waitForTimeout(80);
    const box = await combo.locator(".fortune-toolbar-combo").boundingBox();
    const popup = await combo.locator(".fortune-toolbar-combo-popup").boundingBox().catch(() => null);
    const topElement = popup
      ? await page.evaluate(([x, y]) => {
          const el = document.elementFromPoint(x, y);
          return el?.id || el?.tagName;
        }, [popup.x + popup.width / 2, popup.y + popup.height - 5])
      : null;
    positions.push({
      label,
      dy: popup ? Math.round(popup.y - (box.y + box.height)) : null,
      dx: popup ? Math.round(popup.x - box.x) : null,
      size: popup ? `${Math.round(popup.width)}x${Math.round(popup.height)}` : null,
      inView: popup ? popup.x >= 0 && popup.x + popup.width <= 1300 && popup.y + popup.height <= 760 : null,
      topElement,
    });
    if (label === "Format") await shot(page, "5-format-list", { x: 0, y: 0, width: 1300, height: 760 });
    if (label === "Font color") await shot(page, "5-palette", { x: 0, y: 0, width: 1300, height: 420 });
    await page.locator("#canvas").click();
  }
  const misplaced = positions.filter((item) => !item.missing && (item.dy == null || Math.abs(item.dy) > 6 || !item.inView || item.topElement !== "toolbar"));
  check(
    "5. listes sous leur bouton, visibles, au-dessus de l'iframe",
    misplaced.length === 0,
    positions.map((item) => item.missing ? `${item.label} absent` : `${item.label} dy=${item.dy} dx=${item.dx} ${item.size}${item.inView ? "" : " HORS VUE"} ${item.topElement}`).join(" ; "),
  );

  // 6. Dialogues ouverts depuis les barres.
  console.log("--- 6. dialogues ---");
  const where = async () => ({
    host: await page.evaluate(() => {
      const roots = [document, document.getElementById("menus").shadowRoot, document.getElementById("toolbar").shadowRoot];
      return roots.flatMap((root) => Array.from(root.querySelectorAll('[role="dialog"], .fortune-modal, .dc-dialog, .dc-about-overlay'))
        .filter((el) => el.getBoundingClientRect().width > 0)
        .map((el) => el.className || el.getAttribute("role")));
    }),
    frame: await frame.evaluate(() => Array.from(document.querySelectorAll('[role="dialog"], .fortune-modal, .fortune-dialog, [class*="dialog"], [class*="Dialog"]'))
      .filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 50 && rect.height > 50 && window.getComputedStyle(el).visibility !== "hidden";
      })
      .map((el) => String(el.className).split(" ")[0])
      .slice(0, 3)),
  });
  const dialogs = [];
  const openFromMenu = async (root, item, sub) => {
    await page.locator("#menus .dc-menu-root-button", { hasText: root }).click();
    if (sub) {
      await page.locator("#menus .dc-menu-item", { hasText: sub }).first().hover();
      await page.waitForTimeout(80);
    }
    await page.locator("#menus .dc-menu-item", { hasText: item }).last().click();
    await page.waitForTimeout(300);
  };
  const closeDialogs = async () => {
    await frame.evaluate(() => {
      for (const button of document.querySelectorAll("button[aria-label]")) {
        if (/close|cancel/i.test(button.getAttribute("aria-label")) && button.getBoundingClientRect().width > 0) button.click();
      }
    });
    await page.waitForTimeout(200);
  };
  await clickCell(1, 0);
  await openFromMenu("Format", "Conditional formatting");
  dialogs.push({ name: "Format > Conditional formatting", ...(await where()) });
  await shot(page, "6-conditional", { x: 0, y: 0, width: 1300, height: 760 });
  await closeDialogs();
  await openFromMenu("Insert", "Chart");
  dialogs.push({ name: "Insert > Chart", ...(await where()) });
  await closeDialogs();
  await openFromMenu("Insert", "Dropdown");
  dialogs.push({ name: "Insert > Dropdown", ...(await where()) });
  await closeDialogs();
  await openFromMenu("Tools", "About");
  dialogs.push({ name: "Tools > About", ...(await where()) });
  await shot(page, "6-about", { x: 0, y: 0, width: 1300, height: 760 });
  await page.mouse.click(1250, 700);
  await closeDialogs();
  const chooser = page.waitForEvent("filechooser", { timeout: 1500 }).then(() => true).catch(() => false);
  await host.button("Insert image").click().catch(() => {});
  dialogs.push({ name: "bouton Image (sélecteur de fichier)", chooser: await chooser });
  const customChart = page.locator("#toolbar #custom-chart-button");
  if (await customChart.count()) {
    await customChart.click();
    await page.waitForTimeout(300);
    dialogs.push({ name: "bouton Graphique ajouté par DocCells", ...(await where()) });
    await closeDialogs();
  }
  for (const item of dialogs) {
    note(`${item.name} : ${item.chooser !== undefined ? `sélecteur ${item.chooser}` : `hôte [${item.host}] iframe [${item.frame}]`}`);
  }
  check(
    "6. dialogues : DocCells les ouvre dans l'iframe, À propos dans la bande hôte",
    dialogs.filter((item) => item.frame).every((item) => item.name.includes("About") ? item.host.length > 0 : item.frame.length > 0),
  );

  // Événement dialog : ouvert puis fermé pour chacun, par window.docCells et
  // par le protocole.
  await clickCell(1, 0);
  await page.keyboard.press("ControlOrMeta+f");
  await page.waitForTimeout(200);
  const searchOpen = await frame.evaluate(() => Boolean(document.querySelector(".fortune-search-replace")));
  await frame.evaluate(() => document.querySelector(".fortune-search-replace .fortune-modal-dialog-icon-close")?.click());
  await page.waitForTimeout(200);
  const events = await dialogEvents();
  const alternating = (list) => list.length > 0 && list.every((open, index) => open === (index % 2 === 0));
  note(`événements dialog (window) : ${events.window.map((open) => (open ? "ouvert" : "fermé")).join(", ")}`);
  check(
    "6. événement dialog { open } à l'ouverture et à la fermeture (6 dialogues dont recherche de FortuneSheet), identique par le protocole",
    searchOpen && events.window.length === 12 && alternating(events.window)
      && JSON.stringify(events.window) === JSON.stringify(events.message),
    `recherche ouverte ${searchOpen} ; window ${events.window.length}, protocole ${events.message.length}`,
  );

  // Voile du dialogue au premier plan, porté par l'événement dialog : égal
  // au voile dessiné par DocCells ; null pour la recherche ; nouvel
  // événement quand le premier plan change de voile, dialogues ouverts.
  console.log("--- 6. voile des dialogues ---");
  const veilOf = (root, selector) => {
    const element = root.querySelector(selector);
    if (!element) return "absent";
    const style = getComputedStyle(element);
    return { background: style.backgroundColor, backdropFilter: style.backdropFilter };
  };
  const takeFull = () => page.evaluate(() => {
    const full = window.dialogFull;
    window.dialogFull = { window: [], message: [] };
    return full;
  });
  const veils = {};
  await takeFull();
  await clickCell(1, 0);
  await openFromMenu("Format", "Alternating colors");
  veils.alternating = { drawn: await frame.evaluate(`(${veilOf})(document, ".dc-ac-backdrop")`), events: await takeFull() };
  await closeDialogs();
  const closes = [await takeFull()];
  await openFromMenu("Format", "Custom", "Number");
  veils.numberFormat = { drawn: await frame.evaluate(`(${veilOf})(document, ".dc-nf-backdrop")`), events: await takeFull() };
  await page.keyboard.press("Escape");
  await closeDialogs();
  closes.push(await takeFull());
  await openFromMenu("Tools", "About");
  veils.about = {
    drawn: await page.evaluate(`(${veilOf})(document.getElementById("menus").shadowRoot, ".dc-about-overlay")`),
    events: await takeFull(),
  };
  await page.mouse.click(1250, 700);
  await page.waitForTimeout(200);
  closes.push(await takeFull());
  const sameVeil = ({ drawn, events }) =>
    drawn !== "absent" && events.window.length === 1 && events.window[0].open === true
    && JSON.stringify(events.window[0].veil) === JSON.stringify(drawn)
    && JSON.stringify(events.message) === JSON.stringify(events.window);
  for (const [name, item] of Object.entries(veils)) note(`${name} : ${JSON.stringify(item.events.window)}`);
  check(
    "6. voile de l'événement dialog égal à celui du dialogue (couleurs alternées, format des nombres avec flou, À propos), identique par le protocole",
    sameVeil(veils.alternating) && sameVeil(veils.numberFormat) && sameVeil(veils.about)
      && veils.numberFormat.drawn.backdropFilter !== "none" && veils.alternating.drawn.backdropFilter === "none"
      && closes.every((events) => JSON.stringify(events.window) === '[{"open":false}]' && JSON.stringify(events.message) === JSON.stringify(events.window)),
    JSON.stringify({ alternating: veils.alternating.drawn, numberFormat: veils.numberFormat.drawn, about: veils.about.drawn }),
  );
  // Recherche (sans voile), puis alerte de FortuneSheet par-dessus
  // (suppression de la seule feuille : refusée), fermée, puis recherche
  // fermée.
  await clickCell(1, 0);
  await page.keyboard.press("ControlOrMeta+f");
  await page.waitForTimeout(200);
  await frame.locator(".luckysheet-sheets-item-name").first().click({ button: "right" });
  await frame.locator(".fortune-sheet-list-item, .luckysheet-cols-menuitem", { hasText: /^\s*Delete\s*$/ }).first().click();
  await page.waitForTimeout(200);
  const fortuneVeil = await frame.evaluate(`(${veilOf})(document, ".fortune-modal-container")`);
  await frame.locator(".fortune-modal-container .fortune-message-box-button").first().click();
  await page.waitForTimeout(200);
  const searchStill = await frame.evaluate(() => Boolean(document.querySelector(".fortune-search-replace")));
  await frame.evaluate(() => document.querySelector(".fortune-search-replace .fortune-modal-dialog-icon-close")?.click());
  await page.waitForTimeout(200);
  const stacked = await takeFull();
  const sheetsLeft = await page.evaluate(() => window.dc().save().sheets.length);
  note(`recherche puis confirmation : ${JSON.stringify(stacked.window)}`);
  check(
    "6. recherche : veil null ; alerte de FortuneSheet par-dessus : nouvel événement avec son voile, puis null, puis fermé",
    JSON.stringify(stacked.window) === JSON.stringify([
      { open: true, veil: null },
      { open: true, veil: fortuneVeil },
      { open: true, veil: null },
      { open: false },
    ]) && fortuneVeil !== "absent" && searchStill && sheetsLeft === 1
      && JSON.stringify(stacked.message) === JSON.stringify(stacked.window),
    `voile de FortuneSheet ${JSON.stringify(fortuneVeil)}, recherche restée ouverte ${searchStill}`,
  );

  // 7. Raccourcis dans la grille.
  console.log("--- 7. raccourcis ---");
  await clickCell(2, 0);
  const a3Before = (await cellOf(2, 0))?.bl ?? 0;
  await page.keyboard.press("ControlOrMeta+b");
  await page.waitForTimeout(100);
  const a3Bold = (await cellOf(2, 0))?.bl ?? 0;
  const buttonAfterShortcut = await boldState();
  await page.keyboard.press("ControlOrMeta+z");
  await page.waitForTimeout(150);
  const a3Undo = (await cellOf(2, 0))?.bl ?? 0;
  check(
    "7. Cmd-B puis Cmd-Z dans la grille, bouton Gras à jour",
    a3Before === 0 && a3Bold === 1 && a3Undo === 0 && buttonAfterShortcut !== "",
    `bl ${a3Before} → ${a3Bold} → ${a3Undo}, bouton « ${buttonAfterShortcut} »`,
  );

  // 8. unmountChrome, puis mountChrome.
  console.log("--- 8. unmountChrome puis mountChrome ---");
  const saved = await page.evaluate(() => JSON.stringify(window.dc().save()));
  await clickCell(0, 1);
  await page.evaluate(() => window.dc().unmountChrome());
  await page.waitForTimeout(300);
  const back = await frame.evaluate(() => ({
    toolbar: Boolean(document.querySelector(".fortune-toolbar")),
    menus: Boolean(document.querySelector(".dc-menu-bar")),
    custom: Array.from(document.querySelectorAll(".fortune-toolbar [id^=custom-]")).map((item) => item.id).length,
    bold: document.querySelector('.fortune-toolbar-button[aria-label^="Bold"]')?.style.backgroundColor || "",
  }));
  const hostEmpty = await page.evaluate(() => ({
    menus: document.getElementById("menus").shadowRoot.childNodes.length,
    toolbar: document.getElementById("toolbar").shadowRoot.childNodes.length,
  }));
  const savedBack = await page.evaluate(() => JSON.stringify(window.dc().save()));
  await shot(page, "8-unmounted", { x: 0, y: 0, width: 1300, height: 200 });
  // Dans l'iframe, les menus gardent leurs tailles (15 px, listes 14 px).
  await frame.locator(".dc-menu-root-button", { hasText: "Format" }).click();
  await page.waitForTimeout(100);
  const iframeFonts = await frame.evaluate(() => ({
    button: getComputedStyle(document.querySelector(".dc-menu-root-button")).fontSize,
    item: getComputedStyle(document.querySelector(".dc-menu-popover .dc-menu-item")).fontSize,
  }));
  await page.keyboard.press("Escape");
  if (await frame.locator(".dc-menu-popover").count()) await frame.locator(".dc-menu-root-button", { hasText: "Format" }).click();
  check("8. menus rendus à l'iframe : 15 px, listes 14 px", iframeFonts.button === "15px" && iframeFonts.item === "14px", JSON.stringify(iframeFonts));
  // Les variables de l'hôte n'atteignent pas les menus de l'iframe.
  await page.evaluate((vars) => {
    const menus = document.getElementById("menus");
    for (const [name, value] of Object.entries(vars)) menus.style.setProperty(name, value);
  }, DOCGEO_MENU_VARS);
  const iframeLook = await menuLooks(frame, "", "8-iframe-menus");
  await page.evaluate((vars) => {
    const menus = document.getElementById("menus");
    for (const name of Object.keys(vars)) menus.style.removeProperty(name);
  }, DOCGEO_MENU_VARS);
  const iframeLookDiff = lookDiff(iframeLook, DOCCELLS_LOOK);
  check(
    "8. menus rendus à l'iframe : police Inter et apparence de DocCells, variables de l'hôte sans effet",
    iframeLookDiff.length === 0 && iframeLook.fonts.length === 1 && /^Inter\b/.test(iframeLook.fonts[0]),
    iframeLookDiff.join(" ; ") || JSON.stringify(iframeLook.fonts),
  );
  check(
    "8. unmountChrome : barres rendues à l'iframe, classeur intact",
    back.toolbar && back.menus && back.custom > 0 && back.bold !== "" && hostEmpty.menus === 0 && hostEmpty.toolbar === 0 && savedBack === saved,
    JSON.stringify({ back, hostEmpty, same: savedBack === saved }),
  );
  await page.evaluate(() => window.dc().mountChrome({
    menus: document.getElementById("menus"),
    toolbar: document.getElementById("toolbar"),
  }));
  await page.waitForTimeout(300);
  const again = await page.evaluate(() => {
    const toolbar = document.getElementById("toolbar").shadowRoot;
    return {
      toolbar: Boolean(toolbar.querySelector(".fortune-toolbar")),
      menus: Boolean(document.getElementById("menus").shadowRoot.querySelector(".dc-menu-bar")),
      custom: toolbar.querySelectorAll("[id^=custom-]").length,
      bold: toolbar.querySelector('.fortune-toolbar-button[aria-label^="Bold"]')?.style.backgroundColor || "",
    };
  });
  await clickCell(1, 0);
  await page.keyboard.press("ControlOrMeta+z");
  await page.waitForTimeout(150);
  const undoAfter = await page.evaluate(() => JSON.stringify(window.dc().save()));
  check(
    "8. mountChrome à nouveau : barres ressorties, état gardé, annulation toujours là",
    again.toolbar && again.menus && again.custom > 0 && again.bold !== "" && undoAfter !== saved,
    JSON.stringify(again),
  );
  await host.button("Bold").click();
  await page.waitForTimeout(100);
  check("8. Gras fonctionne après la remise en place", (await cellOf(1, 0))?.bl === 1);

  // 9. Bande étroite : la barre range ses derniers boutons dans « More »,
  // sans que la grille change de largeur (ResizeObserver).
  console.log("--- 9. bande étroite ---");
  const barState = () => page.evaluate(() => {
    const bar = document.getElementById("toolbar").shadowRoot.querySelector(".fortune-toolbar");
    const last = Array.from(bar.querySelectorAll(":scope > .fortune-toolbar-item, :scope > .fortune-toolbar-divider")).pop();
    return {
      more: Boolean(bar.querySelector('[aria-label="More"]')),
      items: bar.querySelectorAll(":scope > .fortune-toolbar-item").length,
      overflow: last ? Math.round(last.getBoundingClientRect().right - bar.getBoundingClientRect().right) : 0,
    };
  });
  const wide = await barState();
  await page.evaluate(() => { document.getElementById("toolbar").style.width = "640px"; });
  await page.waitForTimeout(300);
  const narrow = await barState();
  let morePopup = null;
  if (narrow.more) {
    await page.locator('#toolbar [aria-label="More"]').click();
    await page.waitForTimeout(200);
    morePopup = {
      host: await page.evaluate(() => {
        const root = document.getElementById("toolbar").shadowRoot;
        const list = root.querySelector(".fortune-toolbar-more-container");
        const more = root.querySelector('[aria-label="More"]');
        if (!list || !more) return null;
        const a = list.getBoundingClientRect();
        const b = more.getBoundingClientRect();
        return { below: Math.round(a.top - b.bottom), left: Math.round(a.left), right: Math.round(a.right), moreRight: Math.round(b.right) };
      }),
      frame: await frame.evaluate(() => {
        const el = document.querySelector(".fortune-toolbar-more-container");
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return `${Math.round(rect.left)},${Math.round(rect.top)} ${Math.round(rect.width)}x${Math.round(rect.height)}`;
      }),
    };
    await shot(page, "9-more", { x: 0, y: 0, width: 1300, height: 400 });
    await page.locator("#canvas").click();
  }
  check(
    "9. bande étroite : « More » et sa liste sous le bouton, sans changement de la grille",
    wide.overflow <= 0 && narrow.more && narrow.items < wide.items && narrow.overflow <= 0 && morePopup?.host != null && morePopup.host.below >= 0 && morePopup.host.below <= 16 && !morePopup.frame,
    `large : ${wide.items} éléments, More ${wide.more} ; étroite : ${narrow.items} éléments, More ${narrow.more}, débordement ${narrow.overflow} px ; liste ${JSON.stringify(morePopup)}`,
  );
  await page.evaluate(() => { document.getElementById("toolbar").style.width = ""; });
  await page.waitForTimeout(300);
  const widened = await barState();
  check("9. bande élargie : boutons ressortis de « More »", widened.items === wide.items && widened.overflow <= 0, JSON.stringify(widened));

  // 10. Barres montées dans une bande masquée (display: none), puis montrées
  // étroites : les boutons sont mesurés quand la bande apparaît.
  console.log("--- 10. montage dans une bande masquée ---");
  await page.evaluate(() => {
    window.dc().unmountChrome();
    document.getElementById("strip").style.display = "none";
    window.dc().mountChrome({ menus: document.getElementById("menus"), toolbar: document.getElementById("toolbar") });
  });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    document.getElementById("strip").style.display = "";
    document.getElementById("toolbar").style.width = "640px";
  });
  await page.waitForTimeout(300);
  const fromHidden = await barState();
  await page.evaluate(() => { document.getElementById("toolbar").style.width = ""; });
  await page.waitForTimeout(300);
  const fromHiddenWide = await barState();
  check(
    "10. montées masquées : « More » juste quand la bande apparaît, puis s'élargit",
    fromHidden.more && fromHidden.items === narrow.items && fromHidden.overflow <= 0 && fromHiddenWide.items === wide.items && fromHiddenWide.overflow <= 0,
    `étroite ${JSON.stringify(fromHidden)}, large ${JSON.stringify(fromHiddenWide)}`,
  );

  // 11. Listes et sous-menus près du bord droit de la fenêtre hôte : la
  // bande est réduite et poussée à droite pour que la liste visée soit le
  // dernier élément avant « More ».
  console.log("--- 11. bord droit ---");
  const placeLast = async (label) => {
    await page.evaluate(() => {
      const el = document.getElementById("toolbar");
      el.style.width = "";
      el.style.marginLeft = "";
    });
    await page.waitForTimeout(250);
    await page.evaluate((label) => {
      const root = document.getElementById("toolbar").shadowRoot;
      const bar = root.querySelector(".fortune-toolbar");
      const combo = root.querySelector(`.fortune-toobar-combo-container:has(> .fortune-toolbar-combo > [data-tips="${label}"])`);
      const width = Math.ceil(combo.getBoundingClientRect().right - bar.getBoundingClientRect().left) + 60;
      const el = document.getElementById("toolbar");
      el.style.width = `${width}px`;
      el.style.marginLeft = `${window.innerWidth - width}px`;
    }, label);
    await page.waitForTimeout(300);
  };
  const inView = (box) => box && box.x >= 0 && box.x + box.width <= 1300 + 0.5;
  const edge = {};
  await placeLast("Format");
  {
    const combo = host.combo("Format");
    await combo.locator(".fortune-toolbar-combo-arrow").click();
    await page.waitForTimeout(150);
    edge.formatButton = await combo.locator(".fortune-toolbar-combo").boundingBox();
    edge.format = await combo.locator(".fortune-toolbar-combo-popup").boundingBox().catch(() => null);
    // « More formats » : DocCells masque ce sous-menu de FortuneSheet et le
    // remplace par une commande qui ouvre son dialogue de format.
    edge.nativeMoreFormatsHidden = await combo.locator(".fortune-toolbar-select-option:has(.more-format)").first().isHidden();
    const custom = combo.locator(".dc-custom-number-format-menu-item").first();
    edge.customFormat = await custom.boundingBox().catch(() => null);
    await shot(page, "11-format-list", { x: 0, y: 0, width: 1300, height: 760 });
    const before = (await dialogEvents()).window.length;
    if (edge.customFormat) await custom.click();
    await page.waitForTimeout(250);
    edge.customDialog = await frame.evaluate(() => Boolean(document.querySelector('[aria-modal="true"]')));
    await frame.evaluate(() => {
      for (const button of document.querySelectorAll("button[aria-label]")) {
        if (/close|cancel/i.test(button.getAttribute("aria-label")) && button.getBoundingClientRect().width > 0) button.click();
      }
    });
    await page.waitForTimeout(200);
    edge.customDialogEvents = (await dialogEvents()).window.slice(before);
    await page.locator("#canvas").click();
  }
  await placeLast("Border");
  {
    const combo = host.combo("Border");
    await combo.locator(".fortune-toolbar-combo-arrow").click();
    await page.waitForTimeout(150);
    edge.border = await combo.locator(".fortune-toolbar-combo-popup").boundingBox().catch(() => null);
    const styleItem = combo.locator(".fortune-border-select-option:has(.fortune-border-select-menu)").first();
    if (await styleItem.count()) {
      // FortuneSheet cherche le sous-menu dans la cible de mouseenter : on
      // entre par le bord de la ligne, comme une souris qui descend la liste.
      await styleItem.hover({ position: { x: 4, y: 1 } });
      await page.waitForTimeout(150);
      edge.borderStyles = await combo.locator(".fortune-border-select-menu").first().boundingBox().catch(() => null);
    }
    await shot(page, "11-border", { x: 0, y: 0, width: 1300, height: 760 });
    await page.locator("#canvas").click();
  }
  await page.evaluate(() => {
    const el = document.getElementById("toolbar");
    el.style.width = "";
    el.style.marginLeft = "";
  });
  const fmt = (box) => (box ? `${Math.round(box.x)}–${Math.round(box.x + box.width)}` : "absent");
  check(
    "11. près du bord droit : listes Format et Bordures, et sous-menu des styles de bordure, dans la fenêtre",
    inView(edge.format) && inView(edge.border) && inView(edge.borderStyles)
      && edge.formatButton.x + edge.formatButton.width > 1100,
    `bouton Format ${fmt(edge.formatButton)} ; liste Format ${fmt(edge.format)}, Bordures ${fmt(edge.border)}, styles de bordure ${fmt(edge.borderStyles)} (fenêtre 0–1300)`,
  );
  check(
    "11. « More formats » natif masqué ; la commande de DocCells qui le remplace ouvre son dialogue (événements dialog)",
    edge.nativeMoreFormatsHidden && inView(edge.customFormat) && edge.customDialog
      && JSON.stringify(edge.customDialogEvents) === "[true,false]",
    `natif masqué ${edge.nativeMoreFormatsHidden}, commande ${fmt(edge.customFormat)}, dialogue ${edge.customDialog}, événements ${JSON.stringify(edge.customDialogEvents)}`,
  );

  // 12. Info-bulles des boutons.
  console.log("--- 12. info-bulles ---");
  await host.button("Bold").hover();
  await page.waitForTimeout(200);
  const tooltip = await page.evaluate(() => {
    const button = document.getElementById("toolbar").shadowRoot.querySelector('.fortune-toolbar-button[aria-label^="Bold"]');
    const tip = button.querySelector(".fortune-tooltip");
    if (!tip) return null;
    const box = tip.getBoundingClientRect();
    const buttonBox = button.getBoundingClientRect();
    const top = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
    return {
      text: tip.textContent,
      visible: window.getComputedStyle(tip).visibility === "visible",
      below: Math.round(box.top - buttonBox.bottom),
      belowBar: Math.round(box.top - document.getElementById("toolbar").getBoundingClientRect().bottom),
      centered: Math.round(Math.abs(box.left + box.width / 2 - (buttonBox.left + buttonBox.width / 2))),
      inView: box.left >= 0 && box.right <= window.innerWidth,
      top: top?.id || top?.tagName,
    };
  });
  await shot(page, "12-tooltip", { x: 0, y: 0, width: 1300, height: 200 });
  await page.mouse.move(1250, 700);
  check(
    "12. info-bulle juste sous la barre, sous son bouton, visible, au-dessus de l'iframe",
    tooltip?.visible && tooltip.inView && tooltip.belowBar >= 0 && tooltip.belowBar <= 8 && tooltip.centered <= 40 && tooltip.top === "toolbar",
    JSON.stringify(tooltip),
  );

  // 13. Clavier : Tab depuis « Fichier » de l'hôte entre dans la barre de
  // menus ; Entrée ouvre un menu, Tab parcourt ses commandes, Échap ferme.
  console.log("--- 13. clavier ---");
  const focusIn = () => page.evaluate(() => {
    const active = document.activeElement;
    const inner = active?.shadowRoot?.activeElement;
    return { host: active?.id || active?.tagName, inner: inner ? (inner.className || inner.tagName) : null, text: inner?.textContent?.trim().slice(0, 30) || "" };
  });
  await page.locator("#file").focus();
  await page.keyboard.press("Tab");
  const firstStop = await focusIn();
  await page.keyboard.press("Enter");
  await page.waitForTimeout(100);
  const openedByKey = await menuOpen();
  await page.keyboard.press("Tab");
  const inMenu = await focusIn();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  const closedByKey = !(await menuOpen());
  // Jusqu'à la barre de boutons.
  let toolbarStop = null;
  for (let i = 0; i < 20 && !toolbarStop; i += 1) {
    await page.keyboard.press("Tab");
    const focus = await focusIn();
    if (focus.host === "toolbar") toolbarStop = focus;
  }
  // Entrée sur une liste de la barre (Format) : ouvre-t-elle la liste ?
  check(
    "13. Tab entre dans la barre de menus, Entrée ouvre, Tab parcourt le menu, Échap ferme, Tab atteint la barre de boutons",
    firstStop.host === "menus" && /dc-menu-root-button/.test(firstStop.inner) && openedByKey && inMenu.host === "menus" && /dc-menu-item/.test(inMenu.inner) && closedByKey && Boolean(toolbarStop),
    `1er arrêt ${JSON.stringify(firstStop)}, dans le menu ${JSON.stringify(inMenu)}, barre de boutons ${JSON.stringify(toolbarStop)}`,
  );

  // 14. Mode élève intégré : ni barre de menus ni barre de boutons, barre
  // de formule gardée ; mountChrome ne sort rien.
  console.log("--- 14. mode élève ---");
  const openHost = async (query) => {
    const other = await context.newPage();
    other.on("pageerror", (error) => pageErrors.push(error.message));
    await other.goto(`http://doccells.test/host.html?src=${encodeURIComponent(`http://doccells.test/fortunesheet/?embed${query}`)}`);
    await other.waitForFunction(() => window.dc()?.whenReady, null, { timeout: 15000 });
    await other.evaluate(() => window.dc().whenReady());
    return { page: other, frame: other.frame({ url: /doccells\.test\/fortunesheet/ }) };
  };
  {
    const student = await openHost("&mode=student");
    await student.page.evaluate((wb) => window.dc().load(wb), workbook());
    await student.page.waitForTimeout(300);
    const inside = await student.frame.evaluate(() => ({
      menus: Boolean(document.querySelector(".dc-menu-bar")),
      toolbar: Boolean(document.querySelector(".fortune-toolbar")),
      formulaBar: Boolean(document.querySelector(".fortune-fx-editor")),
      gridTop: Math.round(document.querySelector(".fortune-cell-area").getBoundingClientRect().top),
    }));
    const mount = await student.page.evaluate(() => {
      const result = window.dc().mountChrome({ menus: document.getElementById("menus"), toolbar: document.getElementById("toolbar") });
      return { result, shadow: Boolean(document.getElementById("menus").shadowRoot || document.getElementById("toolbar").shadowRoot) };
    });
    // Saisie et Gras au clavier toujours possibles.
    const box = await student.frame.locator(".fortune-cell-area").boundingBox();
    await student.page.mouse.click(box.x + 150, box.y + 30);
    await student.page.keyboard.type("42");
    await student.page.keyboard.press("Enter");
    await student.page.waitForTimeout(150);
    const typed = await student.page.evaluate(() => window.dc().getValues("Feuille1!B2")[0][0]);
    await shot(student.page, "14-student", { x: 0, y: 0, width: 1300, height: 300 });
    check(
      "14. mode=student : sans barres, barre de formule gardée, mountChrome renvoie false, saisie possible",
      !inside.menus && !inside.toolbar && inside.formulaBar && mount.result === false && !mount.shadow && typed === 42,
      `${JSON.stringify(inside)}, mountChrome ${mount.result}, B2 = ${typed}`,
    );
    await student.page.close();
  }

  // 15. Feuille unique : première feuille montrée, ni onglets ni zoom, aucun
  // moyen de créer une feuille ; les autres feuilles restent dans l'archive.
  console.log("--- 15. feuille unique ---");
  {
    const single = await openHost("&singleSheet");
    const twoSheets = workbook();
    twoSheets.sheets[0].status = 0;
    twoSheets.sheets.push({
      name: "Cachée", order: 1, status: 1, config: {},
      celldata: [{ r: 0, c: 0, v: { v: 7, m: "7", ct: { fa: "General", t: "n" } } }],
    });
    await single.page.evaluate((wb) => window.dc().load(wb), twoSheets);
    await single.page.waitForTimeout(300);
    const shown = await single.frame.evaluate(() => ({
      tabs: Boolean(document.querySelector(".fortune-sheettab-container, #fortune-sheettab-container")),
      zoom: Boolean(document.querySelector(".fortune-zoom-container")),
      addButton: Boolean(document.querySelector(".fortune-sheettab-button")),
      toolbar: Boolean(document.querySelector(".fortune-toolbar")),
    }));
    const saved = await single.page.evaluate(() => window.dc().save().sheets.map((sheet) => `${sheet.name}:${sheet.status}`));
    // Clic droit dans la grille : aucune commande de feuille.
    const box = await single.frame.locator(".fortune-cell-area").boundingBox();
    await single.page.mouse.click(box.x + 50, box.y + 10, { button: "right" });
    await single.page.waitForTimeout(150);
    const contextItems = await single.frame.evaluate(() =>
      Array.from(document.querySelectorAll(".fortune-context-menu .luckysheet-cols-menuitem")).map((item) => item.textContent.trim()).filter(Boolean));
    await single.page.keyboard.press("Escape");
    await single.page.mouse.click(box.x + 300, box.y + 200);
    // Menus de DocCells : aucune commande de feuille.
    const menuItems = [];
    for (const root of await single.frame.locator(".dc-menu-root-button").all()) {
      await root.click();
      await single.page.waitForTimeout(60);
      menuItems.push(...(await single.frame.evaluate(() =>
        Array.from(document.querySelectorAll(".dc-menu-popover .dc-menu-item")).map((item) => item.textContent.trim()))));
      await root.click();
    }
    const sheetCommands = [...contextItems, ...menuItems].filter((text) => /sheet|feuille/i.test(text));
    await shot(single.page, "15-single-sheet", { x: 0, y: 0, width: 1300, height: 760 });
    const firstShown = await single.frame.evaluate(() => document.querySelector(".fortune-sheet-overlay") != null);
    check(
      "15. singleSheet : première feuille montrée, ni onglets, ni zoom, ni commande de feuille ; archive complète",
      !shown.tabs && !shown.zoom && !shown.addButton && shown.toolbar && firstShown
        && JSON.stringify(saved) === JSON.stringify(["Feuille1:1", "Cachée:0"]) && sheetCommands.length === 0
        && contextItems.length > 0 && menuItems.length > 0,
      `${JSON.stringify(shown)}, archive ${saved.join(", ")}, commandes de feuille : ${sheetCommands.join(", ") || "aucune"} (${contextItems.length} au clic droit, ${menuItems.length} dans les menus)`,
    );
    await single.page.close();
  }

  check("aucune erreur JavaScript", pageErrors.length === 0, pageErrors.slice(0, 3).join(" | "));
} finally {
  await browser.close();
}

const failed = results.filter((ok) => !ok).length;
console.log(`\n${results.length - failed}/${results.length} vérifications passées${SHOTS ? ` ; captures dans ${SHOTS}` : ""}`);
process.exit(failed ? 1 : 0);
