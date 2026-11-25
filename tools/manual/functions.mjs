// The functions page's tables (<lang>/fonctions.html), written from this
// catalog: each function is shown with its name in the language, its
// arguments and its description (functions/<lang>.txt, else DocCells' library
// in scripts/<lang>-locale.cjs), and an example computed by DocCells' engine.
//
// A function is listed only if its example computes: the library and the
// completion of DocCells name others, which give #NAME? or #ERROR!.
//
// functions/<lang>.txt: one function a line, NAME|arguments|description, "-"
// standing for the library's arguments. The arguments are separated by "; ",
// written as the language does.

import { existsSync, readFileSync } from "node:fs";
import { SAMPLE, evaluate } from "./engine.mjs";
import { localize } from "./terms.mjs";

// The example formulas, in canonical form.
export const CATALOG = {
    math: `SUM(A1:A5)|SUMIF(A1:A5,">=10")|SUMIFS(A1:A5,A1:A5,">9",B1:B5,"<8")|SUMPRODUCT(A1:A5,B1:B5)|SUMSQ(B1:B3)|SUMX2MY2(A1:A5,B1:B5)|SUMX2PY2(A1:A5,B1:B5)|SUMXMY2(A1:A5,B1:B5)|SERIESSUM(2,0,1,[1,1,1])|SUBTOTAL(9,A1:A5)|AGGREGATE(9,0,A1:A5)|PRODUCT(B1:B3)|COUNTUNIQUE(A1:A5)|ABS(-3)|SIGN(-3)|INT(-3.2)|TRUNC(3.789,1)|ROUND(3.14159,2)|ROUNDUP(3.11,1)|ROUNDDOWN(3.19,1)|MROUND(17,5)|CEILING(12.3,5)|FLOOR(12.3,5)|EVEN(3)|ODD(4)|ISEVEN(4)|ISODD(4)|MOD(17,5)|QUOTIENT(17,5)|GCD(24,36)|LCM(4,6)|FACT(5)|FACTDOUBLE(7)|COMBIN(5,2)|COMBINA(4,2)|MULTINOMIAL(2,3)|POWER(2,10)|SQRT(16)|SQRTPI(2)|EXP(1)|LN(10)|LOG(8,2)|LOG10(100)|RAND()|RANDBETWEEN(1,6)|BASE(10,2)|DECIMAL("1010",2)|ROMAN(2026)|ARABIC("MMXXVI")`,
    trig: `PI()|RADIANS(180)|DEGREES(PI())|SIN(PI()/2)|COS(PI())|TAN(1)|COT(1)|SEC(1)|CSC(1)|ASIN(1)|ACOS(0)|ATAN(1)|ATAN2(1,1)|ACOT(1)|SINH(1)|COSH(1)|TANH(1)|COTH(1)|SECH(1)|CSCH(1)|ASINH(1)|ACOSH(2)|ATANH(0.5)|ACOTH(2)`,
    logical: `IF(A1>=10,"admis","refusé")|IFS(A1>=16,"très bien",A1>=12,"assez bien")|SWITCH(2,1,"un",2,"deux","autre")|AND(A1>10,B1>1)|OR(A1>20,B1>1)|XOR(TRUE(),FALSE())|NOT(TRUE())|TRUE()|FALSE()|IFERROR(NA(),"absent")|IFNA(NA(),"absent")`,
    stat: `COUNT(A1:A5)|COUNTA(A1:C5)|COUNTBLANK(A1:E1)|COUNTIF(A1:A5,">10")|COUNTIFS(A1:A5,">9",B1:B5,"<8")|AVERAGE(A1:A5)|AVERAGEA(A1:A5)|AVERAGEIF(A1:A5,">10")|AVERAGEIFS(A1:A5,B1:B5,">3")|GEOMEAN(A1:A5)|HARMEAN(A1:A5)|TRIMMEAN(A1:A5,0.4)|MEDIAN(A1:A5)|MODE([1,2,2,3])|MIN(A1:A5)|MAX(A1:A5)|MINA(A1:A5)|MAXA(A1:A5)|LARGE(A1:A5,2)|SMALL(A1:A5,2)|RANK(A2,A1:A5)|QUARTILE(A1:A5,1)|QUARTILEEXC(A1:A5,1)|PERCENTILEINC(A1:A5,0.9)|PERCENTILEEXC(A1:A5,0.8)|PERCENTRANK(A1:A5,12)|STDEV(A1:A5)|STDEVP(A1:A5)|STDEVA(A1:A5)|STDEVPA(A1:A5)|VAR(A1:A5)|VARP(A1:A5)|VARA(A1:A5)|VARPA(A1:A5)|AVEDEV(A1:A5)|DEVSQ(A1:A5)|SKEW(A1:A5)|SKEWP(A1:A5)|KURT(A1:A5)|STANDARDIZE(12,10,2)|FREQUENCY(A1:A5,[10,15])|CORREL(A1:A5,B1:B5)|PEARSON(A1:A5,B1:B5)|RSQ(A1:A5,B1:B5)|COVARIANCEP(A1:A5,B1:B5)|COVARIANCES(A1:A5,B1:B5)|SLOPE(A1:A5,B1:B5)|INTERCEPT(A1:A5,B1:B5)|FORECAST(10,A1:A5,B1:B5)|STEYX(A1:A5,B1:B5)|LINEST(A1:A5,B1:B5)|LOGEST(A1:A5,B1:B5)|TREND(A1:A5,B1:B5,[10])|GROWTH(A1:A5,B1:B5,[10])|PERMUT(5,2)|PERMUTATIONA(5,2)`,
    proba: `PROB(B1:B2,[0.4,0.6],2)|NORMDIST(12,10,2,TRUE())|NORMINV(0.95,10,2)|NORMSDIST(1.96,TRUE())|NORMSINV(0.975)|GAUSS(1)|PHI(0)|BINOMDIST(3,10,0.5,FALSE())|CRITBINOM(10,0.5,0.9)|NEGBINOMDIST(3,2,0.5,FALSE())|POISSON(2,3,FALSE())|HYPGEOMDIST(1,4,8,20,FALSE())|EXPONDIST(1,2,TRUE())|GAMMADIST(2,3,2,TRUE())|GAMMAINV(0.5,3,2)|BETADIST(0.4,2,3,TRUE(),0,1)|BETAINV(0.5,2,3)|LOGNORMDIST(4,1,0.5,TRUE())|LOGNORMINV(0.5,1,0.5)|WEIBULL(1,2,3,TRUE())|CHIDIST(3,2,TRUE())|CHIDISTRT(3,2)|CHIINVRT(0.05,2)|FDIST(2,3,4,TRUE())|FDISTRT(2,3,4)|TTEST(A1:A5,B1:B5)|CONFIDENCE(0.05,2,50)|FISHER(0.5)|FISHERINV(0.5)|GAMMA(5)|GAMMALN(5)`,
    lookup: `VLOOKUP("Paul",C1:C5,1,0)|HLOOKUP(1,F1:G2,2,0)|LOOKUP(6,B1:B5,A1:A5)|MATCH("Léa",C1:C5,0)|INDEX(A1:A5,MATCH("Léa",C1:C5,0))|CHOOSE(2,"a","b","c")|ROW(B7)|COLUMN(B7)|ROWS(A1:C5)|COLUMNS(A1:C5)|TRANSPOSE(F1:G2)|FLATTEN(F1:G2)|UNIQUE(1,2,2)`,
    text: `CONCATENATE("Note : ",A1)|CONCAT("a","b")|LEFT("tableur",3)|RIGHT("tableur",3)|MID("tableur",2,3)|LEN("tableur")|LOWER("ABC")|UPPER("abc")|PROPER("jean dupont")|TRIM(" a  b ")|CLEAN("abc")|FIND("b","tableur")|SEARCH("B","tableur")|REPLACE("tableur",1,5,"X")|SUBSTITUTE("a-b-c","-","+")|REPT("ab",3)|EXACT("a","A")|SPLIT("a-b","-")|VALUE("12")|CHAR(65)|CODE("A")|UNICHAR(960)|UNICODE("π")|REGEXMATCH("abc","b")|REGEXEXTRACT("ab12","[0-9]+")|REGEXREPLACE("ab12","[0-9]+","x")`,
    date: `TODAY()|NOW()|DATE(2026,11,25)|YEAR(DATE(2026,11,25))|MONTH(DATE(2026,11,25))|DAY(DATE(2026,11,25))|WEEKDAY(DATE(2026,11,25),2)|WEEKNUM(DATE(2026,11,25))|ISOWEEKNUM(DATE(2026,11,25))|DAYS(DATE(2026,12,25),DATE(2026,11,25))|DAYS360(DATE(2026,1,1),DATE(2026,11,25))|DATEDIF(DATE(2020,1,1),DATE(2026,11,25),"Y")|YEARFRAC(DATE(2026,1,1),DATE(2026,7,1))|EDATE(DATE(2026,11,25),2)|EOMONTH(DATE(2026,2,1),0)|WORKDAY(DATE(2026,11,25),10)|NETWORKDAYS(DATE(2026,11,25),DATE(2026,12,9))|TIME(14,30,0)|HOUR(TIME(14,30,0))|MINUTE(TIME(14,30,0))|SECOND(TIME(14,30,12))`,
    finance: `PMT(0.02/12,240,-100000)|IPMT(0.02/12,1,240,-100000)|PPMT(0.02/12,1,240,-100000)|CUMIPMT(0.02/12,240,100000,1,12,0)|CUMPRINC(0.02/12,240,100000,1,12,0)|PV(0.02/12,240,-500)|FV(0.03,10,-1000)|FVSCHEDULE(1000,[0.1,0.05])|NPER(0.01,-500,10000)|RATE(240,-505.88,100000)|PDURATION(0.05,1000,2000)|RRI(10,1000,2000)|ISPMT(0.1,1,3,1000)|NPV(0.1,60,60)|XNPV(0.1,[-100,60,60],[46000,46100,46400])|IRR([-100,60,60])|MIRR([-100,60,60],0.1,0.12)|XIRR([-100,60,60],[46000,46100,46400])|EFFECT(0.12,12)|NOMINAL(0.1268,12)|SLN(10000,1000,5)|SYD(10000,1000,5,1)|DB(10000,1000,5,1)|DDB(10000,1000,5,1)|DOLLARDE(1.02,16)|DOLLARFR(1.125,16)|TBILLEQ(46000,46100,0.05)|TBILLPRICE(46000,46100,0.05)|TBILLYIELD(46000,46100,98)`,
    engineering: `BIN2DEC("1010")|BIN2HEX("1010")|BIN2OCT("1010")|DEC2BIN(10)|DEC2HEX(255)|DEC2OCT(8)|HEX2BIN("F")|HEX2DEC("FF")|HEX2OCT("F")|OCT2BIN("7")|OCT2DEC("17")|OCT2HEX("17")|BITAND(6,3)|BITOR(6,3)|BITXOR(6,3)|BITLSHIFT(1,4)|BITRSHIFT(16,4)|CONVERT(1,"mi","km")|DELTA(3,3)|GESTEP(5,4)|ERF(1)|ERFC(1)|BESSELJ(1,0)|BESSELY(1,0)|BESSELI(1,0)|BESSELK(1,0)`,
    complex: `COMPLEX(3,4)|IMREAL("3+4i")|IMAGINARY("3+4i")|IMABS("3+4i")|IMARGUMENT("1+i")|IMCONJUGATE("3+4i")|IMSUM("3+4i","1+i")|IMSUB("3+4i","1+i")|IMPRODUCT("3+4i","1+i")|IMDIV("3+4i","1+i")|IMPOWER("3+4i",2)|IMSQRT("3+4i")|IMEXP("i")|IMLN("3+4i")|IMLOG10("3+4i")|IMLOG2("3+4i")|IMSIN("i")|IMCOS("i")|IMTAN("i")`,
    info: `ISNUMBER(A1)|ISTEXT(C1)|ISNONTEXT(A1)|ISLOGICAL(TRUE())|ISERROR(NA())|ISERR(NA())|ISNA(NA())|NA()|TYPE(5)`,
};

const CATEGORIES = Object.entries(CATALOG).map(([id, list]) => [
    id,
    list.split("|"),
]);
export const COUNT = CATEGORIES.reduce((n, [, list]) => n + list.length, 0);

// Results that change from one run, or one day, to the next.
const VOLATILE = new Set(["RAND", "RANDBETWEEN", "TODAY", "NOW"]);

const escape = (text) =>
    text.replace(
        /[&<>]/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c],
    );

function show(value, comma) {
    if (Array.isArray(value))
        return `[${value.map((v) => show(v, comma)).join(comma ? "; " : ", ")}]`;
    if (typeof value === "number") {
        const text = String(Math.round(value * 1e9) / 1e9);
        return comma ? text.replace(".", ",") : text;
    }
    return String(value).replace(/^(true|false)$/, (v) => v.toUpperCase());
}

// The texts of the examples' formulas and results, in the language.
const translate = (text, words) =>
    words ? text.replace(/"([^"]*)"/g, (all, w) => `"${words[w] ?? w}"`) : text;

export function sampleTable() {
    const depth = Math.max(...SAMPLE.map(([, values]) => values.length));
    const rows = Array.from(
        { length: depth },
        (_, r) =>
            `<tr><th>${r + 1}</th>${SAMPLE.map(([, values]) =>
                typeof values[r] === "number"
                    ? `<td class="num">${values[r]}</td>`
                    : `<td>${values[r] ?? ""}</td>`,
            ).join("")}</tr>`,
    ).join("");
    return `<div class="table"><table class="cells"><tr><th></th>${SAMPLE.map(
        ([letter]) => `<th>${letter}</th>`,
    ).join("")}</tr>${rows}</table></div>`;
}

// The sections of a language (titles: the two headers, then the categories'
// names), and what is missing.
export function functionTables(language, titles) {
    const { lang, names, comma, library } = language;
    const [headers, categories] = [titles.slice(0, 2), titles.slice(2)];
    const file = new URL(`functions/${lang}.txt`, import.meta.url);
    const texts = new Map(
        (existsSync(file) ? readFileSync(file, "utf8") : "")
            .split("\n")
            .filter(Boolean)
            .map((line) => line.split("|"))
            .map(([name, args, text]) => [name, { args, text }]),
    );
    // "words" line: the examples' texts, word=translation; …
    const words = Object.fromEntries(
        (texts.get("words")?.text ?? "")
            .split("; ")
            .filter(Boolean)
            .map((pair) => pair.split("=")),
    );
    const problems = [];
    const separator = comma ? "; " : ", ";

    const row = (example) => {
        const name = example.match(/^[A-Z0-9]+/)[0];
        const own = texts.get(name);
        const entry = library.get(name);
        if (!entry && (!own || own.args === "-"))
            problems.push(`${lang}: no text for ${name}`);
        const value = evaluate(example);
        if (value == null || /^(#(?!N\/A)|DIV)/.test(String(value)))
            problems.push(`${example} gives ${value}`);
        const parameters =
            own && own.args !== "-"
                ? own.args.replace(/; /g, separator)
                : (entry?.p ?? [])
                      .map((p) => {
                          const text =
                              p.repeat === "y"
                                  ? `${p.name}${separator}…`
                                  : p.name;
                          return p.require === "o" ? `[${text}]` : text;
                      })
                      .join(separator);
        const translated = translate(example, words);
        const final = translated === example ? value : evaluate(translated);
        if (/^#(?!N\/A)/.test(String(final)))
            problems.push(`${lang}: ${translated} gives ${final}`);
        const shownValue = show(final, comma);
        const result = VOLATILE.has(name)
            ? ""
            : ` → <code>${escape(shownValue)}</code>`;
        const shown = names[name] ?? name;
        return `<tr id="${name}"><td><code><strong>${shown}</strong>(${escape(
            parameters,
        )})</code>${
            shown === name ? "" : `<small>${name}</small>`
        }</td><td>${escape(
            own?.text || entry?.a || entry?.d || "",
        )}<span class="ex"><code>=${escape(
            localize(translated, language),
        )}</code>${result}</span></td></tr>`;
    };

    const html = CATEGORIES.map(
        ([id, list], k) =>
            `<h2 id="${id}">${categories[k]}</h2>
<div class="table"><table class="functions"><thead><tr>${headers
                .map((h) => `<th>${h}</th>`)
                .join("")}</tr></thead><tbody>
${list.map(row).join("\n")}
</tbody></table></div>`,
    ).join("\n");
    return { html, problems };
}
