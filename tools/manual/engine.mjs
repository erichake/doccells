// The formula engine of DocCells in Node, on the sample sheet the manual's
// function examples read (shown at the top of the functions page).

import { defaultContext, execfunction } from "@fortune-sheet/core";
import "../../src/features/recalc/installFormulaEngine.js";

// Columns A to D, then a block in F1:G2.
export const SAMPLE = [
    ["A", [12, 15, 8, 17, 10]],
    ["B", [2, 4, 6, 8, 11]],
    ["C", ["Ana", "Paul", "Léa", "Tom", "Zoé"]],
    ["F", [1, 3]],
    ["G", [2, 4]],
];

const cell = (v) => ({
    v,
    m: String(v),
    ct: { fa: "General", t: typeof v === "number" ? "n" : "g" },
});
const data = Array.from({ length: 40 }, () => new Array(12).fill(null));
for (const [letter, values] of SAMPLE)
    values.forEach((v, r) => {
        data[r][letter.charCodeAt(0) - 65] = cell(v);
    });
const ctx = defaultContext({});
ctx.luckysheetfile = [
    {
        name: "Sheet1",
        id: "s",
        order: 0,
        status: 1,
        data,
        calcChain: [],
        config: {},
    },
];
ctx.currentSheetId = "s";

// A formula's value, in canonical form (English names, commas).
export function evaluate(formula) {
    const { log, error } = console;
    console.log = console.error = () => {};
    try {
        return execfunction(
            ctx,
            `=${formula}`,
            30,
            10,
            undefined,
            undefined,
            true,
        )[1];
    } finally {
        console.log = log;
        console.error = error;
    }
}
