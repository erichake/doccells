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

## Manuel d'utilisation

Le manuel est un mini-site statique dans `public/tutorials/<langue>/`, une page
HTML par rubrique, dans les douze langues de l'interface ; il s'ouvre par
Outils › Manuel d'utilisation. Il a le mécanisme de celui de DocGeo :
`public/tutorials/manual.js` (ordre des pages, tables des matières, recherche)
et `manual.css` s'écrivent à la main. Les pages HTML, `langs.js`, `icons.js`,
les images et la liste des langues de `index.html` sont générés : ne pas les
éditer.

Les sources sont dans `tools/manual/` :

- `pages/<langue>.md` : toutes les pages d'une langue, séparées par
  `=== nom | titre court`. Les formules y sont écrites sous leur forme
  canonique (noms anglais, virgules, point décimal) et les termes de
  l'interface par leur clé (`%fillDown%`, voir `terms.mjs`) : le générateur
  les met dans la langue. La syntaxe est décrite au début de `pages.mjs`.
- `pages/ui.json` : les textes du site (recherche, sommaire…).
- `functions/<langue>.txt` : les descriptions de fonctions qui remplacent
  celles de l'interface ; `functions.mjs` : les exemples, calculés par le
  moteur de DocCells.
- `shots.mjs` : les captures, les mêmes dans toutes les langues.

Le français est la langue de référence : on l'écrit d'abord, puis les onze
autres, avec les mêmes noms de pages et les mêmes `id` de titres.

`npm run manual` (ou `-- pages`, `-- icons`, `-- shots`, `-- check`, suivis
éventuellement de langues ou de noms de captures) génère tout et contrôle
pages, liens et images. Il n'ouvre ni serveur ni port : DocCells est construit
dans un dossier temporaire et servi au navigateur par interception. Les
captures des douze langues prennent une vingtaine de minutes.

Après un changement de l'interface ou des fonctions, mettre à jour les textes
concernés et relancer `npm run manual`. Le manuel n'annonce que ce qui
marche : vérifier dans l'application avant d'écrire.
