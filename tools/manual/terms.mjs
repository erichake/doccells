// The interface's texts in a language of the manual, by the names the pages
// give them: %file% in tools/manual/pages/<lang>.md is the File menu. They are
// read where DocCells reads them, so the manual always names what is shown.

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { getCustomNumberFormatTexts } from "../../src/features/customNumberFormat/customNumberFormatUtils.js";
import { getDataValidationTexts } from "../../src/features/dataValidation/dataValidationTexts.js";
import { getDefinedNamesTexts } from "../../src/features/definedNames/definedNamesTexts.js";
import { getPrintingTexts } from "../../src/features/printing/printingTexts.js";
import { getStandaloneMenuTexts } from "../../src/features/standaloneMenu/standaloneMenuTexts.js";
import { customLocales } from "../../src/locales/custom.js";
import { SPLASH_RECOVERY_TEXTS } from "../../src/shared/splashTaglines.js";
import { locale as fortuneLocale } from "@fortune-sheet/core";

const require = createRequire(import.meta.url);

// The manual's language codes, DocCells' where they differ.
export const LOCALES = {
    fr: "fr-FR",
    es: "es-ES",
    zh: "zh-CN",
    "zh-TW": "zh-TW",
};
export const localeOf = (lang) => LOCALES[lang] ?? lang;

const read = (path) =>
    readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");

// The value of a key in an object literal of App.jsx, by language.
function fromApp(name, lang) {
    const source = read("src/App.jsx");
    const block = source.slice(source.indexOf(`const ${name} =`)).split("}[")[0];
    return block.match(
        new RegExp(`(?:"${lang}"|\\b${lang}): "([^"]*)"`),
    )[1];
}

function today(lang) {
    const source = read("src/features/dateCellPicker/DateCellPickerPopover.jsx");
    const at = source.search(new RegExp(`^  (?:"${lang}"|${lang}): \\{`, "m"));
    return source.slice(at).match(/today: "([^"]*)"/)[1];
}

const NAMES = JSON.parse(read("scripts/formula-function-names.json")).locales;
const COMMA = new Set(["fr", "es", "de", "it", "el", "nl", "pt", "ru"]);
const GROUP = { fr: " ", ru: " " };

export function language(lang) {
    const locale = localeOf(lang);
    const currency = fromApp("currencySymbol", locale);
    const custom = customLocales[locale];
    const menu = getStandaloneMenuTexts(custom, locale, currency);
    const fortune = fortuneLocale({ lang: locale });
    const validation = getDataValidationTexts(locale);
    const names = getDefinedNamesTexts(locale);
    const print = getPrintingTexts(locale);
    const cf = custom.conditionalFormatting;
    const charts = custom.charts;
    const format = getCustomNumberFormatTexts(custom.customNumberFormat, locale);
    const recovery = SPLASH_RECOVERY_TEXTS[locale] ?? SPLASH_RECOVERY_TEXTS.en;
    const formats = menu.numberFormats.filter((item) => item !== "divider");
    const format0 = (test) => formats.find(test) ?? {};
    const byValue = (value) => format0((item) => item.value === value);
    const money = formats.filter(
        ({ value }) => value.includes(currency) && /0\.00/.test(value),
    );
    const accounting = money.find(({ value }) => value.includes("("));
    const currencyFormat = money.find(({ value }) => !value.includes("("));
    const dates = formats.filter(({ value }) => /[yh]/i.test(value));
    // As the cells show 1200.09: the menu's own example takes the group's point
    // for a decimal comma.
    const number = (pattern) => {
        const [whole, decimals] = pattern.includes("#,##0.00")
            ? ["1,200", "09"]
            : ["1200", "09"];
        return COMMA.has(lang)
            ? `${whole.replace(",", GROUP[lang] ?? ".")},${decimals}`
            : `${whole}.${decimals}`;
    };
    const shown = ({ value }) =>
        value.replace(/(#,##)?0\.00/, (pattern) => number(pattern));
    const right = fortune.rightclick;
    const row = (place) => `${right.insert} 1 ${right.row} ${place}`;
    const column = (place) => `${right.insert} 1 ${right.column} ${place}`;

    const terms = {
        ...menu.roots,
        formatMenu: menu.roots.format,
        ...menu.items,
        print: print.menuItem,
        checkbox: validation.checkbox,
        dropdown: validation.dropdown,
        sheet: fromApp("sheetPrefix", locale),
        currencySymbol: currency,
        manual: menu.items.manual,
        // Number formats
        fGeneral: byValue("General").text,
        fText: byValue("@").text,
        fNumber: byValue("##0.00").text,
        fPercent: byValue("#0.00%").text,
        fScientific: byValue("0.00E+00").text,
        fAccounting: accounting?.text,
        fCurrency: currencyFormat?.text,
        xNumber: byValue("##0.00").example,
        xPercent: byValue("#0.00%").example,
        xScientific: byValue("0.00E+00").example,
        xAccounting: shown(accounting),
        xCurrency: shown(currencyFormat),
        fDate: dates.find(({ value }) => !/h/i.test(value))?.text,
        xDate: dates
            .find(({ value }) => !/h/i.test(value))
            ?.value.replace("yyyy", "2017")
            .replace("MM", "11")
            .replace("dd", "29"),
        fTime: dates.find(({ value }) => /^hh/i.test(value))?.text,
        fDateTime: dates.find(({ value }) => /y.*h/i.test(value))?.text,
        units: format.unitFormats,
        guide: format.help,
        apply: format.apply,
        // Cells' menu
        copy: right.copy,
        paste: right.paste,
        insertCells: right.insert,
        rowAbove: row(right.top),
        rowBelow: row(right.bottom),
        columnLeft: column(right.left),
        columnRight: column(right.right),
        deleteRow: `${right.deleteSelected.trim()} ${right.row}`,
        deleteColumn: `${right.deleteSelected.trim()} ${right.column}`,
        hideRow: `${right.hideSelected.trim()} ${right.row}`,
        hideColumn: `${right.hideSelected.trim()} ${right.column}`,
        showHidden: right.showHide,
        width: right.width,
        height: right.height,
        clearContent: right.clearContent,
        sortRange: right.sortSelection,
        filterRange: right.filterSelection,
        link: right.link,
        lock: custom.lockCells,
        unlock: custom.unlockCells,
        // Names
        defineName: names.define,
        nameManager: names.manager,
        nameField: names.name,
        scope: names.scope,
        workbook: names.workbook,
        refersTo: names.reference,
        nameOk: names.save,
        nameNew: names.newName,
        nameRemove: names.remove,
        // Drop-down lists, calendar
        listValues: validation.valuesMode,
        listRange: validation.rangeMode,
        addOption: validation.addOption,
        today: today(locale),
        // Sheets
        sheetDelete: fortune.sheetconfig.delete,
        sheetCopy: fortune.sheetconfig.copy,
        sheetRename: fortune.sheetconfig.rename,
        sheetColor: fortune.sheetconfig.changeColor,
        sheetHide: fortune.sheetconfig.hide,
        sheetLeft: fortune.sheetconfig.moveLeft,
        sheetRight: fortune.sheetconfig.moveRight,
        // Filter
        sortByAsc: fortune.filter.sortByAsc,
        sortByDesc: fortune.filter.sortByDesc,
        filterByColor: fortune.filter.filterByColor,
        filterByValues: fortune.filter.filterByValues,
        filterAll: fortune.filter.filterValueByAllBtn,
        filterNone: fortune.filter.filterValueByClearBtn,
        filterInverse: fortune.filter.filterValueByInverseBtn,
        filterConfirm: fortune.filter.filterConform,
        // Find
        find: fortune.findAndReplace.find,
        replace: fortune.findAndReplace.replace,
        regex: fortune.findAndReplace.regexTextbox,
        wholeWord: fortune.findAndReplace.wholeTextbox,
        matchCase: fortune.findAndReplace.distinguishTextbox,
        findAll: fortune.findAndReplace.allFindBtn,
        findNext: fortune.findAndReplace.findBtn,
        replaceOne: fortune.findAndReplace.replaceBtn,
        replaceAll: fortune.findAndReplace.allReplaceBtn,
        // Formulas
        sum: fortune.formula.sum,
        average: fortune.formula.average,
        count: fortune.formula.count,
        max: fortune.formula.max,
        min: fortune.formula.min,
        allFormulas: fortune.formula.find,
        // Colors
        resetColor: fortune.sheetconfig.resetColor,
        customColor: fortune.toolbar.customColor,
        clearAlternating: menu.alternatingColors.clear,
        // Charts
        chartAdd: charts.add,
        chartClose: charts.close,
        chartEdit: charts.edit,
        chartDelete: charts.delete,
        chartTitle: charts.chartTitle,
        chartColor: charts.color,
        chartRange: charts.range,
        chartLabels: charts.labels,
        chartOptions: charts.displayOptions,
        tBar: charts.types.bar,
        tLine: charts.types.line,
        tScatter: charts.types.scatter,
        tPie: charts.types.pie,
        lNone: charts.labelTypes.none,
        lColumn: charts.labelTypes.sameRowColumn,
        lRow: charts.labelTypes.sameColumnRow,
        lRange: charts.labelTypes.range,
        // Conditional formatting
        cfAdd: cf.add,
        cfEdit: cf.edit,
        cfDelete: cf.delete,
        cfText: cf.textColor,
        cfBackground: cf.backgroundColor,
        cfNone: cf.none,
        cfCompareTo: cf.compareTo,
        cfValue: cf.compareTypes.value,
        cfCell: cf.compareTypes.cell,
        cfColumn: cf.compareTypes.sameRowColumn,
        // Print
        printContent: print.content,
        printPaper: print.paper,
        printOrientation: print.orientation,
        printScale: print.scale,
        printActual: print.actualSize,
        printWidth: print.fitWidth,
        printPage: print.fitPage,
        printMargins: print.margins,
        printFormatting: print.formatting,
        printButton: print.print,
        // Links
        linkText: fortune.insertLink.linkText,
        linkType: fortune.insertLink.linkType,
        linkOpen: fortune.insertLink.openLink,
        linkWeb: fortune.linkTypeList[0].text,
        linkCells: fortune.linkTypeList[1].text,
        linkSheet: fortune.linkTypeList[2].text,
        restore: recovery.restore,
        ignore: recovery.ignore,
    };
    const english = new Map(
        Object.entries(NAMES[locale] ?? {}).map(([name, shown]) => [
            shown,
            name,
        ]),
    );
    return {
        lang,
        locale,
        comma: COMMA.has(lang),
        group: COMMA.has(lang) ? (GROUP[lang] ?? ".") : ",",
        names: NAMES[locale] ?? {},
        // Some locales list functions by their translated names.
        library: new Map(
            require(
                `../../scripts/${lang === "zh-TW" ? "zh_tw" : lang}-locale.cjs`,
            ).functionlist.map((f) => [
                /[^A-Z0-9_]/.test(f.n) ? (english.get(f.n) ?? f.n) : f.n,
                f,
            ]),
        ),
        terms: Object.fromEntries(
            Object.entries(terms).map(([key, text]) => [
                key,
                typeof text === "string" ? text.trim() : text,
            ]),
        ),
    };
}

// A canonical formula (English names, commas, decimal points) as it is typed
// in the language.
export function localize(formula, { names, comma }) {
    return formula
        .split(/("[^"]*")/)
        .map((part, k) => {
            if (k % 2) return part;
            let text = part.replace(
                /[A-Z][A-Z0-9]*(?=\()/g,
                (name) => names[name] ?? name,
            );
            text = comma
                ? text.replace(/, ?/g, "; ").replace(/(\d)\.(\d)/g, "$1,$2")
                : text.replace(/, ?/g, ", ");
            return text;
        })
        .join("");
}

// A number format code as it is typed in the language.
export const localizeCode = (code, { comma, group }) =>
    comma
        ? code.replace(/"[^"]*"|[.,]/g, (c) =>
              c === "." ? "," : c === "," ? group : c,
          )
        : code;
