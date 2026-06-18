---
name: project-i18n-system
description: How the localization system works in this project — locale files, inject-locales script, and how to add new custom UI strings
metadata:
  type: project
---

## Architecture

Le projet utilise un système de localisation en deux couches :

### 1. Strings FortuneSheet (internes au composant)
- Fichiers : `scripts/en-locale.cjs`, `scripts/fr-locale.cjs`, `scripts/es-locale.cjs`, `scripts/zh-locale.cjs`, `scripts/zh_tw-locale.cjs`, `scripts/hi-locale.cjs`, `scripts/ru-locale.cjs`
- Format : CommonJS (`module.exports = { ... }`)
- Rôle : remplacent les locales du bundle `@fortune-sheet/core` au postinstall
- Script d'injection : `scripts/inject-locales.cjs`
- Langues gérées : `en`, `fr` (→ fr-FR), `es` (→ es-ES), `zh` (→ zh-CN), `zh_tw` (→ zh-TW), `hi`, `ru`

### 2. Strings custom (UI hors FortuneSheet — boutons DOM, menu contextuel)
- Source de vérité : section `custom` à la fin de chaque `*-locale.cjs`
- Fichier généré : `src/locales/custom.js` (ESM, importable par Vite/React)
- Généré automatiquement par `scripts/inject-locales.cjs` (aussi déclenché par `npm install`)

## Ajouter une nouvelle string custom

1. Ajouter la clé dans la section `custom` de **chaque** fichier `scripts/*-locale.cjs`
2. Relancer : `node scripts/inject-locales.cjs`
   → regénère `src/locales/custom.js`
3. Utiliser dans `App.jsx` via `t.maCle` (voir ci-dessous)

## Utilisation dans App.jsx

```js
import { customLocales } from "./locales/custom.js";

// Détection de langue (module-level, hors composant)
const SUPPORTED_LANGS = ["zh-CN", "zh-TW", "en", "fr-FR", "es-ES"];
const detectedLang =
  SUPPORTED_LANGS.includes(navigator.language)
    ? navigator.language
    : (SUPPORTED_LANGS.find((l) => navigator.language.startsWith(l.split("-")[0])) ?? "en");
const t = customLocales[detectedLang] ?? customLocales["en"];

// Utilisation : t.lockCells, t.unlockCells, t.toggleSheetProtection
```

## Strings custom actuelles

| Clé | fr-FR | en |
|---|---|---|
| `lockCells` | Verrouiller les cellules | Lock cells |
| `unlockCells` | Déverrouiller les cellules | Unlock cells |
| `toggleSheetProtection` | Protéger / Déprotéger la feuille | Protect / Unprotect sheet |

## Important

- Les fichiers `*-locale.cjs` sont CommonJS → **non importables** directement par React/Vite
- `src/locales/custom.js` est **auto-généré** — ne pas l'éditer manuellement
- `src/locales/custom.js` doit être commité (il est généré au postinstall mais Vite en a besoin au build)

**Why:** Separation between FortuneSheet internal strings (injected into bundle at postinstall) and app-level custom strings (ESM, imported by React). The locale files are the single source of truth for translators.
