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
 *   doccellsRedraw() (redraws the current sheet from that context) and
 *   doccellsDrawCount() (canvas draws so far, whoever asked for them).
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
const API_RETURN_WITH_LIVE = `    var __doccellsApi = generateAPIs(context, setContextWithProduce, handleUndo, handleRedo, mergedSettings, cellInput.current, scrollbarX.current, scrollbarY.current);
    __doccellsApi.doccellsGetLiveContext = function () {
      return __doccellsContextRef.current;
    };
    __doccellsApi.doccellsRedraw = function () {
      var draw = globalCache.current.doccellsDrawSheet;
      var liveContext = __doccellsContextRef.current;
      if (draw && liveContext) draw(liveContext);
    };
    __doccellsApi.doccellsDrawCount = function () {
      return globalCache.current.doccellsDrawCount || 0;
    };
    return __doccellsApi;`;

const VARIANTS = {
  "index.esm.js": {
    useEffect: "useEffect",
    useRef: "useRef",
    canvasClass: "Canvas",
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
  // Version sans compteur de dessins, mise à niveau sur place.
  const previousApi = API_RETURN_WITH_LIVE.replace(/    __doccellsApi\.doccellsDrawCount = [\s\S]*?\n    };\n/, "");
  if (!src.includes(API_RETURN_WITH_LIVE) && src.includes(previousApi)) {
    src = src.replace(previousApi, API_RETURN_WITH_LIVE);
  }
  const replacements = [
    ...v.freeze,
    { old: DRAW_EFFECT_START(v.useEffect), new: DRAW_FUNCTION_START },
    { old: DRAW_EFFECT_END, new: DRAW_FUNCTION_END(v.useEffect) },
    { old: CONTEXT_STATE, new: CONTEXT_STATE_WITH_REF(v.useRef) },
    { old: API_RETURN, new: API_RETURN_WITH_LIVE },
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
