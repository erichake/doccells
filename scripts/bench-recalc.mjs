import { performance } from "node:perf_hooks";
import {
  defaultContext,
  delFunctionGroup,
  execFunctionGroup,
  groupValuesRefresh,
  setCellValue,
} from "@fortune-sheet/core";

const col = (c) => String.fromCharCode(65 + c);
const ref = (r, c) => `${col(c)}${r + 1}`;

function makeContext(rows, cols, cells) {
  const data = Array.from({ length: rows }, () => new Array(cols).fill(null));
  const calcChain = [];
  for (const [r, c, v] of cells) {
    if (typeof v === "string" && v.startsWith("=")) {
      data[r][c] = { f: v, v: 0, m: "0" };
      calcChain.push({ r, c, id: "0" });
    } else {
      data[r][c] = { v, m: String(v), ct: { fa: "General", t: "n" } };
    }
  }
  const ctx = defaultContext({});
  ctx.luckysheetfile = [{ name: "Feuille1", id: "0", order: 0, status: 1, data, calcChain, config: {} }];
  ctx.currentSheetId = "0";
  return ctx;
}

function drive(ctx, value) {
  const data = ctx.luckysheetfile[0].data;
  delFunctionGroup(ctx, 0, 0);
  execFunctionGroup(ctx, 0, 0, value);
  setCellValue(ctx, 0, 0, data, value);
  groupValuesRefresh(ctx);
  ctx.formulaCache.execFunctionGlobalData = null;
}

const scenarios = {
  // Table of values: each row reads the driven cell A1, plus a total.
  table(n) {
    const cells = [[0, 0, 1]];
    for (let i = 1; i <= n; i++) {
      cells.push([i, 0, i]);
      cells.push([i, 1, `=SIN($A$1*A${i + 1})+A${i + 1}^2/2`]);
    }
    cells.push([0, 2, `=SUM(B2:B${n + 1})`]);
    return { rows: n + 1, cols: 3, cells, dependents: n + 1, check: [1, 1, (x) => Math.sin(x) + 0.5] };
  },
  // Chain: each row reads the previous one (depth n).
  chain(n) {
    const cells = [[0, 0, 1], [1, 1, "=$A$1+1"]];
    for (let i = 2; i <= n; i++) cells.push([i, 1, `=B${i}*0.5+$A$1`]);
    return { rows: n + 1, cols: 2, cells, dependents: n, check: [1, 1, (x) => x + 1] };
  },
  // Large sheet where only 20 formulas read A1.
  sparse(n) {
    const cells = [[0, 0, 1]];
    for (let i = 1; i <= 20; i++) cells.push([i, 1, `=$A$1*${i}`]);
    for (let i = 1; i <= n; i++) {
      cells.push([i, 2, i]);
      cells.push([i, 3, `=${ref(i, 2)}*2+1`]);
    }
    return { rows: n + 1, cols: 4, cells, dependents: 20, check: [1, 1, (x) => x] };
  },
};

const sizes = process.argv.slice(2).map(Number).filter(Boolean);
const ns = sizes.length ? sizes : [100, 1000, 10000];
const median = (a) => a.slice().sort((x, y) => x - y)[a.length >> 1];

console.log("scenario  N       dependents  first(ms)  median(ms)  max(ms)  per formula(µs)");
for (const [name, build] of Object.entries(scenarios)) {
  for (const n of ns) {
    const s = build(n);
    const ctx = makeContext(s.rows, s.cols, s.cells);
    let t = performance.now();
    drive(ctx, 0.5);
    const first = performance.now() - t;
    const times = [];
    const steps = n >= 10000 ? 10 : 40;
    let x = 0.5;
    for (let k = 0; k < steps; k++) {
      x = 0.5 + k * 0.01;
      t = performance.now();
      drive(ctx, x);
      times.push(performance.now() - t);
    }
    const [r, c, expected] = s.check;
    const got = ctx.luckysheetfile[0].data[r][c].v;
    if (Math.abs(got - expected(x)) > 1e-9) throw new Error(`${name} ${n}: ${got} ≠ ${expected(x)}`);
    const med = median(times);
    console.log(
      `${name.padEnd(9)} ${String(n).padEnd(7)} ${String(s.dependents).padEnd(11)} ${first.toFixed(1).padStart(9)}  ${med.toFixed(2).padStart(10)}  ${Math.max(...times).toFixed(1).padStart(7)}  ${((med * 1000) / s.dependents).toFixed(1).padStart(15)}`,
    );
  }
}
