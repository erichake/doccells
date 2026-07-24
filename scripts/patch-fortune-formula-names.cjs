/**
 * Postinstall script: patches @fortune-sheet/core so formulas can be typed,
 * autocompleted, and displayed using the locale's own Excel/Google
 * Sheets-compatible function names and argument separator (e.g. French
 * "=SOMME(A2;B6)"), instead of only recognizing formulajs's English names
 * and a comma separator.
 *
 * Formulas are always evaluated AND stored (cell.f) in canonical form
 * ("=SUM(A2,B6)") -- same canonical-internal convention as the number-locale
 * patches (patch-fortune-number-input.cjs). Everything locale-specific is a
 * pure presentation layer on top of that canonical storage:
 *   - typing: locale name/separator -> canonical, before evaluation.
 *   - display (formula bar, in-cell editor): canonical -> locale name/separator.
 *   - autocomplete dropdown + argument-hint tooltip while typing: recognizes
 *     and displays the locale's function names, not just English ones.
 *
 * Five choke points, all in @fortune-sheet/core/dist/{index.js,index.esm.js}:
 *   1. execfunction()             -- parses/evaluates every formula commit
 *                                    and recalculation; translating its `txt`
 *                                    argument up front covers evaluation and
 *                                    what gets stored into cell.f.
 *   2. getCellValue(..., "f")     -- the single function both the in-cell
 *                                    editor and the formula bar read a
 *                                    cell's formula text through; translating
 *                                    its return value covers both UI surfaces.
 *   3. rangeHightlightselected()  -- gates whether a bare word being typed
 *                                    triggers the autocomplete dropdown; its
 *                                    regex was ASCII-only, so non-Latin
 *                                    function names (e.g. Russian) never
 *                                    even reached the matching step.
 *   4. helpFunctionExe()          -- lazily builds functionlistMap (English
 *                                    name -> function metadata) once per
 *                                    session; augmented here with additional
 *                                    locale-name -> metadata entries so the
 *                                    existing argument-hint tooltip lookup
 *                                    (keyed by whatever the user typed) finds
 *                                    a match without needing its own patch.
 *   5. searchFunction()           -- matches the autocomplete dropdown query
 *                                    against function names; extended to
 *                                    also match (and display) locale names.
 *   6. functionCopy() consumers   -- formulas produced by fill, copy/paste,
 *                                    and sort already use canonical commas.
 *                                    They must bypass input localization or a
 *                                    separator between numeric arguments can
 *                                    be mistaken for a decimal comma.
 *
 * All five are safe to run unconditionally, including on already-canonical
 * strings or non-target locales: each translation helper is a no-op when it
 * finds nothing locale-specific to rewrite (verified by the "en"/zh-CN/etc.
 * case: no function-name table and not a decimal-comma locale => returns the
 * input unchanged). The locale/separator rewrite is quote-aware: characters
 * inside "..." string literals are left untouched.
 *
 * Two more choke points patched for the same reason (a locale-agnostic
 * hardcoded English function name flowing into the same insertion path as
 * everything above): handleSum() in @fortune-sheet/core (clicking the
 * toolbar's Σ icon directly), and the quick-formula dropdown's item data in
 * @fortune-sheet/react (clicking "Somme" etc. from that menu). Plus the
 * argument-hint tooltip's FormulaHint component in @fortune-sheet/react,
 * which joined parameter names/examples with a hardcoded ", " even in
 * locales where the user must type ";".
 *
 * Also covered: the standalone "Formula library" / "Insert Function"
 * browsing dialog in @fortune-sheet/react (FormulaSearch$1 -- a separate,
 * independent name-matcher from the inline autocomplete patched above). Its
 * list, search box, and click-to-insert all worked off the raw canonical
 * `functionlist[].n` ("SUM"), so it read as untranslated even in an
 * otherwise fully localized UI. Patched to display and search the locale
 * name when one exists, and to insert it into the cell -- the existing
 * execfunction()/functionlistMap patches above already translate that
 * locale name back to canonical on commit, same as typing it by hand.
 *
 * One more gap, unrelated to localization: the inline autocomplete dropdown
 * (FormulaSearch in @fortune-sheet/react) never supported click-to-insert at
 * all, in any locale -- only Enter/Tab (via selectActiveFormula) and arrow
 * keys did anything; clicking an item just blurred the formula's
 * contentEditable and the dropdown closed with nothing inserted. Patched to
 * add an onMouseDown handler (mousedown + preventDefault, not click, so the
 * editor never loses focus/selection) on each item that duplicates
 * selectActiveFormula's insertion logic inline, since that function lives in
 * a different component and isn't reachable from here.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const REACT_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "react", "dist");
const BUNDLES = [
  { file: "index.js", lodash: "___default['default']" },
  { file: "index.esm.js", lodash: "_" },
];

const namesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "formula-function-names.json"), "utf8"),
);

// DocCells locale code (src/locales/custom.js) -> short `navigator.language`
// code, matching the table already used by patch-fortune-number-input.cjs /
// patch-fortune-number-separators.cjs.
const LOCALE_CODE_MAP = {
  "fr-FR": "fr",
  "es-ES": "es",
  de: "de",
  it: "it",
  nl: "nl",
  pt: "pt",
  ru: "ru",
};

const toEnglishByShortLocale = {};
const toLocaleByShortLocale = {};
for (const [docLocale, shortCode] of Object.entries(LOCALE_CODE_MAP)) {
  const forward = namesData.locales[docLocale] || {};
  toLocaleByShortLocale[shortCode] = forward;
  const reversed = {};
  for (const [english, translated] of Object.entries(forward)) {
    reversed[translated.toUpperCase()] = english;
  }
  toEnglishByShortLocale[shortCode] = reversed;
}

// Locales where Excel/Sheets/LibreOffice use "," as the decimal separator and
// ";" as the formula argument separator, to avoid the two colliding. Same
// locale set as the existing number-locale patches (`el` has no translated
// function names -- see formula-function-names.json's _meta note -- but
// still needs the separator swap).
const DECIMAL_COMMA_LOCALES = ["fr", "es", "de", "it", "el", "nl", "pt", "ru"];

const TO_ENGLISH_JSON = JSON.stringify(toEnglishByShortLocale);
const TO_LOCALE_JSON = JSON.stringify(toLocaleByShortLocale);
const DECIMAL_COMMA_LOCALES_JSON = JSON.stringify(DECIMAL_COMMA_LOCALES);

// Just the 5 functions the toolbar's quick-formula (Σ) dropdown offers.
const QUICK_FORMULA_KEYS = ["SUM", "AVERAGE", "COUNT", "MAX", "MIN"];
const quickFormulaNamesByShortLocale = {};
for (const [shortCode, forward] of Object.entries(toLocaleByShortLocale)) {
  const entry = {};
  for (const key of QUICK_FORMULA_KEYS) {
    if (forward[key]) entry[key] = forward[key];
  }
  quickFormulaNamesByShortLocale[shortCode] = entry;
}
const QUICK_FORMULA_NAMES_JSON = JSON.stringify(quickFormulaNamesByShortLocale);

// ---------------------------------------------------------------------------
// Patch 1: shared helper tables/functions + execfunction() input translation.
// ---------------------------------------------------------------------------

const HELPERS_OLD = `function execfunction(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc) {
  if (txt.indexOf(error.r) > -1) {`;

const HELPERS_NEW = `var __doccellsFormulaNamesToEnglish = ${TO_ENGLISH_JSON};
var __doccellsFormulaNamesByEnglish = ${TO_LOCALE_JSON};
var __doccellsDecimalCommaLocales = ${DECIMAL_COMMA_LOCALES_JSON};
function __doccellsShortLocale() {
  var lang = (typeof navigator !== "undefined" && navigator.language) || "en";
  return lang.split("-")[0];
}
function __doccellsIsArgSepChar(ch) {
  if (ch === ",") return true;
  return ch === ";" && __doccellsDecimalCommaLocales.indexOf(__doccellsShortLocale()) > -1;
}
function __doccellsRewriteFormula(str, fnNames, isDecimalComma, fromSep, toSep, fromDecimal, toDecimal, lookupKeyUpper) {
  var out = "";
  var inQuotes = false;
  var i = 0;
  var identRe = /^[\\p{L}_][\\p{L}\\p{N}_.]*/u;
  var identStartRe = /[\\p{L}_]/u;
  while (i < str.length) {
    var ch = str.charAt(i);
    if (ch === '"') {
      if (inQuotes && str.charAt(i + 1) === '"') {
        out += '""';
        i += 2;
        continue;
      }
      inQuotes = !inQuotes;
      out += ch;
      i += 1;
      continue;
    }
    if (inQuotes) {
      out += ch;
      i += 1;
      continue;
    }
    if (isDecimalComma) {
      if (ch === fromSep) {
        out += toSep;
        i += 1;
        continue;
      }
      if (ch === fromDecimal) {
        var prev = str.charAt(i - 1);
        var next = str.charAt(i + 1);
        if (prev >= "0" && prev <= "9" && next >= "0" && next <= "9") {
          out += toDecimal;
          i += 1;
          continue;
        }
      }
    }
    if (fnNames && identStartRe.test(ch)) {
      var m = identRe.exec(str.slice(i));
      if (m) {
        var ident = m[0];
        var after = str.charAt(i + ident.length);
        var mapped = after === "(" ? fnNames[lookupKeyUpper ? ident.toUpperCase() : ident] : undefined;
        out += mapped || ident;
        i += ident.length;
        continue;
      }
    }
    out += ch;
    i += 1;
  }
  return out;
}
function __doccellsLocalizeFormulaInput(str) {
  var short = __doccellsShortLocale();
  var fnNames = __doccellsFormulaNamesToEnglish[short];
  var isDecimalComma = __doccellsDecimalCommaLocales.indexOf(short) > -1;
  if (!fnNames && !isDecimalComma) return str;
  return __doccellsRewriteFormula(str, fnNames, isDecimalComma, ";", ",", ",", ".", true);
}
function __doccellsDelocalizeFormulaOutput(str) {
  var short = __doccellsShortLocale();
  var fnNames = __doccellsFormulaNamesByEnglish[short];
  var isDecimalComma = __doccellsDecimalCommaLocales.indexOf(short) > -1;
  if (!fnNames && !isDecimalComma) return str;
  return __doccellsRewriteFormula(str, fnNames, isDecimalComma, ",", ";", ".", ",", true);
}
function __doccellsExecCanonicalFormula(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc) {
  return execfunction(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc, true);
}
function execfunction(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc, __doccellsCanonicalFormula) {
  if (!__doccellsCanonicalFormula && typeof txt === "string" && txt.charAt(0) === "=") {
    var __doccellsCanonicalTxt = __doccellsLocalizeFormulaInput(txt);
    if (__doccellsCanonicalTxt !== txt) txt = __doccellsCanonicalTxt;
  }
  if (txt.indexOf(error.r) > -1) {`;

// ---------------------------------------------------------------------------
// Patch 2: getCellValue(..., "f") -- translate canonical -> locale for display.
// ---------------------------------------------------------------------------

function getCellValueOld(L) {
  return `    retv = d[attr];
    if (attr === "f" && !${L}.isNil(retv)) {
      retv = functionHTMLGenerate(retv);
    } else if (attr === "f") {`;
}
function getCellValueNew(L) {
  return `    retv = d[attr];
    if (attr === "f" && !${L}.isNil(retv)) {
      retv = functionHTMLGenerate(__doccellsDelocalizeFormulaOutput(retv));
    } else if (attr === "f") {`;
}

// ---------------------------------------------------------------------------
// Patch 3: rangeHightlightselected() -- Unicode-aware autocomplete trigger.
// ---------------------------------------------------------------------------

const REGEX_GATE_OLD = `if (currText === null || currText === void 0 ? void 0 : currText.match(/^[a-zA-Z_]+$/)) {`;
const REGEX_GATE_NEW = `if (currText === null || currText === void 0 ? void 0 : currText.match(/^[\\p{L}_]+$/u)) {`;

// ---------------------------------------------------------------------------
// Patch 4: helpFunctionExe() -- augment functionlistMap with locale-name keys
// so the existing (unpatched) lookups by whatever the user typed just work.
// ---------------------------------------------------------------------------

const FUNCLIST_MAP_OLD = `      ctx.formulaCache.functionlistMap[functionlist[_i14].n] = functionlist[_i14];
    }
  }`;
const FUNCLIST_MAP_NEW = `      ctx.formulaCache.functionlistMap[functionlist[_i14].n] = functionlist[_i14];
    }
    var __doccellsShort = __doccellsShortLocale();
    var __doccellsToLocaleMap = __doccellsFormulaNamesByEnglish[__doccellsShort];
    if (__doccellsToLocaleMap) {
      for (var __doccellsI = 0; __doccellsI < functionlist.length; __doccellsI += 1) {
        var __doccellsLocaleName = __doccellsToLocaleMap[functionlist[__doccellsI].n];
        if (__doccellsLocaleName && !(__doccellsLocaleName in ctx.formulaCache.functionlistMap)) {
          ctx.formulaCache.functionlistMap[__doccellsLocaleName] = Object.assign({}, functionlist[__doccellsI], { n: __doccellsLocaleName });
        }
      }
    }
  }`;

// ---------------------------------------------------------------------------
// Patch 5: searchFunction() -- match + display locale names in the dropdown.
//
// Whenever a function has a translated name for the active locale, matching
// must use ONLY that locale name -- never fall back to the raw English
// canonical name -- otherwise typing an English function name (e.g. "SUM" in
// fr-FR) still surfaces it in the dropdown even though it isn't a valid
// French function name (only "SOMME" is). The English name is used as a
// match target only for functions that have no translation at all for the
// active locale, so the dropdown still finds those (better than nothing).
// ---------------------------------------------------------------------------

function searchFunctionOld(L) {
  return `function searchFunction(ctx, searchtxt) {
  var _locale = locale(ctx),
    functionlist = _locale.functionlist;
  var f = [];
  var s = [];
  var t = [];
  var result_i = 0;
  for (var _i13 = 0; _i13 < functionlist.length; _i13 += 1) {
    var item = functionlist[_i13];
    var n = item.n;
    if (n === searchtxt) {
      f.unshift(item);
      result_i += 1;
    } else if (${L}.startsWith(n, searchtxt)) {
      s.unshift(item);
      result_i += 1;
    } else if (n.indexOf(searchtxt) > -1) {
      t.unshift(item);
      result_i += 1;
    }
    if (result_i >= 10) {
      break;
    }
  }
  var list = [].concat(f, s, t);
  if (list.length <= 0) {
    return;
  }
  ctx.functionCandidates = list;
}`;
}
function searchFunctionBuggy(L) {
  return `function searchFunction(ctx, searchtxt) {
  var _locale = locale(ctx),
    functionlist = _locale.functionlist;
  var f = [];
  var s = [];
  var t = [];
  var result_i = 0;
  var __doccellsShort = __doccellsShortLocale();
  var __doccellsToLocaleMap = __doccellsFormulaNamesByEnglish[__doccellsShort];
  for (var _i13 = 0; _i13 < functionlist.length; _i13 += 1) {
    var item = functionlist[_i13];
    var n = item.n;
    var matchName = n;
    var displayItem = item;
    var __doccellsLocaleName = __doccellsToLocaleMap ? __doccellsToLocaleMap[n] : undefined;
    if (__doccellsLocaleName && __doccellsLocaleName.toUpperCase().indexOf(searchtxt) > -1) {
      matchName = __doccellsLocaleName.toUpperCase();
      displayItem = Object.assign({}, item, { n: __doccellsLocaleName });
    }
    if (matchName === searchtxt) {
      f.unshift(displayItem);
      result_i += 1;
    } else if (${L}.startsWith(matchName, searchtxt)) {
      s.unshift(displayItem);
      result_i += 1;
    } else if (matchName.indexOf(searchtxt) > -1) {
      t.unshift(displayItem);
      result_i += 1;
    }
    if (result_i >= 10) {
      break;
    }
  }
  var list = [].concat(f, s, t);
  if (list.length <= 0) {
    return;
  }
  ctx.functionCandidates = list;
}`;
}
function searchFunctionNoRangeSuggestion(L) {
  return `function searchFunction(ctx, searchtxt) {
  var _locale = locale(ctx),
    functionlist = _locale.functionlist;
  var f = [];
  var s = [];
  var t = [];
  var result_i = 0;
  var __doccellsShort = __doccellsShortLocale();
  var __doccellsToLocaleMap = __doccellsFormulaNamesByEnglish[__doccellsShort];
  for (var _i13 = 0; _i13 < functionlist.length; _i13 += 1) {
    var item = functionlist[_i13];
    var n = item.n;
    var matchName = n;
    var displayItem = item;
    var __doccellsLocaleName = __doccellsToLocaleMap ? __doccellsToLocaleMap[n] : undefined;
    if (__doccellsLocaleName) {
      matchName = __doccellsLocaleName.toUpperCase();
      displayItem = Object.assign({}, item, { n: __doccellsLocaleName });
    }
    if (matchName === searchtxt) {
      f.unshift(displayItem);
      result_i += 1;
    } else if (${L}.startsWith(matchName, searchtxt)) {
      s.unshift(displayItem);
      result_i += 1;
    } else if (matchName.indexOf(searchtxt) > -1) {
      t.unshift(displayItem);
      result_i += 1;
    }
    if (result_i >= 10) {
      break;
    }
  }
  var list = [].concat(f, s, t);
  if (list.length <= 0) {
    return;
  }
  ctx.functionCandidates = list;
}`;
}
// Range-eligible functions: same 5 as the toolbar's quick-formula (Σ)
// dropdown (QUICK_FORMULA_KEYS above) -- Google Sheets limits its "range
// suggestion" autocomplete entry to this same handful of aggregate
// functions, not every function in the library.
function searchFunctionNew(L) {
  return `function searchFunction(ctx, searchtxt) {
  var _locale = locale(ctx),
    functionlist = _locale.functionlist;
  var f = [];
  var s = [];
  var t = [];
  var result_i = 0;
  var __doccellsShort = __doccellsShortLocale();
  var __doccellsToLocaleMap = __doccellsFormulaNamesByEnglish[__doccellsShort];
  for (var _i13 = 0; _i13 < functionlist.length; _i13 += 1) {
    var item = functionlist[_i13];
    var n = item.n;
    var matchName = n;
    var displayItem = item;
    var __doccellsLocaleName = __doccellsToLocaleMap ? __doccellsToLocaleMap[n] : undefined;
    if (__doccellsLocaleName) {
      matchName = __doccellsLocaleName.toUpperCase();
      displayItem = Object.assign({}, item, { n: __doccellsLocaleName, __doccellsEnglishName: n });
    } else {
      displayItem = Object.assign({}, item, { __doccellsEnglishName: n });
    }
    if (matchName === searchtxt) {
      f.unshift(displayItem);
      result_i += 1;
    } else if (${L}.startsWith(matchName, searchtxt)) {
      s.unshift(displayItem);
      result_i += 1;
    } else if (matchName.indexOf(searchtxt) > -1) {
      t.unshift(displayItem);
      result_i += 1;
    }
    if (result_i >= 10) {
      break;
    }
  }
  var list = [].concat(f, s, t);
  if (list.length <= 0) {
    return;
  }
  var __doccellsRangeFnKeys = { SUM: 1, AVERAGE: 1, COUNT: 1, MAX: 1, MIN: 1 };
  var __doccellsTop = list[0];
  if (__doccellsRangeFnKeys[__doccellsTop.__doccellsEnglishName] && ctx.luckysheetCellUpdate && ctx.luckysheetCellUpdate.length === 2) {
    var __doccellsRow = ctx.luckysheetCellUpdate[0];
    var __doccellsCol = ctx.luckysheetCellUpdate[1];
    var __doccellsFlowdata = getFlowdata(ctx);
    if (__doccellsFlowdata && __doccellsFlowdata[__doccellsRow]) {
      var __doccellsRangeRow = null;
      var __doccellsRangeCol = null;
      if (__doccellsRow - 1 >= 0 && checkNoNullValue(__doccellsFlowdata[__doccellsRow - 1][__doccellsCol])) {
        var __doccellsStartR = getNoNullValue(__doccellsFlowdata, __doccellsCol, __doccellsRow, "r");
        if (__doccellsStartR != null) {
          __doccellsRangeRow = [__doccellsStartR, __doccellsRow - 1];
          __doccellsRangeCol = [__doccellsCol, __doccellsCol];
        }
      } else if (__doccellsCol - 1 >= 0 && checkNoNullValue(__doccellsFlowdata[__doccellsRow][__doccellsCol - 1])) {
        var __doccellsStartC = getNoNullValue(__doccellsFlowdata, __doccellsRow, __doccellsCol, "c");
        if (__doccellsStartC != null) {
          __doccellsRangeRow = [__doccellsRow, __doccellsRow];
          __doccellsRangeCol = [__doccellsStartC, __doccellsCol - 1];
        }
      }
      if (__doccellsRangeRow && __doccellsRangeCol) {
        var __doccellsRangeTxt = getRangetxt(ctx, ctx.currentSheetId, { row: __doccellsRangeRow, column: __doccellsRangeCol }, ctx.currentSheetId);
        if (__doccellsRangeTxt) {
          list.unshift({
            n: __doccellsTop.n + "(" + __doccellsRangeTxt + ")",
            d: __doccellsTop.d,
            __doccellsFullInsert: true
          });
        }
      }
    }
  }
  ctx.functionCandidates = list;
}`;
}

// ---------------------------------------------------------------------------
// Patch 6: israngeseleciton() -- recognize ";" as a valid "ready for the next
// clicked reference" separator, same as ",". Without this, clicking a cell to
// insert a second reference right after typing ";" makes the editor think
// it's still adjusting the FIRST reference (since only "," was recognized as
// "cursor is right after a separator"), corrupting/clearing the formula
// being built. This is the live-editing counterpart to the ";" -> ","
// translation execfunction() already does on commit -- that one only fires
// when the formula is committed, not while clicking cells mid-edit.
// ---------------------------------------------------------------------------

const RANGESEL_1_OLD = `    if (istooltip && (lasttxt === "(" || lasttxt === ",") || !istooltip && (lasttxt === "(" || lasttxt === "," || lasttxt === "=" || lasttxt in operatorjson || lasttxt === "&")) {
      return true;
    }`;
const RANGESEL_1_NEW = `    if (istooltip && (lasttxt === "(" || __doccellsIsArgSepChar(lasttxt)) || !istooltip && (lasttxt === "(" || __doccellsIsArgSepChar(lasttxt) || lasttxt === "=" || lasttxt in operatorjson || lasttxt === "&")) {
      return true;
    }`;

const RANGESEL_2_OLD = `    var _lasttxt = _txt2.substring(_txt2.length - 1, 1);
    if (istooltip && (_lasttxt === "(" || _lasttxt === ",") || !istooltip && (_lasttxt === "(" || _lasttxt === "," || _lasttxt === "=" || _lasttxt in operatorjson || _lasttxt === "&")) {
      return true;
    }`;
const RANGESEL_2_NEW = `    var _lasttxt = _txt2.substring(_txt2.length - 1, 1);
    if (istooltip && (_lasttxt === "(" || __doccellsIsArgSepChar(_lasttxt)) || !istooltip && (_lasttxt === "(" || __doccellsIsArgSepChar(_lasttxt) || _lasttxt === "=" || _lasttxt in operatorjson || _lasttxt === "&")) {
      return true;
    }`;

const RANGESEL_3_OLD = `      var _lasttxt2 = _txt3.substring(_txt3.length - 1, 1);
      ctx.formulaCache.rangeSetValueTo = anchor.previousSibling;
      if (istooltip && (_lasttxt2 === "(" || _lasttxt2 === ",") || !istooltip && (_lasttxt2 === "(" || _lasttxt2 === "," || _lasttxt2 === "=" || _lasttxt2 in operatorjson || _lasttxt2 === "&")) {
        return true;
      }`;
const RANGESEL_3_NEW = `      var _lasttxt2 = _txt3.substring(_txt3.length - 1, 1);
      ctx.formulaCache.rangeSetValueTo = anchor.previousSibling;
      if (istooltip && (_lasttxt2 === "(" || __doccellsIsArgSepChar(_lasttxt2)) || !istooltip && (_lasttxt2 === "(" || __doccellsIsArgSepChar(_lasttxt2) || _lasttxt2 === "=" || _lasttxt2 in operatorjson || _lasttxt2 === "&")) {
        return true;
      }`;

// ---------------------------------------------------------------------------
// Patch 7: functionHTML() -- treat ";" as a token boundary the same way ","
// already is, while live-typing a formula. Without this, functionHTML (the
// per-keystroke syntax highlighter/tokenizer used by handleFormulaInput) has
// no branch for ";" at all, so it falls into the generic character
// accumulator and MERGES a just-inserted cell reference with the following
// ";" into one plain-text run (e.g. "C20;"). That merged run fails the
// cell-reference shape check elsewhere, which is what made a second
// click-to-insert-a-reference right after typing ";" silently wipe the
// in-progress formula (confirmed by reproducing and instrumenting the
// vendored code -- not a hypothetical). isFunctionRange/functionStrChange/
// functionCopy do NOT need the same fix: they only ever run on the already-
// committed, canonical (comma-only) cell.f string, never on live-typed text.
// ---------------------------------------------------------------------------

const FUNCHTML_OLD = `    } else if (s === "," && matchConfig.squote === 0 && matchConfig.dquote === 0 && matchConfig.braces === 0) {
      function_str += "".concat(functionHTML(str), "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-comma\\">,</span>");
      str = "";
    } else if (s === "&" && matchConfig.squote === 0 && matchConfig.dquote === 0 && matchConfig.braces === 0) {`;
const FUNCHTML_NEW = `    } else if (s === "," && matchConfig.squote === 0 && matchConfig.dquote === 0 && matchConfig.braces === 0) {
      function_str += "".concat(functionHTML(str), "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-comma\\">,</span>");
      str = "";
    } else if (s === ";" && __doccellsIsArgSepChar(";") && matchConfig.squote === 0 && matchConfig.dquote === 0 && matchConfig.braces === 0) {
      function_str += "".concat(functionHTML(str), "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-comma\\">;</span>");
      str = "";
    } else if (s === "&" && matchConfig.squote === 0 && matchConfig.dquote === 0 && matchConfig.braces === 0) {`;

// ---------------------------------------------------------------------------
// Patch 8: handleSum() -- clicking the toolbar's sigma (Σ) icon directly
// (rather than opening its dropdown) always inserted the hardcoded English
// "SUM", regardless of locale. Route it through the same English->locale
// map used elsewhere so it inserts "SOMME" for French, etc.
// ---------------------------------------------------------------------------

const HANDLESUM_OLD = `function handleSum(ctx, cellInput, fxInput, cache) {
  autoSelectionFormula(ctx, cellInput, fxInput, "SUM", cache);
}`;
const HANDLESUM_NEW = `function handleSum(ctx, cellInput, fxInput, cache) {
  var __doccellsSumName = (__doccellsFormulaNamesByEnglish[__doccellsShortLocale()] || {}).SUM || "SUM";
  autoSelectionFormula(ctx, cellInput, fxInput, __doccellsSumName, cache);
}`;

// ---------------------------------------------------------------------------
// Patch 9: every formula returned by functionCopy() starts from cell.f, which
// is already canonical. Mark those evaluation calls accordingly so a formula
// such as "=IF(B3>100,0,1)" is not reinterpreted as "=IF(B3>100.0.1)" in a
// decimal-comma locale. This covers fill-handle drag, copy/paste, and sort.
// ---------------------------------------------------------------------------

const CANONICAL_FORMULA_CALLS = [
  ["execfunction(ctx, func, _r16, _c16)", "__doccellsExecCanonicalFormula(ctx, func, _r16, _c16)"],
  ["execfunction(ctx, func, r, c, undefined, undefined, true)", "__doccellsExecCanonicalFormula(ctx, func, r, c, undefined, undefined, true)"],
  ["execfunction(ctx, _func4, _actualRow4, _vc4, undefined, undefined, true)", "__doccellsExecCanonicalFormula(ctx, _func4, _actualRow4, _vc4, undefined, undefined, true)"],
  ["execfunction(ctx, f, j, i)", "__doccellsExecCanonicalFormula(ctx, f, j, i)"],
  ["execfunction(ctx, _f, _j, i)", "__doccellsExecCanonicalFormula(ctx, _f, _j, i)"],
  ["execfunction(ctx, _f2, _i21, _j2)", "__doccellsExecCanonicalFormula(ctx, _f2, _i21, _j2)"],
  ["execfunction(ctx, _f3, _i21, _j3)", "__doccellsExecCanonicalFormula(ctx, _f3, _i21, _j3)"],
  ["execfunction(ctx, _func5, _actualRow5, _vc5, undefined, undefined, true)", "__doccellsExecCanonicalFormula(ctx, _func5, _actualRow5, _vc5, undefined, undefined, true)"],
  ["execfunction(ctx, func, h, c, undefined, undefined, true)", "__doccellsExecCanonicalFormula(ctx, func, h, c, undefined, undefined, true)"],
];

const CANONICAL_HELPER_UPGRADE_OLD = `function execfunction(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc) {
  if (typeof txt === "string" && txt.charAt(0) === "=") {`;
const CANONICAL_HELPER_UPGRADE_NEW = `function __doccellsExecCanonicalFormula(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc) {
  return execfunction(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc, true);
}
function execfunction(ctx, txt, r, c, id, calcChainSet, isrefresh, notInsertFunc, __doccellsCanonicalFormula) {
  if (!__doccellsCanonicalFormula && typeof txt === "string" && txt.charAt(0) === "=") {`;

// ---------------------------------------------------------------------------
// Patch 10 (@fortune-sheet/react bundles): the toolbar's Σ dropdown menu shows
// each quick function with the translated label on the left (already correct,
// from the locale files) but a hardcoded English name ("SUM", "AVERAGE", ...)
// as the grey subtext on the right, AND that same hardcoded value is what
// gets inserted into the cell when the item is clicked -- which is why
// clicking "Somme" wrote "=SUM(...)" instead of "=SOMME(...)" into the
// editor. Same fix as handleSum above, applied to the 5 quick-formula items.
// ---------------------------------------------------------------------------

const QUICKFORMULA_ITEMDATA_OLD = `      var _itemData = [{
        text: formula.sum,
        value: "SUM"
      }, {
        text: formula.average,
        value: "AVERAGE"
      }, {
        text: formula.count,
        value: "COUNT"
      }, {
        text: formula.max,
        value: "MAX"
      }, {
        text: formula.min,
        value: "MIN"
      }];`;
const QUICKFORMULA_ITEMDATA_NEW = `      var __doccellsQuickFormulaNames = (function () {
        var lang = (typeof navigator !== "undefined" && navigator.language) || "en";
        var table = ${QUICK_FORMULA_NAMES_JSON};
        return table[lang.split("-")[0]] || {};
      })();
      var _itemData = [{
        text: formula.sum,
        value: __doccellsQuickFormulaNames.SUM || "SUM"
      }, {
        text: formula.average,
        value: __doccellsQuickFormulaNames.AVERAGE || "AVERAGE"
      }, {
        text: formula.count,
        value: __doccellsQuickFormulaNames.COUNT || "COUNT"
      }, {
        text: formula.max,
        value: __doccellsQuickFormulaNames.MAX || "MAX"
      }, {
        text: formula.min,
        value: __doccellsQuickFormulaNames.MIN || "MIN"
      }];`;

// ---------------------------------------------------------------------------
// Patch 11 (@fortune-sheet/react bundles): the argument-hint tooltip
// (FormulaHint) joins parameter names and examples with a hardcoded ", " in
// both its signature line ("SI(logical_expression, value_if_true, ...)") and
// its example line -- contradicting the ";" the user actually has to type in
// decimal-comma locales. Swap in "; " for those locales.
// ---------------------------------------------------------------------------

const HINT_SEP_HELPER_OLD = `var FormulaHint = function FormulaHint(props) {`;
const HINT_SEP_HELPER_NEW = `var __doccellsHintArgSep = ${DECIMAL_COMMA_LOCALES_JSON}.indexOf((((typeof navigator !== "undefined" && navigator.language) || "en").split("-")[0])) > -1 ? "; " : ", ";
var FormulaHint = function FormulaHint(props) {`;

const HINT_SEP_REPEAT_OLD = `      name += ", ...";`;
const HINT_SEP_REPEAT_NEW = `      name += __doccellsHintArgSep + "...";`;

const HINT_SEP_NAME_OLD = `    }, name, i !== fn.p.length - 1 && ", ");`;
const HINT_SEP_NAME_NEW = `    }, name, i !== fn.p.length - 1 && __doccellsHintArgSep);`;

const HINT_SEP_EXAMPLE_OLD = `    }, param.example, i !== fn.p.length - 1 && ", ");`;
const HINT_SEP_EXAMPLE_NEW = `    }, param.example, i !== fn.p.length - 1 && __doccellsHintArgSep);`;

// ---------------------------------------------------------------------------
// Patch 12 (@fortune-sheet/react bundles): the "Formula library" dialog
// (FormulaSearch$1) lists, searches, and inserts functions purely by their
// canonical English name (functionlist[].n). Give it the same locale-name
// table used elsewhere so it displays/searches/inserts "SOMME" under fr-FR,
// etc., while still handing off a name execfunction() already knows how to
// translate back to canonical on commit.
// ---------------------------------------------------------------------------

const FORMULA_LIB_HELPER_OLD = `var FormulaSearch$1 = function FormulaSearch(_ref) {`;
const FORMULA_LIB_HELPER_NEW = `var __doccellsInsertFnLocaleNames = (function () {
  var lang = (typeof navigator !== "undefined" && navigator.language) || "en";
  var table = ${TO_LOCALE_JSON};
  return table[lang.split("-")[0]] || {};
})();
var FormulaSearch$1 = function FormulaSearch(_ref) {`;

const FORMULA_LIB_SEARCH_OLD = `      for (var i = 0; i < functionlist.length; i += 1) {
        if (/^[a-zA-Z]+$/.test(text)) {
          if (functionlist[i].n.indexOf(text) !== -1) {
            list.push(functionlist[i]);
          }
        } else if (functionlist[i].a.indexOf(text) !== -1) {
          list.push(functionlist[i]);
        }
      }`;
const FORMULA_LIB_SEARCH_NEW = `      for (var i = 0; i < functionlist.length; i += 1) {
        if (/^[a-zA-Z]+$/.test(text)) {
          var __doccellsLocaleName = __doccellsInsertFnLocaleNames[functionlist[i].n];
          if (functionlist[i].n.indexOf(text) !== -1 || __doccellsLocaleName && __doccellsLocaleName.toUpperCase().indexOf(text) !== -1) {
            list.push(functionlist[i]);
          }
        } else if (functionlist[i].a.indexOf(text) !== -1) {
          list.push(functionlist[i]);
        }
      }`;

const FORMULA_LIB_INSERT_OLD = `    var formulaTxt = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">=</span><span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">".concat(filteredFunctionList[selectedFuncIndex].n.toUpperCase(), "</span><span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">(</span>");`;
const FORMULA_LIB_INSERT_NEW = `    var __doccellsSelectedFnName = (__doccellsInsertFnLocaleNames[filteredFunctionList[selectedFuncIndex].n] || filteredFunctionList[selectedFuncIndex].n).toUpperCase();
    var formulaTxt = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">=</span><span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">".concat(__doccellsSelectedFnName, "</span><span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">(</span>");`;

const FORMULA_LIB_HINT_OLD = `        ctx.functionHint = filteredFunctionList[selectedFuncIndex].n.toUpperCase();`;
const FORMULA_LIB_HINT_NEW = `        ctx.functionHint = __doccellsSelectedFnName;`;

function formulaLibRowOld(L) {
  return `  }, filteredFunctionList.map(function (v, index) {
    return /*#__PURE__*/${L}.createElement("div", {
      className: "listBox".concat(index === selectedFuncIndex ? " on" : ""),
      key: v.n,
      onClick: function onClick() {
        return setSelectedFuncIndex(index);
      },
      tabIndex: 0
    }, /*#__PURE__*/${L}.createElement("div", null, v.n), /*#__PURE__*/${L}.createElement("div", null, v.a));
  }))`;
}
// ---------------------------------------------------------------------------
// Patch 13 (@fortune-sheet/react bundles): FormulaSearch -- the inline
// autocomplete dropdown -- add click-to-insert. Differs per bundle in how
// useContext/isEmpty/getrangeseleciton are referenced (React.useContext vs
// bare useContext, lodash default-interop vs bare `_`, `core.` prefix vs
// bare import), so it's parameterized accordingly.
// ---------------------------------------------------------------------------

function formulaSearchClickOld(createElement, useContextExpr, isEmptyFn) {
  return `var FormulaSearch = function FormulaSearch(props) {
  var _useContext = ${useContextExpr},
    context = _useContext.context;
  if (${isEmptyFn}(context.functionCandidates)) return null;
  return /*#__PURE__*/${createElement}.createElement("div", _objectSpread2(_objectSpread2({}, props), {}, {
    id: "luckysheet-formula-search-c",
    className: "luckysheet-formula-search-c"
  }), context.functionCandidates.map(function (v, index) {
    return /*#__PURE__*/${createElement}.createElement("div", {
      key: v.n,
      "data-func": v.n,
      className: "luckysheet-formula-search-item ".concat(index === 0 ? "luckysheet-formula-search-item-active" : "")
    }, /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-func"
    }, v.n), /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-detail"
    }, v.d));
  }));
};`;
}
function formulaSearchClickNoRangeSuggestion(createElement, useContextExpr, isEmptyFn, getRangeSelectionCall) {
  return `var __doccellsInsertFormulaCandidate = function __doccellsInsertFormulaCandidate(setContext, formulaName) {
  var textEditor = document.getElementById("luckysheet-rich-text-editor");
  if (!textEditor) return;
  var __doccellsRangeSel = ${getRangeSelectionCall};
  var searchTxt = (__doccellsRangeSel && __doccellsRangeSel.textContent) || "";
  var deleteCount = searchTxt.length;
  textEditor.focus();
  var selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  var range = selection.getRangeAt(0);
  if (deleteCount !== 0 && range) {
    var startOffset = Math.max(range.startOffset - deleteCount, 0);
    var endOffset = range.startOffset;
    range.setStart(range.startContainer, startOffset);
    range.setEnd(range.startContainer, endOffset);
    range.deleteContents();
  }
  var functionStr = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-func\\">".concat(formulaName, "</span>");
  var lParStr = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-lpar\\">(</span>";
  var functionNode = new DOMParser().parseFromString(functionStr, "text/html").body.childNodes[0];
  var lParNode = new DOMParser().parseFromString(lParStr, "text/html").body.childNodes[0];
  if (range && range.startContainer.parentNode) {
    range.setStart(range.startContainer.parentNode, 1);
  }
  if (range) {
    range.insertNode(lParNode);
    range.insertNode(functionNode);
    range.collapse();
    selection.removeAllRanges();
    selection.addRange(range);
  }
  setContext(function (draftCtx) {
    draftCtx.functionCandidates = [];
    draftCtx.functionHint = formulaName;
  });
};
var FormulaSearch = function FormulaSearch(props) {
  var _useContext = ${useContextExpr},
    context = _useContext.context,
    setContext = _useContext.setContext;
  if (${isEmptyFn}(context.functionCandidates)) return null;
  return /*#__PURE__*/${createElement}.createElement("div", _objectSpread2(_objectSpread2({}, props), {}, {
    id: "luckysheet-formula-search-c",
    className: "luckysheet-formula-search-c"
  }), context.functionCandidates.map(function (v, index) {
    return /*#__PURE__*/${createElement}.createElement("div", {
      key: v.n,
      "data-func": v.n,
      className: "luckysheet-formula-search-item ".concat(index === 0 ? "luckysheet-formula-search-item-active" : ""),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        __doccellsInsertFormulaCandidate(setContext, v.n);
      }
    }, /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-func"
    }, v.n), /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-detail"
    }, v.d));
  }));
};`;
}
function formulaSearchClickNoCommit(createElement, useContextExpr, isEmptyFn, getRangeSelectionCall) {
  return `var __doccellsInsertFormulaCandidate = function __doccellsInsertFormulaCandidate(setContext, formulaName, isFullInsert) {
  var textEditor = document.getElementById("luckysheet-rich-text-editor");
  if (!textEditor) return;
  var __doccellsRangeSel = ${getRangeSelectionCall};
  var searchTxt = (__doccellsRangeSel && __doccellsRangeSel.textContent) || "";
  var deleteCount = searchTxt.length;
  textEditor.focus();
  var selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  var range = selection.getRangeAt(0);
  if (deleteCount !== 0 && range) {
    var startOffset = Math.max(range.startOffset - deleteCount, 0);
    var endOffset = range.startOffset;
    range.setStart(range.startContainer, startOffset);
    range.setEnd(range.startContainer, endOffset);
    range.deleteContents();
  }
  var functionStr = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-func\\">".concat(formulaName, "</span>");
  var lParStr = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-lpar\\">(</span>";
  var functionNode = new DOMParser().parseFromString(functionStr, "text/html").body.childNodes[0];
  var lParNode = new DOMParser().parseFromString(lParStr, "text/html").body.childNodes[0];
  if (range && range.startContainer.parentNode) {
    range.setStart(range.startContainer.parentNode, 1);
  }
  if (range) {
    if (!isFullInsert) {
      range.insertNode(lParNode);
    }
    range.insertNode(functionNode);
    range.collapse();
    selection.removeAllRanges();
    selection.addRange(range);
  }
  setContext(function (draftCtx) {
    draftCtx.functionCandidates = [];
    draftCtx.functionHint = formulaName;
  });
};
var FormulaSearch = function FormulaSearch(props) {
  var _useContext = ${useContextExpr},
    context = _useContext.context,
    setContext = _useContext.setContext;
  if (${isEmptyFn}(context.functionCandidates)) return null;
  return /*#__PURE__*/${createElement}.createElement("div", _objectSpread2(_objectSpread2({}, props), {}, {
    id: "luckysheet-formula-search-c",
    className: "luckysheet-formula-search-c"
  }), context.functionCandidates.map(function (v, index) {
    return /*#__PURE__*/${createElement}.createElement("div", {
      key: v.n,
      "data-func": v.n,
      "data-doccells-full": v.__doccellsFullInsert ? "1" : undefined,
      className: "luckysheet-formula-search-item ".concat(index === 0 ? "luckysheet-formula-search-item-active" : ""),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        __doccellsInsertFormulaCandidate(setContext, v.n, !!v.__doccellsFullInsert);
      }
    }, /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-func"
    }, v.n), /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-detail"
    }, v.d));
  }));
};`;
}
// Auto-commits the cell when a range-suggestion candidate is accepted:
// unlike a plain "NAME(" partial insert (which leaves the user mid-edit to
// type/select the range themselves), the range suggestion is already a
// complete, valid formula, so there's nothing left to type -- mirrors
// handleGlobalEnter()'s own commit-and-move-down sequence (core dist
// index.js ~191166: updateCell + luckysheet_select_save + moveHighlightCell).
function formulaSearchClickNew(createElement, useContextExpr, isEmptyFn, getRangeSelectionCall, corePrefix) {
  return `var __doccellsInsertFormulaCandidate = function __doccellsInsertFormulaCandidate(setContext, formulaName, isFullInsert) {
  var textEditor = document.getElementById("luckysheet-rich-text-editor");
  if (!textEditor) return;
  var __doccellsRangeSel = ${getRangeSelectionCall};
  var searchTxt = (__doccellsRangeSel && __doccellsRangeSel.textContent) || "";
  var deleteCount = searchTxt.length;
  textEditor.focus();
  var selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  var range = selection.getRangeAt(0);
  if (deleteCount !== 0 && range) {
    var startOffset = Math.max(range.startOffset - deleteCount, 0);
    var endOffset = range.startOffset;
    range.setStart(range.startContainer, startOffset);
    range.setEnd(range.startContainer, endOffset);
    range.deleteContents();
  }
  var functionStr = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-func\\">".concat(formulaName, "</span>");
  var lParStr = "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-lpar\\">(</span>";
  var functionNode = new DOMParser().parseFromString(functionStr, "text/html").body.childNodes[0];
  var lParNode = new DOMParser().parseFromString(lParStr, "text/html").body.childNodes[0];
  if (range && range.startContainer.parentNode) {
    range.setStart(range.startContainer.parentNode, 1);
  }
  if (range) {
    if (!isFullInsert) {
      range.insertNode(lParNode);
    }
    range.insertNode(functionNode);
    range.collapse();
    selection.removeAllRanges();
    selection.addRange(range);
  }
  setContext(function (draftCtx) {
    draftCtx.functionCandidates = [];
    draftCtx.functionHint = formulaName;
    if (isFullInsert && draftCtx.luckysheetCellUpdate && draftCtx.luckysheetCellUpdate.length === 2) {
      var __doccellsLastCellUpdate = draftCtx.luckysheetCellUpdate.slice();
      ${corePrefix}updateCell(draftCtx, __doccellsLastCellUpdate[0], __doccellsLastCellUpdate[1], textEditor);
      draftCtx.luckysheet_select_save = [{
        row: [__doccellsLastCellUpdate[0], __doccellsLastCellUpdate[0]],
        column: [__doccellsLastCellUpdate[1], __doccellsLastCellUpdate[1]],
        row_focus: __doccellsLastCellUpdate[0],
        column_focus: __doccellsLastCellUpdate[1]
      }];
      ${corePrefix}moveHighlightCell(draftCtx, "down", 1, "rangeOfSelect");
    }
  });
};
var FormulaSearch = function FormulaSearch(props) {
  var _useContext = ${useContextExpr},
    context = _useContext.context,
    setContext = _useContext.setContext;
  if (${isEmptyFn}(context.functionCandidates)) return null;
  return /*#__PURE__*/${createElement}.createElement("div", _objectSpread2(_objectSpread2({}, props), {}, {
    id: "luckysheet-formula-search-c",
    className: "luckysheet-formula-search-c"
  }), context.functionCandidates.map(function (v, index) {
    return /*#__PURE__*/${createElement}.createElement("div", {
      key: v.n,
      "data-func": v.n,
      "data-doccells-full": v.__doccellsFullInsert ? "1" : undefined,
      className: "luckysheet-formula-search-item ".concat(index === 0 ? "luckysheet-formula-search-item-active" : ""),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        __doccellsInsertFormulaCandidate(setContext, v.n, !!v.__doccellsFullInsert);
      }
    }, /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-func"
    }, v.n), /*#__PURE__*/${createElement}.createElement("div", {
      className: "luckysheet-formula-search-detail"
    }, v.d));
  }));
};`;
}

// ---------------------------------------------------------------------------
// Patch 14 (@fortune-sheet/react bundles): selectActiveFormula -- the
// Tab/Enter keyboard-accept path for the autocomplete dropdown (separate
// code from the click handler above: it re-reads the active item from the
// live DOM instead of the React candidate object). Needs the same
// full-insert awareness as the click handler, but can only learn the flag
// via the `data-doccells-full` attribute stamped on the DOM node by Patch 13.
// Both anchor blocks below are textually identical across index.js/
// index.esm.js (the two bundles only differ earlier in this function, in how
// getrangeseleciton() is referenced, which these patches don't touch).
// ---------------------------------------------------------------------------

const SELECT_ACTIVE_FORMULA_FLAG_OLD = `      var formulaName = formulaNameDiv.textContent;`;
const SELECT_ACTIVE_FORMULA_FLAG_NEW = `      var formulaName = formulaNameDiv.textContent;
      var __doccellsFullInsert = activeFormula.getAttribute("data-doccells-full") === "1";`;

const SELECT_ACTIVE_FORMULA_INSERT_OLD = `        if (range === null || range === void 0 ? void 0 : range.startContainer.parentNode) {
          range === null || range === void 0 ? void 0 : range.setStart(range.startContainer.parentNode, 1);
        }
        range === null || range === void 0 ? void 0 : range.insertNode(lParNode);
        range === null || range === void 0 ? void 0 : range.insertNode(functionNode);`;
const SELECT_ACTIVE_FORMULA_INSERT_NEW = `        if (range === null || range === void 0 ? void 0 : range.startContainer.parentNode) {
          range === null || range === void 0 ? void 0 : range.setStart(range.startContainer.parentNode, 1);
        }
        if (!__doccellsFullInsert) {
          range === null || range === void 0 ? void 0 : range.insertNode(lParNode);
        }
        range === null || range === void 0 ? void 0 : range.insertNode(functionNode);`;

// Same auto-commit behavior as the click path (formulaSearchClickNew, above)
// for the Tab/Enter keyboard-accept path: a range-suggestion is a complete
// formula, so accepting it should also commit the cell and move down, same
// as handleGlobalEnter()'s own sequence.
function selectActiveFormulaCommitOld() {
  return `        range === null || range === void 0 ? void 0 : range.collapse();
        selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
        if (range) selection === null || selection === void 0 ? void 0 : selection.addRange(range);
        setContext(function (draftCtx) {
          draftCtx.functionCandidates = [];
          draftCtx.functionHint = formulaName;
        });`;
}
function selectActiveFormulaCommitNew(corePrefix) {
  return `        range === null || range === void 0 ? void 0 : range.collapse();
        selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
        if (range) selection === null || selection === void 0 ? void 0 : selection.addRange(range);
        setContext(function (draftCtx) {
          draftCtx.functionCandidates = [];
          draftCtx.functionHint = formulaName;
          if (__doccellsFullInsert && draftCtx.luckysheetCellUpdate && draftCtx.luckysheetCellUpdate.length === 2) {
            var __doccellsLastCellUpdate = draftCtx.luckysheetCellUpdate.slice();
            ${corePrefix}updateCell(draftCtx, __doccellsLastCellUpdate[0], __doccellsLastCellUpdate[1], textEditor);
            draftCtx.luckysheet_select_save = [{
              row: [__doccellsLastCellUpdate[0], __doccellsLastCellUpdate[0]],
              column: [__doccellsLastCellUpdate[1], __doccellsLastCellUpdate[1]],
              row_focus: __doccellsLastCellUpdate[0],
              column_focus: __doccellsLastCellUpdate[1]
            }];
            ${corePrefix}moveHighlightCell(draftCtx, "down", 1, "rangeOfSelect");
          }
        });`;
}

function formulaLibRowNew(L) {
  return `  }, filteredFunctionList.map(function (v, index) {
    var __doccellsRowName = __doccellsInsertFnLocaleNames[v.n] || v.n;
    return /*#__PURE__*/${L}.createElement("div", {
      className: "listBox".concat(index === selectedFuncIndex ? " on" : ""),
      key: v.n,
      onClick: function onClick() {
        return setSelectedFuncIndex(index);
      },
      tabIndex: 0
    }, /*#__PURE__*/${L}.createElement("div", null, __doccellsRowName), /*#__PURE__*/${L}.createElement("div", null, v.a));
  }))`;
}

// ---------------------------------------------------------------------------

let allPatched = 0;
for (const { file: bundle, lodash: L } of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-formula-names: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  const alreadyDone = src.includes("__doccellsDelocalizeFormulaOutput");
  if (alreadyDone) {
    // Repair pass: earlier installs may carry the buggy searchFunction()
    // that still fell back to matching the raw English name (see comment
    // above Patch 5), or a version predating the range-suggestion feature.
    // Fix both in place without requiring a clean reinstall.
    let repaired = false;
    if (src.includes(searchFunctionBuggy(L))) {
      src = src.replace(searchFunctionBuggy(L), searchFunctionNew(L));
      repaired = true;
    } else if (src.includes(searchFunctionNoRangeSuggestion(L))) {
      src = src.replace(searchFunctionNoRangeSuggestion(L), searchFunctionNew(L));
      repaired = true;
    }

    if (src.includes("__doccellsExecCanonicalFormula")) {
      if (repaired) {
        fs.writeFileSync(file, src, "utf8");
        console.log(`patch-fortune-formula-names: repaired searchFunction locale matching in ${bundle}`);
      } else {
        console.log(`patch-fortune-formula-names: ${bundle} already patched`);
      }
      allPatched++;
      continue;
    }

    const upgradePatches = [
      {
        name: "canonical formula helper",
        old: CANONICAL_HELPER_UPGRADE_OLD,
        new: CANONICAL_HELPER_UPGRADE_NEW,
      },
      ...CANONICAL_FORMULA_CALLS.map(([old, replacement], index) => ({
        name: `canonical formula call ${index + 1}`,
        old,
        new: replacement,
      })),
    ];
    let upgradeOk = 0;
    for (const p of upgradePatches) {
      if (src.includes(p.old)) {
        src = src.replace(p.old, p.new);
        upgradeOk++;
      } else {
        console.warn(`patch-fortune-formula-names: upgrade pattern not found for "${p.name}" in ${bundle}`);
      }
    }
    if (upgradeOk === upgradePatches.length) {
      fs.writeFileSync(file, src, "utf8");
      console.log(`patch-fortune-formula-names: upgraded ${bundle} (${upgradeOk}/${upgradePatches.length})`);
      allPatched++;
    } else {
      console.warn(`patch-fortune-formula-names: only ${upgradeOk}/${upgradePatches.length} upgrade patterns matched in ${bundle}, aborting write for this file`);
    }
    continue;
  }

  const patches = [
    { name: "helpers + execfunction", old: HELPERS_OLD, new: HELPERS_NEW },
    { name: "getCellValue display", old: getCellValueOld(L), new: getCellValueNew(L) },
    { name: "autocomplete trigger regex", old: REGEX_GATE_OLD, new: REGEX_GATE_NEW },
    { name: "functionlistMap augmentation", old: FUNCLIST_MAP_OLD, new: FUNCLIST_MAP_NEW },
    { name: "searchFunction locale matching", old: searchFunctionOld(L), new: searchFunctionNew(L) },
    { name: "israngeseleciton anchor span", old: RANGESEL_1_OLD, new: RANGESEL_1_NEW },
    { name: "israngeseleciton editor-id branch", old: RANGESEL_2_OLD, new: RANGESEL_2_NEW },
    { name: "israngeseleciton previous-sibling branch", old: RANGESEL_3_OLD, new: RANGESEL_3_NEW },
    { name: "functionHTML semicolon token", old: FUNCHTML_OLD, new: FUNCHTML_NEW },
    { name: "handleSum locale-aware default", old: HANDLESUM_OLD, new: HANDLESUM_NEW },
    ...CANONICAL_FORMULA_CALLS.map(([old, replacement], index) => ({
      name: `canonical formula call ${index + 1}`,
      old,
      new: replacement,
    })),
  ];

  let ok = 0;
  for (const p of patches) {
    if (src.includes(p.old)) {
      src = src.replace(p.old, p.new);
      ok++;
    } else {
      console.warn(`patch-fortune-formula-names: pattern not found for "${p.name}" in ${bundle}`);
    }
  }

  if (ok === patches.length) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-formula-names: patched ${bundle} (${ok}/${patches.length})`);
    allPatched++;
  } else {
    console.warn(`patch-fortune-formula-names: only ${ok}/${patches.length} patterns matched in ${bundle}, aborting write for this file`);
  }
}

const REACT_BUNDLES = [
  {
    file: "index.js",
    createElement: "React__default['default']",
    useContextExpr: "React.useContext(WorkbookContext)",
    isEmptyFn: "___default['default'].isEmpty",
    getRangeSelectionCall: "core.getrangeseleciton()",
    corePrefix: "core.",
  },
  {
    file: "index.esm.js",
    createElement: "React",
    useContextExpr: "useContext(WorkbookContext)",
    isEmptyFn: "_.isEmpty",
    getRangeSelectionCall: "getrangeseleciton()",
    corePrefix: "",
  },
];
for (const { file: bundle, createElement, useContextExpr, isEmptyFn, getRangeSelectionCall, corePrefix } of REACT_BUNDLES) {
  const file = path.join(REACT_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-formula-names: react ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");

  const reactPatches = [
    { name: "quick-formula itemData", old: QUICKFORMULA_ITEMDATA_OLD, new: QUICKFORMULA_ITEMDATA_NEW },
    { name: "FormulaHint separator helper", old: HINT_SEP_HELPER_OLD, new: HINT_SEP_HELPER_NEW },
    { name: "FormulaHint repeat separator", old: HINT_SEP_REPEAT_OLD, new: HINT_SEP_REPEAT_NEW },
    { name: "FormulaHint signature separator", old: HINT_SEP_NAME_OLD, new: HINT_SEP_NAME_NEW },
    { name: "FormulaHint example separator", old: HINT_SEP_EXAMPLE_OLD, new: HINT_SEP_EXAMPLE_NEW },
    { name: "Formula library locale-name helper", old: FORMULA_LIB_HELPER_OLD, new: FORMULA_LIB_HELPER_NEW },
    { name: "Formula library search matching", old: FORMULA_LIB_SEARCH_OLD, new: FORMULA_LIB_SEARCH_NEW },
    { name: "Formula library insert-on-confirm", old: FORMULA_LIB_INSERT_OLD, new: FORMULA_LIB_INSERT_NEW },
    { name: "Formula library function hint", old: FORMULA_LIB_HINT_OLD, new: FORMULA_LIB_HINT_NEW },
    { name: "Formula library row display name", old: formulaLibRowOld(createElement), new: formulaLibRowNew(createElement) },
    {
      // Three possible starting points: a pristine bundle (never had
      // click-to-insert), one upgraded to click-to-insert but predating the
      // range-suggestion feature, or one with range-suggestion insert but
      // predating auto-commit-on-accept.
      name: "FormulaSearch click-to-insert",
      old: [
        formulaSearchClickNoCommit(createElement, useContextExpr, isEmptyFn, getRangeSelectionCall),
        formulaSearchClickNoRangeSuggestion(createElement, useContextExpr, isEmptyFn, getRangeSelectionCall),
        formulaSearchClickOld(createElement, useContextExpr, isEmptyFn),
      ],
      new: formulaSearchClickNew(createElement, useContextExpr, isEmptyFn, getRangeSelectionCall, corePrefix),
    },
    {
      name: "selectActiveFormula full-insert flag",
      old: SELECT_ACTIVE_FORMULA_FLAG_OLD,
      new: SELECT_ACTIVE_FORMULA_FLAG_NEW,
    },
    {
      name: "selectActiveFormula full-insert paren skip",
      old: SELECT_ACTIVE_FORMULA_INSERT_OLD,
      new: SELECT_ACTIVE_FORMULA_INSERT_NEW,
    },
    {
      name: "selectActiveFormula auto-commit range suggestion",
      old: selectActiveFormulaCommitOld(),
      new: selectActiveFormulaCommitNew(corePrefix),
    },
  ];

  let ok = 0;
  let changed = false;
  for (const p of reactPatches) {
    if (src.includes(p.new)) {
      ok++;
      continue;
    }
    const oldCandidates = Array.isArray(p.old) ? p.old : [p.old];
    const matchedOld = oldCandidates.find((candidate) => src.includes(candidate));
    if (matchedOld) {
      src = src.replace(matchedOld, p.new);
      changed = true;
      ok++;
    } else {
      console.warn(`patch-fortune-formula-names: pattern not found for "${p.name}" in react ${bundle}`);
    }
  }

  if (ok === reactPatches.length) {
    if (changed) {
      fs.writeFileSync(file, src, "utf8");
      console.log(`patch-fortune-formula-names: patched react ${bundle} (${ok}/${reactPatches.length})`);
    } else {
      console.log(`patch-fortune-formula-names: react ${bundle} already patched`);
    }
    allPatched++;
  } else {
    console.warn(`patch-fortune-formula-names: only ${ok}/${reactPatches.length} patterns matched in react ${bundle}, aborting write for this file`);
  }
}

if (allPatched === 0) process.exit(1);
