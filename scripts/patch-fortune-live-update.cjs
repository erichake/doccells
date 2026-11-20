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
 *   the last render, i.e. the object React holds as state) and
 *   doccellsRedraw() (redraws the current sheet from that context).
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
    return __doccellsApi;`;

const VARIANTS = {
  "index.esm.js": {
    useEffect: "useEffect",
    useRef: "useRef",
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
  const replacements = [
    ...v.freeze,
    { old: DRAW_EFFECT_START(v.useEffect), new: DRAW_FUNCTION_START },
    { old: DRAW_EFFECT_END, new: DRAW_FUNCTION_END(v.useEffect) },
    { old: CONTEXT_STATE, new: CONTEXT_STATE_WITH_REF(v.useRef) },
    { old: API_RETURN, new: API_RETURN_WITH_LIVE },
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
