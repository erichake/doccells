// Mode « désignation » du mode intégré (EMBED.md, setPicking et événement
// pick) : pendant que l'hôte écrit une formule, un appui ou un glissé sur la
// grille désigne une cellule ou une plage, comme dans Excel, sans rien
// changer au classeur : ni cellule active, ni sélection, ni focus, ni
// contenu. Un cadre montre la plage désignée.
//
// Les écouteurs sont posés une fois, en capture sur la fenêtre, avant ceux
// de l'hôte : un appui désignant n'atteint ni FortuneSheet ni l'hôte.
import {
  colLocation,
  fixColumnStyleOverflowInFreeze,
  fixPositionOnFrozenCells,
  fixRowStyleOverflowInFreeze,
  getFlowdata,
  mergeBorder,
  rowLocation,
} from "@fortune-sheet/core";
import { formatReference } from "./references.js";

const BLOCKED = ["mousedown", "mouseup", "click", "dblclick", "contextmenu", "touchstart"];

export const startCellPicker = ({ getContext, getFreeze, onPick }) => {
  let picking = false;
  // Le glissé en cours : cellule de départ, dernière référence émise.
  let drag = null;
  let frame = null;

  const cellArea = (target) => target instanceof Element && target.closest(".fortune-cell-area");

  // Lignes et colonnes de la cellule sous le pointeur (fusion comprise),
  // comme handleCellAreaMouseDown de FortuneSheet ; hors de la grille, la
  // plus proche.
  const cellAt = (ctx, area, event) => {
    const rect = area.getBoundingClientRect();
    const mouseX = Math.min(Math.max(event.clientX - rect.left, 0), rect.width - 1);
    const mouseY = Math.min(Math.max(event.clientY - rect.top, 0), rect.height - 1);
    const { x, y } = fixPositionOnFrozenCells(
      getFreeze(),
      mouseX + ctx.scrollLeft,
      mouseY + ctx.scrollTop,
      mouseX,
      mouseY,
    );
    const r = rowLocation(y, ctx.visibledatarow)[2];
    const c = colLocation(x, ctx.visibledatacolumn)[2];
    const merge = mergeBorder(ctx, getFlowdata(ctx), r, c);
    return merge
      ? { r0: merge.row[2], r1: merge.row[3], c0: merge.column[2], c1: merge.column[3] }
      : { r0: r, r1: r, c0: c, c1: c };
  };

  const showFrame = (ctx, area, { r0, r1, c0, c1 }) => {
    if (!frame || frame.parentNode !== area) {
      frame?.remove();
      frame = document.createElement("div");
      frame.className = "dc-pick-frame";
      frame.style.cssText =
        "position:absolute;pointer-events:none;z-index:18;box-sizing:border-box;border:2px dashed #12a5ff";
      area.append(frame);
    }
    const left = c0 === 0 ? 0 : ctx.visibledatacolumn[c0 - 1];
    const top = r0 === 0 ? 0 : ctx.visibledatarow[r0 - 1];
    Object.assign(
      frame.style,
      {
        display: "block",
        left: `${left - 1}px`,
        top: `${top - 1}px`,
        width: `${ctx.visibledatacolumn[c1] - left + 1}px`,
        height: `${ctx.visibledatarow[r1] - top + 1}px`,
      },
      fixRowStyleOverflowInFreeze(ctx, r0, r1, getFreeze()),
      fixColumnStyleOverflowInFreeze(ctx, c0, c1, getFreeze()),
    );
  };

  const hideFrame = () => {
    frame?.remove();
    frame = null;
  };

  const pick = (event, done) => {
    const ctx = getContext();
    const area = document.querySelector(".fortune-cell-area");
    if (!ctx || !area) return;
    const end = cellAt(ctx, area, event);
    const range = {
      r0: Math.min(drag.start.r0, end.r0),
      r1: Math.max(drag.start.r1, end.r1),
      c0: Math.min(drag.start.c0, end.c0),
      c1: Math.max(drag.start.c1, end.c1),
    };
    const sheet = ctx.luckysheetfile.find((item) => String(item.id) === String(ctx.currentSheetId));
    const ref = formatReference({ sheetName: sheet.name, ...range });
    showFrame(ctx, area, range);
    if (ref === drag.ref && !done) return;
    drag.ref = ref;
    onPick(ref, done);
  };

  const stop = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
  };

  const onPointerDown = (event) => {
    if (!picking || !event.isPrimary || event.button !== 0) return;
    const area = cellArea(event.target);
    const ctx = getContext();
    if (!area || !ctx) return;
    // Sans preventDefault : le mousedown qui suit, annulé, garde le focus
    // là où il est (annuler pointerdown le supprimerait sans le garder).
    event.stopImmediatePropagation();
    area.setPointerCapture?.(event.pointerId);
    drag = { pointerId: event.pointerId, start: cellAt(ctx, area, event), ref: null };
    pick(event, false);
  };

  const onPointerMove = (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    stop(event);
    pick(event, false);
  };

  const onPointerUp = (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    stop(event);
    if (event.type === "pointerup") pick(event, true);
    else if (drag.ref) onPick(drag.ref, true);
    drag = null;
  };

  // Les événements de souris et de toucher qui suivent un appui désignant.
  const onBlocked = (event) => {
    if (picking && cellArea(event.target)) stop(event);
  };

  const listeners = [
    ["pointerdown", onPointerDown],
    ["pointermove", onPointerMove],
    ["pointerup", onPointerUp],
    ["pointercancel", onPointerUp],
    ...BLOCKED.map((type) => [type, onBlocked]),
  ];
  for (const [type, listener] of listeners) {
    window.addEventListener(type, listener, { capture: true, passive: false });
  }

  return {
    // Fermé, le glissé en cours s'arrête sans autre événement.
    setPicking: (on) => {
      picking = on;
      if (picking) return;
      drag = null;
      hideFrame();
    },
    stop: () => {
      for (const [type, listener] of listeners) {
        window.removeEventListener(type, listener, { capture: true });
      }
      hideFrame();
    },
  };
};
