=== groups | Premiers pas | Saisir et calculer | Présenter | Exploiter | Diffuser | Référence

=== categories | Fonction | Description et exemple | Mathématiques | Trigonométrie | Logique | Statistique | Lois de probabilité et tests | Recherche et listes | Texte | Dates et heures | Finance | Bases de numération, unités, fonctions spéciales | Nombres complexes en texte | Information

=== index | Accueil
# Manuel d’utilisation du logiciel DocCells

> DocCells est un tableur multilingue qui s’utilise dans le navigateur, sans installation ni compte. Il ouvre et enregistre les classeurs Excel (.xlsx).

<div class="buttons"><a href="../../index.html?lang=fr">Ouvrir DocCells</a></div>

![La fenêtre de DocCells : menus, boutons, barre de formule, un tableau de notes mis en forme et un graphique](interface.webp 1280x760)

## L’essentiel en six gestes

| Pour | Faire |
| --- | --- |
| Saisir | cliquer une cellule, taper, [[Enter]] ([saisir des données](saisie.html)) |
| Calculer | taper `=` puis la formule : `=AVERAGE(B2:B6)` ([les formules](formules.html)) |
| Recopier une formule | tirer la poignée bleue de la sélection, ou [[Ctrl+D]] ([recopier](selection.html#recopier)) |
| Présenter | menu **%format%**, ou les boutons ([mise en forme](mise-en-forme.html)) |
| Tracer | sélectionner les données, {chart} ([graphiques](graphiques.html)) |
| Enregistrer | [[Ctrl+S]] : un fichier Excel ([ouvrir et enregistrer](demarrage.html)) |

## Sommaire

- [Ouvrir et enregistrer](demarrage.html) : fichiers, récents, récupération, Google Sheets, langue.
- [L’interface](interface.html) : menus, boutons, barre de formule, onglets, zoom.
- [Saisir des données](saisie.html), [sélectionner, copier, recopier](selection.html).
- [Les formules](formules.html), [listes et complexes](listes.html), [plages nommées](noms.html), [les feuilles](feuilles.html).
- [Formats de nombre](nombres.html), [mise en forme](mise-en-forme.html), [formatage conditionnel](conditionnelle.html), [lignes et colonnes](lignes-colonnes.html).
- [Trier, filtrer, rechercher](tri-filtre.html), [cases, listes et calendrier](controles.html), [graphiques et sparklines](graphiques.html), [images et liens](images-liens.html), [imprimer](impression.html).
- [Protéger](protection.html) un classeur pour des élèves, [le partager et l’intégrer](partager.html), l’utiliser [avec DocGeo](docgeo.html).
- Référence : [les %functions% fonctions](fonctions.html), [raccourcis](raccourcis.html), [compatibilité Excel](excel.html), [questions fréquentes](faq.html).

## Conventions

- Les boutons sont désignés par leur icône ({bold} gras).
- [[Ctrl]] s’entend [[⌘]] sur Mac.
- Les formules sont écrites en français : noms de fonctions français, virgule décimale, point-virgule entre les arguments. DocCells les affiche dans la langue de l’interface.
- Recherche dans le manuel : [[/]] ou [[Ctrl+K]]. Les mots tapés peuvent être dans n’importe quel ordre, sans accents ; un nom de fonction, français ou anglais, mène à sa ligne.

=== demarrage
# Ouvrir et enregistrer

## Commencer {#nouveau}

DocCells s’ouvre sur un classeur vide, d’une feuille. Pour repartir d’un classeur vide, recharger la page ou ouvrir DocCells dans un autre onglet du navigateur.

## Ouvrir un classeur {#ouvrir}

| Moyen | Effet |
| --- | --- |
| {open}, **%file% › %open%**, [[Ctrl+O]] | choisir un fichier `.xlsx` de l’ordinateur |
| Glisser le fichier sur la page | un voile indique où le déposer ; le classeur remplace celui qui était ouvert |
| **%file% › %openRecent%** | les dix derniers fichiers ouverts ou enregistrés (Chrome et Edge) |
| Un lien `?url=…` | un classeur en ligne ou un Google Sheet ([partager](partager.html#url)) |

Le seul format lu est Excel `.xlsx`. Les anciens `.xls`, les `.ods` et les `.csv` sont à convertir d’abord. Ce qui est repris d’un fichier Excel est décrit dans [Compatibilité Excel](excel.html).

warn: Ouvrir un classeur remplace celui qui est affiché : enregistrer d’abord ses modifications.

### Fichiers récents {#recents}

Le navigateur peut redemander l’autorisation de lire le fichier. Un fichier déplacé, renommé ou supprimé depuis est retiré de la liste. **%clearRecentFiles%** la vide. La liste reste dans ce navigateur, sur cet ordinateur.

## Enregistrer {#enregistrer}

### Chrome et Edge

| Commande | Effet |
| --- | --- |
| {save}, **%file% › %save%**, [[Ctrl+S]] | la première fois, demande où ranger le fichier ; ensuite, le remplace sans rien demander |
| **%file% › %saveAs%** | choisir un autre fichier |

Un fichier ouvert par {open}, par la liste des récents ou déposé sur la page est réenregistré à sa place ; le navigateur demande une fois l’autorisation de le modifier.

Le nom du classeur est au bout de la barre de menus. Une pastille rouge signale des modifications non enregistrées ; le titre de l’onglet du navigateur commence alors par ●.

### Firefox, Safari

Ces navigateurs ne permettent pas d’écrire dans un fichier. **%file% › %export%** ou [[Ctrl+S]] télécharge le classeur, sous le nom du classeur ouvert.

## Récupérer un classeur non enregistré {#recuperer}

Tant qu’il y a des modifications non enregistrées, DocCells en garde une copie dans le navigateur, mise à jour moins d’une seconde après chaque modification. Si la page se ferme sans enregistrement, l’ouverture suivante de DocCells propose, avec la date de la copie, de la restaurer (**%restore%**) ou non (**%ignore%**).

- Enregistrer, exporter ou ouvrir un autre classeur efface cette copie.
- Ignorer la copie la supprime définitivement.
- La copie n’est faite que lorsque DocCells occupe toute la page, pas quand il est intégré à une autre.

## Langue {#langue}

DocCells prend la langue du navigateur parmi les douze de son interface : allemand, anglais, chinois simplifié et traditionnel, espagnol, français, grec, hindi, italien, néerlandais, portugais, russe. L’anglais est pris pour les autres. `?lang=fr` dans l’adresse impose une langue.

La langue change les menus, les noms de fonctions, le séparateur décimal, le symbole monétaire et l’ordre des dates à l’affichage. Le fichier enregistré n’en dépend pas : un classeur écrit en français s’ouvre en allemand avec ses formules en allemand.

=== interface
# L’interface

![La fenêtre de DocCells](interface.webp 1280x760)

De haut en bas : la barre de menus, la barre de boutons, la barre de formule, la feuille, les onglets de feuilles et le zoom.

## Les menus {#menus}

| Menu | Contenu |
| --- | --- |
| **%file%** | [ouvrir, enregistrer](demarrage.html), [imprimer](impression.html) |
| **%edit%** | annuler, refaire, [recopier vers le bas, à droite](selection.html#recopier) |
| **%view%** | [quadrillage](mise-en-forme.html#quadrillage), [figer](lignes-colonnes.html#figer) |
| **%insert%** | [image](images-liens.html), [graphique](graphiques.html), [case à cocher, liste déroulante](controles.html) |
| **%format%** | [nombre](nombres.html), [texte, alignement, fusion](mise-en-forme.html), [couleurs alternées](mise-en-forme.html#alternees), [formatage conditionnel](conditionnelle.html) |
| **%data%** | [trier et filtrer](tri-filtre.html) |
| **%tools%** | [protéger](protection.html), ce manuel (**%manual%**), DocTools, code source, version (**%about%**) |

Une coche marque une option active : quadrillage affiché, cellules figées, gras, filtre, classeur protégé.

![Le menu Format et les formats de nombre](menus.webp 1280x620)

## La barre de boutons {#boutons}

| Bouton | Rôle |
| --- | --- |
| {open} {save} | [ouvrir, enregistrer](demarrage.html) |
| {gridlines} | afficher ou masquer le [quadrillage](mise-en-forme.html#quadrillage) |
| {alternating} | [couleurs alternées](mise-en-forme.html#alternees) |
| {conditional} | [formatage conditionnel](conditionnelle.html) |
| {protect} | [protéger](protection.html) ; bleuté quand le classeur est protégé |
| {chart} | [insérer un graphique](graphiques.html) |
| {image} | [insérer une image](images-liens.html) |
| {undo} {redo} | annuler, refaire |
| {clear-format} | effacer la mise en forme |
| {percentage-format} {number-decrease} {number-increase} | [pourcentage, moins ou plus de décimales](nombres.html) |
| **%fGeneral%**, **Arial**, **10** | format de nombre, police, taille |
| {bold} {italic} {underline} | gras, italique, souligné |
| {font-color} {background} | couleur du texte, du fond |
| {border-all} {merge-all} | [bordures, fusion](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | alignements, rotation, renvoi à la ligne |
| {freeze-row-col} | [figer](lignes-colonnes.html#figer) |
| {formula-sum} | [somme automatique](formules.html#somme) et autres formules |
| {filter} | [trier et filtrer](tri-filtre.html) |

La petite flèche d’un bouton ouvre ses choix ; le bouton lui-même refait le dernier. Dans une fenêtre étroite, les derniers boutons sont derrière {more}.

## La barre de formule {#barre}

- À gauche, la **zone de nom** : l’adresse de la sélection, ou le [nom de la plage](noms.html). Sa flèche liste les plages nommées et ouvre le gestionnaire de noms.
- À droite de *fx*, le contenu de la cellule, formule comprise : on peut l’y modifier.

## La feuille {#feuille}

- Le clic droit ouvre un menu selon l’endroit : cellule, en-tête de colonne ou de ligne, onglet de feuille.
- La feuille de départ a 84 lignes et 60 colonnes (A à BH). On en ajoute par le clic droit, **%insertCells%** ([lignes et colonnes](lignes-colonnes.html)).
- La poignée bleue au coin de la sélection [recopie](selection.html#recopier).

## Onglets et zoom {#zoom}

En bas, {plus} ajoute une feuille, {all-sheets} les liste toutes ([les feuilles](feuilles.html)). À droite, **−** et **+** règlent le zoom ; un clic sur le pourcentage propose 10 % à 400 %.

## Annuler {#annuler}

{undo} ou [[Ctrl+Z]] annule, {redo}, [[Ctrl+Y]] ou [[Ctrl+Shift+Z]] refait : saisies, collages, mises en forme, insertions. L’historique repart de zéro quand on ouvre un classeur, qu’on l’affiche sans quadrillage, qu’on le protège, ou qu’on y ajoute un nom ou une règle de formatage conditionnel. Les graphiques ne passent pas par lui : on les [modifie ou supprime](graphiques.html#modifier) par leurs boutons.

=== saisie
# Saisir des données

## Écrire dans une cellule {#ecrire}

| Action | Effet |
| --- | --- |
| taper sur une cellule sélectionnée | remplace son contenu |
| double clic, [[F2]] ou [[Enter]] | modifie son contenu |
| [[Enter]] | valide et descend d’une cellule |
| clic dans une autre cellule | valide |
| [[Esc]] | abandonne la saisie |
| [[Alt+Enter]] | va à la ligne dans la cellule |
| [[Delete]] ou [[⌫]] | vide les cellules sélectionnées, cases et listes déroulantes comprises ; leur mise en forme reste |
| clic droit › **%clearContent%** | de même |

Pendant une saisie, les flèches déplacent le curseur dans le texte. Hors saisie, les flèches, [[Tab]] et [[Shift+Tab]] changent de cellule.

## Ce que DocCells reconnaît {#types}

| On tape | On obtient |
| --- | --- |
| `12`, `-3`, `1e5` | un nombre, aligné à droite |
| `n:2.5` | un nombre décimal ; la virgule est le séparateur français |
| `n:1,234.5` | le nombre 1234,5 ; pour garder l’espace à l’affichage, choisir un [format](nombres.html) |
| `25%`, `n:2.5%` | un pourcentage |
| `2026-11-25`, `2026/11/25` | une date |
| `2026-11-25 14:30` | une date et une heure |
| `TRUE`, `FALSE` | une valeur logique |
| `n:[2, 1]` | une [liste](listes.html) |
| `=A1+B1` | une [formule](formules.html) |
| toute autre chose | un texte, aligné à gauche |

### Dates {#dates}

Une date se tape année d’abord : `2026-11-25`. `25/11/2026` reste un texte, avec lequel on ne calcule pas. Pour l’afficher à la française, choisir **%format% › %number% › %fDate%** (`%xDate%`) ou un [format personnalisé](nombres.html#personnalise).

Un double clic sur une cellule de date ouvre un [calendrier](controles.html#calendrier). `=TODAY()` donne la date du jour.

### Textes faits de chiffres {#textes}

Un numéro qui commence par zéro perd ce zéro : `007` devient 7. Pour le garder, donner d’abord le format **%text%** aux cellules (**%format% › %number% › %text%**), ou commencer par une apostrophe : `'007`.

## Les erreurs de saisie courantes {#erreurs}

| On voit | Cause |
| --- | --- |
| un nombre aligné à gauche | c’est un texte : un point décimal tapé là où il faut une virgule, une unité (`12 €`), une espace en trop |
| `46351` au lieu d’une date | une date au format **%fGeneral%** : lui donner le format **%fDate%** |
| le texte coupé par la cellule voisine | élargir la [colonne](lignes-colonnes.html#taille), ou choisir **%wrap%** |

Pour une unité, saisir le nombre seul et lui donner un [format](nombres.html) : monnaie, ou personnalisé comme `c:0.00 "m"`.

=== selection
# Sélectionner, copier, recopier

## Sélectionner {#selectionner}

| Action | Sélection |
| --- | --- |
| clic | une cellule |
| glisser | une plage |
| clic, puis [[Shift]] et clic | la plage entre les deux |
| [[Shift]] et flèche | agrandit la plage |
| [[Ctrl]] et clic ou glisser | une plage de plus |
| clic sur une lettre, un numéro | une colonne, une ligne |
| glisser sur les lettres, les numéros | plusieurs colonnes, plusieurs lignes |
| [[Ctrl+A]] | toute la feuille |
| zone de nom, flèche | une [plage nommée](noms.html) |

L’adresse de la sélection est dans la zone de nom, à gauche de la barre de formule.

## Copier, couper, coller {#copier}

[[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]], ou **%copy%** et **%paste%** du clic droit.
- **%paste%** du clic droit colle les valeurs, sans les formules ; [[Ctrl+V]] colle les formules.
- Une formule collée suit sa nouvelle place : `=B2` copiée une ligne plus bas devient `=B3`. Le signe `$` fixe une ligne ou une colonne ([références](formules.html#references)).
- Une formule coupée garde ses références.
- Un tableau copié d’Excel, de Numbers, d’une page web ou d’un texte séparé par des tabulations se colle cellule par cellule ; nombres à virgule et listes sont reconnus comme à la frappe.
- On ne coupe ni ne colle plusieurs plages à la fois.

## Déplacer {#deplacer}

Tirer le bord de la sélection : les cellules se déplacent, avec leur mise en forme.

## Recopier {#recopier}

La poignée bleue, au coin inférieur droit de la sélection, se tire vers le bas, le haut, la gauche ou la droite.

| Cellules de départ | La poignée donne |
| --- | --- |
| une formule | la formule, ses références décalées |
| deux nombres, 1 et 2 | la suite : 3, 4, 5… |
| un nombre, un texte ou une date seuls | la même valeur |
| deux dates | les dates suivantes, au même écart |

![La suite 1, 2 prolongée par la poignée](recopie.webp 760x300)

Sans la souris, ou sur une grande plage :

| Commande | Effet |
| --- | --- |
| **%edit% › %fillDown%**, [[Ctrl+D]] | la première ligne de la plage sélectionnée est copiée dans les suivantes |
| **%edit% › %fillRight%**, [[Ctrl+R]] | la première colonne est copiée dans les suivantes |

Si une seule ligne est sélectionnée, [[Ctrl+D]] y copie la ligne du dessus ; si une seule colonne l’est, [[Ctrl+R]] y copie celle de gauche. Ces commandes copient toujours, sans faire de suite, avec formats, bordures, cases à cocher et listes déroulantes.

tip: Pour une formule dans toute une colonne : la taper en haut, sélectionner de cette cellule à la dernière, [[Ctrl+D]].

=== formules
# Les formules

## Écrire une formule {#ecrire}

Une formule commence par `=`. Elle contient des nombres, des textes entre guillemets, des références à des cellules, des opérateurs et des [fonctions](fonctions.html).

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="Total : "&SUM(B2:B6)
```

La cellule montre le résultat, la barre de formule la formule. Les cellules qui dépendent d’une cellule modifiée sont recalculées aussitôt.

En français, la virgule est décimale et le point-virgule sépare les arguments : `=ROUND(3.14159, 2)`. Les noms de fonctions se tapent en minuscules ou en majuscules, en français ou en anglais : `=somme(B2:B6)` et `r:=SUM(B2:B6)` sont acceptés.

## Désigner les cellules à la souris {#souris}

Pendant la saisie d’une formule, un clic sur une cellule de la feuille insère son adresse, un glissé insère la plage. Chaque référence a sa couleur, dans la formule comme sur la feuille.

## La complétion {#completion}

Dès les premières lettres d’un nom, DocCells propose les fonctions qui les contiennent : [[↑]] [[↓]] pour parcourir, [[Enter]], [[Tab]] ou un clic pour choisir. Après la parenthèse ouvrante, une aide rappelle les arguments.

![Les fonctions proposées après =SOM](completion.webp 760x560)

![L’aide de la fonction SOMME](aide-formule.webp 760x560)

## La somme automatique {#somme}

{formula-sum} écrit une somme. Sa flèche propose **%sum%**, **%average%**, **%count%**, **%max%**, **%min%**, et **%allFormulas%** : la bibliothèque, où l’on cherche une fonction par son nom, sa description ou sa catégorie.

![La bibliothèque de formules](bibliotheque.webp 1280x760)

## Opérateurs {#operateurs}

| Opérateur | Rôle |
| --- | --- |
| `+` `-` `*` `/` | quatre opérations |
| `^` | puissance : `=2^10` |
| `%` | pourcentage : `=20%*B2` |
| `&` | met bout à bout des textes : `=A2&" "&B2` |
| `=` `<>` | égal, différent |
| `<` `>` `<=` `>=` | comparaisons |
| `( )` | priorité |

Les puissances passent avant les produits et quotients, puis viennent les sommes et les comparaisons. `=-2^2` donne −4 (4 dans Excel).

## Références {#references}

| Écriture | Désigne |
| --- | --- |
| `B2` | une cellule ; suit la recopie |
| `$B$2` | la même cellule, même recopiée |
| `B$2`, `$B2` | ligne fixe, colonne fixe |
| `B2:D6` | une plage |
| `B:B`, `2:2` | une colonne, une ligne entière |
| `%sheet%2!B2`, `'Notes 2'!B2` | une cellule d’une [autre feuille](feuilles.html#references) |
| `notes` | une [plage nommée](noms.html) |

Recopiée vers le bas, `=B2*$B$1` devient `=B3*$B$1`, `=B4*$B$1`…

## Conditions {#conditions}

```
=IF(B2>=10, "admis", "refusé")
=IF(AND(B2>=10, C2>=10), "oui", "non")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- Les valeurs logiques s’écrivent `@TRUE()` et `@FALSE()`, avec les parenthèses. Elles s’affichent TRUE et FALSE.
- Un critère est un texte : `">10"`, `"<>0"`, `"Ana"`. Les jokers `*` et `?` ne sont pas reconnus.
- Une cellule vide se reconnaît par `=B2=""` ; elle n’est pas égale à 0.

## Chercher dans un tableau {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

La première cherche Léa dans la première colonne du tableau et rend la troisième ; le dernier argument 0 demande la valeur exacte. La seconde donne le nom de qui a la meilleure note.

## Dates et heures {#dates}

Une date est un nombre de jours, une heure une fraction de jour : placées dans des cellules, elles s’additionnent et se soustraient.

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

Une date donnée par `@DATE` ou `@TODAY` doit passer par une cellule pour être additionnée : `=TODAY()+1` donne `#VALUE!`, mais si A1 contient `=TODAY()`, `=A1+1` donne demain. Le résultat est un nombre : lui donner un format **%fDate%**.

## Les erreurs {#erreurs}

| Affiché | Cause |
| --- | --- |
| `#NAME?` | nom inconnu : faute de frappe, fonction [non calculée](fonctions.html#non-calculees), `@TRUE` sans parenthèses, texte sans guillemets |
| `#VALUE!` | type inattendu : un texte là où il faut un nombre |
| `DIV/0` | division par zéro ou par une cellule vide |
| `#N/A` | valeur introuvable (`@MATCH`, `@VLOOKUP`), ou `GEO` hors de DocGeo |
| `#REF!` | cellule ou feuille qui n’existe pas |
| `#NUM!` | nombre hors du domaine : `RACINE(-1)` |
| `#ERROR!` | formule mal écrite, ou fonction non calculée |

`@IFERROR` remplace l’erreur d’une fonction (`#N/A`, `#NUM!`) : `=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "absent")`. Elle ne remplace pas celle d’un calcul (`DIV/0`, `#VALUE!`) : contre une division par zéro, tester le diviseur, `=IF(B2, B3/B2, "")`, qui vaut pour un zéro comme pour une cellule vide.

=== listes
# Listes et complexes

> Une cellule de DocCells peut contenir une liste de nombres. Une liste de deux nombres est aussi un point du plan, ou un nombre complexe.

## Écrire une liste {#ecrire}

Entre crochets, éléments séparés par des points-virgules. Une liste peut contenir des listes.

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

Sans `=`, la liste est une valeur ; avec `=`, ses éléments peuvent être des calculs. Dans une langue à point décimal, les éléments se séparent par des virgules : `r:[2, 1]`.

## Opérations {#operations}

| Opération | Résultat |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]` : terme à terme, longueurs égales |
| `n:[1, 2, 3] * 2`, `n:[2, 4, 6] / 2` | `n:[2, 4, 6]`, `n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]` : produit de complexes |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]` : quotient de complexes |
| `n:[2, 1] + 3` | `n:[5, 1]` : 3 est un complexe réel |
| `n:[0, 1]^2` | `n:[-1, 0]`, à l’arrondi près |
| `n:[8, 0]^(1/3)` | la liste des trois racines cubiques |
| `n:-[2, 1]` | `n:[-2, -1]` |

Toute autre combinaison donne `#VALUE!` : produit de deux listes de trois nombres, longueurs différentes, texte.

## Listes et fonctions {#fonctions}

Une fonction voit une liste comme une plage :

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` donne le deuxième élément de la liste contenue en A1 : l’ordonnée d’un point, la partie imaginaire d’un complexe. Quelques [fonctions](fonctions.html) rendent une liste : `@FREQUENCY`, `@LINEST`, `@TRANSPOSE`, `@UNIQUE`, `@SPLIT`.

## Affichage {#affichage}

Les boutons {number-decrease} {number-increase} et les [formats de nombre](nombres.html) s’appliquent à chaque nombre de la liste : `n:[-0.14, 0.27]`. Les valeurs exactes restent.

## Exemple : une suite complexe {#exemple}

L’orbite de 0 pour *z* ↦ *z*² + *c* : A1 contient *c*, A2 `n:[0, 0]`, A3 la formule ci-dessous, recopiée vers le bas.

```
=A2^2+$A$1
```

Dans [DocGeo](docgeo.html), une telle colonne se dessine dans la figure.

note: Dans un fichier Excel, une liste est enregistrée comme un texte, et la valeur d’une formule qui donne une liste aussi ([compatibilité](excel.html#listes)).

=== noms
# Plages nommées

## Donner un nom {#definir}

1. Sélectionner la cellule ou la plage.
2. Clic droit › **%defineName%** (ou la flèche de la zone de nom › **%nameManager%**).
3. Taper le nom, choisir l’étendue, **%nameOk%**.

![La fenêtre Nouveau nom](noms.webp 1280x760)

| Champ | Contenu |
| --- | --- |
| **%nameField%** | commence par une lettre ou `_` ; lettres, chiffres, `_` et `.`, sans espace ; pas une adresse comme `B2` |
| **%scope%** | **%workbook%** : lu de toutes les feuilles ; une feuille : lu seulement d’elle, où il l’emporte sur un nom du classeur |
| **%refersTo%** | une cellule ou une plage, avec sa feuille : `'%sheet%1'!$B$2:$B$6` |

## Utiliser un nom {#utiliser}

```
=AVERAGE(notes)
=prix*(1+tva)
```

- La flèche de la zone de nom liste les noms : en choisir un sélectionne sa plage, dans sa feuille.
- Quand la sélection est exactement une plage nommée, la zone de nom montre son nom.
- Une [liste déroulante](controles.html#listes) peut lire une plage de cellules, désignée par son adresse.

## Modifier, supprimer {#gerer}

Dans le **%nameManager%**, cliquer un nom remet ses champs en modification ; **%nameRemove%** l’efface ; **%nameNew%** revient à un nom vide. Avant de supprimer un nom, remplacer les formules qui le lisent : elles gardent leur dernière valeur, puis ne se calculent plus.

Les noms sont enregistrés dans le fichier Excel et lus de même.

=== feuilles
# Les feuilles

## Ajouter, changer de feuille {#ajouter}

- {plus} ajoute une feuille, nommée « Feuille2 », « Feuille3 »…
- Un clic sur un onglet l’affiche ; {all-sheets} liste les feuilles, masquées comprises, et affiche celle qu’on choisit.

## Le menu d’un onglet {#menu}

Clic droit sur l’onglet, ou sa flèche :

| Commande | Effet |
| --- | --- |
| **%sheetDelete%** | après confirmation ; la dernière feuille visible ne peut pas l’être |
| **%sheetCopy%** | double la feuille |
| **%sheetRename%** | ou double clic sur le nom ; sans `n:[ ] : ? * / ' "` |
| **%sheetColor%** | couleur de l’onglet |
| **%sheetHide%** | la feuille reste lue par les formules ; {all-sheets} la rend |
| **%sheetLeft%**, **à droite** | change l’ordre ; on peut aussi tirer l’onglet |

## Lire une autre feuille {#references}

Le nom de la feuille, un point d’exclamation, l’adresse. Le nom se met entre apostrophes s’il contient une espace ou un signe.

```
=%sheet%2!B2*2
='Notes 2'!B2
=SUM('Notes 2'!B2:B6)
```

La référence se tape : changer d’onglet pendant la saisie d’une formule abandonne la saisie.

Pour qu’une plage soit lue de toutes les feuilles par un nom, la [nommer](noms.html) avec l’étendue **%workbook%**.

=== nombres
# Formats de nombre

> Un format change l’affichage d’un nombre, pas sa valeur : les calculs gardent toutes les décimales.

## Choisir un format {#choisir}

**%format% › %fNumber%**, ou la liste **%fGeneral%** de la barre de boutons.

| Format | Exemple |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`, aligné à gauche ; la saisie reste un texte |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%` ; 0,25 devient `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**, **%fTime%**, **%fDateTime%** | pour les dates : `%xDate%`, `3:00 PM`, `15:00`… |

Le symbole monétaire est celui de la langue de l’interface.

| Bouton | Effet |
| --- | --- |
| {percentage-format} | pourcentage |
| {number-decrease} | une décimale de moins |
| {number-increase} | une décimale de plus |

Ces boutons valent aussi pour les nombres d’une [liste](listes.html). Pour arrondir la valeur elle-même, utiliser `@ROUND`.

## Format personnalisé {#personnalise}

**%format% › %fNumber% › %customNumberFormat%** : choisir un format suggéré, ou écrire un code. L’aperçu montre le résultat ; **%guide%** rappelle les signes ; **%apply%** le donne à la sélection.

![La fenêtre des formats de nombre personnalisés](format-personnalise.webp 1280x760)

| Signe | Rôle | Code | 1234,5 s’affiche |
| --- | --- | --- | --- |
| `0` | un chiffre, zéro compris | `c:0.00` | `n:1234.50` |
| `#` | un chiffre s’il est utile | `c:#.##` | `n:1234.5` |
| espace | groupe les milliers | `c:#,##0` | `n:1,235` |
| `%` | pourcentage | `0%` | `123450%` |
| `"texte"` | un texte, une unité | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | notation scientifique | `c:0.00E+00` | `n:1.23E+03` |
| `;` | formats des positifs, négatifs, zéros, textes | `0;-0;"nul"` | `1235` |
| `[Red]` | couleur | `0;[Red]-0` | négatifs en rouge |

Le code se tape avec les séparateurs de la langue ; la fenêtre indique la forme sous laquelle il est enregistré (`#,##0.00`), la même qu’Excel.

### Dates et heures

| Code | 29 août 2026, 14 h 30 |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

Les noms de mois et de jours s’affichent en anglais.

### Unités

Sous **%units%**, des formats comme `c:0.00 "V"`, `c:0.00 "Ω"`, `c:0.00 "mm"` : la cellule reste un nombre, avec lequel on calcule.

=== mise-en-forme
# Mise en forme

## Texte {#texte}

| Commande | Accès |
| --- | --- |
| gras, italique, souligné | {bold} {italic} {underline} ; [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] |
| police | liste **Arial** : treize polices |
| taille | liste **10**, ou **%formatMenu% › %fontSize%** : 9 à 72 |
| couleur du texte, du fond | {font-color} {background} |
| effacer la mise en forme | {clear-format}, **%formatMenu% › %clearFormat%** |

Dans la palette d’une couleur, **%resetColor%** la retire ; **%customColor%** ouvre le sélecteur du système.

Pendant la modification d’une cellule, la mise en forme s’applique à la partie sélectionnée du texte.

## Alignement {#alignement}

| Commande | Choix |
| --- | --- |
| {align-left} horizontal | gauche, centre, droite |
| {align-top} vertical | haut, milieu, bas |
| {text-rotation-none} rotation | inclinée, verticale, empilée |
| {text-overflow} renvoi à la ligne | **%wrapOverflow%** : sur les cellules vides voisines ; **%wrap%** : sur plusieurs lignes ; **%wrapClip%** : coupé au bord |

Sans alignement choisi, les nombres et les dates sont à droite, le reste à gauche.

## Bordures {#bordures}

{border-all} trace la bordure choisie ; sa flèche donne les côtés (supérieure, extérieure, intérieures, toutes, aucune, diagonale), la **couleur** et le **style** du trait. Choisir couleur et style avant le côté.

## Fusionner {#fusion}

{merge-all} ou **%formatMenu% › %mergeCells%** :

| Commande | Effet |
| --- | --- |
| **%mergeAll%** | une seule cellule, qui garde un seul contenu |
| **%mergeVertical%** | une cellule par colonne |
| **%mergeHorizontal%** | une cellule par ligne |
| **%unmerge%** | rend les cellules |

Une plage qui contient des cellules fusionnées ne peut pas être triée ni filtrée.

## Couleurs alternées {#alternees}

{alternating} ou **%formatMenu% › %alternatingColors%** colore une ligne sur deux de la plage sélectionnée, avec une ligne d’en-tête si l’on veut. Les trois couleurs se choisissent.

![La fenêtre des couleurs alternées](couleurs-alternees.webp 1280x760)

Ce sont des couleurs de fond ordinaires : elles ne suivent pas un tri ni une insertion de ligne. **%clearAlternating%** les efface de la plage.

## Quadrillage {#quadrillage}

{gridlines} ou **%view% › %show% › %gridlines%** masque ou affiche les lignes grises, dans toutes les feuilles du classeur. L’[impression](impression.html) a son propre réglage.

Pour une couleur qui dépend de la valeur, voir [Formatage conditionnel](conditionnelle.html).

=== conditionnelle
# Formatage conditionnel

> Une règle change l’apparence des cellules d’une plage qui remplissent une condition. Elle suit les valeurs, saisies ou calculées.

## Créer une règle {#creer}

1. Sélectionner la plage, sans son en-tête.
2. {conditional} ou **%format% › %conditionalFormatting%**.
3. Choisir la condition, la valeur à comparer, les couleurs ou le style.
4. **%cfAdd%**.

![La fenêtre du formatage conditionnel, une règle appliquée](conditionnelle.webp 1280x760)

| Condition | La cellule |
| --- | --- |
| `<` | est inférieure à |
| `>` | est supérieure à |
| `=` | est égale à |
| `!=` | est différente de |
| `[]` | est comprise entre deux valeurs, bornes comprises |
| `abc` | contient un texte, majuscules indifférentes |

## À quoi comparer {#comparer}

| Comparer à | Exemple |
| --- | --- |
| **%cfValue%** | les notes inférieures à 10 |
| **%cfCell%** | les notes inférieures au seuil écrit en `F1` |
| **%cfColumn%** | en colonne C, les valeurs supérieures à celles de la colonne B, ligne par ligne |

## Apparence {#apparence}

**%cfText%** et **%cfBackground%** choisissent les couleurs, **%cfNone%** les retire ; **B**, *I*, **U** mettent en gras, italique, souligné. Il faut au moins une couleur ou un style.

## Plusieurs règles {#regles}

La colonne de gauche liste les règles de la feuille : **%cfEdit%**, **%cfDelete%**. Si plusieurs règles s’appliquent à une cellule, la dernière de la liste l’emporte, couleur par couleur.

warn: Dans une plage couverte par une règle, la couleur du texte et du fond donnée directement aux cellules n’est plus affichée.

Les règles sont enregistrées dans le fichier Excel comme mises en forme conditionnelles d’Excel.

=== lignes-colonnes
# Lignes et colonnes

## Taille {#taille}

| Action | Effet |
| --- | --- |
| tirer le bord droit de l’en-tête d’une colonne | change sa largeur |
| tirer le bord bas de l’en-tête d’une ligne | change sa hauteur |
| clic droit sur l’en-tête › **%width%**, **%height%** | taille en pixels, pour toutes les colonnes ou lignes sélectionnées |

## Insérer, supprimer {#inserer}

Clic droit dans une cellule ou sur un en-tête : **%rowAbove%**, **%rowBelow%**, **%columnLeft%**, **%columnRight%**. Le nombre se tape dans le champ. Clic droit sur un en-tête : **%deleteRow%**, **%deleteColumn%**.

![Le menu du clic droit](menu-contextuel.webp 760x650)

Les formules sont ajustées : leurs références suivent les cellules déplacées. La limite est de 10 000 lignes et 1 000 colonnes.

## Masquer {#masquer}

Clic droit sur l’en-tête › **%hideRow%**, **%hideColumn%**. Les cellules masquées restent calculées. Pour les rendre, sélectionner les en-têtes qui les entourent, puis clic droit › **%showHidden%**.

## Figer {#figer}

Les lignes et colonnes figées restent visibles pendant le défilement. Sélectionner la cellule limite, puis {freeze-row-col} ou **%view% › %freeze%** :

| Commande | Restent visibles |
| --- | --- |
| **%freezeRow%** | les lignes jusqu’à celle de la cellule, comprise |
| **%freezeColumn%** | les colonnes jusqu’à celle de la cellule, comprise |
| **%freezeCell%** | les deux |
| **%freezeCancel%** | rien de particulier |

Pour garder la ligne d’en-tête : cliquer une cellule de la ligne 1, **%freezeRow%**.

=== tri-filtre
# Trier, filtrer, rechercher

## Trier {#trier}

| Commande | Effet |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**, **%sortDescending%** | trie la sélection d’après sa première colonne ; aussi par {filter} et par le clic droit |
| clic droit › **%sortRange%** | choisit la colonne de tri, l’ordre, et si la première ligne est un en-tête |

![La fenêtre de tri d’une plage](tri.webp 1280x760)

Sélectionner tout le tableau, pas une seule colonne : les lignes doivent rester entières. Une plage qui contient des cellules fusionnées ne se trie pas.

## Filtrer {#filtrer}

1. Sélectionner le tableau, en-tête compris.
2. **%data% › %sortAndFilter% › %createFilter%**, ou {filter}, ou clic droit › **%filterRange%**.
3. Cliquer la flèche d’une colonne.

![Le filtre de la colonne Maths](filtre.webp 1280x760)

| Dans le menu d’une colonne | Effet |
| --- | --- |
| **%sortByAsc%**, **%sortByDesc%** | trie les lignes du tableau |
| **%filterByColor%** | d’après la couleur du fond ou du texte |
| **%filterByValues%** | cocher les valeurs à garder ; **%filterAll%**, **%filterNone%**, **%filterInverse%** ; le champ cherche une valeur |
| **%filterConfirm%** | applique |
| **%clearFilter%** | retire le filtre du tableau |

Les lignes écartées sont masquées, pas supprimées. Les filtres de plusieurs colonnes se cumulent. **%data% › %sortAndFilter% › %clearFilter%** retire le filtre.

## Rechercher, remplacer {#rechercher}

[[Ctrl+F]] ouvre **%find%**, [[Ctrl+H]] **%replace%**.

![La recherche](rechercher.webp 1280x660)

| Option | Effet |
| --- | --- |
| **%regex%** | le texte cherché est une expression régulière : `^A` trouve ce qui commence par A |
| **%wholeWord%** | la cellule entière est égale au texte |
| **%matchCase%** | distingue majuscules et minuscules |
| **%findAll%** | liste les cellules trouvées ; cliquer une ligne y va |
| **%findNext%** | va à la suivante |
| **%replaceOne%**, **%replaceAll%** | une cellule, toutes |

La recherche porte sur la feuille affichée.

=== controles
# Cases, listes et calendrier

![Des cases à cocher, une liste déroulante et le calendrier d’une date](controles.webp 1280x560)

## Cases à cocher {#cases}

Sélectionner les cellules, **%insert% › %checkbox%**. Un clic coche ou décoche ; la cellule vaut TRUE ou FALSE.

```
=IF(B2, "fait", "à faire")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

La deuxième formule additionne les valeurs de la colonne C dont la case est cochée ; la troisième compte les cases cochées.

## Listes déroulantes {#listes}

Sélectionner les cellules, **%insert% › %dropdown%**.

| Source | Contenu |
| --- | --- |
| **%listValues%** | les options, une par champ ; **%addOption%** ; sans virgule |
| **%listRange%** | une plage dont les cellules sont les options : `%sheet%2!$A$1:$A$10` |

Une plage sans `$` se décale d’une cellule à l’autre, comme une formule recopiée. Si ses cellules changent, les options suivent.

La cellule affiche une flèche ; un clic ouvre les options. Une autre valeur que celles de la liste n’est pas acceptée.

## Calendrier {#calendrier}

Un double clic sur une cellule de date ouvre un calendrier : choisir un jour, changer de mois par **<** et **>**, **%today%** pour la date du jour. Il s’ouvre sur toute cellule qui a un format de date, même vide, sauf si elle contient une formule ou si elle est [verrouillée](protection.html).

tip: Pour une colonne de dates à remplir au calendrier : la sélectionner et lui donner le format **%fDate%**.

## Retirer {#retirer}

[[Delete]] retire la case ou la liste de la cellule, avec sa valeur.

Cases et listes sont enregistrées dans le fichier Excel ; les cases y sont des cases à cocher d’Excel.

=== graphiques
# Graphiques et sparklines

## Créer un graphique {#creer}

1. Sélectionner les données.
2. {chart} ou **%insert% › %chart%**.
3. Choisir le type et les options ; l’aperçu suit.
4. **%chartAdd%**, puis **%chartClose%**.

![La fenêtre des graphiques](graphique.webp 1280x900)

| Sélection | Interprétation |
| --- | --- |
| une colonne ou une ligne de nombres | les données |
| deux colonnes | étiquettes dans la première, données dans la seconde |
| deux lignes | étiquettes dans la première, données dans la seconde |
| deux colonnes séparées, choisies avec [[Ctrl]] | de même |

Un graphique montre une série : une ligne ou une colonne de données. Les cellules sans nombre, comme un en-tête, sont ignorées.

## Types {#types}

| Type | Pour | Étiquettes |
| --- | --- | --- |
| **%tBar%** | comparer | sous les barres |
| **%tLine%** | une évolution | en abscisse |
| **%tScatter%** | une relation entre deux grandeurs | ce sont les abscisses, si elles sont des nombres ; sinon 1, 2, 3… |
| **%tPie%** | des parts ; valeurs positives | dans la légende ou sur les parts |

Jusqu’à 120 valeurs, 24 pour des secteurs.

![Les quatre types de graphiques](graphiques.webp 1280x640)

## Options {#options}

| Champ | Contenu |
| --- | --- |
| **%chartTitle%** | obligatoire ; affiché en haut du graphique |
| **%chartColor%** | sélecteur ou code `#4F81BD` ; les secteurs ont leurs propres couleurs |
| **%chartRange%** | la plage : `B2:B6` |
| **%chartLabels%** | **%lNone%** ; **%lColumn%** (`A`) ; **%lRow%** (`1`) ; **%lRange%**, de même taille que les données |
| **%chartOptions%** | valeurs, légende, abscisses, ordonnées, grille |

## Déplacer, modifier {#modifier}

- Tirer le bandeau du titre déplace le graphique ; tirer son coin inférieur droit le redimensionne.
- **%chartEdit%** rouvre la fenêtre, **%chartDelete%** l’efface. La fenêtre liste aussi tous les graphiques de la feuille.
- Le graphique suit les données de ses cellules.

Les graphiques sont enregistrés dans le fichier Excel comme de vrais graphiques, et relus par DocCells. Ils ne sont pas [imprimés](impression.html) avec la feuille.

## Sparklines {#sparklines}

La fonction `SPARKLINE` dessine un graphique miniature dans la cellule.

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![Des sparklines en courbe et en colonnes](sparklines.webp 900x300)

Les options s’écrivent entre accolades : le nom, une barre oblique inverse, la valeur ; un point-virgule entre deux options.

| `charttype` | Dessin | Options propres |
| --- | --- | --- |
| `"line"` (défaut) | courbe | `color`, `linewidth`, `xmin`, `xmax`, `ymin`, `ymax` |
| `"bar"` | barres empilées | `max`, `color1`, `color2` |
| `"column"` | colonnes | `color`, `negcolor`, `lowcolor`, `highcolor`, `firstcolor`, `lastcolor`, `axis`, `axiscolor`, `ymin`, `ymax` |
| `"winloss"` | gains et pertes | les mêmes, sans `ymin` ni `ymax` |

Options communes : `empty` (`"zero"` ou `"ignore"`), `nan` (`"convert"` ou `"ignore"`), `rtl` (de droite à gauche). La [documentation de SPARKLINE](../../sparkline/fr.html) donne toutes les valeurs, avec des exemples.

Pour un dessin plus grand, agrandir la ligne et la colonne, ou fusionner des cellules.

=== images-liens
# Images et liens

## Images {#images}

{image} ou **%insert% › %image%** insère une image de l’ordinateur à l’emplacement de la sélection.

| Action | Effet |
| --- | --- |
| tirer l’image | la déplace |
| tirer une poignée | la redimensionne |
| [[Delete]], l’image sélectionnée | la supprime |

Les images sont enregistrées dans le fichier Excel, à leur place.

## Liens {#liens}

Sélectionner une cellule, clic droit › **%link%**.

| Type de lien | Adresse |
| --- | --- |
| page web (**%linkWeb%**) | `https://…` |
| plage de cellules (**%linkCells%**) | `%sheet%1!A1:C8` |
| **%linkSheet%** | une feuille du classeur |

Le **%linkText%** devient le contenu de la cellule, bleu et souligné. Quand la cellule est sélectionnée, **%linkOpen%** s’affiche sous elle.

warn: Les liens ne sont pas enregistrés dans le fichier Excel : seul leur texte l’est.

=== impression
# Imprimer

**%file% › %print%** ou [[Ctrl+P]] montre les pages telles qu’elles seront imprimées.

![L’aperçu avant impression](imprimer.webp 1280x760)

| Réglage | Choix |
| --- | --- |
| **%printContent%** | la feuille active, ou les cellules sélectionnées avant d’ouvrir la fenêtre |
| **%printPaper%** | A4, Letter |
| **%printOrientation%** | portrait, paysage |
| **%printScale%** | **%printActual%** ; **%printWidth%** : toutes les colonnes sur une page de large ; **%printPage%** |
| **%printMargins%** | normales, étroites, larges |
| **%printFormatting%** | quadrillage, titres de lignes et colonnes, couleurs de fond |

**%printButton%** ouvre la fenêtre du navigateur, où l’on choisit l’imprimante ou l’enregistrement en PDF.

- Seules les cellules sont imprimées, avec leur mise en forme : ni les graphiques, ni les images, ni les sparklines.
- Les lignes et colonnes masquées ne le sont pas.
- Une case à cocher s’imprime TRUE ou FALSE.
- On imprime une feuille à la fois.

tip: Pour imprimer avec les graphiques, enregistrer le classeur et l’ouvrir dans Excel ou LibreOffice.

=== protection
# Protéger

> Un classeur protégé n’est modifiable que dans les cellules déverrouillées : on prépare ainsi une feuille d’exercice.

## Préparer une feuille pour des élèves {#preparer}

1. Sélectionner les cellules à remplir, clic droit › **%unlock%**.
2. {protect} ou **%tools% › %protectWorkbook%**.
3. Enregistrer, puis [diffuser le fichier ou son lien](partager.html).

Toutes les cellules sont verrouillées au départ ; le verrouillage n’a d’effet que sur un classeur protégé. **%lock%** annule.

## Ce que bloque la protection {#effets}

| Dans un classeur protégé | Cellule verrouillée | Cellule déverrouillée |
| --- | --- | --- |
| saisir, effacer | non | oui |
| calendrier d’une date | non | oui |
| largeurs et hauteurs | non | non |
| couleurs alternées, insertion de cases et de listes, recopie par menu | non | non |
| mise en forme, insertion de lignes et de colonnes, graphiques | oui | oui |

La protection porte sur toutes les feuilles. Elle est enregistrée dans le fichier Excel, avec les cellules déverrouillées, et relue par DocCells et Excel.

## Mode élève {#eleve}

`?mode=student` dans l’adresse ouvre DocCells sans le bouton {protect} ni les commandes **%unlock%** et **%defineName%** ; **%protectWorkbook%** est grisé. L’élève ne peut pas lever la protection.

```
https://…/doccells/?mode=student&url=https://…/exercice.xlsx
```

note: C’est une protection d’usage, sans mot de passe : quelqu’un qui ouvre le fichier dans un autre tableur, ou sans `mode=student`, peut la lever.

=== partager
# Partager et intégrer

## Un classeur par un lien {#url}

`?url=` suivi de l’adresse d’un fichier `.xlsx` en ligne l’ouvre dans DocCells.

```
https://…/doccells/?url=https://exemple.fr/notes.xlsx
```

Le site qui héberge le fichier doit autoriser sa lecture par d’autres sites (en-tête CORS) ; un fichier placé à côté de DocCells, sur le même site, n’a pas cette contrainte. Chacun ouvre sa copie : les modifications ne reviennent pas au fichier d’origine.

## Un Google Sheet {#google}

L’adresse d’un Google Sheet convient aussi.

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- Le partager par « Tous les utilisateurs disposant du lien ».
- DocCells en lit une copie au format Excel, à chaque ouverture : le document Google n’est pas modifié.
- Le site qui héberge DocCells doit exécuter PHP ; 25 Mo au plus.

## Options de l’adresse {#options}

| Option | Effet |
| --- | --- |
| `url=…` | ouvre un classeur ou un Google Sheet |
| `mode=student` | [mode élève](protection.html#eleve) |
| `lang=fr` | impose la langue : `de`, `el`, `en`, `es`, `fr`, `hi`, `it`, `nl`, `pt`, `ru`, `zh-CN`, `zh-TW` |

Les options se suivent, séparées par `&` : `?lang=fr&mode=student&url=…`. La première vient après `?`.

## Dans une page web {#integrer}

```
<iframe src="https://…/doccells/?url=https://exemple.fr/notes.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

Dans un cadre, DocCells n’a ni menus, ni boutons pour ouvrir et enregistrer, ni copie de récupération : il montre la barre de boutons, la barre de formule et la feuille.

## Par programme {#programme}

Une page peut piloter DocCells : charger un classeur, lire et écrire des cellules, suivre leurs valeurs. L’option `embed` ouvre ce mode ; il est décrit, pour les développeurs, dans le fichier [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) du projet.

=== docgeo
# Avec DocGeo

> DocGeo, le logiciel de géométrie dynamique de DocTools, contient DocCells : une feuille à côté d’une figure, chacune lisant l’autre.

Dans DocGeo, **%file% › %gView% › %gSheetView%** ajoute une feuille à côté de la figure ; **%file% › %gTab% › %gSheetTab%** en fait un onglet.

## La fonction GEO {#geo}

Dans une cellule, `GEO` lit la valeur d’un objet de la figure, désigné par son nom entre guillemets.

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'Figure 1'!c")
```

- La cellule suit la figure pendant qu’on la manipule.
- Un point est lu comme la [liste](listes.html) de ses coordonnées : `=GEO("A")*2` est un point aussi.
- Pendant la saisie d’une formule, un clic sur un objet de la figure y écrit `GEO` et son nom.
- Un objet inconnu donne `#N/A`. Hors de DocGeo, `GEO` donne toujours `#N/A`.
- `GEO` porte le même nom dans toutes les langues.

## La figure lit les cellules {#figure}

Dans une formule de DocGeo, `!B3` désigne une cellule, `!B2:B21` une plage.

## Différences avec DocCells seul {#differences}

| Dans DocGeo | |
| --- | --- |
| Menus et boutons | dans les barres de DocGeo, quand la feuille est active |
| Fichier | celui de DocGeo : la feuille est enregistrée dans le `.dgo`, listes et liens compris |
| Feuilles | une par vue ; plusieurs onglets tableur se lisent entre eux |
| Annuler | [[Ctrl+Z]] dans les cellules n’annule que les cellules |

La page [Le tableur](https://doctools.org/apps/docgeo/tutorials/fr/tableur.html) du manuel de DocGeo donne le détail.

=== fonctions
# Les fonctions

> Les %functions% fonctions calculées par DocCells, par domaine, avec un exemple chacune.

- Recherche : taper un nom de fonction, français ou anglais, dans le champ en haut de la page ([[/]]), mène à sa ligne.
- Les arguments se séparent par un point-virgule ; les arguments entre crochets `[ ]` sont facultatifs. Le nom anglais, en petit, est accepté à la saisie.
- `@TRUE()` et `@FALSE()` s’écrivent avec leurs parenthèses ; on peut aussi écrire 1 et 0.
- Un argument « plage » peut être une [liste](listes.html) : `=AVERAGE([12, 15, 8])`.
- Voir aussi [Les formules](formules.html) : opérateurs, références, erreurs.

## Les cellules des exemples {#exemples}

Les exemples lisent cette feuille :

%%sample%%

%%functions%%

## Fonctions non calculées {#non-calculees}

La complétion et la bibliothèque de DocCells nomment aussi des fonctions qui ne sont pas calculées : elles donnent `#NAME?` ou `#ERROR!`. Il en est de même de fonctions récentes d’Excel.

| Non calculées | À la place |
| --- | --- |
| `@TEXT`, `@FIXED`, `@DOLLAR` | un [format de nombre](nombres.html) dans la cellule |
| `RECHERCHEX`, `DECALER`, `INDIRECT`, `ADRESSE` | `@INDEX` et `@MATCH`, `@VLOOKUP`, `@CHOOSE` |
| `FILTRE`, `TRIER`, `SEQUENCE`, `LET`, `LAMBDA` | [trier et filtrer](tri-filtre.html) ; [recopier](selection.html#recopier) une formule |
| `MAX.SI.ENS`, `MIN.SI.ENS`, `JOINDRE.TEXTE` | un filtre ; l’opérateur `&` |
| `PRODUITMAT`, `DETERMAT`, `INVERSEMAT` | `@SUMPRODUCT`, une formule par élément |
| `LIEN_HYPERTEXTE` | [insérer un lien](images-liens.html#liens) |
| noms à points d’Excel : `RANK.EQ`, `VAR.S`, `NORM.DIST`… | le nom sans point ou l’ancien nom : `@RANK`, `@VAR`, `@NORMDIST` |
| fonctions de base de données (`@DSUM`…), coupons et titres (`@PRICE`, `@COUPNUM`…), `@ISBLANK`, `@CELL`, `@ISFORMULA` | `@SUMIFS` ; `=A1=""` pour une cellule vide |

=== raccourcis
# Raccourcis et gestes

## Fichier

| Touches | Effet |
| --- | --- |
| [[Ctrl+O]] | ouvrir |
| [[Ctrl+S]] | enregistrer ; télécharger, dans Firefox et Safari |
| [[Ctrl+P]] | imprimer |

## Édition

| Touches | Effet |
| --- | --- |
| [[Ctrl+Z]] ; [[Ctrl+Y]], [[Ctrl+Shift+Z]] | annuler ; refaire |
| [[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] | copier, couper, coller |
| [[Ctrl+D]] ; [[Ctrl+R]] | recopier vers le bas ; à droite |
| [[Delete]], [[⌫]] | vider les cellules |
| [[Ctrl+F]] ; [[Ctrl+H]] | rechercher ; remplacer |

## Mise en forme

| Touches | Effet |
| --- | --- |
| [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] | gras, italique, souligné |

## Se déplacer, sélectionner

| Touches | Effet |
| --- | --- |
| flèches | cellule voisine |
| [[Tab]], [[Shift+Tab]] | cellule suivante, précédente |
| [[Shift]] et flèche | agrandir la sélection |
| [[Shift]] et clic | sélectionner jusqu’à la cellule |
| [[Ctrl]] et clic | ajouter à la sélection |
| [[Ctrl+A]] | toute la feuille |

## Saisie

| Touches | Effet |
| --- | --- |
| [[F2]], [[Enter]], double clic | modifier la cellule |
| [[Enter]] | valider, descendre |
| [[Esc]] | abandonner |
| [[Alt+Enter]] | passer à la ligne dans la cellule |
| [[↑]] [[↓]], [[Enter]], [[Tab]] | parcourir, choisir une fonction proposée |
| clic ou glissé sur la feuille | insérer une référence dans la formule |

## Souris

| Geste | Effet |
| --- | --- |
| tirer la poignée bleue | [recopier](selection.html#recopier) |
| tirer le bord de la sélection | [déplacer](selection.html#deplacer) |
| tirer le bord d’un en-tête | [changer une largeur, une hauteur](lignes-colonnes.html#taille) |
| clic droit | menu de la cellule, de l’en-tête, de l’onglet |
| double clic sur une date | [calendrier](controles.html#calendrier) |
| double clic sur un onglet | renommer la feuille |
| tirer un onglet | déplacer la feuille |
| déposer un fichier `.xlsx` | l’ouvrir |

=== excel
# Compatibilité Excel

> DocCells lit et écrit le format Excel `.xlsx`. Ce qui suit est repris, dans un sens et dans l’autre.

## Ce qui est conservé {#conserve}

| Élément | Remarque |
| --- | --- |
| valeurs, textes, dates, formules | les formules s’affichent dans la langue de DocCells |
| [formats de nombre](nombres.html) | personnalisés compris |
| police, couleurs, alignement, rotation, renvoi à la ligne | |
| bordures, cellules fusionnées | |
| largeurs, hauteurs, lignes et colonnes masquées | |
| [lignes et colonnes figées](lignes-colonnes.html#figer), quadrillage | |
| plusieurs feuilles | |
| [plages nommées](noms.html) | |
| [formatage conditionnel](conditionnelle.html) | les règles de DocCells, les règles simples d’Excel (comparaison, texte contenu) |
| [cases à cocher, listes déroulantes](controles.html) | |
| [graphiques](graphiques.html) | écrits comme graphiques d’Excel ; ceux de DocCells sont relus |
| [images](images-liens.html) | |
| [filtres](tri-filtre.html#filtrer) | |
| [protection](protection.html), cellules déverrouillées | |

## Ce qui ne l’est pas {#perdu}

| Élément | Devient |
| --- | --- |
| [liens](images-liens.html#liens) | leur texte |
| [listes](listes.html) dans les cellules | un texte, `n:[2, 1]` |
| sparklines de DocCells ou de Google Sheets | une formule `SPARKLINE`, relue par DocCells ; inconnue d’Excel |
| graphiques créés dans Excel | non repris |
| tableaux croisés, macros, segments, commentaires | non repris |
| formatage conditionnel à échelle de couleurs, barres, icônes | non repris |

tip: Avant de remplacer un classeur Excel complexe, l’enregistrer depuis DocCells sous un autre nom (**%saveAs%**).

## Listes {#listes}

Une liste rouverte depuis un `.xlsx` est un texte : la retaper en refait une liste. Une liste calculée par une formule redevient une liste quand la formule est recalculée.

## Formules {#formules}

À l’ouverture, une formule garde en général le résultat enregistré par Excel jusqu’à ce qu’une de ses cellules change. Une fonction [non calculée par DocCells](fonctions.html#non-calculees) donne alors `#NAME?` ou `#ERROR!`.

## Autres formats {#formats}

| Format | Comment |
| --- | --- |
| `.csv` | ouvrir le fichier dans un éditeur de texte, copier, coller dans DocCells si les valeurs sont séparées par des tabulations ; sinon, le convertir en `.xlsx` |
| `.ods`, `.xls` | les enregistrer en `.xlsx` avec LibreOffice ou Excel |
| Google Sheets | [par son lien](partager.html#google), ou téléchargé en `.xlsx` |
| PDF | [imprimer](impression.html), « Enregistrer au format PDF » |

=== faq
# Questions fréquentes

## Saisie

### Une date que j’ai tapée n’est pas reconnue

`25/11/2026` est un texte pour DocCells. Taper `2026-11-25`, puis choisir le format **%fDate%** ([dates](saisie.html#dates)).

### Un nombre apparaît à la place d’une date

Les dates sont des nombres de jours : donner aux cellules le format **%fDate%** (**%format% › %number%**).

### Mes nombres ne s’additionnent pas

Alignés à gauche, ce sont des textes. En français, la virgule est décimale ; une unité tapée dans la cellule en fait un texte ([types](saisie.html#types)).

### Le zéro au début d’un numéro disparaît

Donner le format **%text%** avant la saisie, ou commencer par une apostrophe ([textes](saisie.html#textes)).

### Les nombres attendent un point au lieu d’une virgule

DocCells suit la langue du navigateur. `?lang=fr` l’impose ([langue](demarrage.html#langue)).

## Formules

### `#NAME?` avec VRAI ou FAUX

Écrire `@TRUE()` et `@FALSE()`, ou 1 et 0 ([conditions](formules.html#conditions)).

### `#NAME?` avec une fonction proposée par DocCells

Toutes les fonctions proposées ne sont pas calculées ([fonctions non calculées](fonctions.html#non-calculees)).

### SIERREUR laisse passer DIV/0

Tester le diviseur : `=IF(B2, A2/B2, "")` ([erreurs](formules.html#erreurs)).

### Coller ne garde pas mes formules

**%paste%** du clic droit colle les valeurs ; [[Ctrl+V]] colle les formules ([copier](selection.html#copier)).

### Écrire le nom d’un mois ou mettre un nombre en forme dans un texte

La fonction `@TEXT` n’est pas calculée : donner un [format](nombres.html) à une cellule à part.

### Compter les cases cochées

`=SUMPRODUCT(B2:B6, B2:B6)` ([cases à cocher](controles.html#cases)).

### AUJOURDHUI()+1 donne #VALUE!

Placer `=TODAY()` dans une cellule et additionner à cette cellule ([dates](formules.html#dates)).

## Présentation

### La couleur d’une cellule ne change pas

La cellule est dans la plage d’une règle de [formatage conditionnel](conditionnelle.html#regles).

### Un bouton a disparu

La fenêtre est étroite : il est derrière {more}.

### Trier ou filtrer est refusé

La plage contient des cellules fusionnées : annuler la fusion.

## Fichiers

### Enregistrer télécharge un nouveau fichier

C’est le cas dans Firefox et Safari. Chrome et Edge écrivent dans le fichier ([enregistrer](demarrage.html#enregistrer)).

### La page s’est fermée sans enregistrement

Rouvrir DocCells dans le même navigateur : il propose de restaurer la copie ([récupérer](demarrage.html#recuperer)).

### Mon graphique n’est pas imprimé

L’impression ne montre que les cellules ([imprimer](impression.html)).

### Un lien `?url=` n’ouvre pas mon classeur

Le site du fichier refuse peut-être la lecture par d’autres sites. Un Google Sheet doit être partagé par lien ([partager](partager.html)).

### Mes liens ont disparu

Ils ne sont pas enregistrés au format Excel ([ce qui ne l’est pas](excel.html#perdu)).

## Élèves

### Un élève peut-il modifier les formules ?

Pas dans un classeur protégé, hors des cellules déverrouillées ([protéger](protection.html)). Ajouter `mode=student` au lien lui retire le moyen de lever la protection.
