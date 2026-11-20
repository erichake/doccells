// Cœur du mode intégré (EMBED.md) : opérations sur le classeur, abonnements à
// des plages et événements. L'accès synchrone window.docCells et le protocole
// postMessage sont deux clients (« propriétaires ») de ce même cœur.
//
// Les valeurs qu'une écriture d'un client fait changer dans ses propres
// abonnements lui sont rendues par l'appel ; les autres clients les reçoivent
// en événements « values ».
import { parseReference, formatReference } from "./references.js";
import { readRange } from "./cellValues.js";
import { nextTask } from "./visibility.js";
import { isHostValue, replaceHostValues } from "../recalc/hostValues.js";

// Clés d'une feuille qui décrivent la vue et non le contenu : leur changement
// n'est pas une modification du classeur (événement « change »).
const VIEW_KEYS = new Set([
  "luckysheet_select_save",
  "luckysheet_selection_range",
  "scrollLeft",
  "scrollTop",
  "zoomRatio",
  "status",
  "celldata",
]);

const sheetSignature = (sheet) =>
  Object.keys(sheet)
    .filter((key) => !VIEW_KEYS.has(key))
    .sort()
    .map((key) => [key, sheet[key]]);

const sameContent = (previous, sheets) => {
  if (!previous || previous.length !== sheets.length) return false;
  return sheets.every((sheet, index) => {
    const before = previous[index];
    const after = sheetSignature(sheet);
    return (
      before.length === after.length &&
      before.every(([key, value], i) => key === after[i][0] && value === after[i][1])
    );
  });
};

export const createDocCellsCore = ({
  getContext,
  whenReady,
  writeValues,
  writeHostValues,
  readHostNames,
  readHostDependencies,
  loadWorkbook,
  saveWorkbook,
}) => {
  const subscriptions = new Map();
  const listeners = new Map();
  let nextSubscriptionId = 1;
  let sheetNames = null;
  let contentSignature = null;
  let loading = false;
  let hostWritePending = false;
  let changeScheduled = false;
  // Noms d'hôte lus par le classeur, tels que signalés en dernier.
  let hostNamesKey = null;

  const emit = (owner, payload) => {
    for (const listener of listeners.get(owner) || []) listener(payload);
  };
  const emitAll = (payload) => {
    for (const owner of listeners.keys()) emit(owner, payload);
  };

  const requireContext = () => {
    const ctx = getContext();
    if (!ctx) throw new Error("Workbook not ready");
    return ctx;
  };

  const sheetById = (ctx, id) =>
    ctx.luckysheetfile.find((sheet) => String(sheet.id) === String(id)) || null;

  const sheetIdByName = (ctx, name) => {
    const sheet = ctx.luckysheetfile.find((item) => item.name === name);
    if (!sheet) throw new Error(`Unknown sheet: ${name}`);
    return sheet.id;
  };

  const currentValues = (ctx, subscription) => {
    const sheet = subscription.sheetId == null ? null : sheetById(ctx, subscription.sheetId);
    if (!sheet) return { values: null, error: `Unknown sheet: ${subscription.sheetName}` };
    return { values: readRange(sheet.data, subscription, subscription.display) };
  };

  // Abonnements dont les valeurs ont changé depuis le dernier envoi.
  const collectChanges = (ctx) => {
    const changes = [];
    for (const subscription of subscriptions.values()) {
      const { values, error } = currentValues(ctx, subscription);
      const key = error ? `error:${error}` : JSON.stringify(values);
      if (key === subscription.lastKey) continue;
      subscription.lastKey = key;
      const change = { subscription: subscription.id, ref: subscription.ref, values };
      if (error) change.error = error;
      changes.push({ owner: subscription.owner, change });
    }
    return changes;
  };

  const emitChanges = (changes, source, exceptOwner = null) => {
    const own = [];
    for (const { owner, change } of changes) {
      if (owner === exceptOwner) own.push(change);
      else emit(owner, { event: "values", ...change, source });
    }
    return own;
  };

  const rememberSheets = (sheets) => {
    sheetNames = new Map(sheets.map((sheet) => [String(sheet.id), sheet.name]));
    contentSignature = sheets.map(sheetSignature);
  };

  // --- Écritures --------------------------------------------------------

  const prepareUpdates = (updates) => {
    if (!Array.isArray(updates)) throw new Error("Invalid request");
    const ctx = requireContext();
    return updates.map((update) => {
      if (!update || typeof update !== "object" || typeof update.ref !== "string") {
        throw new Error("Invalid request");
      }
      const reference = parseReference(update.ref);
      if (reference.r0 !== reference.r1 || reference.c0 !== reference.c1) {
        throw new Error(`Invalid reference: ${update.ref} (single cell expected)`);
      }
      return {
        sheetId: sheetIdByName(ctx, reference.sheetName),
        r: reference.r0,
        c: reference.c0,
        v: update.v === undefined ? null : update.v,
      };
    });
  };

  const writePrepared = (prepared, owner) => {
    const ctx = requireContext();
    const result = writeValues(prepared);
    if (result.formulas > 0) hostWritePending = true;
    const values = emitChanges(collectChanges(ctx), "host", owner);
    return {
      written: result.written,
      recalculated: result.recalculated,
      skipped: result.skipped,
      values,
    };
  };

  // --- Valeurs fournies par l'hôte (GEO) -----------------------------------

  const validateHostUpdates = (updates) => {
    if (!Array.isArray(updates)) throw new Error("Invalid request");
    return updates.map((update) => {
      if (
        !update ||
        typeof update !== "object" ||
        typeof update.name !== "string" ||
        !isHostValue(update.v)
      ) {
        throw new Error("Invalid request");
      }
      return { name: update.name, v: update.v };
    });
  };

  const prepareHostUpdates = (updates) => {
    requireContext();
    return validateHostUpdates(updates);
  };

  const writeHostPrepared = (prepared, owner) => {
    const ctx = requireContext();
    const result = writeHostValues(prepared);
    const values = emitChanges(collectChanges(ctx), "host", owner);
    return { recalculated: result.recalculated, values };
  };

  const hostNames = () => readHostNames(requireContext());

  const hostDependencies = (ref) => {
    const ctx = requireContext();
    const reference = parseReference(ref);
    return readHostDependencies(ctx, { ...reference, sheetId: sheetIdByName(ctx, reference.sheetName) });
  };

  // Événement hostNamesChanged si les noms lus par le classeur ont changé
  // depuis le dernier signalement (ou le dernier load).
  const checkHostNames = (ctx, silent = false) => {
    const names = readHostNames(ctx);
    const key = JSON.stringify(names);
    if (key === hostNamesKey) return;
    hostNamesKey = key;
    if (!silent) emitAll({ event: "hostNamesChanged", names });
  };

  // --- Notifications après une modification de la grille -----------------

  const scheduleChangeEvent = () => {
    if (changeScheduled) return;
    changeScheduled = true;
    nextTask(() => {
      changeScheduled = false;
      emitAll({ event: "change" });
    });
  };

  /**
   * À appeler après chaque mise à jour de l'état du classeur par FortuneSheet
   * (onChange). origin : "user" (action de l'utilisateur) ou "sync"
   * (resynchronisation après des écritures rapides).
   */
  const observeWorkbook = (sheets, origin) => {
    const ctx = getContext();
    if (loading || !ctx || !Array.isArray(sheets)) return;
    if (!sheetNames) {
      rememberSheets(sheets);
      checkHostNames(ctx, true);
      return;
    }
    const byUser = origin === "user" && !hostWritePending;

    // Feuilles renommées ou supprimées.
    const present = new Map(sheets.map((sheet) => [String(sheet.id), sheet.name]));
    for (const [id, oldName] of sheetNames) {
      const newName = present.get(id);
      if (newName === undefined) {
        emitAll({ event: "sheetDeleted", id, name: oldName });
      } else if (newName !== oldName) {
        for (const subscription of subscriptions.values()) {
          if (String(subscription.sheetId) !== id) continue;
          subscription.sheetName = newName;
          subscription.ref = formatReference(subscription);
        }
        emitAll({ event: "sheetRenamed", id, oldName, newName });
      }
    }

    if (byUser && !sameContent(contentSignature, sheets)) scheduleChangeEvent();
    emitChanges(collectChanges(ctx), hostWritePending || origin === "sync" ? "host" : "user");
    if (origin !== "sync") hostWritePending = false;
    rememberSheets(sheets);
    checkHostNames(ctx);
  };

  // Écriture faite hors du cœur (window.setCellValues).
  const notifyHostWrite = () => {
    const ctx = getContext();
    if (ctx) emitChanges(collectChanges(ctx), "host");
  };

  // --- Opérations publiques ----------------------------------------------

  // loadWorkbook lit l'archive (WORKBOOK_FORMAT.md) et la refuse, avant de
  // toucher au classeur courant, si elle est invalide.
  // Les valeurs d'hôte appartiennent au classeur montré : load les remplace
  // par celles de hostValues (aucune par défaut), avant le recalcul. Une
  // archive refusée rend les précédentes.
  const load = async (workbook, { recalculate = true, hostValues } = {}) => {
    const initialHostValues = hostValues === undefined ? [] : validateHostUpdates(hostValues);
    loading = true;
    const previousHostValues = replaceHostValues(initialHostValues);
    try {
      await loadWorkbook(workbook, { recalculate: recalculate !== false });
    } catch (error) {
      replaceHostValues(previousHostValues);
      throw error;
    } finally {
      loading = false;
    }
    const ctx = requireContext();
    rememberSheets(ctx.luckysheetfile);
    hostWritePending = false;
    for (const subscription of subscriptions.values()) {
      const sheet = ctx.luckysheetfile.find((item) => item.name === subscription.sheetName);
      subscription.sheetId = sheet ? sheet.id : null;
    }
    checkHostNames(ctx, true);
    emitChanges(collectChanges(ctx), "load");
    return { sheets: ctx.luckysheetfile.map((sheet) => ({ id: sheet.id, name: sheet.name })) };
  };

  const getValues = (ref, { display = false } = {}) => {
    const ctx = requireContext();
    const reference = parseReference(ref);
    const sheet = sheetById(ctx, sheetIdByName(ctx, reference.sheetName));
    return readRange(sheet.data, reference, Boolean(display));
  };

  const subscribe = (ref, { display = false } = {}, owner) => {
    const ctx = requireContext();
    const reference = parseReference(ref);
    const subscription = {
      ...reference,
      id: nextSubscriptionId++,
      owner,
      display: Boolean(display),
      sheetId: sheetIdByName(ctx, reference.sheetName),
    };
    subscription.ref = formatReference(subscription);
    const { values } = currentValues(ctx, subscription);
    subscription.lastKey = JSON.stringify(values);
    subscriptions.set(subscription.id, subscription);
    return { subscription: subscription.id, ref: subscription.ref, values };
  };

  const unsubscribe = (id, owner) => {
    const subscription = subscriptions.get(id);
    if (!subscription || subscription.owner !== owner) {
      throw new Error(`Unknown subscription: ${id}`);
    }
    subscriptions.delete(id);
    return null;
  };

  const listen = (owner, listener) => {
    if (!listeners.has(owner)) listeners.set(owner, new Set());
    listeners.get(owner).add(listener);
    return () => listeners.get(owner)?.delete(listener);
  };

  return {
    whenReady,
    load,
    save: () => {
      requireContext();
      return saveWorkbook();
    },
    prepareUpdates,
    writePrepared,
    setCellValues: (updates, owner) => writePrepared(prepareUpdates(updates), owner),
    prepareHostUpdates,
    writeHostPrepared,
    setHostValues: (updates, owner) => writeHostPrepared(prepareHostUpdates(updates), owner),
    hostNames,
    hostDependencies,
    getValues,
    subscribe,
    unsubscribe,
    listen,
    observeWorkbook,
    notifyHostWrite,
    requestSave: () => emitAll({ event: "save" }),
    // Un dialogue de DocCells ou de FortuneSheet s'ouvre ou se ferme
    // (dialogWatch.js) : l'hôte pose ou retire son propre voile.
    notifyDialog: (open) => emitAll({ event: "dialog", open: Boolean(open) }),
  };
};
