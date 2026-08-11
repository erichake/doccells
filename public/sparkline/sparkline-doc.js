const languages = [
  ["en", "English"],
  ["fr", "Français"],
  ["es", "Español"],
  ["pt", "Português"],
  ["de", "Deutsch"],
  ["el", "Ελληνικά"],
  ["it", "Italiano"],
  ["nl", "Nederlands"],
  ["ru", "Русский"],
  ["hi", "हिन्दी"],
  ["zh", "简体中文"],
  ["zh_tw", "繁體中文"],
];

const translations = {
  en: {
    name: "English",
    tagline: "Cell chart · Formula reference",
    subtitle: "Create a compact, data-driven chart directly inside a spreadsheet cell.",
    language: "Language",
    contents: "On this page",
    syntax: "Syntax",
    syntaxIntro: "SPARKLINE accepts a data range and an optional two-column matrix of settings.",
    parameters: "Parameters",
    data: "data",
    dataDescription: "A range or array containing the numeric values to plot.",
    options: "options",
    optionsDescription: "An optional matrix containing one option name and one value per row.",
    types: "Chart types",
    typesIntro: "Choose a rendering mode with the charttype option. Line is used by default.",
    common: "Common options",
    commonIntro: "These settings apply to every chart type.",
    specific: "Options by chart type",
    specificIntro: "Fine-tune the scale, colors and visual emphasis of each rendering mode.",
    examples: "Ready-to-use examples",
    examplesIntro: "Copy a formula, then adapt the range and colors to your sheet.",
    option: "Option",
    values: "Accepted values",
    effect: "Effect",
    note: "Good to know",
    copy: "Copy formula",
    copied: "Copied",
    line: "Line",
    bar: "Bar",
    column: "Column",
    winloss: "Win/loss",
    typeDescriptions: ["A continuous trend line.", "A proportional horizontal stacked bar.", "Vertical columns scaled to the values.", "Positive, zero and negative results reduced to their sign."],
    commonEffects: ["Selects the rendering mode.", "Ignores blank cells or converts them to zero.", "Ignores non-numeric values or converts them to zero.", "Reverses the display direction."],
    lineEffects: ["Sets the line color.", "Sets a positive line thickness.", "Sets the first horizontal position.", "Sets the last horizontal position.", "Sets the vertical scale minimum.", "Sets the vertical scale maximum."],
    barEffects: ["Defines the value that fills the entire cell width.", "Sets the first segment color.", "Sets the second segment color; color3, color4, etc. are also supported."],
    columnEffects: ["Sets the default column color.", "Sets the color of negative values.", "Highlights the lowest value.", "Highlights the highest value.", "Highlights the first value.", "Highlights the last value.", "Shows or hides the zero axis.", "Sets the zero-axis color.", "Sets the scale minimum for column charts.", "Sets the scale maximum for column charts."],
    lineNote: "Horizontal point positions start at 0. With eleven values, the natural range is 0 to 10.",
    barNote: "Without explicit colors, DocCells alternates blue and red. Additional segments can use color3, color4, and so on.",
    columnNote: "ymin and ymax do not apply to winloss, where results are normalized to -1, 0 and 1.",
    footer: "DocCells formula documentation",
  },
  fr: {
    name: "Français",
    tagline: "Graphique en cellule · Référence de formule",
    subtitle: "Créez un graphique compact, piloté par vos données, directement dans une cellule du tableur.",
    language: "Langue",
    contents: "Dans cette page",
    syntax: "Syntaxe",
    syntaxIntro: "SPARKLINE accepte une plage de données et une matrice facultative de réglages sur deux colonnes.",
    parameters: "Paramètres",
    data: "données",
    dataDescription: "Une plage ou une matrice contenant les valeurs numériques à représenter.",
    options: "options",
    optionsDescription: "Une matrice facultative contenant un nom d’option et une valeur par ligne.",
    types: "Types de graphiques",
    typesIntro: "Choisissez le rendu avec l’option charttype. Le type line est utilisé par défaut.",
    common: "Options communes",
    commonIntro: "Ces réglages s’appliquent à tous les types de graphiques.",
    specific: "Options par type de graphique",
    specificIntro: "Ajustez précisément l’échelle, les couleurs et les éléments mis en valeur.",
    examples: "Exemples prêts à l’emploi",
    examplesIntro: "Copiez une formule, puis adaptez la plage et les couleurs à votre feuille.",
    option: "Option",
    values: "Valeurs acceptées",
    effect: "Effet",
    note: "Bon à savoir",
    copy: "Copier la formule",
    copied: "Copiée",
    line: "Courbe",
    bar: "Barre",
    column: "Colonnes",
    winloss: "Gains / pertes",
    typeDescriptions: ["Une courbe continue pour visualiser une tendance.", "Une barre horizontale empilée et proportionnelle.", "Des colonnes verticales mises à l’échelle des valeurs.", "Les résultats positifs, nuls et négatifs réduits à leur signe."],
    commonEffects: ["Choisit le mode de rendu.", "Ignore les cellules vides ou les convertit en zéro.", "Ignore les valeurs non numériques ou les convertit en zéro.", "Inverse le sens d’affichage."],
    lineEffects: ["Définit la couleur de la courbe.", "Définit une épaisseur de courbe positive.", "Définit la première position horizontale.", "Définit la dernière position horizontale.", "Définit le minimum de l’échelle verticale.", "Définit le maximum de l’échelle verticale."],
    barEffects: ["Définit la valeur qui occupe toute la largeur de la cellule.", "Définit la couleur du premier segment.", "Définit la couleur du deuxième segment ; color3, color4, etc. sont aussi acceptées."],
    columnEffects: ["Définit la couleur normale des colonnes.", "Définit la couleur des valeurs négatives.", "Met en évidence la valeur la plus basse.", "Met en évidence la valeur la plus haute.", "Met en évidence la première valeur.", "Met en évidence la dernière valeur.", "Affiche ou masque l’axe zéro.", "Définit la couleur de l’axe zéro.", "Définit le minimum de l’échelle des colonnes.", "Définit le maximum de l’échelle des colonnes."],
    lineNote: "Les positions horizontales commencent à 0. Avec onze valeurs, l’intervalle naturel va de 0 à 10.",
    barNote: "Sans couleur explicite, DocCells alterne le bleu et le rouge. Les segments suivants utilisent color3, color4, etc.",
    columnNote: "ymin et ymax ne s’appliquent pas à winloss, dont les résultats sont normalisés à -1, 0 et 1.",
    footer: "Documentation des formules DocCells",
  },
  es: {
    name: "Español",
    tagline: "Gráfico en celda · Referencia de fórmula",
    subtitle: "Cree un gráfico compacto basado en datos directamente dentro de una celda.",
    language: "Idioma",
    contents: "En esta página",
    syntax: "Sintaxis",
    syntaxIntro: "SPARKLINE acepta un intervalo de datos y una matriz opcional de ajustes con dos columnas.",
    parameters: "Parámetros",
    data: "datos",
    dataDescription: "Un intervalo o matriz con los valores numéricos que se representarán.",
    options: "opciones",
    optionsDescription: "Una matriz opcional con un nombre de opción y un valor por fila.",
    types: "Tipos de gráfico",
    typesIntro: "Seleccione el modo con charttype. El tipo line se utiliza de forma predeterminada.",
    common: "Opciones comunes",
    commonIntro: "Estos ajustes se aplican a todos los tipos de gráfico.",
    specific: "Opciones por tipo de gráfico",
    specificIntro: "Ajuste la escala, los colores y los elementos destacados de cada modo.",
    examples: "Ejemplos listos para usar",
    examplesIntro: "Copie una fórmula y adapte el intervalo y los colores a su hoja.",
    option: "Opción", values: "Valores aceptados", effect: "Efecto", note: "Conviene saber", copy: "Copiar fórmula", copied: "Copiada",
    line: "Línea", bar: "Barra", column: "Columnas", winloss: "Ganancias / pérdidas",
    typeDescriptions: ["Una línea continua para mostrar una tendencia.", "Una barra horizontal apilada y proporcional.", "Columnas verticales escaladas según los valores.", "Resultados positivos, nulos y negativos reducidos a su signo."],
    commonEffects: ["Selecciona el modo de representación.", "Ignora las celdas vacías o las convierte en cero.", "Ignora los valores no numéricos o los convierte en cero.", "Invierte el sentido de visualización."],
    lineEffects: ["Define el color de la línea.", "Define un grosor positivo.", "Define la primera posición horizontal.", "Define la última posición horizontal.", "Define el mínimo de la escala vertical.", "Define el máximo de la escala vertical."],
    barEffects: ["Define el valor que ocupa todo el ancho de la celda.", "Define el color del primer segmento.", "Define el color del segundo segmento; también se admiten color3, color4, etc."],
    columnEffects: ["Define el color normal de las columnas.", "Define el color de los valores negativos.", "Destaca el valor más bajo.", "Destaca el valor más alto.", "Destaca el primer valor.", "Destaca el último valor.", "Muestra u oculta el eje cero.", "Define el color del eje cero.", "Define el mínimo de la escala de columnas.", "Define el máximo de la escala de columnas."],
    lineNote: "Las posiciones horizontales empiezan en 0. Con once valores, el intervalo natural va de 0 a 10.",
    barNote: "Sin colores explícitos, DocCells alterna azul y rojo. Los segmentos siguientes usan color3, color4, etc.",
    columnNote: "ymin e ymax no se aplican a winloss, cuyos resultados se normalizan a -1, 0 y 1.",
    footer: "Documentación de fórmulas de DocCells",
  },
  pt: {
    name: "Português", tagline: "Gráfico na célula · Referência da fórmula", subtitle: "Crie um gráfico compacto baseado em dados diretamente numa célula.", language: "Idioma", contents: "Nesta página", syntax: "Sintaxe", syntaxIntro: "SPARKLINE aceita um intervalo de dados e uma matriz opcional de definições com duas colunas.", parameters: "Parâmetros", data: "dados", dataDescription: "Um intervalo ou matriz com os valores numéricos a representar.", options: "opções", optionsDescription: "Uma matriz opcional com um nome de opção e um valor por linha.", types: "Tipos de gráfico", typesIntro: "Escolha o modo com charttype. O tipo line é utilizado por predefinição.", common: "Opções comuns", commonIntro: "Estas definições aplicam-se a todos os tipos de gráfico.", specific: "Opções por tipo de gráfico", specificIntro: "Ajuste a escala, as cores e os destaques de cada modo.", examples: "Exemplos prontos a usar", examplesIntro: "Copie uma fórmula e adapte o intervalo e as cores à sua folha.", option: "Opção", values: "Valores aceites", effect: "Efeito", note: "Convém saber", copy: "Copiar fórmula", copied: "Copiada", line: "Linha", bar: "Barra", column: "Colunas", winloss: "Ganhos / perdas",
    typeDescriptions: ["Uma linha contínua para mostrar uma tendência.", "Uma barra horizontal empilhada e proporcional.", "Colunas verticais dimensionadas pelos valores.", "Resultados positivos, nulos e negativos reduzidos ao sinal."],
    commonEffects: ["Seleciona o modo de apresentação.", "Ignora células vazias ou converte-as em zero.", "Ignora valores não numéricos ou converte-os em zero.", "Inverte o sentido de apresentação."],
    lineEffects: ["Define a cor da linha.", "Define uma espessura positiva.", "Define a primeira posição horizontal.", "Define a última posição horizontal.", "Define o mínimo da escala vertical.", "Define o máximo da escala vertical."],
    barEffects: ["Define o valor que ocupa toda a largura da célula.", "Define a cor do primeiro segmento.", "Define a cor do segundo segmento; color3, color4, etc. também são aceites."],
    columnEffects: ["Define a cor normal das colunas.", "Define a cor dos valores negativos.", "Realça o valor mais baixo.", "Realça o valor mais alto.", "Realça o primeiro valor.", "Realça o último valor.", "Mostra ou oculta o eixo zero.", "Define a cor do eixo zero.", "Define o mínimo da escala das colunas.", "Define o máximo da escala das colunas."],
    lineNote: "As posições horizontais começam em 0. Com onze valores, o intervalo natural vai de 0 a 10.", barNote: "Sem cores explícitas, o DocCells alterna azul e vermelho. Os segmentos seguintes usam color3, color4, etc.", columnNote: "ymin e ymax não se aplicam a winloss, cujos resultados são normalizados para -1, 0 e 1.", footer: "Documentação de fórmulas do DocCells",
  },
  de: {
    name: "Deutsch", tagline: "Zellendiagramm · Formeldokumentation", subtitle: "Erstellen Sie ein kompaktes, datengesteuertes Diagramm direkt in einer Tabellenzelle.", language: "Sprache", contents: "Auf dieser Seite", syntax: "Syntax", syntaxIntro: "SPARKLINE akzeptiert einen Datenbereich und eine optionale zweispaltige Einstellungsmatrix.", parameters: "Parameter", data: "Daten", dataDescription: "Ein Bereich oder Array mit den darzustellenden numerischen Werten.", options: "Optionen", optionsDescription: "Eine optionale Matrix mit einem Optionsnamen und einem Wert pro Zeile.", types: "Diagrammtypen", typesIntro: "Wählen Sie den Modus mit charttype. Standardmäßig wird line verwendet.", common: "Allgemeine Optionen", commonIntro: "Diese Einstellungen gelten für alle Diagrammtypen.", specific: "Optionen nach Diagrammtyp", specificIntro: "Passen Sie Skala, Farben und Hervorhebungen für jeden Modus an.", examples: "Sofort einsetzbare Beispiele", examplesIntro: "Kopieren Sie eine Formel und passen Sie Bereich und Farben an.", option: "Option", values: "Zulässige Werte", effect: "Wirkung", note: "Gut zu wissen", copy: "Formel kopieren", copied: "Kopiert", line: "Linie", bar: "Balken", column: "Säulen", winloss: "Gewinn / Verlust",
    typeDescriptions: ["Eine durchgehende Linie für Trends.", "Ein proportionaler horizontaler Stapelbalken.", "Vertikale, nach Werten skalierte Säulen.", "Positive, neutrale und negative Ergebnisse auf ihr Vorzeichen reduziert."],
    commonEffects: ["Wählt den Darstellungsmodus.", "Ignoriert leere Zellen oder wandelt sie in Null um.", "Ignoriert nicht numerische Werte oder wandelt sie in Null um.", "Kehrt die Anzeigerichtung um."],
    lineEffects: ["Legt die Linienfarbe fest.", "Legt eine positive Linienstärke fest.", "Legt die erste horizontale Position fest.", "Legt die letzte horizontale Position fest.", "Legt das Minimum der vertikalen Skala fest.", "Legt das Maximum der vertikalen Skala fest."],
    barEffects: ["Legt den Wert für die gesamte Zellbreite fest.", "Legt die Farbe des ersten Segments fest.", "Legt die Farbe des zweiten Segments fest; color3, color4 usw. werden ebenfalls unterstützt."],
    columnEffects: ["Legt die normale Säulenfarbe fest.", "Legt die Farbe negativer Werte fest.", "Hebt den niedrigsten Wert hervor.", "Hebt den höchsten Wert hervor.", "Hebt den ersten Wert hervor.", "Hebt den letzten Wert hervor.", "Blendet die Nulllinie ein oder aus.", "Legt die Farbe der Nulllinie fest.", "Legt das Minimum der Säulenskala fest.", "Legt das Maximum der Säulenskala fest."],
    lineNote: "Horizontale Positionen beginnen bei 0. Bei elf Werten reicht der natürliche Bereich von 0 bis 10.", barNote: "Ohne explizite Farben wechselt DocCells zwischen Blau und Rot. Weitere Segmente verwenden color3, color4 usw.", columnNote: "ymin und ymax gelten nicht für winloss; dessen Ergebnisse werden auf -1, 0 und 1 normiert.", footer: "DocCells-Formeldokumentation",
  },
  el: {
    name: "Ελληνικά", tagline: "Γράφημα κελιού · Αναφορά τύπου", subtitle: "Δημιουργήστε ένα συμπαγές γράφημα από δεδομένα απευθείας μέσα σε ένα κελί.", language: "Γλώσσα", contents: "Σε αυτή τη σελίδα", syntax: "Σύνταξη", syntaxIntro: "Η SPARKLINE δέχεται μια περιοχή δεδομένων και έναν προαιρετικό πίνακα ρυθμίσεων δύο στηλών.", parameters: "Παράμετροι", data: "δεδομένα", dataDescription: "Περιοχή ή πίνακας με τις αριθμητικές τιμές που θα απεικονιστούν.", options: "επιλογές", optionsDescription: "Προαιρετικός πίνακας με ένα όνομα επιλογής και μία τιμή ανά γραμμή.", types: "Τύποι γραφήματος", typesIntro: "Επιλέξτε τρόπο εμφάνισης με το charttype. Προεπιλογή είναι το line.", common: "Κοινές επιλογές", commonIntro: "Αυτές οι ρυθμίσεις ισχύουν για όλους τους τύπους.", specific: "Επιλογές ανά τύπο", specificIntro: "Ρυθμίστε την κλίμακα, τα χρώματα και τις επισημάνσεις κάθε τύπου.", examples: "Έτοιμα παραδείγματα", examplesIntro: "Αντιγράψτε έναν τύπο και προσαρμόστε την περιοχή και τα χρώματα.", option: "Επιλογή", values: "Αποδεκτές τιμές", effect: "Αποτέλεσμα", note: "Χρήσιμη πληροφορία", copy: "Αντιγραφή τύπου", copied: "Αντιγράφηκε", line: "Γραμμή", bar: "Ράβδος", column: "Στήλες", winloss: "Κέρδος / ζημία",
    typeDescriptions: ["Συνεχής γραμμή για την τάση.", "Αναλογική οριζόντια στοιβαγμένη ράβδος.", "Κατακόρυφες στήλες κλιμακωμένες στις τιμές.", "Θετικά, μηδενικά και αρνητικά αποτελέσματα ως πρόσημα."],
    commonEffects: ["Επιλέγει τον τρόπο εμφάνισης.", "Αγνοεί τα κενά κελιά ή τα μετατρέπει σε μηδέν.", "Αγνοεί μη αριθμητικές τιμές ή τις μετατρέπει σε μηδέν.", "Αντιστρέφει την κατεύθυνση εμφάνισης."],
    lineEffects: ["Ορίζει το χρώμα γραμμής.", "Ορίζει θετικό πάχος γραμμής.", "Ορίζει την πρώτη οριζόντια θέση.", "Ορίζει την τελευταία οριζόντια θέση.", "Ορίζει το ελάχιστο της κατακόρυφης κλίμακας.", "Ορίζει το μέγιστο της κατακόρυφης κλίμακας."],
    barEffects: ["Ορίζει την τιμή που γεμίζει όλο το πλάτος του κελιού.", "Ορίζει το χρώμα του πρώτου τμήματος.", "Ορίζει το χρώμα του δεύτερου τμήματος· υποστηρίζονται και color3, color4 κ.λπ."],
    columnEffects: ["Ορίζει το κανονικό χρώμα στηλών.", "Ορίζει το χρώμα αρνητικών τιμών.", "Επισημαίνει τη χαμηλότερη τιμή.", "Επισημαίνει την υψηλότερη τιμή.", "Επισημαίνει την πρώτη τιμή.", "Επισημαίνει την τελευταία τιμή.", "Εμφανίζει ή κρύβει τον άξονα μηδέν.", "Ορίζει το χρώμα του άξονα.", "Ορίζει το ελάχιστο της κλίμακας στηλών.", "Ορίζει το μέγιστο της κλίμακας στηλών."],
    lineNote: "Οι οριζόντιες θέσεις αρχίζουν από 0. Με έντεκα τιμές, το φυσικό εύρος είναι 0 έως 10.", barNote: "Χωρίς ρητά χρώματα, το DocCells εναλλάσσει μπλε και κόκκινο. Τα επόμενα τμήματα χρησιμοποιούν color3, color4 κ.λπ.", columnNote: "Τα ymin και ymax δεν ισχύουν για winloss, όπου τα αποτελέσματα κανονικοποιούνται σε -1, 0 και 1.", footer: "Τεκμηρίωση τύπων DocCells",
  },
  it: {
    name: "Italiano", tagline: "Grafico nella cella · Riferimento formula", subtitle: "Crea un grafico compatto basato sui dati direttamente in una cella.", language: "Lingua", contents: "In questa pagina", syntax: "Sintassi", syntaxIntro: "SPARKLINE accetta un intervallo di dati e una matrice opzionale di impostazioni su due colonne.", parameters: "Parametri", data: "dati", dataDescription: "Un intervallo o una matrice con i valori numerici da rappresentare.", options: "opzioni", optionsDescription: "Una matrice opzionale con un nome di opzione e un valore per riga.", types: "Tipi di grafico", typesIntro: "Scegli il rendering con charttype. Il tipo line è quello predefinito.", common: "Opzioni comuni", commonIntro: "Queste impostazioni si applicano a tutti i tipi di grafico.", specific: "Opzioni per tipo", specificIntro: "Regola scala, colori ed evidenziazioni per ciascun tipo.", examples: "Esempi pronti all’uso", examplesIntro: "Copia una formula e adatta intervallo e colori al foglio.", option: "Opzione", values: "Valori accettati", effect: "Effetto", note: "Da sapere", copy: "Copia formula", copied: "Copiata", line: "Linea", bar: "Barra", column: "Colonne", winloss: "Vincite / perdite",
    typeDescriptions: ["Una linea continua per mostrare una tendenza.", "Una barra orizzontale impilata e proporzionale.", "Colonne verticali scalate sui valori.", "Risultati positivi, nulli e negativi ridotti al segno."],
    commonEffects: ["Seleziona la modalità di rendering.", "Ignora le celle vuote o le converte in zero.", "Ignora i valori non numerici o li converte in zero.", "Inverte la direzione di visualizzazione."],
    lineEffects: ["Imposta il colore della linea.", "Imposta uno spessore positivo.", "Imposta la prima posizione orizzontale.", "Imposta l’ultima posizione orizzontale.", "Imposta il minimo della scala verticale.", "Imposta il massimo della scala verticale."],
    barEffects: ["Imposta il valore che riempie tutta la larghezza della cella.", "Imposta il colore del primo segmento.", "Imposta il colore del secondo segmento; sono supportati anche color3, color4, ecc."],
    columnEffects: ["Imposta il colore normale delle colonne.", "Imposta il colore dei valori negativi.", "Evidenzia il valore più basso.", "Evidenzia il valore più alto.", "Evidenzia il primo valore.", "Evidenzia l’ultimo valore.", "Mostra o nasconde l’asse zero.", "Imposta il colore dell’asse zero.", "Imposta il minimo della scala delle colonne.", "Imposta il massimo della scala delle colonne."],
    lineNote: "Le posizioni orizzontali iniziano da 0. Con undici valori, l’intervallo naturale va da 0 a 10.", barNote: "Senza colori espliciti, DocCells alterna blu e rosso. I segmenti successivi usano color3, color4, ecc.", columnNote: "ymin e ymax non si applicano a winloss, i cui risultati sono normalizzati a -1, 0 e 1.", footer: "Documentazione delle formule DocCells",
  },
  nl: {
    name: "Nederlands", tagline: "Celgrafiek · Formulehandleiding", subtitle: "Maak een compacte, gegevensgestuurde grafiek rechtstreeks in een werkbladcel.", language: "Taal", contents: "Op deze pagina", syntax: "Syntaxis", syntaxIntro: "SPARKLINE gebruikt een gegevensbereik en een optionele tweekolomsmatrix met instellingen.", parameters: "Parameters", data: "gegevens", dataDescription: "Een bereik of matrix met de numerieke waarden die moeten worden getekend.", options: "opties", optionsDescription: "Een optionele matrix met één optienaam en één waarde per rij.", types: "Grafiektypen", typesIntro: "Kies de weergave met charttype. Standaard wordt line gebruikt.", common: "Algemene opties", commonIntro: "Deze instellingen gelden voor alle grafiektypen.", specific: "Opties per grafiektype", specificIntro: "Pas schaal, kleuren en accenten voor elk type aan.", examples: "Direct bruikbare voorbeelden", examplesIntro: "Kopieer een formule en pas bereik en kleuren aan uw blad aan.", option: "Optie", values: "Toegestane waarden", effect: "Effect", note: "Goed om te weten", copy: "Formule kopiëren", copied: "Gekopieerd", line: "Lijn", bar: "Balk", column: "Kolommen", winloss: "Winst / verlies",
    typeDescriptions: ["Een doorlopende lijn voor een trend.", "Een proportionele horizontale gestapelde balk.", "Verticale kolommen geschaald op de waarden.", "Positieve, nul- en negatieve resultaten teruggebracht tot hun teken."],
    commonEffects: ["Selecteert de weergavemodus.", "Negeert lege cellen of zet ze om in nul.", "Negeert niet-numerieke waarden of zet ze om in nul.", "Keert de weergaverichting om."],
    lineEffects: ["Stelt de lijnkleur in.", "Stelt een positieve lijndikte in.", "Stelt de eerste horizontale positie in.", "Stelt de laatste horizontale positie in.", "Stelt het minimum van de verticale schaal in.", "Stelt het maximum van de verticale schaal in."],
    barEffects: ["Bepaalt de waarde die de volledige celbreedte vult.", "Stelt de kleur van het eerste segment in.", "Stelt de kleur van het tweede segment in; color3, color4 enz. worden ook ondersteund."],
    columnEffects: ["Stelt de normale kolomkleur in.", "Stelt de kleur van negatieve waarden in.", "Markeert de laagste waarde.", "Markeert de hoogste waarde.", "Markeert de eerste waarde.", "Markeert de laatste waarde.", "Toont of verbergt de nullijn.", "Stelt de kleur van de nullijn in.", "Stelt het minimum van de kolomschaal in.", "Stelt het maximum van de kolomschaal in."],
    lineNote: "Horizontale posities beginnen bij 0. Met elf waarden loopt het natuurlijke bereik van 0 tot 10.", barNote: "Zonder expliciete kleuren wisselt DocCells blauw en rood af. Volgende segmenten gebruiken color3, color4 enz.", columnNote: "ymin en ymax gelden niet voor winloss; de resultaten daarvan worden genormaliseerd naar -1, 0 en 1.", footer: "DocCells-formuledocumentatie",
  },
  ru: {
    name: "Русский", tagline: "Диаграмма в ячейке · Справка по формуле", subtitle: "Создавайте компактную диаграмму по данным непосредственно в ячейке.", language: "Язык", contents: "На этой странице", syntax: "Синтаксис", syntaxIntro: "SPARKLINE принимает диапазон данных и необязательную двухколоночную матрицу настроек.", parameters: "Параметры", data: "данные", dataDescription: "Диапазон или массив числовых значений для отображения.", options: "параметры", optionsDescription: "Необязательная матрица: имя параметра и значение в каждой строке.", types: "Типы диаграмм", typesIntro: "Выберите режим с помощью charttype. По умолчанию используется line.", common: "Общие параметры", commonIntro: "Эти настройки применяются ко всем типам диаграмм.", specific: "Параметры по типам", specificIntro: "Настройте масштаб, цвета и выделение для каждого режима.", examples: "Готовые примеры", examplesIntro: "Скопируйте формулу и измените диапазон и цвета для своего листа.", option: "Параметр", values: "Допустимые значения", effect: "Действие", note: "Полезно знать", copy: "Копировать формулу", copied: "Скопировано", line: "Линия", bar: "Полоса", column: "Столбцы", winloss: "Выигрыш / проигрыш",
    typeDescriptions: ["Непрерывная линия для отображения тренда.", "Пропорциональная горизонтальная составная полоса.", "Вертикальные столбцы, масштабированные по значениям.", "Положительные, нулевые и отрицательные результаты, сведённые к знаку."],
    commonEffects: ["Выбирает режим отображения.", "Игнорирует пустые ячейки или преобразует их в ноль.", "Игнорирует нечисловые значения или преобразует их в ноль.", "Меняет направление отображения."],
    lineEffects: ["Задаёт цвет линии.", "Задаёт положительную толщину линии.", "Задаёт первую горизонтальную позицию.", "Задаёт последнюю горизонтальную позицию.", "Задаёт минимум вертикальной шкалы.", "Задаёт максимум вертикальной шкалы."],
    barEffects: ["Задаёт значение, заполняющее всю ширину ячейки.", "Задаёт цвет первого сегмента.", "Задаёт цвет второго сегмента; также поддерживаются color3, color4 и т. д."],
    columnEffects: ["Задаёт основной цвет столбцов.", "Задаёт цвет отрицательных значений.", "Выделяет наименьшее значение.", "Выделяет наибольшее значение.", "Выделяет первое значение.", "Выделяет последнее значение.", "Показывает или скрывает нулевую ось.", "Задаёт цвет нулевой оси.", "Задаёт минимум шкалы столбцов.", "Задаёт максимум шкалы столбцов."],
    lineNote: "Горизонтальные позиции начинаются с 0. Для одиннадцати значений естественный диапазон — от 0 до 10.", barNote: "Без явных цветов DocCells чередует синий и красный. Следующие сегменты используют color3, color4 и т. д.", columnNote: "ymin и ymax не применяются к winloss, где результаты нормализуются до -1, 0 и 1.", footer: "Документация формул DocCells",
  },
  hi: {
    name: "हिन्दी", tagline: "सेल चार्ट · फ़ॉर्मूला संदर्भ", subtitle: "स्प्रेडशीट सेल के भीतर सीधे डेटा-आधारित छोटा चार्ट बनाएँ।", language: "भाषा", contents: "इस पृष्ठ पर", syntax: "सिंटैक्स", syntaxIntro: "SPARKLINE एक डेटा रेंज और वैकल्पिक दो-कॉलम सेटिंग मैट्रिक्स स्वीकार करता है।", parameters: "पैरामीटर", data: "डेटा", dataDescription: "दिखाए जाने वाले संख्यात्मक मानों की रेंज या सरणी।", options: "विकल्प", optionsDescription: "हर पंक्ति में एक विकल्प नाम और एक मान वाली वैकल्पिक मैट्रिक्स।", types: "चार्ट प्रकार", typesIntro: "charttype से प्रदर्शन मोड चुनें। डिफ़ॉल्ट रूप से line उपयोग होता है।", common: "सामान्य विकल्प", commonIntro: "ये सेटिंग सभी चार्ट प्रकारों पर लागू होती हैं।", specific: "चार्ट प्रकार के अनुसार विकल्प", specificIntro: "हर प्रकार की स्केल, रंग और हाइलाइट को समायोजित करें।", examples: "तैयार उदाहरण", examplesIntro: "फ़ॉर्मूला कॉपी करें और अपनी शीट के अनुसार रेंज व रंग बदलें।", option: "विकल्प", values: "स्वीकृत मान", effect: "प्रभाव", note: "ध्यान दें", copy: "फ़ॉर्मूला कॉपी करें", copied: "कॉपी हो गया", line: "लाइन", bar: "बार", column: "कॉलम", winloss: "जीत / हार",
    typeDescriptions: ["रुझान दिखाने वाली सतत लाइन।", "अनुपातिक क्षैतिज स्टैक्ड बार।", "मानों के अनुसार स्केल किए गए लंबवत कॉलम।", "धनात्मक, शून्य और ऋणात्मक परिणामों को उनके चिह्न में बदलता है।"],
    commonEffects: ["प्रदर्शन मोड चुनता है।", "खाली सेल को अनदेखा करता है या शून्य में बदलता है।", "गैर-संख्यात्मक मानों को अनदेखा करता है या शून्य में बदलता है।", "प्रदर्शन दिशा उलटता है।"],
    lineEffects: ["लाइन का रंग तय करता है।", "धनात्मक लाइन मोटाई तय करता है।", "पहली क्षैतिज स्थिति तय करता है।", "अंतिम क्षैतिज स्थिति तय करता है।", "लंबवत स्केल का न्यूनतम तय करता है।", "लंबवत स्केल का अधिकतम तय करता है।"],
    barEffects: ["पूरी सेल चौड़ाई भरने वाला मान तय करता है।", "पहले खंड का रंग तय करता है।", "दूसरे खंड का रंग तय करता है; color3, color4 आदि भी समर्थित हैं।"],
    columnEffects: ["कॉलम का सामान्य रंग तय करता है।", "ऋणात्मक मानों का रंग तय करता है।", "सबसे कम मान हाइलाइट करता है।", "सबसे अधिक मान हाइलाइट करता है।", "पहला मान हाइलाइट करता है।", "अंतिम मान हाइलाइट करता है।", "शून्य अक्ष दिखाता या छिपाता है।", "शून्य अक्ष का रंग तय करता है।", "कॉलम स्केल का न्यूनतम तय करता है।", "कॉलम स्केल का अधिकतम तय करता है।"],
    lineNote: "क्षैतिज स्थितियाँ 0 से शुरू होती हैं। ग्यारह मानों के लिए प्राकृतिक रेंज 0 से 10 है।", barNote: "स्पष्ट रंग न देने पर DocCells नीला और लाल बारी-बारी से उपयोग करता है। अगले खंड color3, color4 आदि उपयोग करते हैं।", columnNote: "ymin और ymax winloss पर लागू नहीं होते; वहाँ परिणाम -1, 0 और 1 में सामान्यीकृत होते हैं।", footer: "DocCells फ़ॉर्मूला दस्तावेज़",
  },
  zh: {
    name: "简体中文", tagline: "单元格图表 · 公式参考", subtitle: "直接在电子表格单元格中创建由数据驱动的迷你图。", language: "语言", contents: "本页内容", syntax: "语法", syntaxIntro: "SPARKLINE 接受一个数据区域和一个可选的两列设置矩阵。", parameters: "参数", data: "数据", dataDescription: "包含要绘制的数值的区域或数组。", options: "选项", optionsDescription: "可选矩阵，每行包含一个选项名称和一个值。", types: "图表类型", typesIntro: "使用 charttype 选择显示模式。默认使用 line。", common: "通用选项", commonIntro: "这些设置适用于所有图表类型。", specific: "各类型选项", specificIntro: "调整每种显示模式的比例、颜色和突出显示。", examples: "可直接使用的示例", examplesIntro: "复制公式，然后根据工作表调整区域和颜色。", option: "选项", values: "可接受的值", effect: "作用", note: "提示", copy: "复制公式", copied: "已复制", line: "折线", bar: "条形", column: "柱形", winloss: "盈亏",
    typeDescriptions: ["用于显示趋势的连续折线。", "按比例显示的水平堆叠条。", "根据数值缩放的垂直柱形。", "将正、零和负结果简化为符号。"],
    commonEffects: ["选择显示模式。", "忽略空白单元格或将其转换为零。", "忽略非数字值或将其转换为零。", "反转显示方向。"],
    lineEffects: ["设置折线颜色。", "设置正数线宽。", "设置第一个水平位置。", "设置最后一个水平位置。", "设置纵轴最小值。", "设置纵轴最大值。"],
    barEffects: ["定义占满整个单元格宽度的值。", "设置第一个区段的颜色。", "设置第二个区段的颜色；还支持 color3、color4 等。"],
    columnEffects: ["设置柱形的默认颜色。", "设置负值的颜色。", "突出显示最低值。", "突出显示最高值。", "突出显示第一个值。", "突出显示最后一个值。", "显示或隐藏零轴。", "设置零轴颜色。", "设置柱形比例的最小值。", "设置柱形比例的最大值。"],
    lineNote: "水平位置从 0 开始。包含 11 个值时，自然范围为 0 到 10。", barNote: "未指定颜色时，DocCells 会交替使用蓝色和红色。后续区段可使用 color3、color4 等。", columnNote: "ymin 和 ymax 不适用于 winloss；其结果会归一化为 -1、0 和 1。", footer: "DocCells 公式文档",
  },
  zh_tw: {
    name: "繁體中文", tagline: "儲存格圖表 · 公式參考", subtitle: "直接在試算表儲存格中建立由資料驅動的迷你圖。", language: "語言", contents: "本頁內容", syntax: "語法", syntaxIntro: "SPARKLINE 接受一個資料範圍和一個選用的兩欄設定矩陣。", parameters: "參數", data: "資料", dataDescription: "包含要繪製數值的範圍或陣列。", options: "選項", optionsDescription: "選用矩陣，每列包含一個選項名稱和一個值。", types: "圖表類型", typesIntro: "使用 charttype 選擇顯示模式。預設使用 line。", common: "通用選項", commonIntro: "這些設定適用於所有圖表類型。", specific: "各類型選項", specificIntro: "調整每種顯示模式的比例、色彩和醒目提示。", examples: "可直接使用的範例", examplesIntro: "複製公式，然後依工作表調整範圍和色彩。", option: "選項", values: "可接受的值", effect: "作用", note: "提示", copy: "複製公式", copied: "已複製", line: "折線", bar: "長條", column: "直條", winloss: "盈虧",
    typeDescriptions: ["用於顯示趨勢的連續折線。", "按比例顯示的水平堆疊長條。", "根據數值縮放的垂直直條。", "將正、零和負結果簡化為符號。"],
    commonEffects: ["選擇顯示模式。", "忽略空白儲存格或將其轉換為零。", "忽略非數字值或將其轉換為零。", "反轉顯示方向。"],
    lineEffects: ["設定折線色彩。", "設定正數線寬。", "設定第一個水平位置。", "設定最後一個水平位置。", "設定縱軸最小值。", "設定縱軸最大值。"],
    barEffects: ["定義占滿整個儲存格寬度的值。", "設定第一個區段的色彩。", "設定第二個區段的色彩；也支援 color3、color4 等。"],
    columnEffects: ["設定直條的預設色彩。", "設定負值的色彩。", "醒目提示最低值。", "醒目提示最高值。", "醒目提示第一個值。", "醒目提示最後一個值。", "顯示或隱藏零軸。", "設定零軸色彩。", "設定直條比例的最小值。", "設定直條比例的最大值。"],
    lineNote: "水平位置從 0 開始。包含 11 個值時，自然範圍為 0 到 10。", barNote: "未指定色彩時，DocCells 會交替使用藍色和紅色。後續區段可使用 color3、color4 等。", columnNote: "ymin 和 ymax 不適用於 winloss；其結果會正規化為 -1、0 和 1。", footer: "DocCells 公式文件",
  },
};

const localizedSeparators = new Set(["fr", "es", "pt", "de", "el", "it", "nl", "ru"]);
const locale = document.body.dataset.locale || "en";
const text = translations[locale] || translations.en;
const usesLocalizedSeparators = localizedSeparators.has(locale);
const argumentSeparator = usesLocalizedSeparators ? ";" : ",";
const pairSeparator = usesLocalizedSeparators ? "\\" : ",";

const matrix = (rows) => `{${rows.map(([name, value]) => `"${name}"${pairSeparator}${value}`).join(";")}}`;
const formula = (range, rows = []) => `=SPARKLINE(${range}${rows.length ? `${argumentSeparator}${matrix(rows)}` : ""})`;
const examples = {
  basic: formula("B2:B12"),
  line: formula("B2:B12", [["charttype", '"line"'], ["color", '"#2563EB"'], ["linewidth", "3"], ["ymin", "0"], ["ymax", "20"]]),
  bar: formula("B2:C2", [["charttype", '"bar"'], ["max", "100"], ["color1", '"#2563EB"'], ["color2", '"#EF4444"']]),
  column: formula("B2:B12", [["charttype", '"column"'], ["color", '"#2563EB"'], ["negcolor", '"#EF4444"'], ["axis", "true"], ["axiscolor", '"#64748B"']]),
  winloss: formula("B2:B12", [["charttype", '"winloss"'], ["color", '"#16A34A"'], ["negcolor", '"#EF4444"'], ["axis", "true"]]),
};

const commonRows = [
  ["charttype", "line · bar · column · winloss"],
  ["empty", "ignore · zero"],
  ["nan", "ignore · convert"],
  ["rtl", "true · false"],
];
const lineRows = [["color", "color"], ["linewidth", "> 0"], ["xmin", "number"], ["xmax", "number"], ["ymin", "number"], ["ymax", "number"]];
const barRows = [["max", "> 0"], ["color1", "color"], ["color2", "color"]];
const columnRows = [["color", "color"], ["negcolor", "color"], ["lowcolor", "color"], ["highcolor", "color"], ["firstcolor", "color"], ["lastcolor", "color"], ["axis", "true · false"], ["axiscolor", "color"], ["ymin", "number"], ["ymax", "number"]];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const codeCard = (label, code) => `
  <div class="code-card">
    <div class="code-label">${escapeHtml(label)}</div>
    <code>${escapeHtml(code)}</code>
    <button class="copy-button" type="button" data-copy="${escapeHtml(code)}" aria-label="${escapeHtml(text.copy)}" title="${escapeHtml(text.copy)}">⧉</button>
  </div>`;

const optionTable = (rows, effects) => `
  <div class="table-wrap">
    <table>
      <thead><tr><th>${text.option}</th><th>${text.values}</th><th>${text.effect}</th></tr></thead>
      <tbody>${rows.map(([name, values], index) => `<tr><td><code>${name}</code></td><td>${values}</td><td>${effects[index]}</td></tr>`).join("")}</tbody>
    </table>
  </div>`;

const note = (content) => `<div class="note"><span class="note-icon">i</span><div><strong>${text.note}.</strong> ${content}</div></div>`;
const languageOptions = languages.map(([code, label]) => `<option value="${code}.html"${code === locale ? " selected" : ""}>${label}</option>`).join("");
const typeKeys = ["line", "bar", "column", "winloss"];

document.documentElement.lang = locale === "zh_tw" ? "zh-TW" : locale;
document.title = `SPARKLINE — ${text.name} — DocCells`;
document.getElementById("app").innerHTML = `
  <div class="topbar"></div>
  <div class="page-shell">
    <header class="masthead">
      <div class="masthead-tools">
        <div class="brand"><span class="brand-mark">▦</span> DocCells</div>
        <label class="language-picker"><span>${text.language}</span><select id="language-select" aria-label="${text.language}">${languageOptions}</select></label>
      </div>
      <div class="hero-grid">
        <div>
          <div class="eyebrow">${text.tagline}</div>
          <h1>SPARKLINE</h1>
          <p>${text.subtitle}</p>
        </div>
        <div class="hero-preview" aria-hidden="true">
          <div class="hero-preview-label">A12</div>
          <div class="cell-preview">
            <svg viewBox="0 0 250 86" role="img">
              <path d="M5 65 C28 59 37 70 57 52 S92 24 111 38 S144 69 165 44 S202 19 245 25" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
              <path d="M5 76H245" stroke="#dbe4f2" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </header>

    <div class="layout">
      <nav class="toc" aria-label="${text.contents}">
        <p class="toc-title">${text.contents}</p>
        <a href="#syntax">${text.syntax}</a>
        <a href="#types">${text.types}</a>
        <a href="#common">${text.common}</a>
        <a href="#specific">${text.specific}</a>
        <a href="#examples">${text.examples}</a>
      </nav>

      <main class="content">
        <section class="doc-section" id="syntax">
          <p class="section-kicker">01 · SPARKLINE</p>
          <h2>${text.syntax}</h2>
          <p class="section-intro">${text.syntaxIntro}</p>
          ${codeCard(text.syntax, `=SPARKLINE(${text.data}${argumentSeparator} [${text.options}])`)}
          <h3>${text.parameters}</h3>
          <div class="parameter-grid">
            <div class="parameter-card"><code>${text.data}</code><p>${text.dataDescription}</p></div>
            <div class="parameter-card"><code>${text.options}</code><p>${text.optionsDescription}</p></div>
          </div>
          ${codeCard(text.examples, examples.basic)}
        </section>

        <section class="doc-section" id="types">
          <p class="section-kicker">02 · charttype</p>
          <h2>${text.types}</h2>
          <p class="section-intro">${text.typesIntro}</p>
          <div class="type-grid">${typeKeys.map((key, index) => `<article class="type-card"><div class="type-card-head"><span class="type-swatch ${key}"></span><code>${key}</code></div><p>${text.typeDescriptions[index]}</p></article>`).join("")}</div>
        </section>

        <section class="doc-section" id="common">
          <p class="section-kicker">03 · ${text.options}</p>
          <h2>${text.common}</h2>
          <p class="section-intro">${text.commonIntro}</p>
          ${optionTable(commonRows, text.commonEffects)}
        </section>

        <section class="doc-section" id="specific">
          <p class="section-kicker">04 · ${text.options}</p>
          <h2>${text.specific}</h2>
          <p class="section-intro">${text.specificIntro}</p>
          <h3>${text.line} · <code>line</code></h3>
          ${optionTable(lineRows, text.lineEffects)}
          ${note(text.lineNote)}
          <h3>${text.bar} · <code>bar</code></h3>
          ${optionTable(barRows, text.barEffects)}
          ${note(text.barNote)}
          <h3>${text.column} / ${text.winloss} · <code>column</code> · <code>winloss</code></h3>
          ${optionTable(columnRows, text.columnEffects)}
          ${note(text.columnNote)}
        </section>

        <section class="doc-section" id="examples">
          <p class="section-kicker">05 · ${text.examples}</p>
          <h2>${text.examples}</h2>
          <p class="section-intro">${text.examplesIntro}</p>
          <div class="examples-grid">
            ${codeCard(text.line, examples.line)}
            ${codeCard(text.bar, examples.bar)}
            ${codeCard(text.column, examples.column)}
            ${codeCard(text.winloss, examples.winloss)}
          </div>
        </section>
      </main>
    </div>
    <footer class="footer">${text.footer} · SPARKLINE</footer>
  </div>`;

document.getElementById("language-select").addEventListener("change", (event) => {
  window.location.href = event.target.value;
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      const previousTitle = button.title;
      button.textContent = "✓";
      button.title = text.copied;
      window.setTimeout(() => {
        button.textContent = "⧉";
        button.title = previousTitle;
      }, 1200);
    } catch {
      button.title = button.dataset.copy;
    }
  });
});
