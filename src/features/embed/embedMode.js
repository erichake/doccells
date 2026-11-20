// Mode intégré : ?embed (actif seulement dans une iframe), éventuellement
// restreint à des origines : ?embed=https://hote.example,https://autre.example
import { __doccellsSetDrawGate } from "@fortune-sheet/react";
import { createDocCellsCore } from "./docCellsCore.js";
import { drawGate } from "./visibility.js";

const isInIframe = () => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

const readEmbedConfig = () => {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("embed") || !isInIframe()) return { enabled: false, allowedOrigins: null };
  const raw = params.get("embed").trim();
  if (!raw) return { enabled: true, allowedOrigins: null };
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
  return { enabled: true, allowedOrigins };
};

export const embedConfig = readEmbedConfig();

// Aucun dessin tant que l'iframe est masquée (EMBED.md, section 7), y
// compris ceux que FortuneSheet déclenche lui-même (montage, chargement).
if (embedConfig.enabled) __doccellsSetDrawGate(drawGate);

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
  on: (event, listener) =>
    core.listen(OWNER, (payload) => {
      if (payload.event === event) listener(payload);
    }),
  stats: () => (stats ? stats() : {}),
});

export { createDocCellsCore };
