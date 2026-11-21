/**
 * Postinstall script: exposes what DocCells' live update path needs from the
 * @fortune-sheet/react Workbook (see src/features/liveUpdate/).
 *
 * Patch 1: immer auto-freeze is disabled. FortuneSheet keeps the whole
 *   workbook in an immer-produced React state, which immer deep-freezes. The
 *   live update path recalculates in place in that state (no produce, no
 *   patches, no history, no React render), which requires unfrozen objects.
 *   Freezing is only a development safeguard in immer; turning it off also
 *   removes its cost from every FortuneSheet state change.
 *
 * Patch 2: the Sheet canvas drawing effect becomes a function, kept in
 *   refs.globalCache.doccellsDrawSheet, so that the canvas can be redrawn
 *   once without a React render. The effect itself still calls it.
 *
 * Patch 3: the Workbook API gains doccellsGetLiveContext() (the context of
 *   the last render, i.e. the object React holds as state),
 *   doccellsRedraw() (redraws the current sheet from that context),
 *   doccellsDrawCount() (canvas draws so far, whoever asked for them),
 *   doccellsRefreshFormulaBar() (shows the selected cell's current content in
 *   the formula bar, which FortuneSheet only refreshes on selection changes)
 *   and doccellsFreeze() (the frozen panes of the current sheet, which
 *   FortuneSheet keeps out of the context, for the embedded cell picker).
 *
 * Patch 4: __doccellsSetDrawGate(gate) is exported. Every canvas draw, React
 *   effect included, first asks gate(); when it returns false the draw is
 *   skipped (DocCells redraws once when its iframe is shown again).
 */

const fs = require("fs");
const path = require("path");

const REACT_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "react", "dist");

const DRAW_EFFECT_START = (useEffect) => `  ${useEffect}(function () {
    var _refs$globalCache$fre, _freeze$horizontal, _freeze$vertical;
    if (context.groupValuesRefreshData.length > 0) {`;
const DRAW_FUNCTION_START = `  /* __doccells_live_redraw__: the drawing is a function so that DocCells can
     redraw the canvas after a live update without a React render. */
  var __doccellsDrawSheet = function __doccellsDrawSheet(context) {
    var _refs$globalCache$fre, _freeze$horizontal, _freeze$vertical;
    if (context.groupValuesRefreshData.length > 0) {`;

const DRAW_EFFECT_END = `  }, [context, refs.canvas, refs.globalCache.freezen, setContext, sheet.id]);`;
const DRAW_FUNCTION_END = (useEffect) => `  };
  refs.globalCache.doccellsDrawSheet = __doccellsDrawSheet;
  ${useEffect}(function () {
    __doccellsDrawSheet(context);
  }, [context, refs.canvas, refs.globalCache.freezen, setContext, sheet.id]);`;

const COUNT_DRAW = (canvasClass) => `    var tableCanvas = new ${canvasClass}(refs.canvas.current, context);`;
const COUNT_DRAW_WITH_COUNTER = (canvasClass) => `    refs.globalCache.doccellsDrawCount = (refs.globalCache.doccellsDrawCount || 0) + 1;
${COUNT_DRAW(canvasClass)}`;
const GATED_DRAW = (canvasClass) => `    if (__doccellsDrawGate && !__doccellsDrawGate()) return;
${COUNT_DRAW_WITH_COUNTER(canvasClass)}`;

const DRAW_GATE_ANCHOR = "var triggerGroupValuesRefresh = function triggerGroupValuesRefresh(ctx) {";
const DRAW_GATE = `/* __doccells_draw_gate__ */
var __doccellsDrawGate = null;
function __doccellsSetDrawGate(gate) {
  __doccellsDrawGate = gate || null;
}
${DRAW_GATE_ANCHOR}`;

const CONTEXT_STATE = `    context = _useState2[0],
    setContext = _useState2[1];
  var _locale = `;
const CONTEXT_STATE_WITH_REF = (useRef) => `    context = _useState2[0],
    setContext = _useState2[1];
  /* __doccells_live_context__ */
  var __doccellsContextRef = ${useRef}(context);
  __doccellsContextRef.current = context;
  var _locale = `;

const API_RETURN = `    return generateAPIs(context, setContextWithProduce, handleUndo, handleRedo, mergedSettings, cellInput.current, scrollbarX.current, scrollbarY.current);`;
// Méthodes ajoutées à l'API du Workbook. Les versions précédentes du patch
// (sans certaines méthodes) sont mises à niveau sur place.
const API_PARTS = {
  liveContext: () => `    __doccellsApi.doccellsGetLiveContext = function () {
      return __doccellsContextRef.current;
    };
`,
  redraw: () => `    __doccellsApi.doccellsRedraw = function () {
      var draw = globalCache.current.doccellsDrawSheet;
      var liveContext = __doccellsContextRef.current;
      if (draw && liveContext) draw(liveContext);
    };
`,
  drawCount: () => `    __doccellsApi.doccellsDrawCount = function () {
      return globalCache.current.doccellsDrawCount || 0;
    };
`,
  // Comme FxEditor, qui ne relit la cellule qu'à un changement de sélection :
  // une valeur écrite sans rendu React (écritures rapides) y resterait sinon
  // fausse. Rien n'est touché pendant une saisie dans la barre ou la cellule.
  formulaBar: (core) => `    __doccellsApi.doccellsRefreshFormulaBar = function () {
      var liveContext = __doccellsContextRef.current;
      var input = fxInput.current;
      if (!liveContext || !input || document.activeElement === input) return;
      if (liveContext.luckysheetCellUpdate && liveContext.luckysheetCellUpdate.length > 0) return;
      var selection = liveContext.luckysheet_select_save && liveContext.luckysheet_select_save[0];
      if (!selection || selection.row_focus == null || selection.column_focus == null) return;
      var r = selection.row_focus;
      var c = selection.column_focus;
      var d = ${core}getFlowdata(liveContext);
      var cell = d && d[r] ? d[r][c] : null;
      var value = "";
      if (cell) {
        if (${core}isInlineStringCell(cell)) value = ${core}getInlineStringNoStyle(r, c, d);
        else if (cell.f) value = ${core}getCellValue(r, c, d, "f");
        else value = ${core}valueShowEs(r, c, d);
      }
      input.innerHTML = ${core}escapeHTMLTag(${core}escapeScriptTag(value));
    };
`,
  freeze: () => `    __doccellsApi.doccellsFreeze = function () {
      var liveContext = __doccellsContextRef.current;
      var freezen = globalCache.current.freezen;
      return liveContext && freezen ? freezen[liveContext.currentSheetId] : undefined;
    };
`,
};
const API_VERSIONS = [
  ["liveContext", "redraw"],
  ["liveContext", "redraw", "drawCount"],
  ["liveContext", "redraw", "drawCount", "formulaBar"],
  ["liveContext", "redraw", "drawCount", "formulaBar", "freeze"],
];
const buildApi = (parts, core) => `    var __doccellsApi = generateAPIs(context, setContextWithProduce, handleUndo, handleRedo, mergedSettings, cellInput.current, scrollbarX.current, scrollbarY.current);
${parts.map((part) => API_PARTS[part](core)).join("")}    return __doccellsApi;`;

const VARIANTS = {
  "index.esm.js": {
    useEffect: "useEffect",
    useRef: "useRef",
    canvasClass: "Canvas",
    core: "",
    exportOld: "export { Workbook };",
    exportNew: "export { Workbook, __doccellsSetDrawGate };",
    freeze: [
      {
        old: `import produce, { applyPatches, enablePatches, produceWithPatches } from 'immer';`,
        new: `import produce, { applyPatches, enablePatches, produceWithPatches, setAutoFreeze } from 'immer';`,
      },
      { old: `\nenablePatches();\n`, new: `\nenablePatches();\n/* __doccells_no_autofreeze__ */\nsetAutoFreeze(false);\n` },
    ],
  },
  "index.js": {
    useEffect: "React.useEffect",
    useRef: "React.useRef",
    canvasClass: "core.Canvas",
    core: "core.",
    exportOld: "exports.Workbook = Workbook;",
    exportNew: "exports.Workbook = Workbook;\nexports.__doccellsSetDrawGate = __doccellsSetDrawGate;",
    freeze: [
      { old: `\nproduce.enablePatches();\n`, new: `\nproduce.enablePatches();\n/* __doccells_no_autofreeze__ */\nproduce.setAutoFreeze(false);\n` },
    ],
  },
};

let failures = 0;
for (const [bundle, v] of Object.entries(VARIANTS)) {
  const file = path.join(REACT_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-live-update: ${bundle} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  const currentApi = buildApi(API_VERSIONS[API_VERSIONS.length - 1], v.core);
  for (const parts of API_VERSIONS.slice(0, -1)) {
    const previousApi = buildApi(parts, v.core);
    if (!src.includes(currentApi) && src.includes(previousApi)) src = src.replace(previousApi, currentApi);
  }
  const replacements = [
    ...v.freeze,
    { old: DRAW_EFFECT_START(v.useEffect), new: DRAW_FUNCTION_START },
    { old: DRAW_EFFECT_END, new: DRAW_FUNCTION_END(v.useEffect) },
    { old: CONTEXT_STATE, new: CONTEXT_STATE_WITH_REF(v.useRef) },
    { old: API_RETURN, new: currentApi },
    { old: COUNT_DRAW(v.canvasClass), new: COUNT_DRAW_WITH_COUNTER(v.canvasClass) },
    { old: COUNT_DRAW_WITH_COUNTER(v.canvasClass), new: GATED_DRAW(v.canvasClass) },
    { old: DRAW_GATE_ANCHOR, new: DRAW_GATE },
    { old: v.exportOld, new: v.exportNew },
  ];
  let ok = true;
  for (const { old, new: next } of replacements) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-live-update: ${count} matches instead of 1 in ${bundle} for:\n${old.slice(0, 120)}`);
      ok = false;
      continue;
    }
    src = src.replace(old, next);
  }
  if (!ok) {
    failures += 1;
    continue;
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-live-update: patched ${bundle}`);
}
if (failures > 0) process.exit(1);
