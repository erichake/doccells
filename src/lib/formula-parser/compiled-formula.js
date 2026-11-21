/*
 * DocCells : arbre des formules, analysé une seule fois.
 *
 * L'analyseur Jison évalue la formule pendant l'analyse : chaque réduction
 * appelle une fonction de `yy` (callFunction, cellValue, evaluateByOperator…)
 * avec les valeurs déjà calculées. En lui donnant un `yy` « constructeur »,
 * les mêmes réductions produisent un arbre au lieu de valeurs. Évaluer cet
 * arbre en ordre postfixe, de gauche à droite, rappelle exactement les mêmes
 * fonctions dans le même ordre que les réductions LR d'origine : mêmes
 * résultats, et même première erreur levée.
 *
 * Seuls les calculs purs sont faits à la construction (littéraux, analyse des
 * adresses de cellules). Si la construction échoue (formule syntaxiquement
 * invalide, adresse illisible), on mémorise LEGACY et la formule est évaluée
 * par l'analyseur d'origine à chaque fois : son résultat peut alors dépendre
 * d'une évaluation partielle avant l'erreur, qu'un arbre ne reproduirait pas.
 */
import evaluateByOperator from "./evaluate-by-operator/evaluate-by-operator.js";
import { Parser as GrammarParser } from "./grammar-parser/grammar-parser.js";
import { trimEdges } from "./helper/string.js";
import { toNumber, invertNumber } from "./helper/number.js";
import { ERROR_VALUE } from "./error.js";
import { extractLabel, toLabel } from "./helper/cell.js";
import { negateList, rewriteListLiterals } from "./helper/list.js";

export const LEGACY = { legacy: true };

const VARIABLE = 1;
const OPERATOR = 2;
const UNARY_MINUS = 3;
const UNARY_PLUS = 4;
const FUNCTION = 5;
const CELL = 6;
const RANGE = 7;
const ERROR_TOKEN = 8;

class AstNode {
  constructor(kind, a, b, c) {
    this.kind = kind;
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

// Calculs purs partagés avec l'évaluation d'origine (parser.js).
export const unaryMinus = (value) => {
  if (Array.isArray(value)) return negateList(value);
  const result = invertNumber(value);
  return isNaN(result) ? 0 : result;
};

export const unaryPlus = (value) => {
  const result = toNumber(value);
  return isNaN(result) ? 0 : result;
};

export const prepareCell = (label) => extractLabel(label);

// Peut lever une TypeError sur une adresse illisible, comme l'original.
export const prepareRange = (startLabel, endLabel) => {
  const [startRow, startColumn, startSheetName] = extractLabel(startLabel);
  const [endRow, endColumn, endSheetName] = extractLabel(endLabel);
  if (endSheetName != null && startSheetName != endSheetName) {
    return { error: ERROR_VALUE };
  }
  const startCell = {};
  const endCell = {};
  startCell.sheetName = startSheetName;
  if (startRow.index <= endRow.index) {
    startCell.row = startRow;
    endCell.row = endRow;
  } else {
    startCell.row = endRow;
    endCell.row = startRow;
  }
  if (startColumn.index <= endColumn.index) {
    startCell.column = startColumn;
    endCell.column = endColumn;
  } else {
    startCell.column = endColumn;
    endCell.column = startColumn;
  }
  startCell.label = toLabel(startCell.row, startCell.column);
  endCell.label = toLabel(endCell.row, endCell.column);
  return { error: null, startCell, endCell };
};

const isNode = (value) => value instanceof AstNode;

const builder = new GrammarParser();
builder.yy = {
  toNumber,
  trimEdges,
  invertNumber,
  unaryMinus: (value) => (isNode(value) ? new AstNode(UNARY_MINUS, value) : unaryMinus(value)),
  unaryPlus: (value) => (isNode(value) ? new AstNode(UNARY_PLUS, value) : unaryPlus(value)),
  throwError: (errorName) => new AstNode(ERROR_TOKEN, errorName),
  callVariable: (name) => new AstNode(VARIABLE, name),
  evaluateByOperator: (operator, params) => new AstNode(OPERATOR, operator, params[0], params[1]),
  callFunction: (name, params) => new AstNode(FUNCTION, name, params),
  cellValue: (label) => new AstNode(CELL, label, prepareCell(label)),
  rangeValue: (start, end) => new AstNode(RANGE, prepareRange(start, end)),
};

const CACHE_LIMIT = 20000;
const cache = new Map();

export const compileFormula = (expression) => {
  let compiled = cache.get(expression);
  if (compiled !== undefined) return compiled;
  try {
    compiled = { tree: builder.parse(rewriteListLiterals(expression)) };
  } catch {
    compiled = LEGACY;
  }
  if (cache.size >= CACHE_LIMIT) cache.clear();
  cache.set(expression, compiled);
  return compiled;
};

export const clearCompiledFormulas = () => cache.clear();

// Appels de la fonction name (en majuscules) dans une formule sans « = » :
// la liste de leurs arguments non évalués (un texte écrit dans la formule
// reste une chaîne). Formule illisible : aucun appel.
export const functionCalls = (expression, name) => {
  const compiled = compileFormula(expression);
  const calls = [];
  if (compiled === LEGACY) return calls;
  const visit = (node) => {
    if (!isNode(node)) return;
    if (node.kind === FUNCTION) {
      if (node.a.toUpperCase() === name) calls.push(node.b ?? []);
      for (const param of node.b ?? []) visit(param);
    } else if (node.kind === OPERATOR) {
      visit(node.b);
      visit(node.c);
    } else if (node.kind === UNARY_MINUS || node.kind === UNARY_PLUS) {
      visit(node.a);
    }
  };
  visit(compiled.tree);
  return calls;
};

// parser : instance de Parser (parser.js), pour ses rappels.
const evaluate = (parser, node) => {
  if (!isNode(node)) return node;
  switch (node.kind) {
    case OPERATOR: {
      const left = evaluate(parser, node.b);
      const right = evaluate(parser, node.c);
      return evaluateByOperator(node.a, [left, right]);
    }
    case CELL:
      return parser._cellValueFromExtracted(node.a, node.b);
    case FUNCTION: {
      const params = node.b;
      // DocCells : fonction qui reçoit ses arguments non évalués (GEO).
      const raw = parser.rawFunctions?.[node.a.toUpperCase()];
      if (raw !== undefined) return raw(params ?? []);
      if (params === undefined) return parser._callFunction(node.a);
      const values = new Array(params.length);
      for (let i = 0; i < params.length; i += 1) values[i] = evaluate(parser, params[i]);
      return parser._callFunction(node.a, values);
    }
    case RANGE:
      return parser._rangeValueFromPrepared(node.a);
    case VARIABLE:
      return parser._callVariable(node.a);
    case UNARY_MINUS:
      return unaryMinus(evaluate(parser, node.a));
    case UNARY_PLUS:
      return unaryPlus(evaluate(parser, node.a));
    case ERROR_TOKEN:
      return parser._throwError(node.a);
    default:
      throw new Error(`Nœud de formule inconnu : ${node.kind}`);
  }
};

export const evaluateCompiled = (parser, compiled) => {
  const value = evaluate(parser, compiled.tree);
  // Jison : quand la valeur finale est undefined, l'analyse continue jusqu'à
  // l'état d'acceptation, qui renvoie true.
  return value === undefined ? true : value;
};
