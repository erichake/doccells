// Valeurs de cellules transmises à la page hôte.
//
// Une cellule vaut sa valeur calculée v : nombre (date : numéro de série),
// texte, booléen ou null (vide). Une erreur devient { error: "#N/A" } ; la
// chaîne « DIV/0 » que FortuneSheet produit pour une division par zéro est
// normalisée en « #DIV/0! ». Avec display, chaque cellule est { v, m }, m
// étant le texte affiché.

const ERROR_CODES = new Set([
  "#NULL!",
  "#DIV/0!",
  "#VALUE!",
  "#REF!",
  "#NAME?",
  "#NUM!",
  "#N/A",
  "#ERROR!",
  "#SPILL!",
  "#CALC!",
  "#GETTING_DATA",
]);

const rawValue = (cell) => {
  if (cell == null) return null;
  if (typeof cell !== "object") return cell;
  if (cell.v !== undefined && cell.v !== null) return cell.v;
  // Texte enrichi : FortuneSheet range les morceaux dans ct.s.
  if (cell.ct?.t === "inlineStr" && Array.isArray(cell.ct.s)) {
    return cell.ct.s.map((part) => part?.v ?? "").join("");
  }
  return null;
};

export const toPublicValue = (cell, display = false) => {
  let value = rawValue(cell);
  if (typeof value === "string") {
    if (value === "DIV/0") value = { error: "#DIV/0!" };
    else if (ERROR_CODES.has(value)) value = { error: value };
  }
  if (!display) return value;
  let shown = cell && typeof cell === "object" ? cell.m : undefined;
  if (shown == null) {
    if (value == null) shown = "";
    else if (typeof value === "object") shown = value.error;
    else shown = String(value);
  }
  return { v: value, m: String(shown) };
};

// Valeurs d'une plage de la grille data (lignes absentes : cellules vides).
export const readRange = (data, { r0, c0, r1, c1 }, display = false) => {
  const rows = [];
  for (let r = r0; r <= r1; r += 1) {
    const row = data?.[r];
    const values = [];
    for (let c = c0; c <= c1; c += 1) values.push(toPublicValue(row?.[c], display));
    rows.push(values);
  }
  return rows;
};
