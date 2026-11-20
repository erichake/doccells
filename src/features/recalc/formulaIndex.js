// Index inverse des dépendances des formules.
//
// FortuneSheet décrit chaque formule dans ctx.formulaCache.formulaCellInfoMap
// (clé "r{ligne}c{colonne}i{feuille}", formulaDependency = plages lues). Son
// recalcul parcourt toutes ces formules et toutes les cellules de leurs
// plages à chaque modification. L'index associe au contraire à chaque
// cellule les formules qui la lisent, et se tient à jour à partir des clés
// marquées par setFormulaCellInfo (patch-fortune-formula-engine.cjs).
//
// Il associe aussi à chaque nom d'hôte (=GEO("AB"), hostValues.js) les
// formules qui le lisent.
import { hostNamesOfFormula } from "./hostValues.js";

// Au-delà de cette taille, une plage n'est pas éclatée en cellules : elle est
// rangée par colonne et testée par encadrement.
const SMALL_RANGE_CELLS = 64;
const COLUMN_SPAN_LIMIT = 16;
const MAX_COLUMNS = 16384;

const cellNumber = (r, c) => r * MAX_COLUMNS + c;

const createSheetIndex = () => ({
  // numéro de cellule -> Map(clé de formule -> nombre de plages)
  cells: new Map(),
  // colonne -> [{ r0, r1, c0, c1, key }]
  columns: new Map(),
  // plages très larges : [{ r0, r1, c0, c1, key }]
  wide: [],
});

export const createFormulaIndex = (map) => {
  const index = {
    mapRef: map,
    dirty: new Set(),
    entries: new Map(),
    sheets: new Map(),
    // nom d'hôte -> Set(clé de formule)
    hostReaders: new Map(),
    nextOrdinal: 0,
  };
  for (const key of Object.keys(map)) addEntry(index, key, map[key], null);
  return index;
};

const sheetIndexFor = (index, sheetId) => {
  const id = String(sheetId);
  let sheet = index.sheets.get(id);
  if (!sheet) {
    sheet = createSheetIndex();
    index.sheets.set(id, sheet);
  }
  return sheet;
};

const addEntry = (index, key, item, ordinal) => {
  const registrations = [];
  for (const range of item.formulaDependency || []) {
    const r0 = range.row[0];
    const r1 = range.row[1];
    const c0 = range.column[0];
    const c1 = range.column[1];
    const sheet = sheetIndexFor(index, range.sheetId);
    const size = (r1 - r0 + 1) * (c1 - c0 + 1);
    if (size <= SMALL_RANGE_CELLS) {
      for (let r = r0; r <= r1; r += 1) {
        for (let c = c0; c <= c1; c += 1) {
          const number = cellNumber(r, c);
          let readers = sheet.cells.get(number);
          if (!readers) {
            readers = new Map();
            sheet.cells.set(number, readers);
          }
          readers.set(key, (readers.get(key) || 0) + 1);
          registrations.push({ sheet, number });
        }
      }
    } else {
      const box = { r0, r1, c0, c1, key };
      if (c1 - c0 < COLUMN_SPAN_LIMIT) {
        for (let c = c0; c <= c1; c += 1) {
          let list = sheet.columns.get(c);
          if (!list) {
            list = [];
            sheet.columns.set(c, list);
          }
          list.push(box);
          registrations.push({ sheet, column: c, box });
        }
      } else {
        sheet.wide.push(box);
        registrations.push({ sheet, box });
      }
    }
  }
  const hostNames = hostNamesOfFormula(item.calc_funcStr);
  for (const name of hostNames) {
    let readers = index.hostReaders.get(name);
    if (!readers) {
      readers = new Set();
      index.hostReaders.set(name, readers);
    }
    readers.add(key);
  }
  index.entries.set(key, {
    item,
    ordinal: ordinal ?? index.nextOrdinal++,
    registrations,
    hostNames,
  });
};

const removeEntry = (index, key, entry) => {
  for (const registration of entry.registrations) {
    const { sheet } = registration;
    if (registration.number !== undefined) {
      const readers = sheet.cells.get(registration.number);
      const count = readers.get(key) - 1;
      if (count > 0) readers.set(key, count);
      else readers.delete(key);
      if (readers.size === 0) sheet.cells.delete(registration.number);
    } else {
      const list = registration.column !== undefined ? sheet.columns.get(registration.column) : sheet.wide;
      const position = list.indexOf(registration.box);
      if (position >= 0) list.splice(position, 1);
    }
  }
  for (const name of entry.hostNames) {
    const readers = index.hostReaders.get(name);
    readers.delete(key);
    if (readers.size === 0) index.hostReaders.delete(name);
  }
  index.entries.delete(key);
};

// Met l'index en accord avec la table des formules et le renvoie.
export const syncFormulaIndex = (cache) => {
  const map = cache.formulaCellInfoMap;
  let index = cache.doccellsFormulaIndex;
  if (!index || index.mapRef !== map) {
    index = createFormulaIndex(map);
    cache.doccellsFormulaIndex = index;
    return index;
  }
  if (index.dirty.size === 0) return index;
  for (const key of index.dirty) {
    const item = map[key];
    const entry = index.entries.get(key);
    if (entry && entry.item === item) continue;
    // Une clé réaffectée garde sa place dans l'ordre des propriétés de la
    // table ; une clé nouvelle passe à la fin.
    const ordinal = entry && item ? entry.ordinal : null;
    if (entry) removeEntry(index, key, entry);
    if (item) addEntry(index, key, item, ordinal);
  }
  index.dirty.clear();
  return index;
};

// Vrai si la table des formules est absente ou vide (le _.isEmpty de
// FortuneSheet), sans énumérer ses clés : l'index en tient le compte.
export const isFormulaInfoMapEmpty = (cache) =>
  !cache.formulaCellInfoMap || syncFormulaIndex(cache).entries.size === 0;

const contains = (box, r, c) => r >= box.r0 && r <= box.r1 && c >= box.c0 && c <= box.c1;

// Ajoute à counts, pour la cellule (sheetId, r, c), le nombre de plages de
// chaque formule qui la contiennent.
const collectReaders = (index, sheetId, r, c, counts) => {
  const sheet = index.sheets.get(String(sheetId));
  if (!sheet) return;
  const readers = sheet.cells.get(cellNumber(r, c));
  if (readers) {
    for (const [key, count] of readers) counts.set(key, (counts.get(key) || 0) + count);
  }
  const column = sheet.columns.get(c);
  if (column) {
    for (const box of column) {
      if (r >= box.r0 && r <= box.r1) counts.set(box.key, (counts.get(box.key) || 0) + 1);
    }
  }
  for (const box of sheet.wide) {
    if (contains(box, r, c)) counts.set(box.key, (counts.get(box.key) || 0) + 1);
  }
};

// Formules (objets de la table) qui lisent l'une des cellules données, dans
// l'ordre de la table, répétées autant de fois que FortuneSheet les
// rencontrerait (une fois par plage et par cellule modifiée).
export const formulasReadingCells = (index, map, cells) => {
  const counts = new Map();
  for (const { sheetId, r, c } of cells) collectReaders(index, sheetId, r, c, counts);
  return orderedItems(index, map, counts, true);
};

// Formules qui lisent la cellule d'une formule (les « parents » de
// FortuneSheet), dans l'ordre de la table.
export const formulasReadingFormula = (index, map, formula) => {
  const counts = new Map();
  collectReaders(index, formula.id, formula.r, formula.c, counts);
  return orderedItems(index, map, counts, false);
};

// Formules qui lisent l'un des noms d'hôte donnés, dans l'ordre de la table.
export const formulasReadingHostNames = (index, map, names) => {
  const counts = new Map();
  for (const name of names) {
    for (const key of index.hostReaders.get(name) || []) counts.set(key, 1);
  }
  return orderedItems(index, map, counts, false);
};

// Noms d'hôte lus par les formules du classeur, triés.
export const indexedHostNames = (index) => [...index.hostReaders.keys()].sort();

/**
 * Noms d'hôte dont dépend une plage { sheetId, r0, c0, r1, c1 }, directement
 * (formule GEO dans la plage) ou non (formule de la plage qui lit une cellule
 * qui en dépend), triés.
 */
export const hostNamesOfRange = (index, range) => {
  // Formules par feuille : numéro de cellule -> clé.
  const formulas = new Map();
  for (const [key, entry] of index.entries) {
    const id = String(entry.item.id);
    if (!formulas.has(id)) formulas.set(id, new Map());
    formulas.get(id).set(cellNumber(entry.item.r, entry.item.c), key);
  }
  const names = new Set();
  const visited = new Set();
  const pending = [range];
  while (pending.length > 0) {
    const { sheetId, r0, c0, r1, c1 } = pending.pop();
    const cells = formulas.get(String(sheetId));
    if (!cells) continue;
    const visit = (key) => {
      if (visited.has(key)) return;
      visited.add(key);
      const entry = index.entries.get(key);
      for (const name of entry.hostNames) names.add(name);
      for (const dependency of entry.item.formulaDependency || []) {
        pending.push({
          sheetId: dependency.sheetId,
          r0: dependency.row[0],
          r1: dependency.row[1],
          c0: dependency.column[0],
          c1: dependency.column[1],
        });
      }
    };
    if ((r1 - r0 + 1) * (c1 - c0 + 1) <= cells.size) {
      for (let r = r0; r <= r1; r += 1) {
        for (let c = c0; c <= c1; c += 1) {
          const key = cells.get(cellNumber(r, c));
          if (key !== undefined) visit(key);
        }
      }
    } else {
      for (const [number, key] of cells) {
        const r = Math.floor(number / MAX_COLUMNS);
        const c = number % MAX_COLUMNS;
        if (r >= r0 && r <= r1 && c >= c0 && c <= c1) visit(key);
      }
    }
  }
  return [...names].sort();
};

const orderedItems = (index, map, counts, repeat) => {
  const found = [];
  for (const [key, count] of counts) {
    const entry = index.entries.get(key);
    const item = map[key];
    if (entry && item) found.push({ ordinal: entry.ordinal, item, count });
  }
  if (found.length > 1) found.sort((a, b) => a.ordinal - b.ordinal);
  const items = [];
  for (const { item, count } of found) {
    const times = repeat ? count : 1;
    for (let i = 0; i < times; i += 1) items.push(item);
  }
  return items;
};
