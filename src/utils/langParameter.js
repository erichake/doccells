// ?lang=fr (ou fr-FR, de, zh-TW…) : langue de DocCells imposée par la page
// qui l'ouvre, par exemple un hôte du mode intégré qui a sa propre langue.
// DocCells et ses adaptations de FortuneSheet lisent navigator.language :
// on le remplace avant le chargement de tout autre module (premier import
// de main.jsx).
const LANG = /^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/;

const requested = new URLSearchParams(window.location.search).get("lang");
if (requested && LANG.test(requested)) {
  try {
    Object.defineProperty(navigator, "language", { configurable: true, get: () => requested });
    Object.defineProperty(navigator, "languages", { configurable: true, get: () => [requested] });
  } catch {
    // Navigateur qui refuse : langue du navigateur.
  }
}
