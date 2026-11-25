=== groups | Erste Schritte | Eingeben und rechnen | Gestalten | Auswerten | Weitergeben | Referenz

=== categories | Funktion | Beschreibung und Beispiel | Mathematik | Trigonometrie | Logik | Statistik | Wahrscheinlichkeitsverteilungen und Tests | Suche und Listen | Text | Datum und Uhrzeit | Finanzen | Zahlensysteme, Einheiten, spezielle Funktionen | Komplexe Zahlen als Text | Information

=== index | Startseite
# DocCells-Benutzerhandbuch

> DocCells ist eine mehrsprachige Tabellenkalkulation im Browser, ohne Installation und ohne Konto. Es öffnet und speichert Excel-Arbeitsmappen (.xlsx).

<div class="buttons"><a href="../../index.html?lang=de">DocCells öffnen</a></div>

![Das DocCells-Fenster: Menüs, Schaltflächen, Bearbeitungsleiste, eine formatierte Notentabelle und ein Diagramm](interface.webp 1280x760)

## Das Wichtigste in sechs Handgriffen

| Ziel | Vorgehen |
| --- | --- |
| Eingeben | eine Zelle anklicken, tippen, [[Enter]] ([Daten eingeben](saisie.html)) |
| Rechnen | `=` und dann die Formel tippen: `=AVERAGE(B2:B6)` ([Formeln](formules.html)) |
| Eine Formel kopieren | den blauen Anfasser der Auswahl ziehen oder [[Ctrl+D]] ([ausfüllen](selection.html#recopier)) |
| Formatieren | Menü **%format%** oder die Schaltflächen ([Formatierung](mise-en-forme.html)) |
| Ein Diagramm zeichnen | Daten auswählen, {chart} ([Diagramme](graphiques.html)) |
| Speichern | [[Ctrl+S]]: eine Excel-Datei ([öffnen und speichern](demarrage.html)) |

## Inhalt {#sommaire}

- [Öffnen und Speichern](demarrage.html): Dateien, zuletzt verwendete Dateien, Wiederherstellung, Google Sheets, Sprache.
- [Die Oberfläche](interface.html): Menüs, Schaltflächen, Bearbeitungsleiste, Register, Zoom.
- [Daten eingeben](saisie.html), [auswählen, kopieren, ausfüllen](selection.html).
- [Formeln](formules.html), [Listen und komplexe Zahlen](listes.html), [benannte Bereiche](noms.html), [Tabellenblätter](feuilles.html).
- [Zahlenformate](nombres.html), [Formatierung](mise-en-forme.html), [bedingte Formatierung](conditionnelle.html), [Zeilen und Spalten](lignes-colonnes.html).
- [Sortieren, filtern, suchen](tri-filtre.html), [Kontrollkästchen, Listen und Kalender](controles.html), [Diagramme und Sparklines](graphiques.html), [Bilder und Links](images-liens.html), [Drucken](impression.html).
- Eine Arbeitsmappe für Schüler [schützen](protection.html), sie [teilen und einbetten](partager.html), sie [mit DocGeo](docgeo.html) verwenden.
- Referenz: [die %functions% Funktionen](fonctions.html), [Tastenkürzel](raccourcis.html), [Excel-Kompatibilität](excel.html), [häufige Fragen](faq.html).

## Konventionen

- Schaltflächen werden durch ihr Symbol bezeichnet ({bold} fett).
- [[Ctrl]] steht auf dem Mac für [[⌘]].
- Formeln sind deutsch geschrieben: deutsche Funktionsnamen, Dezimalkomma, Semikolon zwischen den Argumenten. DocCells zeigt sie in der Sprache der Oberfläche.
- Im Handbuch suchen: [[/]] oder [[Ctrl+K]]. Die Wörter können in beliebiger Reihenfolge und ohne Akzente eingegeben werden; ein Funktionsname, deutsch oder englisch, führt zu seiner Zeile.

=== demarrage
# Öffnen und Speichern

## Beginnen {#nouveau}

DocCells öffnet eine leere Arbeitsmappe mit einem Blatt. Um wieder mit einer leeren Mappe zu beginnen, die Seite neu laden oder DocCells in einem anderen Browser-Tab öffnen.

## Eine Arbeitsmappe öffnen {#ouvrir}

| Weg | Wirkung |
| --- | --- |
| {open}, **%file% › %open%**, [[Ctrl+O]] | eine `.xlsx`-Datei des Computers wählen |
| Die Datei auf die Seite ziehen | ein Schleier zeigt, wo sie abzulegen ist; die Mappe ersetzt die geöffnete |
| **%file% › %openRecent%** | die letzten zehn geöffneten oder gespeicherten Dateien (Chrome und Edge) |
| Ein Link `?url=…` | eine Arbeitsmappe im Netz oder ein Google Sheet ([teilen](partager.html#url)) |

Gelesen wird nur das Excel-Format `.xlsx`. Alte `.xls`-, `.ods`- und `.csv`-Dateien sind vorher umzuwandeln. Was aus einer Excel-Datei übernommen wird, steht unter [Excel-Kompatibilität](excel.html).

warn: Das Öffnen einer Arbeitsmappe ersetzt die angezeigte: vorher die Änderungen speichern.

### Zuletzt verwendete Dateien {#recents}

Der Browser kann erneut um Erlaubnis bitten, die Datei zu lesen. Eine verschobene, umbenannte oder gelöschte Datei wird aus der Liste entfernt. **%clearRecentFiles%** leert sie. Die Liste bleibt in diesem Browser auf diesem Computer.

## Speichern {#enregistrer}

### Chrome und Edge

| Befehl | Wirkung |
| --- | --- |
| {save}, **%file% › %save%**, [[Ctrl+S]] | fragt beim ersten Mal nach dem Speicherort; ersetzt die Datei danach ohne Nachfrage |
| **%file% › %saveAs%** | eine andere Datei wählen |

Eine mit {open}, aus der Liste oder durch Ablegen geöffnete Datei wird an ihrem Ort gespeichert; der Browser bittet einmal um Erlaubnis, sie zu ändern.

Der Name der Arbeitsmappe steht am Ende der Menüleiste. Ein roter Punkt zeigt nicht gespeicherte Änderungen an; der Titel des Browser-Tabs beginnt dann mit ●.

### Firefox, Safari

Diese Browser erlauben es nicht, in eine Datei zu schreiben. **%file% › %export%** oder [[Ctrl+S]] lädt die Arbeitsmappe unter dem Namen der geöffneten Mappe herunter.

## Eine nicht gespeicherte Mappe wiederherstellen {#recuperer}

Solange es nicht gespeicherte Änderungen gibt, hält DocCells im Browser eine Kopie, die weniger als eine Sekunde nach jeder Änderung aktualisiert wird. Wird die Seite ohne Speichern geschlossen, schlägt DocCells beim nächsten Öffnen mit dem Datum der Kopie vor, sie wiederherzustellen (**%restore%**) oder nicht (**%ignore%**).

- Speichern, Exportieren oder das Öffnen einer anderen Mappe löscht diese Kopie.
- Die Kopie zu ignorieren löscht sie endgültig.
- Die Kopie wird nur angelegt, wenn DocCells die ganze Seite einnimmt, nicht wenn es in eine andere eingebettet ist.

## Sprache {#langue}

DocCells nimmt die Sprache des Browsers unter den zwölf Sprachen seiner Oberfläche: Chinesisch (vereinfacht und traditionell), Deutsch, Englisch, Französisch, Griechisch, Hindi, Italienisch, Niederländisch, Portugiesisch, Russisch, Spanisch. Für die übrigen gilt Englisch. `?lang=de` in der Adresse legt eine Sprache fest.

Die Sprache ändert die Menüs, die Funktionsnamen, das Dezimaltrennzeichen, das Währungssymbol und die Reihenfolge angezeigter Daten. Die gespeicherte Datei hängt nicht davon ab: eine französisch geschriebene Mappe öffnet sich auf Deutsch mit deutschen Formeln.

=== interface
# Die Oberfläche

![Das DocCells-Fenster](interface.webp 1280x760)

Von oben nach unten: die Menüleiste, die Symbolleiste, die Bearbeitungsleiste, das Blatt, die Blattregister und der Zoom.

## Die Menüs {#menus}

| Menü | Inhalt |
| --- | --- |
| **%file%** | [öffnen, speichern](demarrage.html), [drucken](impression.html) |
| **%edit%** | rückgängig, wiederholen, [nach unten, nach rechts ausfüllen](selection.html#recopier) |
| **%view%** | [Gitternetzlinien](mise-en-forme.html#quadrillage), [fixieren](lignes-colonnes.html#figer) |
| **%insert%** | [Bild](images-liens.html), [Diagramm](graphiques.html), [Kontrollkästchen, Drop-down-Liste](controles.html) |
| **%format%** | [Zahl](nombres.html), [Text, Ausrichtung, Verbinden](mise-en-forme.html), [abwechselnde Farben](mise-en-forme.html#alternees), [bedingte Formatierung](conditionnelle.html) |
| **%data%** | [sortieren und filtern](tri-filtre.html) |
| **%tools%** | [schützen](protection.html), dieses Handbuch (**%manual%**), DocTools, Quellcode, Version (**%about%**) |

Ein Häkchen kennzeichnet eine aktive Option: sichtbare Gitternetzlinien, fixierte Zellen, fett, Filter, geschützte Mappe.

![Das Formatmenü und die Zahlenformate](menus.webp 1280x620)

## Die Symbolleiste {#boutons}

| Schaltfläche | Aufgabe |
| --- | --- |
| {open} {save} | [öffnen, speichern](demarrage.html) |
| {gridlines} | [Gitternetzlinien](mise-en-forme.html#quadrillage) ein- oder ausblenden |
| {alternating} | [abwechselnde Farben](mise-en-forme.html#alternees) |
| {conditional} | [bedingte Formatierung](conditionnelle.html) |
| {protect} | [schützen](protection.html); bläulich, wenn die Mappe geschützt ist |
| {chart} | [ein Diagramm einfügen](graphiques.html) |
| {image} | [ein Bild einfügen](images-liens.html) |
| {undo} {redo} | rückgängig, wiederholen |
| {clear-format} | die Formatierung löschen |
| {percentage-format} {number-decrease} {number-increase} | [Prozent, weniger oder mehr Dezimalstellen](nombres.html) |
| **%fGeneral%**, **Arial**, **10** | Zahlenformat, Schriftart, Größe |
| {bold} {italic} {underline} | fett, kursiv, unterstrichen |
| {font-color} {background} | Textfarbe, Hintergrundfarbe |
| {border-all} {merge-all} | [Rahmen, Verbinden](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | Ausrichtungen, Drehung, Umbruch |
| {freeze-row-col} | [fixieren](lignes-colonnes.html#figer) |
| {formula-sum} | [automatische Summe](formules.html#somme) und weitere Formeln |
| {filter} | [sortieren und filtern](tri-filtre.html) |

Der kleine Pfeil einer Schaltfläche öffnet ihre Auswahl; die Schaltfläche selbst wiederholt die letzte. In einem schmalen Fenster liegen die letzten Schaltflächen hinter {more}.

## Die Bearbeitungsleiste {#barre}

- Links das **Namenfeld**: die Adresse der Auswahl oder der [Name des Bereichs](noms.html). Sein Pfeil listet die benannten Bereiche auf und öffnet den Namens-Manager.
- Rechts von *fx* der Inhalt der Zelle samt Formel: er kann dort bearbeitet werden.

## Das Blatt {#feuille}

- Ein Rechtsklick öffnet je nach Ort ein anderes Menü: Zelle, Spalten- oder Zeilenkopf, Blattregister.
- Ein neues Blatt hat 84 Zeilen und 60 Spalten (A bis BH). Weitere kommen per Rechtsklick, **%insertCells%**, hinzu ([Zeilen und Spalten](lignes-colonnes.html)).
- Der blaue Anfasser an der Ecke der Auswahl [füllt aus](selection.html#recopier).

## Register und Zoom {#zoom}

Unten fügt {plus} ein Blatt hinzu, {all-sheets} listet alle auf ([Tabellenblätter](feuilles.html)). Rechts stellen **−** und **+** den Zoom ein; ein Klick auf die Prozentzahl bietet 10 % bis 400 % an.

## Rückgängig {#annuler}

{undo} oder [[Ctrl+Z]] macht rückgängig, {redo}, [[Ctrl+Y]] oder [[Ctrl+Shift+Z]] wiederholt: Eingaben, Einfügen, Formatierungen. Der Verlauf beginnt neu, wenn eine Mappe geöffnet wird, Gitternetzlinien ein- oder ausgeblendet werden, die Mappe geschützt wird oder ein Name oder eine Regel der bedingten Formatierung hinzukommt. Diagramme gehören nicht dazu: sie werden mit ihren Schaltflächen [bearbeitet oder gelöscht](graphiques.html#modifier).

=== saisie
# Daten eingeben

## In eine Zelle schreiben {#ecrire}

| Aktion | Wirkung |
| --- | --- |
| auf einer ausgewählten Zelle tippen | ersetzt ihren Inhalt |
| Doppelklick, [[F2]] oder [[Enter]] | bearbeitet ihren Inhalt |
| [[Enter]] | bestätigt und geht eine Zelle nach unten |
| Klick in eine andere Zelle | bestätigt |
| [[Esc]] | bricht die Eingabe ab |
| [[Alt+Enter]] | neue Zeile in der Zelle |
| [[Delete]] oder [[⌫]] | leert die ausgewählten Zellen samt Kontrollkästchen und Drop-down-Listen; ihre Formatierung bleibt |
| Rechtsklick › **%clearContent%** | ebenso |

Während einer Eingabe bewegen die Pfeiltasten den Cursor im Text. Sonst wechseln die Pfeiltasten, [[Tab]] und [[Shift+Tab]] die Zelle.

## Was DocCells erkennt {#types}

| Eingabe | Ergebnis |
| --- | --- |
| `12`, `-3`, `1e5` | eine Zahl, rechtsbündig |
| `n:2.5` | eine Dezimalzahl; das Komma ist das deutsche Trennzeichen |
| `n:1,234.5` | die Zahl 1234,5; um den Tausenderpunkt anzuzeigen, ein [Format](nombres.html) wählen |
| `25%`, `n:2.5%` | ein Prozentsatz |
| `2026-11-25`, `2026/11/25` | ein Datum |
| `2026-11-25 14:30` | Datum und Uhrzeit |
| `TRUE`, `FALSE` | ein Wahrheitswert |
| `n:[2, 1]` | eine [Liste](listes.html) |
| `=A1+B1` | eine [Formel](formules.html) |
| alles andere | ein Text, linksbündig |

### Datum {#dates}

Ein Datum wird mit dem Jahr zuerst getippt: `2026-11-25`. `25.11.2026` bleibt ein Text, mit dem nicht gerechnet wird. Um es wie üblich anzuzeigen, **%format% › %number% › %fDate%** (`%xDate%`) oder ein [benutzerdefiniertes Format](nombres.html#personnalise) wählen.

Ein Doppelklick auf eine Datumszelle öffnet einen [Kalender](controles.html#calendrier). `=TODAY()` gibt das heutige Datum.

### Texte aus Ziffern {#textes}

Eine Nummer, die mit Null beginnt, verliert diese Null: `007` wird 7. Um sie zu behalten, den Zellen vorher das Format **%fText%** geben (**%format% › %number% › %fText%**) oder mit einem Apostroph beginnen: `'007`.

## Häufige Eingabefehler {#erreurs}

| Man sieht | Ursache |
| --- | --- |
| eine linksbündige Zahl | es ist ein Text: ein Dezimalpunkt statt eines Kommas, eine Einheit (`12 €`), ein Leerzeichen zu viel |
| `46351` statt eines Datums | ein Datum im Format **%fGeneral%**: ihm das Format **%fDate%** geben |
| der Text wird von der Nachbarzelle abgeschnitten | die [Spalte](lignes-colonnes.html#taille) verbreitern oder **%wrap%** wählen |

Für eine Einheit nur die Zahl eingeben und ihr ein [Format](nombres.html) geben: Währung oder benutzerdefiniert wie `c:0.00 "m"`.

=== selection
# Auswählen, kopieren, ausfüllen

## Auswählen {#selectionner}

| Aktion | Auswahl |
| --- | --- |
| Klick | eine Zelle |
| Ziehen | ein Bereich |
| Klick, dann [[Shift]] und Klick | der Bereich dazwischen |
| [[Shift]] und Pfeiltaste | erweitert den Bereich |
| [[Ctrl]] und Klick oder Ziehen | ein weiterer Bereich |
| Klick auf einen Buchstaben, eine Nummer | eine Spalte, eine Zeile |
| Ziehen über Buchstaben, Nummern | mehrere Spalten, mehrere Zeilen |
| [[Ctrl+A]] | das ganze Blatt |
| Namenfeld, Pfeil | ein [benannter Bereich](noms.html) |

Die Adresse der Auswahl steht im Namenfeld links von der Bearbeitungsleiste.

## Kopieren, ausschneiden, einfügen {#copier}

[[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] oder **%copy%** und **%paste%** des Rechtsklicks.
- **%paste%** des Rechtsklicks fügt die Werte ohne die Formeln ein; [[Ctrl+V]] fügt die Formeln ein.
- Eine eingefügte Formel passt sich ihrem neuen Ort an: `=B2` eine Zeile tiefer kopiert wird `=B3`. Das Zeichen `$` hält eine Zeile oder Spalte fest ([Bezüge](formules.html#references)).
- Eine ausgeschnittene Formel behält ihre Bezüge.
- Eine aus Excel, Numbers, einer Webseite oder einem tabulatorgetrennten Text kopierte Tabelle wird Zelle für Zelle eingefügt; Dezimalzahlen und Listen werden wie beim Tippen erkannt.
- Mehrere Bereiche können nicht zugleich ausgeschnitten oder eingefügt werden.

## Verschieben {#deplacer}

Den Rand der Auswahl ziehen: die Zellen werden samt Formatierung verschoben.

## Ausfüllen {#recopier}

Der blaue Anfasser unten rechts an der Auswahl wird nach unten, oben, links oder rechts gezogen.

| Ausgangszellen | Der Anfasser ergibt |
| --- | --- |
| eine Formel | die Formel mit verschobenen Bezügen |
| zwei Zahlen, 1 und 2 | die Reihe: 3, 4, 5… |
| eine einzelne Zahl, ein Text oder ein Datum | denselben Wert |
| zwei Daten | die folgenden Daten im selben Abstand |

![Die mit dem Anfasser fortgesetzte Reihe 1, 2](recopie.webp 760x300)

Ohne Maus oder für einen großen Bereich:

| Befehl | Wirkung |
| --- | --- |
| **%edit% › %fillDown%**, [[Ctrl+D]] | die erste Zeile des ausgewählten Bereichs wird in die folgenden kopiert |
| **%edit% › %fillRight%**, [[Ctrl+R]] | die erste Spalte wird in die folgenden kopiert |

Ist nur eine Zeile ausgewählt, kopiert [[Ctrl+D]] die darüberliegende hinein; ist nur eine Spalte ausgewählt, kopiert [[Ctrl+R]] die linke. Diese Befehle kopieren immer, ohne Reihe, mit Formaten, Rahmen, Kontrollkästchen und Drop-down-Listen.

tip: Für eine Formel in einer ganzen Spalte: sie oben tippen, von dieser Zelle bis zur letzten auswählen, [[Ctrl+D]].

=== formules
# Formeln

## Eine Formel schreiben {#ecrire}

Eine Formel beginnt mit `=`. Sie enthält Zahlen, Texte in Anführungszeichen, Zellbezüge, Operatoren und [Funktionen](fonctions.html).

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="Summe: "&SUM(B2:B6)
```

Die Zelle zeigt das Ergebnis, die Bearbeitungsleiste die Formel. Zellen, die von einer geänderten Zelle abhängen, werden sofort neu berechnet.

Im Deutschen ist das Komma das Dezimaltrennzeichen, das Semikolon trennt die Argumente: `=ROUND(3.14159, 2)`. Funktionsnamen werden klein oder groß, deutsch oder englisch getippt: `=summe(B2:B6)` und `r:=SUM(B2:B6)` werden angenommen.

## Zellen mit der Maus angeben {#souris}

Beim Schreiben einer Formel fügt ein Klick auf eine Zelle des Blatts ihre Adresse ein, ein Ziehen den Bereich. Jeder Bezug hat seine Farbe, in der Formel wie auf dem Blatt.

## Die Vervollständigung {#completion}

Ab den ersten Buchstaben eines Namens schlägt DocCells die Funktionen vor, die sie enthalten: [[↑]] [[↓]] zum Durchlaufen, [[Enter]], [[Tab]] oder ein Klick zum Wählen. Nach der öffnenden Klammer erinnert eine Hilfe an die Argumente.

![Die nach den ersten Buchstaben vorgeschlagenen Funktionen](completion.webp 760x560)

![Die Hilfe zu einer Funktion](aide-formule.webp 760x560)

## Die automatische Summe {#somme}

{formula-sum} schreibt eine Summe. Ihr Pfeil bietet **%sum%**, **%average%**, **%count%**, **%max%**, **%min%** und **%allFormulas%** an: die Bibliothek, in der man eine Funktion nach Name, Beschreibung oder Kategorie sucht.

![Die Formelbibliothek](bibliotheque.webp 1280x760)

## Operatoren {#operateurs}

| Operator | Aufgabe |
| --- | --- |
| `+` `-` `*` `/` | vier Grundrechenarten |
| `^` | Potenz: `=2^10` |
| `%` | Prozent: `=20%*B2` |
| `&` | verkettet Texte: `=A2&" "&B2` |
| `=` `<>` | gleich, ungleich |
| `<` `>` `<=` `>=` | Vergleiche |
| `( )` | Vorrang |

Potenzen kommen vor Produkten und Quotienten, dann Summen, dann Vergleiche. `=-2^2` ergibt −4 (4 in Excel).

## Bezüge {#references}

| Schreibweise | Bedeutung |
| --- | --- |
| `B2` | eine Zelle; folgt dem Ausfüllen |
| `$B$2` | dieselbe Zelle, auch beim Ausfüllen |
| `B$2`, `$B2` | feste Zeile, feste Spalte |
| `B2:D6` | ein Bereich |
| `B:B`, `2:2` | eine ganze Spalte, eine ganze Zeile |
| `%sheet%2!B2`, `'Noten 2'!B2` | eine Zelle eines [anderen Blatts](feuilles.html#references) |
| `noten` | ein [benannter Bereich](noms.html) |

Nach unten ausgefüllt wird `=B2*$B$1` zu `=B3*$B$1`, `=B4*$B$1`…

## Bedingungen {#conditions}

```
=IF(B2>=10, "bestanden", "nicht bestanden")
=IF(AND(B2>=10, C2>=10), "ja", "nein")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- Wahrheitswerte werden `@TRUE()` und `@FALSE()` geschrieben, mit Klammern. Sie werden als TRUE und FALSE angezeigt.
- Ein Kriterium ist ein Text: `">10"`, `"<>0"`, `"Ana"`. Die Platzhalter `*` und `?` werden nicht erkannt.
- Eine leere Zelle erkennt man mit `=B2=""`; sie ist nicht gleich 0.

## In einer Tabelle suchen {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

Die erste sucht Léa in der ersten Spalte der Tabelle und gibt die dritte zurück; das letzte Argument 0 verlangt den genauen Wert. Die zweite gibt den Namen der Person mit der besten Note.

## Datum und Uhrzeit {#dates}

Ein Datum ist eine Anzahl von Tagen, eine Uhrzeit ein Bruchteil eines Tages: in Zellen lassen sie sich addieren und subtrahieren.

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

Ein von `@DATE` oder `@TODAY` geliefertes Datum muss über eine Zelle gehen, um damit zu addieren: `=TODAY()+1` ergibt `#VALUE!`, aber wenn A1 `=TODAY()` enthält, ergibt `=A1+1` morgen. Das Ergebnis ist eine Zahl: ihr ein Format **%fDate%** geben.

## Fehler {#erreurs}

| Anzeige | Ursache |
| --- | --- |
| `#NAME?` | unbekannter Name: Tippfehler, [nicht berechnete](fonctions.html#non-calculees) Funktion, `@TRUE` ohne Klammern, Text ohne Anführungszeichen |
| `#VALUE!` | unerwarteter Typ: ein Text, wo eine Zahl nötig ist |
| `DIV/0` | Division durch null oder durch eine leere Zelle |
| `#N/A` | Wert nicht gefunden (`@MATCH`, `@VLOOKUP`) oder `GEO` außerhalb von DocGeo |
| `#REF!` | nicht vorhandene Zelle oder nicht vorhandenes Blatt |
| `#NUM!` | Zahl außerhalb des Definitionsbereichs: `=SQRT(-1)` |
| `#ERROR!` | falsch geschriebene Formel oder nicht berechnete Funktion |

`@IFERROR` ersetzt den Fehler einer Funktion (`#N/A`, `#NUM!`): `=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "fehlt")`. Den einer Rechnung (`DIV/0`, `#VALUE!`) ersetzt es nicht: gegen eine Division durch null den Divisor prüfen, `=IF(B2, B3/B2, "")`, was für eine Null wie für eine leere Zelle gilt.

=== listes
# Listen und komplexe Zahlen

> Eine DocCells-Zelle kann eine Liste von Zahlen enthalten. Eine Liste aus zwei Zahlen ist auch ein Punkt der Ebene oder eine komplexe Zahl.

## Eine Liste schreiben {#ecrire}

In eckigen Klammern, Elemente durch Semikolon getrennt. Eine Liste kann Listen enthalten.

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

Ohne `=` ist die Liste ein Wert; mit `=` können ihre Elemente Rechnungen sein. In einer Sprache mit Dezimalpunkt werden die Elemente durch Kommas getrennt: `r:[2, 1]`.

## Rechenoperationen {#operations}

| Operation | Ergebnis |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`: gliedweise, gleiche Längen |
| `n:[1, 2, 3] * 2`, `n:[2, 4, 6] / 2` | `n:[2, 4, 6]`, `n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`: Produkt komplexer Zahlen |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`: Quotient komplexer Zahlen |
| `n:[2, 1] + 3` | `n:[5, 1]`: 3 ist eine reelle komplexe Zahl |
| `n:[0, 1]^2` | `n:[-1, 0]`, bis auf Rundung |
| `n:[8, 0]^(1/3)` | die Liste der drei Kubikwurzeln |
| `n:-[2, 1]` | `n:[-2, -1]` |

Jede andere Kombination ergibt `#VALUE!`: Produkt zweier Listen aus drei Zahlen, verschiedene Längen, Text.

## Listen und Funktionen {#fonctions}

Eine Funktion sieht eine Liste wie einen Bereich:

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` gibt das zweite Element der Liste in A1: die Ordinate eines Punkts, den Imaginärteil einer komplexen Zahl. Einige [Funktionen](fonctions.html) geben eine Liste zurück: `@FREQUENCY`, `@LINEST`, `@TRANSPOSE`, `@UNIQUE`, `@SPLIT`.

## Anzeige {#affichage}

Die Schaltflächen {number-decrease} {number-increase} und die [Zahlenformate](nombres.html) gelten für jede Zahl der Liste: `n:[-0.14, 0.27]`. Die genauen Werte bleiben.

## Beispiel: eine komplexe Folge {#exemple}

Der Orbit von 0 unter *z* ↦ *z*² + *c*: A1 enthält *c*, A2 `n:[0, 0]`, A3 die folgende Formel, nach unten ausgefüllt.

```
=A2^2+$A$1
```

In [DocGeo](docgeo.html) wird eine solche Spalte in der Figur gezeichnet.

note: In einer Excel-Datei wird eine Liste als Text gespeichert, ebenso der Wert einer Formel, die eine Liste ergibt ([Kompatibilität](excel.html#listes)).

=== noms
# Benannte Bereiche

## Einen Namen vergeben {#definir}

1. Die Zelle oder den Bereich auswählen.
2. Rechtsklick › **%defineName%** (oder Pfeil des Namenfelds › **%nameManager%**).
3. Den Namen tippen, den Gültigkeitsbereich wählen, **%nameOk%**.

![Das Fenster für einen neuen Namen](noms.webp 1280x760)

| Feld | Inhalt |
| --- | --- |
| **%nameField%** | beginnt mit einem Buchstaben oder `_`; Buchstaben, Ziffern, `_` und `.`, ohne Leerzeichen; keine Adresse wie `B2` |
| **%scope%** | **%workbook%**: von allen Blättern lesbar; ein Blatt: nur von ihm lesbar, wo er Vorrang vor einem Namen der Mappe hat |
| **%refersTo%** | eine Zelle oder ein Bereich samt Blatt: `'%sheet%1'!$B$2:$B$6` |

## Einen Namen verwenden {#utiliser}

```
=AVERAGE(noten)
=preis*(1+mwst)
```

- Der Pfeil des Namenfelds listet die Namen auf: einen zu wählen wählt seinen Bereich in seinem Blatt aus.
- Ist die Auswahl genau ein benannter Bereich, zeigt das Namenfeld seinen Namen.
- Eine [Drop-down-Liste](controles.html#listes) kann einen durch seine Adresse angegebenen Zellbereich lesen.

## Bearbeiten, löschen {#gerer}

Im **%nameManager%** bringt ein Klick auf einen Namen seine Felder zur Bearbeitung zurück; **%nameRemove%** löscht ihn; **%nameNew%** kehrt zu einem leeren Namen zurück. Vor dem Löschen eines Namens die Formeln ersetzen, die ihn lesen: sie behalten ihren letzten Wert und werden dann nicht mehr berechnet.

Namen werden in der Excel-Datei gespeichert und daraus gelesen.

=== feuilles
# Tabellenblätter

## Hinzufügen, wechseln {#ajouter}

- {plus} fügt ein Blatt hinzu, „%sheet%2“, „%sheet%3“… genannt.
- Ein Klick auf ein Register zeigt das Blatt; {all-sheets} listet die Blätter samt ausgeblendeten auf und zeigt das gewählte.

## Das Menü eines Registers {#menu}

Rechtsklick auf das Register oder sein Pfeil:

| Befehl | Wirkung |
| --- | --- |
| **%sheetDelete%** | nach Bestätigung; das letzte sichtbare Blatt kann nicht gelöscht werden |
| **%sheetCopy%** | verdoppelt das Blatt |
| **%sheetRename%** | oder Doppelklick auf den Namen; ohne `[ ] : ? * / ' "` |
| **%sheetColor%** | Farbe des Registers |
| **%sheetHide%** | Formeln lesen das Blatt weiterhin; {all-sheets} zeigt es wieder |
| **%sheetLeft%**, **%sheetRight%** | ändert die Reihenfolge; das Register lässt sich auch ziehen |

## Ein anderes Blatt lesen {#references}

Der Name des Blatts, ein Ausrufezeichen, die Adresse. Der Name steht in Apostrophen, wenn er ein Leerzeichen oder ein Zeichen enthält.

```
=%sheet%2!B2*2
='Noten 2'!B2
=SUM('Noten 2'!B2:B6)
```

Der Bezug wird getippt: ein Registerwechsel während der Eingabe einer Formel bricht sie ab.

Damit ein Bereich von allen Blättern über einen Namen gelesen wird, ihn mit dem Gültigkeitsbereich **%workbook%** [benennen](noms.html).

=== nombres
# Zahlenformate

> Ein Format ändert die Anzeige einer Zahl, nicht ihren Wert: Rechnungen behalten alle Dezimalstellen.

## Ein Format wählen {#choisir}

**%format% › %fNumber%** oder die Liste **%fGeneral%** der Symbolleiste.

| Format | Beispiel |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`, linksbündig; die Eingabe bleibt ein Text |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`; 0,25 wird `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**, **%fTime%**, **%fDateTime%** | für Daten: `%xDate%`, `3:00 PM`, `15:00`… |

Das Währungssymbol ist das der Sprache der Oberfläche.

| Schaltfläche | Wirkung |
| --- | --- |
| {percentage-format} | Prozent |
| {number-decrease} | eine Dezimalstelle weniger |
| {number-increase} | eine Dezimalstelle mehr |

Diese Schaltflächen gelten auch für die Zahlen einer [Liste](listes.html). Um den Wert selbst zu runden, `@ROUND` verwenden.

## Benutzerdefiniertes Format {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**: ein vorgeschlagenes Format wählen oder einen Code schreiben. Die Vorschau zeigt das Ergebnis; **%guide%** erinnert an die Zeichen; **%apply%** gibt es der Auswahl.

![Das Fenster der benutzerdefinierten Zahlenformate](format-personnalise.webp 1280x760)

| Zeichen | Aufgabe | Code | 1234,5 wird angezeigt |
| --- | --- | --- | --- |
| `0` | eine Ziffer, auch null | `c:0.00` | `n:1234.50` |
| `#` | eine Ziffer, wenn sie nötig ist | `c:#.##` | `n:1234.5` |
| `c:,` | gruppiert die Tausender | `c:#,##0` | `n:1,235` |
| `%` | Prozent | `0%` | `123450%` |
| `"Text"` | ein Text, eine Einheit | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | wissenschaftliche Schreibweise | `c:0.00E+00` | `n:1.23E+03` |
| `;` | Formate für Positive, Negative, Nullen, Texte | `0;-0;"null"` | `1235` |
| `[Red]` | Farbe | `0;[Red]-0` | negative Zahlen rot |

Der Code wird mit den Trennzeichen der Sprache getippt; das Fenster zeigt die Form, in der er gespeichert wird (`#,##0.00`), dieselbe wie in Excel.

### Datum und Uhrzeit {#dates-heures}

| Code | 29. August 2026, 14:30 Uhr |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

Monats- und Tagesnamen werden englisch angezeigt.

### Einheiten {#unites}

Unter **%units%** Formate wie `c:0.00 "V"`, `c:0.00 "Ω"`, `c:0.00 "mm"`: die Zelle bleibt eine Zahl, mit der gerechnet wird.

=== mise-en-forme
# Formatierung

## Text {#texte}

| Befehl | Zugang |
| --- | --- |
| fett, kursiv, unterstrichen | {bold} {italic} {underline}; [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] |
| Schriftart | Liste **Arial**: dreizehn Schriftarten |
| Größe | Liste **10** oder **%formatMenu% › %fontSize%**: 9 bis 72 |
| Textfarbe, Hintergrundfarbe | {font-color} {background} |
| Formatierung löschen | {clear-format}, **%formatMenu% › %clearFormat%** |

In der Palette einer Farbe entfernt **%resetColor%** sie; **%customColor%** öffnet die Farbauswahl des Systems.

Während der Bearbeitung einer Zelle gilt die Formatierung für den ausgewählten Teil des Textes.

## Ausrichtung {#alignement}

| Befehl | Auswahl |
| --- | --- |
| {align-left} horizontal | links, zentriert, rechts |
| {align-top} vertikal | oben, Mitte, unten |
| {text-rotation-none} Drehung | geneigt, vertikal, gestapelt |
| {text-overflow} Umbruch | **%wrapOverflow%**: über die leeren Nachbarzellen; **%wrap%**: auf mehrere Zeilen; **%wrapClip%**: am Rand abgeschnitten |

Ohne gewählte Ausrichtung stehen Zahlen und Daten rechts, alles andere links.

## Rahmen {#bordures}

{border-all} zeichnet den gewählten Rahmen; sein Pfeil gibt die Seiten (oben, außen, innen, alle, keine, diagonal), die **Farbe** und den **Stil** der Linie. Farbe und Stil vor der Seite wählen.

## Verbinden {#fusion}

{merge-all} oder **%formatMenu% › %mergeCells%**:

| Befehl | Wirkung |
| --- | --- |
| **%mergeAll%** | eine einzige Zelle, die einen einzigen Inhalt behält |
| **%mergeVertical%** | eine Zelle pro Spalte |
| **%mergeHorizontal%** | eine Zelle pro Zeile |
| **%unmerge%** | stellt die Zellen wieder her |

Ein Bereich mit verbundenen Zellen kann weder sortiert noch gefiltert werden.

## Abwechselnde Farben {#alternees}

{alternating} oder **%formatMenu% › %alternatingColors%** färbt jede zweite Zeile des ausgewählten Bereichs, auf Wunsch mit Kopfzeile. Die drei Farben sind wählbar.

![Das Fenster der abwechselnden Farben](couleurs-alternees.webp 1280x760)

Es sind gewöhnliche Hintergrundfarben: sie folgen weder einer Sortierung noch einer eingefügten Zeile. **%clearAlternating%** löscht sie aus dem Bereich.

## Gitternetzlinien {#quadrillage}

{gridlines} oder **%view% › %show% › %gridlines%** blendet die grauen Linien in allen Blättern der Mappe aus oder ein. Der [Druck](impression.html) hat seine eigene Einstellung.

Für eine vom Wert abhängige Farbe siehe [Bedingte Formatierung](conditionnelle.html).

=== conditionnelle
# Bedingte Formatierung

> Eine Regel ändert das Aussehen der Zellen eines Bereichs, die eine Bedingung erfüllen. Sie folgt den Werten, eingegeben oder berechnet.

## Eine Regel erstellen {#creer}

1. Den Bereich ohne seine Kopfzeile auswählen.
2. {conditional} oder **%format% › %conditionalFormatting%**.
3. Die Bedingung, den Vergleichswert, die Farben oder den Stil wählen.
4. **%cfAdd%**.

![Das Fenster der bedingten Formatierung mit einer angewendeten Regel](conditionnelle.webp 1280x760)

| Bedingung | Die Zelle |
| --- | --- |
| `<` | ist kleiner als |
| `>` | ist größer als |
| `=` | ist gleich |
| `!=` | ist ungleich |
| `[]` | liegt zwischen zwei Werten, Grenzen eingeschlossen |
| `abc` | enthält einen Text, Groß- und Kleinschreibung gleichgültig |

## Womit vergleichen {#comparer}

| %cfCompareTo% | Beispiel |
| --- | --- |
| **%cfValue%** | die Noten unter 10 |
| **%cfCell%** | die Noten unter der in `F1` geschriebenen Schwelle |
| **%cfColumn%** | in Spalte C die Werte über denen der Spalte B, Zeile für Zeile |

## Aussehen {#apparence}

**%cfText%** und **%cfBackground%** wählen die Farben, **%cfNone%** entfernt sie; **B**, *I*, **U** setzen fett, kursiv, unterstrichen. Mindestens eine Farbe oder ein Stil ist nötig.

## Mehrere Regeln {#regles}

Die linke Spalte listet die Regeln des Blatts auf: **%cfEdit%**, **%cfDelete%**. Gelten mehrere Regeln für eine Zelle, hat die letzte der Liste Vorrang, Farbe für Farbe.

warn: In einem von einer Regel abgedeckten Bereich werden direkt vergebene Text- und Hintergrundfarben nicht mehr angezeigt.

Die Regeln werden in der Excel-Datei als bedingte Formatierungen von Excel gespeichert.

=== lignes-colonnes
# Zeilen und Spalten

## Größe {#taille}

| Aktion | Wirkung |
| --- | --- |
| den rechten Rand eines Spaltenkopfs ziehen | ändert ihre Breite |
| den unteren Rand eines Zeilenkopfs ziehen | ändert ihre Höhe |
| Rechtsklick auf den Kopf › **%width%**, **%height%** | Größe in Pixeln für alle ausgewählten Spalten oder Zeilen |

## Einfügen, löschen {#inserer}

Rechtsklick in eine Zelle oder auf einen Kopf: **%rowAbove%**, **%rowBelow%**, **%columnLeft%**, **%columnRight%**. Die Anzahl wird im Feld getippt. Rechtsklick auf einen Kopf: **%deleteRow%**, **%deleteColumn%**.

![Das Rechtsklick-Menü](menu-contextuel.webp 760x650)

Formeln werden angepasst: ihre Bezüge folgen den verschobenen Zellen. Die Grenze liegt bei 10 000 Zeilen und 1 000 Spalten.

## Ausblenden {#masquer}

Rechtsklick auf den Kopf › **%hideRow%**, **%hideColumn%**. Ausgeblendete Zellen werden weiter berechnet. Um sie wieder anzuzeigen, die umgebenden Köpfe auswählen, dann Rechtsklick › **%showHidden%**.

## Fixieren {#figer}

Fixierte Zeilen und Spalten bleiben beim Scrollen sichtbar. Die Grenzzelle auswählen, dann {freeze-row-col} oder **%view% › %freeze%**:

| Befehl | Sichtbar bleiben |
| --- | --- |
| **%freezeRow%** | die Zeilen bis zu der der Zelle, einschließlich |
| **%freezeColumn%** | die Spalten bis zu der der Zelle, einschließlich |
| **%freezeCell%** | beides |
| **%freezeCancel%** | nichts Bestimmtes |

Um die Kopfzeile zu behalten: eine Zelle der Zeile 1 anklicken, **%freezeRow%**.

=== tri-filtre
# Sortieren, filtern, suchen

## Sortieren {#trier}

| Befehl | Wirkung |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**, **%sortDescending%** | sortiert die Auswahl nach ihrer ersten Spalte; auch mit {filter} und per Rechtsklick |
| Rechtsklick › **%sortRange%** | wählt die Sortierspalte, die Reihenfolge und ob die erste Zeile eine Kopfzeile ist |

![Das Fenster zum Sortieren eines Bereichs](tri.webp 1280x760)

Die ganze Tabelle auswählen, nicht eine einzelne Spalte: die Zeilen müssen vollständig bleiben. Ein Bereich mit verbundenen Zellen lässt sich nicht sortieren.

## Filtern {#filtrer}

1. Die Tabelle samt Kopfzeile auswählen.
2. **%data% › %sortAndFilter% › %createFilter%** oder {filter} oder Rechtsklick › **%filterRange%**.
3. Den Pfeil einer Spalte anklicken.

![Der Filter einer Spalte](filtre.webp 1280x760)

| Im Menü einer Spalte | Wirkung |
| --- | --- |
| **%sortByAsc%**, **%sortByDesc%** | sortiert die Zeilen der Tabelle |
| **%filterByColor%** | nach Hintergrund- oder Textfarbe |
| **%filterByValues%** | die zu behaltenden Werte ankreuzen; **%filterAll%**, **%filterNone%**, **%filterInverse%**; das Feld sucht einen Wert |
| **%filterConfirm%** | wendet an |
| **%clearFilter%** | entfernt den Filter der Tabelle |

Ausgeschlossene Zeilen werden ausgeblendet, nicht gelöscht. Die Filter mehrerer Spalten wirken zusammen. **%data% › %sortAndFilter% › %clearFilter%** entfernt den Filter.

## Suchen, ersetzen {#rechercher}

[[Ctrl+F]] öffnet **%find%**, [[Ctrl+H]] **%replace%**.

![Die Suche](rechercher.webp 1280x660)

| Option | Wirkung |
| --- | --- |
| **%regex%** | der gesuchte Text ist ein regulärer Ausdruck: `^A` findet, was mit A beginnt |
| **%wholeWord%** | die ganze Zelle ist gleich dem Text |
| **%matchCase%** | unterscheidet Groß- und Kleinbuchstaben |
| **%findAll%** | listet die gefundenen Zellen auf; ein Klick auf eine Zeile führt hin |
| **%findNext%** | geht zur nächsten |
| **%replaceOne%**, **%replaceAll%** | eine Zelle, alle |

Gesucht wird im angezeigten Blatt.

=== controles
# Kontrollkästchen, Listen und Kalender

![Kontrollkästchen, eine Drop-down-Liste und der Kalender eines Datums](controles.webp 1280x560)

## Kontrollkästchen {#cases}

Die Zellen auswählen, **%insert% › %checkbox%**. Ein Klick aktiviert oder deaktiviert; die Zelle hat den Wert TRUE oder FALSE.

```
=IF(B2, "erledigt", "offen")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

Die zweite Formel addiert die Werte der Spalte C, deren Kästchen aktiviert ist; die dritte zählt die aktivierten Kästchen.

## Drop-down-Listen {#listes}

Die Zellen auswählen, **%insert% › %dropdown%**.

| Quelle | Inhalt |
| --- | --- |
| **%listValues%** | die Optionen, eine pro Feld; **%addOption%**; ohne Komma |
| **%listRange%** | ein Bereich, dessen Zellen die Optionen sind: `%sheet%2!$A$1:$A$10` |

Ein Bereich ohne `$` verschiebt sich von Zelle zu Zelle wie eine ausgefüllte Formel. Ändern sich seine Zellen, folgen die Optionen.

Die Zelle zeigt einen Pfeil; ein Klick öffnet die Optionen. Ein anderer Wert als die der Liste wird nicht angenommen.

## Kalender {#calendrier}

Ein Doppelklick auf eine Datumszelle öffnet einen Kalender: einen Tag wählen, den Monat mit **<** und **>** wechseln, **%today%** für das heutige Datum. Er öffnet sich auf jeder Zelle mit Datumsformat, auch einer leeren, außer sie enthält eine Formel oder ist [gesperrt](protection.html).

tip: Für eine Datumsspalte, die mit dem Kalender ausgefüllt wird: sie auswählen und ihr das Format **%fDate%** geben.

## Entfernen {#retirer}

[[Delete]] entfernt das Kästchen oder die Liste aus der Zelle samt ihrem Wert.

Kästchen und Listen werden in der Excel-Datei gespeichert; die Kästchen sind dort Excel-Kontrollkästchen.

=== graphiques
# Diagramme und Sparklines

## Ein Diagramm erstellen {#creer}

1. Die Daten auswählen.
2. {chart} oder **%insert% › %chart%**.
3. Typ und Optionen wählen; die Vorschau folgt.
4. **%chartAdd%**, dann **%chartClose%**.

![Das Diagrammfenster](graphique.webp 1280x900)

| Auswahl | Deutung |
| --- | --- |
| eine Spalte oder Zeile von Zahlen | die Daten |
| zwei Spalten | Beschriftungen in der ersten, Daten in der zweiten |
| zwei Zeilen | Beschriftungen in der ersten, Daten in der zweiten |
| zwei getrennte Spalten, mit [[Ctrl]] gewählt | ebenso |

Ein Diagramm zeigt eine Reihe: eine Zeile oder Spalte von Daten. Zellen ohne Zahl, etwa ein Kopf, werden übergangen.

## Typen {#types}

| Typ | Für | Beschriftungen |
| --- | --- | --- |
| **%tBar%** | Vergleiche | unter den Balken |
| **%tLine%** | einen Verlauf | auf der x-Achse |
| **%tScatter%** | eine Beziehung zwischen zwei Größen | sie sind die x-Werte, wenn es Zahlen sind; sonst 1, 2, 3… |
| **%tPie%** | Anteile; positive Werte | in der Legende oder auf den Sektoren |

Bis zu 120 Werte, 24 für Sektoren.

![Die vier Diagrammtypen](graphiques.webp 1280x640)

## Optionen {#options}

| Feld | Inhalt |
| --- | --- |
| **%chartTitle%** | Pflicht; oben im Diagramm angezeigt |
| **%chartColor%** | Auswahl oder Code `#4F81BD`; Sektoren haben eigene Farben |
| **%chartRange%** | der Bereich: `B2:B6` |
| **%chartLabels%** | **%lNone%**; **%lColumn%** (`A`); **%lRow%** (`1`); **%lRange%**, ebenso groß wie die Daten |
| **%chartOptions%** | Werte, Legende, x-Achse, y-Achse, Gitter |

## Verschieben, bearbeiten {#modifier}

- Das Titelband ziehen verschiebt das Diagramm; seine untere rechte Ecke ziehen ändert die Größe.
- **%chartEdit%** öffnet das Fenster wieder, **%chartDelete%** löscht es. Das Fenster listet auch alle Diagramme des Blatts auf.
- Das Diagramm folgt den Daten seiner Zellen.

Diagramme werden in der Excel-Datei als echte Diagramme gespeichert und von DocCells wieder gelesen. Sie werden nicht mit dem Blatt [gedruckt](impression.html).

## Sparklines {#sparklines}

Die Funktion `SPARKLINE` zeichnet ein Miniaturdiagramm in der Zelle.

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![Sparklines als Linien und Säulen](sparklines.webp 900x300)

Die Optionen stehen in geschweiften Klammern: der Name, ein umgekehrter Schrägstrich, der Wert; ein Semikolon zwischen zwei Optionen.

| `charttype` | Zeichnung | Eigene Optionen |
| --- | --- | --- |
| `"line"` (Standard) | Linie | `color`, `linewidth`, `xmin`, `xmax`, `ymin`, `ymax` |
| `"bar"` | gestapelte Balken | `max`, `color1`, `color2` |
| `"column"` | Säulen | `color`, `negcolor`, `lowcolor`, `highcolor`, `firstcolor`, `lastcolor`, `axis`, `axiscolor`, `ymin`, `ymax` |
| `"winloss"` | Gewinn und Verlust | dieselben, ohne `ymin` und `ymax` |

Gemeinsame Optionen: `empty` (`"zero"` oder `"ignore"`), `nan` (`"convert"` oder `"ignore"`), `rtl` (von rechts nach links). Die [SPARKLINE-Dokumentation](../../sparkline/de.html) gibt alle Werte mit Beispielen.

Für eine größere Zeichnung Zeile und Spalte vergrößern oder Zellen verbinden.

=== images-liens
# Bilder und Links

## Bilder {#images}

{image} oder **%insert% › %image%** fügt ein Bild des Computers an der Stelle der Auswahl ein.

| Aktion | Wirkung |
| --- | --- |
| das Bild ziehen | verschiebt es |
| einen Anfasser ziehen | ändert seine Größe |
| [[Delete]] bei ausgewähltem Bild | löscht es |

Bilder werden in der Excel-Datei an ihrem Platz gespeichert.

## Links {#liens}

Eine Zelle auswählen, Rechtsklick › **%link%**.

| %linkType% | Adresse |
| --- | --- |
| Webseite (**%linkWeb%**) | `https://…` |
| Zellbereich (**%linkCells%**) | `%sheet%1!A1:C8` |
| **%linkSheet%** | ein Blatt der Mappe |

**%linkText%** wird zum Inhalt der Zelle, blau und unterstrichen. Ist die Zelle ausgewählt, erscheint **%linkOpen%** darunter.

warn: Links werden nicht in der Excel-Datei gespeichert: nur ihr Text.

=== impression
# Drucken

**%file% › %print%** oder [[Ctrl+P]] zeigt die Seiten, wie sie gedruckt werden.

![Die Druckvorschau](imprimer.webp 1280x760)

| Einstellung | Auswahl |
| --- | --- |
| **%printContent%** | das aktive Blatt oder die vor dem Öffnen des Fensters ausgewählten Zellen |
| **%printPaper%** | A4, Letter |
| **%printOrientation%** | Hochformat, Querformat |
| **%printScale%** | **%printActual%**; **%printWidth%**: alle Spalten auf einer Seitenbreite; **%printPage%** |
| **%printMargins%** | normal, schmal, breit |
| **%printFormatting%** | Gitternetzlinien, Zeilen- und Spaltenköpfe, Hintergrundfarben |

**%printButton%** öffnet das Fenster des Browsers, in dem der Drucker oder das Speichern als PDF gewählt wird.

- Nur die Zellen mit ihrer Formatierung werden gedruckt: weder Diagramme noch Bilder noch Sparklines.
- Ausgeblendete Zeilen und Spalten werden nicht gedruckt.
- Ein Kontrollkästchen wird als TRUE oder FALSE gedruckt.
- Es wird jeweils ein Blatt gedruckt.

tip: Um mit den Diagrammen zu drucken, die Mappe speichern und in Excel oder LibreOffice öffnen.

=== protection
# Schützen

> Eine geschützte Arbeitsmappe ist nur in den entsperrten Zellen änderbar: so bereitet man ein Übungsblatt vor.

## Ein Blatt für Schüler vorbereiten {#preparer}

1. Die auszufüllenden Zellen auswählen, Rechtsklick › **%unlock%**.
2. {protect} oder **%tools% › %protectWorkbook%**.
3. Speichern, dann [die Datei oder ihren Link weitergeben](partager.html).

Anfangs sind alle Zellen gesperrt; die Sperre wirkt nur in einer geschützten Mappe. **%lock%** macht es rückgängig.

## Was der Schutz verhindert {#effets}

| In einer geschützten Mappe | Gesperrte Zelle | Entsperrte Zelle |
| --- | --- | --- |
| eingeben, löschen | nein | ja |
| Kalender eines Datums | nein | ja |
| Breiten und Höhen | nein | nein |
| abwechselnde Farben, Einfügen von Kästchen und Listen, Ausfüllen per Menü | nein | nein |
| Formatierung, Einfügen von Zeilen und Spalten, Diagramme | ja | ja |

Der Schutz gilt für alle Blätter. Er wird samt den entsperrten Zellen in der Excel-Datei gespeichert und von DocCells und Excel gelesen.

## Schülermodus {#eleve}

`?mode=student` in der Adresse öffnet DocCells ohne die Schaltfläche {protect} und ohne die Befehle **%unlock%** und **%defineName%**; **%protectWorkbook%** ist ausgegraut. Schüler können den Schutz nicht aufheben.

```
https://…/doccells/?mode=student&url=https://…/uebung.xlsx
```

note: Es ist ein Schutz ohne Passwort: wer die Datei in einer anderen Tabellenkalkulation oder ohne `mode=student` öffnet, kann ihn aufheben.

=== partager
# Teilen und einbetten

## Eine Arbeitsmappe per Link {#url}

`?url=` gefolgt von der Adresse einer `.xlsx`-Datei im Netz öffnet sie in DocCells.

```
https://…/doccells/?url=https://beispiel.org/noten.xlsx
```

Die Website der Datei muss das Lesen durch andere Websites erlauben (CORS-Header); für eine Datei neben DocCells auf derselben Website gilt diese Einschränkung nicht. Jeder öffnet seine Kopie: Änderungen gehen nicht in die Originaldatei zurück.

## Ein Google Sheet {#google}

Auch die Adresse eines Google Sheets ist möglich.

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- Es für „Jeder, der über den Link verfügt“ freigeben.
- DocCells liest bei jedem Öffnen eine Kopie im Excel-Format: das Google-Dokument wird nicht geändert.
- Die Website, die DocCells bereitstellt, muss PHP ausführen; höchstens 25 MB.

## Optionen der Adresse {#options}

| Option | Wirkung |
| --- | --- |
| `url=…` | öffnet eine Arbeitsmappe oder ein Google Sheet |
| `mode=student` | [Schülermodus](protection.html#eleve) |
| `lang=de` | legt die Sprache fest: `de`, `el`, `en`, `es`, `fr`, `hi`, `it`, `nl`, `pt`, `ru`, `zh-CN`, `zh-TW` |

Die Optionen folgen einander, durch `&` getrennt: `?lang=de&mode=student&url=…`. Die erste steht nach `?`.

## In einer Webseite {#integrer}

```
<iframe src="https://…/doccells/?url=https://beispiel.org/noten.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

In einem Rahmen hat DocCells weder Menüs noch Schaltflächen zum Öffnen und Speichern noch eine Wiederherstellungskopie: es zeigt die Symbolleiste, die Bearbeitungsleiste und das Blatt.

## Per Programm {#programme}

Eine Seite kann DocCells steuern: eine Arbeitsmappe laden, Zellen lesen und schreiben, ihre Werte verfolgen. Die Option `embed` öffnet diesen Modus; er ist für Entwickler in der Datei [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) des Projekts beschrieben (auf Französisch).

=== docgeo
# Mit DocGeo

> DocGeo, die dynamische Geometriesoftware von DocTools, enthält DocCells: ein Blatt neben einer Figur, die einander lesen.

In DocGeo fügt **%file% › %gView% › %gSheetView%** ein Blatt neben der Figur hinzu; **%file% › %gTab% › %gSheetTab%** macht daraus einen Tab.

## Die Funktion GEO {#geo}

In einer Zelle liest `GEO` den Wert eines Objekts der Figur, das durch seinen Namen in Anführungszeichen angegeben wird.

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'Figur 1'!c")
```

- Die Zelle folgt der Figur, während sie bewegt wird.
- Ein Punkt wird als [Liste](listes.html) seiner Koordinaten gelesen: `=GEO("A")*2` ist auch ein Punkt.
- Beim Schreiben einer Formel trägt ein Klick auf ein Objekt der Figur `GEO` und seinen Namen ein.
- Ein unbekanntes Objekt ergibt `#N/A`. Außerhalb von DocGeo ergibt `GEO` immer `#N/A`.
- `GEO` heißt in allen Sprachen gleich.

## Die Figur liest die Zellen {#figure}

In einer DocGeo-Formel bezeichnet `!B3` eine Zelle, `!B2:B21` einen Bereich.

## Unterschiede zu DocCells allein {#differences}

| In DocGeo | |
| --- | --- |
| Menüs und Schaltflächen | in den Leisten von DocGeo, wenn das Blatt aktiv ist |
| Datei | die von DocGeo: das Blatt wird in der `.dgo` gespeichert, samt Listen und Links |
| Blätter | eines pro Ansicht; mehrere Tabellen-Tabs lesen einander |
| Rückgängig | [[Ctrl+Z]] in den Zellen betrifft nur die Zellen |

Die Seite [Die Tabellenkalkulation](https://doctools.org/apps/docgeo/tutorials/de/tableur.html) des DocGeo-Handbuchs gibt die Einzelheiten.

=== fonctions
# Funktionen

> Die %functions% von DocCells berechneten Funktionen nach Gebieten, mit je einem Beispiel.

- Suche: einen Funktionsnamen, deutsch oder englisch, im Feld oben auf der Seite ([[/]]) tippen führt zu seiner Zeile.
- Argumente werden durch Semikolon getrennt; Argumente in eckigen Klammern `[ ]` sind freiwillig. Der kleine englische Name wird bei der Eingabe angenommen.
- `@TRUE()` und `@FALSE()` werden mit ihren Klammern geschrieben; man kann auch 1 und 0 schreiben.
- Ein Argument „Bereich“ kann eine [Liste](listes.html) sein: `=AVERAGE([12, 15, 8])`.
- Siehe auch [Formeln](formules.html): Operatoren, Bezüge, Fehler.

## Die Zellen der Beispiele {#exemples}

Die Beispiele lesen dieses Blatt:

%%sample%%

%%functions%%

## Nicht berechnete Funktionen {#non-calculees}

Die Vervollständigung und die Bibliothek von DocCells nennen auch Funktionen, die nicht berechnet werden: sie ergeben `#NAME?` oder `#ERROR!`. Dasselbe gilt für neuere Excel-Funktionen.

| Nicht berechnet | Stattdessen |
| --- | --- |
| `@TEXT`, `@FIXED`, `@DOLLAR` | ein [Zahlenformat](nombres.html) in der Zelle |
| `XVERWEIS`, `BEREICH.VERSCHIEBEN`, `INDIREKT`, `ADRESSE` | `@INDEX` und `@MATCH`, `@VLOOKUP`, `@CHOOSE` |
| `FILTER`, `SORTIEREN`, `SEQUENZ`, `LET`, `LAMBDA` | [sortieren und filtern](tri-filtre.html); eine Formel [ausfüllen](selection.html#recopier) |
| `MAXWENNS`, `MINWENNS`, `TEXTVERKETTEN` | ein Filter; der Operator `&` |
| `MMULT`, `MDET`, `MINV` | `@SUMPRODUCT`, eine Formel pro Element |
| `HYPERLINK` | [einen Link einfügen](images-liens.html#liens) |
| Excel-Namen mit Punkt: `RANK.EQ`, `VAR.S`, `NORM.DIST`… | der Name ohne Punkt oder der alte Name: `@RANK`, `@VAR`, `@NORMDIST` |
| Datenbankfunktionen (`@DSUM`…), Kupons und Wertpapiere (`@PRICE`, `@COUPNUM`…), `@ISBLANK`, `@CELL`, `@ISFORMULA` | `@SUMIFS`; `=A1=""` für eine leere Zelle |

=== raccourcis
# Tastenkürzel und Gesten

## Datei {#fichier}

| Tasten | Wirkung |
| --- | --- |
| [[Ctrl+O]] | öffnen |
| [[Ctrl+S]] | speichern; in Firefox und Safari herunterladen |
| [[Ctrl+P]] | drucken |

## Bearbeiten {#edition}

| Tasten | Wirkung |
| --- | --- |
| [[Ctrl+Z]]; [[Ctrl+Y]], [[Ctrl+Shift+Z]] | rückgängig; wiederholen |
| [[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] | kopieren, ausschneiden, einfügen |
| [[Ctrl+D]]; [[Ctrl+R]] | nach unten; nach rechts ausfüllen |
| [[Delete]], [[⌫]] | die Zellen leeren |
| [[Ctrl+F]]; [[Ctrl+H]] | suchen; ersetzen |

## Formatierung {#mise-en-forme}

| Tasten | Wirkung |
| --- | --- |
| [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] | fett, kursiv, unterstrichen |

## Bewegen, auswählen {#se-deplacer-selectionner}

| Tasten | Wirkung |
| --- | --- |
| Pfeiltasten | Nachbarzelle |
| [[Tab]], [[Shift+Tab]] | nächste, vorige Zelle |
| [[Shift]] und Pfeiltaste | die Auswahl erweitern |
| [[Shift]] und Klick | bis zur Zelle auswählen |
| [[Ctrl]] und Klick | zur Auswahl hinzufügen |
| [[Ctrl+A]] | das ganze Blatt |

## Eingabe {#saisie}

| Tasten | Wirkung |
| --- | --- |
| [[F2]], [[Enter]], Doppelklick | die Zelle bearbeiten |
| [[Enter]] | bestätigen, nach unten gehen |
| [[Esc]] | abbrechen |
| [[Alt+Enter]] | neue Zeile in der Zelle |
| [[↑]] [[↓]], [[Enter]], [[Tab]] | eine vorgeschlagene Funktion durchlaufen, wählen |
| Klick oder Ziehen auf dem Blatt | einen Bezug in die Formel einfügen |

## Maus {#souris}

| Geste | Wirkung |
| --- | --- |
| den blauen Anfasser ziehen | [ausfüllen](selection.html#recopier) |
| den Rand der Auswahl ziehen | [verschieben](selection.html#deplacer) |
| den Rand eines Kopfs ziehen | [eine Breite, eine Höhe ändern](lignes-colonnes.html#taille) |
| Rechtsklick | Menü der Zelle, des Kopfs, des Registers |
| Doppelklick auf ein Datum | [Kalender](controles.html#calendrier) |
| Doppelklick auf ein Register | das Blatt umbenennen |
| ein Register ziehen | das Blatt verschieben |
| eine `.xlsx`-Datei ablegen | sie öffnen |

=== excel
# Excel-Kompatibilität

> DocCells liest und schreibt das Excel-Format `.xlsx`. Folgendes wird in beide Richtungen übernommen.

## Was erhalten bleibt {#conserve}

| Element | Bemerkung |
| --- | --- |
| Werte, Texte, Daten, Formeln | Formeln werden in der Sprache von DocCells angezeigt |
| [Zahlenformate](nombres.html) | auch benutzerdefinierte |
| Schrift, Farben, Ausrichtung, Drehung, Umbruch | |
| Rahmen, verbundene Zellen | |
| Breiten, Höhen, ausgeblendete Zeilen und Spalten | |
| [fixierte Zeilen und Spalten](lignes-colonnes.html#figer), Gitternetzlinien | |
| mehrere Blätter | |
| [benannte Bereiche](noms.html) | |
| [bedingte Formatierung](conditionnelle.html) | die Regeln von DocCells, die einfachen Regeln von Excel (Vergleich, enthaltener Text) |
| [Kontrollkästchen, Drop-down-Listen](controles.html) | |
| [Diagramme](graphiques.html) | als Excel-Diagramme geschrieben; die von DocCells werden wieder gelesen |
| [Bilder](images-liens.html) | |
| [Filter](tri-filtre.html#filtrer) | |
| [Schutz](protection.html), entsperrte Zellen | |

## Was nicht erhalten bleibt {#perdu}

| Element | Wird zu |
| --- | --- |
| [Links](images-liens.html#liens) | ihrem Text |
| [Listen](listes.html) in den Zellen | einem Text, `n:[2, 1]` |
| Sparklines von DocCells oder Google Sheets | einer Formel `SPARKLINE`, von DocCells wieder gelesen; Excel unbekannt |
| in Excel erstellte Diagramme | nicht übernommen |
| Pivot-Tabellen, Makros, Datenschnitte, Kommentare | nicht übernommen |
| bedingte Formatierung mit Farbskalen, Balken, Symbolen | nicht übernommen |

tip: Vor dem Ersetzen einer komplexen Excel-Mappe sie aus DocCells unter einem anderen Namen speichern (**%saveAs%**).

## Listen {#listes}

Eine aus einer `.xlsx` wieder geöffnete Liste ist ein Text: sie neu zu tippen macht wieder eine Liste daraus. Eine von einer Formel berechnete Liste wird wieder eine Liste, sobald die Formel neu berechnet wird.

## Formeln {#formules}

Beim Öffnen behält eine Formel in der Regel das von Excel gespeicherte Ergebnis, bis sich eine ihrer Zellen ändert. Eine [von DocCells nicht berechnete](fonctions.html#non-calculees) Funktion ergibt dann `#NAME?` oder `#ERROR!`.

## Andere Formate {#formats}

| Format | Wie |
| --- | --- |
| `.csv` | die Datei in einem Texteditor öffnen, kopieren und in DocCells einfügen, wenn die Werte durch Tabulatoren getrennt sind; sonst in `.xlsx` umwandeln |
| `.ods`, `.xls` | mit LibreOffice oder Excel als `.xlsx` speichern |
| Google Sheets | [über den Link](partager.html#google) oder als `.xlsx` heruntergeladen |
| PDF | [drucken](impression.html), „Als PDF speichern“ |

=== faq
# Häufige Fragen

## Eingabe {#saisie}

### Ein eingegebenes Datum wird nicht erkannt

`25.11.2026` ist für DocCells ein Text. `2026-11-25` tippen, dann das Format **%fDate%** wählen ([Datum](saisie.html#dates)).

### Statt eines Datums erscheint eine Zahl

Daten sind Anzahlen von Tagen: den Zellen das Format **%fDate%** geben (**%format% › %number%**).

### Meine Zahlen werden nicht addiert

Linksbündig sind sie Texte. Im Deutschen ist das Komma das Dezimaltrennzeichen; eine in der Zelle getippte Einheit macht daraus einen Text ([Typen](saisie.html#types)).

### Die Null am Anfang einer Nummer verschwindet

Vor der Eingabe das Format **%fText%** geben oder mit einem Apostroph beginnen ([Texte](saisie.html#textes)).

### Zahlen erwarten einen Punkt statt eines Kommas

DocCells folgt der Sprache des Browsers. `?lang=de` legt sie fest ([Sprache](demarrage.html#langue)).

## Formeln {#formules}

### `#NAME?` bei WAHR oder FALSCH

`@TRUE()` und `@FALSE()` schreiben, oder 1 und 0 ([Bedingungen](formules.html#conditions)).

### `#NAME?` bei einer von DocCells vorgeschlagenen Funktion

Nicht alle vorgeschlagenen Funktionen werden berechnet ([nicht berechnete Funktionen](fonctions.html#non-calculees)).

### `@IFERROR` lässt DIV/0 durch

Den Divisor prüfen: `=IF(B2, A2/B2, "")` ([Fehler](formules.html#erreurs)).

### Beim Einfügen gehen meine Formeln verloren

**%paste%** des Rechtsklicks fügt die Werte ein; [[Ctrl+V]] fügt die Formeln ein ([kopieren](selection.html#copier)).

### Den Namen eines Monats schreiben oder eine Zahl in einem Text formatieren

Die Funktion `@TEXT` wird nicht berechnet: einer eigenen Zelle ein [Format](nombres.html) geben.

### Aktivierte Kästchen zählen

`=SUMPRODUCT(B2:B6, B2:B6)` ([Kontrollkästchen](controles.html#cases)).

### `=TODAY()+1` ergibt #VALUE!

`=TODAY()` in eine Zelle setzen und zu dieser Zelle addieren ([Datum](formules.html#dates)).

## Gestaltung {#presentation}

### Die Farbe einer Zelle ändert sich nicht

Die Zelle liegt im Bereich einer Regel der [bedingten Formatierung](conditionnelle.html#regles).

### Eine Schaltfläche ist verschwunden

Das Fenster ist schmal: sie liegt hinter {more}.

### Sortieren oder Filtern wird verweigert

Der Bereich enthält verbundene Zellen: die Verbindung aufheben.

## Dateien {#fichiers}

### Speichern lädt eine neue Datei herunter

Das ist in Firefox und Safari der Fall. Chrome und Edge schreiben in die Datei ([speichern](demarrage.html#enregistrer)).

### Die Seite wurde ohne Speichern geschlossen

DocCells im selben Browser wieder öffnen: es schlägt vor, die Kopie wiederherzustellen ([wiederherstellen](demarrage.html#recuperer)).

### Mein Diagramm wird nicht gedruckt

Der Druck zeigt nur die Zellen ([drucken](impression.html)).

### Ein Link `?url=` öffnet meine Mappe nicht

Die Website der Datei verweigert vielleicht das Lesen durch andere Websites. Ein Google Sheet muss per Link freigegeben sein ([teilen](partager.html)).

### Meine Links sind verschwunden

Sie werden nicht im Excel-Format gespeichert ([was nicht erhalten bleibt](excel.html#perdu)).

## Schüler {#eleves}

### Können Schüler die Formeln ändern?

Nicht in einer geschützten Mappe außerhalb der entsperrten Zellen ([schützen](protection.html)). `mode=student` im Link nimmt ihnen die Möglichkeit, den Schutz aufzuheben.
