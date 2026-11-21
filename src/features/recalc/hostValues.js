// Valeurs fournies par l'hôte (mode intégré, EMBED.md) et fonction GEO.
//
// =GEO("AB") lit la valeur que l'hôte a fournie sous le nom « AB ». DocCells
// ne sait rien de ces noms : l'hôte les lit dans les formules (hostNames),
// fournit leurs valeurs (setHostValues) et apprend de quels noms dépend une
// cellule (hostDependencies).
//
// - L'argument est un texte écrit dans la formule ; sinon : #VALUE!.
// - Un nom non fourni, ou fourni sans valeur : #N/A.
// - Le nom GEO est le même dans toutes les langues.
import { functionCalls } from "../../lib/formula-parser/compiled-formula.js";
import { isList } from "../../lib/formula-parser/helper/list.js";

export const HOST_FUNCTION = "GEO";

const values = new Map();

// Valeur gardée : nombre fini, texte, booléen, liste (helper/list.js) ; tout
// le reste est « sans valeur » (undefined).
const normalize = (value) => {
  if (typeof value === "number") return Number.isFinite(value) ? value : undefined;
  if (typeof value === "string" || typeof value === "boolean" || isList(value)) return value;
  return undefined;
};

export const isHostValue = (value) =>
  value === undefined ||
  value === null ||
  typeof value === "number" ||
  typeof value === "string" ||
  typeof value === "boolean" ||
  isList(value);

const sameValue = (a, b) =>
  a === b || (Array.isArray(a) && Array.isArray(b) && JSON.stringify(a) === JSON.stringify(b));

/**
 * Enregistre des valeurs : [{ name, v }]. Renvoie les noms dont la valeur a
 * changé.
 */
export const storeHostValues = (updates) => {
  const changed = [];
  for (const { name, v } of updates) {
    const value = normalize(v);
    if (sameValue(values.get(name), value)) continue;
    if (value === undefined) values.delete(name);
    else values.set(name, value);
    changed.push(name);
  }
  return changed;
};

/**
 * Remplace toutes les valeurs par updates ([{ name, v }]) et renvoie les
 * précédentes, sous la même forme.
 */
export const replaceHostValues = (updates) => {
  const previous = [...values].map(([name, v]) => ({ name, v }));
  values.clear();
  storeHostValues(updates);
  return previous;
};

// Erreurs au format de l'analyseur (error.js : « VALUE » → #VALUE!).
const fail = (code) => {
  throw Error(code);
};

// GEO(arguments non évalués) : un seul argument, texte écrit dans la formule.
const geo = (params) => {
  if (params.length !== 1 || typeof params[0] !== "string") fail("VALUE");
  const value = values.get(params[0]);
  if (value === undefined) fail("N/A");
  return value;
};

export const installHostFunction = (parser) => {
  parser.rawFunctions[HOST_FUNCTION] = geo;
  // Formule que l'arbre ne sait pas lire (évaluée par l'analyseur
  // d'origine) : l'argument ne peut pas y être vérifié.
  parser.setFunction(HOST_FUNCTION, () => fail("VALUE"));
};

// Noms d'hôte lus par une formule (texte avec ou sans « = »).
export const hostNamesOfFormula = (formula) => {
  if (typeof formula !== "string" || !/GEO/i.test(formula)) return [];
  const expression = formula.charAt(0) === "=" ? formula.substring(1) : formula;
  const names = [];
  for (const params of functionCalls(expression, HOST_FUNCTION)) {
    if (params.length === 1 && typeof params[0] === "string" && !names.includes(params[0])) {
      names.push(params[0]);
    }
  }
  return names;
};
