// The manual's screenshots (public/tutorials/<lang>/img), each rebuilt from
// scratch by `npm run manual`: what is done in a new workbook of DocCells,
// and the part of the window kept. The menus and their items are designated
// by rank (File 0, Edit 1, View 2, Insert 3, Format 4, Data 5, Tools 6).

import { language, localize } from "./terms.mjs";

// What the tables of the screenshots say; their formulas and the names of the
// charts come from the interface.
const TABLES = {
    fr: {
        head: ["Élève", "Maths", "Français", "Anglais", "Moyenne"],
        name: "notes",
        done: "Fait",
        date: "Date",
        level: "Niveau",
        groups: ["Groupe A", "Groupe B"],
        title: "Notes de maths",
        product: "Produit",
        quarter: "T",
        products: ["Crayons", "Cahiers", "Gommes"],
    },
    en: {
        head: ["Student", "Maths", "English", "French", "Average"],
        name: "marks",
        done: "Done",
        date: "Date",
        level: "Level",
        groups: ["Group A", "Group B"],
        title: "Maths marks",
        product: "Product",
        quarter: "Q",
        products: ["Pencils", "Notebooks", "Erasers"],
    },
    es: {
        head: ["Alumno", "Mates", "Lengua", "Inglés", "Media"],
        name: "notas",
        done: "Hecho",
        date: "Fecha",
        level: "Nivel",
        groups: ["Grupo A", "Grupo B"],
        title: "Notas de mates",
        product: "Producto",
        quarter: "T",
        products: ["Lápices", "Cuadernos", "Gomas"],
    },
    de: {
        head: ["Name", "Mathe", "Deutsch", "Englisch", "Mittel"],
        name: "noten",
        done: "Fertig",
        date: "Datum",
        level: "Niveau",
        groups: ["Gruppe A", "Gruppe B"],
        title: "Punkte in Mathe",
        product: "Produkt",
        quarter: "Q",
        products: ["Stifte", "Hefte", "Radierer"],
    },
    it: {
        head: ["Alunno", "Matem.", "Italiano", "Inglese", "Media"],
        name: "voti",
        done: "Fatto",
        date: "Data",
        level: "Livello",
        groups: ["Gruppo A", "Gruppo B"],
        title: "Voti di matematica",
        product: "Prodotto",
        quarter: "T",
        products: ["Matite", "Quaderni", "Gomme"],
    },
    pt: {
        head: ["Aluno", "Matem.", "Português", "Inglês", "Média"],
        name: "notas",
        done: "Feito",
        date: "Data",
        level: "Nível",
        groups: ["Grupo A", "Grupo B"],
        title: "Notas de matemática",
        product: "Produto",
        quarter: "T",
        products: ["Lápis", "Cadernos", "Borrachas"],
    },
    nl: {
        head: ["Leerling", "Wiskunde", "Nederlands", "Engels", "Gemiddeld"],
        name: "cijfers",
        done: "Klaar",
        date: "Datum",
        level: "Niveau",
        groups: ["Groep A", "Groep B"],
        title: "Cijfers wiskunde",
        product: "Product",
        quarter: "K",
        products: ["Potloden", "Schriften", "Gummen"],
    },
    ru: {
        head: ["Ученик", "Алгебра", "Русский", "Физика", "Среднее"],
        name: "оценки",
        done: "Готово",
        date: "Дата",
        level: "Уровень",
        groups: ["Группа А", "Группа Б"],
        title: "Оценки по алгебре",
        product: "Товар",
        quarter: "К",
        products: ["Ручки", "Тетради", "Ластики"],
    },
    el: {
        head: ["Μαθητής", "Άλγεβρα", "Γλώσσα", "Φυσική", "Μέσος"],
        name: "βαθμοί",
        done: "Έγινε",
        date: "Ημ/νία",
        level: "Επίπεδο",
        groups: ["Ομάδα Α", "Ομάδα Β"],
        title: "Βαθμοί άλγεβρας",
        product: "Προϊόν",
        quarter: "Τ",
        products: ["Μολύβια", "Τετράδια", "Γόμες"],
    },
    hi: {
        head: ["विद्यार्थी", "गणित", "हिंदी", "अंग्रेज़ी", "औसत"],
        name: "marks",
        done: "पूर्ण",
        date: "दिनांक",
        level: "स्तर",
        groups: ["समूह A", "समूह B"],
        title: "गणित के अंक",
        product: "उत्पाद",
        quarter: "Q",
        products: ["पेंसिल", "कॉपी", "रबर"],
    },
    zh: {
        head: ["学生", "数学", "语文", "英语", "平均"],
        name: "成绩",
        done: "完成",
        date: "日期",
        level: "水平",
        groups: ["A 组", "B 组"],
        title: "数学成绩",
        product: "产品",
        quarter: "Q",
        products: ["铅笔", "笔记本", "橡皮"],
    },
    "zh-TW": {
        head: ["學生", "數學", "國文", "英文", "平均"],
        name: "成績",
        done: "完成",
        date: "日期",
        level: "程度",
        groups: ["A 組", "B 組"],
        title: "數學成績",
        product: "產品",
        quarter: "Q",
        products: ["鉛筆", "筆記本", "橡皮擦"],
    },
};
const NAMES = ["Ana", "Paul", "Léa", "Tom", "Zoé"];
const MARKS = [
    [14, 12, 16],
    [9, 13, 11],
    [17, 15, 18],
    [8, 10, 9],
    [12, 16, 14],
];

function texts(lang) {
    const spoken = language(lang);
    const typed = (formula) => localize(formula, spoken);
    const { tBar, tLine, tScatter, tPie } = spoken.terms;
    const t = TABLES[lang];
    return {
        ...t,
        names: NAMES,
        average: (r) => typed(`=AVERAGE(B${r}:D${r})`),
        sum: typed("=SUM(").slice(0, 4),
        sumCall: typed("=SUM("),
        titles: [tBar, tLine, tScatter, tPie],
        quarters: [
            t.product,
            ...[1, 2, 3, 4, 5].map((n) => t.quarter + n),
            tLine,
            tBar,
        ],
        sparkline: (r) => [
            typed(`=SPARKLINE(B${r}:F${r})`),
            typed(
                `=SPARKLINE(B${r}:F${r}, {"charttype"\\"column", "color"\\"#16a34a"})`,
            ),
        ],
    };
}

async function table({ write, lang }, average = false) {
    const t = texts(lang);
    await write([
        average ? t.head : t.head.slice(0, 4),
        ...MARKS.map((marks, i) => [
            t.names[i],
            ...marks,
            ...(average ? [t.average(i + 2)] : []),
        ]),
    ]);
}

// The selected range, in the chart dialog, added as a chart.
async function chart(h, { title, type, options = [], at }) {
    const { page, menu, wait } = h;
    await menu(3, 1);
    const dialog = page.locator(".dc-chart-dialog");
    await dialog.locator("input").first().fill(title);
    await dialog.locator("select").first().selectOption(type);
    for (const k of options)
        await dialog.locator(".dc-chart-switch input").nth(k).check();
    await dialog.locator("button[type=submit]").click();
    await wait(300);
    await dialog.locator(".dc-chart-icon-button").first().click();
    await wait(300);
    if (!at) return;
    const card = page.locator(".dc-chart-card").last();
    const box = await card.boundingBox();
    await page.mouse.move(box.x + 150, box.y + 46);
    await page.mouse.down();
    await page.mouse.move(at[0] + 150, at[1] + 46, { steps: 10 });
    await page.mouse.up();
    await wait(300);
}

async function alternating(h) {
    await h.menu(4, 7);
    await h.page.locator("[role=dialog] footer button").last().click();
    await h.wait(400);
}

export const SHOTS = [
    {
        file: "interface.webp",
        run: async (h) => {
            await table(h, true);
            await h.drag(0, 0, 5, 4);
            await alternating(h);
            await h.drag(0, 0, 0, 4);
            await h.page.keyboard.press("ControlOrMeta+b");
            await h.drag(0, 0, 5, 1);
            await chart(h, {
                title: texts(h.lang).title,
                type: "bar",
                at: [600, 190],
            });
            await h.click(1, 4);
        },
    },
    {
        file: "menus.webp",
        clip: { x: 0, y: 0, width: 1280, height: 620 },
        run: async (h) => {
            await table(h);
            await h.click(1, 1);
            await h.page.locator(".dc-menu-root-button").nth(4).click();
            await h.page
                .locator(".dc-menu-popover > .dc-menu-item-wrap")
                .first()
                .hover();
        },
    },
    {
        file: "menu-contextuel.webp",
        clip: { x: 0, y: 80, width: 760, height: 650 },
        run: async (h) => {
            await table(h);
            await h.click(2, 2, { button: "right" });
        },
    },
    {
        file: "completion.webp",
        clip: { x: 0, y: 0, width: 760, height: 560 },
        run: async (h) => {
            await table(h);
            await h.click(6, 1);
            await h.page.keyboard.type(texts(h.lang).sum, { delay: 60 });
            await h.wait(500);
        },
    },
    {
        file: "aide-formule.webp",
        clip: { x: 0, y: 0, width: 760, height: 560 },
        run: async (h) => {
            await table(h);
            await h.click(6, 1);
            await h.page.keyboard.type(texts(h.lang).sumCall, { delay: 60 });
            await h.wait(500);
        },
    },
    {
        file: "bibliotheque.webp",
        run: async (h) => {
            await table(h);
            await h.click(6, 1);
            const more = h.page.locator(
                '.fortune-toolbar-button:has(use[*|href="#more"]), .fortune-toolbar-item:has(use[*|href="#more"])',
            );
            if (await more.count()) await more.first().click();
            await h.combo("formula-sum");
            await h.page
                .locator(
                    ".fortune-toolbar-combo-popup:visible .fortune-toolbar-select-option",
                )
                .last()
                .click();
            await h.wait(500);
        },
    },
    {
        file: "recopie.webp",
        clip: { x: 0, y: 80, width: 760, height: 300 },
        run: async (h) => {
            await h.write([[1], [2]], 0, 1);
            await h.drag(0, 1, 1, 1);
            const handle = await h.page
                .locator(".luckysheet-cs-fillhandle")
                .boundingBox();
            await h.page.mouse.move(handle.x + 5, handle.y + 5);
            await h.page.mouse.down();
            await h.page.mouse.move(handle.x + 5, handle.y + 125, { steps: 8 });
            await h.page.mouse.up();
        },
    },
    {
        file: "noms.webp",
        run: async (h) => {
            await table(h);
            await h.drag(1, 1, 5, 1);
            await h.page.locator(".dc-name-box-trigger").click();
            await h.page.locator(".dc-name-box-manager").click();
            await h.page
                .locator(".dc-defined-name-fields input")
                .first()
                .fill(texts(h.lang).name);
        },
    },
    {
        file: "format-personnalise.webp",
        run: async (h) => {
            await table(h, true);
            await h.drag(1, 4, 5, 4);
            await h.menu(4, 0, 14);
        },
    },
    {
        file: "couleurs-alternees.webp",
        run: async (h) => {
            await table(h);
            await h.drag(0, 0, 5, 3);
            await h.menu(4, 7);
        },
    },
    {
        file: "conditionnelle.webp",
        run: async (h) => {
            await table(h);
            await h.drag(1, 1, 5, 3);
            await h.menu(4, 8);
            const dialog = h.page.locator(".dc-cf-dialog");
            await dialog
                .locator("input[type=text], input:not([type])")
                .nth(1)
                .fill("10");
            await dialog.locator(".dc-cf-primary").click();
            await h.wait(700);
        },
    },
    {
        file: "tri.webp",
        run: async (h) => {
            await table(h);
            await h.drag(0, 0, 5, 3);
            await h.click(2, 2, { button: "right" });
            await h.page
                .locator(".fortune-context-menu .luckysheet-cols-menuitem")
                .nth(7)
                .click();
            await h.wait(400);
        },
    },
    {
        file: "filtre.webp",
        viewport: { width: 1500, height: 760 },
        clip: { x: 0, y: 0, width: 1280, height: 760 },
        run: async (h) => {
            await table(h);
            await h.drag(0, 0, 5, 3);
            await h.menu(5, 0, 2);
            await h.page.locator(".luckysheet-filter-options").nth(1).click();
        },
    },
    {
        file: "rechercher.webp",
        clip: { x: 0, y: 80, width: 1280, height: 660 },
        run: async (h) => {
            await table(h);
            await h.click(1, 1);
            await h.page.keyboard.press("Control+f");
            await h.wait(400);
            const box = h.page.locator("#fortune-search-replace");
            await box.locator("input").first().fill("1");
            await box
                .locator(".fortune-message-box-button, .button-default")
                .first()
                .click();
            await h.wait(400);
        },
    },
    {
        file: "controles.webp",
        clip: { x: 0, y: 80, width: 1280, height: 560 },
        run: async (h) => {
            const t = texts(h.lang);
            await h.write([
                [t.head[0], t.done, t.level, t.date],
                ...t.names.map((name) => [name]),
            ]);
            await h.type(1, 3, "2026-11-25");
            await h.drag(1, 1, 5, 1);
            await h.menu(3, 2);
            await h.click(2, 1);
            await h.click(4, 1);
            await h.drag(1, 2, 5, 2);
            await h.menu(3, 3);
            const dialog = h.page.locator("[role=dialog]");
            for (const [k, group] of t.groups.entries())
                await dialog
                    .locator("input[type=text], input:not([type])")
                    .nth(k)
                    .fill(group);
            await dialog.locator("button").last().click();
            await h.wait(400);
            await h.click(1, 2);
            await h.page
                .locator("#luckysheet-dataVerification-dropdown-btn")
                .click();
            await h.wait(300);
            await h.page
                .locator(
                    "#luckysheet-dataVerification-dropdown-List .dropdown-List-item",
                )
                .first()
                .click();
            await h.click(8, 8);
            await h.page.mouse.dblclick(...(await h.at(1, 3)));
        },
    },
    {
        file: "graphique.webp",
        viewport: { width: 1280, height: 900 },
        run: async (h) => {
            await table(h);
            await h.drag(0, 0, 5, 1);
            await h.menu(3, 1);
            await h.page
                .locator(".dc-chart-dialog input")
                .first()
                .fill(texts(h.lang).title);
        },
    },
    {
        file: "graphiques.webp",
        viewport: { width: 1280, height: 760 },
        clip: { x: 0, y: 110, width: 1280, height: 640 },
        run: async (h) => {
            await table(h);
            const { titles } = texts(h.lang);
            for (const [k, type] of [
                "bar",
                "line",
                "scatter",
                "pie",
            ].entries()) {
                await h.drag(0, 0, 5, 1);
                await chart(h, {
                    title: titles[k],
                    type,
                    options: type === "pie" ? [0, 1] : [],
                    at: [470 + (k % 2) * 395, 140 + (k >> 1) * 275],
                });
            }
            await h.click(8, 1);
        },
    },
    {
        file: "sparklines.webp",
        clip: { x: 0, y: 80, width: 900, height: 300 },
        run: async (h) => {
            const t = texts(h.lang);
            const values = [
                [12, 18, 9, 22, 17],
                [30, 24, 27, 19, 33],
                [5, 9, 14, 12, 20],
            ];
            await h.write([
                t.quarters,
                ...values.map((row, i) => [
                    t.products[i],
                    ...row,
                    ...t.sparkline(i + 2),
                ]),
            ]);
            await h.click(8, 1);
        },
    },
    {
        file: "imprimer.webp",
        run: async (h) => {
            await table(h, true);
            await h.drag(0, 0, 5, 4);
            await alternating(h);
            await h.menu(0, 4);
            await h.wait(400);
        },
    },
];
