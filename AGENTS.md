# Instructions pour les agents

## Serveur de developpement DocCells

DocCells doit etre lance uniquement sur le port `5174`.

Ne jamais demarrer DocCells automatiquement. Seul Eric lance manuellement le
serveur de developpement avec la commande normale :

```bash
npm run dev
```

Les agents ne doivent pas executer `npm run dev`, ni arreter ou relancer une
instance DocCells/Vite, sauf demande explicite d'Eric.

Ne jamais demarrer DocCells sur un autre port, y compris un port de secours
comme `5175`, meme si `5174` est deja occupe.

Le script `dev` utilise `vite --force --port 5174 --strictPort` pour garantir
que l'application ne bascule pas silencieusement vers un autre port.
