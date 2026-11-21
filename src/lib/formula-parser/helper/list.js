// DocCells : listes (tableaux) dans les cellules et les formules.
//
// Une liste s'écrit entre crochets, ses éléments séparés par le séparateur
// d'arguments de la langue : [2; 1] en français, [2, 1] en anglais. Elle
// contient des nombres et d'autres listes ([[1; 2]; [3; 4]]).
//
// Les opérateurs suivent le sens des formules de DocGeo (evalBinary de
// src/import/dgp_formula.ts dans DocGeo), pour qu'un même calcul donne la
// même valeur dans la figure et dans le tableur :
// - une liste de deux nombres est aussi un nombre complexe : + - * / ^
//   complexes ([2; 1]*[3; 2] = [4; 7]) ; un nombre est un complexe réel ;
// - deux listes de même longueur s'ajoutent et se soustraient terme à terme ;
// - une liste se multiplie par un nombre, et se divise par lui, terme à
//   terme ;
// - le reste donne #VALUE!.
// Les fonctions (SOMME, INDEX…) voient une liste comme une plage.
import { ERROR_DIV_ZERO, ERROR_VALUE } from "../error.js";
import { toNumber } from "./number.js";

// Fonction interne qui construit une liste écrite entre crochets.
export const LIST_FUNCTION = "LIST";

const fail = (code) => {
  throw Error(code);
};

// [ et ] hors des textes ("…") et des noms de feuilles ('…') deviennent un
// appel de LIST, que la grammaire de FortuneSheet sait lire.
export const rewriteListLiterals = (expression) => {
  if (expression.indexOf("[") === -1) return expression;
  let out = "";
  let quote = null;
  for (const ch of expression) {
    if (quote) {
      if (ch === quote) quote = null;
      out += ch;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      out += ch;
    } else if (ch === "[") out += `${LIST_FUNCTION}(`;
    else if (ch === "]") out += ")";
    else out += ch;
  }
  return out;
};

const ARITHMETIC = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "^": Math.pow,
};

// Opérande hors liste : conversion du tableur (cellule vide : 0).
const scalar = (value) => {
  const number = toNumber(value);
  return typeof number === "number" && !isNaN(number) ? number : fail(ERROR_VALUE);
};

const numbers = (value) => (Array.isArray(value) ? value.map(numbers) : scalar(value));

const complex = (value) => {
  if (typeof value === "number") return [value, 0];
  return value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number"
    ? value
    : null;
};

const realPart = (value) => {
  if (typeof value === "number") return value;
  return value.length === 2 && value[1] === 0 && typeof value[0] === "number" ? value[0] : null;
};

const complexMul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];

const complexDiv = (a, b) => {
  const denominator = b[0] * b[0] + b[1] * b[1];
  if (denominator === 0) fail(ERROR_DIV_ZERO);
  return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
};

// Argument dans [0, 2π[, comme DGPad : il choisit la branche d'une puissance
// fractionnaire et l'ordre des racines.
const complexPow = (a, exponent, turn = 0) => {
  const r = Math.hypot(a[0], a[1]);
  const theta = Math.atan2(a[1], a[0]);
  const angle = exponent * ((theta < 0 ? theta + 2 * Math.PI : theta) + 2 * Math.PI * turn);
  const scaled = Math.pow(r, exponent);
  return [scaled * Math.cos(angle), scaled * Math.sin(angle)];
};

const operate = (op, l, r) => {
  if (typeof l === "number" && typeof r === "number") return ARITHMETIC[op](l, r);
  const a = complex(l);
  const b = complex(r);
  if (a && b) {
    switch (op) {
      case "+":
        return [a[0] + b[0], a[1] + b[1]];
      case "-":
        return [a[0] - b[0], a[1] - b[1]];
      case "*":
        return complexMul(a, b);
      case "/":
        return complexDiv(a, b);
      default: {
        if (typeof r !== "number") fail(ERROR_VALUE);
        // Puissance 1/n : la liste des n racines (formule de Cardan…).
        const n = Math.round(1 / r);
        if (n > 1 && Math.abs(1 / r - n) < 1e-9) {
          return Array.from({ length: n }, (_, turn) => complexPow(a, r, turn));
        }
        // Base réelle : Math.pow, sans le résidu imaginaire du passage par
        // les coordonnées polaires.
        return a[1] === 0 && (a[0] >= 0 || Number.isInteger(r)) ? Math.pow(a[0], r) : complexPow(a, r);
      }
    }
  }
  if (Array.isArray(l) && Array.isArray(r)) {
    if ((op === "+" || op === "-") && l.length === r.length) return l.map((item, i) => operate(op, item, r[i]));
    fail(ERROR_VALUE);
  }
  const [list, factor] = Array.isArray(l) ? [l, realPart(r)] : [r, realPart(l)];
  if (factor === null || !(op === "*" || (op === "/" && list === l))) fail(ERROR_VALUE);
  if (op === "/" && factor === 0) fail(ERROR_DIV_ZERO);
  return list.map((item) => operate(op, item, factor));
};

const finite = (value) => (Array.isArray(value) ? value.every(finite) : Number.isFinite(value));

// Opération dont au moins un opérande est une liste.
export const listOperation = (op, left, right) => {
  const result = operate(op, numbers(left), numbers(right));
  return finite(result) ? result : fail(ERROR_VALUE);
};

// Liste de nombres finis et de listes.
export const isList = (value) =>
  Array.isArray(value) &&
  value.every((item) => (Array.isArray(item) ? isList(item) : typeof item === "number" && Number.isFinite(item)));

export const negateList = (value) => (Array.isArray(value) ? value.map(negateList) : -scalar(value));

// Liste saisie dans une cellule (sans « = ») : nombres et listes, séparés par
// separator (« ; » : virgule ou point décimal ; « , » : point décimal).
// Autre texte : null.
export const parseListInput = (text, separator) => {
  if (typeof text !== "string") return null;
  const source = text.trim();
  if (source.charAt(0) !== "[") return null;
  const number = separator === ";" ? /^-?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[+-]?\d+)?/i : /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i;
  let i = 0;
  const skip = () => {
    while (source.charAt(i) === " ") i += 1;
  };
  const item = () => {
    skip();
    if (source.charAt(i) === "[") return list();
    const match = number.exec(source.slice(i));
    if (!match) return null;
    i += match[0].length;
    return Number(match[0].replace(",", "."));
  };
  const list = () => {
    i += 1;
    const items = [];
    skip();
    if (source.charAt(i) === "]") {
      i += 1;
      return items;
    }
    for (;;) {
      const value = item();
      if (value === null) return null;
      items.push(value);
      skip();
      const ch = source.charAt(i);
      i += 1;
      if (ch === "]") return items;
      if (ch !== separator) return null;
    }
  };
  const value = list();
  return value !== null && i === source.length ? value : null;
};

// Texte affiché d'une liste, ses nombres écrits par formatNumber.
export const formatList = (value, formatNumber, separator) =>
  `[${value
    .map((item) => {
      if (Array.isArray(item)) return formatList(item, formatNumber, separator);
      if (typeof item === "number") return formatNumber(item);
      return typeof item === "string" ? JSON.stringify(item) : String(item ?? "");
    })
    .join(`${separator} `)}]`;
