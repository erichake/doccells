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
visibilité et dessin `visibility.js`, activation `embedMode.js`) ;
valeurs de l'hôte et fonction `GEO` : `src/features/recalc/hostValues.js`.

## 1. Activation et interface

```html
<iframe src="apps/doccells/index.html?embed" style="border: 0"></iframe>
```

`?embed` n'a d'effet que dans une iframe. Il se combine avec `?mode=student`
et `?lang=`. `?embed=https://hote.example` (plusieurs origines séparées par
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
- aucun dessin n'a lieu tant que l'iframe est masquée (section 9).

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
numéro de série), texte, booléen ou `null` (vide). Un nombre saisi au
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
booléen ou `null` (vider la cellule) ; une valeur remplace une formule. Le
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
n'est ni nombre, ni texte, ni booléen, ni `null`) refuse la requête entière
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
- Une valeur est un nombre, un texte ou un booléen. Comme pour toute cellule,
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
