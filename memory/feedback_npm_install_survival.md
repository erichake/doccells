---
name: npm-install-survival
description: Toute modification du projet doit survivre à un npm install — patches node_modules obligatoires via postinstall
metadata:
  type: feedback
---

Toute modification apportée au projet doit survivre à un `npm install`.

**Why:** `npm install` réinstalle les packages et écrase `node_modules/`. Les modifications directes dans `node_modules/` sont perdues. L'utilisateur a explicitement posé cette contrainte comme règle générale pour l'ensemble du projet.

**How to apply:** Ne jamais modifier directement un fichier dans `node_modules/` sans ajouter le patch correspondant dans `scripts/patch-fortune-core.cjs` ou `scripts/patch-fortune-react.cjs` (ou un nouveau script de patch dédié). Le script doit être référencé dans le hook `postinstall` de `package.json`. Le mécanisme existant détecte si le patch est déjà appliqué (idempotent).
