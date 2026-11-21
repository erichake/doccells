// Barres de DocCells (menus et boutons) dessinées dans deux éléments d'une
// page hôte de même origine (EMBED.md, « Barres dans la page hôte »), par des
// portails React, chacun dans un shadow root.
//
// mountChrome({ menus, toolbar }) prépare les deux éléments et prévient App,
// qui dessine les barres dedans ; unmountChrome() les rend à l'iframe.
//
// - Styles : une seule feuille construite dans le document hôte, partagée
//   par les deux shadow roots (adoptedStyleSheets), refaite à chaque
//   montage.
// - Hauteur : chaque barre prend la hauteur de l'élément reçu, contenu
//   centré verticalement ; celle d'un élément sans hauteur imposée est la
//   sienne.
// - Police : la barre de menus (boutons, listes, sous-menus, raccourcis)
//   prend la famille et la taille de l'élément menus, héritées à travers le
//   shadow root ; dans l'iframe, Inter… et ses tailles fixes (15 px…)
//   restent.
// - Apparence des menus : propriétés CSS --dc-menu-* posées par l'hôte sur
//   l'élément menus (elles traversent aussi le shadow root), lues par
//   StandaloneMenuBar.css, qui a les valeurs de DocCells par défaut.
//
// Le code de DocCells qui cherche ces barres dans son document (commandes
// des menus, boutons ajoutés à la barre, dialogues) passe par queryChrome et
// observeChrome, qui voient aussi les shadow roots.

let mounted = null;
// Faux en mode élève intégré, qui n'a pas de barres (App).
let available = true;
const listeners = new Set();

export const getChrome = () => mounted;

export const setChromeAvailable = (value) => {
  available = Boolean(value);
};

export const subscribeChrome = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const notify = () => {
  for (const listener of listeners) listener(mounted);
};

const chromeRoots = () => (mounted ? [mounted.toolbar.root, mounted.menus.root] : []);

// Premier élément trouvé dans les barres sorties, puis dans le document.
export const queryChrome = (selector) => {
  for (const root of [...chromeRoots(), document]) {
    const element = root.querySelector(selector);
    if (element) return element;
  }
  return null;
};

export const queryChromeAll = (selector) =>
  [...chromeRoots(), document].flatMap((root) => Array.from(root.querySelectorAll(selector)));

// MutationObserver sur le document et sur les barres sorties.
export const observeChrome = (observer, options = { childList: true, subtree: true }) => {
  observer.observe(document.body, options);
  for (const root of chromeRoots()) observer.observe(root, options);
};

// Classe d'état posée sur body (CSS « body.x … ») : aussi sur chaque barre
// sortie, dont la copie des styles lit « .dc-chrome.x … ».
export const toggleChromeClass = (name, on) => {
  document.body.classList.toggle(name, on);
  if (!mounted) return;
  mounted.toolbar.mount.classList.toggle(name, on);
  mounted.menus.mount.classList.toggle(name, on);
};

// --- Styles -----------------------------------------------------------------

const URL_IN_CSS = /url\((['"]?)([^'")]+)\1\)/g;

// Règles propres aux barres sorties, après celles de DocCells.
const CHROME_CSS = `
:host { display: block; }
.dc-chrome { position: relative; height: 100%; box-sizing: border-box; }
.dc-chrome-toolbar > header { height: 100%; }
.dc-chrome > .dc-menu-bar,
.dc-chrome-toolbar > header > .fortune-toolbar {
  height: 100%;
  min-height: 0;
  box-sizing: border-box;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
}
.dc-chrome > .dc-menu-bar { align-items: stretch; }
.dc-chrome .dc-menu-root-button { min-height: 0; }
.dc-chrome-menus .dc-menu-bar { font-family: inherit; }
.dc-chrome-menus .dc-menu-root-button,
.dc-chrome-menus .dc-menu-item,
.dc-chrome-menus .dc-menu-shortcut { font-size: inherit; }
.dc-chrome-toolbar .fortune-toolbar { overflow: visible; }
.dc-chrome-toolbar > .fortune-toolbar-more-container { top: 100%; right: 40px; margin-right: 0; z-index: 1; }
.dc-chrome-toolbar .fortune-tooltip { top: calc(100% + 4px); }
`;

// Texte de toutes les feuilles de style de DocCells, adresses rendues
// absolues ; « body.x » devient « .dc-chrome.x » (voir toggleChromeClass).
// Les règles :root et body ne s'appliquent pas dans un shadow root : leurs
// effets utiles (police, couleur) sont recopiés sur l'élément de montage.
// Une règle @import est ignorée par une feuille construite : DocCells n'en
// a pas.
const collectCss = () => {
  const parts = [];
  for (const sheet of Array.from(document.styleSheets)) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    const base = sheet.href || document.baseURI;
    for (const rule of Array.from(rules)) {
      if (rule.type === CSSRule.IMPORT_RULE) continue;
      parts.push(
        rule.cssText.replace(URL_IN_CSS, (match, quote, url) =>
          /^(data:|#|[a-z]+:\/\/)/i.test(url) ? match : `url("${new URL(url, base).href}")`,
        ),
      );
    }
  }
  parts.push(CHROME_CSS);
  return parts.join("\n").replace(/\bbody\.(?=[\w-])/g, ".dc-chrome.");
};

// Une feuille par document hôte, construite dans son contexte (une feuille
// construite ne peut être adoptée que dans le document où elle l'a été).
const sheets = new WeakMap();

const sharedSheet = (doc) => {
  let sheet = sheets.get(doc);
  if (!sheet) {
    sheet = new doc.defaultView.CSSStyleSheet();
    sheets.set(doc, sheet);
  }
  sheet.replaceSync(collectCss());
  return sheet;
};

const INHERITED = [
  "font-family",
  "font-size",
  "font-weight",
  "line-height",
  "color",
  "font-synthesis",
  "text-rendering",
  "-webkit-font-smoothing",
];

const copyInherited = (from, to, skip = []) => {
  if (!from) return;
  const style = window.getComputedStyle(from);
  for (const name of INHERITED) {
    if (!skip.includes(name)) to.style.setProperty(name, style.getPropertyValue(name));
  }
};

const isElement = (host) =>
  Boolean(host && host.nodeType === 1 && host.ownerDocument?.defaultView);

const prepare = (host, kind, sheet) => {
  const root = host.shadowRoot || host.attachShadow({ mode: "open" });
  root.replaceChildren();
  root.adoptedStyleSheets = [sheet];
  const mount = host.ownerDocument.createElement("div");
  mount.className = `dc-chrome dc-chrome-${kind}`;
  // Ce dont la barre hérite dans l'iframe, sauf, pour la barre de menus, la
  // famille et la taille de la police : celles de l'élément de l'hôte.
  copyInherited(document.body, mount, kind === "menus" ? ["font-family", "font-size"] : []);
  if (kind === "toolbar") copyInherited(document.querySelector(".fortune-container"), mount);
  // Un clic dans la page hôte lui donne le focus : la cellule en cours de
  // saisie dans l'iframe le perdrait. On le laisse où il est, sauf pour un
  // champ de saisie des barres.
  mount.addEventListener("mousedown", (event) => {
    if (!event.target.closest?.("input, textarea, select")) event.preventDefault();
  });
  root.append(mount);
  return { host, root, mount };
};

// Faux (rien n'est monté) en mode élève intégré, qui n'a pas de barres.
export const mountChrome = ({ menus, toolbar } = {}) => {
  if (!isElement(menus) || !isElement(toolbar) || menus === toolbar) throw new Error("Invalid request");
  if (!available) return false;
  if (mounted) unmountChrome();
  const sheet = sharedSheet(toolbar.ownerDocument);
  const menusSheet = menus.ownerDocument === toolbar.ownerDocument ? sheet : sharedSheet(menus.ownerDocument);
  mounted = {
    menus: prepare(menus, "menus", menusSheet),
    toolbar: prepare(toolbar, "toolbar", sheet),
  };
  notify();
  return true;
};

export const unmountChrome = () => {
  if (!mounted) return false;
  const previous = mounted;
  mounted = null;
  // Les auditeurs (App) rendent les barres à l'iframe de façon synchrone
  // (flushSync) : les portails sont démontés avant qu'on vide les racines.
  notify();
  for (const { root } of [previous.menus, previous.toolbar]) {
    root.replaceChildren();
    root.adoptedStyleSheets = [];
  }
  return true;
};
