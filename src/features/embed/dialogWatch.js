// Ouverture et fermeture des dialogues de DocCells et de FortuneSheet, pour
// l'événement « dialog » du mode intégré (EMBED.md) : l'hôte pose son propre
// voile pendant qu'un dialogue est ouvert, car celui du dialogue ne couvre
// que l'iframe (ou, pour « À propos », les barres sorties dans l'hôte).
//
// Un dialogue est un élément présent dans le document ou dans les barres
// sorties (chromeMount.js) : les dialogues de DocCells (aria-modal, montés
// seulement quand ils sont ouverts), le voile des dialogues et alertes de
// FortuneSheet, et sa recherche / remplacement.
import { observeChrome, queryChromeAll, subscribeChrome } from "./chromeMount.js";

export const DIALOG_SELECTOR = [
  '[aria-modal="true"]',
  ".fortune-modal-container",
  ".fortune-search-replace",
].join(", ");

// Dialogues sans voile.
const NO_VEIL = ".fortune-search-replace";

const TRANSPARENT = /^(transparent|rgba\(.*,\s*0\))$/;

// Voile d'un dialogue : l'élément le plus extérieur, parmi lui et ses
// ancêtres, placé (fixed ou absolute) et qui a un fond ou un
// backdrop-filter. Null s'il n'en a pas.
const veilOf = (dialog) => {
  if (dialog.matches(NO_VEIL)) return null;
  const view = dialog.ownerDocument.defaultView;
  let veil = null;
  for (let element = dialog; element && element.nodeType === 1; element = element.parentElement) {
    if (element === element.ownerDocument.body) break;
    const style = view.getComputedStyle(element);
    if (style.position !== "fixed" && style.position !== "absolute") continue;
    const filter = style.backdropFilter || style.webkitBackdropFilter || "none";
    if (!TRANSPARENT.test(style.backgroundColor) || filter !== "none") {
      veil = { element, style, filter };
    }
  }
  return veil;
};

const zIndex = (style) => Number.parseInt(style.zIndex, 10) || 0;

// Voile du dialogue au premier plan, en valeurs CSS calculées : celui dont le
// z-index est le plus grand (le dernier trouvé à égalité). Null si aucun
// dialogue ouvert n'a de voile.
export const frontVeil = (dialogs) => {
  let front = null;
  for (const dialog of dialogs) {
    const veil = veilOf(dialog);
    if (veil && (!front || zIndex(veil.style) >= zIndex(front.style))) front = veil;
  }
  return front ? { background: front.style.backgroundColor, backdropFilter: front.filter } : null;
};

// onChange(open, veil) à chaque passage de « aucun dialogue » à « au moins
// un », et retour ; et, dialogues ouverts, quand le voile du premier plan
// change. Renvoie la fonction qui arrête l'observation.
export const watchDialogs = (onChange) => {
  let open = false;
  let veilKey = "null";
  const check = () => {
    const dialogs = queryChromeAll(DIALOG_SELECTOR);
    const next = dialogs.length > 0;
    if (!next) {
      if (open) {
        open = false;
        onChange(false, null);
      }
      return;
    }
    const veil = frontVeil(dialogs);
    const key = JSON.stringify(veil);
    if (open && key === veilKey) return;
    open = true;
    veilKey = key;
    onChange(true, veil);
  };
  const observer = new MutationObserver(check);
  // Les barres sortent ou reviennent : observer leurs nouvelles racines.
  const observe = () => {
    observer.disconnect();
    observeChrome(observer);
    check();
  };
  observe();
  const stopChrome = subscribeChrome(observe);
  return () => {
    stopChrome();
    observer.disconnect();
  };
};
