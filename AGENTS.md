# Instructions Obligatoires Pour Codex

Avant toute analyse, commande, modification de fichier, lancement de serveur ou réponse finale dans ce projet, lire :

```bash
memory/MEMORY.md
```

Puis lire les fichiers `memory/*.md` qui y sont référencés et appliquer leurs règles.

## Règle Critique: Serveur DocCells

DocCells doit être lancé uniquement via :

```bash
npm run dev
```

Le port autorisé est uniquement `5174`.

Ne jamais lancer DocCells sur un port de secours (`5175`, `5176`, etc.).

Si `5174` est occupé, considérer que c'est une ancienne instance DocCells/Vite à arrêter, puis relancer `npm run dev`.

## Règle Critique: Modifications De Dépendances

Toute modification doit survivre à `npm install`.

Ne jamais modifier directement `node_modules/` sans ajouter le patch correspondant dans les scripts `postinstall` du projet.
