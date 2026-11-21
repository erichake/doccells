// Fiche de la fonction GEO (EMBED.md, section 7) dans les listes de fonctions
// des locales FortuneSheet : complétion automatique, aide des arguments et
// bibliothèque de fonctions. Ajoutée seulement en mode intégré, le seul où
// l'hôte peut fournir des valeurs.
import { locale } from "@fortune-sheet/core";
import { HOST_FUNCTION } from "../recalc/hostValues.js";

// Langues de localeObj (scripts/inject-locales.cjs).
const LANGS = ["en", "zh", "es", "zh-TW", "hi", "ru", "fr", "pt", "de", "el", "it", "nl"];

const TEXTS = {
  en: {
    d: "Returns the value provided by the host application under the given name.",
    a: "Value provided by the host application.",
    name: "name",
    detail: "Name of the value, written as text in the formula. #N/A while the host provides no value for it.",
  },
  fr: {
    d: "Renvoie la valeur fournie par l’application hôte sous le nom indiqué.",
    a: "Valeur fournie par l’application hôte.",
    name: "nom",
    detail: "Nom de la valeur, écrit comme un texte dans la formule. #N/A tant que l’hôte ne fournit pas de valeur pour ce nom.",
  },
};

const entryFor = (lang) => {
  const text = TEXTS[lang] || TEXTS.en;
  return {
    n: HOST_FUNCTION,
    t: -1,
    d: text.d,
    a: text.a,
    m: [1, 1],
    p: [
      {
        name: text.name,
        detail: text.detail,
        example: '"AB"',
        require: "m",
        repeat: "n",
        type: "string",
      },
    ],
  };
};

export const registerHostFunctionHelp = () => {
  const seen = new Set();
  for (const lang of LANGS) {
    const strings = locale({ lang });
    const list = strings?.functionlist;
    if (!Array.isArray(list) || seen.has(list)) continue;
    seen.add(list);
    if (list.some((item) => item.n === HOST_FUNCTION)) continue;
    // En tête : la recherche s'arrête aux dix premières correspondances.
    list.unshift(entryFor(lang));
  }
};
