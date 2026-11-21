// Alignement « Général » d'Excel : sans alignement choisi, un nombre est à
// droite et le reste à gauche. Le dessin le déduit de la valeur
// (scripts/patch-fortune-general-alignment.cjs). Les classeurs enregistrés
// avant ce changement portent encore cet alignement automatique stocké
// (ht = 2 avec cette marque) : il ne compte pas comme un alignement choisi.
export const AUTO_GENERAL_ALIGNMENT_KEY = "_dcAutoGeneralHt";

// L'alignement horizontal choisi pour la cellule, ou undefined (Général).
export const chosenHorizontalAlignment = (cellValue) =>
  cellValue?.[AUTO_GENERAL_ALIGNMENT_KEY] === 1 ? undefined : cellValue?.ht;
