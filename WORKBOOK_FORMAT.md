# Format d'archivage des classeurs DocCells

Format JSON dans lequel une page hôte enregistre durablement un classeur
DocCells (requête `save` du mode intégré, `EMBED.md`) et le lui rend
(`load`). Code : `src/features/archive/workbookArchive.js`.

## Engagements

1. Toute archive porte une enveloppe `{ format: "doccells", version, … }`.
2. Ce fichier décrit les champs de chaque version publiée. Une version
   publiée ne change plus : un nouveau besoin donne une nouvelle version,
   décrite ici à la suite des précédentes.
3. DocCells lit toutes les versions publiées. Une archive ancienne est
   convertie, version par version, jusqu'à la version courante, au moment du
   chargement (`MIGRATIONS` dans le code). `save` écrit toujours la version
   courante.
4. Chaque version a un fichier d'exemple, `tests/fixtures/workbook-v<N>.json`,
   que les tests chargent à chaque évolution (`tests/workbookArchive.test.mjs`
   et `tests/browser/embedMode.browser.mjs`) : il doit toujours se lire et
   donner les mêmes valeurs. Les fichiers d'exemple ne sont jamais modifiés.

Une archive d'une version plus récente que celle que connaît DocCells est
refusée (`Unsupported workbook version: N`), sans rien perdre du classeur
affiché.

## Archives d'origine inconnue

Une archive peut venir de n'importe où (fichier d'une page hôte ouvert depuis
une adresse quelconque). Rien de ce qu'elle contient ne doit pouvoir
s'exécuter dans DocCells, ni donc dans un hôte de même origine :

- **à la lecture** (`readWorkbookArchive`), une image n'est gardée que si sa
  source est une image en URL `data:` (`data:image/png;base64,…`) : ni
  requête vers une autre adresse, ni contenu actif ;
- **à l'affichage**, les textes de l'archive (valeurs, formules, texte
  enrichi et ses styles, commentaires, textes des validations, noms de
  feuilles) ne sont jamais interprétés comme du HTML : FortuneSheet les
  écrivait par `innerHTML` sans les échapper à plusieurs endroits, corrigés
  par `scripts/patch-fortune-html-safety.cjs` (détail en tête du fichier) ;
  les commentaires, enregistrés en HTML, et le tableau HTML de la copie
  passent par un nettoyage qui ne garde que quelques balises de mise en
  forme sans attribut actif ;
- les liens (`hyperlink`) n'ouvrent qu'une adresse `http(s)` (FortuneSheet
  préfixe `https://` toute autre adresse) ou une plage du classeur ;
- les formules sont calculées par le moteur de DocCells, qui n'évalue aucun
  code.

Testé par `tests/browser/embedMode.browser.mjs` (« archive piégée »).

## Version 1

```json
{
  "format": "doccells",
  "version": 1,
  "definedNames": [{ "name": "taux", "refersTo": "=Feuille1!$B$1", "scopeSheetId": null }],
  "sheets": [{ "name": "Feuille1", "id": "0", "order": 0, "status": 1, "config": {}, "celldata": [] }]
}
```

### Enveloppe

| Champ          | Contenu                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------- |
| `format`       | toujours `"doccells"`                                                                       |
| `version`      | `1`                                                                                         |
| `definedNames` | noms définis du classeur : `{ name, refersTo, scopeSheetId, hidden? }` (`scopeSheetId` nul pour un nom de classeur, identifiant de feuille sinon ; `refersTo` comme dans Excel, `=Feuille1!$A$1:$A$3`) |
| `sheets`       | feuilles, dans l'ordre des onglets ; au moins une                                           |

### Feuille

Une feuille suit le modèle de FortuneSheet (`@fortune-sheet/core`, type
`Sheet`) complété par DocCells. Seuls les champs ci-dessous sont archivés,
dans cet ordre ; `name` est obligatoire, les autres sont facultatifs.

| Champ                             | Contenu                                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                            | nom de l'onglet (unique dans le classeur)                                                                |
| `id`                              | identifiant de la feuille, utilisé par `calcChain` et les noms définis de feuille                         |
| `order`                           | position de l'onglet (0 pour le premier)                                                                 |
| `status`                          | 1 pour la feuille active à l'ouverture, 0 sinon                                                           |
| `hide`                            | 1 si l'onglet est masqué                                                                                 |
| `color`                           | couleur de l'onglet (`#rrggbb`)                                                                           |
| `row`, `column`                   | nombre minimal de lignes et de colonnes de la grille                                                     |
| `addRows`                         | nombre de lignes ajoutées par le bouton d'ajout                                                          |
| `defaultRowHeight`, `defaultColWidth` | hauteur de ligne et largeur de colonne par défaut, en pixels                                         |
| `zoomRatio`                       | zoom de la feuille (1 = 100 %)                                                                            |
| `showGridLines`                   | quadrillage affiché (`true` / `false`, ou 1 / 0)                                                          |
| `frozen`                          | volets figés : `{ type, range: { row_focus, column_focus } }`, `type` parmi `row`, `column`, `both`, `rangeRow`, `rangeColumn`, `rangeBoth` |
| `config`                          | `merge` (fusions `{ r, c, rs, cs }` par clé `"r_c"`), `rowlen` et `columnlen` (tailles en pixels par indice), `rowhidden` et `colhidden` (indices masqués), `customHeight` et `customWidth`, `borderInfo` (bordures), `authority` (protection de la feuille), `rowReadOnly` et `colReadOnly` |
| `celldata`                        | cellules non vides : `{ r, c, v }`, `r` et `c` à partir de 0, `v` décrit ci-dessous                        |
| `calcChain`                       | formules à recalculer : `{ r, c, id }` (`id` de la feuille) ; reconstruit depuis `celldata` s'il manque   |
| `images`                          | images : `{ id, src, left, top, width, height }`, `src` en URL `data:`                                    |
| `hyperlink`                       | liens par cellule `"r_c"` : `{ linkType, linkAddress }`                                                   |
| `dataVerification`                | validations par cellule `"r_c"` : case à cocher (`type: "checkbox"`), liste déroulante (`type: "dropdown"`, `sourceType` `list` ou `range`, valeurs dans `value1`)… |
| `filter`, `filter_select`         | filtre automatique : critères par colonne et plage filtrée                                               |
| `luckysheet_conditionformat_save` | mises en forme conditionnelles au format FortuneSheet                                                     |
| `luckysheet_alternateformat_save` | couleurs alternées au format FortuneSheet                                                                 |
| `customConditionalFormatting`     | règles de mise en forme conditionnelle de DocCells : `{ id, enabled, range, rangeText, condition, compareType, value, value2, reference, textColor, backgroundColor, bold, italic, underline }` |
| `customCharts`                    | graphiques de DocCells : `{ id, type, title, range, rangeText, labels, color, position, showValues, showLegend, showXAxis, showYAxis, showGridlines }` |
| `pivotTable`, `isPivotTable`      | tableau croisé de FortuneSheet, conservé tel quel (non utilisé par DocCells)                              |

Champs connus d'une feuille DocCells **non archivés**, parce qu'ils se
déduisent des autres ou ne concernent que la session :

| Champ                                                    | Raison                                                     |
| -------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                   | grille complète, reconstruite depuis `celldata`            |
| `definedNames`                                           | noms définis, archivés une fois dans l'enveloppe           |
| `luckysheet_select_save`, `luckysheet_selection_range`   | sélection courante                                         |
| `scrollLeft`, `scrollTop`                                | défilement courant                                         |
| `dynamicArray`, `dynamicArray_compute`                   | résultats de formules matricielles, recalculés au chargement |

Un champ de feuille absent de ces deux listes n'est pas archivé. Les tests
vérifient que chaque champ produit par DocCells figure dans l'une d'elles, et
que ces listes sont celles du code.

### Cellule (`celldata[].v`)

Une cellule est un objet `Cell` de FortuneSheet, archivé tel quel. Champs
connus :

| Champ              | Contenu                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `v`                | valeur : nombre (date : numéro de série, 1 = 1900-01-01), texte, booléen ou liste (tableau JSON de nombres et de listes, `[2.5, [1, 2]]`, écrit `[2,5; [1; 2]]` en français) ; pour une formule, son dernier résultat |
| `m`                | texte affiché, dans la langue du navigateur qui a enregistré (« 10,00 » en français) : recalculé au chargement pour une formule, affiché tel quel pour une valeur |
| `f`                | formule, en anglais avec la virgule pour séparateur (`=SUM(A1,7)`), quelle que soit la langue de saisie |
| `ct`               | format : `{ fa, t }`, `fa` le format de nombre (`General`, `0.00`, `yyyy-MM-dd`, `@` pour du texte…), `t` le type (`n` nombre, `s` texte, `d` date, `b` booléen, `e` erreur, `inlineStr` texte enrichi, ses morceaux dans `s`) |
| `bg`, `fc`         | couleur de fond et du texte                                                               |
| `ff`, `fs`         | police et taille                                                                          |
| `bl`, `it`, `un`, `cl` | gras, italique, souligné, barré (1)                                                   |
| `ht`, `vt`         | alignement horizontal (0 centré, 1 gauche, 2 droite) et vertical (0 milieu, 1 haut, 2 bas) |
| `tb`, `tr`, `rt`   | retour à la ligne, orientation, rotation du texte                                         |
| `mc`               | fusion : `{ r, c, rs, cs }` sur la cellule principale, `{ r, c }` sur les autres          |
| `qp`               | 1 : texte saisi tel quel (apostrophe initiale)                                            |
| `spl`              | données d'un graphique sparkline de FortuneSheet                                         |
| `lo`               | 0 : cellule déverrouillée dans une feuille protégée                                       |
| `ps`               | commentaire : `{ value, isShow, left, top, width, height }`                               |
| `hl`               | lien de la cellule (voir `hyperlink`)                                                     |
| `VF`               | DocCells : `{ f, v }`, formule et valeur au moment de l'enregistrement                     |
| `_dcAutoGeneralHt` | DocCells : 1 quand l'alignement à droite vient du format Général d'un nombre (et suit donc la valeur) |

`v` et `f` font foi ; `m` n'est qu'un texte d'affichage. Une archive
rechargée dans une autre langue donne donc les mêmes valeurs et formules,
avec des textes affichés recalculés pour les formules.

Les marqueurs internes de la mise en forme conditionnelle (`_dcCf`) ne sont
jamais archivés : `save` les retire, le style étant reconstruit depuis
`customConditionalFormatting` au chargement.

### Exemple

`tests/fixtures/workbook-v1.json` : deux feuilles, formules (plages, autre
feuille, noms définis, dates, erreurs), styles et formats de nombre, fusion,
tailles de lignes et de colonnes, colonne masquée, bordure, volets figés,
mise en forme conditionnelle, case à cocher, liste déroulante, graphique,
commentaire, quadrillage masqué.
