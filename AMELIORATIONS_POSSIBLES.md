# Pistes d'amélioration DocCells — rivaliser avec Google Sheets (hors partage/cloud)

Diagnostic basé sur l'état actuel du code (menus, toolbar, moteur de formules,
persistance), par ordre d'impact.

## 1. Persistance locale et enregistrement — socle en place

L'**autosauvegarde locale dans IndexedDB** et l'**enregistrement en place**
sont désormais implémentés. Après une modification réelle du classeur, son
état complet est enregistré de manière débouncée. Au prochain démarrage
autonome, le splash screen propose de restaurer la session récupérable.

Dans les navigateurs qui exposent la File System Access API, DocCells propose
**Ouvrir**, **Enregistrer** et **Enregistrer sous**. Le fichier courant est
réécrit directement par Ctrl+S après le premier choix d'un emplacement. Dans
les autres navigateurs, le repli reste **Ouvrir / Exporter**.

Le mode autonome possède maintenant une véritable identité de document :
« Sans titre » pour un nouveau classeur, nom du fichier après ouverture ou
enregistrement, indicateur de modifications non enregistrées dans la barre de
menus et dans le titre de l'onglet.

La persistance tient compte des principaux cas limites :

- aucun instantané n'est créé pour le simple chargement initial d'un fichier ;
- les classeurs réellement vides ne déclenchent pas de proposition ;
- un enregistrement ou export réussi marque la session comme enregistrée et
  supprime l'instantané, jusqu'à la prochaine modification ;
- l'autosauvegarde, la restauration, l'enregistrement natif, l'identité du
  document et l'interception de Ctrl+S sont désactivés lorsque DocCells est
  embarqué dans une iframe ;
- les données propres à DocCells, notamment les graphiques et le formatage
  conditionnel, sont conservées.

La persistance locale comprend désormais :

- **Liste de fichiers récents** : jusqu'à dix handles sont conservés dans
  IndexedDB et accessibles depuis `Fichier > Ouvrir un fichier récent`.
  DocCells redemande l'autorisation d'accès si nécessaire, retire les fichiers
  disparus de la liste et permet de l'effacer sans supprimer les fichiers.

## 2. Validations de données — premier socle en place

Les deux validations de données les plus courantes sont désormais accessibles
depuis le menu **Insertion** :

- **Cases à cocher** : affichage dédié sans texte `TRUE`/`FALSE`, valeur
  booléenne exploitable par les formules et recalcul immédiat lors d'un clic ;
- **Listes déroulantes** : options saisies manuellement ou lues depuis une
  plage, pastille interactive dans chaque cellule et ouverture dès le premier
  clic ;
- insertion sur une plage entière, suppression avec la touche d'effacement et
  prise en charge de l'annulation/rétablissement ;
- interface et messages d'erreur traduits dans toutes les langues prises en
  charge par DocCells ;
- import/export XLSX des booléens et des validations, avec prise en charge des
  cases à cocher natives d'Excel et de la sémantique Excel des références de
  plage relatives, mixtes ou absolues (`A1:A10`, `A$1:A$10`, etc.).

L'interopérabilité reste nécessairement limitée par le format produit par
l'application source : un export XLSX de Google Sheets transforme notamment
ses cases à cocher en simples booléens, information que DocCells, comme Excel,
ne peut pas reconstruire avec certitude.

Pour aller plus loin, il reste à proposer les autres règles de validation
(nombres, dates, texte, formule personnalisée), l'édition d'une règle
existante et le choix du comportement face à une valeur invalide.

Le cœur `@fortune-sheet/core` embarque aussi **commentaires de cellules** et
**liens hypertexte**, qui ne sont pas encore exposés par DocCells. De même,
**Rechercher et remplacer** (Ctrl+F / Ctrl+H) reste une fonction indispensable
absente des menus.

## 3. Le moteur de formules

Les fonctions viennent de `@formulajs/formulajs`
(`node_modules/@fortune-sheet/formula-parser/lib/supported-formulas.js`).
Base correcte (~400 fonctions), mais il manque ce qui définit un tableur
moderne en 2026 :

- **XLOOKUP**, et surtout les **tableaux dynamiques** : FILTER, SORT, UNIQUE,
  SEQUENCE, avec propagation (« spill ») des résultats sur plusieurs cellules ;
- LET / LAMBDA, TEXTSPLIT/TEXTJOIN, etc.

Le spill est un gros chantier (il touche le moteur de recalcul), mais
XLOOKUP, TEXTJOIN et consorts en version « une cellule » sont ajoutables sans
refonte. À plus long terme, c'est le chantier qui pèse le plus sur la
crédibilité « rivaliser avec Sheets ».

## 4. Outils de données

- **Tableaux croisés dynamiques** : le plus gros manque fonctionnel pour
  l'analyse de données. Chantier lourd, mais c'est ce qui fait passer un
  tableur de « saisie » à « analyse ».
- **Import/export CSV et TSV** (avec détection du séparateur — important en
  locale fr où le CSV utilise `;`). Aujourd'hui seul le `.xlsx` passe.
- Utilitaires de nettoyage : **supprimer les doublons**, **scinder le texte
  en colonnes**, supprimer les espaces.
- **Plages nommées** (utilisables dans les formules).
- **Groupement de lignes/colonnes** (plan).

## 5. Impression et export PDF

Sheets a un vrai module d'impression (zone d'impression, échelle, en-têtes
répétés). La grille FortuneSheet étant rendue en canvas, `window.print()` ne
donne rien d'utilisable — il faudrait un rendu d'impression dédié (HTML ou
PDF généré, par exemple avec la plage visible/sélectionnée). Même un export
PDF basique serait un plus net.

## 6. Faire de l'absence de cloud une force : PWA

Le point qui colle le mieux à la philosophie du projet. En faisant de
DocCells une **PWA installable** :

- fonctionnement 100 % hors-ligne (service worker) — l'anti-Sheets assumé ;
- **enregistrement comme gestionnaire de fichiers** (`file_handlers` dans le
  manifest) : double-cliquer un `.xlsx` ouvre DocCells ;
- icône, fenêtre dédiée, expérience « application » sans Electron.

## 7. Confort et finitions

- **Graphiques** : barres/courbe/nuage/secteurs et **sparklines** en cellule
  existent déjà ; la syntaxe des sparklines est décrite dans
  [documentation SPARKLINE](public/sparkline/fr.html). Il manque encore les aires, histogrammes
  empilés et graphiques combinés.
- **Raccourcis clavier** : vérifier la parité avec Sheets (Ctrl+;,
  Alt+Maj+flèches pour les bordures, Ctrl+Maj+V collage valeurs…) et les
  documenter dans un panneau d'aide.
- **Mode sombre**.
- **Performance sur gros fichiers** : import xlsx et recalcul dans un Web
  Worker pour ne jamais bloquer l'interface (le per-edit est déjà optimisé ;
  le chargement initial d'un gros classeur est l'autre point chaud).

## Priorisation recommandée

Trois chantiers en priorité :

1. **Exposer commentaires, liens et rechercher/remplacer**, puis enrichir les
   validations de données au-delà des cases à cocher et listes déroulantes.
2. **Import/export CSV**.
3. **PWA installable et hors ligne** — prolongement naturel du positionnement
   local, sans cloud, de DocCells.

Les tableaux croisés dynamiques et les tableaux dynamiques
(FILTER/SORT/UNIQUE) sont les deux gros chantiers de fond à planifier
ensuite.
