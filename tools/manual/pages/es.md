=== groups | Primeros pasos | Introducir y calcular | Presentar | Aprovechar los datos | Difundir | Referencia

=== categories | Función | Descripción y ejemplo | Matemáticas | Trigonometría | Lógica | Estadística | Distribuciones de probabilidad y contrastes | Búsqueda y listas | Texto | Fechas y horas | Finanzas | Bases de numeración, unidades, funciones especiales | Números complejos en texto | Información

=== index | Inicio
# Manual de usuario de DocCells

> DocCells es una hoja de cálculo multilingüe que se utiliza en el navegador, sin instalación ni cuenta. Abre y guarda libros de Excel (.xlsx).

<div class="buttons"><a href="../../index.html?lang=es">Abrir DocCells</a></div>

![La ventana de DocCells: menús, botones, barra de fórmulas, una tabla de notas con formato y un gráfico](interface.webp 1280x760)

## Lo esencial en seis gestos

| Para | Hacer |
| --- | --- |
| Introducir datos | hacer clic en una celda, escribir, [[Enter]] ([introducir datos](saisie.html)) |
| Calcular | escribir `=` y la fórmula: `=AVERAGE(B2:B6)` ([las fórmulas](formules.html)) |
| Copiar una fórmula | arrastrar el controlador azul de la selección, o [[Ctrl+D]] ([rellenar](selection.html#recopier)) |
| Dar formato | menú **%format%**, o los botones ([formato](mise-en-forme.html)) |
| Trazar un gráfico | seleccionar los datos, {chart} ([gráficos](graphiques.html)) |
| Guardar | [[Ctrl+S]]: un archivo de Excel ([abrir y guardar](demarrage.html)) |

## Índice {#sommaire}

- [Abrir y guardar](demarrage.html): archivos, recientes, recuperación, Google Sheets, idioma.
- [La interfaz](interface.html): menús, botones, barra de fórmulas, pestañas, zoom.
- [Introducir datos](saisie.html), [seleccionar, copiar, rellenar](selection.html).
- [Las fórmulas](formules.html), [listas y complejos](listes.html), [rangos con nombre](noms.html), [las hojas](feuilles.html).
- [Formatos de número](nombres.html), [formato](mise-en-forme.html), [formato condicional](conditionnelle.html), [filas y columnas](lignes-colonnes.html).
- [Ordenar, filtrar, buscar](tri-filtre.html), [casillas, listas y calendario](controles.html), [gráficos y minigráficos](graphiques.html), [imágenes y enlaces](images-liens.html), [imprimir](impression.html).
- [Proteger](protection.html) un libro para alumnos, [compartirlo e integrarlo](partager.html), usarlo [con DocGeo](docgeo.html).
- Referencia: [las %functions% funciones](fonctions.html), [atajos](raccourcis.html), [compatibilidad con Excel](excel.html), [preguntas frecuentes](faq.html).

## Convenciones

- Los botones se indican con su icono ({bold} negrita).
- [[Ctrl]] equivale a [[⌘]] en Mac.
- Las fórmulas están escritas en español: nombres de funciones en español, coma decimal, punto y coma entre los argumentos. DocCells las muestra en el idioma de la interfaz.
- Para buscar en el manual: [[/]] o [[Ctrl+K]]. Las palabras pueden escribirse en cualquier orden y sin acentos; el nombre de una función, en español o en inglés, lleva a su fila.

=== demarrage
# Abrir y guardar

## Empezar {#nouveau}

DocCells se abre con un libro vacío de una hoja. Para volver a empezar con un libro vacío, recargue la página o abra DocCells en otra pestaña del navegador.

## Abrir un libro {#ouvrir}

| Medio | Efecto |
| --- | --- |
| {open}, **%file% › %open%**, [[Ctrl+O]] | elegir un archivo `.xlsx` del ordenador |
| Arrastrar el archivo a la página | un velo indica dónde soltarlo; el libro sustituye al que estaba abierto |
| **%file% › %openRecent%** | los diez últimos archivos abiertos o guardados (Chrome y Edge) |
| Un enlace `?url=…` | un libro en línea o un Google Sheet ([compartir](partager.html#url)) |

El único formato que se lee es Excel `.xlsx`. Los antiguos `.xls`, los `.ods` y los `.csv` deben convertirse antes. Lo que se conserva de un archivo de Excel se describe en [Compatibilidad con Excel](excel.html).

warn: Abrir un libro sustituye al que se muestra: guarde antes los cambios.

### Archivos recientes {#recents}

El navegador puede volver a pedir permiso para leer el archivo. Un archivo movido, renombrado o eliminado se retira de la lista. **%clearRecentFiles%** la vacía. La lista permanece en este navegador, en este ordenador.

## Guardar {#enregistrer}

### Chrome y Edge

| Comando | Efecto |
| --- | --- |
| {save}, **%file% › %save%**, [[Ctrl+S]] | la primera vez pregunta dónde guardar el archivo; después lo sustituye sin preguntar |
| **%file% › %saveAs%** | elegir otro archivo |

Un archivo abierto con {open}, desde los recientes o soltado en la página se vuelve a guardar en su sitio; el navegador pide una vez permiso para modificarlo.

El nombre del libro está al final de la barra de menús. Un punto rojo indica cambios sin guardar; el título de la pestaña del navegador empieza entonces por ●.

### Firefox, Safari

Estos navegadores no permiten escribir en un archivo. **%file% › %export%** o [[Ctrl+S]] descarga el libro, con el nombre del libro abierto.

## Recuperar un libro no guardado {#recuperer}

Mientras hay cambios sin guardar, DocCells conserva una copia en el navegador, actualizada menos de un segundo después de cada cambio. Si la página se cierra sin guardar, la siguiente apertura de DocCells propone, con la fecha de la copia, restaurarla (**%restore%**) o no (**%ignore%**).

- Guardar, exportar o abrir otro libro borra esta copia.
- Ignorar la copia la elimina definitivamente.
- La copia solo se hace cuando DocCells ocupa toda la página, no cuando está integrado en otra.

## Idioma {#langue}

DocCells toma el idioma del navegador entre los doce de su interfaz: alemán, chino simplificado y tradicional, español, francés, griego, hindi, inglés, italiano, neerlandés, portugués, ruso. Para los demás se usa el inglés. `?lang=es` en la dirección impone un idioma.

El idioma cambia los menús, los nombres de funciones, el separador decimal, el símbolo monetario y el orden de las fechas mostradas. El archivo guardado no depende de él: un libro escrito en francés se abre en alemán con sus fórmulas en alemán.

=== interface
# La interfaz

![La ventana de DocCells](interface.webp 1280x760)

De arriba abajo: la barra de menús, la barra de botones, la barra de fórmulas, la hoja, las pestañas de hojas y el zoom.

## Los menús {#menus}

| Menú | Contenido |
| --- | --- |
| **%file%** | [abrir, guardar](demarrage.html), [imprimir](impression.html) |
| **%edit%** | deshacer, rehacer, [rellenar hacia abajo, hacia la derecha](selection.html#recopier) |
| **%view%** | [cuadrícula](mise-en-forme.html#quadrillage), [inmovilizar](lignes-colonnes.html#figer) |
| **%insert%** | [imagen](images-liens.html), [gráfico](graphiques.html), [casilla, lista desplegable](controles.html) |
| **%format%** | [número](nombres.html), [texto, alineación, combinación](mise-en-forme.html), [colores alternos](mise-en-forme.html#alternees), [formato condicional](conditionnelle.html) |
| **%data%** | [ordenar y filtrar](tri-filtre.html) |
| **%tools%** | [proteger](protection.html), este manual (**%manual%**), DocTools, código fuente, versión (**%about%**) |

Una marca señala una opción activa: cuadrícula visible, celdas inmovilizadas, negrita, filtro, libro protegido.

![El menú de formato y los formatos de número](menus.webp 1280x620)

## La barra de botones {#boutons}

| Botón | Función |
| --- | --- |
| {open} {save} | [abrir, guardar](demarrage.html) |
| {gridlines} | mostrar u ocultar la [cuadrícula](mise-en-forme.html#quadrillage) |
| {alternating} | [colores alternos](mise-en-forme.html#alternees) |
| {conditional} | [formato condicional](conditionnelle.html) |
| {protect} | [proteger](protection.html); azulado cuando el libro está protegido |
| {chart} | [insertar un gráfico](graphiques.html) |
| {image} | [insertar una imagen](images-liens.html) |
| {undo} {redo} | deshacer, rehacer |
| {clear-format} | borrar el formato |
| {percentage-format} {number-decrease} {number-increase} | [porcentaje, menos o más decimales](nombres.html) |
| **%fGeneral%**, **Arial**, **10** | formato de número, fuente, tamaño |
| {bold} {italic} {underline} | negrita, cursiva, subrayado |
| {font-color} {background} | color del texto, del fondo |
| {border-all} {merge-all} | [bordes, combinación](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | alineaciones, rotación, ajuste de texto |
| {freeze-row-col} | [inmovilizar](lignes-colonnes.html#figer) |
| {formula-sum} | [suma automática](formules.html#somme) y otras fórmulas |
| {filter} | [ordenar y filtrar](tri-filtre.html) |

La flechita de un botón abre sus opciones; el propio botón repite la última. En una ventana estrecha, los últimos botones están detrás de {more}.

## La barra de fórmulas {#barre}

- A la izquierda, el **cuadro de nombres**: la dirección de la selección, o el [nombre del rango](noms.html). Su flecha lista los rangos con nombre y abre el administrador de nombres.
- A la derecha de *fx*, el contenido de la celda, incluida la fórmula: puede modificarse ahí.

## La hoja {#feuille}

- El clic derecho abre un menú según el lugar: celda, encabezado de columna o de fila, pestaña de hoja.
- La hoja inicial tiene 84 filas y 60 columnas (A a BH). Se añaden más con el clic derecho, **%insertCells%** ([filas y columnas](lignes-colonnes.html)).
- El controlador azul de la esquina de la selección [rellena](selection.html#recopier).

## Pestañas y zoom {#zoom}

Abajo, {plus} añade una hoja, {all-sheets} las lista todas ([las hojas](feuilles.html)). A la derecha, **−** y **+** ajustan el zoom; un clic en el porcentaje propone de 10 % a 400 %.

## Deshacer {#annuler}

{undo} o [[Ctrl+Z]] deshace, {redo}, [[Ctrl+Y]] o [[Ctrl+Shift+Z]] rehace: entradas, pegados, formatos, inserciones. El historial empieza de cero al abrir un libro, al mostrar u ocultar la cuadrícula, al protegerlo, o al añadir un nombre o una regla de formato condicional. Los gráficos no forman parte de él: se [modifican o eliminan](graphiques.html#modifier) con sus botones.

=== saisie
# Introducir datos

## Escribir en una celda {#ecrire}

| Acción | Efecto |
| --- | --- |
| escribir en una celda seleccionada | sustituye su contenido |
| doble clic, [[F2]] o [[Enter]] | modifica su contenido |
| [[Enter]] | valida y baja una celda |
| clic en otra celda | valida |
| [[Esc]] | abandona la entrada |
| [[Alt+Enter]] | nueva línea dentro de la celda |
| [[Delete]] o [[⌫]] | vacía las celdas seleccionadas, incluidas casillas y listas desplegables; su formato permanece |
| clic derecho › **%clearContent%** | igual |

Durante una entrada, las flechas mueven el cursor en el texto. Fuera de ella, las flechas, [[Tab]] y [[Shift+Tab]] cambian de celda.

## Lo que DocCells reconoce {#types}

| Se escribe | Se obtiene |
| --- | --- |
| `12`, `-3`, `1e5` | un número, alineado a la derecha |
| `n:2.5` | un número decimal; la coma es el separador español |
| `n:1,234.5` | el número 1234,5; para conservar el punto de los millares en pantalla, elegir un [formato](nombres.html) |
| `25%`, `n:2.5%` | un porcentaje |
| `2026-11-25`, `2026/11/25` | una fecha |
| `2026-11-25 14:30` | una fecha y una hora |
| `TRUE`, `FALSE` | un valor lógico |
| `n:[2, 1]` | una [lista](listes.html) |
| `=A1+B1` | una [fórmula](formules.html) |
| cualquier otra cosa | un texto, alineado a la izquierda |

### Fechas {#dates}

Una fecha se escribe con el año primero: `2026-11-25`. `25/11/2026` queda como texto, con el que no se calcula. Para mostrarla a la española, elegir **%format% › %number% › %fDate%** (`%xDate%`) o un [formato personalizado](nombres.html#personnalise).

Un doble clic en una celda de fecha abre un [calendario](controles.html#calendrier). `=TODAY()` da la fecha de hoy.

### Textos hechos de cifras {#textes}

Un número que empieza por cero pierde ese cero: `007` pasa a ser 7. Para conservarlo, dar antes a las celdas el formato **%fText%** (**%format% › %number% › %fText%**), o empezar con un apóstrofo: `'007`.

## Errores de entrada frecuentes {#erreurs}

| Se ve | Causa |
| --- | --- |
| un número alineado a la izquierda | es un texto: un punto decimal donde hace falta una coma, una unidad (`12 €`), un espacio de más |
| `46351` en lugar de una fecha | una fecha en formato **%fGeneral%**: darle el formato **%fDate%** |
| el texto cortado por la celda vecina | ensanchar la [columna](lignes-colonnes.html#taille), o elegir **%wrap%** |

Para una unidad, introducir solo el número y darle un [formato](nombres.html): moneda, o personalizado como `c:0.00 "m"`.

=== selection
# Seleccionar, copiar, rellenar

## Seleccionar {#selectionner}

| Acción | Selección |
| --- | --- |
| clic | una celda |
| arrastrar | un rango |
| clic, luego [[Shift]] y clic | el rango entre ambos |
| [[Shift]] y flecha | amplía el rango |
| [[Ctrl]] y clic o arrastre | un rango más |
| clic en una letra, un número | una columna, una fila |
| arrastrar sobre las letras, los números | varias columnas, varias filas |
| [[Ctrl+A]] | toda la hoja |
| cuadro de nombres, flecha | un [rango con nombre](noms.html) |

La dirección de la selección está en el cuadro de nombres, a la izquierda de la barra de fórmulas.

## Copiar, cortar, pegar {#copier}

[[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]], o **%copy%** y **%paste%** del clic derecho.
- **%paste%** del clic derecho pega los valores, sin las fórmulas; [[Ctrl+V]] pega las fórmulas.
- Una fórmula pegada sigue su nuevo lugar: `=B2` copiada una fila más abajo pasa a ser `=B3`. El signo `$` fija una fila o una columna ([referencias](formules.html#references)).
- Una fórmula cortada conserva sus referencias.
- Una tabla copiada de Excel, de Numbers, de una página web o de un texto separado por tabulaciones se pega celda por celda; los números con coma y las listas se reconocen como al teclearlos.
- No se cortan ni se pegan varios rangos a la vez.

## Mover {#deplacer}

Arrastrar el borde de la selección: las celdas se mueven, con su formato.

## Rellenar {#recopier}

El controlador azul, en la esquina inferior derecha de la selección, se arrastra hacia abajo, arriba, la izquierda o la derecha.

| Celdas de partida | El controlador da |
| --- | --- |
| una fórmula | la fórmula, con sus referencias desplazadas |
| dos números, 1 y 2 | la serie: 3, 4, 5… |
| un solo número, texto o fecha | el mismo valor |
| dos fechas | las fechas siguientes, con el mismo intervalo |

![La serie 1, 2 prolongada con el controlador](recopie.webp 760x300)

Sin el ratón, o en un rango grande:

| Comando | Efecto |
| --- | --- |
| **%edit% › %fillDown%**, [[Ctrl+D]] | la primera fila del rango seleccionado se copia en las siguientes |
| **%edit% › %fillRight%**, [[Ctrl+R]] | la primera columna se copia en las siguientes |

Si hay una sola fila seleccionada, [[Ctrl+D]] copia en ella la de arriba; si hay una sola columna, [[Ctrl+R]] copia la de la izquierda. Estos comandos siempre copian, sin hacer series, con formatos, bordes, casillas y listas desplegables.

tip: Para una fórmula en toda una columna: escribirla arriba, seleccionar desde esa celda hasta la última, [[Ctrl+D]].

=== formules
# Las fórmulas

## Escribir una fórmula {#ecrire}

Una fórmula empieza por `=`. Contiene números, textos entre comillas, referencias a celdas, operadores y [funciones](fonctions.html).

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="Total: "&SUM(B2:B6)
```

La celda muestra el resultado, la barra de fórmulas la fórmula. Las celdas que dependen de una celda modificada se recalculan al instante.

En español, la coma es decimal y el punto y coma separa los argumentos: `=ROUND(3.14159, 2)`. Los nombres de funciones se escriben en minúsculas o mayúsculas, en español o en inglés: `=suma(B2:B6)` y `r:=SUM(B2:B6)` se aceptan.

## Señalar las celdas con el ratón {#souris}

Al escribir una fórmula, un clic en una celda de la hoja inserta su dirección, un arrastre inserta el rango. Cada referencia tiene su color, en la fórmula y en la hoja.

## El autocompletado {#completion}

Desde las primeras letras de un nombre, DocCells propone las funciones que las contienen: [[↑]] [[↓]] para recorrer, [[Enter]], [[Tab]] o un clic para elegir. Tras el paréntesis de apertura, una ayuda recuerda los argumentos.

![Las funciones propuestas tras las primeras letras](completion.webp 760x560)

![La ayuda de una función](aide-formule.webp 760x560)

## La suma automática {#somme}

{formula-sum} escribe una suma. Su flecha propone **%sum%**, **%average%**, **%count%**, **%max%**, **%min%** y **%allFormulas%**: la biblioteca, donde se busca una función por su nombre, su descripción o su categoría.

![La biblioteca de fórmulas](bibliotheque.webp 1280x760)

## Operadores {#operateurs}

| Operador | Función |
| --- | --- |
| `+` `-` `*` `/` | cuatro operaciones |
| `^` | potencia: `=2^10` |
| `%` | porcentaje: `=20%*B2` |
| `&` | une textos: `=A2&" "&B2` |
| `=` `<>` | igual, distinto |
| `<` `>` `<=` `>=` | comparaciones |
| `( )` | prioridad |

Las potencias van antes que los productos y cocientes, luego las sumas y las comparaciones. `=-2^2` da −4 (4 en Excel).

## Referencias {#references}

| Escritura | Designa |
| --- | --- |
| `B2` | una celda; sigue el relleno |
| `$B$2` | la misma celda, aunque se rellene |
| `B$2`, `$B2` | fila fija, columna fija |
| `B2:D6` | un rango |
| `B:B`, `2:2` | una columna, una fila entera |
| `%sheet%2!B2`, `'Notas 2'!B2` | una celda de [otra hoja](feuilles.html#references) |
| `notas` | un [rango con nombre](noms.html) |

Rellenada hacia abajo, `=B2*$B$1` pasa a ser `=B3*$B$1`, `=B4*$B$1`…

## Condiciones {#conditions}

```
=IF(B2>=10, "aprobado", "suspenso")
=IF(AND(B2>=10, C2>=10), "sí", "no")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- Los valores lógicos se escriben `@TRUE()` y `@FALSE()`, con los paréntesis. Se muestran como TRUE y FALSE.
- Un criterio es un texto: `">10"`, `"<>0"`, `"Ana"`. Los comodines `*` y `?` no se reconocen.
- Una celda vacía se reconoce con `=B2=""`; no es igual a 0.

## Buscar en una tabla {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

La primera busca Léa en la primera columna de la tabla y devuelve la tercera; el último argumento 0 pide el valor exacto. La segunda da el nombre de quien tiene la mejor nota.

## Fechas y horas {#dates}

Una fecha es un número de días, una hora una fracción de día: en celdas, se suman y se restan.

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

Una fecha dada por `@DATE` o `@TODAY` debe pasar por una celda para sumarle algo: `=TODAY()+1` da `#VALUE!`, pero si A1 contiene `=TODAY()`, `=A1+1` da mañana. El resultado es un número: darle un formato **%fDate%**.

## Los errores {#erreurs}

| Se muestra | Causa |
| --- | --- |
| `#NAME?` | nombre desconocido: error de tecleo, función [no calculada](fonctions.html#non-calculees), `@TRUE` sin paréntesis, texto sin comillas |
| `#VALUE!` | tipo inesperado: un texto donde hace falta un número |
| `DIV/0` | división por cero o por una celda vacía |
| `#N/A` | valor no encontrado (`@MATCH`, `@VLOOKUP`), o `GEO` fuera de DocGeo |
| `#REF!` | celda u hoja que no existe |
| `#NUM!` | número fuera del dominio: `=SQRT(-1)` |
| `#ERROR!` | fórmula mal escrita, o función no calculada |

`@IFERROR` sustituye el error de una función (`#N/A`, `#NUM!`): `=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "ausente")`. No sustituye el de un cálculo (`DIV/0`, `#VALUE!`): contra una división por cero, comprobar el divisor, `=IF(B2, B3/B2, "")`, que sirve tanto para un cero como para una celda vacía.

=== listes
# Listas y complejos

> Una celda de DocCells puede contener una lista de números. Una lista de dos números es también un punto del plano, o un número complejo.

## Escribir una lista {#ecrire}

Entre corchetes, con los elementos separados por puntos y comas. Una lista puede contener listas.

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

Sin `=`, la lista es un valor; con `=`, sus elementos pueden ser cálculos. En un idioma con punto decimal, los elementos se separan con comas: `r:[2, 1]`.

## Operaciones {#operations}

| Operación | Resultado |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`: término a término, longitudes iguales |
| `n:[1, 2, 3] * 2`, `n:[2, 4, 6] / 2` | `n:[2, 4, 6]`, `n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`: producto de complejos |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`: cociente de complejos |
| `n:[2, 1] + 3` | `n:[5, 1]`: 3 es un complejo real |
| `n:[0, 1]^2` | `n:[-1, 0]`, salvo redondeo |
| `n:[8, 0]^(1/3)` | la lista de las tres raíces cúbicas |
| `n:-[2, 1]` | `n:[-2, -1]` |

Cualquier otra combinación da `#VALUE!`: producto de dos listas de tres números, longitudes distintas, texto.

## Listas y funciones {#fonctions}

Una función ve una lista como un rango:

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` da el segundo elemento de la lista contenida en A1: la ordenada de un punto, la parte imaginaria de un complejo. Algunas [funciones](fonctions.html) devuelven una lista: `@FREQUENCY`, `@LINEST`, `@TRANSPOSE`, `@UNIQUE`, `@SPLIT`.

## Visualización {#affichage}

Los botones {number-decrease} {number-increase} y los [formatos de número](nombres.html) se aplican a cada número de la lista: `n:[-0.14, 0.27]`. Los valores exactos se conservan.

## Ejemplo: una sucesión compleja {#exemple}

La órbita de 0 por *z* ↦ *z*² + *c*: A1 contiene *c*, A2 `n:[0, 0]`, A3 la fórmula siguiente, rellenada hacia abajo.

```
=A2^2+$A$1
```

En [DocGeo](docgeo.html), una columna así se dibuja en la figura.

note: En un archivo de Excel, una lista se guarda como texto, y también el valor de una fórmula que da una lista ([compatibilidad](excel.html#listes)).

=== noms
# Rangos con nombre

## Dar un nombre {#definir}

1. Seleccionar la celda o el rango.
2. Clic derecho › **%defineName%** (o la flecha del cuadro de nombres › **%nameManager%**).
3. Escribir el nombre, elegir el ámbito, **%nameOk%**.

![La ventana de un nombre nuevo](noms.webp 1280x760)

| Campo | Contenido |
| --- | --- |
| **%nameField%** | empieza por una letra o `_`; letras, cifras, `_` y `.`, sin espacio; no una dirección como `B2` |
| **%scope%** | **%workbook%**: se lee desde todas las hojas; una hoja: solo se lee desde ella, donde prevalece sobre un nombre del libro |
| **%refersTo%** | una celda o un rango, con su hoja: `'%sheet%1'!$B$2:$B$6` |

## Usar un nombre {#utiliser}

```
=AVERAGE(notas)
=precio*(1+iva)
```

- La flecha del cuadro de nombres lista los nombres: elegir uno selecciona su rango, en su hoja.
- Cuando la selección es exactamente un rango con nombre, el cuadro de nombres muestra su nombre.
- Una [lista desplegable](controles.html#listes) puede leer un rango de celdas, indicado por su dirección.

## Modificar, eliminar {#gerer}

En **%nameManager%**, hacer clic en un nombre vuelve a poner sus campos en modificación; **%nameRemove%** lo elimina; **%nameNew%** vuelve a un nombre vacío. Antes de eliminar un nombre, sustituir las fórmulas que lo leen: conservan su último valor y después dejan de calcularse.

Los nombres se guardan en el archivo de Excel y se leen de él.

=== feuilles
# Las hojas

## Añadir, cambiar de hoja {#ajouter}

- {plus} añade una hoja, llamada «%sheet%2», «%sheet%3»…
- Un clic en una pestaña la muestra; {all-sheets} lista las hojas, incluidas las ocultas, y muestra la que se elija.

## El menú de una pestaña {#menu}

Clic derecho en la pestaña, o su flecha:

| Comando | Efecto |
| --- | --- |
| **%sheetDelete%** | tras confirmar; la última hoja visible no puede eliminarse |
| **%sheetCopy%** | duplica la hoja |
| **%sheetRename%** | o doble clic en el nombre; sin `[ ] : ? * / ' "` |
| **%sheetColor%** | color de la pestaña |
| **%sheetHide%** | las fórmulas siguen leyendo la hoja; {all-sheets} la vuelve a mostrar |
| **%sheetLeft%**, **%sheetRight%** | cambia el orden; también se puede arrastrar la pestaña |

## Leer otra hoja {#references}

El nombre de la hoja, un signo de exclamación, la dirección. El nombre va entre apóstrofos si contiene un espacio o un signo.

```
=%sheet%2!B2*2
='Notas 2'!B2
=SUM('Notas 2'!B2:B6)
```

La referencia se teclea: cambiar de pestaña mientras se escribe una fórmula abandona la entrada.

Para que un rango se lea desde todas las hojas por un nombre, [ponerle nombre](noms.html) con el ámbito **%workbook%**.

=== nombres
# Formatos de número

> Un formato cambia la visualización de un número, no su valor: los cálculos conservan todos los decimales.

## Elegir un formato {#choisir}

**%format% › %fNumber%**, o la lista **%fGeneral%** de la barra de botones.

| Formato | Ejemplo |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`, alineado a la izquierda; la entrada queda como texto |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`; 0,25 pasa a ser `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**, **%fTime%**, **%fDateTime%** | para las fechas: `%xDate%`, `3:00 PM`, `15:00`… |

El símbolo monetario es el del idioma de la interfaz.

| Botón | Efecto |
| --- | --- |
| {percentage-format} | porcentaje |
| {number-decrease} | un decimal menos |
| {number-increase} | un decimal más |

Estos botones valen también para los números de una [lista](listes.html). Para redondear el propio valor, usar `@ROUND`.

## Formato personalizado {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**: elegir un formato sugerido, o escribir un código. La vista previa muestra el resultado; **%guide%** recuerda los signos; **%apply%** lo da a la selección.

![La ventana de formatos de número personalizados](format-personnalise.webp 1280x760)

| Signo | Función | Código | 1234,5 se muestra |
| --- | --- | --- | --- |
| `0` | una cifra, incluido el cero | `c:0.00` | `n:1234.50` |
| `#` | una cifra si es útil | `c:#.##` | `n:1234.5` |
| `c:,` | agrupa los millares | `c:#,##0` | `n:1,235` |
| `%` | porcentaje | `0%` | `123450%` |
| `"texto"` | un texto, una unidad | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | notación científica | `c:0.00E+00` | `n:1.23E+03` |
| `;` | formatos de positivos, negativos, ceros, textos | `0;-0;"nulo"` | `1235` |
| `[Red]` | color | `0;[Red]-0` | negativos en rojo |

El código se escribe con los separadores del idioma; la ventana indica la forma en que se guarda (`#,##0.00`), la misma que en Excel.

### Fechas y horas {#dates-heures}

| Código | 29 de agosto de 2026, 14:30 |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

Los nombres de meses y días se muestran en inglés.

### Unidades {#unites}

En **%units%**, formatos como `c:0.00 "V"`, `c:0.00 "Ω"`, `c:0.00 "mm"`: la celda sigue siendo un número, con el que se calcula.

=== mise-en-forme
# Formato

## Texto {#texte}

| Comando | Acceso |
| --- | --- |
| negrita, cursiva, subrayado | {bold} {italic} {underline}; [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] |
| fuente | lista **Arial**: trece fuentes |
| tamaño | lista **10**, o **%formatMenu% › %fontSize%**: 9 a 72 |
| color del texto, del fondo | {font-color} {background} |
| borrar el formato | {clear-format}, **%formatMenu% › %clearFormat%** |

En la paleta de un color, **%resetColor%** lo retira; **%customColor%** abre el selector del sistema.

Mientras se modifica una celda, el formato se aplica a la parte seleccionada del texto.

## Alineación {#alignement}

| Comando | Opciones |
| --- | --- |
| {align-left} horizontal | izquierda, centro, derecha |
| {align-top} vertical | arriba, medio, abajo |
| {text-rotation-none} rotación | inclinada, vertical, apilada |
| {text-overflow} ajuste de texto | **%wrapOverflow%**: sobre las celdas vacías vecinas; **%wrap%**: en varias líneas; **%wrapClip%**: cortado en el borde |

Sin alineación elegida, los números y las fechas van a la derecha, lo demás a la izquierda.

## Bordes {#bordures}

{border-all} traza el borde elegido; su flecha da los lados (superior, exterior, interiores, todos, ninguno, diagonal), el **color** y el **estilo** del trazo. Elegir color y estilo antes que el lado.

## Combinar {#fusion}

{merge-all} o **%formatMenu% › %mergeCells%**:

| Comando | Efecto |
| --- | --- |
| **%mergeAll%** | una sola celda, que conserva un solo contenido |
| **%mergeVertical%** | una celda por columna |
| **%mergeHorizontal%** | una celda por fila |
| **%unmerge%** | devuelve las celdas |

Un rango que contiene celdas combinadas no puede ordenarse ni filtrarse.

## Colores alternos {#alternees}

{alternating} o **%formatMenu% › %alternatingColors%** colorea una fila de cada dos del rango seleccionado, con una fila de encabezado si se quiere. Los tres colores se pueden elegir.

![La ventana de colores alternos](couleurs-alternees.webp 1280x760)

Son colores de fondo corrientes: no siguen una ordenación ni una fila insertada. **%clearAlternating%** los borra del rango.

## Cuadrícula {#quadrillage}

{gridlines} o **%view% › %show% › %gridlines%** oculta o muestra las líneas grises, en todas las hojas del libro. La [impresión](impression.html) tiene su propio ajuste.

Para un color que dependa del valor, véase [Formato condicional](conditionnelle.html).

=== conditionnelle
# Formato condicional

> Una regla cambia el aspecto de las celdas de un rango que cumplen una condición. Sigue los valores, introducidos o calculados.

## Crear una regla {#creer}

1. Seleccionar el rango, sin su encabezado.
2. {conditional} o **%format% › %conditionalFormatting%**.
3. Elegir la condición, el valor de comparación, los colores o el estilo.
4. **%cfAdd%**.

![La ventana del formato condicional, con una regla aplicada](conditionnelle.webp 1280x760)

| Condición | La celda |
| --- | --- |
| `<` | es menor que |
| `>` | es mayor que |
| `=` | es igual a |
| `!=` | es distinta de |
| `[]` | está entre dos valores, incluidos los extremos |
| `abc` | contiene un texto, en mayúsculas o minúsculas |

## Con qué comparar {#comparer}

| %cfCompareTo% | Ejemplo |
| --- | --- |
| **%cfValue%** | las notas inferiores a 10 |
| **%cfCell%** | las notas inferiores al umbral escrito en `F1` |
| **%cfColumn%** | en la columna C, los valores superiores a los de la columna B, fila por fila |

## Aspecto {#apparence}

**%cfText%** y **%cfBackground%** eligen los colores, **%cfNone%** los retira; **B**, *I*, **U** ponen en negrita, cursiva, subrayado. Hace falta al menos un color o un estilo.

## Varias reglas {#regles}

La columna de la izquierda lista las reglas de la hoja: **%cfEdit%**, **%cfDelete%**. Si varias reglas se aplican a una celda, prevalece la última de la lista, color por color.

warn: En un rango cubierto por una regla, los colores de texto y de fondo dados directamente a las celdas dejan de mostrarse.

Las reglas se guardan en el archivo de Excel como formatos condicionales de Excel.

=== lignes-colonnes
# Filas y columnas

## Tamaño {#taille}

| Acción | Efecto |
| --- | --- |
| arrastrar el borde derecho del encabezado de una columna | cambia su anchura |
| arrastrar el borde inferior del encabezado de una fila | cambia su altura |
| clic derecho en el encabezado › **%width%**, **%height%** | tamaño en píxeles, para todas las columnas o filas seleccionadas |

## Insertar, eliminar {#inserer}

Clic derecho en una celda o en un encabezado: **%rowAbove%**, **%rowBelow%**, **%columnLeft%**, **%columnRight%**. El número se escribe en el campo. Clic derecho en un encabezado: **%deleteRow%**, **%deleteColumn%**.

![El menú del clic derecho](menu-contextuel.webp 760x650)

Las fórmulas se ajustan: sus referencias siguen a las celdas desplazadas. El límite es de 10 000 filas y 1 000 columnas.

## Ocultar {#masquer}

Clic derecho en el encabezado › **%hideRow%**, **%hideColumn%**. Las celdas ocultas se siguen calculando. Para volver a mostrarlas, seleccionar los encabezados que las rodean y clic derecho › **%showHidden%**.

## Inmovilizar {#figer}

Las filas y columnas inmovilizadas permanecen visibles al desplazarse. Seleccionar la celda límite, luego {freeze-row-col} o **%view% › %freeze%**:

| Comando | Permanecen visibles |
| --- | --- |
| **%freezeRow%** | las filas hasta la de la celda, incluida |
| **%freezeColumn%** | las columnas hasta la de la celda, incluida |
| **%freezeCell%** | ambas |
| **%freezeCancel%** | nada en particular |

Para conservar la fila de encabezado: clic en una celda de la fila 1, **%freezeRow%**.

=== tri-filtre
# Ordenar, filtrar, buscar

## Ordenar {#trier}

| Comando | Efecto |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**, **%sortDescending%** | ordena la selección según su primera columna; también con {filter} y con el clic derecho |
| clic derecho › **%sortRange%** | elige la columna de ordenación, el orden, y si la primera fila es un encabezado |

![La ventana para ordenar un rango](tri.webp 1280x760)

Seleccionar toda la tabla, no una sola columna: las filas deben permanecer enteras. Un rango que contiene celdas combinadas no se ordena.

## Filtrar {#filtrer}

1. Seleccionar la tabla, incluido el encabezado.
2. **%data% › %sortAndFilter% › %createFilter%**, o {filter}, o clic derecho › **%filterRange%**.
3. Hacer clic en la flecha de una columna.

![El filtro de una columna](filtre.webp 1280x760)

| En el menú de una columna | Efecto |
| --- | --- |
| **%sortByAsc%**, **%sortByDesc%** | ordena las filas de la tabla |
| **%filterByColor%** | según el color del fondo o del texto |
| **%filterByValues%** | marcar los valores que se conservan; **%filterAll%**, **%filterNone%**, **%filterInverse%**; el campo busca un valor |
| **%filterConfirm%** | aplica |
| **%clearFilter%** | retira el filtro de la tabla |

Las filas descartadas se ocultan, no se eliminan. Los filtros de varias columnas se acumulan. **%data% › %sortAndFilter% › %clearFilter%** retira el filtro.

## Buscar, reemplazar {#rechercher}

[[Ctrl+F]] abre **%find%**, [[Ctrl+H]] **%replace%**.

![La búsqueda](rechercher.webp 1280x660)

| Opción | Efecto |
| --- | --- |
| **%regex%** | el texto buscado es una expresión regular: `^A` encuentra lo que empieza por A |
| **%wholeWord%** | la celda entera es igual al texto |
| **%matchCase%** | distingue mayúsculas y minúsculas |
| **%findAll%** | lista las celdas encontradas; un clic en una línea lleva a ella |
| **%findNext%** | va a la siguiente |
| **%replaceOne%**, **%replaceAll%** | una celda, todas |

La búsqueda se hace en la hoja mostrada.

=== controles
# Casillas, listas y calendario

![Casillas, una lista desplegable y el calendario de una fecha](controles.webp 1280x560)

## Casillas {#cases}

Seleccionar las celdas, **%insert% › %checkbox%**. Un clic marca o desmarca; la celda vale TRUE o FALSE.

```
=IF(B2, "hecho", "por hacer")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

La segunda fórmula suma los valores de la columna C cuya casilla está marcada; la tercera cuenta las casillas marcadas.

## Listas desplegables {#listes}

Seleccionar las celdas, **%insert% › %dropdown%**.

| Origen | Contenido |
| --- | --- |
| **%listValues%** | las opciones, una por campo; **%addOption%**; sin coma |
| **%listRange%** | un rango cuyas celdas son las opciones: `%sheet%2!$A$1:$A$10` |

Un rango sin `$` se desplaza de una celda a otra, como una fórmula rellenada. Si sus celdas cambian, las opciones las siguen.

La celda muestra una flecha; un clic abre las opciones. No se acepta un valor distinto de los de la lista.

## Calendario {#calendrier}

Un doble clic en una celda de fecha abre un calendario: elegir un día, cambiar de mes con **<** y **>**, **%today%** para la fecha de hoy. Se abre en toda celda con formato de fecha, aunque esté vacía, salvo si contiene una fórmula o está [bloqueada](protection.html).

tip: Para una columna de fechas que se rellenará con el calendario: seleccionarla y darle el formato **%fDate%**.

## Retirar {#retirer}

[[Delete]] retira la casilla o la lista de la celda, con su valor.

Casillas y listas se guardan en el archivo de Excel; allí las casillas son casillas de Excel.

=== graphiques
# Gráficos y minigráficos

## Crear un gráfico {#creer}

1. Seleccionar los datos.
2. {chart} o **%insert% › %chart%**.
3. Elegir el tipo y las opciones; la vista previa sigue.
4. **%chartAdd%**, luego **%chartClose%**.

![La ventana de los gráficos](graphique.webp 1280x900)

| Selección | Interpretación |
| --- | --- |
| una columna o una fila de números | los datos |
| dos columnas | etiquetas en la primera, datos en la segunda |
| dos filas | etiquetas en la primera, datos en la segunda |
| dos columnas separadas, elegidas con [[Ctrl]] | igual |

Un gráfico muestra una serie: una fila o una columna de datos. Las celdas sin número, como un encabezado, se ignoran.

## Tipos {#types}

| Tipo | Para | Etiquetas |
| --- | --- | --- |
| **%tBar%** | comparar | bajo las barras |
| **%tLine%** | una evolución | en el eje horizontal |
| **%tScatter%** | una relación entre dos magnitudes | son las abscisas, si son números; si no, 1, 2, 3… |
| **%tPie%** | partes; valores positivos | en la leyenda o sobre los sectores |

Hasta 120 valores, 24 para los sectores.

![Los cuatro tipos de gráficos](graphiques.webp 1280x640)

## Opciones {#options}

| Campo | Contenido |
| --- | --- |
| **%chartTitle%** | obligatorio; se muestra arriba del gráfico |
| **%chartColor%** | selector o código `#4F81BD`; los sectores tienen sus propios colores |
| **%chartRange%** | el rango: `B2:B6` |
| **%chartLabels%** | **%lNone%**; **%lColumn%** (`A`); **%lRow%** (`1`); **%lRange%**, del mismo tamaño que los datos |
| **%chartOptions%** | valores, leyenda, abscisas, ordenadas, cuadrícula |

## Mover, modificar {#modifier}

- Arrastrar la franja del título mueve el gráfico; arrastrar su esquina inferior derecha cambia su tamaño.
- **%chartEdit%** vuelve a abrir la ventana, **%chartDelete%** lo elimina. La ventana lista también todos los gráficos de la hoja.
- El gráfico sigue los datos de sus celdas.

Los gráficos se guardan en el archivo de Excel como verdaderos gráficos, y DocCells los vuelve a leer. No se [imprimen](impression.html) con la hoja.

## Minigráficos {#sparklines}

La función `SPARKLINE` dibuja un gráfico en miniatura en la celda.

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![Minigráficos de líneas y de columnas](sparklines.webp 900x300)

Las opciones se escriben entre llaves: el nombre, una barra invertida, el valor; un punto y coma entre dos opciones.

| `charttype` | Dibujo | Opciones propias |
| --- | --- | --- |
| `"line"` (por defecto) | línea | `color`, `linewidth`, `xmin`, `xmax`, `ymin`, `ymax` |
| `"bar"` | barras apiladas | `max`, `color1`, `color2` |
| `"column"` | columnas | `color`, `negcolor`, `lowcolor`, `highcolor`, `firstcolor`, `lastcolor`, `axis`, `axiscolor`, `ymin`, `ymax` |
| `"winloss"` | ganancias y pérdidas | las mismas, sin `ymin` ni `ymax` |

Opciones comunes: `empty` (`"zero"` o `"ignore"`), `nan` (`"convert"` o `"ignore"`), `rtl` (de derecha a izquierda). La [documentación de SPARKLINE](../../sparkline/es.html) da todos los valores, con ejemplos.

Para un dibujo mayor, agrandar la fila y la columna, o combinar celdas.

=== images-liens
# Imágenes y enlaces

## Imágenes {#images}

{image} o **%insert% › %image%** inserta una imagen del ordenador en el lugar de la selección.

| Acción | Efecto |
| --- | --- |
| arrastrar la imagen | la mueve |
| arrastrar un controlador | cambia su tamaño |
| [[Delete]], con la imagen seleccionada | la elimina |

Las imágenes se guardan en el archivo de Excel, en su sitio.

## Enlaces {#liens}

Seleccionar una celda, clic derecho › **%link%**.

| %linkType% | Dirección |
| --- | --- |
| página web (**%linkWeb%**) | `https://…` |
| rango de celdas (**%linkCells%**) | `%sheet%1!A1:C8` |
| **%linkSheet%** | una hoja del libro |

El **%linkText%** pasa a ser el contenido de la celda, azul y subrayado. Cuando la celda está seleccionada, **%linkOpen%** aparece debajo.

warn: Los enlaces no se guardan en el archivo de Excel: solo su texto.

=== impression
# Imprimir

**%file% › %print%** o [[Ctrl+P]] muestra las páginas tal como se imprimirán.

![La vista previa de impresión](imprimer.webp 1280x760)

| Ajuste | Opciones |
| --- | --- |
| **%printContent%** | la hoja activa, o las celdas seleccionadas antes de abrir la ventana |
| **%printPaper%** | A4, Letter |
| **%printOrientation%** | vertical, horizontal |
| **%printScale%** | **%printActual%**; **%printWidth%**: todas las columnas en el ancho de una página; **%printPage%** |
| **%printMargins%** | normales, estrechos, amplios |
| **%printFormatting%** | cuadrícula, encabezados de filas y columnas, colores de fondo |

**%printButton%** abre la ventana del navegador, donde se elige la impresora o guardar en PDF.

- Solo se imprimen las celdas, con su formato: ni gráficos, ni imágenes, ni minigráficos.
- Las filas y columnas ocultas no se imprimen.
- Una casilla se imprime como TRUE o FALSE.
- Se imprime una hoja cada vez.

tip: Para imprimir con los gráficos, guardar el libro y abrirlo en Excel o LibreOffice.

=== protection
# Proteger

> Un libro protegido solo puede modificarse en sus celdas desbloqueadas: así se prepara una hoja de ejercicios.

## Preparar una hoja para alumnos {#preparer}

1. Seleccionar las celdas que se rellenarán, clic derecho › **%unlock%**.
2. {protect} o **%tools% › %protectWorkbook%**.
3. Guardar, y [difundir el archivo o su enlace](partager.html).

Todas las celdas están bloqueadas al principio; el bloqueo solo tiene efecto en un libro protegido. **%lock%** lo anula.

## Lo que bloquea la protección {#effets}

| En un libro protegido | Celda bloqueada | Celda desbloqueada |
| --- | --- | --- |
| escribir, borrar | no | sí |
| calendario de una fecha | no | sí |
| anchuras y alturas | no | no |
| colores alternos, inserción de casillas y listas, relleno por menú | no | no |
| formato, inserción de filas y columnas, gráficos | sí | sí |

La protección afecta a todas las hojas. Se guarda en el archivo de Excel, con las celdas desbloqueadas, y la leen DocCells y Excel.

## Modo alumno {#eleve}

`?mode=student` en la dirección abre DocCells sin el botón {protect} ni los comandos **%unlock%** y **%defineName%**; **%protectWorkbook%** aparece atenuado. El alumno no puede quitar la protección.

```
https://…/doccells/?mode=student&url=https://…/ejercicio.xlsx
```

note: Es una protección de uso, sin contraseña: quien abra el archivo en otra hoja de cálculo, o sin `mode=student`, puede quitarla.

=== partager
# Compartir e integrar

## Un libro mediante un enlace {#url}

`?url=` seguido de la dirección de un archivo `.xlsx` en línea lo abre en DocCells.

```
https://…/doccells/?url=https://ejemplo.org/notas.xlsx
```

El sitio que aloja el archivo debe autorizar su lectura por otros sitios (cabecera CORS); un archivo situado junto a DocCells, en el mismo sitio, no tiene esa limitación. Cada cual abre su copia: los cambios no vuelven al archivo original.

## Un Google Sheet {#google}

La dirección de un Google Sheet también sirve.

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- Compartirlo con «Cualquier persona que tenga el enlace».
- DocCells lee una copia en formato Excel en cada apertura: el documento de Google no se modifica.
- El sitio que aloja DocCells debe ejecutar PHP; 25 MB como máximo.

## Opciones de la dirección {#options}

| Opción | Efecto |
| --- | --- |
| `url=…` | abre un libro o un Google Sheet |
| `mode=student` | [modo alumno](protection.html#eleve) |
| `lang=es` | impone el idioma: `de`, `el`, `en`, `es`, `fr`, `hi`, `it`, `nl`, `pt`, `ru`, `zh-CN`, `zh-TW` |

Las opciones se suceden, separadas por `&`: `?lang=es&mode=student&url=…`. La primera va tras `?`.

## En una página web {#integrer}

```
<iframe src="https://…/doccells/?url=https://ejemplo.org/notas.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

En un marco, DocCells no tiene menús, ni botones para abrir y guardar, ni copia de recuperación: muestra la barra de botones, la barra de fórmulas y la hoja.

## Por programa {#programme}

Una página puede controlar DocCells: cargar un libro, leer y escribir celdas, seguir sus valores. La opción `embed` abre este modo; se describe, para desarrolladores, en el archivo [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) del proyecto (en francés).

=== docgeo
# Con DocGeo

> DocGeo, el programa de geometría dinámica de DocTools, contiene DocCells: una hoja junto a una figura, cada una leyendo a la otra.

En DocGeo, **%file% › %gView% › %gSheetView%** añade una hoja junto a la figura; **%file% › %gTab% › %gSheetTab%** hace de ella una pestaña.

## La función GEO {#geo}

En una celda, `GEO` lee el valor de un objeto de la figura, indicado por su nombre entre comillas.

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'Figura 1'!c")
```

- La celda sigue a la figura mientras se manipula.
- Un punto se lee como la [lista](listes.html) de sus coordenadas: `=GEO("A")*2` también es un punto.
- Al escribir una fórmula, un clic en un objeto de la figura escribe en ella `GEO` y su nombre.
- Un objeto desconocido da `#N/A`. Fuera de DocGeo, `GEO` da siempre `#N/A`.
- `GEO` tiene el mismo nombre en todos los idiomas.

## La figura lee las celdas {#figure}

En una fórmula de DocGeo, `!B3` designa una celda, `!B2:B21` un rango.

## Diferencias con DocCells solo {#differences}

| En DocGeo | |
| --- | --- |
| Menús y botones | en las barras de DocGeo, cuando la hoja está activa |
| Archivo | el de DocGeo: la hoja se guarda en el `.dgo`, listas y enlaces incluidos |
| Hojas | una por vista; varias pestañas de hoja de cálculo se leen entre sí |
| Deshacer | [[Ctrl+Z]] en las celdas solo deshace las celdas |

La página [de la hoja de cálculo](https://doctools.org/apps/docgeo/tutorials/es/tableur.html) del manual de DocGeo da los detalles.

=== fonctions
# Las funciones

> Las %functions% funciones calculadas por DocCells, por ámbito, con un ejemplo de cada una.

- Búsqueda: escribir el nombre de una función, en español o en inglés, en el campo de la parte superior de la página ([[/]]) lleva a su fila.
- Los argumentos se separan con punto y coma; los argumentos entre corchetes `[ ]` son opcionales. El nombre inglés, en pequeño, se acepta al escribir.
- `@TRUE()` y `@FALSE()` se escriben con sus paréntesis; también se puede escribir 1 y 0.
- Un argumento «rango» puede ser una [lista](listes.html): `=AVERAGE([12, 15, 8])`.
- Véase también [Las fórmulas](formules.html): operadores, referencias, errores.

## Las celdas de los ejemplos {#exemples}

Los ejemplos leen esta hoja:

%%sample%%

%%functions%%

## Funciones no calculadas {#non-calculees}

El autocompletado y la biblioteca de DocCells nombran también funciones que no se calculan: dan `#NAME?` o `#ERROR!`. Lo mismo ocurre con funciones recientes de Excel.

| No calculadas | En su lugar |
| --- | --- |
| `@TEXT`, `@FIXED`, `@DOLLAR` | un [formato de número](nombres.html) en la celda |
| `BUSCARX`, `DESREF`, `INDIRECTO`, `DIRECCION` | `@INDEX` y `@MATCH`, `@VLOOKUP`, `@CHOOSE` |
| `FILTRAR`, `ORDENAR`, `SECUENCIA`, `LET`, `LAMBDA` | [ordenar y filtrar](tri-filtre.html); [rellenar](selection.html#recopier) una fórmula |
| `MAX.SI.CONJUNTO`, `MIN.SI.CONJUNTO`, `UNIRCADENAS` | un filtro; el operador `&` |
| `MMULT`, `MDETERM`, `MINVERSA` | `@SUMPRODUCT`, una fórmula por elemento |
| `HIPERVINCULO` | [insertar un enlace](images-liens.html#liens) |
| nombres con punto de Excel: `RANK.EQ`, `VAR.S`, `NORM.DIST`… | el nombre sin punto o el antiguo: `@RANK`, `@VAR`, `@NORMDIST` |
| funciones de base de datos (`@DSUM`…), cupones y valores (`@PRICE`, `@COUPNUM`…), `@ISBLANK`, `@CELL`, `@ISFORMULA` | `@SUMIFS`; `=A1=""` para una celda vacía |

=== raccourcis
# Atajos y gestos

## Archivo {#fichier}

| Teclas | Efecto |
| --- | --- |
| [[Ctrl+O]] | abrir |
| [[Ctrl+S]] | guardar; descargar, en Firefox y Safari |
| [[Ctrl+P]] | imprimir |

## Edición {#edition}

| Teclas | Efecto |
| --- | --- |
| [[Ctrl+Z]]; [[Ctrl+Y]], [[Ctrl+Shift+Z]] | deshacer; rehacer |
| [[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] | copiar, cortar, pegar |
| [[Ctrl+D]]; [[Ctrl+R]] | rellenar hacia abajo; hacia la derecha |
| [[Delete]], [[⌫]] | vaciar las celdas |
| [[Ctrl+F]]; [[Ctrl+H]] | buscar; reemplazar |

## Formato {#mise-en-forme}

| Teclas | Efecto |
| --- | --- |
| [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] | negrita, cursiva, subrayado |

## Desplazarse, seleccionar {#se-deplacer-selectionner}

| Teclas | Efecto |
| --- | --- |
| flechas | celda vecina |
| [[Tab]], [[Shift+Tab]] | celda siguiente, anterior |
| [[Shift]] y flecha | ampliar la selección |
| [[Shift]] y clic | seleccionar hasta la celda |
| [[Ctrl]] y clic | añadir a la selección |
| [[Ctrl+A]] | toda la hoja |

## Entrada {#saisie}

| Teclas | Efecto |
| --- | --- |
| [[F2]], [[Enter]], doble clic | modificar la celda |
| [[Enter]] | validar, bajar |
| [[Esc]] | abandonar |
| [[Alt+Enter]] | nueva línea en la celda |
| [[↑]] [[↓]], [[Enter]], [[Tab]] | recorrer, elegir una función propuesta |
| clic o arrastre en la hoja | insertar una referencia en la fórmula |

## Ratón {#souris}

| Gesto | Efecto |
| --- | --- |
| arrastrar el controlador azul | [rellenar](selection.html#recopier) |
| arrastrar el borde de la selección | [mover](selection.html#deplacer) |
| arrastrar el borde de un encabezado | [cambiar una anchura, una altura](lignes-colonnes.html#taille) |
| clic derecho | menú de la celda, del encabezado, de la pestaña |
| doble clic en una fecha | [calendario](controles.html#calendrier) |
| doble clic en una pestaña | renombrar la hoja |
| arrastrar una pestaña | mover la hoja |
| soltar un archivo `.xlsx` | abrirlo |

=== excel
# Compatibilidad con Excel

> DocCells lee y escribe el formato Excel `.xlsx`. Lo siguiente se conserva, en ambos sentidos.

## Lo que se conserva {#conserve}

| Elemento | Observación |
| --- | --- |
| valores, textos, fechas, fórmulas | las fórmulas se muestran en el idioma de DocCells |
| [formatos de número](nombres.html) | incluidos los personalizados |
| fuente, colores, alineación, rotación, ajuste de texto | |
| bordes, celdas combinadas | |
| anchuras, alturas, filas y columnas ocultas | |
| [filas y columnas inmovilizadas](lignes-colonnes.html#figer), cuadrícula | |
| varias hojas | |
| [rangos con nombre](noms.html) | |
| [formato condicional](conditionnelle.html) | las reglas de DocCells, las reglas simples de Excel (comparación, texto contenido) |
| [casillas, listas desplegables](controles.html) | |
| [gráficos](graphiques.html) | escritos como gráficos de Excel; los de DocCells se vuelven a leer |
| [imágenes](images-liens.html) | |
| [filtros](tri-filtre.html#filtrer) | |
| [protección](protection.html), celdas desbloqueadas | |

## Lo que no {#perdu}

| Elemento | Se convierte en |
| --- | --- |
| [enlaces](images-liens.html#liens) | su texto |
| [listas](listes.html) en las celdas | un texto, `n:[2, 1]` |
| minigráficos de DocCells o de Google Sheets | una fórmula `SPARKLINE`, que DocCells vuelve a leer; desconocida para Excel |
| gráficos creados en Excel | no se conservan |
| tablas dinámicas, macros, segmentaciones, comentarios | no se conservan |
| formato condicional con escalas de color, barras, iconos | no se conserva |

tip: Antes de sustituir un libro de Excel complejo, guardarlo desde DocCells con otro nombre (**%saveAs%**).

## Listas {#listes}

Una lista reabierta desde un `.xlsx` es un texto: volver a escribirla la convierte en lista. Una lista calculada por una fórmula vuelve a ser una lista cuando la fórmula se recalcula.

## Fórmulas {#formules}

Al abrir, una fórmula conserva en general el resultado guardado por Excel hasta que cambia una de sus celdas. Una función [no calculada por DocCells](fonctions.html#non-calculees) da entonces `#NAME?` o `#ERROR!`.

## Otros formatos {#formats}

| Formato | Cómo |
| --- | --- |
| `.csv` | abrir el archivo en un editor de texto, copiar, pegar en DocCells si los valores están separados por tabulaciones; si no, convertirlo a `.xlsx` |
| `.ods`, `.xls` | guardarlos como `.xlsx` con LibreOffice o Excel |
| Google Sheets | [por su enlace](partager.html#google), o descargado como `.xlsx` |
| PDF | [imprimir](impression.html), «Guardar como PDF» |

=== faq
# Preguntas frecuentes

## Entrada {#saisie}

### No se reconoce una fecha que he escrito

`25/11/2026` es un texto para DocCells. Escribir `2026-11-25` y elegir el formato **%fDate%** ([fechas](saisie.html#dates)).

### Aparece un número en lugar de una fecha

Las fechas son números de días: dar a las celdas el formato **%fDate%** (**%format% › %number%**).

### Mis números no se suman

Alineados a la izquierda, son textos. En español, la coma es decimal; una unidad escrita en la celda la convierte en texto ([tipos](saisie.html#types)).

### Desaparece el cero inicial de un número

Dar el formato **%fText%** antes de escribir, o empezar con un apóstrofo ([textos](saisie.html#textes)).

### Los números esperan un punto en lugar de una coma

DocCells sigue el idioma del navegador. `?lang=es` lo impone ([idioma](demarrage.html#langue)).

## Fórmulas {#formules}

### `#NAME?` con VERDADERO o FALSO

Escribir `@TRUE()` y `@FALSE()`, o 1 y 0 ([condiciones](formules.html#conditions)).

### `#NAME?` con una función propuesta por DocCells

No todas las funciones propuestas se calculan ([funciones no calculadas](fonctions.html#non-calculees)).

### `@IFERROR` deja pasar DIV/0

Comprobar el divisor: `=IF(B2, A2/B2, "")` ([errores](formules.html#erreurs)).

### Pegar no conserva mis fórmulas

**%paste%** del clic derecho pega los valores; [[Ctrl+V]] pega las fórmulas ([copiar](selection.html#copier)).

### Escribir el nombre de un mes o dar formato a un número dentro de un texto

La función `@TEXT` no se calcula: dar un [formato](nombres.html) a una celda aparte.

### Contar las casillas marcadas

`=SUMPRODUCT(B2:B6, B2:B6)` ([casillas](controles.html#cases)).

### `=TODAY()+1` da #VALUE!

Poner `=TODAY()` en una celda y sumar a esa celda ([fechas](formules.html#dates)).

## Presentación {#presentation}

### El color de una celda no cambia

La celda está en el rango de una regla de [formato condicional](conditionnelle.html#regles).

### Ha desaparecido un botón

La ventana es estrecha: está detrás de {more}.

### Se rechaza ordenar o filtrar

El rango contiene celdas combinadas: separarlas.

## Archivos {#fichiers}

### Guardar descarga un archivo nuevo

Es el caso en Firefox y Safari. Chrome y Edge escriben en el archivo ([guardar](demarrage.html#enregistrer)).

### La página se cerró sin guardar

Volver a abrir DocCells en el mismo navegador: propone restaurar la copia ([recuperar](demarrage.html#recuperer)).

### Mi gráfico no se imprime

La impresión solo muestra las celdas ([imprimir](impression.html)).

### Un enlace `?url=` no abre mi libro

El sitio del archivo quizá rechace la lectura por otros sitios. Un Google Sheet debe compartirse por enlace ([compartir](partager.html)).

### Mis enlaces han desaparecido

No se guardan en el formato Excel ([lo que no se conserva](excel.html#perdu)).

## Alumnos {#eleves}

### ¿Puede un alumno modificar las fórmulas?

No en un libro protegido, fuera de las celdas desbloqueadas ([proteger](protection.html)). Añadir `mode=student` al enlace le retira el medio de quitar la protección.
