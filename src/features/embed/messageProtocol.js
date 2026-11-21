// Protocole postMessage du mode intégré (EMBED.md), client du cœur
// docCellsCore.js comme window.docCells.
//
// - Seuls les messages de la fenêtre parente portant doccells: 1 sont lus ;
//   la première requête acceptée fixe l'origine de l'hôte, à laquelle partent
//   ensuite réponses et événements (jamais "*", sauf ready).
// - Les requêtes sont traitées dans l'ordre. Les setCellValues consécutifs
//   arrivés avant leur traitement sont fusionnés (pour une même cellule, la
//   dernière valeur l'emporte) : un seul recalcul, puis les valeurs des
//   abonnements, puis les réponses. De même pour setHostValues (par nom).
import { nextTask } from "./visibility.js";

export const PROTOCOL_VERSION = 1;
const OWNER = "message";

export const startMessageProtocol = ({ core, allowedOrigins = null, version }) => {
  let hostOrigin = null;
  const queue = [];
  let processing = false;
  let scheduled = false;

  const targetFor = (origin) => (origin === "null" ? "*" : origin);

  const post = (payload) => {
    if (!hostOrigin) return;
    window.parent.postMessage({ doccells: PROTOCOL_VERSION, ...payload }, targetFor(hostOrigin));
  };

  const respond = (request, ok, value) => {
    if (request.id === undefined || request.id === null) return;
    post(ok ? { id: request.id, ok: true, result: value } : { id: request.id, ok: false, error: value });
  };

  const errorMessage = (error) => (error instanceof Error ? error.message : String(error));

  const stopListening = core.listen(OWNER, (event) => post(event));

  const requireString = (value) => {
    if (typeof value !== "string") throw new Error("Invalid request");
    return value;
  };

  const handlers = {
    load: async ({ workbook, recalculate, hostValues }) =>
      core.load(workbook, { recalculate, hostValues }),
    save: async () => ({ workbook: core.save() }),
    getValues: async ({ ref, display }) => ({
      values: core.getValues(requireString(ref), { display }),
    }),
    subscribe: async ({ ref, display }) => core.subscribe(requireString(ref), { display }, OWNER),
    unsubscribe: async ({ subscription }) => core.unsubscribe(subscription, OWNER),
    hostNames: async () => ({ names: core.hostNames() }),
    hostDependencies: async ({ ref }) => ({ names: core.hostDependencies(requireString(ref)) }),
    setPicking: async ({ on }) => core.setPicking(on),
  };

  // Écritures rapides : setCellValues (par cellule) et setHostValues (par
  // nom d'hôte).
  const FAST_WRITES = {
    setCellValues: {
      prepare: (request) => core.prepareUpdates(request.updates),
      key: (update) => `${update.sheetId}\u0000${update.r}\u0000${update.c}`,
      write: (updates) => core.writePrepared(updates, OWNER),
    },
    setHostValues: {
      prepare: (request) => core.prepareHostUpdates(request.updates),
      key: (update) => update.name,
      write: (updates) => core.writeHostPrepared(updates, OWNER),
    },
  };

  // Écritures rapides consécutives du même type en tête de file : validées
  // une par une (une requête invalide n'empêche pas les autres), puis faites
  // ensemble.
  const processFastWrites = () => {
    const type = queue[0].type;
    const { prepare, key, write } = FAST_WRITES[type];
    const batch = [];
    while (queue.length > 0 && queue[0].type === type) batch.push(queue.shift());
    const accepted = [];
    const merged = new Map();
    for (const request of batch) {
      try {
        for (const update of prepare(request)) merged.set(key(update), update);
        accepted.push(request);
      } catch (error) {
        respond(request, false, errorMessage(error));
      }
    }
    if (accepted.length === 0) return;
    let result;
    try {
      result = write([...merged.values()]);
    } catch (error) {
      for (const request of accepted) respond(request, false, errorMessage(error));
      return;
    }
    const { values, ...summary } = result;
    for (const change of values) post({ event: "values", ...change, source: "host" });
    for (const request of accepted) respond(request, true, summary);
  };

  const processQueue = async () => {
    if (processing) return;
    processing = true;
    try {
      while (queue.length > 0) {
        if (Object.hasOwn(FAST_WRITES, queue[0].type)) {
          processFastWrites();
          continue;
        }
        const request = queue.shift();
        const handler = Object.hasOwn(handlers, request.type) ? handlers[request.type] : null;
        if (!handler) {
          respond(request, false, `Unknown request: ${request.type}`);
          continue;
        }
        try {
          respond(request, true, await handler(request));
        } catch (error) {
          respond(request, false, errorMessage(error));
        }
      }
    } finally {
      processing = false;
    }
  };

  const onMessage = (event) => {
    const data = event.data;
    if (event.source !== window.parent || !data || data.doccells !== PROTOCOL_VERSION) return;
    if (allowedOrigins && !allowedOrigins.includes(event.origin)) return;
    if (hostOrigin && event.origin !== hostOrigin) return;
    hostOrigin = event.origin;
    if (typeof data.type !== "string") {
      respond(data, false, "Invalid request");
      return;
    }
    queue.push(data);
    if (processing || scheduled) return;
    scheduled = true;
    nextTask(() => {
      scheduled = false;
      processQueue();
    });
  };

  window.addEventListener("message", onMessage);

  core.whenReady().then(() => {
    const ready = { doccells: PROTOCOL_VERSION, event: "ready", version };
    for (const origin of allowedOrigins || ["*"]) window.parent.postMessage(ready, origin);
  });

  return () => {
    window.removeEventListener("message", onMessage);
    stopListening();
  };
};
