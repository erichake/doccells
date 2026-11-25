=== groups | Aan de slag | Invoeren en rekenen | Opmaken | Gegevens benutten | Verspreiden | Naslag

=== categories | Functie | Beschrijving en voorbeeld | Wiskunde | Goniometrie | Logica | Statistiek | Kansverdelingen en toetsen | Zoeken en lijsten | Tekst | Datums en tijden | Financieel | Talstelsels, eenheden, bijzondere functies | Complexe getallen als tekst | Informatie

=== index | Startpagina
# Gebruikershandleiding van DocCells

> DocCells is een meertalig rekenblad in de browser, zonder installatie of account. Het opent en bewaart Excel-werkmappen (.xlsx).

<div class="buttons"><a href="../../index.html?lang=nl">DocCells openen</a></div>

![Het venster van DocCells: menu’s, knoppen, formulebalk, een opgemaakte tabel met cijfers en een grafiek](interface.webp 1280x760)

## Het belangrijkste in zes handelingen

| Om te | Doe dit |
| --- | --- |
| Invoeren | een cel aanklikken, typen, [[Enter]] ([gegevens invoeren](saisie.html)) |
| Rekenen | `=` en dan de formule typen: `=AVERAGE(B2:B6)` ([formules](formules.html)) |
| Een formule kopiëren | de blauwe greep van de selectie slepen, of [[Ctrl+D]] ([doorvoeren](selection.html#recopier)) |
| Opmaken | menu **%format%**, of de knoppen ([opmaak](mise-en-forme.html)) |
| Een grafiek tekenen | de gegevens selecteren, {chart} ([grafieken](graphiques.html)) |
| Opslaan | [[Ctrl+S]]: een Excel-bestand ([openen en opslaan](demarrage.html)) |

## Inhoud {#sommaire}

- [Openen en opslaan](demarrage.html): bestanden, recente bestanden, herstel, Google Sheets, taal.
- [De interface](interface.html): menu’s, knoppen, formulebalk, tabbladen, zoom.
- [Gegevens invoeren](saisie.html), [selecteren, kopiëren, doorvoeren](selection.html).
- [Formules](formules.html), [lijsten en complexe getallen](listes.html), [benoemde bereiken](noms.html), [werkbladen](feuilles.html).
- [Getalnotaties](nombres.html), [opmaak](mise-en-forme.html), [voorwaardelijke opmaak](conditionnelle.html), [rijen en kolommen](lignes-colonnes.html).
- [Sorteren, filteren, zoeken](tri-filtre.html), [selectievakjes, lijsten en kalender](controles.html), [grafieken en sparklines](graphiques.html), [afbeeldingen en links](images-liens.html), [afdrukken](impression.html).
- Een werkmap voor leerlingen [beveiligen](protection.html), ze [delen en insluiten](partager.html), ze [met DocGeo](docgeo.html) gebruiken.
- Naslag: [de %functions% functies](fonctions.html), [sneltoetsen](raccourcis.html), [compatibiliteit met Excel](excel.html), [veelgestelde vragen](faq.html).

## Afspraken

- Knoppen worden aangeduid met hun pictogram ({bold} vet).
- [[Ctrl]] is op een Mac [[⌘]].
- Formules zijn in het Nederlands geschreven: Nederlandse functienamen, decimale komma, puntkomma tussen de argumenten. DocCells toont ze in de taal van de interface.
- Zoeken in de handleiding: [[/]] of [[Ctrl+K]]. De woorden mogen in willekeurige volgorde en zonder accenten; een functienaam, Nederlands of Engels, leidt naar zijn rij.

=== demarrage
# Openen en opslaan

## Beginnen {#nouveau}

DocCells opent met een lege werkmap van één blad. Om opnieuw met een lege werkmap te beginnen, de pagina herladen of DocCells in een ander browsertabblad openen.

## Een werkmap openen {#ouvrir}

| Manier | Effect |
| --- | --- |
| {open}, **%file% › %open%**, [[Ctrl+O]] | een `.xlsx`-bestand van de computer kiezen |
| Het bestand naar de pagina slepen | een sluier toont waar het neer te zetten; de werkmap vervangt de geopende |
| **%file% › %openRecent%** | de laatste tien geopende of opgeslagen bestanden (Chrome en Edge) |
| Een link `?url=…` | een werkmap op internet of een Google Sheet ([delen](partager.html#url)) |

Alleen het Excel-formaat `.xlsx` wordt gelezen. Oude `.xls`-, `.ods`- en `.csv`-bestanden eerst omzetten. Wat van een Excel-bestand behouden blijft, staat in [Compatibiliteit met Excel](excel.html).

warn: Een werkmap openen vervangt de getoonde: sla eerst de wijzigingen op.

### Recente bestanden {#recents}

De browser kan opnieuw toestemming vragen om het bestand te lezen. Een verplaatst, hernoemd of verwijderd bestand wordt uit de lijst gehaald. **%clearRecentFiles%** maakt ze leeg. De lijst blijft in deze browser, op deze computer.

## Opslaan {#enregistrer}

### Chrome en Edge

| Opdracht | Effect |
| --- | --- |
| {save}, **%file% › %save%**, [[Ctrl+S]] | vraagt de eerste keer waar het bestand moet komen; vervangt het daarna zonder vragen |
| **%file% › %saveAs%** | een ander bestand kiezen |

Een bestand dat met {open}, uit de lijst of door neerzetten is geopend, wordt op zijn plaats opgeslagen; de browser vraagt één keer toestemming om het te wijzigen.

De naam van de werkmap staat aan het eind van de menubalk. Een rode stip wijst op niet-opgeslagen wijzigingen; de titel van het browsertabblad begint dan met ●.

### Firefox, Safari

Deze browsers laten niet toe in een bestand te schrijven. **%file% › %export%** of [[Ctrl+S]] downloadt de werkmap, onder de naam van de geopende werkmap.

## Een niet-opgeslagen werkmap herstellen {#recuperer}

Zolang er niet-opgeslagen wijzigingen zijn, bewaart DocCells een kopie in de browser, minder dan een seconde na elke wijziging bijgewerkt. Sluit de pagina zonder opslaan, dan stelt DocCells bij het volgende openen met de datum van de kopie voor ze te herstellen (**%restore%**) of niet (**%ignore%**).

- Opslaan, exporteren of een andere werkmap openen wist deze kopie.
- De kopie negeren verwijdert ze definitief.
- De kopie wordt alleen gemaakt als DocCells de hele pagina inneemt, niet als het in een andere is ingesloten.

## Taal {#langue}

DocCells neemt de taal van de browser onder de twaalf van zijn interface: Chinees (vereenvoudigd en traditioneel), Duits, Engels, Frans, Grieks, Hindi, Italiaans, Nederlands, Portugees, Russisch, Spaans. Voor de andere geldt Engels. `?lang=nl` in het adres legt een taal op.

De taal verandert de menu’s, de functienamen, het decimaalteken, het valutasymbool en de volgorde van getoonde datums. Het opgeslagen bestand hangt er niet van af: een in het Frans geschreven werkmap opent in het Duits met Duitse formules.

=== interface
# De interface

![Het venster van DocCells](interface.webp 1280x760)

Van boven naar beneden: de menubalk, de knoppenbalk, de formulebalk, het blad, de bladtabs en de zoom.

## De menu’s {#menus}

| Menu | Inhoud |
| --- | --- |
| **%file%** | [openen, opslaan](demarrage.html), [afdrukken](impression.html) |
| **%edit%** | ongedaan maken, opnieuw, [omlaag, naar rechts doorvoeren](selection.html#recopier) |
| **%view%** | [rasterlijnen](mise-en-forme.html#quadrillage), [blokkeren](lignes-colonnes.html#figer) |
| **%insert%** | [afbeelding](images-liens.html), [grafiek](graphiques.html), [selectievakje, keuzelijst](controles.html) |
| **%format%** | [getal](nombres.html), [tekst, uitlijning, samenvoegen](mise-en-forme.html), [afwisselende kleuren](mise-en-forme.html#alternees), [voorwaardelijke opmaak](conditionnelle.html) |
| **%data%** | [sorteren en filteren](tri-filtre.html) |
| **%tools%** | [beveiligen](protection.html), deze handleiding (**%manual%**), DocTools, broncode, versie (**%about%**) |

Een vinkje wijst op een actieve optie: zichtbare rasterlijnen, geblokkeerde cellen, vet, filter, beveiligde werkmap.

![Het opmaakmenu en de getalnotaties](menus.webp 1280x620)

## De knoppenbalk {#boutons}

| Knop | Rol |
| --- | --- |
| {open} {save} | [openen, opslaan](demarrage.html) |
| {gridlines} | de [rasterlijnen](mise-en-forme.html#quadrillage) tonen of verbergen |
| {alternating} | [afwisselende kleuren](mise-en-forme.html#alternees) |
| {conditional} | [voorwaardelijke opmaak](conditionnelle.html) |
| {protect} | [beveiligen](protection.html); blauwig als de werkmap beveiligd is |
| {chart} | [een grafiek invoegen](graphiques.html) |
| {image} | [een afbeelding invoegen](images-liens.html) |
| {undo} {redo} | ongedaan maken, opnieuw |
| {clear-format} | de opmaak wissen |
| {percentage-format} {number-decrease} {number-increase} | [percentage, minder of meer decimalen](nombres.html) |
| **%fGeneral%**, **Arial**, **10** | getalnotatie, lettertype, grootte |
| {bold} {italic} {underline} | vet, cursief, onderstreept |
| {font-color} {background} | tekstkleur, achtergrondkleur |
| {border-all} {merge-all} | [randen, samenvoegen](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | uitlijningen, draaiing, terugloop |
| {freeze-row-col} | [blokkeren](lignes-colonnes.html#figer) |
| {formula-sum} | [automatische som](formules.html#somme) en andere formules |
| {filter} | [sorteren en filteren](tri-filtre.html) |

Het pijltje van een knop opent zijn keuzes; de knop zelf herhaalt de laatste. In een smal venster zitten de laatste knoppen achter {more}.

## De formulebalk {#barre}

- Links het **naamvak**: het adres van de selectie, of de [naam van het bereik](noms.html). Zijn pijl somt de benoemde bereiken op en opent het namenbeheer.
- Rechts van *fx* de inhoud van de cel, formule inbegrepen: die kan daar gewijzigd worden.

## Het blad {#feuille}

- Rechtsklikken opent een menu naargelang de plaats: cel, kolom- of rijkop, bladtab.
- Een nieuw blad heeft 84 rijen en 60 kolommen (A tot BH). Er komen er bij met rechtsklikken, **%insertCells%** ([rijen en kolommen](lignes-colonnes.html)).
- De blauwe greep aan de hoek van de selectie [voert door](selection.html#recopier).

## Tabs en zoom {#zoom}

Onderaan voegt {plus} een blad toe, {all-sheets} somt ze allemaal op ([werkbladen](feuilles.html)). Rechts stellen **−** en **+** de zoom in; een klik op het percentage biedt 10 % tot 400 % aan.

## Ongedaan maken {#annuler}

{undo} of [[Ctrl+Z]] maakt ongedaan, {redo}, [[Ctrl+Y]] of [[Ctrl+Shift+Z]] doet opnieuw: invoer, plakken, opmaak, invoegingen. De geschiedenis begint opnieuw als een werkmap wordt geopend, de rasterlijnen worden getoond of verborgen, de werkmap wordt beveiligd, of een naam of regel voor voorwaardelijke opmaak wordt toegevoegd. Grafieken horen er niet bij: ze worden met hun knoppen [gewijzigd of verwijderd](graphiques.html#modifier).

=== saisie
# Gegevens invoeren

## In een cel schrijven {#ecrire}

| Handeling | Effect |
| --- | --- |
| op een geselecteerde cel typen | vervangt de inhoud |
| dubbelklikken, [[F2]] of [[Enter]] | wijzigt de inhoud |
| [[Enter]] | bevestigt en gaat een cel omlaag |
| klikken in een andere cel | bevestigt |
| [[Esc]] | breekt de invoer af |
| [[Alt+Enter]] | nieuwe regel in de cel |
| [[Delete]] of [[⌫]] | maakt de geselecteerde cellen leeg, ook selectievakjes en keuzelijsten; de opmaak blijft |
| rechtsklikken › **%clearContent%** | hetzelfde |

Tijdens het invoeren verplaatsen de pijltoetsen de cursor in de tekst. Anders wisselen de pijltoetsen, [[Tab]] en [[Shift+Tab]] van cel.

## Wat DocCells herkent {#types}

| Je typt | Je krijgt |
| --- | --- |
| `12`, `-3`, `1e5` | een getal, rechts uitgelijnd |
| `n:2.5` | een decimaal getal; de komma is het Nederlandse decimaalteken |
| `n:1,234.5` | het getal 1234,5; om de punt van de duizendtallen te tonen, een [notatie](nombres.html) kiezen |
| `25%`, `n:2.5%` | een percentage |
| `2026-11-25`, `2026/11/25` | een datum |
| `2026-11-25 14:30` | een datum en een tijd |
| `TRUE`, `FALSE` | een logische waarde |
| `n:[2, 1]` | een [lijst](listes.html) |
| `=A1+B1` | een [formule](formules.html) |
| al het andere | een tekst, links uitgelijnd |

### Datums {#dates}

Een datum wordt met het jaar eerst getypt: `2026-11-25`. `25-11-2026` blijft een tekst, waarmee niet gerekend wordt. Om ze gewoon te tonen, **%format% › %number% › %fDate%** (`%xDate%`) of een [aangepaste notatie](nombres.html#personnalise) kiezen.

Dubbelklikken op een datumcel opent een [kalender](controles.html#calendrier). `=TODAY()` geeft de datum van vandaag.

### Teksten van cijfers {#textes}

Een nummer dat met nul begint, verliest die nul: `007` wordt 7. Om ze te behouden, de cellen eerst de notatie **%fText%** geven (**%format% › %number% › %fText%**), of met een apostrof beginnen: `'007`.

## Veelvoorkomende invoerfouten {#erreurs}

| Je ziet | Oorzaak |
| --- | --- |
| een links uitgelijnd getal | het is een tekst: een decimale punt in plaats van een komma, een eenheid (`12 €`), een spatie te veel |
| `46351` in plaats van een datum | een datum in de notatie **%fGeneral%**: geef ze de notatie **%fDate%** |
| de tekst afgekapt door de buurcel | de [kolom](lignes-colonnes.html#taille) verbreden, of **%wrap%** kiezen |

Voor een eenheid alleen het getal invoeren en het een [notatie](nombres.html) geven: valuta, of aangepast zoals `c:0.00 "m"`.

=== selection
# Selecteren, kopiëren, doorvoeren

## Selecteren {#selectionner}

| Handeling | Selectie |
| --- | --- |
| klikken | een cel |
| slepen | een bereik |
| klikken, dan [[Shift]] en klikken | het bereik ertussen |
| [[Shift]] en pijltoets | breidt het bereik uit |
| [[Ctrl]] en klikken of slepen | een bereik erbij |
| klikken op een letter, een nummer | een kolom, een rij |
| slepen over de letters, de nummers | meerdere kolommen, meerdere rijen |
| [[Ctrl+A]] | het hele blad |
| naamvak, pijl | een [benoemd bereik](noms.html) |

Het adres van de selectie staat in het naamvak, links van de formulebalk.

## Kopiëren, knippen, plakken {#copier}

[[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]], of **%copy%** en **%paste%** van het rechtsklikmenu.
- **%paste%** van het rechtsklikmenu plakt de waarden, zonder de formules; [[Ctrl+V]] plakt de formules.
- Een geplakte formule volgt haar nieuwe plaats: `=B2` één rij lager gekopieerd wordt `=B3`. Het teken `$` zet een rij of kolom vast ([verwijzingen](formules.html#references)).
- Een geknipte formule behoudt haar verwijzingen.
- Een tabel gekopieerd uit Excel, Numbers, een webpagina of een door tabs gescheiden tekst wordt cel per cel geplakt; decimale getallen en lijsten worden herkend zoals bij het typen.
- Meerdere bereiken kunnen niet tegelijk geknipt of geplakt worden.

## Verplaatsen {#deplacer}

De rand van de selectie slepen: de cellen worden verplaatst, met hun opmaak.

## Doorvoeren {#recopier}

De blauwe greep, rechtsonder aan de selectie, wordt omlaag, omhoog, naar links of naar rechts gesleept.

| Begincellen | De greep geeft |
| --- | --- |
| een formule | de formule, met verschoven verwijzingen |
| twee getallen, 1 en 2 | de reeks: 3, 4, 5… |
| één getal, tekst of datum | dezelfde waarde |
| twee datums | de volgende datums, met dezelfde stap |

![De met de greep voortgezette reeks 1, 2](recopie.webp 760x300)

Zonder muis, of voor een groot bereik:

| Opdracht | Effect |
| --- | --- |
| **%edit% › %fillDown%**, [[Ctrl+D]] | de eerste rij van het geselecteerde bereik wordt in de volgende gekopieerd |
| **%edit% › %fillRight%**, [[Ctrl+R]] | de eerste kolom wordt in de volgende gekopieerd |

Is er één rij geselecteerd, dan kopieert [[Ctrl+D]] er die erboven in; is er één kolom geselecteerd, dan kopieert [[Ctrl+R]] er die links van in. Deze opdrachten kopiëren altijd, zonder reeks, met notaties, randen, selectievakjes en keuzelijsten.

tip: Voor een formule in een hele kolom: ze bovenaan typen, van die cel tot de laatste selecteren, [[Ctrl+D]].

=== formules
# Formules

## Een formule schrijven {#ecrire}

Een formule begint met `=`. Ze bevat getallen, teksten tussen aanhalingstekens, celverwijzingen, operatoren en [functies](fonctions.html).

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="Totaal: "&SUM(B2:B6)
```

De cel toont het resultaat, de formulebalk de formule. Cellen die van een gewijzigde cel afhangen, worden meteen herberekend.

In het Nederlands is de komma decimaal en scheidt de puntkomma de argumenten: `=ROUND(3.14159, 2)`. Functienamen worden in kleine letters of hoofdletters getypt, in het Nederlands of het Engels: `=som(B2:B6)` en `r:=SUM(B2:B6)` worden aanvaard.

## Cellen met de muis aanwijzen {#souris}

Tijdens het schrijven van een formule voegt een klik op een cel van het blad haar adres in, slepen het bereik. Elke verwijzing heeft haar kleur, in de formule en op het blad.

## Aanvullen {#completion}

Vanaf de eerste letters van een naam stelt DocCells de functies voor die ze bevatten: [[↑]] [[↓]] om te doorlopen, [[Enter]], [[Tab]] of een klik om te kiezen. Na het openingshaakje herinnert een hulpvak aan de argumenten.

![De na de eerste letters voorgestelde functies](completion.webp 760x560)

![De hulp van een functie](aide-formule.webp 760x560)

## De automatische som {#somme}

{formula-sum} schrijft een som. De pijl biedt **%sum%**, **%average%**, **%count%**, **%max%**, **%min%** en **%allFormulas%** aan: de bibliotheek, waar je een functie zoekt op naam, beschrijving of categorie.

![De formulebibliotheek](bibliotheque.webp 1280x760)

## Operatoren {#operateurs}

| Operator | Rol |
| --- | --- |
| `+` `-` `*` `/` | vier bewerkingen |
| `^` | macht: `=2^10` |
| `%` | percentage: `=20%*B2` |
| `&` | voegt teksten samen: `=A2&" "&B2` |
| `=` `<>` | gelijk, verschillend |
| `<` `>` `<=` `>=` | vergelijkingen |
| `( )` | voorrang |

Machten gaan voor producten en quotiënten, dan sommen, dan vergelijkingen. `=-2^2` geeft −4 (4 in Excel).

## Verwijzingen {#references}

| Schrijfwijze | Betekenis |
| --- | --- |
| `B2` | een cel; volgt het doorvoeren |
| `$B$2` | dezelfde cel, ook bij doorvoeren |
| `B$2`, `$B2` | vaste rij, vaste kolom |
| `B2:D6` | een bereik |
| `B:B`, `2:2` | een hele kolom, een hele rij |
| `%sheet%2!B2`, `'Cijfers 2'!B2` | een cel van een [ander blad](feuilles.html#references) |
| `cijfers` | een [benoemd bereik](noms.html) |

Omlaag doorgevoerd wordt `=B2*$B$1` tot `=B3*$B$1`, `=B4*$B$1`…

## Voorwaarden {#conditions}

```
=IF(B2>=10, "geslaagd", "gezakt")
=IF(AND(B2>=10, C2>=10), "ja", "nee")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- Logische waarden worden `@TRUE()` en `@FALSE()` geschreven, met haakjes. Ze worden als TRUE en FALSE getoond.
- Een criterium is een tekst: `">10"`, `"<>0"`, `"Ana"`. De jokertekens `*` en `?` worden niet herkend.
- Een lege cel herken je met `=B2=""`; ze is niet gelijk aan 0.

## Opzoeken in een tabel {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

De eerste zoekt Léa in de eerste kolom van de tabel en geeft de derde; het laatste argument 0 vraagt de exacte waarde. De tweede geeft de naam van wie het beste cijfer heeft.

## Datums en tijden {#dates}

Een datum is een aantal dagen, een tijd een deel van een dag: in cellen kun je ze optellen en aftrekken.

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

Een datum van `@DATE` of `@TODAY` moet via een cel gaan om ermee op te tellen: `=TODAY()+1` geeft `#VALUE!`, maar als A1 `=TODAY()` bevat, geeft `=A1+1` morgen. Het resultaat is een getal: geef het een notatie **%fDate%**.

## Fouten {#erreurs}

| Getoond | Oorzaak |
| --- | --- |
| `#NAME?` | onbekende naam: typefout, [niet berekende](fonctions.html#non-calculees) functie, `@TRUE` zonder haakjes, tekst zonder aanhalingstekens |
| `#VALUE!` | onverwacht type: een tekst waar een getal nodig is |
| `DIV/0` | deling door nul of door een lege cel |
| `#N/A` | waarde niet gevonden (`@MATCH`, `@VLOOKUP`), of `GEO` buiten DocGeo |
| `#REF!` | cel of blad dat niet bestaat |
| `#NUM!` | getal buiten het domein: `=SQRT(-1)` |
| `#ERROR!` | verkeerd geschreven formule, of niet berekende functie |

`@IFERROR` vervangt de fout van een functie (`#N/A`, `#NUM!`): `=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "afwezig")`. Die van een berekening (`DIV/0`, `#VALUE!`) vervangt ze niet: test tegen een deling door nul de deler, `=IF(B2, B3/B2, "")`, wat geldt voor een nul en voor een lege cel.

=== listes
# Lijsten en complexe getallen

> Een cel van DocCells kan een lijst getallen bevatten. Een lijst van twee getallen is ook een punt van het vlak, of een complex getal.

## Een lijst schrijven {#ecrire}

Tussen rechte haken, elementen gescheiden door puntkomma’s. Een lijst kan lijsten bevatten.

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

Zonder `=` is de lijst een waarde; met `=` kunnen de elementen berekeningen zijn. In een taal met decimale punt worden de elementen door komma’s gescheiden: `r:[2, 1]`.

## Bewerkingen {#operations}

| Bewerking | Resultaat |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`: term voor term, gelijke lengtes |
| `n:[1, 2, 3] * 2`, `n:[2, 4, 6] / 2` | `n:[2, 4, 6]`, `n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`: product van complexe getallen |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`: quotiënt van complexe getallen |
| `n:[2, 1] + 3` | `n:[5, 1]`: 3 is een reëel complex getal |
| `n:[0, 1]^2` | `n:[-1, 0]`, op afronding na |
| `n:[8, 0]^(1/3)` | de lijst van de drie derdemachtswortels |
| `n:-[2, 1]` | `n:[-2, -1]` |

Elke andere combinatie geeft `#VALUE!`: product van twee lijsten van drie getallen, verschillende lengtes, tekst.

## Lijsten en functies {#fonctions}

Een functie ziet een lijst als een bereik:

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` geeft het tweede element van de lijst in A1: de ordinaat van een punt, het imaginaire deel van een complex getal. Enkele [functies](fonctions.html) geven een lijst terug: `@FREQUENCY`, `@LINEST`, `@TRANSPOSE`, `@UNIQUE`, `@SPLIT`.

## Weergave {#affichage}

De knoppen {number-decrease} {number-increase} en de [getalnotaties](nombres.html) gelden voor elk getal van de lijst: `n:[-0.14, 0.27]`. De exacte waarden blijven.

## Voorbeeld: een complexe rij {#exemple}

De baan van 0 onder *z* ↦ *z*² + *c*: A1 bevat *c*, A2 `n:[0, 0]`, A3 de formule hieronder, omlaag doorgevoerd.

```
=A2^2+$A$1
```

In [DocGeo](docgeo.html) wordt zo’n kolom in de figuur getekend.

note: In een Excel-bestand wordt een lijst als tekst opgeslagen, en ook de waarde van een formule die een lijst geeft ([compatibiliteit](excel.html#listes)).

=== noms
# Benoemde bereiken

## Een naam geven {#definir}

1. De cel of het bereik selecteren.
2. Rechtsklikken › **%defineName%** (of de pijl van het naamvak › **%nameManager%**).
3. De naam typen, het bereik van de naam kiezen, **%nameOk%**.

![Het venster voor een nieuwe naam](noms.webp 1280x760)

| Veld | Inhoud |
| --- | --- |
| **%nameField%** | begint met een letter of `_`; letters, cijfers, `_` en `.`, zonder spatie; geen adres zoals `B2` |
| **%scope%** | **%workbook%**: gelezen vanuit alle bladen; een blad: alleen daaruit gelezen, waar de naam voorgaat op een naam van de werkmap |
| **%refersTo%** | een cel of een bereik, met zijn blad: `'%sheet%1'!$B$2:$B$6` |

## Een naam gebruiken {#utiliser}

```
=AVERAGE(cijfers)
=prijs*(1+btw)
```

- De pijl van het naamvak somt de namen op: er een kiezen selecteert het bereik, in zijn blad.
- Is de selectie precies een benoemd bereik, dan toont het naamvak de naam.
- Een [keuzelijst](controles.html#listes) kan een celbereik lezen, aangeduid met zijn adres.

## Wijzigen, verwijderen {#gerer}

In het **%nameManager%** zet een klik op een naam zijn velden weer in wijziging; **%nameRemove%** verwijdert hem; **%nameNew%** keert terug naar een lege naam. Vervang vóór het verwijderen van een naam de formules die hem lezen: ze behouden hun laatste waarde en worden daarna niet meer berekend.

Namen worden in het Excel-bestand opgeslagen en eruit gelezen.

=== feuilles
# Werkbladen

## Toevoegen, wisselen {#ajouter}

- {plus} voegt een blad toe, „%sheet%2”, „%sheet%3”… genoemd.
- Een klik op een tab toont het blad; {all-sheets} somt de bladen op, ook de verborgen, en toont het gekozen blad.

## Het menu van een tab {#menu}

Rechtsklikken op de tab, of de pijl ervan:

| Opdracht | Effect |
| --- | --- |
| **%sheetDelete%** | na bevestiging; het laatste zichtbare blad kan niet verwijderd worden |
| **%sheetCopy%** | verdubbelt het blad |
| **%sheetRename%** | of dubbelklikken op de naam; zonder `[ ] : ? * / ' "` |
| **%sheetColor%** | kleur van de tab |
| **%sheetHide%** | formules lezen het blad nog steeds; {all-sheets} toont het weer |
| **%sheetLeft%**, **%sheetRight%** | verandert de volgorde; de tab kan ook gesleept worden |

## Een ander blad lezen {#references}

De naam van het blad, een uitroepteken, het adres. De naam staat tussen apostrofs als hij een spatie of een teken bevat.

```
=%sheet%2!B2*2
='Cijfers 2'!B2
=SUM('Cijfers 2'!B2:B6)
```

De verwijzing wordt getypt: van tab wisselen tijdens het invoeren van een formule breekt de invoer af.

Om een bereik vanuit alle bladen met een naam te lezen, het [benoemen](noms.html) met **%workbook%** als bereik.

=== nombres
# Getalnotaties

> Een notatie verandert hoe een getal getoond wordt, niet zijn waarde: berekeningen behouden alle decimalen.

## Een notatie kiezen {#choisir}

**%format% › %fNumber%**, of de lijst **%fGeneral%** van de knoppenbalk.

| Notatie | Voorbeeld |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`, links uitgelijnd; de invoer blijft een tekst |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`; 0,25 wordt `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**, **%fTime%**, **%fDateTime%** | voor datums: `%xDate%`, `3:00 PM`, `15:00`… |

Het valutasymbool is dat van de taal van de interface.

| Knop | Effect |
| --- | --- |
| {percentage-format} | percentage |
| {number-decrease} | een decimaal minder |
| {number-increase} | een decimaal meer |

Deze knoppen gelden ook voor de getallen van een [lijst](listes.html). Om de waarde zelf af te ronden, `@ROUND` gebruiken.

## Aangepaste notatie {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**: een voorgestelde notatie kiezen, of een code schrijven. Het voorbeeld toont het resultaat; **%guide%** herinnert aan de tekens; **%apply%** geeft ze aan de selectie.

![Het venster van de aangepaste getalnotaties](format-personnalise.webp 1280x760)

| Teken | Rol | Code | 1234,5 wordt getoond |
| --- | --- | --- | --- |
| `0` | een cijfer, ook nul | `c:0.00` | `n:1234.50` |
| `#` | een cijfer als het nodig is | `c:#.##` | `n:1234.5` |
| `c:,` | groepeert de duizendtallen | `c:#,##0` | `n:1,235` |
| `%` | percentage | `0%` | `123450%` |
| `"tekst"` | een tekst, een eenheid | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | wetenschappelijke notatie | `c:0.00E+00` | `n:1.23E+03` |
| `;` | notaties voor positief, negatief, nul, tekst | `0;-0;"nul"` | `1235` |
| `[Red]` | kleur | `0;[Red]-0` | negatieve getallen in het rood |

De code wordt met de scheidingstekens van de taal getypt; het venster toont de vorm waarin ze wordt opgeslagen (`#,##0.00`), dezelfde als in Excel.

### Datums en tijden {#dates-heures}

| Code | 29 augustus 2026, 14.30 uur |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

Namen van maanden en dagen worden in het Engels getoond.

### Eenheden {#unites}

Onder **%units%** notaties als `c:0.00 "V"`, `c:0.00 "Ω"`, `c:0.00 "mm"`: de cel blijft een getal, waarmee gerekend wordt.

=== mise-en-forme
# Opmaak

## Tekst {#texte}

| Opdracht | Toegang |
| --- | --- |
| vet, cursief, onderstreept | {bold} {italic} {underline}; [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] |
| lettertype | lijst **Arial**: dertien lettertypen |
| grootte | lijst **10**, of **%formatMenu% › %fontSize%**: 9 tot 72 |
| tekstkleur, achtergrondkleur | {font-color} {background} |
| opmaak wissen | {clear-format}, **%formatMenu% › %clearFormat%** |

In het palet van een kleur haalt **%resetColor%** ze weg; **%customColor%** opent de kleurkiezer van het systeem.

Tijdens het wijzigen van een cel geldt de opmaak voor het geselecteerde deel van de tekst.

## Uitlijning {#alignement}

| Opdracht | Keuzes |
| --- | --- |
| {align-left} horizontaal | links, midden, rechts |
| {align-top} verticaal | boven, midden, onder |
| {text-rotation-none} draaiing | schuin, verticaal, gestapeld |
| {text-overflow} terugloop | **%wrapOverflow%**: over de lege buurcellen; **%wrap%**: op meerdere regels; **%wrapClip%**: afgekapt aan de rand |

Zonder gekozen uitlijning staan getallen en datums rechts, de rest links.

## Randen {#bordures}

{border-all} tekent de gekozen rand; de pijl geeft de zijden (boven, buiten, binnen, alle, geen, diagonaal), de **kleur** en de **stijl** van de lijn. Kies kleur en stijl vóór de zijde.

## Samenvoegen {#fusion}

{merge-all} of **%formatMenu% › %mergeCells%**:

| Opdracht | Effect |
| --- | --- |
| **%mergeAll%** | één cel, die één inhoud behoudt |
| **%mergeVertical%** | één cel per kolom |
| **%mergeHorizontal%** | één cel per rij |
| **%unmerge%** | geeft de cellen terug |

Een bereik met samengevoegde cellen kan niet gesorteerd of gefilterd worden.

## Afwisselende kleuren {#alternees}

{alternating} of **%formatMenu% › %alternatingColors%** kleurt om de andere rij van het geselecteerde bereik, desgewenst met een koprij. De drie kleuren zijn te kiezen.

![Het venster van de afwisselende kleuren](couleurs-alternees.webp 1280x760)

Het zijn gewone achtergrondkleuren: ze volgen geen sortering of ingevoegde rij. **%clearAlternating%** wist ze uit het bereik.

## Rasterlijnen {#quadrillage}

{gridlines} of **%view% › %show% › %gridlines%** verbergt of toont de grijze lijnen, in alle bladen van de werkmap. Het [afdrukken](impression.html) heeft zijn eigen instelling.

Voor een kleur die van de waarde afhangt, zie [Voorwaardelijke opmaak](conditionnelle.html).

=== conditionnelle
# Voorwaardelijke opmaak

> Een regel verandert het uiterlijk van de cellen van een bereik die aan een voorwaarde voldoen. Hij volgt de waarden, ingevoerd of berekend.

## Een regel maken {#creer}

1. Het bereik selecteren, zonder zijn kop.
2. {conditional} of **%format% › %conditionalFormatting%**.
3. De voorwaarde, de vergelijkingswaarde, de kleuren of de stijl kiezen.
4. **%cfAdd%**.

![Het venster van de voorwaardelijke opmaak, met een toegepaste regel](conditionnelle.webp 1280x760)

| Voorwaarde | De cel |
| --- | --- |
| `<` | is kleiner dan |
| `>` | is groter dan |
| `=` | is gelijk aan |
| `!=` | is verschillend van |
| `[]` | ligt tussen twee waarden, grenzen inbegrepen |
| `abc` | bevat een tekst, hoofdletters of kleine letters |

## Waarmee vergelijken {#comparer}

| %cfCompareTo% | Voorbeeld |
| --- | --- |
| **%cfValue%** | de cijfers onder 10 |
| **%cfCell%** | de cijfers onder de drempel in `F1` |
| **%cfColumn%** | in kolom C de waarden boven die van kolom B, rij per rij |

## Uiterlijk {#apparence}

**%cfText%** en **%cfBackground%** kiezen de kleuren, **%cfNone%** haalt ze weg; **B**, *I*, **U** zetten vet, cursief, onderstreept. Er is minstens één kleur of stijl nodig.

## Meerdere regels {#regles}

De linkerkolom somt de regels van het blad op: **%cfEdit%**, **%cfDelete%**. Gelden meerdere regels voor een cel, dan gaat de laatste van de lijst voor, kleur per kleur.

warn: In een bereik met een regel worden tekst- en achtergrondkleuren die rechtstreeks aan de cellen zijn gegeven, niet meer getoond.

De regels worden in het Excel-bestand opgeslagen als voorwaardelijke opmaak van Excel.

=== lignes-colonnes
# Rijen en kolommen

## Grootte {#taille}

| Handeling | Effect |
| --- | --- |
| de rechterrand van een kolomkop slepen | verandert de breedte |
| de onderrand van een rijkop slepen | verandert de hoogte |
| rechtsklikken op de kop › **%width%**, **%height%** | grootte in pixels, voor alle geselecteerde kolommen of rijen |

## Invoegen, verwijderen {#inserer}

Rechtsklikken in een cel of op een kop: **%rowAbove%**, **%rowBelow%**, **%columnLeft%**, **%columnRight%**. Het aantal wordt in het veld getypt. Rechtsklikken op een kop: **%deleteRow%**, **%deleteColumn%**.

![Het rechtsklikmenu](menu-contextuel.webp 760x650)

Formules worden aangepast: hun verwijzingen volgen de verplaatste cellen. De grens is 10 000 rijen en 1 000 kolommen.

## Verbergen {#masquer}

Rechtsklikken op de kop › **%hideRow%**, **%hideColumn%**. Verborgen cellen worden nog berekend. Om ze weer te tonen, de koppen eromheen selecteren, dan rechtsklikken › **%showHidden%**.

## Blokkeren {#figer}

Geblokkeerde rijen en kolommen blijven zichtbaar bij het schuiven. De grenscel selecteren, dan {freeze-row-col} of **%view% › %freeze%**:

| Opdracht | Blijven zichtbaar |
| --- | --- |
| **%freezeRow%** | de rijen tot en met die van de cel |
| **%freezeColumn%** | de kolommen tot en met die van de cel |
| **%freezeCell%** | beide |
| **%freezeCancel%** | niets in het bijzonder |

Om de koprij te behouden: een cel van rij 1 aanklikken, **%freezeRow%**.

=== tri-filtre
# Sorteren, filteren, zoeken

## Sorteren {#trier}

| Opdracht | Effect |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**, **%sortDescending%** | sorteert de selectie op haar eerste kolom; ook met {filter} en met rechtsklikken |
| rechtsklikken › **%sortRange%** | kiest de kolom, de volgorde, en of de eerste rij een kop is |

![Het venster om een bereik te sorteren](tri.webp 1280x760)

De hele tabel selecteren, niet één kolom: de rijen moeten heel blijven. Een bereik met samengevoegde cellen wordt niet gesorteerd.

## Filteren {#filtrer}

1. De tabel selecteren, kop inbegrepen.
2. **%data% › %sortAndFilter% › %createFilter%**, of {filter}, of rechtsklikken › **%filterRange%**.
3. De pijl van een kolom aanklikken.

![Het filter van een kolom](filtre.webp 1280x760)

| In het menu van een kolom | Effect |
| --- | --- |
| **%sortByAsc%**, **%sortByDesc%** | sorteert de rijen van de tabel |
| **%filterByColor%** | op achtergrond- of tekstkleur |
| **%filterByValues%** | de te behouden waarden aanvinken; **%filterAll%**, **%filterNone%**, **%filterInverse%**; het veld zoekt een waarde |
| **%filterConfirm%** | past toe |
| **%clearFilter%** | haalt het filter van de tabel weg |

Uitgesloten rijen worden verborgen, niet verwijderd. De filters van meerdere kolommen werken samen. **%data% › %sortAndFilter% › %clearFilter%** haalt het filter weg.

## Zoeken, vervangen {#rechercher}

[[Ctrl+F]] opent **%find%**, [[Ctrl+H]] **%replace%**.

![Het zoeken](rechercher.webp 1280x660)

| Optie | Effect |
| --- | --- |
| **%regex%** | de gezochte tekst is een reguliere expressie: `^A` vindt wat met A begint |
| **%wholeWord%** | de hele cel is gelijk aan de tekst |
| **%matchCase%** | onderscheidt hoofdletters en kleine letters |
| **%findAll%** | somt de gevonden cellen op; een klik op een regel gaat erheen |
| **%findNext%** | gaat naar de volgende |
| **%replaceOne%**, **%replaceAll%** | één cel, alle |

Er wordt in het getoonde blad gezocht.

=== controles
# Selectievakjes, lijsten en kalender

![Selectievakjes, een keuzelijst en de kalender van een datum](controles.webp 1280x560)

## Selectievakjes {#cases}

De cellen selecteren, **%insert% › %checkbox%**. Een klik vinkt aan of uit; de cel is TRUE of FALSE.

```
=IF(B2, "klaar", "te doen")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

De tweede formule telt de waarden van kolom C op waarvan het vakje is aangevinkt; de derde telt de aangevinkte vakjes.

## Keuzelijsten {#listes}

De cellen selecteren, **%insert% › %dropdown%**.

| Bron | Inhoud |
| --- | --- |
| **%listValues%** | de opties, één per veld; **%addOption%**; zonder komma |
| **%listRange%** | een bereik waarvan de cellen de opties zijn: `%sheet%2!$A$1:$A$10` |

Een bereik zonder `$` verschuift van cel tot cel, zoals een doorgevoerde formule. Veranderen de cellen ervan, dan volgen de opties.

De cel toont een pijl; een klik opent de opties. Een andere waarde dan die van de lijst wordt niet aanvaard.

## Kalender {#calendrier}

Dubbelklikken op een datumcel opent een kalender: een dag kiezen, van maand wisselen met **<** en **>**, **%today%** voor de datum van vandaag. Hij opent op elke cel met een datumnotatie, ook een lege, behalve als ze een formule bevat of [vergrendeld](protection.html) is.

tip: Voor een datumkolom die met de kalender ingevuld wordt: ze selecteren en de notatie **%fDate%** geven.

## Weghalen {#retirer}

[[Delete]] haalt het vakje of de lijst uit de cel weg, met de waarde.

Vakjes en lijsten worden in het Excel-bestand opgeslagen; de vakjes zijn er selectievakjes van Excel.

=== graphiques
# Grafieken en sparklines

## Een grafiek maken {#creer}

1. De gegevens selecteren.
2. {chart} of **%insert% › %chart%**.
3. Het type en de opties kiezen; het voorbeeld volgt.
4. **%chartAdd%**, dan **%chartClose%**.

![Het grafiekvenster](graphique.webp 1280x900)

| Selectie | Opgevat als |
| --- | --- |
| een kolom of rij getallen | de gegevens |
| twee kolommen | labels in de eerste, gegevens in de tweede |
| twee rijen | labels in de eerste, gegevens in de tweede |
| twee losse kolommen, gekozen met [[Ctrl]] | hetzelfde |

Een grafiek toont één reeks: een rij of kolom gegevens. Cellen zonder getal, zoals een kop, worden overgeslagen.

## Typen {#types}

| Type | Voor | Labels |
| --- | --- | --- |
| **%tBar%** | vergelijken | onder de balken |
| **%tLine%** | een verloop | op de x-as |
| **%tScatter%** | een verband tussen twee grootheden | het zijn de x-waarden, als het getallen zijn; anders 1, 2, 3… |
| **%tPie%** | delen; positieve waarden | in de legenda of op de sectoren |

Tot 120 waarden, 24 voor sectoren.

![De vier soorten grafieken](graphiques.webp 1280x640)

## Opties {#options}

| Veld | Inhoud |
| --- | --- |
| **%chartTitle%** | verplicht; bovenaan de grafiek getoond |
| **%chartColor%** | kiezer of code `#4F81BD`; sectoren hebben hun eigen kleuren |
| **%chartRange%** | het bereik: `B2:B6` |
| **%chartLabels%** | **%lNone%**; **%lColumn%** (`A`); **%lRow%** (`1`); **%lRange%**, even groot als de gegevens |
| **%chartOptions%** | waarden, legenda, x-as, y-as, raster |

## Verplaatsen, wijzigen {#modifier}

- De titelstrook slepen verplaatst de grafiek; de hoek rechtsonder slepen verandert de grootte.
- **%chartEdit%** heropent het venster, **%chartDelete%** verwijdert de grafiek. Het venster somt ook alle grafieken van het blad op.
- De grafiek volgt de gegevens van zijn cellen.

Grafieken worden in het Excel-bestand als echte grafieken opgeslagen, en door DocCells weer gelezen. Ze worden niet met het blad [afgedrukt](impression.html).

## Sparklines {#sparklines}

De functie `SPARKLINE` tekent een miniatuurgrafiek in de cel.

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![Sparklines als lijn en als kolommen](sparklines.webp 900x300)

Opties staan tussen accolades: de naam, een backslash, de waarde; een puntkomma tussen twee opties.

| `charttype` | Tekening | Eigen opties |
| --- | --- | --- |
| `"line"` (standaard) | lijn | `color`, `linewidth`, `xmin`, `xmax`, `ymin`, `ymax` |
| `"bar"` | gestapelde balken | `max`, `color1`, `color2` |
| `"column"` | kolommen | `color`, `negcolor`, `lowcolor`, `highcolor`, `firstcolor`, `lastcolor`, `axis`, `axiscolor`, `ymin`, `ymax` |
| `"winloss"` | winst en verlies | dezelfde, zonder `ymin` en `ymax` |

Gemeenschappelijke opties: `empty` (`"zero"` of `"ignore"`), `nan` (`"convert"` of `"ignore"`), `rtl` (van rechts naar links). De [documentatie van SPARKLINE](../../sparkline/nl.html) geeft alle waarden, met voorbeelden.

Voor een grotere tekening de rij en de kolom vergroten, of cellen samenvoegen.

=== images-liens
# Afbeeldingen en links

## Afbeeldingen {#images}

{image} of **%insert% › %image%** voegt een afbeelding van de computer in op de plaats van de selectie.

| Handeling | Effect |
| --- | --- |
| de afbeelding slepen | verplaatst ze |
| een greep slepen | verandert de grootte |
| [[Delete]], met de afbeelding geselecteerd | verwijdert ze |

Afbeeldingen worden in het Excel-bestand opgeslagen, op hun plaats.

## Links {#liens}

Een cel selecteren, rechtsklikken › **%link%**.

| %linkType% | Adres |
| --- | --- |
| webpagina (**%linkWeb%**) | `https://…` |
| celbereik (**%linkCells%**) | `%sheet%1!A1:C8` |
| **%linkSheet%** | een blad van de werkmap |

**%linkText%** wordt de inhoud van de cel, blauw en onderstreept. Is de cel geselecteerd, dan verschijnt **%linkOpen%** eronder.

warn: Links worden niet in het Excel-bestand opgeslagen: alleen hun tekst.

=== impression
# Afdrukken

**%file% › %print%** of [[Ctrl+P]] toont de pagina’s zoals ze afgedrukt worden.

![Het afdrukvoorbeeld](imprimer.webp 1280x760)

| Instelling | Keuzes |
| --- | --- |
| **%printContent%** | het actieve blad, of de cellen die vóór het openen van het venster geselecteerd waren |
| **%printPaper%** | A4, Letter |
| **%printOrientation%** | staand, liggend |
| **%printScale%** | **%printActual%**; **%printWidth%**: alle kolommen op één paginabreedte; **%printPage%** |
| **%printMargins%** | normaal, smal, breed |
| **%printFormatting%** | rasterlijnen, rij- en kolomkoppen, achtergrondkleuren |

**%printButton%** opent het venster van de browser, waar je de printer of opslaan als pdf kiest.

- Alleen de cellen worden afgedrukt, met hun opmaak: geen grafieken, afbeeldingen of sparklines.
- Verborgen rijen en kolommen worden niet afgedrukt.
- Een selectievakje wordt als TRUE of FALSE afgedrukt.
- Er wordt één blad tegelijk afgedrukt.

tip: Om met de grafieken af te drukken, de werkmap opslaan en in Excel of LibreOffice openen.

=== protection
# Beveiligen

> Een beveiligde werkmap kan alleen in de ontgrendelde cellen gewijzigd worden: zo bereid je een oefenblad voor.

## Een blad voor leerlingen voorbereiden {#preparer}

1. De in te vullen cellen selecteren, rechtsklikken › **%unlock%**.
2. {protect} of **%tools% › %protectWorkbook%**.
3. Opslaan, dan [het bestand of de link verspreiden](partager.html).

In het begin zijn alle cellen vergrendeld; dat werkt alleen in een beveiligde werkmap. **%lock%** maakt het ongedaan.

## Wat de beveiliging blokkeert {#effets}

| In een beveiligde werkmap | Vergrendelde cel | Ontgrendelde cel |
| --- | --- | --- |
| typen, wissen | nee | ja |
| kalender van een datum | nee | ja |
| breedtes en hoogtes | nee | nee |
| afwisselende kleuren, invoegen van vakjes en lijsten, doorvoeren via het menu | nee | nee |
| opmaak, invoegen van rijen en kolommen, grafieken | ja | ja |

De beveiliging geldt voor alle bladen. Ze wordt in het Excel-bestand opgeslagen, met de ontgrendelde cellen, en door DocCells en Excel gelezen.

## Leerlingmodus {#eleve}

`?mode=student` in het adres opent DocCells zonder de knop {protect} en zonder de opdrachten **%unlock%** en **%defineName%**; **%protectWorkbook%** is grijs. De leerling kan de beveiliging niet opheffen.

```
https://…/doccells/?mode=student&url=https://…/oefening.xlsx
```

note: Het is een gebruiksbeveiliging, zonder wachtwoord: wie het bestand in een ander rekenblad opent, of zonder `mode=student`, kan ze opheffen.

=== partager
# Delen en insluiten

## Een werkmap via een link {#url}

`?url=` gevolgd door het adres van een `.xlsx`-bestand op internet opent het in DocCells.

```
https://…/doccells/?url=https://voorbeeld.org/cijfers.xlsx
```

De site van het bestand moet lezen door andere sites toestaan (CORS-header); voor een bestand naast DocCells, op dezelfde site, geldt dat niet. Iedereen opent een eigen kopie: wijzigingen gaan niet terug naar het oorspronkelijke bestand.

## Een Google Sheet {#google}

Het adres van een Google Sheet kan ook.

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- Het delen met „Iedereen met de link”.
- DocCells leest bij elk openen een kopie in Excel-formaat: het Google-document wordt niet gewijzigd.
- De site met DocCells moet PHP uitvoeren; hoogstens 25 MB.

## Opties van het adres {#options}

| Optie | Effect |
| --- | --- |
| `url=…` | opent een werkmap of een Google Sheet |
| `mode=student` | [leerlingmodus](protection.html#eleve) |
| `lang=nl` | legt de taal op: `de`, `el`, `en`, `es`, `fr`, `hi`, `it`, `nl`, `pt`, `ru`, `zh-CN`, `zh-TW` |

De opties volgen elkaar, gescheiden door `&`: `?lang=nl&mode=student&url=…`. De eerste komt na `?`.

## In een webpagina {#integrer}

```
<iframe src="https://…/doccells/?url=https://voorbeeld.org/cijfers.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

In een kader heeft DocCells geen menu’s, geen knoppen om te openen en op te slaan, en geen herstelkopie: het toont de knoppenbalk, de formulebalk en het blad.

## Met een programma {#programme}

Een pagina kan DocCells aansturen: een werkmap laden, cellen lezen en schrijven, hun waarden volgen. De optie `embed` opent deze modus; hij is voor ontwikkelaars beschreven in het bestand [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) van het project (in het Frans).

=== docgeo
# Met DocGeo

> DocGeo, de dynamische meetkundesoftware van DocTools, bevat DocCells: een blad naast een figuur, die elkaar lezen.

In DocGeo voegt **%file% › %gView% › %gSheetView%** een blad naast de figuur toe; **%file% › %gTab% › %gSheetTab%** maakt er een tabblad van.

## De functie GEO {#geo}

In een cel leest `GEO` de waarde van een object van de figuur, aangeduid met zijn naam tussen aanhalingstekens.

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'Figuur 1'!c")
```

- De cel volgt de figuur terwijl die bewogen wordt.
- Een punt wordt gelezen als de [lijst](listes.html) van zijn coördinaten: `=GEO("A")*2` is ook een punt.
- Tijdens het schrijven van een formule zet een klik op een object van de figuur er `GEO` en zijn naam in.
- Een onbekend object geeft `#N/A`. Buiten DocGeo geeft `GEO` altijd `#N/A`.
- `GEO` heet in alle talen hetzelfde.

## De figuur leest de cellen {#figure}

In een formule van DocGeo is `!B3` een cel, `!B2:B21` een bereik.

## Verschillen met DocCells alleen {#differences}

| In DocGeo | |
| --- | --- |
| Menu’s en knoppen | in de balken van DocGeo, als het blad actief is |
| Bestand | dat van DocGeo: het blad wordt in het `.dgo` opgeslagen, lijsten en links inbegrepen |
| Bladen | één per weergave; meerdere rekenbladtabbladen lezen elkaar |
| Ongedaan maken | [[Ctrl+Z]] in de cellen geldt alleen voor de cellen |

De pagina [Het rekenblad](https://doctools.org/apps/docgeo/tutorials/nl/tableur.html) van de DocGeo-handleiding geeft de details.

=== fonctions
# Functies

> De %functions% door DocCells berekende functies, per gebied, met elk een voorbeeld.

- Zoeken: een functienaam, Nederlands of Engels, in het veld bovenaan de pagina ([[/]]) typen leidt naar zijn rij.
- Argumenten worden door een puntkomma gescheiden; argumenten tussen rechte haken `[ ]` zijn optioneel. De Engelse naam, in het klein, wordt bij het invoeren aanvaard.
- `@TRUE()` en `@FALSE()` worden met hun haakjes geschreven; 1 en 0 kan ook.
- Een argument „bereik” kan een [lijst](listes.html) zijn: `=AVERAGE([12, 15, 8])`.
- Zie ook [Formules](formules.html): operatoren, verwijzingen, fouten.

## De cellen van de voorbeelden {#exemples}

De voorbeelden lezen dit blad:

%%sample%%

%%functions%%

## Niet berekende functies {#non-calculees}

Het aanvullen en de bibliotheek van DocCells noemen ook functies die niet berekend worden: ze geven `#NAME?` of `#ERROR!`. Hetzelfde geldt voor recente functies van Excel.

| Niet berekend | In plaats daarvan |
| --- | --- |
| `@TEXT`, `@FIXED`, `@DOLLAR` | een [getalnotatie](nombres.html) in de cel |
| `X.ZOEKEN`, `VERSCHUIVING`, `INDIRECT`, `ADRES` | `@INDEX` en `@MATCH`, `@VLOOKUP`, `@CHOOSE` |
| `FILTER`, `SORTEREN`, `REEKS`, `LET`, `LAMBDA` | [sorteren en filteren](tri-filtre.html); een formule [doorvoeren](selection.html#recopier) |
| `MAX.ALS.VOORWAARDEN`, `MIN.ALS.VOORWAARDEN`, `TEKST.COMBINEREN` | een filter; de operator `&` |
| `PRODUCTMAT`, `DETERMINANTMAT`, `INVERSEMAT` | `@SUMPRODUCT`, één formule per element |
| `HYPERLINK` | [een link invoegen](images-liens.html#liens) |
| Excel-namen met punt: `RANK.EQ`, `VAR.S`, `NORM.DIST`… | de naam zonder punt of de oude naam: `@RANK`, `@VAR`, `@NORMDIST` |
| databasefuncties (`@DSUM`…), coupons en effecten (`@PRICE`, `@COUPNUM`…), `@ISBLANK`, `@CELL`, `@ISFORMULA` | `@SUMIFS`; `=A1=""` voor een lege cel |

=== raccourcis
# Sneltoetsen en gebaren

## Bestand {#fichier}

| Toetsen | Effect |
| --- | --- |
| [[Ctrl+O]] | openen |
| [[Ctrl+S]] | opslaan; downloaden, in Firefox en Safari |
| [[Ctrl+P]] | afdrukken |

## Bewerken {#edition}

| Toetsen | Effect |
| --- | --- |
| [[Ctrl+Z]]; [[Ctrl+Y]], [[Ctrl+Shift+Z]] | ongedaan maken; opnieuw |
| [[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] | kopiëren, knippen, plakken |
| [[Ctrl+D]]; [[Ctrl+R]] | omlaag; naar rechts doorvoeren |
| [[Delete]], [[⌫]] | de cellen leegmaken |
| [[Ctrl+F]]; [[Ctrl+H]] | zoeken; vervangen |

## Opmaak {#mise-en-forme}

| Toetsen | Effect |
| --- | --- |
| [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] | vet, cursief, onderstreept |

## Bewegen, selecteren {#se-deplacer-selectionner}

| Toetsen | Effect |
| --- | --- |
| pijltoetsen | buurcel |
| [[Tab]], [[Shift+Tab]] | volgende, vorige cel |
| [[Shift]] en pijltoets | de selectie uitbreiden |
| [[Shift]] en klikken | tot aan de cel selecteren |
| [[Ctrl]] en klikken | aan de selectie toevoegen |
| [[Ctrl+A]] | het hele blad |

## Invoer {#saisie}

| Toetsen | Effect |
| --- | --- |
| [[F2]], [[Enter]], dubbelklikken | de cel wijzigen |
| [[Enter]] | bevestigen, omlaag gaan |
| [[Esc]] | afbreken |
| [[Alt+Enter]] | nieuwe regel in de cel |
| [[↑]] [[↓]], [[Enter]], [[Tab]] | een voorgestelde functie doorlopen, kiezen |
| klikken of slepen op het blad | een verwijzing in de formule invoegen |

## Muis {#souris}

| Gebaar | Effect |
| --- | --- |
| de blauwe greep slepen | [doorvoeren](selection.html#recopier) |
| de rand van de selectie slepen | [verplaatsen](selection.html#deplacer) |
| de rand van een kop slepen | [een breedte, een hoogte veranderen](lignes-colonnes.html#taille) |
| rechtsklikken | menu van de cel, de kop, de tab |
| dubbelklikken op een datum | [kalender](controles.html#calendrier) |
| dubbelklikken op een tab | het blad hernoemen |
| een tab slepen | het blad verplaatsen |
| een `.xlsx`-bestand neerzetten | het openen |

=== excel
# Compatibiliteit met Excel

> DocCells leest en schrijft het Excel-formaat `.xlsx`. Het volgende blijft behouden, in beide richtingen.

## Wat behouden blijft {#conserve}

| Element | Opmerking |
| --- | --- |
| waarden, teksten, datums, formules | formules worden in de taal van DocCells getoond |
| [getalnotaties](nombres.html) | ook aangepaste |
| lettertype, kleuren, uitlijning, draaiing, terugloop | |
| randen, samengevoegde cellen | |
| breedtes, hoogtes, verborgen rijen en kolommen | |
| [geblokkeerde rijen en kolommen](lignes-colonnes.html#figer), rasterlijnen | |
| meerdere bladen | |
| [benoemde bereiken](noms.html) | |
| [voorwaardelijke opmaak](conditionnelle.html) | de regels van DocCells, de eenvoudige regels van Excel (vergelijking, bevatte tekst) |
| [selectievakjes, keuzelijsten](controles.html) | |
| [grafieken](graphiques.html) | als Excel-grafieken geschreven; die van DocCells worden weer gelezen |
| [afbeeldingen](images-liens.html) | |
| [filters](tri-filtre.html#filtrer) | |
| [beveiliging](protection.html), ontgrendelde cellen | |

## Wat niet {#perdu}

| Element | Wordt |
| --- | --- |
| [links](images-liens.html#liens) | hun tekst |
| [lijsten](listes.html) in de cellen | een tekst, `n:[2, 1]` |
| sparklines van DocCells of Google Sheets | een formule `SPARKLINE`, door DocCells weer gelezen; onbekend voor Excel |
| in Excel gemaakte grafieken | niet behouden |
| draaitabellen, macro’s, slicers, opmerkingen | niet behouden |
| voorwaardelijke opmaak met kleurenschalen, balken, pictogrammen | niet behouden |

tip: Vóór het vervangen van een ingewikkelde Excel-werkmap, ze vanuit DocCells onder een andere naam opslaan (**%saveAs%**).

## Lijsten {#listes}

Een uit een `.xlsx` heropende lijst is een tekst: opnieuw typen maakt er weer een lijst van. Een door een formule berekende lijst wordt weer een lijst als de formule herberekend wordt.

## Formules {#formules}

Bij het openen behoudt een formule meestal het door Excel opgeslagen resultaat tot een van haar cellen verandert. Een [niet door DocCells berekende](fonctions.html#non-calculees) functie geeft dan `#NAME?` of `#ERROR!`.

## Andere formaten {#formats}

| Formaat | Hoe |
| --- | --- |
| `.csv` | het bestand in een teksteditor openen, kopiëren, in DocCells plakken als de waarden door tabs gescheiden zijn; anders naar `.xlsx` omzetten |
| `.ods`, `.xls` | met LibreOffice of Excel als `.xlsx` opslaan |
| Google Sheets | [via de link](partager.html#google), of gedownload als `.xlsx` |
| Pdf | [afdrukken](impression.html), „Opslaan als pdf” |

=== faq
# Veelgestelde vragen

## Invoer {#saisie}

### Een getypte datum wordt niet herkend

`25-11-2026` is voor DocCells een tekst. `2026-11-25` typen, dan de notatie **%fDate%** kiezen ([datums](saisie.html#dates)).

### Er verschijnt een getal in plaats van een datum

Datums zijn aantallen dagen: geef de cellen de notatie **%fDate%** (**%format% › %number%**).

### Mijn getallen worden niet opgeteld

Links uitgelijnd zijn het teksten. In het Nederlands is de komma decimaal; een in de cel getypte eenheid maakt er een tekst van ([typen](saisie.html#types)).

### De nul aan het begin van een nummer verdwijnt

Geef vóór het typen de notatie **%fText%**, of begin met een apostrof ([teksten](saisie.html#textes)).

### Getallen verwachten een punt in plaats van een komma

DocCells volgt de taal van de browser. `?lang=nl` legt ze op ([taal](demarrage.html#langue)).

## Formules {#formules}

### `#NAME?` met WAAR of ONWAAR

`@TRUE()` en `@FALSE()` schrijven, of 1 en 0 ([voorwaarden](formules.html#conditions)).

### `#NAME?` met een door DocCells voorgestelde functie

Niet alle voorgestelde functies worden berekend ([niet berekende functies](fonctions.html#non-calculees)).

### `@IFERROR` laat DIV/0 door

Test de deler: `=IF(B2, A2/B2, "")` ([fouten](formules.html#erreurs)).

### Plakken behoudt mijn formules niet

**%paste%** van het rechtsklikmenu plakt de waarden; [[Ctrl+V]] plakt de formules ([kopiëren](selection.html#copier)).

### De naam van een maand schrijven of een getal in een tekst opmaken

De functie `@TEXT` wordt niet berekend: geef een aparte cel een [notatie](nombres.html).

### De aangevinkte vakjes tellen

`=SUMPRODUCT(B2:B6, B2:B6)` ([selectievakjes](controles.html#cases)).

### `=TODAY()+1` geeft #VALUE!

Zet `=TODAY()` in een cel en tel bij die cel op ([datums](formules.html#dates)).

## Presentatie {#presentation}

### De kleur van een cel verandert niet

De cel ligt in het bereik van een regel voor [voorwaardelijke opmaak](conditionnelle.html#regles).

### Een knop is verdwenen

Het venster is smal: hij zit achter {more}.

### Sorteren of filteren wordt geweigerd

Het bereik bevat samengevoegde cellen: maak de samenvoeging ongedaan.

## Bestanden {#fichiers}

### Opslaan downloadt een nieuw bestand

Dat is zo in Firefox en Safari. Chrome en Edge schrijven in het bestand ([opslaan](demarrage.html#enregistrer)).

### De pagina sloot zonder op te slaan

Open DocCells opnieuw in dezelfde browser: het stelt voor de kopie te herstellen ([herstellen](demarrage.html#recuperer)).

### Mijn grafiek wordt niet afgedrukt

Het afdrukken toont alleen de cellen ([afdrukken](impression.html)).

### Een link `?url=` opent mijn werkmap niet

De site van het bestand weigert misschien lezen door andere sites. Een Google Sheet moet via een link gedeeld zijn ([delen](partager.html)).

### Mijn links zijn verdwenen

Ze worden niet in het Excel-formaat opgeslagen ([wat niet behouden blijft](excel.html#perdu)).

## Leerlingen {#eleves}

### Kan een leerling de formules wijzigen?

Niet in een beveiligde werkmap, buiten de ontgrendelde cellen ([beveiligen](protection.html)). `mode=student` aan de link toevoegen ontneemt de mogelijkheid om de beveiliging op te heffen.
