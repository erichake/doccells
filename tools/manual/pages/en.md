=== groups | Getting started | Entering and calculating | Presenting | Using data | Sharing | Reference

=== categories | Function | Description and example | Mathematics | Trigonometry | Logic | Statistics | Probability distributions and tests | Lookup and lists | Text | Dates and times | Finance | Number bases, units, special functions | Complex numbers as text | Information

=== index | Home
# DocCells user manual

> DocCells is a multilingual spreadsheet used in the browser, with nothing to install and no account. It opens and saves Excel workbooks (.xlsx).

<div class="buttons"><a href="../../index.html?lang=en">Open DocCells</a></div>

![The DocCells window: menus, buttons, formula bar, a formatted table of marks and a chart](interface.webp 1280x760)

## The essentials in six actions

| To | Do this |
| --- | --- |
| Enter data | click a cell, type, [[Enter]] ([entering data](saisie.html)) |
| Calculate | type `=` then the formula: `=AVERAGE(B2:B6)` ([formulas](formules.html)) |
| Copy a formula down | drag the blue handle of the selection, or [[Ctrl+D]] ([filling](selection.html#recopier)) |
| Format | **%format%** menu, or the buttons ([formatting](mise-en-forme.html)) |
| Draw a chart | select the data, {chart} ([charts](graphiques.html)) |
| Save | [[Ctrl+S]]: an Excel file ([opening and saving](demarrage.html)) |

## Contents {#sommaire}

- [Opening and saving](demarrage.html): files, recent files, recovery, Google Sheets, language.
- [The interface](interface.html): menus, buttons, formula bar, tabs, zoom.
- [Entering data](saisie.html), [selecting, copying, filling](selection.html).
- [Formulas](formules.html), [lists and complex numbers](listes.html), [named ranges](noms.html), [sheets](feuilles.html).
- [Number formats](nombres.html), [formatting](mise-en-forme.html), [conditional formatting](conditionnelle.html), [rows and columns](lignes-colonnes.html).
- [Sorting, filtering, finding](tri-filtre.html), [checkboxes, lists and calendar](controles.html), [charts and sparklines](graphiques.html), [images and links](images-liens.html), [printing](impression.html).
- [Protecting](protection.html) a workbook for students, [sharing and embedding it](partager.html), using it [with DocGeo](docgeo.html).
- Reference: [the %functions% functions](fonctions.html), [shortcuts](raccourcis.html), [Excel compatibility](excel.html), [FAQ](faq.html).

## Conventions

- Buttons are shown by their icon ({bold} bold).
- [[Ctrl]] means [[⌘]] on a Mac.
- Formulas are written as in English: English function names, decimal point, commas between arguments. DocCells shows them in the language of its interface.
- To search the manual: [[/]] or [[Ctrl+K]]. The words can be typed in any order, without accents; a function's name leads to its row.

=== demarrage
# Opening and saving

## Starting {#nouveau}

DocCells opens on an empty workbook with one sheet. To start again from an empty workbook, reload the page or open DocCells in another browser tab.

## Opening a workbook {#ouvrir}

| How | Effect |
| --- | --- |
| {open}, **%file% › %open%**, [[Ctrl+O]] | choose an `.xlsx` file on the computer |
| Drag the file onto the page | a veil shows where to drop it; the workbook replaces the one that was open |
| **%file% › %openRecent%** | the last ten files opened or saved (Chrome and Edge) |
| A `?url=…` link | an online workbook or a Google Sheet ([sharing](partager.html#url)) |

The only format read is Excel `.xlsx`. Convert old `.xls` files, `.ods` and `.csv` files first. What is kept from an Excel file is described in [Excel compatibility](excel.html).

warn: Opening a workbook replaces the one displayed: save your changes first.

### Recent files {#recents}

The browser may ask again for permission to read the file. A file that was moved, renamed or deleted is removed from the list. **%clearRecentFiles%** empties it. The list stays in this browser, on this computer.

## Saving {#enregistrer}

### Chrome and Edge

| Command | Effect |
| --- | --- |
| {save}, **%file% › %save%**, [[Ctrl+S]] | the first time, asks where to put the file; then replaces it without asking |
| **%file% › %saveAs%** | choose another file |

A file opened with {open}, from the recent files or dropped on the page is saved back in place; the browser asks once for permission to change it.

The workbook's name is at the end of the menu bar. A red dot means unsaved changes; the title of the browser tab then starts with ●.

### Firefox, Safari

These browsers do not allow writing to a file. **%file% › %export%** or [[Ctrl+S]] downloads the workbook, under the name of the open workbook.

## Recovering an unsaved workbook {#recuperer}

While there are unsaved changes, DocCells keeps a copy in the browser, updated less than a second after each change. If the page closes without saving, the next time DocCells opens it offers, with the date of the copy, to restore it (**%restore%**) or not (**%ignore%**).

- Saving, exporting or opening another workbook erases this copy.
- Ignoring the copy deletes it for good.
- The copy is only made when DocCells fills the whole page, not when it is embedded in another one.

## Language {#langue}

DocCells takes the browser's language among the twelve of its interface: Chinese (simplified and traditional), Dutch, English, French, German, Greek, Hindi, Italian, Portuguese, Russian, Spanish. English is used for the others. `?lang=en` in the address sets the language.

The language changes the menus, the function names, the decimal separator, the currency symbol and the order of displayed dates. The saved file does not depend on it: a workbook written in French opens in German with its formulas in German.

=== interface
# The interface

![The DocCells window](interface.webp 1280x760)

From top to bottom: the menu bar, the toolbar, the formula bar, the sheet, the sheet tabs and the zoom.

## Menus {#menus}

| Menu | Contents |
| --- | --- |
| **%file%** | [open, save](demarrage.html), [print](impression.html) |
| **%edit%** | undo, redo, [fill down, right](selection.html#recopier) |
| **%view%** | [gridlines](mise-en-forme.html#quadrillage), [freeze](lignes-colonnes.html#figer) |
| **%insert%** | [image](images-liens.html), [chart](graphiques.html), [checkbox, drop-down list](controles.html) |
| **%format%** | [number](nombres.html), [text, alignment, merging](mise-en-forme.html), [alternating colors](mise-en-forme.html#alternees), [conditional formatting](conditionnelle.html) |
| **%data%** | [sort and filter](tri-filtre.html) |
| **%tools%** | [protect](protection.html), this manual (**%manual%**), DocTools, source code, version (**%about%**) |

A check mark shows an active option: gridlines shown, frozen cells, bold, filter, protected workbook.

![The format menu and the number formats](menus.webp 1280x620)

## The toolbar {#boutons}

| Button | Role |
| --- | --- |
| {open} {save} | [open, save](demarrage.html) |
| {gridlines} | show or hide the [gridlines](mise-en-forme.html#quadrillage) |
| {alternating} | [alternating colors](mise-en-forme.html#alternees) |
| {conditional} | [conditional formatting](conditionnelle.html) |
| {protect} | [protect](protection.html); bluish when the workbook is protected |
| {chart} | [insert a chart](graphiques.html) |
| {image} | [insert an image](images-liens.html) |
| {undo} {redo} | undo, redo |
| {clear-format} | clear the formatting |
| {percentage-format} {number-decrease} {number-increase} | [percentage, fewer or more decimals](nombres.html) |
| **%fGeneral%**, **Arial**, **10** | number format, font, size |
| {bold} {italic} {underline} | bold, italic, underlined |
| {font-color} {background} | text color, fill color |
| {border-all} {merge-all} | [borders, merging](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | alignments, rotation, wrapping |
| {freeze-row-col} | [freeze](lignes-colonnes.html#figer) |
| {formula-sum} | [automatic sum](formules.html#somme) and other formulas |
| {filter} | [sort and filter](tri-filtre.html) |

The small arrow of a button opens its choices; the button itself repeats the last one. In a narrow window, the last buttons are behind {more}.

## The formula bar {#barre}

- On the left, the **name box**: the address of the selection, or the [name of the range](noms.html). Its arrow lists the named ranges and opens the name manager.
- To the right of *fx*, the content of the cell, including its formula: it can be edited there.

## The sheet {#feuille}

- A right-click opens a menu that depends on the place: cell, column or row header, sheet tab.
- A new sheet has 84 rows and 60 columns (A to BH). More are added by right-click, **%insertCells%** ([rows and columns](lignes-colonnes.html)).
- The blue handle at the corner of the selection [fills](selection.html#recopier).

## Tabs and zoom {#zoom}

At the bottom, {plus} adds a sheet, {all-sheets} lists them all ([sheets](feuilles.html)). On the right, **−** and **+** set the zoom; a click on the percentage offers 10% to 400%.

## Undo {#annuler}

{undo} or [[Ctrl+Z]] undoes, {redo}, [[Ctrl+Y]] or [[Ctrl+Shift+Z]] redoes: entries, pastes, formatting, insertions. The history starts afresh when a workbook is opened, when gridlines are shown or hidden, when the workbook is protected, or when a name or a conditional formatting rule is added. Charts are not part of it: they are [edited or deleted](graphiques.html#modifier) with their own buttons.

=== saisie
# Entering data

## Writing in a cell {#ecrire}

| Action | Effect |
| --- | --- |
| type on a selected cell | replaces its content |
| double click, [[F2]] or [[Enter]] | edits its content |
| [[Enter]] | confirms and moves down one cell |
| click in another cell | confirms |
| [[Esc]] | abandons the entry |
| [[Alt+Enter]] | new line inside the cell |
| [[Delete]] or [[⌫]] | empties the selected cells, including checkboxes and drop-down lists; their formatting stays |
| right-click › **%clearContent%** | the same |

While typing, the arrow keys move the caret in the text. Otherwise the arrow keys, [[Tab]] and [[Shift+Tab]] change cells.

## What DocCells recognizes {#types}

| You type | You get |
| --- | --- |
| `12`, `-3`, `1e5` | a number, aligned right |
| `n:2.5` | a decimal number; the separator is the decimal point |
| `25%`, `n:2.5%` | a percentage |
| `2026-11-25`, `2026/11/25` | a date |
| `2026-11-25 14:30` | a date and a time |
| `TRUE`, `FALSE` | a logical value |
| `n:[2, 1]` | a [list](listes.html) |
| `=A1+B1` | a [formula](formules.html) |
| anything else | text, aligned left |

### Dates {#dates}

A date is typed year first: `2026-11-25`. `11/25/2026` stays a text, which cannot be calculated with. To display it as usual, choose **%format% › %number% › %fDate%** (`%xDate%`) or a [custom format](nombres.html#personnalise).

A double click on a date cell opens a [calendar](controles.html#calendrier). `=TODAY()` gives today's date.

### Texts made of digits {#textes}

A number starting with zero loses that zero: `007` becomes 7. To keep it, first give the cells the **%fText%** format (**%format% › %number% › %fText%**), or start with an apostrophe: `'007`.

## Common entry problems {#erreurs}

| You see | Cause |
| --- | --- |
| a number aligned left | it is a text: a decimal comma, a unit (`12 $`), an extra space |
| `46351` instead of a date | a date in the **%fGeneral%** format: give it the **%fDate%** format |
| the text cut off by the next cell | widen the [column](lignes-colonnes.html#taille), or choose **%wrap%** |

For a unit, enter the number alone and give it a [format](nombres.html): currency, or a custom one such as `c:0.00 "m"`.

=== selection
# Selecting, copying, filling

## Selecting {#selectionner}

| Action | Selection |
| --- | --- |
| click | a cell |
| drag | a range |
| click, then [[Shift]] and click | the range between the two |
| [[Shift]] and an arrow key | extends the range |
| [[Ctrl]] and click or drag | one more range |
| click on a letter, a number | a column, a row |
| drag over the letters, the numbers | several columns, several rows |
| [[Ctrl+A]] | the whole sheet |
| name box, arrow | a [named range](noms.html) |

The address of the selection is in the name box, on the left of the formula bar.

## Copying, cutting, pasting {#copier}

[[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]], or **%copy%** and **%paste%** of the right-click menu.
- **%paste%** of the right-click menu pastes the values, without the formulas; [[Ctrl+V]] pastes the formulas.
- A pasted formula follows its new place: `=B2` copied one row below becomes `=B3`. The `$` sign fixes a row or a column ([references](formules.html#references)).
- A formula that is cut keeps its references.
- A table copied from Excel, Numbers, a web page or a tab-separated text is pasted cell by cell; numbers and lists are recognized as when typed.
- Several ranges cannot be cut or pasted at once.

## Moving {#deplacer}

Drag the border of the selection: the cells move, with their formatting.

## Filling {#recopier}

The blue handle, at the bottom right corner of the selection, is dragged down, up, left or right.

| Starting cells | The handle gives |
| --- | --- |
| a formula | the formula, its references shifted |
| two numbers, 1 and 2 | the series: 3, 4, 5… |
| a single number, text or date | the same value |
| two dates | the next dates, with the same step |

![The series 1, 2 continued with the handle](recopie.webp 760x300)

Without the mouse, or on a large range:

| Command | Effect |
| --- | --- |
| **%edit% › %fillDown%**, [[Ctrl+D]] | the first row of the selected range is copied into the next ones |
| **%edit% › %fillRight%**, [[Ctrl+R]] | the first column is copied into the next ones |

If a single row is selected, [[Ctrl+D]] copies the row above into it; if a single column is, [[Ctrl+R]] copies the one on its left. These commands always copy, without making a series, with formats, borders, checkboxes and drop-down lists.

tip: For a formula in a whole column: type it at the top, select from that cell to the last one, [[Ctrl+D]].

=== formules
# Formulas

## Writing a formula {#ecrire}

A formula starts with `=`. It contains numbers, texts in quotation marks, references to cells, operators and [functions](fonctions.html).

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="Total: "&SUM(B2:B6)
```

The cell shows the result, the formula bar the formula. Cells that depend on a changed cell are recalculated at once.

In English, the decimal separator is the point and arguments are separated by commas: `=ROUND(3.14159, 2)`. Function names are typed in lowercase or uppercase: `=sum(B2:B6)` and `r:=SUM(B2:B6)` are both accepted.

## Pointing at cells {#souris}

While typing a formula, a click on a cell of the sheet inserts its address, a drag inserts the range. Each reference has its color, in the formula and on the sheet.

## Completion {#completion}

From the first letters of a name, DocCells suggests the functions that contain them: [[↑]] [[↓]] to browse, [[Enter]], [[Tab]] or a click to choose. After the opening parenthesis, a help box recalls the arguments.

![The functions suggested after the first letters](completion.webp 760x560)

![The help of a function](aide-formule.webp 760x560)

## The automatic sum {#somme}

{formula-sum} writes a sum. Its arrow offers **%sum%**, **%average%**, **%count%**, **%max%**, **%min%**, and **%allFormulas%**: the library, where a function is looked up by its name, its description or its category.

![The formula library](bibliotheque.webp 1280x760)

## Operators {#operateurs}

| Operator | Role |
| --- | --- |
| `+` `-` `*` `/` | four operations |
| `^` | power: `=2^10` |
| `%` | percentage: `=20%*B2` |
| `&` | joins texts: `=A2&" "&B2` |
| `=` `<>` | equal, different |
| `<` `>` `<=` `>=` | comparisons |
| `( )` | priority |

Powers come before products and quotients, then sums, then comparisons. `=-2^2` gives −4 (4 in Excel).

## References {#references}

| Written | Means |
| --- | --- |
| `B2` | a cell; follows the filling |
| `$B$2` | the same cell, even when filled |
| `B$2`, `$B2` | fixed row, fixed column |
| `B2:D6` | a range |
| `B:B`, `2:2` | a whole column, a whole row |
| `%sheet%2!B2`, `'Marks 2'!B2` | a cell of [another sheet](feuilles.html#references) |
| `marks` | a [named range](noms.html) |

Filled down, `=B2*$B$1` becomes `=B3*$B$1`, `=B4*$B$1`…

## Conditions {#conditions}

```
=IF(B2>=10, "pass", "fail")
=IF(AND(B2>=10, C2>=10), "yes", "no")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- Logical values are written `@TRUE()` and `@FALSE()`, with the parentheses. They are displayed as TRUE and FALSE.
- A criterion is a text: `">10"`, `"<>0"`, `"Ana"`. The wildcards `*` and `?` are not recognized.
- An empty cell is tested with `=B2=""`; it is not equal to 0.

## Looking up in a table {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

The first one looks for Léa in the first column of the table and returns the third one; the last argument 0 asks for the exact value. The second one gives the name of the student with the best mark.

## Dates and times {#dates}

A date is a number of days, a time a fraction of a day: in cells, they can be added and subtracted.

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

A date given by `@DATE` or `@TODAY` must go through a cell to be added to: `=TODAY()+1` gives `#VALUE!`, but if A1 contains `=TODAY()`, `=A1+1` gives tomorrow. The result is a number: give it a **%fDate%** format.

## Errors {#erreurs}

| Displayed | Cause |
| --- | --- |
| `#NAME?` | unknown name: typing mistake, function [not computed](fonctions.html#non-calculees), `@TRUE` without parentheses, text without quotation marks |
| `#VALUE!` | unexpected type: a text where a number is needed |
| `DIV/0` | division by zero or by an empty cell |
| `#N/A` | value not found (`@MATCH`, `@VLOOKUP`), or `GEO` outside DocGeo |
| `#REF!` | cell or sheet that does not exist |
| `#NUM!` | number out of the domain: `=SQRT(-1)` |
| `#ERROR!` | badly written formula, or function not computed |

`@IFERROR` replaces the error of a function (`#N/A`, `#NUM!`): `=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "absent")`. It does not replace that of a calculation (`DIV/0`, `#VALUE!`): against a division by zero, test the divisor, `=IF(B2, B3/B2, "")`, which works for a zero as for an empty cell.

=== listes
# Lists and complex numbers

> A DocCells cell can contain a list of numbers. A list of two numbers is also a point of the plane, or a complex number.

## Writing a list {#ecrire}

Between square brackets, elements separated by commas. A list can contain lists.

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

Without `=`, the list is a value; with `=`, its elements can be calculations. In a language with a decimal comma, elements are separated by semicolons: `r:[2; 1]`.

## Operations {#operations}

| Operation | Result |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`: term by term, equal lengths |
| `n:[1, 2, 3] * 2`, `n:[2, 4, 6] / 2` | `n:[2, 4, 6]`, `n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`: product of complex numbers |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`: quotient of complex numbers |
| `n:[2, 1] + 3` | `n:[5, 1]`: 3 is a real complex number |
| `n:[0, 1]^2` | `n:[-1, 0]`, up to rounding |
| `n:[8, 0]^(1/3)` | the list of the three cube roots |
| `n:-[2, 1]` | `n:[-2, -1]` |

Any other combination gives `#VALUE!`: product of two lists of three numbers, different lengths, text.

## Lists and functions {#fonctions}

A function sees a list as a range:

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` gives the second element of the list in A1: the ordinate of a point, the imaginary part of a complex number. Some [functions](fonctions.html) return a list: `@FREQUENCY`, `@LINEST`, `@TRANSPOSE`, `@UNIQUE`, `@SPLIT`.

## Display {#affichage}

The buttons {number-decrease} {number-increase} and the [number formats](nombres.html) apply to each number of the list: `n:[-0.14, 0.27]`. The exact values stay.

## Example: a complex sequence {#exemple}

The orbit of 0 under *z* ↦ *z*² + *c*: A1 contains *c*, A2 `n:[0, 0]`, A3 the formula below, filled down.

```
=A2^2+$A$1
```

In [DocGeo](docgeo.html), such a column is drawn in the figure.

note: In an Excel file, a list is saved as a text, and so is the value of a formula that gives a list ([compatibility](excel.html#listes)).

=== noms
# Named ranges

## Giving a name {#definir}

1. Select the cell or the range.
2. Right-click › **%defineName%** (or the arrow of the name box › **%nameManager%**).
3. Type the name, choose the scope, **%nameOk%**.

![The new name window](noms.webp 1280x760)

| Field | Content |
| --- | --- |
| **%nameField%** | starts with a letter or `_`; letters, digits, `_` and `.`, no space; not an address such as `B2` |
| **%scope%** | **%workbook%**: read from all sheets; a sheet: read only from it, where it prevails over a name of the workbook |
| **%refersTo%** | a cell or a range, with its sheet: `'%sheet%1'!$B$2:$B$6` |

## Using a name {#utiliser}

```
=AVERAGE(marks)
=price*(1+tax)
```

- The arrow of the name box lists the names: choosing one selects its range, in its sheet.
- When the selection is exactly a named range, the name box shows its name.
- A [drop-down list](controles.html#listes) can read a range of cells, given by its address.

## Editing, deleting {#gerer}

In the **%nameManager%**, clicking a name brings its fields back for editing; **%nameRemove%** deletes it; **%nameNew%** goes back to an empty name. Before deleting a name, replace the formulas that read it: they keep their last value, then no longer calculate.

Names are saved in the Excel file and read from it.

=== feuilles
# Sheets

## Adding, switching sheets {#ajouter}

- {plus} adds a sheet, named “%sheet%2”, “%sheet%3”…
- A click on a tab displays it; {all-sheets} lists the sheets, hidden ones included, and displays the one chosen.

## The menu of a tab {#menu}

Right-click on the tab, or its arrow:

| Command | Effect |
| --- | --- |
| **%sheetDelete%** | after confirmation; the last visible sheet cannot be deleted |
| **%sheetCopy%** | duplicates the sheet |
| **%sheetRename%** | or double click on the name; without `[ ] : ? * / ' "` |
| **%sheetColor%** | color of the tab |
| **%sheetHide%** | the sheet is still read by formulas; {all-sheets} shows it again |
| **%sheetLeft%**, **%sheetRight%** | changes the order; the tab can also be dragged |

## Reading another sheet {#references}

The name of the sheet, an exclamation mark, the address. The name goes between apostrophes if it contains a space or a sign.

```
=%sheet%2!B2*2
='Marks 2'!B2
=SUM('Marks 2'!B2:B6)
```

The reference is typed: switching tabs while entering a formula abandons the entry.

For a range to be read from all sheets by a name, [name it](noms.html) with the **%workbook%** scope.

=== nombres
# Number formats

> A format changes how a number is displayed, not its value: calculations keep all the decimals.

## Choosing a format {#choisir}

**%format% › %fNumber%**, or the **%fGeneral%** list of the toolbar.

| Format | Example |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`, aligned left; the entry stays a text |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`; 0.25 becomes `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**, **%fTime%**, **%fDateTime%** | for dates: `%xDate%`, `3:00 PM`, `15:00`… |

The currency symbol is that of the interface's language.

| Button | Effect |
| --- | --- |
| {percentage-format} | percentage |
| {number-decrease} | one decimal less |
| {number-increase} | one decimal more |

These buttons also apply to the numbers of a [list](listes.html). To round the value itself, use `@ROUND`.

## Custom format {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**: choose a suggested format, or write a code. The preview shows the result; **%guide%** recalls the signs; **%apply%** gives it to the selection.

![The custom number formats window](format-personnalise.webp 1280x760)

| Sign | Role | Code | 1234.5 is displayed |
| --- | --- | --- | --- |
| `0` | a digit, zeros included | `c:0.00` | `n:1234.50` |
| `#` | a digit if it is useful | `c:#.##` | `n:1234.5` |
| `c:,` | groups thousands | `c:#,##0` | `n:1,235` |
| `%` | percentage | `0%` | `123450%` |
| `"text"` | a text, a unit | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | scientific notation | `c:0.00E+00` | `n:1.23E+03` |
| `;` | formats for positive, negative, zero, text | `0;-0;"none"` | `1235` |
| `[Red]` | color | `0;[Red]-0` | negative numbers in red |

The code is typed with the separators of the language; the window shows the form in which it is saved (`#,##0.00`), the same as Excel's.

### Dates and times {#dates-heures}

| Code | 29 August 2026, 2:30 PM |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

### Units {#unites}

Under **%units%**, formats such as `c:0.00 "V"`, `c:0.00 "Ω"`, `c:0.00 "mm"`: the cell remains a number, which can be calculated with.

=== mise-en-forme
# Formatting

## Text {#texte}

| Command | Access |
| --- | --- |
| bold, italic, underlined | {bold} {italic} {underline}; [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] |
| font | **Arial** list: thirteen fonts |
| size | **10** list, or **%formatMenu% › %fontSize%**: 9 to 72 |
| text color, fill color | {font-color} {background} |
| clear the formatting | {clear-format}, **%formatMenu% › %clearFormat%** |

In a color palette, **%resetColor%** removes it; **%customColor%** opens the system's color picker.

While a cell is being edited, the formatting applies to the selected part of the text.

## Alignment {#alignement}

| Command | Choices |
| --- | --- |
| {align-left} horizontal | left, center, right |
| {align-top} vertical | top, middle, bottom |
| {text-rotation-none} rotation | tilted, vertical, stacked |
| {text-overflow} wrapping | **%wrapOverflow%**: over the empty cells nearby; **%wrap%**: on several lines; **%wrapClip%**: cut at the border |

With no alignment chosen, numbers and dates are on the right, the rest on the left.

## Borders {#bordures}

{border-all} draws the chosen border; its arrow gives the sides (top, outside, inside, all, none, diagonal), the **color** and the **style** of the line. Choose color and style before the side.

## Merging {#fusion}

{merge-all} or **%formatMenu% › %mergeCells%**:

| Command | Effect |
| --- | --- |
| **%mergeAll%** | a single cell, which keeps a single content |
| **%mergeVertical%** | one cell per column |
| **%mergeHorizontal%** | one cell per row |
| **%unmerge%** | gives the cells back |

A range that contains merged cells cannot be sorted or filtered.

## Alternating colors {#alternees}

{alternating} or **%formatMenu% › %alternatingColors%** colors every other row of the selected range, with a header row if wanted. The three colors can be chosen.

![The alternating colors window](couleurs-alternees.webp 1280x760)

They are ordinary fill colors: they do not follow a sort or an inserted row. **%clearAlternating%** removes them from the range.

## Gridlines {#quadrillage}

{gridlines} or **%view% › %show% › %gridlines%** hides or shows the gray lines, in all the sheets of the workbook. [Printing](impression.html) has its own setting.

For a color that depends on the value, see [Conditional formatting](conditionnelle.html).

=== conditionnelle
# Conditional formatting

> A rule changes the look of the cells of a range that meet a condition. It follows the values, typed or calculated.

## Creating a rule {#creer}

1. Select the range, without its header.
2. {conditional} or **%format% › %conditionalFormatting%**.
3. Choose the condition, the value to compare with, the colors or the style.
4. **%cfAdd%**.

![The conditional formatting window, with one rule applied](conditionnelle.webp 1280x760)

| Condition | The cell |
| --- | --- |
| `<` | is less than |
| `>` | is greater than |
| `=` | is equal to |
| `!=` | is different from |
| `[]` | is between two values, bounds included |
| `abc` | contains a text, upper or lower case |

## What to compare with {#comparer}

| %cfCompareTo% | Example |
| --- | --- |
| **%cfValue%** | marks below 10 |
| **%cfCell%** | marks below the threshold written in `F1` |
| **%cfColumn%** | in column C, values above those of column B, row by row |

## Look {#apparence}

**%cfText%** and **%cfBackground%** choose the colors, **%cfNone%** removes them; **B**, *I*, **U** make the text bold, italic, underlined. At least one color or style is needed.

## Several rules {#regles}

The column on the left lists the rules of the sheet: **%cfEdit%**, **%cfDelete%**. If several rules apply to a cell, the last one in the list prevails, color by color.

warn: In a range covered by a rule, the text and fill colors given directly to the cells are no longer displayed.

Rules are saved in the Excel file as Excel conditional formatting.

=== lignes-colonnes
# Rows and columns

## Size {#taille}

| Action | Effect |
| --- | --- |
| drag the right border of a column header | changes its width |
| drag the bottom border of a row header | changes its height |
| right-click on the header › **%width%**, **%height%** | size in pixels, for all the selected columns or rows |

## Inserting, deleting {#inserer}

Right-click in a cell or on a header: **%rowAbove%**, **%rowBelow%**, **%columnLeft%**, **%columnRight%**. The number is typed in the field. Right-click on a header: **%deleteRow%**, **%deleteColumn%**.

![The right-click menu](menu-contextuel.webp 760x650)

Formulas are adjusted: their references follow the moved cells. The limit is 10,000 rows and 1,000 columns.

## Hiding {#masquer}

Right-click on the header › **%hideRow%**, **%hideColumn%**. Hidden cells are still calculated. To show them again, select the headers around them, then right-click › **%showHidden%**.

## Freezing {#figer}

Frozen rows and columns stay visible when scrolling. Select the limit cell, then {freeze-row-col} or **%view% › %freeze%**:

| Command | Stay visible |
| --- | --- |
| **%freezeRow%** | the rows up to that of the cell, included |
| **%freezeColumn%** | the columns up to that of the cell, included |
| **%freezeCell%** | both |
| **%freezeCancel%** | nothing in particular |

To keep the header row: click a cell of row 1, **%freezeRow%**.

=== tri-filtre
# Sorting, filtering, finding

## Sorting {#trier}

| Command | Effect |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**, **%sortDescending%** | sorts the selection by its first column; also with {filter} and the right-click menu |
| right-click › **%sortRange%** | chooses the sort column, the order, and whether the first row is a header |

![The window that sorts a range](tri.webp 1280x760)

Select the whole table, not a single column: rows must stay whole. A range that contains merged cells cannot be sorted.

## Filtering {#filtrer}

1. Select the table, header included.
2. **%data% › %sortAndFilter% › %createFilter%**, or {filter}, or right-click › **%filterRange%**.
3. Click the arrow of a column.

![The filter of a column](filtre.webp 1280x760)

| In the menu of a column | Effect |
| --- | --- |
| **%sortByAsc%**, **%sortByDesc%** | sorts the rows of the table |
| **%filterByColor%** | by fill color or text color |
| **%filterByValues%** | check the values to keep; **%filterAll%**, **%filterNone%**, **%filterInverse%**; the field looks for a value |
| **%filterConfirm%** | applies |
| **%clearFilter%** | removes the filter from the table |

Rows left out are hidden, not deleted. The filters of several columns add up. **%data% › %sortAndFilter% › %clearFilter%** removes the filter.

## Finding, replacing {#rechercher}

[[Ctrl+F]] opens **%find%**, [[Ctrl+H]] **%replace%**.

![The search](rechercher.webp 1280x660)

| Option | Effect |
| --- | --- |
| **%regex%** | the text searched for is a regular expression: `^A` finds what starts with A |
| **%wholeWord%** | the whole cell is equal to the text |
| **%matchCase%** | distinguishes uppercase and lowercase |
| **%findAll%** | lists the cells found; clicking a line goes there |
| **%findNext%** | goes to the next one |
| **%replaceOne%**, **%replaceAll%** | one cell, all of them |

The search covers the displayed sheet.

=== controles
# Checkboxes, lists and calendar

![Checkboxes, a drop-down list and the calendar of a date](controles.webp 1280x560)

## Checkboxes {#cases}

Select the cells, **%insert% › %checkbox%**. A click checks or unchecks; the cell is TRUE or FALSE.

```
=IF(B2, "done", "to do")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

The second formula adds up the values of column C whose box is checked; the third counts the checked boxes.

## Drop-down lists {#listes}

Select the cells, **%insert% › %dropdown%**.

| Source | Content |
| --- | --- |
| **%listValues%** | the options, one per field; **%addOption%**; no comma |
| **%listRange%** | a range whose cells are the options: `%sheet%2!$A$1:$A$10` |

A range without `$` shifts from one cell to the next, like a filled formula. If its cells change, the options follow.

The cell shows an arrow; a click opens the options. A value other than those of the list is not accepted.

## Calendar {#calendrier}

A double click on a date cell opens a calendar: choose a day, change month with **<** and **>**, **%today%** for today's date. It opens on any cell with a date format, even empty, unless it contains a formula or is [locked](protection.html).

tip: For a column of dates to be filled in with the calendar: select it and give it the **%fDate%** format.

## Removing {#retirer}

[[Delete]] removes the checkbox or the list from the cell, with its value.

Checkboxes and lists are saved in the Excel file; the checkboxes are Excel checkboxes there.

=== graphiques
# Charts and sparklines

## Creating a chart {#creer}

1. Select the data.
2. {chart} or **%insert% › %chart%**.
3. Choose the type and the options; the preview follows.
4. **%chartAdd%**, then **%chartClose%**.

![The charts window](graphique.webp 1280x900)

| Selection | Understood as |
| --- | --- |
| a column or a row of numbers | the data |
| two columns | labels in the first, data in the second |
| two rows | labels in the first, data in the second |
| two separate columns, chosen with [[Ctrl]] | the same |

A chart shows one series: a row or a column of data. Cells without a number, such as a header, are ignored.

## Types {#types}

| Type | For | Labels |
| --- | --- | --- |
| **%tBar%** | comparing | under the bars |
| **%tLine%** | an evolution | on the x-axis |
| **%tScatter%** | a relation between two quantities | they are the x-values, if they are numbers; otherwise 1, 2, 3… |
| **%tPie%** | shares; positive values | in the legend or on the slices |

Up to 120 values, 24 for a pie.

![The four types of charts](graphiques.webp 1280x640)

## Options {#options}

| Field | Content |
| --- | --- |
| **%chartTitle%** | required; shown at the top of the chart |
| **%chartColor%** | picker or code `#4F81BD`; slices have their own colors |
| **%chartRange%** | the range: `B2:B6` |
| **%chartLabels%** | **%lNone%**; **%lColumn%** (`A`); **%lRow%** (`1`); **%lRange%**, of the same size as the data |
| **%chartOptions%** | values, legend, x-axis, y-axis, grid |

## Moving, editing {#modifier}

- Dragging the title strip moves the chart; dragging its bottom right corner resizes it.
- **%chartEdit%** reopens the window, **%chartDelete%** deletes it. The window also lists all the charts of the sheet.
- The chart follows the data of its cells.

Charts are saved in the Excel file as real charts, and read back by DocCells. They are not [printed](impression.html) with the sheet.

## Sparklines {#sparklines}

The `SPARKLINE` function draws a miniature chart in the cell.

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![Line and column sparklines](sparklines.webp 900x300)

Options are written between braces: the name, a backslash, the value; the separator of arguments between two options.

| `charttype` | Drawing | Own options |
| --- | --- | --- |
| `"line"` (default) | line | `color`, `linewidth`, `xmin`, `xmax`, `ymin`, `ymax` |
| `"bar"` | stacked bars | `max`, `color1`, `color2` |
| `"column"` | columns | `color`, `negcolor`, `lowcolor`, `highcolor`, `firstcolor`, `lastcolor`, `axis`, `axiscolor`, `ymin`, `ymax` |
| `"winloss"` | wins and losses | the same, without `ymin` and `ymax` |

Common options: `empty` (`"zero"` or `"ignore"`), `nan` (`"convert"` or `"ignore"`), `rtl` (right to left). The [SPARKLINE documentation](../../sparkline/en.html) gives all the values, with examples.

For a larger drawing, enlarge the row and the column, or merge cells.

=== images-liens
# Images and links

## Images {#images}

{image} or **%insert% › %image%** inserts an image from the computer at the place of the selection.

| Action | Effect |
| --- | --- |
| drag the image | moves it |
| drag a handle | resizes it |
| [[Delete]], the image being selected | deletes it |

Images are saved in the Excel file, in their place.

## Links {#liens}

Select a cell, right-click › **%link%**.

| %linkType% | Address |
| --- | --- |
| web page (**%linkWeb%**) | `https://…` |
| range of cells (**%linkCells%**) | `%sheet%1!A1:C8` |
| **%linkSheet%** | a sheet of the workbook |

The **%linkText%** becomes the content of the cell, blue and underlined. When the cell is selected, **%linkOpen%** appears under it.

warn: Links are not saved in the Excel file: only their text is.

=== impression
# Printing

**%file% › %print%** or [[Ctrl+P]] shows the pages as they will be printed.

![The print preview](imprimer.webp 1280x760)

| Setting | Choices |
| --- | --- |
| **%printContent%** | the current sheet, or the cells selected before opening the window |
| **%printPaper%** | A4, Letter |
| **%printOrientation%** | portrait, landscape |
| **%printScale%** | **%printActual%**; **%printWidth%**: all the columns on one page width; **%printPage%** |
| **%printMargins%** | normal, narrow, wide |
| **%printFormatting%** | gridlines, row and column headers, fill colors |

**%printButton%** opens the browser's window, where the printer or saving as PDF is chosen.

- Only the cells are printed, with their formatting: no charts, images or sparklines.
- Hidden rows and columns are not printed.
- A checkbox is printed as TRUE or FALSE.
- One sheet is printed at a time.

tip: To print with the charts, save the workbook and open it in Excel or LibreOffice.

=== protection
# Protecting

> A protected workbook can only be changed in its unlocked cells: this is how to prepare a worksheet.

## Preparing a sheet for students {#preparer}

1. Select the cells to be filled in, right-click › **%unlock%**.
2. {protect} or **%tools% › %protectWorkbook%**.
3. Save, then [share the file or its link](partager.html).

All cells are locked at first; locking only has an effect in a protected workbook. **%lock%** reverts it.

## What protection blocks {#effets}

| In a protected workbook | Locked cell | Unlocked cell |
| --- | --- | --- |
| typing, deleting | no | yes |
| calendar of a date | no | yes |
| widths and heights | no | no |
| alternating colors, inserting checkboxes and lists, filling by menu | no | no |
| formatting, inserting rows and columns, charts | yes | yes |

Protection covers all the sheets. It is saved in the Excel file, with the unlocked cells, and read back by DocCells and Excel.

## Student mode {#eleve}

`?mode=student` in the address opens DocCells without the {protect} button or the **%unlock%** and **%defineName%** commands; **%protectWorkbook%** is grayed out. The student cannot remove the protection.

```
https://…/doccells/?mode=student&url=https://…/exercise.xlsx
```

note: This is a protection of use, without a password: anyone who opens the file in another spreadsheet, or without `mode=student`, can remove it.

=== partager
# Sharing and embedding

## A workbook by a link {#url}

`?url=` followed by the address of an online `.xlsx` file opens it in DocCells.

```
https://…/doccells/?url=https://example.org/marks.xlsx
```

The site that hosts the file must allow other sites to read it (CORS header); a file placed next to DocCells, on the same site, has no such constraint. Everyone opens their own copy: changes do not go back to the original file.

## A Google Sheet {#google}

The address of a Google Sheet works too.

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- Share it with “Anyone with the link”.
- DocCells reads a copy in Excel format each time it is opened: the Google document is not changed.
- The site that hosts DocCells must run PHP; 25 MB at most.

## Address options {#options}

| Option | Effect |
| --- | --- |
| `url=…` | opens a workbook or a Google Sheet |
| `mode=student` | [student mode](protection.html#eleve) |
| `lang=en` | sets the language: `de`, `el`, `en`, `es`, `fr`, `hi`, `it`, `nl`, `pt`, `ru`, `zh-CN`, `zh-TW` |

Options follow one another, separated by `&`: `?lang=en&mode=student&url=…`. The first one comes after `?`.

## In a web page {#integrer}

```
<iframe src="https://…/doccells/?url=https://example.org/marks.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

In a frame, DocCells has no menus, no buttons to open and save, no recovery copy: it shows the toolbar, the formula bar and the sheet.

## By program {#programme}

A page can drive DocCells: load a workbook, read and write cells, follow their values. The `embed` option opens this mode; it is described, for developers, in the [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) file of the project (in French).

=== docgeo
# With DocGeo

> DocGeo, the dynamic geometry software of DocTools, contains DocCells: a sheet next to a figure, each reading the other.

In DocGeo, **%file% › %gView% › %gSheetView%** adds a sheet next to the figure; **%file% › %gTab% › %gSheetTab%** makes a tab of it.

## The GEO function {#geo}

In a cell, `GEO` reads the value of an object of the figure, given by its name in quotation marks.

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'Figure 1'!c")
```

- The cell follows the figure while it is being manipulated.
- A point is read as the [list](listes.html) of its coordinates: `=GEO("A")*2` is a point too.
- While typing a formula, a click on an object of the figure writes `GEO` and its name in it.
- An unknown object gives `#N/A`. Outside DocGeo, `GEO` always gives `#N/A`.
- `GEO` has the same name in all languages.

## The figure reads the cells {#figure}

In a DocGeo formula, `!B3` is a cell, `!B2:B21` a range.

## Differences with DocCells alone {#differences}

| In DocGeo | |
| --- | --- |
| Menus and buttons | in DocGeo's bars, when the sheet is active |
| File | DocGeo's: the sheet is saved in the `.dgo`, lists and links included |
| Sheets | one per view; several spreadsheet tabs read one another |
| Undo | [[Ctrl+Z]] in the cells only undoes the cells |

The [spreadsheet page](https://doctools.org/apps/docgeo/tutorials/en/tableur.html) of the DocGeo manual gives the details.

=== fonctions
# Functions

> The %functions% functions computed by DocCells, by field, with an example of each.

- To search: typing a function's name in the field at the top of the page ([[/]]) leads to its row.
- Arguments are separated by commas; arguments between square brackets `[ ]` are optional.
- `@TRUE()` and `@FALSE()` are written with their parentheses; 1 and 0 can also be written.
- A “range” argument can be a [list](listes.html): `=AVERAGE([12, 15, 8])`.
- See also [Formulas](formules.html): operators, references, errors.

## The cells of the examples {#exemples}

The examples read this sheet:

%%sample%%

%%functions%%

## Functions not computed {#non-calculees}

The completion and the library of DocCells also name functions that are not computed: they give `#NAME?` or `#ERROR!`. The same goes for recent Excel functions.

| Not computed | Instead |
| --- | --- |
| `TEXT`, `FIXED`, `DOLLAR` | a [number format](nombres.html) in the cell |
| `XLOOKUP`, `OFFSET`, `INDIRECT`, `ADDRESS` | `INDEX` and `MATCH`, `VLOOKUP`, `CHOOSE` |
| `FILTER`, `SORT`, `SEQUENCE`, `LET`, `LAMBDA` | [sort and filter](tri-filtre.html); [fill](selection.html#recopier) a formula |
| `MAXIFS`, `MINIFS`, `TEXTJOIN` | a filter; the `&` operator |
| `MMULT`, `MDETERM`, `MINVERSE` | `SUMPRODUCT`, one formula per element |
| `HYPERLINK` | [insert a link](images-liens.html#liens) |
| Excel names with a dot: `RANK.EQ`, `VAR.S`, `NORM.DIST`… | the name without the dot or the old name: `RANK`, `VAR`, `NORMDIST` |
| database functions (`DSUM`…), coupons and securities (`PRICE`, `COUPNUM`…), `ISBLANK`, `CELL`, `ISFORMULA` | `SUMIFS`; `=A1=""` for an empty cell |

=== raccourcis
# Shortcuts and gestures

## File {#fichier}

| Keys | Effect |
| --- | --- |
| [[Ctrl+O]] | open |
| [[Ctrl+S]] | save; download, in Firefox and Safari |
| [[Ctrl+P]] | print |

## Editing {#edition}

| Keys | Effect |
| --- | --- |
| [[Ctrl+Z]]; [[Ctrl+Y]], [[Ctrl+Shift+Z]] | undo; redo |
| [[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] | copy, cut, paste |
| [[Ctrl+D]]; [[Ctrl+R]] | fill down; right |
| [[Delete]], [[⌫]] | empty the cells |
| [[Ctrl+F]]; [[Ctrl+H]] | find; replace |

## Formatting {#mise-en-forme}

| Keys | Effect |
| --- | --- |
| [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] | bold, italic, underlined |

## Moving, selecting {#se-deplacer-selectionner}

| Keys | Effect |
| --- | --- |
| arrow keys | neighboring cell |
| [[Tab]], [[Shift+Tab]] | next, previous cell |
| [[Shift]] and an arrow key | extend the selection |
| [[Shift]] and click | select up to the cell |
| [[Ctrl]] and click | add to the selection |
| [[Ctrl+A]] | the whole sheet |

## Entry {#saisie}

| Keys | Effect |
| --- | --- |
| [[F2]], [[Enter]], double click | edit the cell |
| [[Enter]] | confirm, move down |
| [[Esc]] | abandon |
| [[Alt+Enter]] | new line in the cell |
| [[↑]] [[↓]], [[Enter]], [[Tab]] | browse, choose a suggested function |
| click or drag on the sheet | insert a reference in the formula |

## Mouse {#souris}

| Gesture | Effect |
| --- | --- |
| drag the blue handle | [fill](selection.html#recopier) |
| drag the border of the selection | [move](selection.html#deplacer) |
| drag the border of a header | [change a width, a height](lignes-colonnes.html#taille) |
| right-click | menu of the cell, the header, the tab |
| double click on a date | [calendar](controles.html#calendrier) |
| double click on a tab | rename the sheet |
| drag a tab | move the sheet |
| drop an `.xlsx` file | open it |

=== excel
# Excel compatibility

> DocCells reads and writes the Excel `.xlsx` format. The following is kept, both ways.

## What is kept {#conserve}

| Item | Remark |
| --- | --- |
| values, texts, dates, formulas | formulas are displayed in DocCells' language |
| [number formats](nombres.html) | including custom ones |
| font, colors, alignment, rotation, wrapping | |
| borders, merged cells | |
| widths, heights, hidden rows and columns | |
| [frozen rows and columns](lignes-colonnes.html#figer), gridlines | |
| several sheets | |
| [named ranges](noms.html) | |
| [conditional formatting](conditionnelle.html) | DocCells' rules, Excel's simple rules (comparison, text contained) |
| [checkboxes, drop-down lists](controles.html) | |
| [charts](graphiques.html) | written as Excel charts; DocCells' are read back |
| [images](images-liens.html) | |
| [filters](tri-filtre.html#filtrer) | |
| [protection](protection.html), unlocked cells | |

## What is not {#perdu}

| Item | Becomes |
| --- | --- |
| [links](images-liens.html#liens) | their text |
| [lists](listes.html) in cells | a text, `n:[2, 1]` |
| sparklines of DocCells or Google Sheets | a `SPARKLINE` formula, read back by DocCells; unknown to Excel |
| charts created in Excel | not kept |
| pivot tables, macros, slicers, comments | not kept |
| conditional formatting with color scales, bars, icons | not kept |

tip: Before replacing a complex Excel workbook, save it from DocCells under another name (**%saveAs%**).

## Lists {#listes}

A list reopened from an `.xlsx` is a text: typing it again makes it a list. A list calculated by a formula is a list again when the formula is recalculated.

## Formulas {#formules}

On opening, a formula generally keeps the result saved by Excel until one of its cells changes. A function [not computed by DocCells](fonctions.html#non-calculees) then gives `#NAME?` or `#ERROR!`.

## Other formats {#formats}

| Format | How |
| --- | --- |
| `.csv` | open the file in a text editor, copy, paste in DocCells if the values are separated by tabs; otherwise, convert it to `.xlsx` |
| `.ods`, `.xls` | save them as `.xlsx` with LibreOffice or Excel |
| Google Sheets | [by its link](partager.html#google), or downloaded as `.xlsx` |
| PDF | [print](impression.html), “Save as PDF” |

=== faq
# FAQ

## Entry {#saisie}

### A date I typed is not recognized

`11/25/2026` is a text for DocCells. Type `2026-11-25`, then choose the **%fDate%** format ([dates](saisie.html#dates)).

### A number appears instead of a date

Dates are numbers of days: give the cells the **%fDate%** format (**%format% › %number%**).

### My numbers do not add up

Aligned left, they are texts. A unit typed in the cell, or a decimal comma, makes it a text ([types](saisie.html#types)).

### The zero at the beginning of a number disappears

Give the **%fText%** format before typing, or start with an apostrophe ([texts](saisie.html#textes)).

### Numbers expect a comma instead of a point

DocCells follows the browser's language. `?lang=en` sets it ([language](demarrage.html#langue)).

## Formulas {#formules}

### `#NAME?` with TRUE or FALSE

Write `@TRUE()` and `@FALSE()`, or 1 and 0 ([conditions](formules.html#conditions)).

### `#NAME?` with a function suggested by DocCells

Not all suggested functions are computed ([functions not computed](fonctions.html#non-calculees)).

### IFERROR lets DIV/0 through

Test the divisor: `=IF(B2, A2/B2, "")` ([errors](formules.html#erreurs)).

### Pasting does not keep my formulas

**%paste%** of the right-click menu pastes the values; [[Ctrl+V]] pastes the formulas ([copying](selection.html#copier)).

### Writing the name of a month or formatting a number inside a text

The `TEXT` function is not computed: give a [format](nombres.html) to a separate cell.

### Counting the checked boxes

`=SUMPRODUCT(B2:B6, B2:B6)` ([checkboxes](controles.html#cases)).

### TODAY()+1 gives #VALUE!

Put `=TODAY()` in a cell and add to that cell ([dates](formules.html#dates)).

## Presentation {#presentation}

### The color of a cell does not change

The cell is in the range of a [conditional formatting](conditionnelle.html#regles) rule.

### A button has disappeared

The window is narrow: it is behind {more}.

### Sorting or filtering is refused

The range contains merged cells: unmerge them.

## Files {#fichiers}

### Saving downloads a new file

This is the case in Firefox and Safari. Chrome and Edge write to the file ([saving](demarrage.html#enregistrer)).

### The page closed without saving

Open DocCells again in the same browser: it offers to restore the copy ([recovering](demarrage.html#recuperer)).

### My chart is not printed

Printing only shows the cells ([printing](impression.html)).

### A `?url=` link does not open my workbook

The file's site may refuse to be read by other sites. A Google Sheet must be shared by link ([sharing](partager.html)).

### My links have disappeared

They are not saved in the Excel format ([what is not kept](excel.html#perdu)).

## Students {#eleves}

### Can a student change the formulas?

Not in a protected workbook, outside the unlocked cells ([protecting](protection.html)). Adding `mode=student` to the link removes the means of lifting the protection.
