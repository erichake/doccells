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
 * Écrit des valeurs dans le contexte vivant et recalcule leurs dépendants.
 *
 * @param ctx contexte FortuneSheet vivant (workbook.doccellsGetLiveContext())
 * @param updates [{ r, c, v }] ; v : nombre, texte, booléen, null (vide) ou
 *   objet cellule partiel ({ v, ct, m }). Pas de formule (voir isFormulaUpdate).
 * @param sheetId identifiant de la feuille des cellules modifiées
 * @returns { written, skipped, recalculated, touched } ; touched associe à
 *   chaque feuille l'ensemble des lignes dont une cellule a changé.
 */
export const applyLiveCellUpdates = (ctx, updates, sheetId) => {
  const sheetIndex = getSheetIndex(ctx, sheetId);
  const data = sheetIndex == null ? null : ctx.luckysheetfile[sheetIndex]?.data;
  if (!data) throw new Error(`Feuille introuvable ou non initialisée : ${sheetId}`);

  ensureFormulaCellInfoMap(ctx);
  const cache = ctx.formulaCache;
  const touched = new Map();
  const changed = [];
  const skipped = [];

  for (const update of updates) {
    const { r, c } = update;
    if (
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
      delFunctionGroup(ctx, r, c, sheetId);
      const key = `r${r}c${c}i${sheetId}`;
      if (cache.formulaCellInfoMap) delete cache.formulaCellInfoMap[key];
      cache.doccellsFormulaIndex?.dirty.add(key);
    }
    data[r][c] = cell;
    const value = update.v && typeof update.v === "object" ? { ...update.v } : update.v;
    setCellValue(ctx, r, c, data, value ?? null);
    changed.push({ r, c, i: sheetId });
    addTouchedRow(touched, sheetId, r);
  }

  let recalculated = 0;
  if (changed.length > 0) {
    cache.execFunctionGlobalData = {};
    cache.execFunctionExist = changed;
    execFunctionGroup(ctx, null, null, null, sheetId, data);
    recalculated = ctx.groupValuesRefreshData.length;
    for (const item of ctx.groupValuesRefreshData) {
      addTouchedRow(touched, item.id, item.r);
    }
    groupValuesRefresh(ctx);
    cache.execFunctionGlobalData = null;
    cache.execFunctionExist = undefined;
  }

  return { written: changed.length, skipped, recalculated, touched };
};
