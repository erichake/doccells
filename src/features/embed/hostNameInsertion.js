// Insertion d'un nom de l'hôte dans la formule en cours d'édition (EMBED.md,
// section 16) : pendant que l'utilisateur écrit une formule dans une cellule
// ou dans la barre de formule, un clic sur un objet de la figure de l'hôte y
// écrit GEO("nom"), comme un clic sur une cellule y écrit sa référence.
//
// - L'événement formulaEditing { on } dit à l'hôte quand un tel clic insère
//   un nom : éditeur ouvert, vide ou commençant par « = ».
// - insertHostName(name) écrit GEO("name") au curseur (« =GEO("name") »
//   dans un éditeur vide). Deux insertions de suite, sans rien écrire entre
//   elles, se remplacent, comme deux clics de suite sur des cellules.
import { escapeScriptTag, functionHTMLGenerate } from "@fortune-sheet/core";
import { nextTask } from "./visibility.js";

const EDITOR_IDS = ["luckysheet-rich-text-editor", "luckysheet-functionbox-cell"];

export const hostNameCall = (name) => `GEO("${name}")`;

/**
 * Texte de l'éditeur après l'insertion de GEO("name"), ou null si son
 * contenu n'est pas une formule. [from, to] : la sélection dans le texte
 * (curseur si from === to), remplacée par l'appel. last : l'insertion
 * précédente { text, start, end }, remplacée si le texte et le curseur n'ont
 * pas changé depuis. Renvoie { text, start, end } (end : le curseur après).
 */
export const planHostNameInsertion = (text, [from, to], name, last = null) => {
  const call = hostNameCall(name);
  if (text === "") return { text: `=${call}`, start: 1, end: 1 + call.length };
  if (!text.startsWith("=")) return null;
  // Jamais avant le « = ».
  let start = Math.min(Math.max(Math.min(from, to), 1), text.length);
  const end = Math.min(Math.max(Math.max(from, to), start), text.length);
  if (last && start === end && last.text === text && last.end === start) start = last.start;
  return {
    text: text.slice(0, start) + call + text.slice(end),
    start,
    end: start + call.length,
  };
};

export const isFormulaText = (text) => text === "" || text.startsWith("=");

// Position, dans le texte de l'éditeur, d'un point (nœud, décalage).
const textOffset = (editor, node, offset) => {
  const range = document.createRange();
  range.selectNodeContents(editor);
  range.setEnd(node, offset);
  return range.toString().length;
};

const placeCaret = (editor, offset) => {
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let rest = offset;
  let placed = false;
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (rest <= node.data.length) {
      range.setStart(node, rest);
      placed = true;
      break;
    }
    rest -= node.data.length;
  }
  if (!placed) range.selectNodeContents(editor);
  range.collapse(placed);
  const selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
};

export const startHostNameInsertion = ({ getContext, onFormulaEditing }) => {
  // Le dernier éditeur qui a eu le focus (cellule ou barre de formule).
  let lastEditor = null;
  // L'insertion précédente : { editor, text, start, end }.
  let last = null;
  let formulaEditing = false;

  const editors = () => EDITOR_IDS.map((id) => document.getElementById(id)).filter(Boolean);

  const isEditing = (ctx) => Boolean(ctx?.luckysheetCellUpdate?.length > 0);

  // L'éditeur où l'utilisateur écrit : celui qui contient la sélection du
  // document (gardée quand l'iframe perd le focus), sinon le dernier qui a
  // eu le focus, sinon celui de la cellule.
  const targetEditor = () => {
    const list = editors();
    const selection = document.getSelection();
    const anchor = selection?.rangeCount ? selection.anchorNode : null;
    return (
      list.find((editor) => anchor && editor.contains(anchor)) ||
      list.find((editor) => editor === lastEditor) ||
      list[0] ||
      null
    );
  };

  const selectionIn = (editor, text) => {
    const selection = document.getSelection();
    if (
      !selection?.rangeCount ||
      !editor.contains(selection.anchorNode) ||
      !editor.contains(selection.focusNode)
    ) {
      return [text.length, text.length];
    }
    return [
      textOffset(editor, selection.anchorNode, selection.anchorOffset),
      textOffset(editor, selection.focusNode, selection.focusOffset),
    ];
  };

  const insert = (name) => {
    const ctx = getContext();
    if (!isEditing(ctx)) return false;
    const editor = targetEditor();
    if (!editor) return false;
    const text = editor.textContent;
    const plan = planHostNameInsertion(
      text,
      selectionIn(editor, text),
      name,
      last?.editor === editor ? last : null,
    );
    if (!plan) return false;
    // Comme handleFormulaInput : formule colorée, dans les deux éditeurs.
    const html = functionHTMLGenerate(escapeScriptTag(plan.text));
    for (const element of editors()) element.innerHTML = html;
    // Une désignation de cellule en cours visait un élément remplacé : la
    // suivante repart du curseur (comme après une frappe).
    if (ctx.formulaCache) {
      ctx.formulaCache.rangestart = false;
      ctx.formulaCache.rangedrag_column_start = false;
      ctx.formulaCache.rangedrag_row_start = false;
    }
    // Le clic de l'hôte a pu prendre le focus à l'iframe : il lui revient
    // d'abord, sans quoi la frappe suivante irait à la page hôte.
    window.focus();
    editor.focus({ preventScroll: true });
    placeCaret(editor, plan.end);
    last = { editor, text: editor.textContent, start: plan.start, end: plan.end };
    return true;
  };

  const check = () => {
    checkScheduled = false;
    const ctx = getContext();
    const editor = isEditing(ctx) ? targetEditor() : null;
    const on = Boolean(editor && isFormulaText(editor.textContent));
    if (on === formulaEditing) return;
    formulaEditing = on;
    if (!on) last = null;
    onFormulaEditing(on);
  };

  const onFocusIn = (event) => {
    if (EDITOR_IDS.includes(event.target?.id)) lastEditor = event.target;
  };

  // À la tâche suivante : une frappe sur une cellule sélectionnée ouvre
  // l'éditeur, vide, puis y écrit son caractère.
  let checkScheduled = false;
  const scheduleCheck = () => {
    if (checkScheduled) return;
    checkScheduled = true;
    nextTask(check);
  };

  // Ouverture et fermeture de l'éditeur (style de .luckysheet-input-box),
  // frappe et contenu écrit par FortuneSheet.
  const observer = new MutationObserver(scheduleCheck);
  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["style"],
  });
  window.addEventListener("focusin", onFocusIn, true);

  return {
    insert,
    stop: () => {
      observer.disconnect();
      window.removeEventListener("focusin", onFocusIn, true);
    },
  };
};
