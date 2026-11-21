# Mode intégré de DocCells

DocCells peut être intégré dans une page hôte, dans une iframe, et piloté de
deux façons qui partagent le même code :

- un **accès synchrone**, `window.docCells`, pour un hôte de même origine
  (servi à côté de DocCells) : les appels renvoient directement leur
  résultat, sans attendre de message ;
- un **protocole `postMessage`** versionné, pour tout hôte, de même origine
  ou non.

L'hôte fournit le classeur, le lit pour l'enregistrer dans son propre
stockage, écrit des valeurs dans des cellules et s'abonne à des cellules ou
plages dont il reçoit les nouvelles valeurs après chaque recalcul. Il peut
aussi fournir des valeurs nommées, que les formules lisent par `=GEO("nom")`
(section 7). Rien de ce mode ne dépend d'une application hôte particulière. Les conventions
(enveloppe versionnée, réponses par `id`, traitement dans l'ordre) sont celles
du protocole de DocGeo.

L'API `window.*` historique (`openExcel`, `getExcelAsBase64`,
`getSheetData`, `setSheetData`, `setCellValues`, `whenDocCellsReady`) est
inchangée et reste disponible avec ou sans `?embed`.

Code : `src/features/embed/` (cœur `docCellsCore.js`, protocole
`messageProtocol.js`, références `references.js`, valeurs `cellValues.js`,
visibilité et dessin `visibility.js`, activation `embedMode.js`, barres
dans la page hôte `chromeMount.js`, dialogues `dialogWatch.js`) ;
valeurs de l'hôte et fonction `GEO` : `src/features/recalc/hostValues.js`.

## 1. Activation et interface

```html
<iframe src="apps/doccells/index.html?embed" style="border: 0"></iframe>
```

`?embed` n'a d'effet que dans une iframe. Il se combine avec `?mode=student`,
`?lang=` et `?singleSheet`. `?embed=https://hote.example` (plusieurs origines séparées par
des virgules) restreint les origines acceptées (section 4.4).

`?lang=fr` (ou `fr-FR`, `de`, `zh-TW`…), avec ou sans `?embed`, impose la
langue de DocCells (menus, noms de fonctions, séparateur décimal) au lieu de
celle du navigateur : un hôte qui a sa propre langue la transmet ainsi.

Dans toute iframe, avec ou sans `?embed`, DocCells n'affiche pas d'écran de
démarrage ni les boutons Ouvrir / Exporter de la barre d'outils, et ne fait ni
autosauvegarde, ni proposition de récupération, ni ouverture par
glisser-déposer.

Avec `?embed` :

- les menus Édition, Affichage, Insertion, Format, Données et Outils sont
  affichés, sans le menu Fichier ;
- Cmd-S / Ctrl-S n'exporte rien et émet l'événement `save` ; Cmd-O et Cmd-P
  sont inactifs ;
- le paramètre `url=` est ignoré : DocCells ouvre le classeur vide habituel
  (`empty.xlsx`), puis l'hôte fournit le sien (`load`) ;
- `window.docCells` et le protocole `postMessage` sont actifs ;
- aucun dessin n'a lieu tant que l'iframe est masquée (section 9) ;
- l'hôte de même origine peut dessiner les barres de DocCells dans sa propre
  page (`mountChrome`, section 14) ;
- `&mode=student` n'affiche ni la barre de menus ni la barre de boutons ;
  la barre de formule reste, et les raccourcis clavier de la grille
  (Cmd-B, Cmd-Z…) marchent toujours. `mountChrome` n'y sort rien.

### Feuille unique : `&singleSheet`

`?embed&singleSheet` (aussi `&singleSheet=1` ; `=0`, `false`, `no` ou
`off` le désactivent) est fait pour un hôte qui montre une seule feuille et
tient lieu lui-même d'onglets :

- `load` montre la première feuille dans l'ordre des onglets (`order`),
  quelle que soit la feuille active enregistrée ;
- la barre d'onglets de feuilles et le zoom, qui est dans cette barre, sont
  masqués ;
- aucun moyen de créer une feuille ne reste : le bouton « + », la liste et
  le menu contextuel des onglets sont dans cette barre ; ni les menus de
  DocCells, ni le menu contextuel de la grille, ni un raccourci n'en créent,
  et le mode intégré n'ouvre aucun fichier (pas de menu Fichier, ni Cmd-O,
  ni glisser-déposer).

Les autres feuilles d'une archive restent dans le classeur (des formules
peuvent les lire) et dans ce que `save` renvoie, sans être montrées. Le
zoom au clavier ou à la molette de FortuneSheet reste possible.

## 2. Accès synchrone : `window.docCells`

```js
const docCells = iframe.contentWindow.docCells; // même origine seulement
await docCells.whenReady();
await docCells.load(workbook);
const { subscription, values } = docCells.subscribe("Feuille1!B2:B21");
docCells.on("values", (event) => { /* changement venu de l'utilisateur */ });

// Pendant un glissement, dans la même image :
const result = docCells.setCellValues([{ ref: "Feuille1!A1", v: 0.73 }]);
// result.values : nouvelles valeurs des abonnements de ce client

// Valeurs lues par =GEO("AB") (section 7) :
const names = docCells.hostNames(); // ["AB"]
docCells.setHostValues([{ name: "AB", v: 2.5 }]); // { recalculated, values }
```

| Méthode                            | Résultat                                                         |
| ---------------------------------- | ---------------------------------------------------------------- |
| `whenReady()`                      | promesse résolue quand un classeur est prêt                      |
| `load(workbook, { recalculate })`  | promesse de `{ sheets: [{ id, name }] }`                         |
| `save()`                           | le classeur (`workbook`)                                         |
| `setCellValues(updates)`           | `{ written, recalculated, skipped, values }`                     |
| `getValues(ref, { display })`      | tableau de lignes                                                |
| `subscribe(ref, { display })`      | `{ subscription, ref, values }`                                  |
| `unsubscribe(subscription)`        | `null`                                                           |
| `setHostValues(updates)`           | `{ recalculated, values }`                                       |
| `hostNames()`                      | noms lus par les formules `GEO` du classeur, triés               |
| `hostDependencies(ref)`            | noms dont dépend une cellule ou une plage, triés                 |
| `on(event, listener)`              | fonction qui retire l'écouteur                                   |
| `stats()`                          | `{ draws }` : nombre de dessins du canevas (diagnostic)          |
| `mountChrome({ menus, toolbar })`  | `true`, ou `false` en `mode=student` (section 14)                |
| `unmountChrome()`                  | `true`, ou `false` si les barres n'étaient pas sorties            |

Les opérations sont celles du protocole (sections 5 et 6), mêmes paramètres,
mêmes erreurs (levées en `Error`). Différences :

- `setCellValues` et `setHostValues` recalculent tout de suite et renvoient
  dans `values` les abonnements **de ce client** dont les valeurs ont
  changé, sous la forme `[{ subscription, ref, values }]` ; ces changements
  ne sont pas aussi envoyés en événements. Le dessin est fait à l'image suivante, une seule
  fois quel que soit le nombre d'écritures.
- `on` reçoit les événements de la section 6 ; `values` n'y arrive que pour
  les changements qui ne sont pas renvoyés par un appel de ce client
  (saisie de l'utilisateur, `load`, écriture d'un autre client).
- Une opération appelée pendant un `load` lève `Workbook not ready` (sauf
  `whenReady` et `load`, qui attendent leur tour).

`window.docCells` et le protocole sont deux clients distincts : chacun a ses
abonnements, et les écritures de l'un parviennent à l'autre en événements
`values` (`source: "host"`).

## 3. Références et valeurs

### Références

Une référence est une chaîne en notation A1, **avec nom de feuille
obligatoire** : `Feuille1!B3`, `Feuille1!$B$3:D10`, `'Données 2'!C4`,
`'L''été'!A1`. Ainsi une feuille déplacée ne change pas le sens d'une
référence. Une plage inversée (`C3:A1`) est normalisée. Sont refusées : une
référence sans nom de feuille, les colonnes ou lignes entières (`A:A`,
`3:3`) et les plages de plus de 10 000 cellules.

DocCells renvoie les références sous forme canonique : sans `$`, nom de
feuille entre apostrophes s'il contient autre chose que lettres, chiffres et
soulignés (`'Données 2'!A1`).

### Valeurs

Une cellule est transmise par sa valeur calculée : nombre (une date est son
numéro de série), texte, booléen, liste (tableau de nombres et de listes,
`[2, [1, 3]]`) ou `null` (vide). Un nombre saisi au
clavier, que FortuneSheet garde sous forme de texte (`v: "3"` avec le type
`n`), est transmis comme un nombre. Une erreur est un objet
`{ error: "#DIV/0!" }` ; la chaîne `"DIV/0"` que FortuneSheet produit pour
une division par zéro est normalisée en `"#DIV/0!"`. Avec `display: true`,
chaque cellule est `{ v, m }`, `m` étant le texte affiché (`"19/11/2026"`,
`"12,50 €"`). Une plage est un tableau de lignes (`[[…], […]]`), même pour
une seule cellule (`[[v]]`).

## 4. Protocole `postMessage`

### 4.1 Messages

Tous les messages portent `doccells: 1`, la version du protocole.

- **Requête** : `{ doccells: 1, id, type, ...paramètres }`. `id` (nombre ou
  chaîne) est renvoyé tel quel. Sans `id`, la requête est traitée sans
  réponse (utile pour `setCellValues` à chaque image).
- **Réponse** : `{ doccells: 1, id, ok: true, result }` ou
  `{ doccells: 1, id, ok: false, error }` (message en anglais).
- **Événement** : `{ doccells: 1, event, ... }`.

### 4.2 Ordre et regroupement

Les requêtes sont traitées une à une dans l'ordre d'arrivée ; un `load` en
cours retarde les suivantes. Le traitement a lieu dans une tâche
(`MessageChannel`), qui s'exécute aussi iframe masquée.

Les `setCellValues` consécutifs arrivés avant leur traitement sont fusionnés :
chacun est validé seul (une requête invalide reçoit son erreur sans empêcher
les autres), puis toutes les écritures sont faites ensemble (pour une même
cellule, la dernière valeur l'emporte). Il en résulte un seul recalcul, un
seul événement `values` par abonnement modifié, puis les réponses, dans
l'ordre, avec le résultat du lot fusionné.

### 4.3 Valeurs avant la réponse

Les événements `values` qui résultent d'une requête partent avant sa
réponse : quand `setCellValues` ou `load` répond, l'hôte a déjà reçu les
valeurs recalculées.

### 4.4 Origine

- DocCells n'accepte que les messages dont la source est sa fenêtre parente
  (`event.source === window.parent`) et qui portent `doccells: 1` ; tout autre
  message est ignoré, sans réponse.
- La première requête acceptée fixe l'origine de l'hôte. Les messages d'une
  autre origine sont ensuite ignorés, et réponses comme événements sont
  envoyés à cette seule origine (`targetOrigin`), jamais à `"*"`.
- `ready`, émis avant toute requête, part avec `"*"` ; il ne contient pas de
  données du classeur.
- Avec `?embed=https://hote.example,…`, seules ces origines sont acceptées et
  `ready` n'est adressé qu'à elles. Une liste illisible n'autorise aucune
  origine.
- L'hôte vérifie de son côté `event.source === iframe.contentWindow`.

Restreindre qui peut afficher DocCells dans une iframe relève du serveur
(`Content-Security-Policy: frame-ancestors`).

## 5. Requêtes

| `type`          | Paramètres                                                 | `result`                                   |
| --------------- | ---------------------------------------------------------- | ------------------------------------------ |
| `load`          | `workbook`, `recalculate` (booléen, `true` par défaut), `hostValues` (`[{ name, v }]`) | `{ sheets: [{ id, name }] }` |
| `save`          | —                                                          | `{ workbook }`                             |
| `setCellValues` | `updates: [{ ref, v }]`                                    | `{ written, recalculated, skipped }`       |
| `getValues`     | `ref`, `display` (booléen)                                 | `{ values }`                               |
| `subscribe`     | `ref`, `display` (booléen)                                 | `{ subscription, ref, values }`            |
| `unsubscribe`   | `subscription`                                             | `null`                                     |
| `setHostValues` | `updates: [{ name, v }]`                                   | `{ recalculated }`                         |
| `hostNames`     | —                                                          | `{ names }`                                |
| `hostDependencies` | `ref`                                                   | `{ names }`                                |

### `load`

Remplace le classeur. `workbook` est une archive au format d'archivage de
DocCells, `{ format: "doccells", version, definedNames, sheets }`, décrit
dans `WORKBOOK_FORMAT.md` : celle que `save` renvoie, de n'importe quelle
version publiée (une archive ancienne est convertie). Un `calcChain` absent
est reconstruit depuis les formules. Les valeurs de l'hôte (section 7) sont
remplacées par `hostValues` (aucune s'il manque) avant le recalcul. Le
classeur est entièrement recalculé (section 8), les
abonnements en cours sont résolus à nouveau par nom de feuille et reçoivent
leurs valeurs (`source: "load"`), puis la réponse part. L'historique
d'annulation repart de zéro. Une archive invalide ou d'une version future
est refusée (`Invalid workbook: …`, `Unsupported workbook version: N`), et le
classeur précédent reste affiché, avec ses valeurs de l'hôte. L'archive fournie n'est pas modifiée
(DocCells en fait une copie).

### `save`

Le classeur courant, archive de la version courante du format d'archivage
(`WORKBOOK_FORMAT.md`), écritures rapides en attente comprises. C'est ce que
l'hôte enregistre durablement. `load(save())` reproduit le classeur à
l'identique (testé).

### `setCellValues`

Chaque mise à jour désigne **une cellule**. `v` est un nombre, un texte, un
booléen, une liste ou `null` (vider la cellule) ; une valeur remplace une formule. Le
chemin est celui de `window.setCellValues` : recalcul des dépendants par
l'index inverse, sans historique d'annulation ni rendu React. Un texte
commençant par `=` est une formule et prend le chemin normal (avec
historique) ; ses effets arrivent ensuite en événements `values`
(`source: "host"`). `skipped` compte les cellules hors de la grille. Une
feuille inconnue ou une référence invalide refuse la requête entière, sans
rien écrire.

### `setHostValues`, `hostNames`, `hostDependencies`

Voir la section 7. Les `setHostValues` consécutifs sont fusionnés comme les
`setCellValues` (section 4.2 ; pour un même nom, la dernière valeur
l'emporte). Une mise à jour invalide (nom qui n'est pas un texte, valeur qui
n'est ni nombre, ni texte, ni booléen, ni liste de nombres finis, ni `null`)
refuse la requête entière
(`Invalid request`), sans rien écrire.

### `subscribe` et `unsubscribe`

`subscribe` renvoie un identifiant, la référence canonique et les valeurs
actuelles. Après chaque recalcul, DocCells compare les valeurs de chaque
abonnement à celles qu'il a envoyées en dernier, et émet `values` pour chaque
abonnement qui a changé (section 6). Un abonnement suit sa feuille : si
l'utilisateur la renomme, il continue, avec la nouvelle référence ; si elle
est supprimée, il reçoit `values: null` et `error: "Unknown sheet: …"`.
Après `load`, il est résolu à nouveau par nom de feuille.

## 6. Événements

| `event`        | Quand                                                                                                                    | Données                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `ready`        | DocCells peut recevoir des requêtes (classeur vide ouvert)                                                                | `{ version }` (date du build)                     |
| `values`       | des cellules d'un abonnement ont changé de valeur                                                                         | `{ subscription, ref, values, source, error? }`   |
| `change`       | l'utilisateur a modifié le contenu du classeur (saisie, collage, mise en forme, annulation, feuille ajoutée…)              | —                                                 |
| `sheetRenamed` | l'utilisateur a renommé une feuille                                                                                       | `{ id, oldName, newName }`                        |
| `sheetDeleted` | l'utilisateur a supprimé une feuille                                                                                      | `{ id, name }`                                    |
| `hostNamesChanged` | les noms lus par les formules `GEO` ont changé (formule saisie, effacée, collée, annulation…)                         | `{ names }`                                       |
| `dialog`       | un dialogue de DocCells ou de FortuneSheet s'est ouvert, ou le dernier ouvert s'est fermé, ou le voile du premier plan a changé | `{ open, veil }` (`veil` avec `open: true`)      |
| `save`         | l'utilisateur a demandé l'enregistrement (Cmd-S / Ctrl-S)                                                                 | —                                                 |

- `source` de `values` vaut `"host"` (écriture de l'hôte), `"user"` (action
  de l'utilisateur) ou `"load"`. Il permet d'ignorer l'écho de ses propres
  écritures et d'éviter une boucle.
- `change` n'est émis ni après `load` ni après les écritures de l'hôte, ni pour
  une sélection, un défilement ou un changement d'onglet. Plusieurs
  modifications dans la même tâche n'en donnent qu'un.
- Après `sheetRenamed` ou `sheetDeleted`, l'hôte met à jour ses propres
  références.
- `hostNamesChanged` n'est pas émis par `load` : après un `load`, l'hôte lit
  `hostNames()`.
- `dialog` : `open: true` quand un premier dialogue s'ouvre, `open: false`
  quand plus aucun ne l'est (deux dialogues ouverts à la suite ne donnent
  pas deux `true`). Sont des dialogues : ceux de DocCells (format des
  nombres, mise en forme conditionnelle, couleurs alternées, liste
  déroulante, graphique, impression, noms définis, « À propos »), les
  dialogues et alertes de FortuneSheet et sa recherche / remplacement ; pas
  les listes ni les menus. Leur voile ne couvre que l'iframe (« À propos »,
  dessiné dans la barre de menus sortie, couvre la page hôte) : l'hôte pose
  le sien sur sa page pendant ce temps.
- `veil`, avec `open: true` : le voile du dialogue au premier plan, en
  valeurs CSS calculées, `{ background, backdropFilter }` (par exemple
  `{ background: "rgba(32, 33, 36, 0.38)", backdropFilter: "none" }`), pour
  que l'hôte donne le même au sien ; `null` si ce dialogue n'a pas de voile
  (recherche / remplacement). Le premier plan est le voile de plus grand
  `z-index` parmi les dialogues ouverts. Tant qu'un dialogue reste ouvert,
  un nouvel événement `{ open: true, veil }` est émis quand ce voile change
  (une alerte de FortuneSheet ouverte par-dessus la recherche, puis
  fermée). `open: false` n'a pas de `veil`. Voiles actuels : la plupart des
  dialogues de DocCells `rgba(32, 33, 36, 0.38)` ; format des nombres
  `rgba(31, 35, 41, 0.48)` avec `blur(2px)` ; noms définis
  `rgba(15, 23, 42, 0.38)` ; « À propos » `rgba(15, 23, 42, 0.35)` ;
  impression `#eef1f4` (opaque) ; dialogues et alertes de FortuneSheet
  `rgba(255, 255, 255, 0.5)`.

### Erreurs

| `error`                    | Cause                                                              |
| -------------------------- | ------------------------------------------------------------------ |
| `Unknown request: …`       | `type` inconnu                                                     |
| `Invalid request`          | paramètre absent ou de mauvais type                                |
| `Invalid reference: …`     | référence illisible, sans nom de feuille, colonne ou ligne entière, plage trop grande, plage là où une cellule est attendue |
| `Unknown sheet: …`         | nom de feuille inconnu                                             |
| `Invalid workbook: …`      | archive refusée par `load` (la cause suit les deux-points)         |
| `Unsupported workbook version: N` | archive d'une version plus récente que celle que connaît DocCells |
| `Unknown subscription: …`  | `unsubscribe` d'un identifiant inconnu ou d'un autre client        |
| `Workbook not ready`       | opération pendant un `load` (accès synchrone)                      |

## 7. Valeurs fournies par l'hôte : `GEO`

Une formule lit une valeur que l'hôte fournit sous un nom :
`=GEO("AB")`. DocCells ne donne aucun sens à ces noms ; l'hôte les
interprète (DocGeo y lit les objets de sa figure).

- Le nom `GEO` est le même dans toutes les langues de DocCells.
- L'argument doit être un texte écrit dans la formule (`GEO("AB")`) ;
  sinon (`GEO(A1)`, `GEO("A"&"B")`, aucun ou deux arguments) : `#VALUE!`.
  Un guillemet doublé dans le nom n'est pas pris en charge (`#VALUE!`).
- Un nom que l'hôte n'a pas fourni, ou fourni avec `null`, ou avec un nombre
  non fini : `#N/A`.
- Une valeur est un nombre, un texte, un booléen ou une liste de nombres
  finis et de listes (DocGeo y donne un point : `[x, y]`). Comme pour toute
  cellule,
  FortuneSheet ne propage pas les erreurs dans un calcul : `GEO("AB")+1`
  vaut `#VALUE!` tant que `AB` n'a pas de valeur.

Opérations (accès synchrone et protocole) :

- `hostNames()` : les noms lus par les formules `GEO` du classeur, triés.
  L'événement `hostNamesChanged` signale qu'ils ont changé à la suite d'une
  action de l'utilisateur ou d'une écriture de formule par l'hôte.
- `setHostValues([{ name, v }])` : enregistre les valeurs, puis recalcule
  par l'index inverse les formules `GEO` qui lisent un nom dont la valeur a
  changé, et tout ce qui en dépend ; un nom inchangé ne recalcule rien. Le
  chemin est celui de `setCellValues` : sans historique d'annulation ni rendu
  React, dessin à l'image suivante, abonnements de ce client renvoyés,
  autres clients en événements `values` (`source: "host"`).
- `hostDependencies(ref)` : les noms dont dépend une cellule ou une plage,
  directement (formule `GEO` dans la plage) ou non (formule qui lit une
  cellule qui en dépend, sur n'importe quelle feuille), triés. Les plages
  calculées (`INDIRECT`, `OFFSET`) y sont suivies comme dans le recalcul de
  FortuneSheet, c'est-à-dire approximativement.

Les valeurs de l'hôte appartiennent au classeur montré : chaque `load` les
remplace (par `hostValues`, sinon par aucune), avant le recalcul complet. Un
hôte qui ne connaît pas encore les noms charge sans `hostValues`, lit
`hostNames()`, puis appelle `setHostValues` : les cellules `GEO` valent
`#N/A` entre les deux. Elles ne sont pas enregistrées dans l'archive : seul
le dernier résultat des formules l'est (`v`), comme pour toute formule.

Un hôte qui lit des cellules dépendant de `GEO` et fournit des valeurs
calculées d'après d'autres cellules doit éviter les cycles lui-même :
DocCells ne voit que ses propres formules.

## 8. Recalcul complet au chargement

FortuneSheet ne recalcule pas les formules à l'ouverture : il affiche les
valeurs enregistrées. `load` recalcule donc toutes les formules dans l'ordre
des dépendances, avec le moteur de DocCells (le recalcul forcé de
FortuneSheet, `execFunctionGroup` avec `isForce`, y est délégué), puis met à
jour les valeurs affichées, sans historique. `recalculate: false` garde les
valeurs enregistrées.

Seul `load` recalcule : `window.setSheetData`, `openExcel` et les `.xlsx`
ouverts par l'utilisateur gardent leurs valeurs (celles d'Excel sont plus
justes quand FortuneSheet ne connaît pas une fonction, comme `INDIRECT`). Les
fonctions volatiles (`NOW`, `TODAY`, `RAND`) sont calculées au chargement,
puis seulement quand une de leurs dépendances change.

Le recalcul forcé du moteur de DocCells est comparé à celui d'origine de
FortuneSheet par `tests/formulaEngine.test.mjs`.

## 9. Iframe masquée et dessin

DocCells considère sa fenêtre comme masquée quand :

- `document.visibilityState === "hidden"` (onglet du navigateur) ;
- sa largeur ou sa hauteur est nulle (iframe **chargée** dans un ancêtre en
  `display: none`) ;
- un `IntersectionObserver` la voit hors de l'affichage (iframe masquée
  **après** son chargement : Chrome lui garde alors sa taille et n'émet aucun
  `resize` ; iframe sortie de la zone visible de la page hôte).

Masquée, elle continue de recalculer, de répondre et d'émettre `values` (une
figure visible peut lire une plage d'une feuille non affichée), mais aucun
dessin n'a lieu, ni ceux de DocCells ni ceux que FortuneSheet déclenche
lui-même (montage, chargement) : une garde (`__doccellsSetDrawGate`,
`scripts/patch-fortune-live-update.cjs`) les saute. Au retour, un seul dessin
est fait. Pour une iframe chargée masquée, FortuneSheet recalcule sa mise en
page au premier affichage, ce qui donne quelques dessins de plus (3 mesurés).

Visible, les écritures rapides sont dessinées à l'image suivante, une fois
quel que soit leur nombre (10 écritures dans une image : 1 dessin).

La barre de formule, que FortuneSheet ne relit qu'à un changement de
sélection, est remise à jour à la resynchronisation qui suit une rafale
d'écritures (300 ms après la dernière), sauf pendant une saisie dans la
barre ou dans une cellule.

## 10. Attentes d'une image

`requestAnimationFrame` est suspendu dans une iframe masquée. Les attentes
qui sont sur le chemin d'une requête ont donc été retirées :

- `resetWorkbook` (chaque `load`, `setSheetData`, `openExcel`) applique le
  vidage du classeur et le remontage du Workbook avec `flushSync`, sans
  attendre d'image. Les attentes de `whenDocCellsReady` en cours ne sont
  plus abandonnées : elles sont résolues quand le classeur suivant est prêt.
- La synchronisation de la mise en forme conditionnelle attend l'image
  suivante si la fenêtre est visible, la tâche suivante sinon.

## 11. Format d'enregistrement

`save` et `load` utilisent le format d'archivage de DocCells, décrit champ
par champ dans `WORKBOOK_FORMAT.md` : enveloppe versionnée, lecture garantie
de toutes les versions publiées, un fichier d'exemple par version
(`tests/fixtures/workbook-v<N>.json`) chargé par les tests.

Pourquoi pas le `.xlsx` : sur trois classeurs réels, l'aller-retour par le
JSON ne perdait rien, alors que l'aller-retour par le `.xlsx` changeait des
milliers de détails (valeurs par défaut rendues explicites, texte enrichi
aplati, repères internes perdus, éléments propres à DocCells rangés dans une
feuille cachée). Le `.xlsx` reste disponible pour l'export et l'échange
(`window.getExcelAsBase64`).

## 12. Tests et mesures

- `tests/embed.test.mjs` (Node) : références, valeurs et erreurs, nombre
  saisi au clavier, cœur sur un vrai contexte FortuneSheet (deux clients,
  valeurs renvoyées ou émises, écritures refusées, feuilles renommées et
  supprimées, `change`), `GEO` (valeurs, `#N/A`, `#VALUE!`, `hostNames`,
  `hostDependencies` directes et indirectes, `hostNamesChanged`).
- `tests/formulaEngine.test.mjs` : recalcul forcé comparé à celui d'origine.
- `tests/workbookArchive.test.mjs` : format d'archivage (exemples de chaque
  version, archives refusées, accord entre `WORKBOOK_FORMAT.md` et le code).
- `tests/browser/embedMode.browser.mjs` (Playwright, sans serveur ni port ;
  mode d'emploi en tête du fichier), avec un hôte d'une autre origine et un
  hôte de même origine (44 vérifications) :
  - `ready`, menus sans Fichier, `load` avec recalcul, `display` ;
  - `values` avant la réponse, rafale de 20 `setCellValues` fusionnée,
    erreurs ;
  - saisie de l'utilisateur (`values` puis `change`), Ctrl-S, feuille
    renommée puis supprimée par l'interface, `load(save())` ;
  - messages d'une autre fenêtre ignorés, origine non autorisée
    (`?embed=…`) ;
  - accès synchrone, iframe masquée après chargement et iframe chargée
    masquée, un seul dessin par image, barre de formule après une rafale ;
  - exemple v1 du format d'archivage rechargé à l'identique en français,
    mêmes valeurs et formules en anglais, champs de feuille tous décrits,
    version future refusée ;
  - `?lang=fr` ; `GEO` par le protocole (`hostNames`, `setHostValues` avant
    la réponse, rafale fusionnée, `hostDependencies`, formule `GEO` saisie au
    clavier : `hostNamesChanged`, `load` avec `hostValues`) et par l'accès
    synchrone ; nombre saisi au clavier transmis comme un nombre ;
  - archive piégée (WORKBOOK_FORMAT.md, « Archives d'origine inconnue ») :
    aucun script exécuté en sélectionnant, éditant et copiant ses cellules,
    textes affichés tels quels, image d'une autre adresse retirée.
- `tests/browser/chromePortal.browser.mjs` (Playwright, sans serveur ni port,
  page hôte de même origine avec des bandes de 32 et 48 px, 37
  vérifications) : barres sorties identiques à celles de l'iframe, hauteurs
  imposées et contenu centré, feuille de style partagée, taille du texte des
  menus donnée par l'hôte (13 px, puis 11 px, et 15 px de retour dans
  l'iframe) ; boutons, listes et palettes, Gras pendant une saisie,
  fermeture des menus par un clic n'importe où, dialogues et événement
  `dialog` avec son voile (accès synchrone et protocole), raccourcis, `unmountChrome` puis `mountChrome`, « More »
  quand la bande change de largeur ou quand les barres ont été montées dans
  une bande masquée, listes et sous-menus près du bord droit, info-bulles,
  navigation au clavier, `mode=student`, `&singleSheet`.
- `embed_test.html` (racine, hors build) : page d'essai manuel avec
  `npm run dev` (curseur qui écrit `Feuille1!A1` à chaque image).

Mesures (Chrome headless, 300 formules dépendantes de la cellule écrite) :

- accès synchrone `setCellValues` : environ 1,3 ms (recalcul ; le dessin, environ
  2 ms, a lieu à l'image suivante) ;
- accès synchrone `setHostValues` : environ 1,1 ms (une formule `GEO` dont
  dépendent les 300 formules) ;
- `postMessage`, hôte d'une autre origine : environ 5,6 ms entre l'envoi de
  `setCellValues` et la réception de `values`.

## 13. Exemple (`postMessage`)

```js
const iframe = document.querySelector("iframe");
let nextId = 0;
const pending = new Map();

window.addEventListener("message", ({ source, data }) => {
  if (source !== iframe.contentWindow || data?.doccells !== 1) return;
  if (data.event === "ready") start();
  else if (data.event === "values") onValues(data);
  else if (data.event) onEvent(data);
  else {
    const { resolve, reject } = pending.get(data.id);
    pending.delete(data.id);
    data.ok ? resolve(data.result) : reject(new Error(data.error));
  }
});

const request = (type, parameters = {}) =>
  new Promise((resolve, reject) => {
    pending.set(++nextId, { resolve, reject });
    iframe.contentWindow.postMessage({ doccells: 1, id: nextId, type, ...parameters }, "*");
  });

async function start() {
  // storedWorkbook : ce que save a renvoyé, { format: "doccells", version, … }
  await request("load", { workbook: storedWorkbook });
  await request("subscribe", { ref: "Feuille1!B2:B21" });
}

// À chaque image d'un glissement, sans attendre de réponse :
function onDrag(x) {
  iframe.contentWindow.postMessage(
    { doccells: 1, type: "setCellValues", updates: [{ ref: "Feuille1!A1", v: x }] },
    "*",
  );
}
```

## 14. Barres dans la page hôte

Un hôte de **même origine** peut faire dessiner la barre de menus et la barre
de boutons de DocCells dans sa propre page, à la place des siennes, par
l'accès synchrone (un élément de la page ne passe pas par `postMessage`) :

```js
const docCells = iframe.contentWindow.docCells;
docCells.mountChrome({
  menus: document.getElementById("menus"), // par exemple 32 px de haut
  toolbar: document.getElementById("toolbar"), // par exemple 48 px de haut
});
docCells.on("dialog", ({ open, veil: v }) => {
  veil.hidden = !open;
  veil.style.background = v?.background ?? "transparent";
  veil.style.backdropFilter = v?.backdropFilter ?? "none";
});
// …
docCells.unmountChrome(); // les barres reviennent dans l'iframe
```

- **`mountChrome({ menus, toolbar })`** : deux éléments distincts de la page
  hôte. Chacun reçoit un shadow root ouvert (créé s'il n'existe pas, vidé
  sinon), où DocCells dessine sa barre, vivante : c'est le même composant
  React, par un portail, et non une copie. Les barres quittent l'iframe,
  dont la grille remonte en haut. Un second appel déplace les barres dans
  les nouveaux éléments. Éléments absents ou identiques : `Invalid request`.
  En `mode=student`, il n'y a pas de barres : rien n'est monté, et la
  méthode renvoie `false`.
- **`unmountChrome()`** : rend les barres à l'iframe et vide les shadow
  roots. Le classeur, la sélection et l'annulation sont gardés, mais
  FortuneSheet recrée sa barre de boutons (une couleur personnalisée
  choisie repart de zéro) : pour cacher et remontrer les barres souvent,
  l'hôte cache ses éléments plutôt que d'appeler `unmountChrome`.
- **Hauteur** : chaque barre prend la hauteur de l'élément reçu, contenu
  centré verticalement : c'est l'hôte qui fixe cette hauteur (dans
  l'iframe, les barres font 37 et 41 px ; 32 et 48 px sont vérifiés par les
  tests).
- **Taille du texte** : la barre de menus prend la taille du texte de
  l'élément `menus` (sa valeur calculée, donc héritée de la page hôte s'il
  n'en a pas), pour ses boutons, leurs listes, leurs sous-menus et les
  raccourcis affichés ; elle suit ses changements. Dans l'iframe, et dans
  DocCells seul, les menus gardent leurs tailles (boutons 15 px, listes
  14 px). La barre de boutons garde les siennes.
- **Police** : de même, la barre de menus prend la famille de police de
  l'élément `menus` (boutons, listes, sous-menus, raccourcis). Dans
  l'iframe : `Inter, Roboto, Arial, Helvetica, sans-serif`. La barre de
  boutons et « À propos » gardent la leur.
- **Apparence des menus** : l'hôte peut donner, sur l'élément `menus` (ou
  un de ses ancêtres), des propriétés CSS personnalisées que la barre de
  menus lit à travers le shadow root. Absente, chacune garde la valeur de
  DocCells ; dans l'iframe, rien ne change. Les longueurs ont une unité
  (`0px` et non `0`).

  | Propriété | Effet | DocCells |
  | --- | --- | --- |
  | `--dc-menu-color` | couleur du texte des titres et des listes | `#202124` |
  | `--dc-menu-title-radius` | arrondi d'un titre de menu (survol, menu ouvert) | `4px` |
  | `--dc-menu-list-offset` | écart entre le bas du titre et sa liste | `1px` |
  | `--dc-menu-list-padding` | marge intérieure de la liste, tout autour | `8px` en haut et en bas, `0px` sur les côtés |
  | `--dc-menu-list-min-width` | largeur minimale d'une liste | `288px` |
  | `--dc-menu-list-border` | bord d'une liste (forme courte de `border`) | `1px solid #dadce0` |
  | `--dc-menu-list-shadow` | ombre d'une liste | `0 14px 28px rgba(60, 64, 67, 0.22), 0 2px 8px rgba(60, 64, 67, 0.12)` |
  | `--dc-menu-item-height` | hauteur minimale d'une ligne | `38px` |
  | `--dc-menu-item-padding` | marge intérieure d'une ligne | `0 12px 0 14px` |
  | `--dc-menu-item-radius` | arrondi d'une ligne | `0` |
  | `--dc-menu-item-hover-background` | fond d'une ligne survolée (ou dont le sous-menu est ouvert) | `#f1f3f4` |
  | `--dc-menu-item-hover-color` | texte, icône, raccourci et chevron d'une ligne survolée | leurs couleurs |
  | `--dc-menu-icon-size` | côté des icônes, et largeur de leur colonne | `22px` |
  | `--dc-menu-disabled-opacity` | opacité d'une ligne désactivée | `0.4` |
  | `--dc-menu-shortcut-opacity` | opacité des raccourcis et des chevrons (couleur du texte) | `0.45` |
  | `--dc-menu-divider-margin` | marges d'un séparateur | `8px 0` |

  Les raccourcis, chevrons et icônes d'une ligne désactivée prennent la
  couleur de son texte : ils restent lisibles sur un fond de survol foncé
  (texte blanc). Une ligne désactivée n'a pas de fond au survol. Par
  exemple, pour des menus comme ceux de DocGeo :

  ```css
  #menus {
    --dc-menu-color: #1f2937;
    --dc-menu-title-radius: 6px;
    --dc-menu-list-padding: 4px;
    --dc-menu-list-min-width: 220px;
    --dc-menu-list-border: 1px solid #d1d5db;
    --dc-menu-list-shadow: 0 6px 20px rgb(0 0 0 / 0.14);
    --dc-menu-item-height: 32px;
    --dc-menu-item-padding: 6px 12px 6px 4px;
    --dc-menu-item-radius: 5px;
    --dc-menu-item-hover-background: #2563eb;
    --dc-menu-item-hover-color: #fff;
    --dc-menu-icon-size: 18px;
    --dc-menu-shortcut-opacity: 0.6;
    --dc-menu-divider-margin: 4px 8px;
  }
  ```
- **Largeur** : la barre de boutons suit la largeur de son élément ; ce qui
  n'y tient pas va dans « More », recalculé à chaque changement de largeur,
  y compris quand les barres ont été montées dans un élément masqué.
- **Styles** : une seule feuille, construite dans le document hôte avec
  toutes les règles de DocCells, adoptée par les deux shadow roots
  (`adoptedStyleSheets`) ; refaite à chaque `mountChrome`. Les styles de
  l'hôte n'atteignent pas les barres, ni ceux des barres la page hôte.
- **Focus** : un clic dans la barre de boutons (hors champ de saisie) ne
  prend pas le focus : une saisie en cours dans une cellule continue, et le
  Gras s'y applique. La barre de menus et la barre de boutons se parcourent
  au clavier (Tab) depuis la page hôte ; Entrée ouvre un menu, Échap le
  ferme.
- **Fermeture** : un menu, une liste ou une palette ouverts se ferment sur un
  clic ailleurs, dans l'iframe comme dans la page hôte, et sur Échap.
- **Listes et sous-menus** sont dessinés sous leur bouton, dans la page hôte,
  au-dessus de l'iframe, et ramenés à gauche près du bord droit de la
  fenêtre hôte. Les dialogues ouverts depuis les barres s'ouvrent dans
  l'iframe (sauf « À propos ») : voir l'événement `dialog` (section 6).

La barre de boutons de FortuneSheet est sortie par un correctif de son
bundle, appliqué à l'installation (`scripts/patch-fortune-chrome-portal.cjs`,
dans `postinstall`).
