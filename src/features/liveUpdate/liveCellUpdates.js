// Mise à jour rapide d'un lot de cellules, pour les valeurs pilotées de
// l'extérieur à chaque image (par exemple une figure DocGeo dont on glisse
// un point).
//
// Le chemin normal d'une saisie passe par setContextWithProduce de
// FortuneSheet : immer avec génération de patches, entrée d'historique,
// rendu React de tout le classeur, puis onChange et renormalisation dans
// App. Ici on travaille directement dans le contexte vivant (l'objet que
// React détient comme état, non gelé grâce à scripts/patch-fortune-live-update.cjs) :
// on écrit les valeurs, on recalcule les formules qui en dépendent avec le
// moteur de FortuneSheet, et l'appelant redessine le canevas une seule fois.
// Rien n'entre dans l'historique d'annulation.
import {
  delFunctionGroup,
  execFunctionGroup,
  getSheetIndex,
  groupValuesRefresh,
  setCellValue,
  setFormulaCellInfoMap,
} from "@fortune-sheet/core";
import { isFormulaInfoMapEmpty } from "../recalc/formulaIndex.js";

const isFormulaText = (value) =>
  typeof value === "string" && value.length > 1 && value.charAt(0) === "=";

// Une mise à jour est une formule si sa valeur (ou son champ f) est un texte
// commençant par « = ». Les formules prennent le chemin normal (historique,
// analyse des dépendances) : elles ne changent pas à chaque image.
export const isFormulaUpdate = (update) => {
  const value = update?.v;
  if (value && typeof value === "object") return isFormulaText(value.f);
  return isFormulaText(value);
};

export const resolveSheetId = (ctx, sheet) => {
  if (sheet == null) return ctx.currentSheetId;
  const sheets = ctx.luckysheetfile || [];
  const byId = sheets.find((item) => String(item.id) === String(sheet));
  if (byId) return byId.id;
  const byName = sheets.find((item) => item.name === sheet);
  return byName ? byName.id : null;
};

// FortuneSheet ne reconstruit cette table qu'avec la grille de la feuille
// active ; on la construit feuille par feuille pour les formules des autres
// feuilles.
const ensureFormulaCellInfoMap = (ctx) => {
  const cache = ctx.formulaCache;
  if (!isFormulaInfoMapEmpty(cache)) return;
  cache.formulaCellInfoMap = {};
  for (const sheet of ctx.luckysheetfile) {
    if (sheet?.calcChain?.length && sheet.data) {
      setFormulaCellInfoMap(ctx, sheet.calcChain, sheet.data);
    }
  }
};

const addTouchedRow = (touched, sheetId, row) => {
  let rows = touched.get(sheetId);
  if (!rows) {
    rows = new Set();
    touched.set(sheetId, rows);
  }
  rows.add(row);
};

/**
 * Écrit des valeurs dans le contexte vivant et recalcule leurs dépendants, en
 * un seul passage du moteur même si les cellules sont sur plusieurs feuilles.
 *
 * @param ctx contexte FortuneSheet vivant (workbook.doccellsGetLiveContext())
 * @param updates [{ r, c, v, sheetId? }] ; v : nombre, texte, booléen, null
 *   (vide) ou objet cellule partiel ({ v, ct, m }). Pas de formule (voir
 *   isFormulaUpdate). sheetId vaut par défaut le paramètre suivant.
 * @param sheetId feuille des mises à jour qui n'en précisent pas
 * @returns { written, skipped, recalculated, touched } ; touched associe à
 *   chaque feuille l'ensemble des lignes dont une cellule a changé.
 */
export const applyLiveCellUpdates = (ctx, updates, sheetId) => {
  const dataBySheet = new Map();
  const sheetData = (id) => {
    if (!dataBySheet.has(id)) {
      const index = getSheetIndex(ctx, id);
      dataBySheet.set(id, index == null ? null : ctx.luckysheetfile[index]?.data ?? null);
    }
    return dataBySheet.get(id);
  };
  if (!updates.some((update) => update.sheetId != null) && !sheetData(sheetId)) {
    throw new Error(`Feuille introuvable ou non initialisée : ${sheetId}`);
  }

  ensureFormulaCellInfoMap(ctx);
  const cache = ctx.formulaCache;
  const touched = new Map();
  const changed = [];
  const skipped = [];

  for (const update of updates) {
    const { r, c } = update;
    const id = update.sheetId ?? sheetId;
    const data = sheetData(id);
    if (
      !data ||
      !Number.isInteger(r) ||
      !Number.isInteger(c) ||
      r < 0 ||
      c < 0 ||
      r >= data.length ||
      c >= (data[r]?.length ?? 0)
    ) {
      skipped.push(update);
      continue;
    }

    const previous = data[r][c];
    // Nouvel objet cellule : celui d'avant peut être partagé avec une entrée
    // de l'historique d'annulation.
    const cell = previous && typeof previous === "object" ? { ...previous } : null;
    if (cell?.f) {
      // Une valeur remplace la formule, comme une saisie au clavier.
      delete cell.f;
      delete cell.VF;
      delFunctionGroup(ctx, r, c, id);
      const key = `r${r}c${c}i${id}`;
      if (cache.formulaCellInfoMap) delete cache.formulaCellInfoMap[key];
      cache.doccellsFormulaIndex?.dirty.add(key);
    }
    data[r][c] = cell;
    const value = update.v && typeof update.v === "object" ? { ...update.v } : update.v;
    setCellValue(ctx, r, c, data, value ?? null);
    changed.push({ r, c, i: id });
    addTouchedRow(touched, id, r);
  }

  let recalculated = 0;
  if (changed.length > 0) {
    cache.execFunctionGlobalData = {};
    cache.execFunctionExist = changed;
    execFunctionGroup(ctx, null, null, null, changed[0].i, sheetData(changed[0].i));
    recalculated = refreshRecalculatedValues(ctx, touched);
  }

  return { written: changed.length, skipped, recalculated, touched };
};

// Écrit dans la grille les résultats du recalcul et en note les lignes.
const refreshRecalculatedValues = (ctx, touched) => {
  const cache = ctx.formulaCache;
  const recalculated = ctx.groupValuesRefreshData.length;
  for (const item of ctx.groupValuesRefreshData) {
    addTouchedRow(touched, item.id, item.r);
  }
  groupValuesRefresh(ctx);
  cache.execFunctionGlobalData = null;
  cache.execFunctionExist = undefined;
  return recalculated;
};

/**
 * Recalcule toutes les formules du classeur, dans l'ordre des dépendances
 * (FortuneSheet ne le fait pas à l'ouverture : il affiche les valeurs
 * enregistrées). Même chemin que le recalcul forcé de FortuneSheet
 * (execFunctionGroup avec isForce), pris en charge par le moteur de DocCells.
 *
 * @returns { recalculated, touched }
 */
export const recalculateWorkbook = (ctx) => {
  ensureFormulaCellInfoMap(ctx);
  const cache = ctx.formulaCache;
  const touched = new Map();
  cache.execFunctionGlobalData = {};
  cache.execFunctionExist = undefined;
  const index = getSheetIndex(ctx, ctx.currentSheetId);
  const data = index == null ? undefined : ctx.luckysheetfile[index]?.data;
  execFunctionGroup(ctx, null, null, null, ctx.currentSheetId, data, true);
  const recalculated = refreshRecalculatedValues(ctx, touched);
  return { recalculated, touched };
};
