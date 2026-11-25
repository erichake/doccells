=== groups | Primeiros passos | Introduzir e calcular | Apresentar | Explorar os dados | Divulgar | Referência

=== categories | Função | Descrição e exemplo | Matemática | Trigonometria | Lógica | Estatística | Distribuições de probabilidade e testes | Pesquisa e listas | Texto | Datas e horas | Finanças | Bases de numeração, unidades, funções especiais | Números complexos em texto | Informação

=== index | Início
# Manual do utilizador do DocCells

> O DocCells é uma folha de cálculo multilingue que se usa no navegador, sem instalação nem conta. Abre e guarda livros do Excel (.xlsx).

<div class="buttons"><a href="../../index.html?lang=pt">Abrir o DocCells</a></div>

![A janela do DocCells: menus, botões, barra de fórmulas, uma tabela de notas formatada e um gráfico](interface.webp 1280x760)

## O essencial em seis gestos

| Para | Fazer |
| --- | --- |
| Introduzir dados | clicar numa célula, escrever, [[Enter]] ([introduzir dados](saisie.html)) |
| Calcular | escrever `=` e a fórmula: `=AVERAGE(B2:B6)` ([as fórmulas](formules.html)) |
| Copiar uma fórmula | arrastar a alça azul da seleção, ou [[Ctrl+D]] ([preencher](selection.html#recopier)) |
| Formatar | menu **%format%**, ou os botões ([formatação](mise-en-forme.html)) |
| Traçar um gráfico | selecionar os dados, {chart} ([gráficos](graphiques.html)) |
| Guardar | [[Ctrl+S]]: um ficheiro Excel ([abrir e guardar](demarrage.html)) |

## Sumário {#sommaire}

- [Abrir e guardar](demarrage.html): ficheiros, recentes, recuperação, Google Sheets, idioma.
- [A interface](interface.html): menus, botões, barra de fórmulas, separadores, zoom.
- [Introduzir dados](saisie.html), [selecionar, copiar, preencher](selection.html).
- [As fórmulas](formules.html), [listas e complexos](listes.html), [intervalos com nome](noms.html), [as folhas](feuilles.html).
- [Formatos de número](nombres.html), [formatação](mise-en-forme.html), [formatação condicional](conditionnelle.html), [linhas e colunas](lignes-colonnes.html).
- [Ordenar, filtrar, procurar](tri-filtre.html), [caixas, listas e calendário](controles.html), [gráficos e sparklines](graphiques.html), [imagens e ligações](images-liens.html), [imprimir](impression.html).
- [Proteger](protection.html) um livro para alunos, [partilhá-lo e integrá-lo](partager.html), usá-lo [com o DocGeo](docgeo.html).
- Referência: [as %functions% funções](fonctions.html), [atalhos](raccourcis.html), [compatibilidade com o Excel](excel.html), [perguntas frequentes](faq.html).

## Convenções

- Os botões são indicados pelo seu ícone ({bold} negrito).
- [[Ctrl]] equivale a [[⌘]] no Mac.
- As fórmulas estão escritas em português: nomes de funções em português, vírgula decimal, ponto e vírgula entre os argumentos. O DocCells mostra-as no idioma da interface.
- Pesquisar no manual: [[/]] ou [[Ctrl+K]]. As palavras escrevem-se em qualquer ordem e sem acentos; o nome de uma função, em português ou em inglês, leva à sua linha.

=== demarrage
# Abrir e guardar

## Começar {#nouveau}

O DocCells abre com um livro vazio de uma folha. Para recomeçar com um livro vazio, recarregar a página ou abrir o DocCells noutro separador do navegador.

## Abrir um livro {#ouvrir}

| Meio | Efeito |
| --- | --- |
| {open}, **%file% › %open%**, [[Ctrl+O]] | escolher um ficheiro `.xlsx` do computador |
| Arrastar o ficheiro para a página | um véu indica onde largá-lo; o livro substitui o que estava aberto |
| **%file% › %openRecent%** | os últimos dez ficheiros abertos ou guardados (Chrome e Edge) |
| Uma ligação `?url=…` | um livro em linha ou um Google Sheet ([partilhar](partager.html#url)) |

O único formato lido é o Excel `.xlsx`. Os antigos `.xls`, os `.ods` e os `.csv` devem ser convertidos antes. O que se conserva de um ficheiro Excel está descrito em [Compatibilidade com o Excel](excel.html).

warn: Abrir um livro substitui o que está visível: guardar antes as alterações.

### Ficheiros recentes {#recents}

O navegador pode voltar a pedir autorização para ler o ficheiro. Um ficheiro movido, renomeado ou eliminado é retirado da lista. **%clearRecentFiles%** esvazia-a. A lista fica neste navegador, neste computador.

## Guardar {#enregistrer}

### Chrome e Edge

| Comando | Efeito |
| --- | --- |
| {save}, **%file% › %save%**, [[Ctrl+S]] | da primeira vez, pergunta onde pôr o ficheiro; depois substitui-o sem perguntar |
| **%file% › %saveAs%** | escolher outro ficheiro |

Um ficheiro aberto com {open}, a partir dos recentes ou largado na página é guardado no seu lugar; o navegador pede uma vez autorização para o alterar.

O nome do livro está no fim da barra de menus. Um ponto vermelho indica alterações não guardadas; o título do separador do navegador começa então por ●.

### Firefox, Safari

Estes navegadores não permitem escrever num ficheiro. **%file% › %export%** ou [[Ctrl+S]] descarrega o livro, com o nome do livro aberto.

## Recuperar um livro não guardado {#recuperer}

Enquanto há alterações não guardadas, o DocCells mantém uma cópia no navegador, atualizada menos de um segundo após cada alteração. Se a página fechar sem guardar, a abertura seguinte do DocCells propõe, com a data da cópia, restaurá-la (**%restore%**) ou não (**%ignore%**).

- Guardar, exportar ou abrir outro livro apaga esta cópia.
- Ignorar a cópia elimina-a definitivamente.
- A cópia só é feita quando o DocCells ocupa toda a página, não quando está integrado noutra.

## Idioma {#langue}

O DocCells usa o idioma do navegador entre os doze da sua interface: alemão, chinês simplificado e tradicional, espanhol, francês, grego, hindi, inglês, italiano, neerlandês, português, russo. Para os outros usa-se o inglês. `?lang=pt` no endereço impõe um idioma.

O idioma muda os menus, os nomes das funções, o separador decimal, o símbolo monetário e a ordem das datas mostradas. O ficheiro guardado não depende dele: um livro escrito em francês abre em alemão com as fórmulas em alemão.

=== interface
# A interface

![A janela do DocCells](interface.webp 1280x760)

De cima para baixo: a barra de menus, a barra de botões, a barra de fórmulas, a folha, os separadores de folhas e o zoom.

## Os menus {#menus}

| Menu | Conteúdo |
| --- | --- |
| **%file%** | [abrir, guardar](demarrage.html), [imprimir](impression.html) |
| **%edit%** | anular, refazer, [preencher para baixo, para a direita](selection.html#recopier) |
| **%view%** | [grelha](mise-en-forme.html#quadrillage), [fixar](lignes-colonnes.html#figer) |
| **%insert%** | [imagem](images-liens.html), [gráfico](graphiques.html), [caixa de verificação, lista pendente](controles.html) |
| **%format%** | [número](nombres.html), [texto, alinhamento, união](mise-en-forme.html), [cores alternadas](mise-en-forme.html#alternees), [formatação condicional](conditionnelle.html) |
| **%data%** | [ordenar e filtrar](tri-filtre.html) |
| **%tools%** | [proteger](protection.html), este manual (**%manual%**), DocTools, código-fonte, versão (**%about%**) |

Um visto assinala uma opção ativa: grelha visível, células fixadas, negrito, filtro, livro protegido.

![O menu de formatação e os formatos de número](menus.webp 1280x620)

## A barra de botões {#boutons}

| Botão | Função |
| --- | --- |
| {open} {save} | [abrir, guardar](demarrage.html) |
| {gridlines} | mostrar ou ocultar a [grelha](mise-en-forme.html#quadrillage) |
| {alternating} | [cores alternadas](mise-en-forme.html#alternees) |
| {conditional} | [formatação condicional](conditionnelle.html) |
| {protect} | [proteger](protection.html); azulado quando o livro está protegido |
| {chart} | [inserir um gráfico](graphiques.html) |
| {image} | [inserir uma imagem](images-liens.html) |
| {undo} {redo} | anular, refazer |
| {clear-format} | limpar a formatação |
| {percentage-format} {number-decrease} {number-increase} | [percentagem, menos ou mais casas decimais](nombres.html) |
| **%fGeneral%**, **Arial**, **10** | formato de número, tipo de letra, tamanho |
| {bold} {italic} {underline} | negrito, itálico, sublinhado |
| {font-color} {background} | cor do texto, do fundo |
| {border-all} {merge-all} | [limites, união](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | alinhamentos, rotação, moldagem do texto |
| {freeze-row-col} | [fixar](lignes-colonnes.html#figer) |
| {formula-sum} | [soma automática](formules.html#somme) e outras fórmulas |
| {filter} | [ordenar e filtrar](tri-filtre.html) |

A pequena seta de um botão abre as suas opções; o próprio botão repete a última. Numa janela estreita, os últimos botões estão atrás de {more}.

## A barra de fórmulas {#barre}

- À esquerda, a **caixa de nome**: o endereço da seleção, ou o [nome do intervalo](noms.html). A sua seta lista os intervalos com nome e abre o gestor de nomes.
- À direita de *fx*, o conteúdo da célula, incluindo a fórmula: pode ser modificado aí.

## A folha {#feuille}

- O clique direito abre um menu conforme o local: célula, cabeçalho de coluna ou de linha, separador de folha.
- A folha inicial tem 84 linhas e 60 colunas (A a BH). Acrescentam-se mais com o clique direito, **%insertCells%** ([linhas e colunas](lignes-colonnes.html)).
- A alça azul no canto da seleção [preenche](selection.html#recopier).

## Separadores e zoom {#zoom}

Em baixo, {plus} acrescenta uma folha, {all-sheets} lista-as todas ([as folhas](feuilles.html)). À direita, **−** e **+** regulam o zoom; um clique na percentagem propõe de 10 % a 400 %.

## Anular {#annuler}

{undo} ou [[Ctrl+Z]] anula, {redo}, [[Ctrl+Y]] ou [[Ctrl+Shift+Z]] refaz: entradas, colagens, formatações, inserções. O histórico recomeça do zero quando se abre um livro, se mostra ou oculta a grelha, se protege o livro, ou se acrescenta um nome ou uma regra de formatação condicional. Os gráficos não fazem parte dele: [modificam-se ou eliminam-se](graphiques.html#modifier) com os seus botões.

=== saisie
# Introduzir dados

## Escrever numa célula {#ecrire}

| Ação | Efeito |
| --- | --- |
| escrever numa célula selecionada | substitui o seu conteúdo |
| duplo clique, [[F2]] ou [[Enter]] | modifica o seu conteúdo |
| [[Enter]] | confirma e desce uma célula |
| clique noutra célula | confirma |
| [[Esc]] | abandona a entrada |
| [[Alt+Enter]] | muda de linha dentro da célula |
| [[Delete]] ou [[⌫]] | esvazia as células selecionadas, incluindo caixas e listas pendentes; a formatação fica |
| clique direito › **%clearContent%** | o mesmo |

Durante uma entrada, as setas movem o cursor no texto. Fora dela, as setas, [[Tab]] e [[Shift+Tab]] mudam de célula.

## O que o DocCells reconhece {#types}

| Escreve-se | Obtém-se |
| --- | --- |
| `12`, `-3`, `1e5` | um número, alinhado à direita |
| `n:2.5` | um número decimal; a vírgula é o separador português |
| `n:1,234.5` | o número 1234,5; para mostrar o ponto dos milhares, escolher um [formato](nombres.html) |
| `25%`, `n:2.5%` | uma percentagem |
| `2026-11-25`, `2026/11/25` | uma data |
| `2026-11-25 14:30` | uma data e uma hora |
| `TRUE`, `FALSE` | um valor lógico |
| `n:[2, 1]` | uma [lista](listes.html) |
| `=A1+B1` | uma [fórmula](formules.html) |
| qualquer outra coisa | um texto, alinhado à esquerda |

### Datas {#dates}

Uma data escreve-se com o ano primeiro: `2026-11-25`. `25/11/2026` fica um texto, com o qual não se calcula. Para a mostrar da forma habitual, escolher **%format% › %number% › %fDate%** (`%xDate%`) ou um [formato personalizado](nombres.html#personnalise).

Um duplo clique numa célula de data abre um [calendário](controles.html#calendrier). `=TODAY()` dá a data de hoje.

### Textos feitos de algarismos {#textes}

Um número que começa por zero perde esse zero: `007` passa a 7. Para o conservar, dar antes às células o formato **%fText%** (**%format% › %number% › %fText%**), ou começar por um apóstrofo: `'007`.

## Erros de entrada frequentes {#erreurs}

| Vê-se | Causa |
| --- | --- |
| um número alinhado à esquerda | é um texto: um ponto decimal em vez da vírgula, uma unidade (`12 €`), um espaço a mais |
| `46351` em vez de uma data | uma data no formato **%fGeneral%**: dar-lhe o formato **%fDate%** |
| o texto cortado pela célula vizinha | alargar a [coluna](lignes-colonnes.html#taille), ou escolher **%wrap%** |

Para uma unidade, introduzir só o número e dar-lhe um [formato](nombres.html): moeda, ou personalizado como `c:0.00 "m"`.

=== selection
# Selecionar, copiar, preencher

## Selecionar {#selectionner}

| Ação | Seleção |
| --- | --- |
| clique | uma célula |
| arrastar | um intervalo |
| clique, depois [[Shift]] e clique | o intervalo entre os dois |
| [[Shift]] e seta | alarga o intervalo |
| [[Ctrl]] e clique ou arrasto | mais um intervalo |
| clique numa letra, num número | uma coluna, uma linha |
| arrastar sobre as letras, os números | várias colunas, várias linhas |
| [[Ctrl+A]] | toda a folha |
| caixa de nome, seta | um [intervalo com nome](noms.html) |

O endereço da seleção está na caixa de nome, à esquerda da barra de fórmulas.

## Copiar, cortar, colar {#copier}

[[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]], ou **%copy%** e **%paste%** do clique direito.
- **%paste%** do clique direito cola os valores, sem as fórmulas; [[Ctrl+V]] cola as fórmulas.
- Uma fórmula colada segue o seu novo lugar: `=B2` copiada uma linha abaixo passa a `=B3`. O sinal `$` fixa uma linha ou uma coluna ([referências](formules.html#references)).
- Uma fórmula cortada conserva as suas referências.
- Uma tabela copiada do Excel, do Numbers, de uma página web ou de um texto separado por tabulações cola-se célula a célula; números com vírgula e listas são reconhecidos como ao escrever.
- Não se cortam nem colam vários intervalos ao mesmo tempo.

## Mover {#deplacer}

Arrastar o limite da seleção: as células movem-se, com a sua formatação.

## Preencher {#recopier}

A alça azul, no canto inferior direito da seleção, arrasta-se para baixo, para cima, para a esquerda ou para a direita.

| Células de partida | A alça dá |
| --- | --- |
| uma fórmula | a fórmula, com as referências deslocadas |
| dois números, 1 e 2 | a série: 3, 4, 5… |
| um só número, texto ou data | o mesmo valor |
| duas datas | as datas seguintes, com o mesmo intervalo |

![A série 1, 2 prolongada com a alça](recopie.webp 760x300)

Sem o rato, ou num intervalo grande:

| Comando | Efeito |
| --- | --- |
| **%edit% › %fillDown%**, [[Ctrl+D]] | a primeira linha do intervalo selecionado é copiada nas seguintes |
| **%edit% › %fillRight%**, [[Ctrl+R]] | a primeira coluna é copiada nas seguintes |

Se só uma linha está selecionada, [[Ctrl+D]] copia nela a de cima; se só uma coluna, [[Ctrl+R]] copia a da esquerda. Estes comandos copiam sempre, sem fazer séries, com formatos, limites, caixas e listas pendentes.

tip: Para uma fórmula em toda uma coluna: escrevê-la em cima, selecionar dessa célula até à última, [[Ctrl+D]].

=== formules
# As fórmulas

## Escrever uma fórmula {#ecrire}

Uma fórmula começa por `=`. Contém números, textos entre aspas, referências a células, operadores e [funções](fonctions.html).

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="Total: "&SUM(B2:B6)
```

A célula mostra o resultado, a barra de fórmulas a fórmula. As células que dependem de uma célula alterada são logo recalculadas.

Em português, a vírgula é decimal e o ponto e vírgula separa os argumentos: `=ROUND(3.14159, 2)`. Os nomes das funções escrevem-se em minúsculas ou maiúsculas, em português ou em inglês: `=soma(B2:B6)` e `r:=SUM(B2:B6)` são aceites.

## Indicar as células com o rato {#souris}

Ao escrever uma fórmula, um clique numa célula da folha insere o seu endereço, um arrasto insere o intervalo. Cada referência tem a sua cor, na fórmula e na folha.

## O preenchimento automático {#completion}

Desde as primeiras letras de um nome, o DocCells propõe as funções que as contêm: [[↑]] [[↓]] para percorrer, [[Enter]], [[Tab]] ou um clique para escolher. Depois do parêntesis de abertura, uma ajuda lembra os argumentos.

![As funções propostas após as primeiras letras](completion.webp 760x560)

![A ajuda de uma função](aide-formule.webp 760x560)

## A soma automática {#somme}

{formula-sum} escreve uma soma. A sua seta propõe **%sum%**, **%average%**, **%count%**, **%max%**, **%min%** e **%allFormulas%**: a biblioteca, onde se procura uma função pelo nome, pela descrição ou pela categoria.

![A biblioteca de fórmulas](bibliotheque.webp 1280x760)

## Operadores {#operateurs}

| Operador | Função |
| --- | --- |
| `+` `-` `*` `/` | quatro operações |
| `^` | potência: `=2^10` |
| `%` | percentagem: `=20%*B2` |
| `&` | junta textos: `=A2&" "&B2` |
| `=` `<>` | igual, diferente |
| `<` `>` `<=` `>=` | comparações |
| `( )` | prioridade |

As potências vêm antes dos produtos e quocientes, depois as somas e as comparações. `=-2^2` dá −4 (4 no Excel).

## Referências {#references}

| Escrita | Designa |
| --- | --- |
| `B2` | uma célula; acompanha o preenchimento |
| `$B$2` | a mesma célula, mesmo preenchida |
| `B$2`, `$B2` | linha fixa, coluna fixa |
| `B2:D6` | um intervalo |
| `B:B`, `2:2` | uma coluna, uma linha inteira |
| `%sheet%2!B2`, `'Notas 2'!B2` | uma célula de [outra folha](feuilles.html#references) |
| `notas` | um [intervalo com nome](noms.html) |

Preenchida para baixo, `=B2*$B$1` passa a `=B3*$B$1`, `=B4*$B$1`…

## Condições {#conditions}

```
=IF(B2>=10, "aprovado", "reprovado")
=IF(AND(B2>=10, C2>=10), "sim", "não")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- Os valores lógicos escrevem-se `@TRUE()` e `@FALSE()`, com os parêntesis. Mostram-se como TRUE e FALSE.
- Um critério é um texto: `">10"`, `"<>0"`, `"Ana"`. Os carateres universais `*` e `?` não são reconhecidos.
- Uma célula vazia reconhece-se com `=B2=""`; não é igual a 0.

## Procurar numa tabela {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

A primeira procura Léa na primeira coluna da tabela e devolve a terceira; o último argumento 0 pede o valor exato. A segunda dá o nome de quem tem a melhor nota.

## Datas e horas {#dates}

Uma data é um número de dias, uma hora uma fração de dia: em células, somam-se e subtraem-se.

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

Uma data dada por `@DATE` ou `@TODAY` deve passar por uma célula para ser somada: `=TODAY()+1` dá `#VALUE!`, mas se A1 contém `=TODAY()`, `=A1+1` dá amanhã. O resultado é um número: dar-lhe um formato **%fDate%**.

## Os erros {#erreurs}

| Mostrado | Causa |
| --- | --- |
| `#NAME?` | nome desconhecido: erro de escrita, função [não calculada](fonctions.html#non-calculees), `@TRUE` sem parêntesis, texto sem aspas |
| `#VALUE!` | tipo inesperado: um texto onde é preciso um número |
| `DIV/0` | divisão por zero ou por uma célula vazia |
| `#N/A` | valor não encontrado (`@MATCH`, `@VLOOKUP`), ou `GEO` fora do DocGeo |
| `#REF!` | célula ou folha que não existe |
| `#NUM!` | número fora do domínio: `=SQRT(-1)` |
| `#ERROR!` | fórmula mal escrita, ou função não calculada |

`@IFERROR` substitui o erro de uma função (`#N/A`, `#NUM!`): `=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "ausente")`. Não substitui o de um cálculo (`DIV/0`, `#VALUE!`): contra uma divisão por zero, testar o divisor, `=IF(B2, B3/B2, "")`, que serve para um zero como para uma célula vazia.

=== listes
# Listas e complexos

> Uma célula do DocCells pode conter uma lista de números. Uma lista de dois números é também um ponto do plano, ou um número complexo.

## Escrever uma lista {#ecrire}

Entre parêntesis retos, elementos separados por pontos e vírgulas. Uma lista pode conter listas.

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

Sem `=`, a lista é um valor; com `=`, os seus elementos podem ser cálculos. Num idioma com ponto decimal, os elementos separam-se por vírgulas: `r:[2, 1]`.

## Operações {#operations}

| Operação | Resultado |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`: termo a termo, comprimentos iguais |
| `n:[1, 2, 3] * 2`, `n:[2, 4, 6] / 2` | `n:[2, 4, 6]`, `n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`: produto de complexos |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`: quociente de complexos |
| `n:[2, 1] + 3` | `n:[5, 1]`: 3 é um complexo real |
| `n:[0, 1]^2` | `n:[-1, 0]`, a menos do arredondamento |
| `n:[8, 0]^(1/3)` | a lista das três raízes cúbicas |
| `n:-[2, 1]` | `n:[-2, -1]` |

Qualquer outra combinação dá `#VALUE!`: produto de duas listas de três números, comprimentos diferentes, texto.

## Listas e funções {#fonctions}

Uma função vê uma lista como um intervalo:

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` dá o segundo elemento da lista contida em A1: a ordenada de um ponto, a parte imaginária de um complexo. Algumas [funções](fonctions.html) devolvem uma lista: `@FREQUENCY`, `@LINEST`, `@TRANSPOSE`, `@UNIQUE`, `@SPLIT`.

## Apresentação {#affichage}

Os botões {number-decrease} {number-increase} e os [formatos de número](nombres.html) aplicam-se a cada número da lista: `n:[-0.14, 0.27]`. Os valores exatos ficam.

## Exemplo: uma sucessão complexa {#exemple}

A órbita de 0 por *z* ↦ *z*² + *c*: A1 contém *c*, A2 `n:[0, 0]`, A3 a fórmula seguinte, preenchida para baixo.

```
=A2^2+$A$1
```

No [DocGeo](docgeo.html), uma coluna assim desenha-se na figura.

note: Num ficheiro Excel, uma lista é guardada como texto, e também o valor de uma fórmula que dá uma lista ([compatibilidade](excel.html#listes)).

=== noms
# Intervalos com nome

## Dar um nome {#definir}

1. Selecionar a célula ou o intervalo.
2. Clique direito › **%defineName%** (ou a seta da caixa de nome › **%nameManager%**).
3. Escrever o nome, escolher o âmbito, **%nameOk%**.

![A janela de um novo nome](noms.webp 1280x760)

| Campo | Conteúdo |
| --- | --- |
| **%nameField%** | começa por uma letra ou `_`; letras, algarismos, `_` e `.`, sem espaço; não um endereço como `B2` |
| **%scope%** | **%workbook%**: lido de todas as folhas; uma folha: lido só dela, onde prevalece sobre um nome do livro |
| **%refersTo%** | uma célula ou um intervalo, com a sua folha: `'%sheet%1'!$B$2:$B$6` |

## Usar um nome {#utiliser}

```
=AVERAGE(notas)
=preco*(1+iva)
```

- A seta da caixa de nome lista os nomes: escolher um seleciona o seu intervalo, na sua folha.
- Quando a seleção é exatamente um intervalo com nome, a caixa de nome mostra-o.
- Uma [lista pendente](controles.html#listes) pode ler um intervalo de células, indicado pelo seu endereço.

## Modificar, eliminar {#gerer}

No **%nameManager%**, clicar num nome repõe os seus campos em modificação; **%nameRemove%** elimina-o; **%nameNew%** volta a um nome vazio. Antes de eliminar um nome, substituir as fórmulas que o leem: conservam o último valor e depois deixam de se calcular.

Os nomes são guardados no ficheiro Excel e lidos dele.

=== feuilles
# As folhas

## Acrescentar, mudar de folha {#ajouter}

- {plus} acrescenta uma folha, chamada «%sheet%2», «%sheet%3»…
- Um clique num separador mostra-a; {all-sheets} lista as folhas, incluindo as ocultas, e mostra a escolhida.

## O menu de um separador {#menu}

Clique direito no separador, ou a sua seta:

| Comando | Efeito |
| --- | --- |
| **%sheetDelete%** | após confirmação; a última folha visível não pode ser eliminada |
| **%sheetCopy%** | duplica a folha |
| **%sheetRename%** | ou duplo clique no nome; sem `[ ] : ? * / ' "` |
| **%sheetColor%** | cor do separador |
| **%sheetHide%** | as fórmulas continuam a ler a folha; {all-sheets} volta a mostrá-la |
| **%sheetLeft%**, **%sheetRight%** | muda a ordem; também se pode arrastar o separador |

## Ler outra folha {#references}

O nome da folha, um ponto de exclamação, o endereço. O nome vai entre apóstrofos se contém um espaço ou um sinal.

```
=%sheet%2!B2*2
='Notas 2'!B2
=SUM('Notas 2'!B2:B6)
```

A referência escreve-se: mudar de separador ao escrever uma fórmula abandona a entrada.

Para que um intervalo seja lido de todas as folhas por um nome, [dar-lhe um nome](noms.html) com o âmbito **%workbook%**.

=== nombres
# Formatos de número

> Um formato muda a apresentação de um número, não o seu valor: os cálculos conservam todas as casas decimais.

## Escolher um formato {#choisir}

**%format% › %fNumber%**, ou a lista **%fGeneral%** da barra de botões.

| Formato | Exemplo |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`, alinhado à esquerda; a entrada fica um texto |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`; 0,25 passa a `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**, **%fTime%**, **%fDateTime%** | para as datas: `%xDate%`, `3:00 PM`, `15:00`… |

O símbolo monetário é o do idioma da interface.

| Botão | Efeito |
| --- | --- |
| {percentage-format} | percentagem |
| {number-decrease} | menos uma casa decimal |
| {number-increase} | mais uma casa decimal |

Estes botões valem também para os números de uma [lista](listes.html). Para arredondar o próprio valor, usar `@ROUND`.

## Formato personalizado {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**: escolher um formato sugerido, ou escrever um código. A pré-visualização mostra o resultado; **%guide%** lembra os sinais; **%apply%** dá-o à seleção.

![A janela dos formatos de número personalizados](format-personnalise.webp 1280x760)

| Sinal | Função | Código | 1234,5 mostra-se |
| --- | --- | --- | --- |
| `0` | um algarismo, incluindo zero | `c:0.00` | `n:1234.50` |
| `#` | um algarismo se for útil | `c:#.##` | `n:1234.5` |
| `c:,` | agrupa os milhares | `c:#,##0` | `n:1,235` |
| `%` | percentagem | `0%` | `123450%` |
| `"texto"` | um texto, uma unidade | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | notação científica | `c:0.00E+00` | `n:1.23E+03` |
| `;` | formatos de positivos, negativos, zeros, textos | `0;-0;"nulo"` | `1235` |
| `[Red]` | cor | `0;[Red]-0` | negativos a vermelho |

O código escreve-se com os separadores do idioma; a janela indica a forma em que é guardado (`#,##0.00`), a mesma do Excel.

### Datas e horas {#dates-heures}

| Código | 29 de agosto de 2026, 14:30 |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

Os nomes dos meses e dos dias mostram-se em inglês.

### Unidades {#unites}

Em **%units%**, formatos como `c:0.00 "V"`, `c:0.00 "Ω"`, `c:0.00 "mm"`: a célula continua a ser um número, com o qual se calcula.

=== mise-en-forme
# Formatação

## Texto {#texte}

| Comando | Acesso |
| --- | --- |
| negrito, itálico, sublinhado | {bold} {italic} {underline}; [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] |
| tipo de letra | lista **Arial**: treze tipos de letra |
| tamanho | lista **10**, ou **%formatMenu% › %fontSize%**: 9 a 72 |
| cor do texto, do fundo | {font-color} {background} |
| limpar a formatação | {clear-format}, **%formatMenu% › %clearFormat%** |

Na paleta de uma cor, **%resetColor%** retira-a; **%customColor%** abre o seletor do sistema.

Enquanto se modifica uma célula, a formatação aplica-se à parte selecionada do texto.

## Alinhamento {#alignement}

| Comando | Opções |
| --- | --- |
| {align-left} horizontal | esquerda, centro, direita |
| {align-top} vertical | em cima, ao meio, em baixo |
| {text-rotation-none} rotação | inclinada, vertical, empilhada |
| {text-overflow} moldagem | **%wrapOverflow%**: sobre as células vazias vizinhas; **%wrap%**: em várias linhas; **%wrapClip%**: cortado no limite |

Sem alinhamento escolhido, os números e as datas ficam à direita, o resto à esquerda.

## Limites {#bordures}

{border-all} traça o limite escolhido; a sua seta dá os lados (superior, exterior, interiores, todos, nenhum, diagonal), a **cor** e o **estilo** do traço. Escolher cor e estilo antes do lado.

## Unir {#fusion}

{merge-all} ou **%formatMenu% › %mergeCells%**:

| Comando | Efeito |
| --- | --- |
| **%mergeAll%** | uma só célula, que conserva um só conteúdo |
| **%mergeVertical%** | uma célula por coluna |
| **%mergeHorizontal%** | uma célula por linha |
| **%unmerge%** | devolve as células |

Um intervalo que contém células unidas não pode ser ordenado nem filtrado.

## Cores alternadas {#alternees}

{alternating} ou **%formatMenu% › %alternatingColors%** colore uma linha em cada duas do intervalo selecionado, com uma linha de cabeçalho se se quiser. As três cores escolhem-se.

![A janela das cores alternadas](couleurs-alternees.webp 1280x760)

São cores de fundo normais: não acompanham uma ordenação nem uma linha inserida. **%clearAlternating%** apaga-as do intervalo.

## Grelha {#quadrillage}

{gridlines} ou **%view% › %show% › %gridlines%** oculta ou mostra as linhas cinzentas, em todas as folhas do livro. A [impressão](impression.html) tem o seu próprio ajuste.

Para uma cor que depende do valor, ver [Formatação condicional](conditionnelle.html).

=== conditionnelle
# Formatação condicional

> Uma regra muda o aspeto das células de um intervalo que cumprem uma condição. Acompanha os valores, introduzidos ou calculados.

## Criar uma regra {#creer}

1. Selecionar o intervalo, sem o cabeçalho.
2. {conditional} ou **%format% › %conditionalFormatting%**.
3. Escolher a condição, o valor a comparar, as cores ou o estilo.
4. **%cfAdd%**.

![A janela da formatação condicional, com uma regra aplicada](conditionnelle.webp 1280x760)

| Condição | A célula |
| --- | --- |
| `<` | é inferior a |
| `>` | é superior a |
| `=` | é igual a |
| `!=` | é diferente de |
| `[]` | está entre dois valores, extremos incluídos |
| `abc` | contém um texto, maiúsculas ou minúsculas |

## Com que comparar {#comparer}

| %cfCompareTo% | Exemplo |
| --- | --- |
| **%cfValue%** | as notas inferiores a 10 |
| **%cfCell%** | as notas inferiores ao limiar escrito em `F1` |
| **%cfColumn%** | na coluna C, os valores superiores aos da coluna B, linha a linha |

## Aspeto {#apparence}

**%cfText%** e **%cfBackground%** escolhem as cores, **%cfNone%** retira-as; **B**, *I*, **U** põem em negrito, itálico, sublinhado. É preciso pelo menos uma cor ou um estilo.

## Várias regras {#regles}

A coluna da esquerda lista as regras da folha: **%cfEdit%**, **%cfDelete%**. Se várias regras se aplicam a uma célula, prevalece a última da lista, cor a cor.

warn: Num intervalo coberto por uma regra, as cores de texto e de fundo dadas diretamente às células deixam de se mostrar.

As regras são guardadas no ficheiro Excel como formatações condicionais do Excel.

=== lignes-colonnes
# Linhas e colunas

## Tamanho {#taille}

| Ação | Efeito |
| --- | --- |
| arrastar o limite direito do cabeçalho de uma coluna | muda a sua largura |
| arrastar o limite inferior do cabeçalho de uma linha | muda a sua altura |
| clique direito no cabeçalho › **%width%**, **%height%** | tamanho em píxeis, para todas as colunas ou linhas selecionadas |

## Inserir, eliminar {#inserer}

Clique direito numa célula ou num cabeçalho: **%rowAbove%**, **%rowBelow%**, **%columnLeft%**, **%columnRight%**. O número escreve-se no campo. Clique direito num cabeçalho: **%deleteRow%**, **%deleteColumn%**.

![O menu do clique direito](menu-contextuel.webp 760x650)

As fórmulas são ajustadas: as suas referências acompanham as células deslocadas. O limite é de 10 000 linhas e 1 000 colunas.

## Ocultar {#masquer}

Clique direito no cabeçalho › **%hideRow%**, **%hideColumn%**. As células ocultas continuam a ser calculadas. Para as voltar a mostrar, selecionar os cabeçalhos à volta, depois clique direito › **%showHidden%**.

## Fixar {#figer}

As linhas e colunas fixadas ficam visíveis durante o deslocamento. Selecionar a célula limite, depois {freeze-row-col} ou **%view% › %freeze%**:

| Comando | Ficam visíveis |
| --- | --- |
| **%freezeRow%** | as linhas até à da célula, incluída |
| **%freezeColumn%** | as colunas até à da célula, incluída |
| **%freezeCell%** | ambas |
| **%freezeCancel%** | nada em particular |

Para manter a linha de cabeçalho: clicar numa célula da linha 1, **%freezeRow%**.

=== tri-filtre
# Ordenar, filtrar, procurar

## Ordenar {#trier}

| Comando | Efeito |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**, **%sortDescending%** | ordena a seleção pela sua primeira coluna; também com {filter} e com o clique direito |
| clique direito › **%sortRange%** | escolhe a coluna, a ordem, e se a primeira linha é um cabeçalho |

![A janela para ordenar um intervalo](tri.webp 1280x760)

Selecionar toda a tabela, não uma só coluna: as linhas devem ficar inteiras. Um intervalo que contém células unidas não se ordena.

## Filtrar {#filtrer}

1. Selecionar a tabela, incluindo o cabeçalho.
2. **%data% › %sortAndFilter% › %createFilter%**, ou {filter}, ou clique direito › **%filterRange%**.
3. Clicar na seta de uma coluna.

![O filtro de uma coluna](filtre.webp 1280x760)

| No menu de uma coluna | Efeito |
| --- | --- |
| **%sortByAsc%**, **%sortByDesc%** | ordena as linhas da tabela |
| **%filterByColor%** | pela cor do fundo ou do texto |
| **%filterByValues%** | marcar os valores a manter; **%filterAll%**, **%filterNone%**, **%filterInverse%**; o campo procura um valor |
| **%filterConfirm%** | aplica |
| **%clearFilter%** | retira o filtro da tabela |

As linhas excluídas são ocultadas, não eliminadas. Os filtros de várias colunas acumulam-se. **%data% › %sortAndFilter% › %clearFilter%** retira o filtro.

## Procurar, substituir {#rechercher}

[[Ctrl+F]] abre **%find%**, [[Ctrl+H]] **%replace%**.

![A procura](rechercher.webp 1280x660)

| Opção | Efeito |
| --- | --- |
| **%regex%** | o texto procurado é uma expressão regular: `^A` encontra o que começa por A |
| **%wholeWord%** | a célula inteira é igual ao texto |
| **%matchCase%** | distingue maiúsculas e minúsculas |
| **%findAll%** | lista as células encontradas; um clique numa linha leva até ela |
| **%findNext%** | vai para a seguinte |
| **%replaceOne%**, **%replaceAll%** | uma célula, todas |

A procura incide sobre a folha visível.

=== controles
# Caixas, listas e calendário

![Caixas de verificação, uma lista pendente e o calendário de uma data](controles.webp 1280x560)

## Caixas de verificação {#cases}

Selecionar as células, **%insert% › %checkbox%**. Um clique marca ou desmarca; a célula vale TRUE ou FALSE.

```
=IF(B2, "feito", "por fazer")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

A segunda fórmula soma os valores da coluna C cuja caixa está marcada; a terceira conta as caixas marcadas.

## Listas pendentes {#listes}

Selecionar as células, **%insert% › %dropdown%**.

| Origem | Conteúdo |
| --- | --- |
| **%listValues%** | as opções, uma por campo; **%addOption%**; sem vírgula |
| **%listRange%** | um intervalo cujas células são as opções: `%sheet%2!$A$1:$A$10` |

Um intervalo sem `$` desloca-se de uma célula para outra, como uma fórmula preenchida. Se as suas células mudam, as opções acompanham.

A célula mostra uma seta; um clique abre as opções. Um valor diferente dos da lista não é aceite.

## Calendário {#calendrier}

Um duplo clique numa célula de data abre um calendário: escolher um dia, mudar de mês com **<** e **>**, **%today%** para a data de hoje. Abre-se em qualquer célula com formato de data, mesmo vazia, salvo se contém uma fórmula ou está [bloqueada](protection.html).

tip: Para uma coluna de datas a preencher com o calendário: selecioná-la e dar-lhe o formato **%fDate%**.

## Retirar {#retirer}

[[Delete]] retira a caixa ou a lista da célula, com o seu valor.

Caixas e listas são guardadas no ficheiro Excel; as caixas são aí caixas de verificação do Excel.

=== graphiques
# Gráficos e sparklines

## Criar um gráfico {#creer}

1. Selecionar os dados.
2. {chart} ou **%insert% › %chart%**.
3. Escolher o tipo e as opções; a pré-visualização acompanha.
4. **%chartAdd%**, depois **%chartClose%**.

![A janela dos gráficos](graphique.webp 1280x900)

| Seleção | Interpretação |
| --- | --- |
| uma coluna ou uma linha de números | os dados |
| duas colunas | etiquetas na primeira, dados na segunda |
| duas linhas | etiquetas na primeira, dados na segunda |
| duas colunas separadas, escolhidas com [[Ctrl]] | o mesmo |

Um gráfico mostra uma série: uma linha ou uma coluna de dados. As células sem número, como um cabeçalho, são ignoradas.

## Tipos {#types}

| Tipo | Para | Etiquetas |
| --- | --- | --- |
| **%tBar%** | comparar | sob as barras |
| **%tLine%** | uma evolução | em abcissa |
| **%tScatter%** | uma relação entre duas grandezas | são as abcissas, se forem números; senão 1, 2, 3… |
| **%tPie%** | partes; valores positivos | na legenda ou nos setores |

Até 120 valores, 24 para os setores.

![Os quatro tipos de gráficos](graphiques.webp 1280x640)

## Opções {#options}

| Campo | Conteúdo |
| --- | --- |
| **%chartTitle%** | obrigatório; mostrado no topo do gráfico |
| **%chartColor%** | seletor ou código `#4F81BD`; os setores têm as suas próprias cores |
| **%chartRange%** | o intervalo: `B2:B6` |
| **%chartLabels%** | **%lNone%**; **%lColumn%** (`A`); **%lRow%** (`1`); **%lRange%**, do mesmo tamanho que os dados |
| **%chartOptions%** | valores, legenda, abcissas, ordenadas, grelha |

## Mover, modificar {#modifier}

- Arrastar a faixa do título move o gráfico; arrastar o seu canto inferior direito redimensiona-o.
- **%chartEdit%** reabre a janela, **%chartDelete%** elimina-o. A janela lista também todos os gráficos da folha.
- O gráfico acompanha os dados das suas células.

Os gráficos são guardados no ficheiro Excel como verdadeiros gráficos, e relidos pelo DocCells. Não são [impressos](impression.html) com a folha.

## Sparklines {#sparklines}

A função `SPARKLINE` desenha um gráfico em miniatura na célula.

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![Sparklines em linha e em colunas](sparklines.webp 900x300)

As opções escrevem-se entre chavetas: o nome, uma barra invertida, o valor; um ponto e vírgula entre duas opções.

| `charttype` | Desenho | Opções próprias |
| --- | --- | --- |
| `"line"` (predefinição) | linha | `color`, `linewidth`, `xmin`, `xmax`, `ymin`, `ymax` |
| `"bar"` | barras empilhadas | `max`, `color1`, `color2` |
| `"column"` | colunas | `color`, `negcolor`, `lowcolor`, `highcolor`, `firstcolor`, `lastcolor`, `axis`, `axiscolor`, `ymin`, `ymax` |
| `"winloss"` | ganhos e perdas | as mesmas, sem `ymin` nem `ymax` |

Opções comuns: `empty` (`"zero"` ou `"ignore"`), `nan` (`"convert"` ou `"ignore"`), `rtl` (da direita para a esquerda). A [documentação de SPARKLINE](../../sparkline/pt.html) dá todos os valores, com exemplos.

Para um desenho maior, aumentar a linha e a coluna, ou unir células.

=== images-liens
# Imagens e ligações

## Imagens {#images}

{image} ou **%insert% › %image%** insere uma imagem do computador no lugar da seleção.

| Ação | Efeito |
| --- | --- |
| arrastar a imagem | move-a |
| arrastar uma alça | redimensiona-a |
| [[Delete]], com a imagem selecionada | elimina-a |

As imagens são guardadas no ficheiro Excel, no seu lugar.

## Ligações {#liens}

Selecionar uma célula, clique direito › **%link%**.

| %linkType% | Endereço |
| --- | --- |
| página web (**%linkWeb%**) | `https://…` |
| intervalo de células (**%linkCells%**) | `%sheet%1!A1:C8` |
| **%linkSheet%** | uma folha do livro |

**%linkText%** passa a ser o conteúdo da célula, azul e sublinhado. Quando a célula está selecionada, **%linkOpen%** aparece por baixo.

warn: As ligações não são guardadas no ficheiro Excel: só o seu texto.

=== impression
# Imprimir

**%file% › %print%** ou [[Ctrl+P]] mostra as páginas tal como serão impressas.

![A pré-visualização da impressão](imprimer.webp 1280x760)

| Ajuste | Opções |
| --- | --- |
| **%printContent%** | a folha ativa, ou as células selecionadas antes de abrir a janela |
| **%printPaper%** | A4, Letter |
| **%printOrientation%** | vertical, horizontal |
| **%printScale%** | **%printActual%**; **%printWidth%**: todas as colunas na largura de uma página; **%printPage%** |
| **%printMargins%** | normais, estreitas, largas |
| **%printFormatting%** | grelha, cabeçalhos de linhas e colunas, cores de fundo |

**%printButton%** abre a janela do navegador, onde se escolhe a impressora ou guardar em PDF.

- Só se imprimem as células, com a sua formatação: nem gráficos, nem imagens, nem sparklines.
- As linhas e colunas ocultas não se imprimem.
- Uma caixa imprime-se como TRUE ou FALSE.
- Imprime-se uma folha de cada vez.

tip: Para imprimir com os gráficos, guardar o livro e abri-lo no Excel ou no LibreOffice.

=== protection
# Proteger

> Um livro protegido só pode ser alterado nas células desbloqueadas: prepara-se assim uma folha de exercícios.

## Preparar uma folha para alunos {#preparer}

1. Selecionar as células a preencher, clique direito › **%unlock%**.
2. {protect} ou **%tools% › %protectWorkbook%**.
3. Guardar, depois [divulgar o ficheiro ou a sua ligação](partager.html).

No início todas as células estão bloqueadas; o bloqueio só tem efeito num livro protegido. **%lock%** anula-o.

## O que a proteção bloqueia {#effets}

| Num livro protegido | Célula bloqueada | Célula desbloqueada |
| --- | --- | --- |
| escrever, apagar | não | sim |
| calendário de uma data | não | sim |
| larguras e alturas | não | não |
| cores alternadas, inserção de caixas e listas, preenchimento por menu | não | não |
| formatação, inserção de linhas e colunas, gráficos | sim | sim |

A proteção abrange todas as folhas. É guardada no ficheiro Excel, com as células desbloqueadas, e relida pelo DocCells e pelo Excel.

## Modo aluno {#eleve}

`?mode=student` no endereço abre o DocCells sem o botão {protect} nem os comandos **%unlock%** e **%defineName%**; **%protectWorkbook%** fica desativado. O aluno não pode retirar a proteção.

```
https://…/doccells/?mode=student&url=https://…/exercicio.xlsx
```

note: É uma proteção de uso, sem palavra-passe: quem abrir o ficheiro noutra folha de cálculo, ou sem `mode=student`, pode retirá-la.

=== partager
# Partilhar e integrar

## Um livro por uma ligação {#url}

`?url=` seguido do endereço de um ficheiro `.xlsx` em linha abre-o no DocCells.

```
https://…/doccells/?url=https://exemplo.org/notas.xlsx
```

O sítio que aloja o ficheiro deve autorizar a sua leitura por outros sítios (cabeçalho CORS); um ficheiro colocado ao lado do DocCells, no mesmo sítio, não tem essa restrição. Cada um abre a sua cópia: as alterações não voltam ao ficheiro original.

## Um Google Sheet {#google}

O endereço de um Google Sheet também serve.

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- Partilhá-lo com «Qualquer pessoa com o link».
- O DocCells lê uma cópia em formato Excel em cada abertura: o documento Google não é alterado.
- O sítio que aloja o DocCells deve executar PHP; 25 MB no máximo.

## Opções do endereço {#options}

| Opção | Efeito |
| --- | --- |
| `url=…` | abre um livro ou um Google Sheet |
| `mode=student` | [modo aluno](protection.html#eleve) |
| `lang=pt` | impõe o idioma: `de`, `el`, `en`, `es`, `fr`, `hi`, `it`, `nl`, `pt`, `ru`, `zh-CN`, `zh-TW` |

As opções seguem-se, separadas por `&`: `?lang=pt&mode=student&url=…`. A primeira vem depois de `?`.

## Numa página web {#integrer}

```
<iframe src="https://…/doccells/?url=https://exemplo.org/notas.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

Numa moldura, o DocCells não tem menus, nem botões para abrir e guardar, nem cópia de recuperação: mostra a barra de botões, a barra de fórmulas e a folha.

## Por programa {#programme}

Uma página pode comandar o DocCells: carregar um livro, ler e escrever células, seguir os seus valores. A opção `embed` abre este modo; está descrito, para programadores, no ficheiro [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) do projeto (em francês).

=== docgeo
# Com o DocGeo

> O DocGeo, o programa de geometria dinâmica do DocTools, contém o DocCells: uma folha ao lado de uma figura, cada uma a ler a outra.

No DocGeo, **%file% › %gView% › %gSheetView%** acrescenta uma folha ao lado da figura; **%file% › %gTab% › %gSheetTab%** faz dela um separador.

## A função GEO {#geo}

Numa célula, `GEO` lê o valor de um objeto da figura, indicado pelo seu nome entre aspas.

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'Figura 1'!c")
```

- A célula acompanha a figura enquanto é manipulada.
- Um ponto é lido como a [lista](listes.html) das suas coordenadas: `=GEO("A")*2` também é um ponto.
- Ao escrever uma fórmula, um clique num objeto da figura escreve nela `GEO` e o seu nome.
- Um objeto desconhecido dá `#N/A`. Fora do DocGeo, `GEO` dá sempre `#N/A`.
- `GEO` tem o mesmo nome em todos os idiomas.

## A figura lê as células {#figure}

Numa fórmula do DocGeo, `!B3` designa uma célula, `!B2:B21` um intervalo.

## Diferenças em relação ao DocCells só {#differences}

| No DocGeo | |
| --- | --- |
| Menus e botões | nas barras do DocGeo, quando a folha está ativa |
| Ficheiro | o do DocGeo: a folha é guardada no `.dgo`, incluindo listas e ligações |
| Folhas | uma por vista; vários separadores de folha de cálculo leem-se entre si |
| Anular | [[Ctrl+Z]] nas células só anula as células |

A página [A folha de cálculo](https://doctools.org/apps/docgeo/tutorials/pt/tableur.html) do manual do DocGeo dá os pormenores.

=== fonctions
# As funções

> As %functions% funções calculadas pelo DocCells, por domínio, com um exemplo de cada.

- Pesquisa: escrever o nome de uma função, em português ou em inglês, no campo no topo da página ([[/]]) leva à sua linha.
- Os argumentos separam-se por ponto e vírgula; os argumentos entre parêntesis retos `[ ]` são facultativos. O nome inglês, em pequeno, é aceite ao escrever.
- `@TRUE()` e `@FALSE()` escrevem-se com os parêntesis; também se pode escrever 1 e 0.
- Um argumento «intervalo» pode ser uma [lista](listes.html): `=AVERAGE([12, 15, 8])`.
- Ver também [As fórmulas](formules.html): operadores, referências, erros.

## As células dos exemplos {#exemples}

Os exemplos leem esta folha:

%%sample%%

%%functions%%

## Funções não calculadas {#non-calculees}

O preenchimento automático e a biblioteca do DocCells nomeiam também funções que não são calculadas: dão `#NAME?` ou `#ERROR!`. O mesmo vale para funções recentes do Excel.

| Não calculadas | Em vez disso |
| --- | --- |
| `@TEXT`, `@FIXED`, `@DOLLAR` | um [formato de número](nombres.html) na célula |
| `PROCX`, `DESLOCAMENTO`, `INDIRETO`, `ENDEREÇO` | `@INDEX` e `@MATCH`, `@VLOOKUP`, `@CHOOSE` |
| `FILTRAR`, `ORDENAR`, `SEQUÊNCIA`, `LET`, `LAMBDA` | [ordenar e filtrar](tri-filtre.html); [preencher](selection.html#recopier) uma fórmula |
| `MÁXIMO.SE.S`, `MÍNIMO.SE.S`, `UNIRTEXTO` | um filtro; o operador `&` |
| `MATRIZ.MULT`, `MATRIZ.DETERM`, `MATRIZ.INVERSA` | `@SUMPRODUCT`, uma fórmula por elemento |
| `HIPERLIGAÇÃO` | [inserir uma ligação](images-liens.html#liens) |
| nomes com ponto do Excel: `RANK.EQ`, `VAR.S`, `NORM.DIST`… | o nome sem ponto ou o antigo: `@RANK`, `@VAR`, `@NORMDIST` |
| funções de base de dados (`@DSUM`…), cupões e títulos (`@PRICE`, `@COUPNUM`…), `@ISBLANK`, `@CELL`, `@ISFORMULA` | `@SUMIFS`; `=A1=""` para uma célula vazia |

=== raccourcis
# Atalhos e gestos

## Ficheiro {#fichier}

| Teclas | Efeito |
| --- | --- |
| [[Ctrl+O]] | abrir |
| [[Ctrl+S]] | guardar; descarregar, no Firefox e no Safari |
| [[Ctrl+P]] | imprimir |

## Edição {#edition}

| Teclas | Efeito |
| --- | --- |
| [[Ctrl+Z]]; [[Ctrl+Y]], [[Ctrl+Shift+Z]] | anular; refazer |
| [[Ctrl+C]], [[Ctrl+X]], [[Ctrl+V]] | copiar, cortar, colar |
| [[Ctrl+D]]; [[Ctrl+R]] | preencher para baixo; para a direita |
| [[Delete]], [[⌫]] | esvaziar as células |
| [[Ctrl+F]]; [[Ctrl+H]] | procurar; substituir |

## Formatação {#mise-en-forme}

| Teclas | Efeito |
| --- | --- |
| [[Ctrl+B]], [[Ctrl+I]], [[Ctrl+U]] | negrito, itálico, sublinhado |

## Deslocar-se, selecionar {#se-deplacer-selectionner}

| Teclas | Efeito |
| --- | --- |
| setas | célula vizinha |
| [[Tab]], [[Shift+Tab]] | célula seguinte, anterior |
| [[Shift]] e seta | alargar a seleção |
| [[Shift]] e clique | selecionar até à célula |
| [[Ctrl]] e clique | acrescentar à seleção |
| [[Ctrl+A]] | toda a folha |

## Entrada {#saisie}

| Teclas | Efeito |
| --- | --- |
| [[F2]], [[Enter]], duplo clique | modificar a célula |
| [[Enter]] | confirmar, descer |
| [[Esc]] | abandonar |
| [[Alt+Enter]] | mudar de linha na célula |
| [[↑]] [[↓]], [[Enter]], [[Tab]] | percorrer, escolher uma função proposta |
| clique ou arrasto na folha | inserir uma referência na fórmula |

## Rato {#souris}

| Gesto | Efeito |
| --- | --- |
| arrastar a alça azul | [preencher](selection.html#recopier) |
| arrastar o limite da seleção | [mover](selection.html#deplacer) |
| arrastar o limite de um cabeçalho | [mudar uma largura, uma altura](lignes-colonnes.html#taille) |
| clique direito | menu da célula, do cabeçalho, do separador |
| duplo clique numa data | [calendário](controles.html#calendrier) |
| duplo clique num separador | mudar o nome da folha |
| arrastar um separador | mover a folha |
| largar um ficheiro `.xlsx` | abri-lo |

=== excel
# Compatibilidade com o Excel

> O DocCells lê e escreve o formato Excel `.xlsx`. O seguinte conserva-se, nos dois sentidos.

## O que se conserva {#conserve}

| Elemento | Observação |
| --- | --- |
| valores, textos, datas, fórmulas | as fórmulas mostram-se no idioma do DocCells |
| [formatos de número](nombres.html) | incluindo os personalizados |
| tipo de letra, cores, alinhamento, rotação, moldagem | |
| limites, células unidas | |
| larguras, alturas, linhas e colunas ocultas | |
| [linhas e colunas fixadas](lignes-colonnes.html#figer), grelha | |
| várias folhas | |
| [intervalos com nome](noms.html) | |
| [formatação condicional](conditionnelle.html) | as regras do DocCells, as regras simples do Excel (comparação, texto contido) |
| [caixas, listas pendentes](controles.html) | |
| [gráficos](graphiques.html) | escritos como gráficos do Excel; os do DocCells são relidos |
| [imagens](images-liens.html) | |
| [filtros](tri-filtre.html#filtrer) | |
| [proteção](protection.html), células desbloqueadas | |

## O que não {#perdu}

| Elemento | Passa a ser |
| --- | --- |
| [ligações](images-liens.html#liens) | o seu texto |
| [listas](listes.html) nas células | um texto, `n:[2, 1]` |
| sparklines do DocCells ou do Google Sheets | uma fórmula `SPARKLINE`, relida pelo DocCells; desconhecida do Excel |
| gráficos criados no Excel | não conservados |
| tabelas dinâmicas, macros, segmentações, comentários | não conservados |
| formatação condicional com escalas de cor, barras, ícones | não conservada |

tip: Antes de substituir um livro Excel complexo, guardá-lo a partir do DocCells com outro nome (**%saveAs%**).

## Listas {#listes}

Uma lista reaberta de um `.xlsx` é um texto: voltar a escrevê-la faz dela uma lista. Uma lista calculada por uma fórmula volta a ser uma lista quando a fórmula é recalculada.

## Fórmulas {#formules}

Ao abrir, uma fórmula conserva em geral o resultado guardado pelo Excel até que uma das suas células mude. Uma função [não calculada pelo DocCells](fonctions.html#non-calculees) dá então `#NAME?` ou `#ERROR!`.

## Outros formatos {#formats}

| Formato | Como |
| --- | --- |
| `.csv` | abrir o ficheiro num editor de texto, copiar, colar no DocCells se os valores estão separados por tabulações; senão, convertê-lo em `.xlsx` |
| `.ods`, `.xls` | guardá-los em `.xlsx` com o LibreOffice ou o Excel |
| Google Sheets | [pela sua ligação](partager.html#google), ou descarregado em `.xlsx` |
| PDF | [imprimir](impression.html), «Guardar como PDF» |

=== faq
# Perguntas frequentes

## Entrada {#saisie}

### Uma data que escrevi não é reconhecida

`25/11/2026` é um texto para o DocCells. Escrever `2026-11-25`, depois escolher o formato **%fDate%** ([datas](saisie.html#dates)).

### Aparece um número em vez de uma data

As datas são números de dias: dar às células o formato **%fDate%** (**%format% › %number%**).

### Os meus números não se somam

Alinhados à esquerda, são textos. Em português, a vírgula é decimal; uma unidade escrita na célula faz dela um texto ([tipos](saisie.html#types)).

### O zero no início de um número desaparece

Dar o formato **%fText%** antes de escrever, ou começar por um apóstrofo ([textos](saisie.html#textes)).

### Os números esperam um ponto em vez de uma vírgula

O DocCells segue o idioma do navegador. `?lang=pt` impõe-no ([idioma](demarrage.html#langue)).

## Fórmulas {#formules}

### `#NAME?` com VERDADEIRO ou FALSO

Escrever `@TRUE()` e `@FALSE()`, ou 1 e 0 ([condições](formules.html#conditions)).

### `#NAME?` com uma função proposta pelo DocCells

Nem todas as funções propostas são calculadas ([funções não calculadas](fonctions.html#non-calculees)).

### `@IFERROR` deixa passar DIV/0

Testar o divisor: `=IF(B2, A2/B2, "")` ([erros](formules.html#erreurs)).

### Colar não conserva as minhas fórmulas

**%paste%** do clique direito cola os valores; [[Ctrl+V]] cola as fórmulas ([copiar](selection.html#copier)).

### Escrever o nome de um mês ou formatar um número num texto

A função `@TEXT` não é calculada: dar um [formato](nombres.html) a uma célula à parte.

### Contar as caixas marcadas

`=SUMPRODUCT(B2:B6, B2:B6)` ([caixas](controles.html#cases)).

### `=TODAY()+1` dá #VALUE!

Pôr `=TODAY()` numa célula e somar a essa célula ([datas](formules.html#dates)).

## Apresentação {#presentation}

### A cor de uma célula não muda

A célula está no intervalo de uma regra de [formatação condicional](conditionnelle.html#regles).

### Um botão desapareceu

A janela é estreita: está atrás de {more}.

### Ordenar ou filtrar é recusado

O intervalo contém células unidas: separá-las.

## Ficheiros {#fichiers}

### Guardar descarrega um novo ficheiro

É o caso no Firefox e no Safari. O Chrome e o Edge escrevem no ficheiro ([guardar](demarrage.html#enregistrer)).

### A página fechou sem guardar

Reabrir o DocCells no mesmo navegador: propõe restaurar a cópia ([recuperar](demarrage.html#recuperer)).

### O meu gráfico não é impresso

A impressão só mostra as células ([imprimir](impression.html)).

### Uma ligação `?url=` não abre o meu livro

O sítio do ficheiro talvez recuse a leitura por outros sítios. Um Google Sheet deve ser partilhado por ligação ([partilhar](partager.html)).

### As minhas ligações desapareceram

Não são guardadas no formato Excel ([o que não se conserva](excel.html#perdu)).

## Alunos {#eleves}

### Um aluno pode alterar as fórmulas?

Não num livro protegido, fora das células desbloqueadas ([proteger](protection.html)). Acrescentar `mode=student` à ligação retira-lhe o meio de remover a proteção.
