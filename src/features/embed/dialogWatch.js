// Ouverture et fermeture des dialogues de DocCells et de FortuneSheet, pour
// l'événement « dialog » du mode intégré (EMBED.md) : l'hôte pose son propre
// voile pendant qu'un dialogue est ouvert, car celui du dialogue ne couvre
// que l'iframe (ou, pour « À propos », les barres sorties dans l'hôte).
//
// Un dialogue est un élément présent dans le document ou dans les barres
// sorties (chromeMount.js) : les dialogues de DocCells (aria-modal, montés
// seulement quand ils sont ouverts), le voile des dialogues et alertes de
// FortuneSheet, et sa recherche / remplacement.
import { observeChrome, queryChrome, subscribeChrome } from "./chromeMount.js";

export const DIALOG_SELECTOR = [
  '[aria-modal="true"]',
  ".fortune-modal-container",
  ".fortune-search-replace",
].join(", ");

// onChange(open) à chaque passage de « aucun dialogue » à « au moins un », et
// retour. Renvoie la fonction qui arrête l'observation.
export const watchDialogs = (onChange) => {
  let open = false;
  const check = () => {
    const next = Boolean(queryChrome(DIALOG_SELECTOR));
    if (next === open) return;
    open = next;
    onChange(open);
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
