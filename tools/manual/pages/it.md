=== groups | Primi passi | Immettere e calcolare | Presentare | Sfruttare i dati | Diffondere | Riferimento

=== categories | Funzione | Descrizione ed esempio | Matematica | Trigonometria | Logica | Statistica | Distribuzioni di probabilità e test | Ricerca ed elenchi | Testo | Date e ore | Finanza | Basi di numerazione, unità, funzioni speciali | Numeri complessi come testo | Informazioni

=== index | Pagina iniziale
# Manuale d’uso di DocCells

> DocCells è un foglio di calcolo multilingue che si usa nel browser, senza installazione né account. Apre e salva le cartelle di lavoro Excel (.xlsx).

<div class="buttons"><a href="../../index.html?lang=it">Apri DocCells</a></div>

![La finestra di DocCells: menu, pulsanti, barra della formula, una tabella di voti formattata e un grafico](interface.webp 1280x760)

## L’essenziale in sei gesti

| Per | Fare |
| --- | --- |
| Immettere | fare clic su una cella, scrivere, [[Enter]] ([immettere dati](saisie.html)) |
| Calcolare | scrivere `=` e la formula: `=AVERAGE(B2:B6)` ([le formule](formules.html)) |
| Copiare una formula | trascinare il quadratino blu della selezione, o [[Ctrl+D]] ([riempire](selection.html#recopier)) |
| Formattare | menu **%format%**, o i pulsanti ([formattazione](mise-en-forme.html)) |
| Tracciare un grafico | selezionare i dati, {chart} ([grafici](graphiques.html)) |
| Salvare | [[Ctrl+S]]: un file Excel ([aprire e salvare](demarrage.html)) |

## Indice {#sommaire}

- [Aprire e salvare](demarrage.html): file, recenti, recupero, Google Sheets, lingua.
- [L’interfaccia](interface.html): menu, pulsanti, barra della formula, schede, zoom.
- [Immettere dati](saisie.html), [selezionare, copiare, riempire](selection.html).
- [Le formule](formules.html), [elenchi e complessi](listes.html), [intervalli denominati](noms.html), [i fogli](feuilles.html).
- [Formati numerici](nombres.html), [formattazione](mise-en-forme.html), [formattazione condizionale](conditionnelle.html), [righe e colonne](lignes-colonnes.html).
- [Ordinare, filtrare, cercare](tri-filtre.html), [caselle, elenchi e calendario](controles.html), [grafici e sparkline](graphiques.html), [immagini e link](images-liens.html), [stampare](impression.html).
- [Proteggere](protection.html) una cartella per gli studenti, [condividerla e incorporarla](partager.html), usarla [con DocGeo](docgeo.html).
- Riferimento: [le %functions% funzioni](fonctions.html), [scorciatoie](raccourcis.html), [compatibilità con Excel](excel.html), [domande frequenti](faq.html).

## Convenzioni

- I pulsanti sono indicati dalla loro icona ({bold} grassetto).
- [[Ctrl]] equivale a [[⌘]] su Mac.
- Le formule sono scritte in italiano: nomi di funzione italiani, virgola decimale, punto e virgola tra gli argomenti. DocCells le mostra nella lingua dell’interfaccia.
- Cercare nel manuale: [[/]] o [[Ctrl+K]]. Le parole si scrivono in qualsiasi ordine e senza accenti; il nome di una funzione, italiano o inglese, porta alla sua riga.

=== demarrage
# Aprire e salvare

## Iniziare {#nouveau}

DocCells si apre con una cartella vuota di un foglio. Per ripartire da una cartella vuota, ricaricare la pagina o aprire DocCells in un’altra scheda del browser.

## Aprire una cartella {#ouvrir}

| Modo | Effetto |
| --- | --- |
| {open}, **%file% › %open%**, [[Ctrl+O]] | scegliere un file `.xlsx` del computer |
| Trascinare il file sulla pagina | un velo indica dove rilasciarlo; la cartella sostituisce quella aperta |
| **%file% › %openRecent%** | gli ultimi dieci file aperti o salvati (Chrome e Edge) |
| Un link `?url=…` | una cartella in rete o un Google Sheet ([condividere](partager.html#url)) |

L’unico formato letto è Excel `.xlsx`. I vecchi `.xls`, gli `.ods` e i `.csv` vanno prima convertiti. Ciò che si conserva di un file Excel è descritto in [Compatibilità con Excel](excel.html).

warn: Aprire una cartella sostituisce quella mostrata: salvare prima le modifiche.

### File recenti {#recents}

Il browser può chiedere di nuovo il permesso di leggere il file. Un file spostato, rinominato o eliminato viene tolto dall’elenco. **%clearRecentFiles%** lo svuota. L’elenco resta in questo browser, su questo computer.

## Salvare {#enregistrer}

### Chrome e Edge

| Comando | Effetto |
| --- | --- |
| {save}, **%file% › %save%**, [[Ctrl+S]] | la prima volta chiede dove mettere il file; poi lo sostituisce senza chiedere |
| **%file% › %saveAs%** | scegliere un altro file |

Un file aperto con {open}, dai recenti o rilasciato sulla pagina viene salvato al suo posto; il browser chiede una volta il permesso di modificarlo.

Il nome della cartella è in fondo alla barra dei menu. Un punto rosso indica modifiche non salvate; il titolo della scheda del browser comincia allora con ●.

### Firefox, Safari

Questi browser non permettono di scrivere in un file. **%file% › %export%** o [[Ctrl+S]] scarica la cartella, con il nome di quella aperta.

## Recuperare una cartella non salvata {#recuperer}

Finché ci sono modifiche non salvate, DocCells ne tiene una copia nel browser, aggiornata meno di un secondo dopo ogni modifica. Se la pagina si chiude senza salvare, alla successiva apertura DocCells propone, con la data della copia, di ripristinarla (**%restore%**) o no (**%ignore%**).

- Salvare, esportare o aprire un’altra cartella cancella questa copia.
- Ignorare la copia la elimina definitivamente.
- La copia si fa solo quando DocCells occupa tutta la pagina, non quando è incorporato in un’altra.

## Lingua {#langue}

DocCells prende la lingua del browser tra le dodici della sua interfaccia: cinese semplificato e tradizionale, francese, greco, hindi, inglese, italiano, olandese, portoghese, russo, spagnolo, tedesco. Per le altre vale l’inglese. `?lang=it` nell’indirizzo impone una lingua.

La lingua cambia i menu, i nomi delle funzioni, il separatore decimale, il simbolo di valuta e l’ordine delle date mostrate. Il file salvato non ne dipende: una cartella scritta in francese si apre in tedesco con le formule in tedesco.

=== interface
# L’interfaccia

![La finestra di DocCells](interface.webp 1280x760)

Dall’alto in basso: la barra dei menu, la barra dei pulsanti, la barra della formula, il foglio, le schede dei fogli e lo zoom.

## I menu {#menus}

| Menu | Contenuto |
| --- | --- |
| **%file%** | [aprire, salvare](demarrage.html), [stampare](impression.html) |
| **%edit%** | annullare, ripetere, [riempire in basso, a destra](selection.html#recopier) |
| **%view%** | [griglia](mise-en-forme.html#quadrillage), [bloccare](lignes-colonnes.html#figer) |
| **%insert%** | [immagine](images-liens.html), [grafico](graphiques.html), [casella di controllo, elenco a discesa](controles.html) |
| **%format%** | [numero](nombres.html), [testo, allineamento, unione](mise-en-forme.html), [colori alternati](mise-en-forme.html#alternees), [formattazione condizionale](conditionnelle.html) |
| **%data%** | [ordinare e filtrare](tri-filtre.html) |
| **%tools%** | [proteggere](protection.html), questo manuale (**%manual%**), DocTools, codice sorgente, versione (**%about%**) |

Un segno di spunta indica un’opzione attiva: griglia visibile, celle bloccate, grassetto, filtro, cartella protetta.

![Il menu del formato e i formati numerici](menus.webp 1280x620)

## La barra dei pulsanti {#boutons}

| Pulsante | Funzione |
| --- | --- |
| {open} {save} | [aprire, salvare](demarrage.html) |
| {gridlines} | mostrare o nascondere la [griglia](mise-en-forme.html#quadrillage) |
| {alternating} | [colori alternati](mise-en-forme.html#alternees) |
| {conditional} | [formattazione condizionale](conditionnelle.html) |
| {protect} | [proteggere](protection.html); azzurrato quando la cartella è protetta |
| {chart} | [inserire un grafico](graphiques.html) |
| {image} | [inserire un’immagine](images-liens.html) |
| {undo} {redo} | annullare, ripetere |
| {clear-format} | cancellare la formattazione |
| {percentage-format} {number-decrease} {number-increase} | [percentuale, meno o più decimali](nombres.html) |
| **%fGeneral%**, **Arial**, **10** | formato numerico, carattere, dimensione |
| {bold} {italic} {underline} | grassetto, corsivo, sottolineato |
| {font-color} {background} | colore del testo, dello sfondo |
| {border-all} {merge-all} | [bordi, unione](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | allineamenti, rotazione, testo a capo |
| {freeze-row-col} | [bloccare](lignes-colonnes.html#figer) |
| {formula-sum} | [somma automatica](formules.html#somme) e altre formule |
| {filter} | [ordinare e filtrare](tri-filtre.html) |

La freccetta di un pulsante apre le sue scelte; il pulsante stesso ripete l’ultima. In una finestra stretta, gli ultimi pulsanti sono dietro {more}.

## La barra della formula {#barre}

- A sinistra, la **casella del nome**: l’indirizzo della selezione, o il [nome dell’intervallo](noms.html). La sua freccia elenca gli intervalli denominati e apre la gestione dei nomi.
- A destra di *fx*, il contenuto della cella, formula compresa: si può modificare lì.

## Il foglio {#feuille}

- Il clic destro apre un menu secondo il posto: cella, intestazione di colonna o di riga, scheda del foglio.
- Il foglio iniziale ha 84 righe e 60 colonne (da A a BH). Se ne aggiungono con il clic destro, **%insertCells%** ([righe e colonne](lignes-colonnes.html)).
- Il quadratino blu all’angolo della selezione [riempie](selection.html#recopier).

## Schede e zoom {#zoom}

In basso, {plus} aggiunge un foglio, {all-sheets} li elenca tutti ([i fogli](feuilles.html)). A destra, **−** e **+** regolano lo zoom; un clic sulla percentuale propone da 10 % a 400 %.

## Annullare {#annuler}

{undo} o [[Ctrl+Z]] annulla, {redo}, [[Ctrl+Y]] o [[Ctrl+Shift+Z]] ripete: immissioni, incollature, formattazioni, inserimenti. La cronologia riparte da zero quando si apre una cartella, si mostra o nasconde la griglia, si protegge la cartella, o si aggiunge un nome o una regola di formattazione condizionale. I grafici non ne fanno parte: si [modificano o eliminano](graphiques.html#modifier) con i loro pulsanti.

=== saisie
# Immettere dati

## Scrivere in una cella {#ecrire}

| Azione | Effetto |
| --- | --- |
| scrivere su una cella selezionata | sostituisce il suo contenuto |
| doppio clic, [[F2]] o [[Enter]] | modifica il suo contenuto |
| [[Enter]] | conferma e scende di una cella |
| clic in un’altra cella | conferma |
| [[Esc]] | abbandona l’immissione |
| [[Alt+Enter]] | va a capo nella cella |
| [[Delete]] o [[⌫]] | svuota le celle selezionate, comprese caselle ed elenchi a discesa; la formattazione resta |
| clic destro › **%clearContent%** | lo stesso |

Durante un’immissione, le frecce spostano il cursore nel testo. Altrimenti le frecce, [[Tab]] e [[Shift+Tab]] cambiano cella.

## Ciò che DocCells riconosce {#types}

| Si scrive | Si ottiene |
| --- | --- |
| `12`, `-3`, `1e5` | un numero, allineato a destra |
| `n:2.5` | un numero decimale; la virgola è il separatore italiano |
| `n:1,234.5` | il numero 1234,5; per mostrare il punto delle migliaia, scegliere un [formato](nombres.html) |
| `25%`, `n:2.5%` | una percentuale |
| `2026-11-25`, `2026/11/25` | una data |
| `2026-11-25 14:30` | una data e un’ora |
| `TRUE`, `FALSE` | un valore logico |
| `n:[2, 1]` | un [elenco](listes.html) |
| `=A1+B1` | una [formula](formules.html) |
| qualsiasi altra cosa | un testo, allineato a sinistra |

### Date {#dates}

Una data si scrive con l’anno per primo: `2026-11-25`. `25/11/2026` resta un testo, con cui non si calcola. Per mostrarla all’italiana, scegliere **%format% › %number% › %fDate%** (`%xDate%`) o un [formato personalizzato](nombres.html#personnalise).

Un doppio clic su una cella di data apre un [calendario](controles.html#calendrier). `=TODAY()` dà la data di oggi.

### Testi fatti di cifre {#textes}

Un numero che comincia per zero perde quello zero: `007` diventa 7. Per conservarlo, dare prima alle celle il formato **%fText%** (**%format% › %number% › %fText%**), o cominciare con un apostrofo: `'007`.

## Errori di immissione frequenti {#erreurs}

| Si vede | Causa |
| --- | --- |
| un numero allineato a sinistra | è un testo: un punto decimale al posto della virgola, un’unità (`12 €`), uno spazio di troppo |
| `46351` invece di una data | una data in formato **%fGeneral%**: darle il formato **%fDate%** |
| il testo tagliato dalla cella vicina | allargare la [colonna](lignes-colonnes.html#taille), o scegliere **%wrap%** |

Per un’unità, immettere solo il numero e dargli un [formato](nombres.html): valuta, o personalizzato come `c:0.00 "m"`.

=== selection
# Selezionare, copiare, riempire

## Selezionare {#selectionner}

| Azione | Selezione |
| --- | --- |
| clic | una cella |
| trascinare | un intervallo |
| clic, poi [[Shift]] e clic | l’intervallo tra i due |
| [[Shift]] e freccia | estende l’intervallo |
| [[Ctrl]] e clic o trascinamento | un intervallo in più |
| clic su una lettera, un numero | una colonna, una riga |
| trascinare sulle lettere, sui numeri | più colonne, più righe |
| [[Ctrl+A]] | tutto il foglio |
| casella del nome, freccia | un [intervallo denominato](noms.html) |

L’indirizzo della selezione è nella casella del nome, a sinistra della barra della formula.

## Copiare, tagliare, incollare {#copier}

[[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]], o **%copy%** e **%paste%** del clic destro.
- **%paste%** del clic destro incolla i valori, senza le formule; [[Ctrl+V]] incolla le formule.
- Una formula incollata segue il suo nuovo posto: `=B2` copiata una riga più in basso diventa `=B3`. Il segno `$` fissa una riga o una colonna ([riferimenti](formules.html#references)).
- Una formula tagliata conserva i suoi riferimenti.
- Una tabella copiata da Excel, da Numbers, da una pagina web o da un testo separato da tabulazioni si incolla cella per cella; numeri con la virgola ed elenchi sono riconosciuti come alla tastiera.
- Non si tagliano né si incollano più intervalli insieme.

## Spostare {#deplacer}

Trascinare il bordo della selezione: le celle si spostano, con la loro formattazione.

## Riempire {#recopier}

Il quadratino blu, nell’angolo in basso a destra della selezione, si trascina in basso, in alto, a sinistra o a destra.

| Celle di partenza | Il quadratino dà |
| --- | --- |
| una formula | la formula, con i riferimenti spostati |
| due numeri, 1 e 2 | la serie: 3, 4, 5… |
| un solo numero, testo o data | lo stesso valore |
| due date | le date seguenti, con lo stesso passo |

![La serie 1, 2 proseguita con il quadratino](recopie.webp 760x300)

Senza mouse, o su un grande intervallo:

| Comando | Effetto |
| --- | --- |
| **%edit% › %fillDown%**, [[Ctrl+D]] | la prima riga dell’intervallo selezionato è copiata nelle seguenti |
| **%edit% › %fillRight%**, [[Ctrl+R]] | la prima colonna è copiata nelle seguenti |

Se è selezionata una sola riga, [[Ctrl+D]] vi copia quella sopra; se una sola colonna, [[Ctrl+R]] vi copia quella a sinistra. Questi comandi copiano sempre, senza fare serie, con formati, bordi, caselle ed elenchi a discesa.

tip: Per una formula in tutta una colonna: scriverla in alto, selezionare da quella cella all’ultima, [[Ctrl+D]].

=== formules
# Le formule

## Scrivere una formula {#ecrire}

Una formula comincia con `=`. Contiene numeri, testi tra virgolette, riferimenti a celle, operatori e [funzioni](fonctions.html).

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="Totale: "&SUM(B2:B6)
```

La cella mostra il risultato, la barra della formula la formula. Le celle che dipendono da una cella modificata sono ricalcolate subito.

In italiano, la virgola è decimale e il punto e virgola separa gli argomenti: `=ROUND(3.14159, 2)`. I nomi delle funzioni si scrivono in minuscolo o maiuscolo, in italiano o in inglese: `=somma(B2:B6)` e `r:=SUM(B2:B6)` sono accettati.

## Indicare le celle con il mouse {#souris}

Mentre si scrive una formula, un clic su una cella del foglio inserisce il suo indirizzo, un trascinamento inserisce l’intervallo. Ogni riferimento ha il suo colore, nella formula come sul foglio.

## Il completamento {#completion}

Dalle prime lettere di un nome, DocCells propone le funzioni che le contengono: [[↑]] [[↓]] per scorrere, [[Enter]], [[Tab]] o un clic per scegliere. Dopo la parentesi aperta, un aiuto ricorda gli argomenti.

![Le funzioni proposte dopo le prime lettere](completion.webp 760x560)

![L’aiuto di una funzione](aide-formule.webp 760x560)

## La somma automatica {#somme}

{formula-sum} scrive una somma. La sua freccia propone **%sum%**, **%average%**, **%count%**, **%max%**, **%min%** e **%allFormulas%**: la libreria, dove si cerca una funzione per nome, descrizione o categoria.

![La libreria delle formule](bibliotheque.webp 1280x760)

## Operatori {#operateurs}

| Operatore | Funzione |
| --- | --- |
| `+` `-` `*` `/` | quattro operazioni |
| `^` | potenza: `=2^10` |
| `%` | percentuale: `=20%*B2` |
| `&` | unisce testi: `=A2&" "&B2` |
| `=` `<>` | uguale, diverso |
| `<` `>` `<=` `>=` | confronti |
| `( )` | priorità |

Le potenze vengono prima di prodotti e quozienti, poi le somme e i confronti. `=-2^2` dà −4 (4 in Excel).

## Riferimenti {#references}

| Scrittura | Indica |
| --- | --- |
| `B2` | una cella; segue il riempimento |
| `$B$2` | la stessa cella, anche riempita |
| `B$2`, `$B2` | riga fissa, colonna fissa |
| `B2:D6` | un intervallo |
| `B:B`, `2:2` | una colonna, una riga intera |
| `%sheet%2!B2`, `'Voti 2'!B2` | una cella di [un altro foglio](feuilles.html#references) |
| `voti` | un [intervallo denominato](noms.html) |

Riempita in basso, `=B2*$B$1` diventa `=B3*$B$1`, `=B4*$B$1`…

## Condizioni {#conditions}

```
=IF(B2>=10, "promosso", "respinto")
=IF(AND(B2>=10, C2>=10), "sì", "no")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- I valori logici si scrivono `@TRUE()` e `@FALSE()`, con le parentesi. Si mostrano come TRUE e FALSE.
- Un criterio è un testo: `">10"`, `"<>0"`, `"Ana"`. I caratteri jolly `*` e `?` non sono riconosciuti.
- Una cella vuota si riconosce con `=B2=""`; non è uguale a 0.

## Cercare in una tabella {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

La prima cerca Léa nella prima colonna della tabella e restituisce la terza; l’ultimo argomento 0 chiede il valore esatto. La seconda dà il nome di chi ha il voto migliore.

## Date e ore {#dates}

Una data è un numero di giorni, un’ora una frazione di giorno: nelle celle, si sommano e si sottraggono.

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

Una data data da `@DATE` o `@TODAY` deve passare da una cella per essere sommata: `=TODAY()+1` dà `#VALUE!`, ma se A1 contiene `=TODAY()`, `=A1+1` dà domani. Il risultato è un numero: dargli un formato **%fDate%**.

## Gli errori {#erreurs}

| Mostrato | Causa |
| --- | --- |
| `#NAME?` | nome sconosciuto: errore di battitura, funzione [non calcolata](fonctions.html#non-calculees), `@TRUE` senza parentesi, testo senza virgolette |
| `#VALUE!` | tipo inatteso: un testo dove serve un numero |
| `DIV/0` | divisione per zero o per una cella vuota |
| `#N/A` | valore non trovato (`@MATCH`, `@VLOOKUP`), o `GEO` fuori da DocGeo |
| `#REF!` | cella o foglio che non esiste |
| `#NUM!` | numero fuori dal dominio: `=SQRT(-1)` |
| `#ERROR!` | formula scritta male, o funzione non calcolata |

`@IFERROR` sostituisce l’errore di una funzione (`#N/A`, `#NUM!`): `=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "assente")`. Non sostituisce quello di un calcolo (`DIV/0`, `#VALUE!`): contro una divisione per zero, controllare il divisore, `=IF(B2, B3/B2, "")`, che vale per uno zero come per una cella vuota.

=== listes
# Elenchi e complessi

> Una cella di DocCells può contenere un elenco di numeri. Un elenco di due numeri è anche un punto del piano, o un numero complesso.

## Scrivere un elenco {#ecrire}

Tra parentesi quadre, elementi separati da punti e virgola. Un elenco può contenere elenchi.

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

Senza `=`, l’elenco è un valore; con `=`, i suoi elementi possono essere calcoli. In una lingua con il punto decimale, gli elementi si separano con virgole: `r:[2, 1]`.

## Operazioni {#operations}

| Operazione | Risultato |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`: termine a termine, lunghezze uguali |
| `n:[1, 2, 3] * 2`, `n:[2, 4, 6] / 2` | `n:[2, 4, 6]`, `n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`: prodotto di complessi |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`: quoziente di complessi |
| `n:[2, 1] + 3` | `n:[5, 1]`: 3 è un complesso reale |
| `n:[0, 1]^2` | `n:[-1, 0]`, a meno di arrotondamenti |
| `n:[8, 0]^(1/3)` | l’elenco delle tre radici cubiche |
| `n:-[2, 1]` | `n:[-2, -1]` |

Ogni altra combinazione dà `#VALUE!`: prodotto di due elenchi di tre numeri, lunghezze diverse, testo.

## Elenchi e funzioni {#fonctions}

Una funzione vede un elenco come un intervallo:

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` dà il secondo elemento dell’elenco contenuto in A1: l’ordinata di un punto, la parte immaginaria di un complesso. Alcune [funzioni](fonctions.html) restituiscono un elenco: `@FREQUENCY`, `@LINEST`, `@TRANSPOSE`, `@UNIQUE`, `@SPLIT`.

## Visualizzazione {#affichage}

I pulsanti {number-decrease} {number-increase} e i [formati numerici](nombres.html) si applicano a ogni numero dell’elenco: `n:[-0.14, 0.27]`. I valori esatti restano.

## Esempio: una successione complessa {#exemple}

L’orbita di 0 per *z* ↦ *z*² + *c*: A1 contiene *c*, A2 `n:[0, 0]`, A3 la formula seguente, riempita in basso.

```
=A2^2+$A$1
```

In [DocGeo](docgeo.html), una colonna così si disegna nella figura.

note: In un file Excel, un elenco è salvato come testo, e così il valore di una formula che dà un elenco ([compatibilità](excel.html#listes)).

=== noms
# Intervalli denominati

## Dare un nome {#definir}

1. Selezionare la cella o l’intervallo.
2. Clic destro › **%defineName%** (o la freccia della casella del nome › **%nameManager%**).
3. Scrivere il nome, scegliere l’ambito, **%nameOk%**.

![La finestra di un nuovo nome](noms.webp 1280x760)

| Campo | Contenuto |
| --- | --- |
| **%nameField%** | comincia con una lettera o `_`; lettere, cifre, `_` e `.`, senza spazio; non un indirizzo come `B2` |
| **%scope%** | **%workbook%**: letto da tutti i fogli; un foglio: letto solo da lì, dove prevale su un nome della cartella |
| **%refersTo%** | una cella o un intervallo, con il suo foglio: `'%sheet%1'!$B$2:$B$6` |

## Usare un nome {#utiliser}

```
=AVERAGE(voti)
=prezzo*(1+iva)
```

- La freccia della casella del nome elenca i nomi: sceglierne uno seleziona il suo intervallo, nel suo foglio.
- Quando la selezione è esattamente un intervallo denominato, la casella del nome mostra il suo nome.
- Un [elenco a discesa](controles.html#listes) può leggere un intervallo di celle, indicato dal suo indirizzo.

## Modificare, eliminare {#gerer}

Nella **%nameManager%**, un clic su un nome riporta i suoi campi in modifica; **%nameRemove%** lo elimina; **%nameNew%** torna a un nome vuoto. Prima di eliminare un nome, sostituire le formule che lo leggono: conservano l’ultimo valore, poi non si calcolano più.

I nomi sono salvati nel file Excel e letti da esso.

=== feuilles
# I fogli

## Aggiungere, cambiare foglio {#ajouter}

- {plus} aggiunge un foglio, chiamato «%sheet%2», «%sheet%3»…
- Un clic su una scheda la mostra; {all-sheets} elenca i fogli, compresi i nascosti, e mostra quello scelto.

## Il menu di una scheda {#menu}

Clic destro sulla scheda, o la sua freccia:

| Comando | Effetto |
| --- | --- |
| **%sheetDelete%** | dopo conferma; l’ultimo foglio visibile non si può eliminare |
| **%sheetCopy%** | duplica il foglio |
| **%sheetRename%** | o doppio clic sul nome; senza `[ ] : ? * / ' "` |
| **%sheetColor%** | colore della scheda |
| **%sheetHide%** | le formule leggono ancora il foglio; {all-sheets} lo mostra di nuovo |
| **%sheetLeft%**, **%sheetRight%** | cambia l’ordine; si può anche trascinare la scheda |

## Leggere un altro foglio {#references}

Il nome del foglio, un punto esclamativo, l’indirizzo. Il nome va tra apostrofi se contiene uno spazio o un segno.

```
=%sheet%2!B2*2
='Voti 2'!B2
=SUM('Voti 2'!B2:B6)
```

Il riferimento si scrive: cambiare scheda mentre si scrive una formula abbandona l’immissione.

Perché un intervallo sia letto da tutti i fogli con un nome, [denominarlo](noms.html) con l’ambito **%workbook%**.

=== nombres
# Formati numerici

> Un formato cambia come si mostra un numero, non il suo valore: i calcoli conservano tutti i decimali.

## Scegliere un formato {#choisir}

**%format% › %fNumber%**, o l’elenco **%fGeneral%** della barra dei pulsanti.

| Formato | Esempio |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`, allineato a sinistra; l’immissione resta un testo |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`; 0,25 diventa `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**, **%fTime%**, **%fDateTime%** | per le date: `%xDate%`, `3:00 PM`, `15:00`… |

Il simbolo di valuta è quello della lingua dell’interfaccia.

| Pulsante | Effetto |
| --- | --- |
| {percentage-format} | percentuale |
| {number-decrease} | un decimale in meno |
| {number-increase} | un decimale in più |

Questi pulsanti valgono anche per i numeri di un [elenco](listes.html). Per arrotondare il valore stesso, usare `@ROUND`.

## Formato personalizzato {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**: scegliere un formato suggerito, o scrivere un codice. L’anteprima mostra il risultato; **%guide%** ricorda i segni; **%apply%** lo dà alla selezione.

![La finestra dei formati numerici personalizzati](format-personnalise.webp 1280x760)

| Segno | Funzione | Codice | 1234,5 si mostra |
| --- | --- | --- | --- |
| `0` | una cifra, zero compreso | `c:0.00` | `n:1234.50` |
| `#` | una cifra se è utile | `c:#.##` | `n:1234.5` |
| `c:,` | raggruppa le migliaia | `c:#,##0` | `n:1,235` |
| `%` | percentuale | `0%` | `123450%` |
| `"testo"` | un testo, un’unità | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | notazione scientifica | `c:0.00E+00` | `n:1.23E+03` |
| `;` | formati di positivi, negativi, zeri, testi | `0;-0;"nullo"` | `1235` |
| `[Red]` | colore | `0;[Red]-0` | negativi in rosso |

Il codice si scrive con i separatori della lingua; la finestra indica la forma in cui è salvato (`#,##0.00`), la stessa di Excel.

### Date e ore {#dates-heures}

| Codice | 29 agosto 2026, ore 14:30 |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

I nomi dei mesi e dei giorni si mostrano in inglese.

### Unità {#unites}

Sotto **%units%**, formati come `c:0.00 "V"`, `c:0.00 "Ω"`, `c:0.00 "mm"`: la cella resta un numero, con cui si calcola.

=== mise-en-forme
# Formattazione

## Testo {#texte}

| Comando | Accesso |
| --- | --- |
| grassetto, corsivo, sottolineato | {bold} {italic} {underline}; [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] |
| carattere | elenco **Arial**: tredici caratteri |
| dimensione | elenco **10**, o **%formatMenu% › %fontSize%**: da 9 a 72 |
| colore del testo, dello sfondo | {font-color} {background} |
| cancellare la formattazione | {clear-format}, **%formatMenu% › %clearFormat%** |

Nella tavolozza di un colore, **%resetColor%** lo toglie; **%customColor%** apre il selettore del sistema.

Mentre si modifica una cella, la formattazione si applica alla parte selezionata del testo.

## Allineamento {#alignement}

| Comando | Scelte |
| --- | --- |
| {align-left} orizzontale | sinistra, centro, destra |
| {align-top} verticale | in alto, in mezzo, in basso |
| {text-rotation-none} rotazione | inclinata, verticale, impilata |
| {text-overflow} testo a capo | **%wrapOverflow%**: sulle celle vuote vicine; **%wrap%**: su più righe; **%wrapClip%**: tagliato al bordo |

Senza allineamento scelto, numeri e date sono a destra, il resto a sinistra.

## Bordi {#bordures}

{border-all} traccia il bordo scelto; la sua freccia dà i lati (superiore, esterno, interni, tutti, nessuno, diagonale), il **colore** e lo **stile** della linea. Scegliere colore e stile prima del lato.

## Unire {#fusion}

{merge-all} o **%formatMenu% › %mergeCells%**:

| Comando | Effetto |
| --- | --- |
| **%mergeAll%** | una sola cella, che conserva un solo contenuto |
| **%mergeVertical%** | una cella per colonna |
| **%mergeHorizontal%** | una cella per riga |
| **%unmerge%** | restituisce le celle |

Un intervallo che contiene celle unite non si può ordinare né filtrare.

## Colori alternati {#alternees}

{alternating} o **%formatMenu% › %alternatingColors%** colora una riga su due dell’intervallo selezionato, con una riga di intestazione se si vuole. I tre colori si scelgono.

![La finestra dei colori alternati](couleurs-alternees.webp 1280x760)

Sono normali colori di sfondo: non seguono un ordinamento né una riga inserita. **%clearAlternating%** li toglie dall’intervallo.

## Griglia {#quadrillage}

{gridlines} o **%view% › %show% › %gridlines%** nasconde o mostra le linee grigie, in tutti i fogli della cartella. La [stampa](impression.html) ha la sua impostazione.

Per un colore che dipende dal valore, vedere [Formattazione condizionale](conditionnelle.html).

=== conditionnelle
# Formattazione condizionale

> Una regola cambia l’aspetto delle celle di un intervallo che soddisfano una condizione. Segue i valori, immessi o calcolati.

## Creare una regola {#creer}

1. Selezionare l’intervallo, senza la sua intestazione.
2. {conditional} o **%format% › %conditionalFormatting%**.
3. Scegliere la condizione, il valore di confronto, i colori o lo stile.
4. **%cfAdd%**.

![La finestra della formattazione condizionale, con una regola applicata](conditionnelle.webp 1280x760)

| Condizione | La cella |
| --- | --- |
| `<` | è minore di |
| `>` | è maggiore di |
| `=` | è uguale a |
| `!=` | è diversa da |
| `[]` | è compresa tra due valori, estremi inclusi |
| `abc` | contiene un testo, maiuscole o minuscole |

## Con che cosa confrontare {#comparer}

| %cfCompareTo% | Esempio |
| --- | --- |
| **%cfValue%** | i voti inferiori a 10 |
| **%cfCell%** | i voti inferiori alla soglia scritta in `F1` |
| **%cfColumn%** | nella colonna C, i valori superiori a quelli della colonna B, riga per riga |

## Aspetto {#apparence}

**%cfText%** e **%cfBackground%** scelgono i colori, **%cfNone%** li toglie; **B**, *I*, **U** mettono in grassetto, corsivo, sottolineato. Serve almeno un colore o uno stile.

## Più regole {#regles}

La colonna di sinistra elenca le regole del foglio: **%cfEdit%**, **%cfDelete%**. Se più regole si applicano a una cella, prevale l’ultima dell’elenco, colore per colore.

warn: In un intervallo coperto da una regola, i colori di testo e di sfondo dati direttamente alle celle non si mostrano più.

Le regole sono salvate nel file Excel come formattazioni condizionali di Excel.

=== lignes-colonnes
# Righe e colonne

## Dimensione {#taille}

| Azione | Effetto |
| --- | --- |
| trascinare il bordo destro dell’intestazione di una colonna | cambia la sua larghezza |
| trascinare il bordo inferiore dell’intestazione di una riga | cambia la sua altezza |
| clic destro sull’intestazione › **%width%**, **%height%** | dimensione in pixel, per tutte le colonne o righe selezionate |

## Inserire, eliminare {#inserer}

Clic destro in una cella o su un’intestazione: **%rowAbove%**, **%rowBelow%**, **%columnLeft%**, **%columnRight%**. Il numero si scrive nel campo. Clic destro su un’intestazione: **%deleteRow%**, **%deleteColumn%**.

![Il menu del clic destro](menu-contextuel.webp 760x650)

Le formule sono adattate: i loro riferimenti seguono le celle spostate. Il limite è di 10 000 righe e 1 000 colonne.

## Nascondere {#masquer}

Clic destro sull’intestazione › **%hideRow%**, **%hideColumn%**. Le celle nascoste sono ancora calcolate. Per mostrarle di nuovo, selezionare le intestazioni intorno, poi clic destro › **%showHidden%**.

## Bloccare {#figer}

Righe e colonne bloccate restano visibili durante lo scorrimento. Selezionare la cella limite, poi {freeze-row-col} o **%view% › %freeze%**:

| Comando | Restano visibili |
| --- | --- |
| **%freezeRow%** | le righe fino a quella della cella, compresa |
| **%freezeColumn%** | le colonne fino a quella della cella, compresa |
| **%freezeCell%** | entrambe |
| **%freezeCancel%** | nulla di particolare |

Per tenere la riga di intestazione: clic su una cella della riga 1, **%freezeRow%**.

=== tri-filtre
# Ordinare, filtrare, cercare

## Ordinare {#trier}

| Comando | Effetto |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**, **%sortDescending%** | ordina la selezione secondo la prima colonna; anche con {filter} e con il clic destro |
| clic destro › **%sortRange%** | sceglie la colonna, l’ordine, e se la prima riga è un’intestazione |

![La finestra per ordinare un intervallo](tri.webp 1280x760)

Selezionare tutta la tabella, non una sola colonna: le righe devono restare intere. Un intervallo che contiene celle unite non si ordina.

## Filtrare {#filtrer}

1. Selezionare la tabella, intestazione compresa.
2. **%data% › %sortAndFilter% › %createFilter%**, o {filter}, o clic destro › **%filterRange%**.
3. Fare clic sulla freccia di una colonna.

![Il filtro di una colonna](filtre.webp 1280x760)

| Nel menu di una colonna | Effetto |
| --- | --- |
| **%sortByAsc%**, **%sortByDesc%** | ordina le righe della tabella |
| **%filterByColor%** | secondo il colore dello sfondo o del testo |
| **%filterByValues%** | spuntare i valori da tenere; **%filterAll%**, **%filterNone%**, **%filterInverse%**; il campo cerca un valore |
| **%filterConfirm%** | applica |
| **%clearFilter%** | toglie il filtro della tabella |

Le righe escluse sono nascoste, non eliminate. I filtri di più colonne si sommano. **%data% › %sortAndFilter% › %clearFilter%** toglie il filtro.

## Cercare, sostituire {#rechercher}

[[Ctrl+F]] apre **%find%**, [[Ctrl+H]] **%replace%**.

![La ricerca](rechercher.webp 1280x660)

| Opzione | Effetto |
| --- | --- |
| **%regex%** | il testo cercato è un’espressione regolare: `^A` trova ciò che comincia per A |
| **%wholeWord%** | l’intera cella è uguale al testo |
| **%matchCase%** | distingue maiuscole e minuscole |
| **%findAll%** | elenca le celle trovate; un clic su una riga vi porta |
| **%findNext%** | va alla successiva |
| **%replaceOne%**, **%replaceAll%** | una cella, tutte |

La ricerca riguarda il foglio mostrato.

=== controles
# Caselle, elenchi e calendario

![Caselle di controllo, un elenco a discesa e il calendario di una data](controles.webp 1280x560)

## Caselle di controllo {#cases}

Selezionare le celle, **%insert% › %checkbox%**. Un clic spunta o toglie la spunta; la cella vale TRUE o FALSE.

```
=IF(B2, "fatto", "da fare")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

La seconda formula somma i valori della colonna C la cui casella è spuntata; la terza conta le caselle spuntate.

## Elenchi a discesa {#listes}

Selezionare le celle, **%insert% › %dropdown%**.

| Origine | Contenuto |
| --- | --- |
| **%listValues%** | le opzioni, una per campo; **%addOption%**; senza virgola |
| **%listRange%** | un intervallo le cui celle sono le opzioni: `%sheet%2!$A$1:$A$10` |

Un intervallo senza `$` si sposta da una cella all’altra, come una formula riempita. Se le sue celle cambiano, le opzioni seguono.

La cella mostra una freccia; un clic apre le opzioni. Un valore diverso da quelli dell’elenco non è accettato.

## Calendario {#calendrier}

Un doppio clic su una cella di data apre un calendario: scegliere un giorno, cambiare mese con **<** e **>**, **%today%** per la data di oggi. Si apre su ogni cella con un formato di data, anche vuota, salvo se contiene una formula o è [bloccata](protection.html).

tip: Per una colonna di date da riempire con il calendario: selezionarla e darle il formato **%fDate%**.

## Togliere {#retirer}

[[Delete]] toglie la casella o l’elenco dalla cella, con il suo valore.

Caselle ed elenchi sono salvati nel file Excel; le caselle vi sono caselle di controllo di Excel.

=== graphiques
# Grafici e sparkline

## Creare un grafico {#creer}

1. Selezionare i dati.
2. {chart} o **%insert% › %chart%**.
3. Scegliere il tipo e le opzioni; l’anteprima segue.
4. **%chartAdd%**, poi **%chartClose%**.

![La finestra dei grafici](graphique.webp 1280x900)

| Selezione | Interpretazione |
| --- | --- |
| una colonna o una riga di numeri | i dati |
| due colonne | etichette nella prima, dati nella seconda |
| due righe | etichette nella prima, dati nella seconda |
| due colonne separate, scelte con [[Ctrl]] | lo stesso |

Un grafico mostra una serie: una riga o una colonna di dati. Le celle senza numero, come un’intestazione, sono ignorate.

## Tipi {#types}

| Tipo | Per | Etichette |
| --- | --- | --- |
| **%tBar%** | confrontare | sotto le barre |
| **%tLine%** | un andamento | in ascissa |
| **%tScatter%** | una relazione tra due grandezze | sono le ascisse, se sono numeri; altrimenti 1, 2, 3… |
| **%tPie%** | parti; valori positivi | nella legenda o sugli spicchi |

Fino a 120 valori, 24 per la torta.

![I quattro tipi di grafici](graphiques.webp 1280x640)

## Opzioni {#options}

| Campo | Contenuto |
| --- | --- |
| **%chartTitle%** | obbligatorio; mostrato in alto nel grafico |
| **%chartColor%** | selettore o codice `#4F81BD`; gli spicchi hanno i propri colori |
| **%chartRange%** | l’intervallo: `B2:B6` |
| **%chartLabels%** | **%lNone%**; **%lColumn%** (`A`); **%lRow%** (`1`); **%lRange%**, della stessa dimensione dei dati |
| **%chartOptions%** | valori, legenda, ascisse, ordinate, griglia |

## Spostare, modificare {#modifier}

- Trascinare la fascia del titolo sposta il grafico; trascinare il suo angolo in basso a destra lo ridimensiona.
- **%chartEdit%** riapre la finestra, **%chartDelete%** lo elimina. La finestra elenca anche tutti i grafici del foglio.
- Il grafico segue i dati delle sue celle.

I grafici sono salvati nel file Excel come veri grafici, e riletti da DocCells. Non sono [stampati](impression.html) con il foglio.

## Sparkline {#sparklines}

La funzione `SPARKLINE` disegna un grafico in miniatura nella cella.

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![Sparkline a linee e a colonne](sparklines.webp 900x300)

Le opzioni si scrivono tra parentesi graffe: il nome, una barra rovesciata, il valore; un punto e virgola tra due opzioni.

| `charttype` | Disegno | Opzioni proprie |
| --- | --- | --- |
| `"line"` (predefinito) | linea | `color`, `linewidth`, `xmin`, `xmax`, `ymin`, `ymax` |
| `"bar"` | barre impilate | `max`, `color1`, `color2` |
| `"column"` | colonne | `color`, `negcolor`, `lowcolor`, `highcolor`, `firstcolor`, `lastcolor`, `axis`, `axiscolor`, `ymin`, `ymax` |
| `"winloss"` | vincite e perdite | le stesse, senza `ymin` né `ymax` |

Opzioni comuni: `empty` (`"zero"` o `"ignore"`), `nan` (`"convert"` o `"ignore"`), `rtl` (da destra a sinistra). La [documentazione di SPARKLINE](../../sparkline/it.html) dà tutti i valori, con esempi.

Per un disegno più grande, ingrandire la riga e la colonna, o unire delle celle.

=== images-liens
# Immagini e link

## Immagini {#images}

{image} o **%insert% › %image%** inserisce un’immagine del computer al posto della selezione.

| Azione | Effetto |
| --- | --- |
| trascinare l’immagine | la sposta |
| trascinare una maniglia | la ridimensiona |
| [[Delete]], con l’immagine selezionata | la elimina |

Le immagini sono salvate nel file Excel, al loro posto.

## Link {#liens}

Selezionare una cella, clic destro › **%link%**.

| %linkType% | Indirizzo |
| --- | --- |
| pagina web (**%linkWeb%**) | `https://…` |
| intervallo di celle (**%linkCells%**) | `%sheet%1!A1:C8` |
| **%linkSheet%** | un foglio della cartella |

**%linkText%** diventa il contenuto della cella, blu e sottolineato. Quando la cella è selezionata, **%linkOpen%** appare sotto di essa.

warn: I link non sono salvati nel file Excel: lo è solo il loro testo.

=== impression
# Stampare

**%file% › %print%** o [[Ctrl+P]] mostra le pagine come saranno stampate.

![L’anteprima di stampa](imprimer.webp 1280x760)

| Impostazione | Scelte |
| --- | --- |
| **%printContent%** | il foglio attivo, o le celle selezionate prima di aprire la finestra |
| **%printPaper%** | A4, Letter |
| **%printOrientation%** | verticale, orizzontale |
| **%printScale%** | **%printActual%**; **%printWidth%**: tutte le colonne sulla larghezza di una pagina; **%printPage%** |
| **%printMargins%** | normali, stretti, larghi |
| **%printFormatting%** | griglia, intestazioni di righe e colonne, colori di sfondo |

**%printButton%** apre la finestra del browser, dove si sceglie la stampante o il salvataggio in PDF.

- Si stampano solo le celle, con la loro formattazione: né grafici, né immagini, né sparkline.
- Le righe e le colonne nascoste non si stampano.
- Una casella si stampa come TRUE o FALSE.
- Si stampa un foglio alla volta.

tip: Per stampare con i grafici, salvare la cartella e aprirla in Excel o LibreOffice.

=== protection
# Proteggere

> Una cartella protetta si modifica solo nelle celle sbloccate: così si prepara un foglio di esercizi.

## Preparare un foglio per gli studenti {#preparer}

1. Selezionare le celle da riempire, clic destro › **%unlock%**.
2. {protect} o **%tools% › %protectWorkbook%**.
3. Salvare, poi [diffondere il file o il suo link](partager.html).

All’inizio tutte le celle sono bloccate; il blocco ha effetto solo in una cartella protetta. **%lock%** lo annulla.

## Che cosa blocca la protezione {#effets}

| In una cartella protetta | Cella bloccata | Cella sbloccata |
| --- | --- | --- |
| scrivere, cancellare | no | sì |
| calendario di una data | no | sì |
| larghezze e altezze | no | no |
| colori alternati, inserimento di caselle ed elenchi, riempimento da menu | no | no |
| formattazione, inserimento di righe e colonne, grafici | sì | sì |

La protezione riguarda tutti i fogli. È salvata nel file Excel, con le celle sbloccate, e riletta da DocCells e da Excel.

## Modalità studente {#eleve}

`?mode=student` nell’indirizzo apre DocCells senza il pulsante {protect} né i comandi **%unlock%** e **%defineName%**; **%protectWorkbook%** è disattivato. Lo studente non può togliere la protezione.

```
https://…/doccells/?mode=student&url=https://…/esercizio.xlsx
```

note: È una protezione d’uso, senza password: chi apre il file in un altro foglio di calcolo, o senza `mode=student`, può toglierla.

=== partager
# Condividere e incorporare

## Una cartella tramite un link {#url}

`?url=` seguito dall’indirizzo di un file `.xlsx` in rete lo apre in DocCells.

```
https://…/doccells/?url=https://esempio.org/voti.xlsx
```

Il sito che ospita il file deve autorizzarne la lettura da altri siti (intestazione CORS); un file posto accanto a DocCells, sullo stesso sito, non ha questo vincolo. Ognuno apre la propria copia: le modifiche non tornano nel file originale.

## Un Google Sheet {#google}

Va bene anche l’indirizzo di un Google Sheet.

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- Condividerlo con «Chiunque abbia il link».
- DocCells ne legge una copia in formato Excel a ogni apertura: il documento Google non è modificato.
- Il sito che ospita DocCells deve eseguire PHP; 25 MB al massimo.

## Opzioni dell’indirizzo {#options}

| Opzione | Effetto |
| --- | --- |
| `url=…` | apre una cartella o un Google Sheet |
| `mode=student` | [modalità studente](protection.html#eleve) |
| `lang=it` | impone la lingua: `de`, `el`, `en`, `es`, `fr`, `hi`, `it`, `nl`, `pt`, `ru`, `zh-CN`, `zh-TW` |

Le opzioni si susseguono, separate da `&`: `?lang=it&mode=student&url=…`. La prima viene dopo `?`.

## In una pagina web {#integrer}

```
<iframe src="https://…/doccells/?url=https://esempio.org/voti.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

In un riquadro, DocCells non ha menu, né pulsanti per aprire e salvare, né copia di recupero: mostra la barra dei pulsanti, la barra della formula e il foglio.

## Da programma {#programme}

Una pagina può comandare DocCells: caricare una cartella, leggere e scrivere celle, seguirne i valori. L’opzione `embed` apre questa modalità; è descritta, per gli sviluppatori, nel file [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) del progetto (in francese).

=== docgeo
# Con DocGeo

> DocGeo, il programma di geometria dinamica di DocTools, contiene DocCells: un foglio accanto a una figura, ciascuno che legge l’altro.

In DocGeo, **%file% › %gView% › %gSheetView%** aggiunge un foglio accanto alla figura; **%file% › %gTab% › %gSheetTab%** ne fa una scheda.

## La funzione GEO {#geo}

In una cella, `GEO` legge il valore di un oggetto della figura, indicato dal suo nome tra virgolette.

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'Figura 1'!c")
```

- La cella segue la figura mentre la si muove.
- Un punto si legge come l’[elenco](listes.html) delle sue coordinate: anche `=GEO("A")*2` è un punto.
- Mentre si scrive una formula, un clic su un oggetto della figura vi scrive `GEO` e il suo nome.
- Un oggetto sconosciuto dà `#N/A`. Fuori da DocGeo, `GEO` dà sempre `#N/A`.
- `GEO` ha lo stesso nome in tutte le lingue.

## La figura legge le celle {#figure}

In una formula di DocGeo, `!B3` indica una cella, `!B2:B21` un intervallo.

## Differenze con DocCells da solo {#differences}

| In DocGeo | |
| --- | --- |
| Menu e pulsanti | nelle barre di DocGeo, quando il foglio è attivo |
| File | quello di DocGeo: il foglio è salvato nel `.dgo`, elenchi e link compresi |
| Fogli | uno per vista; più schede di foglio di calcolo si leggono tra loro |
| Annullare | [[Ctrl+Z]] nelle celle annulla solo le celle |

La pagina [Il foglio di calcolo](https://doctools.org/apps/docgeo/tutorials/it/tableur.html) del manuale di DocGeo dà i dettagli.

=== fonctions
# Le funzioni

> Le %functions% funzioni calcolate da DocCells, per ambito, con un esempio ciascuna.

- Ricerca: scrivere il nome di una funzione, italiano o inglese, nel campo in alto nella pagina ([[/]]) porta alla sua riga.
- Gli argomenti si separano con un punto e virgola; gli argomenti tra parentesi quadre `[ ]` sono facoltativi. Il nome inglese, in piccolo, è accettato in immissione.
- `@TRUE()` e `@FALSE()` si scrivono con le parentesi; si può anche scrivere 1 e 0.
- Un argomento «intervallo» può essere un [elenco](listes.html): `=AVERAGE([12, 15, 8])`.
- Vedere anche [Le formule](formules.html): operatori, riferimenti, errori.

## Le celle degli esempi {#exemples}

Gli esempi leggono questo foglio:

%%sample%%

%%functions%%

## Funzioni non calcolate {#non-calculees}

Il completamento e la libreria di DocCells nominano anche funzioni che non sono calcolate: danno `#NAME?` o `#ERROR!`. Lo stesso vale per funzioni recenti di Excel.

| Non calcolate | Al loro posto |
| --- | --- |
| `@TEXT`, `@FIXED`, `@DOLLAR` | un [formato numerico](nombres.html) nella cella |
| `CERCA.X`, `SCARTO`, `INDIRETTO`, `INDIRIZZO` | `@INDEX` e `@MATCH`, `@VLOOKUP`, `@CHOOSE` |
| `FILTRO`, `DATI.ORDINA`, `SEQUENZA`, `LET`, `LAMBDA` | [ordinare e filtrare](tri-filtre.html); [riempire](selection.html#recopier) una formula |
| `MAX.PIÙ.SE`, `MIN.PIÙ.SE`, `TESTO.UNISCI` | un filtro; l’operatore `&` |
| `MATR.PRODOTTO`, `MATR.DETERM`, `MATR.INVERSA` | `@SUMPRODUCT`, una formula per elemento |
| `COLLEG.IPERTESTUALE` | [inserire un link](images-liens.html#liens) |
| nomi con il punto di Excel: `RANK.EQ`, `VAR.S`, `NORM.DIST`… | il nome senza punto o il vecchio nome: `@RANK`, `@VAR`, `@NORMDIST` |
| funzioni di database (`@DSUM`…), cedole e titoli (`@PRICE`, `@COUPNUM`…), `@ISBLANK`, `@CELL`, `@ISFORMULA` | `@SUMIFS`; `=A1=""` per una cella vuota |

=== raccourcis
# Scorciatoie e gesti

## File {#fichier}

| Tasti | Effetto |
| --- | --- |
| [[Ctrl+O]] | aprire |
| [[Ctrl+S]] | salvare; scaricare, in Firefox e Safari |
| [[Ctrl+P]] | stampare |

## Modifica {#edition}

| Tasti | Effetto |
| --- | --- |
| [[Ctrl+Z]]; [[Ctrl+Y]], [[Ctrl+Shift+Z]] | annullare; ripetere |
| [[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] | copiare, tagliare, incollare |
| [[Ctrl+D]]; [[Ctrl+R]] | riempire in basso; a destra |
| [[Delete]], [[⌫]] | svuotare le celle |
| [[Ctrl+F]]; [[Ctrl+H]] | cercare; sostituire |

## Formattazione {#mise-en-forme}

| Tasti | Effetto |
| --- | --- |
| [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] | grassetto, corsivo, sottolineato |

## Spostarsi, selezionare {#se-deplacer-selectionner}

| Tasti | Effetto |
| --- | --- |
| frecce | cella vicina |
| [[Tab]], [[Shift+Tab]] | cella successiva, precedente |
| [[Shift]] e freccia | estendere la selezione |
| [[Shift]] e clic | selezionare fino alla cella |
| [[Ctrl]] e clic | aggiungere alla selezione |
| [[Ctrl+A]] | tutto il foglio |

## Immissione {#saisie}

| Tasti | Effetto |
| --- | --- |
| [[F2]], [[Enter]], doppio clic | modificare la cella |
| [[Enter]] | confermare, scendere |
| [[Esc]] | abbandonare |
| [[Alt+Enter]] | andare a capo nella cella |
| [[↑]] [[↓]], [[Enter]], [[Tab]] | scorrere, scegliere una funzione proposta |
| clic o trascinamento sul foglio | inserire un riferimento nella formula |

## Mouse {#souris}

| Gesto | Effetto |
| --- | --- |
| trascinare il quadratino blu | [riempire](selection.html#recopier) |
| trascinare il bordo della selezione | [spostare](selection.html#deplacer) |
| trascinare il bordo di un’intestazione | [cambiare una larghezza, un’altezza](lignes-colonnes.html#taille) |
| clic destro | menu della cella, dell’intestazione, della scheda |
| doppio clic su una data | [calendario](controles.html#calendrier) |
| doppio clic su una scheda | rinominare il foglio |
| trascinare una scheda | spostare il foglio |
| rilasciare un file `.xlsx` | aprirlo |

=== excel
# Compatibilità con Excel

> DocCells legge e scrive il formato Excel `.xlsx`. Quanto segue si conserva, nei due sensi.

## Che cosa si conserva {#conserve}

| Elemento | Osservazione |
| --- | --- |
| valori, testi, date, formule | le formule si mostrano nella lingua di DocCells |
| [formati numerici](nombres.html) | personalizzati compresi |
| carattere, colori, allineamento, rotazione, testo a capo | |
| bordi, celle unite | |
| larghezze, altezze, righe e colonne nascoste | |
| [righe e colonne bloccate](lignes-colonnes.html#figer), griglia | |
| più fogli | |
| [intervalli denominati](noms.html) | |
| [formattazione condizionale](conditionnelle.html) | le regole di DocCells, le regole semplici di Excel (confronto, testo contenuto) |
| [caselle, elenchi a discesa](controles.html) | |
| [grafici](graphiques.html) | scritti come grafici di Excel; quelli di DocCells sono riletti |
| [immagini](images-liens.html) | |
| [filtri](tri-filtre.html#filtrer) | |
| [protezione](protection.html), celle sbloccate | |

## Che cosa no {#perdu}

| Elemento | Diventa |
| --- | --- |
| [link](images-liens.html#liens) | il loro testo |
| [elenchi](listes.html) nelle celle | un testo, `n:[2, 1]` |
| sparkline di DocCells o di Google Sheets | una formula `SPARKLINE`, riletta da DocCells; sconosciuta a Excel |
| grafici creati in Excel | non conservati |
| tabelle pivot, macro, filtri dei dati, commenti | non conservati |
| formattazione condizionale con scale di colore, barre, icone | non conservata |

tip: Prima di sostituire una cartella Excel complessa, salvarla da DocCells con un altro nome (**%saveAs%**).

## Elenchi {#listes}

Un elenco riaperto da un `.xlsx` è un testo: riscriverlo ne rifà un elenco. Un elenco calcolato da una formula torna un elenco quando la formula è ricalcolata.

## Formule {#formules}

All’apertura, una formula conserva in genere il risultato salvato da Excel finché una delle sue celle non cambia. Una funzione [non calcolata da DocCells](fonctions.html#non-calculees) dà allora `#NAME?` o `#ERROR!`.

## Altri formati {#formats}

| Formato | Come |
| --- | --- |
| `.csv` | aprire il file in un editor di testo, copiare, incollare in DocCells se i valori sono separati da tabulazioni; altrimenti convertirlo in `.xlsx` |
| `.ods`, `.xls` | salvarli in `.xlsx` con LibreOffice o Excel |
| Google Sheets | [tramite il link](partager.html#google), o scaricato in `.xlsx` |
| PDF | [stampare](impression.html), «Salva come PDF» |

=== faq
# Domande frequenti

## Immissione {#saisie}

### Una data che ho scritto non è riconosciuta

`25/11/2026` è un testo per DocCells. Scrivere `2026-11-25`, poi scegliere il formato **%fDate%** ([date](saisie.html#dates)).

### Appare un numero invece di una data

Le date sono numeri di giorni: dare alle celle il formato **%fDate%** (**%format% › %number%**).

### I miei numeri non si sommano

Allineati a sinistra, sono testi. In italiano la virgola è decimale; un’unità scritta nella cella ne fa un testo ([tipi](saisie.html#types)).

### Lo zero all’inizio di un numero scompare

Dare il formato **%fText%** prima di scrivere, o cominciare con un apostrofo ([testi](saisie.html#textes)).

### I numeri attendono un punto invece di una virgola

DocCells segue la lingua del browser. `?lang=it` la impone ([lingua](demarrage.html#langue)).

## Formule {#formules}

### `#NAME?` con VERO o FALSO

Scrivere `@TRUE()` e `@FALSE()`, o 1 e 0 ([condizioni](formules.html#conditions)).

### `#NAME?` con una funzione proposta da DocCells

Non tutte le funzioni proposte sono calcolate ([funzioni non calcolate](fonctions.html#non-calculees)).

### `@IFERROR` lascia passare DIV/0

Controllare il divisore: `=IF(B2, A2/B2, "")` ([errori](formules.html#erreurs)).

### Incollare non conserva le mie formule

**%paste%** del clic destro incolla i valori; [[Ctrl+V]] incolla le formule ([copiare](selection.html#copier)).

### Scrivere il nome di un mese o formattare un numero in un testo

La funzione `@TEXT` non è calcolata: dare un [formato](nombres.html) a una cella a parte.

### Contare le caselle spuntate

`=SUMPRODUCT(B2:B6, B2:B6)` ([caselle](controles.html#cases)).

### `=TODAY()+1` dà #VALUE!

Mettere `=TODAY()` in una cella e sommare a quella cella ([date](formules.html#dates)).

## Presentazione {#presentation}

### Il colore di una cella non cambia

La cella è nell’intervallo di una regola di [formattazione condizionale](conditionnelle.html#regles).

### Un pulsante è scomparso

La finestra è stretta: è dietro {more}.

### L’ordinamento o il filtro è rifiutato

L’intervallo contiene celle unite: separarle.

## File {#fichiers}

### Salvare scarica un nuovo file

È così in Firefox e Safari. Chrome e Edge scrivono nel file ([salvare](demarrage.html#enregistrer)).

### La pagina si è chiusa senza salvare

Riaprire DocCells nello stesso browser: propone di ripristinare la copia ([recuperare](demarrage.html#recuperer)).

### Il mio grafico non è stampato

La stampa mostra solo le celle ([stampare](impression.html)).

### Un link `?url=` non apre la mia cartella

Il sito del file forse rifiuta la lettura da altri siti. Un Google Sheet deve essere condiviso tramite link ([condividere](partager.html)).

### I miei link sono scomparsi

Non sono salvati nel formato Excel ([che cosa non si conserva](excel.html#perdu)).

## Studenti {#eleves}

### Uno studente può modificare le formule?

Non in una cartella protetta, fuori dalle celle sbloccate ([proteggere](protection.html)). Aggiungere `mode=student` al link gli toglie il modo di rimuovere la protezione.
