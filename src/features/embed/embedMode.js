// Mode intégré : ?embed (actif seulement dans une iframe), éventuellement
// restreint à des origines : ?embed=https://hote.example,https://autre.example
// Avec ?embed seulement : &singleSheet (une seule feuille, sans onglets) ;
// &mode=student y est sans barre de menus ni barre de boutons.
import { __doccellsSetDrawGate } from "@fortune-sheet/react";
import { createDocCellsCore } from "./docCellsCore.js";
import { drawGate } from "./visibility.js";
import { mountChrome, unmountChrome } from "./chromeMount.js";
import { registerHostFunctionHelp } from "./hostFunctionHelp.js";

const isInIframe = () => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

// Paramètre booléen : présent, sans valeur ou avec une autre valeur que 0,
// false, no ou off.
const flag = (params, name) =>
  params.has(name) && !/^(0|false|no|off)$/i.test(params.get(name).trim());

const readEmbedConfig = () => {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("embed") || !isInIframe()) {
    return { enabled: false, allowedOrigins: null, singleSheet: false, student: false };
  }
  const singleSheet = flag(params, "singleSheet");
  const student = params.get("mode")?.toLowerCase() === "student";
  const raw = params.get("embed").trim();
  if (!raw) return { enabled: true, allowedOrigins: null, singleSheet, student };
  // Une liste illisible n'autorise aucune origine plutôt que toutes.
  const allowedOrigins = raw
    .split(",")
    .map((item) => {
      try {
        return new URL(item.trim()).origin;
      } catch {
        return null;
      }
    })
    .filter((origin) => origin && origin !== "null");
  return { enabled: true, allowedOrigins, singleSheet, student };
};

export const embedConfig = readEmbedConfig();

// Aucun dessin tant que l'iframe est masquée (EMBED.md, section 9), y
// compris ceux que FortuneSheet déclenche lui-même (montage, chargement).
if (embedConfig.enabled) __doccellsSetDrawGate(drawGate);

// GEO proposée par la complétion automatique et l'aide des fonctions.
if (embedConfig.enabled) registerHostFunctionHelp();

const OWNER = "window";

// Accès synchrone pour une page hôte de même origine : les mêmes opérations
// que le protocole, appelées directement (iframe.contentWindow.docCells).
export const createWindowApi = (core, { stats } = {}) => ({
  version: 1,
  whenReady: () => core.whenReady(),
  load: (workbook, options) => core.load(workbook, options),
  save: () => core.save(),
  setCellValues: (updates) => core.setCellValues(updates, OWNER),
  getValues: (ref, options) => core.getValues(ref, options),
  subscribe: (ref, options) => core.subscribe(ref, options, OWNER),
  unsubscribe: (subscription) => core.unsubscribe(subscription, OWNER),
  setHostValues: (updates) => core.setHostValues(updates, OWNER),
  hostNames: () => core.hostNames(),
  hostDependencies: (ref) => core.hostDependencies(ref),
  on: (event, listener) =>
    core.listen(OWNER, (payload) => {
      if (payload.event === event) listener(payload);
    }),
  stats: () => (stats ? stats() : {}),
  // Désignation de cellules à la souris (EMBED.md, section 15).
  setPicking: (on) => core.setPicking(on),
  // Barres dans la page hôte (EMBED.md, section 14).
  mountChrome: (elements) => mountChrome(elements),
  unmountChrome: () => unmountChrome(),
});

export { createDocCellsCore };
