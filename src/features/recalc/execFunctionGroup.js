// Recalcul des formules qui dépendent de cellules modifiées.
//
// Remplace execFunctionGroup de FortuneSheet (qui y délègue grâce à
// scripts/patch-fortune-formula-engine.cjs) avec la même sémantique :
// mêmes formules recalculées, même ordre, mêmes écritures dans
// execFunctionGlobalData et groupValuesRefreshData. Seule la recherche des
// formules concernées change : l'index inverse (formulaIndex.js) remplace le
// parcours de toutes les formules du classeur et de toutes les cellules de
// leurs plages.
//
// Écart voulu : FortuneSheet mémorise les cellules d'une plage sous une clé
// qui accole les bornes sans séparateur (B2:B124 et B12:B24 donnent la même
// clé) et peut alors oublier une formule à recalculer. L'index n'a pas ce
// défaut.
import {
  formulasReadingCells,
  formulasReadingFormula,
  isFormulaInfoMapEmpty,
  syncFormulaIndex,
} from "./formulaIndex.js";

// Ensemble des clés de calcChain (toutes feuilles), que FortuneSheet
// reconstruit à chaque recalcul. On le garde tant que les tableaux calcChain
// et dynamicArray_compute des feuilles ne changent pas.
const calcChainSignature = (ctx) => {
  const signature = [ctx.luckysheetfile];
  for (const sheet of ctx.luckysheetfile) {
    signature.push(
      sheet.calcChain,
      sheet.calcChain?.length,
      sheet.dynamicArray_compute,
      sheet.dynamicArray_compute?.length,
    );
  }
  return signature;
};

const sameSignature = (left, right) =>
  left && left.length === right.length && left.every((value, i) => value === right[i]);

const getCalcChainSet = (ctx, core) => {
  const cache = ctx.formulaCache;
  const signature = calcChainSignature(ctx);
  const stored = cache.doccellsCalcChainSet;
  if (stored && sameSignature(stored.signature, signature)) return stored.set;
  const set = new Set();
  for (const item of core.getAllFunctionGroup(ctx)) {
    set.add(`${item.r}_${item.c}_${item.id}`);
  }
  cache.doccellsCalcChainSet = { signature, set };
  return set;
};

// Même parcours en profondeur que getFormulaRunList de FortuneSheet, avec
// les lecteurs de chaque formule pris dans l'index au lieu des liens
// « parents » accumulés dans la table.
const getFormulaRunList = (updateValueArray, map, index) => {
  const formulaRunList = [];
  const done = new Set();
  const visiting = new Set();
  const stack = updateValueArray.slice();
  while (stack.length > 0) {
    const formula = stack.pop();
    if (formula == null || done.has(formula.key)) continue;
    if (visiting.has(formula.key)) {
      visiting.delete(formula.key);
      formulaRunList.push(formula);
      done.add(formula.key);
      continue;
    }
    const readers = formulasReadingFormula(index, map, formula);
    if (readers.length === 0) {
      formulaRunList.push(formula);
      done.add(formula.key);
    } else {
      visiting.add(formula.key);
      stack.push(formula);
      for (const reader of readers) stack.push(reader);
    }
  }
  formulaRunList.reverse();
  return formulaRunList;
};

/**
 * @param isForce recalcul forcé : toutes les formules, dans l'ordre de la
 *   table, comme FortuneSheet (recalcul complet au chargement d'un classeur).
 * @param core fonctions internes de FortuneSheet transmises par le patch :
 *   getFlowdata, setCellValue, getAllFunctionGroup, setFormulaCellInfoMap,
 *   execCanonicalFormula.
 */
export const execFunctionGroup = (ctx, originRow, originColumn, value, id, data, isForce, core) => {
  const cache = ctx.formulaCache;
  if (data == null) data = core.getFlowdata(ctx);
  if (cache.execFunctionGlobalData == null) cache.execFunctionGlobalData = {};
  if (id == null) id = ctx.currentSheetId;
  if (value != null) {
    const cellCache = [[{ v: undefined }]];
    core.setCellValue(ctx, 0, 0, cellCache, value);
    cache.execFunctionGlobalData[`${originRow}_${originColumn}_${id}`] = cellCache[0][0];
  }

  // Cellules modifiées, sans doublon (FortuneSheet en fait les clés d'un objet).
  const changed = [];
  const seen = new Set();
  const addChanged = (r, c, sheetId) => {
    const key = `r${r}c${c}i${sheetId}`;
    if (seen.has(key)) return;
    seen.add(key);
    const row = Number(r);
    const column = Number(c);
    if (Number.isInteger(row) && Number.isInteger(column)) {
      changed.push({ sheetId, r: row, c: column });
    }
  };
  if (cache.execFunctionExist == null) {
    addChanged(originRow, originColumn, id);
  } else {
    for (const cell of cache.execFunctionExist) addChanged(cell.r, cell.c, cell.i);
  }

  if (isFormulaInfoMapEmpty(cache)) {
    cache.formulaCellInfoMap = {};
    core.setFormulaCellInfoMap(ctx, core.getAllFunctionGroup(ctx), data);
  }
  const map = cache.formulaCellInfoMap;
  const index = syncFormulaIndex(cache);

  const updateValueArray = isForce
    ? Object.keys(map).map((key) => map[key])
    : formulasReadingCells(index, map, changed);
  const formulaRunList = getFormulaRunList(updateValueArray, map, index);

  if (formulaRunList.length > 0) {
    const calcChainSet = getCalcChainSet(ctx, core);
    for (const formula of formulaRunList) {
      if (formula.level === Math.max) continue;
      const result = core.execCanonicalFormula(
        ctx,
        formula.calc_funcStr,
        formula.r,
        formula.c,
        formula.id,
        calcChainSet,
      );
      ctx.groupValuesRefreshData.push({
        r: formula.r,
        c: formula.c,
        v: result[1],
        f: result[2],
        spe: result[3],
        id: formula.id,
      });
      cache.execFunctionGlobalData[`${formula.r}_${formula.c}_${formula.id}`] = {
        v: result[1],
        f: result[2],
      };
    }
  }
  cache.execFunctionExist = undefined;
};
