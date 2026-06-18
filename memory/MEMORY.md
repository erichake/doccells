# Memory Index

- [Tout doit survivre à npm install](feedback_npm_install_survival.md) — patches node_modules via scripts/postinstall obligatoires pour toute modification de dépendance
- [Système de localisation](project_i18n_system.md) — section `custom` dans `scripts/*-locale.cjs` → `node scripts/inject-locales.cjs` → `src/locales/custom.js` (ESM) → `t.maClé` dans App.jsx
