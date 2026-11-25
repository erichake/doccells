=== groups | 入门 | 输入与计算 | 呈现 | 使用数据 | 分发 | 参考

=== categories | 函数 | 说明与示例 | 数学 | 三角 | 逻辑 | 统计 | 概率分布与检验 | 查找与列表 | 文本 | 日期与时间 | 财务 | 进制、单位、特殊函数 | 文本形式的复数 | 信息

=== index | 首页
# DocCells 用户手册

> DocCells 是在浏览器中使用的多语言电子表格，无需安装，无需账户。它可以打开和保存 Excel 工作簿（.xlsx）。

<div class="buttons"><a href="../../index.html?lang=zh-CN">打开 DocCells</a></div>

![DocCells 窗口：菜单、按钮、公式栏、设置了格式的成绩表和一个图表](interface.webp 1280x760)

## 六个基本操作

| 目的 | 操作 |
| --- | --- |
| 输入 | 单击单元格，键入，[[Enter]]（[输入数据](saisie.html)） |
| 计算 | 键入 `=` 和公式：`=AVERAGE(B2:B6)`（[公式](formules.html)） |
| 复制公式 | 拖动选区的蓝色手柄，或 [[Ctrl+D]]（[填充](selection.html#recopier)） |
| 设置格式 | **%format%** 菜单或按钮（[格式设置](mise-en-forme.html)） |
| 绘制图表 | 选择数据，{chart}（[图表](graphiques.html)） |
| 保存 | [[Ctrl+S]]：Excel 文件（[打开与保存](demarrage.html)） |

## 目录 {#sommaire}

- [打开与保存](demarrage.html)：文件、最近文件、恢复、Google 表格、语言。
- [界面](interface.html)：菜单、按钮、公式栏、标签、缩放。
- [输入数据](saisie.html)，[选择、复制、填充](selection.html)。
- [公式](formules.html)，[列表与复数](listes.html)，[命名区域](noms.html)，[工作表](feuilles.html)。
- [数字格式](nombres.html)，[格式设置](mise-en-forme.html)，[条件格式](conditionnelle.html)，[行与列](lignes-colonnes.html)。
- [排序、筛选、查找](tri-filtre.html)，[复选框、列表与日历](controles.html)，[图表与迷你图](graphiques.html)，[图片与链接](images-liens.html)，[打印](impression.html)。
- 为学生[保护](protection.html)工作簿，[共享与嵌入](partager.html)，[与 DocGeo 一起使用](docgeo.html)。
- 参考：[%functions% 个函数](fonctions.html)，[快捷键](raccourcis.html)，[与 Excel 的兼容性](excel.html)，[常见问题](faq.html)。

## 约定

- 按钮用其图标表示（{bold} 粗体）。
- 在 Mac 上，[[Ctrl]] 指 [[⌘]]。
- 公式使用英文函数名、小数点，参数之间用逗号分隔。
- 搜索手册：[[/]] 或 [[Ctrl+K]]。词语可按任意顺序输入；输入函数名会找到它所在的行。

=== demarrage
# 打开与保存

## 开始 {#nouveau}

DocCells 打开时是一个只有一张工作表的空工作簿。要重新从空工作簿开始，请刷新页面，或在浏览器的另一个标签页中打开 DocCells。

## 打开工作簿 {#ouvrir}

| 方式 | 效果 |
| --- | --- |
| {open}、**%file% › %open%**、[[Ctrl+O]] | 选择计算机上的 `.xlsx` 文件 |
| 将文件拖到页面上 | 遮罩提示放置位置；该工作簿替换当前打开的工作簿 |
| **%file% › %openRecent%** | 最近打开或保存的十个文件（Chrome 和 Edge） |
| `?url=…` 链接 | 在线工作簿或 Google 表格（[共享](partager.html#url)） |

只读取 Excel `.xlsx` 格式。旧的 `.xls`、`.ods` 和 `.csv` 文件需先转换。从 Excel 文件中保留的内容见[与 Excel 的兼容性](excel.html)。

warn: 打开工作簿会替换当前显示的工作簿：请先保存更改。

### 最近文件 {#recents}

浏览器可能再次请求读取文件的权限。已移动、重命名或删除的文件会从列表中移除。**%clearRecentFiles%** 清空列表。列表保存在本计算机的此浏览器中。

## 保存 {#enregistrer}

### Chrome 和 Edge

| 命令 | 效果 |
| --- | --- |
| {save}、**%file% › %save%**、[[Ctrl+S]] | 第一次询问文件位置；之后直接替换，不再询问 |
| **%file% › %saveAs%** | 选择另一个文件 |

用 {open}、从最近文件或通过拖放打开的文件会保存回原处；浏览器会请求一次修改权限。

工作簿的名称在菜单栏末尾。红点表示有未保存的更改；此时浏览器标签页的标题以 ● 开头。

### Firefox、Safari

这些浏览器不允许写入文件。**%file% › %export%** 或 [[Ctrl+S]] 以当前工作簿的名称下载工作簿。

## 恢复未保存的工作簿 {#recuperer}

只要有未保存的更改，DocCells 就在浏览器中保留一份副本，每次更改后不到一秒即更新。如果页面未保存就关闭，下次打开 DocCells 时会显示副本的日期，并询问是否恢复（**%restore%** 或 **%ignore%**）。

- 保存、导出或打开另一个工作簿会清除该副本。
- 忽略副本会将其永久删除。
- 仅当 DocCells 占据整个页面时才保留副本，嵌入其他页面时不保留。

## 语言 {#langue}

DocCells 在其界面的十二种语言中采用浏览器的语言：德语、俄语、法语、荷兰语、葡萄牙语、西班牙语、希腊语、意大利语、印地语、英语、简体中文和繁体中文。其他语言使用英语。地址中的 `?lang=zh-CN` 可指定语言。

语言会改变菜单、函数名、小数分隔符、货币符号和日期显示顺序。保存的文件与语言无关：用法语编写的工作簿在德语界面中打开时，公式显示为德语。

=== interface
# 界面

![DocCells 窗口](interface.webp 1280x760)

从上到下：菜单栏、按钮栏、公式栏、工作表、工作表标签和缩放。

## 菜单 {#menus}

| 菜单 | 内容 |
| --- | --- |
| **%file%** | [打开、保存](demarrage.html)，[打印](impression.html) |
| **%edit%** | 撤销、重做，[向下、向右填充](selection.html#recopier) |
| **%view%** | [网格线](mise-en-forme.html#quadrillage)，[冻结](lignes-colonnes.html#figer) |
| **%insert%** | [图片](images-liens.html)，[图表](graphiques.html)，[复选框、下拉列表](controles.html) |
| **%format%** | [数字](nombres.html)，[文本、对齐、合并](mise-en-forme.html)，[交替颜色](mise-en-forme.html#alternees)，[条件格式](conditionnelle.html) |
| **%data%** | [排序和筛选](tri-filtre.html) |
| **%tools%** | [保护](protection.html)，本手册（**%manual%**），DocTools，源代码，版本（**%about%**） |

勾号表示已启用的选项：显示网格线、冻结单元格、粗体、筛选、受保护的工作簿。

![格式菜单和数字格式](menus.webp 1280x620)

## 按钮栏 {#boutons}

| 按钮 | 作用 |
| --- | --- |
| {open} {save} | [打开、保存](demarrage.html) |
| {gridlines} | 显示或隐藏[网格线](mise-en-forme.html#quadrillage) |
| {alternating} | [交替颜色](mise-en-forme.html#alternees) |
| {conditional} | [条件格式](conditionnelle.html) |
| {protect} | [保护](protection.html)；工作簿受保护时呈蓝色 |
| {chart} | [插入图表](graphiques.html) |
| {image} | [插入图片](images-liens.html) |
| {undo} {redo} | 撤销、重做 |
| {clear-format} | 清除格式 |
| {percentage-format} {number-decrease} {number-increase} | [百分比、减少或增加小数位](nombres.html) |
| **%fGeneral%**、**Arial**、**10** | 数字格式、字体、字号 |
| {bold} {italic} {underline} | 粗体、斜体、下划线 |
| {font-color} {background} | 文字颜色、填充颜色 |
| {border-all} {merge-all} | [边框、合并](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | 对齐、旋转、换行 |
| {freeze-row-col} | [冻结](lignes-colonnes.html#figer) |
| {formula-sum} | [自动求和](formules.html#somme)及其他公式 |
| {filter} | [排序和筛选](tri-filtre.html) |

按钮的小箭头打开其选项；按钮本身重复上一次的选择。窗口较窄时，最后几个按钮收在 {more} 后面。

## 公式栏 {#barre}

- 左侧是**名称框**：选区的地址，或[区域的名称](noms.html)。其箭头列出命名区域，并可打开名称管理器。
- *fx* 右侧是单元格的内容，包括公式，可在此修改。

## 工作表 {#feuille}

- 右键单击会根据位置打开不同的菜单：单元格、列标或行标、工作表标签。
- 新工作表有 84 行 60 列（A 到 BH）。可通过右键 **%insertCells%** 添加（[行与列](lignes-colonnes.html)）。
- 选区角上的蓝色手柄用于[填充](selection.html#recopier)。

## 标签与缩放 {#zoom}

底部的 {plus} 添加工作表，{all-sheets} 列出所有工作表（[工作表](feuilles.html)）。右侧的 **−** 和 **+** 调整缩放；单击百分比可选择 10% 到 400%。

## 撤销 {#annuler}

{undo} 或 [[Ctrl+Z]] 撤销，{redo}、[[Ctrl+Y]] 或 [[Ctrl+Shift+Z]] 重做：输入、粘贴、格式设置、插入。打开工作簿、显示或隐藏网格线、保护工作簿、添加名称或条件格式规则时，历史记录重新开始。图表不在其中：用图表自己的按钮[修改或删除](graphiques.html#modifier)。

=== saisie
# 输入数据

## 在单元格中书写 {#ecrire}

| 操作 | 效果 |
| --- | --- |
| 在选中的单元格上键入 | 替换其内容 |
| 双击、[[F2]] 或 [[Enter]] | 修改其内容 |
| [[Enter]] | 确认并下移一个单元格 |
| 单击另一个单元格 | 确认 |
| [[Esc]] | 放弃输入 |
| [[Alt+Enter]] | 在单元格内换行 |
| [[Delete]] 或 [[⌫]] | 清空选中的单元格，包括复选框和下拉列表；格式保留 |
| 右键 › **%clearContent%** | 同上 |

输入时，方向键在文本中移动光标。其他时候，方向键、[[Tab]] 和 [[Shift+Tab]] 切换单元格。

## DocCells 识别的内容 {#types}

| 键入 | 得到 |
| --- | --- |
| `12`、`-3`、`1e5` | 数字，右对齐 |
| `n:2.5` | 小数；分隔符是小数点 |
| `25%`、`n:2.5%` | 百分比 |
| `2026-11-25`、`2026/11/25` | 日期 |
| `2026-11-25 14:30` | 日期和时间 |
| `TRUE`、`FALSE` | 逻辑值 |
| `n:[2, 1]` | [列表](listes.html) |
| `=A1+B1` | [公式](formules.html) |
| 其他任何内容 | 文本，左对齐 |

### 日期 {#dates}

日期按年份在前键入：`2026-11-25`。`11/25/2026` 仍是文本，不能参与计算。要改变显示方式，请选择 **%format% › %number% › %fDate%**（`%xDate%`）或[自定义格式](nombres.html#personnalise)。

双击日期单元格会打开[日历](controles.html#calendrier)。`=TODAY()` 给出今天的日期。

### 由数字组成的文本 {#textes}

以零开头的编号会丢失零：`007` 变成 7。要保留零，请先给单元格设置 **%fText%** 格式（**%format% › %number% › %fText%**），或以撇号开头：`'007`。

## 常见的输入问题 {#erreurs}

| 看到的情况 | 原因 |
| --- | --- |
| 数字左对齐 | 它是文本：用了小数逗号、带单位（`12 元`）、多了空格 |
| 显示 `46351` 而不是日期 | 日期为 **%fGeneral%** 格式：设置为 **%fDate%** 格式 |
| 文本被相邻单元格截断 | 加宽[列](lignes-colonnes.html#taille)，或选择 **%wrap%** |

需要单位时，只输入数字并设置[格式](nombres.html)：货币，或自定义格式如 `c:0.00 "m"`。

=== selection
# 选择、复制、填充

## 选择 {#selectionner}

| 操作 | 选区 |
| --- | --- |
| 单击 | 一个单元格 |
| 拖动 | 一个区域 |
| 单击，再按 [[Shift]] 单击 | 两者之间的区域 |
| [[Shift]] 加方向键 | 扩展区域 |
| [[Ctrl]] 加单击或拖动 | 再加一个区域 |
| 单击字母、数字 | 一列、一行 |
| 在字母、数字上拖动 | 多列、多行 |
| [[Ctrl+A]] | 整张工作表 |
| 名称框的箭头 | [命名区域](noms.html) |

选区的地址显示在公式栏左侧的名称框中。

## 复制、剪切、粘贴 {#copier}

[[Ctrl+C]]、[[Ctrl+X]]、[[Ctrl+V]]，或右键菜单的 **%copy%** 和 **%paste%**。
- 右键菜单的 **%paste%** 只粘贴值，不含公式；[[Ctrl+V]] 粘贴公式。
- 粘贴的公式随新位置变化：`=B2` 复制到下一行变成 `=B3`。`$` 符号固定行或列（[引用](formules.html#references)）。
- 剪切的公式保留其引用。
- 从 Excel、Numbers、网页或制表符分隔的文本复制的表格会逐个单元格粘贴；数字和列表像键入时一样被识别。
- 不能同时剪切或粘贴多个区域。

## 移动 {#deplacer}

拖动选区的边框：单元格连同格式一起移动。

## 填充 {#recopier}

选区右下角的蓝色手柄可向下、上、左、右拖动。

| 起始单元格 | 手柄给出 |
| --- | --- |
| 一个公式 | 引用相应移动的公式 |
| 两个数字 1 和 2 | 序列：3、4、5… |
| 单个数字、文本或日期 | 相同的值 |
| 两个日期 | 以相同间隔继续的日期 |

![用手柄延续的序列 1、2](recopie.webp 760x300)

不用鼠标，或区域较大时：

| 命令 | 效果 |
| --- | --- |
| **%edit% › %fillDown%**、[[Ctrl+D]] | 将所选区域的第一行复制到后续各行 |
| **%edit% › %fillRight%**、[[Ctrl+R]] | 将第一列复制到后续各列 |

如果只选中一行，[[Ctrl+D]] 将上一行复制进来；如果只选中一列，[[Ctrl+R]] 将左侧一列复制进来。这些命令总是复制，不生成序列，并包括格式、边框、复选框和下拉列表。

tip: 要在整列中使用公式：在顶部键入，从该单元格选到最后一个，[[Ctrl+D]]。

=== formules
# 公式

## 书写公式 {#ecrire}

公式以 `=` 开头，包含数字、引号中的文本、单元格引用、运算符和[函数](fonctions.html)。

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="合计："&SUM(B2:B6)
```

单元格显示结果，公式栏显示公式。依赖于已更改单元格的单元格会立即重新计算。

小数分隔符是小数点，参数之间用逗号分隔：`=ROUND(3.14159, 2)`。函数名可用小写或大写键入：`=sum(B2:B6)` 和 `r:=SUM(B2:B6)` 都可以。

## 用鼠标指定单元格 {#souris}

输入公式时，单击工作表的单元格会插入其地址，拖动会插入区域。每个引用在公式和工作表中都有自己的颜色。

## 自动完成 {#completion}

键入名称的前几个字母后，DocCells 会列出包含这些字母的函数：[[↑]] [[↓]] 浏览，[[Enter]]、[[Tab]] 或单击选择。输入左括号后，会显示参数说明。

![键入前几个字母后列出的函数](completion.webp 760x560)

![函数的帮助](aide-formule.webp 760x560)

## 自动求和 {#somme}

{formula-sum} 写入求和公式。其箭头提供 **%sum%**、**%average%**、**%count%**、**%max%**、**%min%** 和 **%allFormulas%**：在公式库中，可按名称、说明或类别查找函数。

![公式库](bibliotheque.webp 1280x760)

## 运算符 {#operateurs}

| 运算符 | 作用 |
| --- | --- |
| `+` `-` `*` `/` | 四则运算 |
| `^` | 乘方：`=2^10` |
| `%` | 百分比：`=20%*B2` |
| `&` | 连接文本：`=A2&" "&B2` |
| `=` `<>` | 等于、不等于 |
| `<` `>` `<=` `>=` | 比较 |
| `( )` | 优先级 |

先乘方，再乘除，然后加减，最后比较。`=-2^2` 得 −4（Excel 中为 4）。

## 引用 {#references}

| 写法 | 含义 |
| --- | --- |
| `B2` | 单元格；随填充变化 |
| `$B$2` | 填充时仍是同一单元格 |
| `B$2`、`$B2` | 固定行、固定列 |
| `B2:D6` | 区域 |
| `B:B`、`2:2` | 整列、整行 |
| `%sheet%2!B2`、`'成绩 2'!B2` | [另一张工作表](feuilles.html#references)的单元格 |
| `成绩` | [命名区域](noms.html) |

向下填充时，`=B2*$B$1` 变成 `=B3*$B$1`、`=B4*$B$1`…

## 条件 {#conditions}

```
=IF(B2>=10, "及格", "不及格")
=IF(AND(B2>=10, C2>=10), "是", "否")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- 逻辑值写作 `@TRUE()` 和 `@FALSE()`，带括号。显示为 TRUE 和 FALSE。
- 条件是文本：`">10"`、`"<>0"`、`"Ana"`。不识别通配符 `*` 和 `?`。
- 空单元格用 `=B2=""` 判断；它不等于 0。

## 在表中查找 {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

第一个公式在表的第一列中查找 Léa，返回第三列；最后的参数 0 要求精确匹配。第二个公式给出成绩最好的人的姓名。

## 日期与时间 {#dates}

日期是天数，时间是一天的一部分：在单元格中可以相加减。

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

由 `@DATE` 或 `@TODAY` 给出的日期必须经过单元格才能相加：`=TODAY()+1` 得 `#VALUE!`，但如果 A1 中是 `=TODAY()`，则 `=A1+1` 得明天的日期。结果是数字：请设置 **%fDate%** 格式。

## 错误 {#erreurs}

| 显示 | 原因 |
| --- | --- |
| `#NAME?` | 未知名称：拼写错误、[不计算](fonctions.html#non-calculees)的函数、`@TRUE` 缺少括号、文本缺少引号 |
| `#VALUE!` | 类型不符：需要数字处是文本 |
| `DIV/0` | 除以零或空单元格 |
| `#N/A` | 找不到值（`@MATCH`、`@VLOOKUP`），或在 DocGeo 之外使用 `GEO` |
| `#REF!` | 单元格或工作表不存在 |
| `#NUM!` | 数字超出定义域：`=SQRT(-1)` |
| `#ERROR!` | 公式书写有误，或函数不计算 |

`@IFERROR` 替换函数的错误（`#N/A`、`#NUM!`）：`=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "缺席")`。它不替换运算的错误（`DIV/0`、`#VALUE!`）：要避免除以零，请检查除数，`=IF(B2, B3/B2, "")`，对零和空单元格都适用。

=== listes
# 列表与复数

> DocCells 的单元格可以包含数字列表。两个数字的列表也是平面上的点，或一个复数。

## 书写列表 {#ecrire}

用方括号，元素之间用逗号分隔。列表可以包含列表。

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

没有 `=` 时，列表是一个值；有 `=` 时，其元素可以是算式。在使用小数逗号的语言中，元素之间用分号分隔：`r:[2; 1]`。

## 运算 {#operations}

| 运算 | 结果 |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`：逐项相加，长度相等 |
| `n:[1, 2, 3] * 2`、`n:[2, 4, 6] / 2` | `n:[2, 4, 6]`、`n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`：复数乘积 |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`：复数商 |
| `n:[2, 1] + 3` | `n:[5, 1]`：3 是实复数 |
| `n:[0, 1]^2` | `n:[-1, 0]`，有舍入误差 |
| `n:[8, 0]^(1/3)` | 三个立方根的列表 |
| `n:-[2, 1]` | `n:[-2, -1]` |

其他任何组合都得 `#VALUE!`：两个三元列表的乘积、长度不同、文本。

## 列表与函数 {#fonctions}

函数把列表看作区域：

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` 给出 A1 中列表的第二个元素：点的纵坐标，或复数的虚部。有些[函数](fonctions.html)返回列表：`@FREQUENCY`、`@LINEST`、`@TRANSPOSE`、`@UNIQUE`、`@SPLIT`。

## 显示 {#affichage}

按钮 {number-decrease} {number-increase} 和[数字格式](nombres.html)作用于列表中的每个数字：`n:[-0.14, 0.27]`。精确值保留不变。

## 示例：复数数列 {#exemple}

0 在 *z* ↦ *z*² + *c* 下的轨道：A1 中是 *c*，A2 中是 `n:[0, 0]`，A3 中是下面的公式，向下填充。

```
=A2^2+$A$1
```

在 [DocGeo](docgeo.html) 中，这样的一列可以画在图形里。

note: 在 Excel 文件中，列表保存为文本，结果为列表的公式的值也是如此（[兼容性](excel.html#listes)）。

=== noms
# 命名区域

## 命名 {#definir}

1. 选择单元格或区域。
2. 右键 › **%defineName%**（或名称框的箭头 › **%nameManager%**）。
3. 键入名称，选择范围，**%nameOk%**。

![新建名称窗口](noms.webp 1280x760)

| 字段 | 内容 |
| --- | --- |
| **%nameField%** | 以字母或 `_` 开头；字母、数字、`_` 和 `.`，无空格；不能是 `B2` 这样的地址 |
| **%scope%** | **%workbook%**：所有工作表都可读取；某张工作表：仅该表可读取，并优先于工作簿的同名名称 |
| **%refersTo%** | 单元格或区域，带工作表：`'%sheet%1'!$B$2:$B$6` |

## 使用名称 {#utiliser}

```
=AVERAGE(成绩)
=价格*(1+税率)
```

- 名称框的箭头列出名称：选择一个即选中其所在工作表中的区域。
- 当选区恰好是命名区域时，名称框显示其名称。
- [下拉列表](controles.html#listes)可读取由地址指定的单元格区域。

## 修改、删除 {#gerer}

在 **%nameManager%** 中，单击名称可重新编辑其字段；**%nameRemove%** 删除它；**%nameNew%** 回到空名称。删除名称前，请替换读取它的公式：它们会保留最后的值，之后不再计算。

名称保存在 Excel 文件中，并可从中读取。

=== feuilles
# 工作表

## 添加、切换 {#ajouter}

- {plus} 添加工作表，命名为“%sheet%2”“%sheet%3”…
- 单击标签显示该表；{all-sheets} 列出所有工作表（包括隐藏的），并显示所选的表。

## 标签的菜单 {#menu}

右键单击标签，或单击其箭头：

| 命令 | 效果 |
| --- | --- |
| **%sheetDelete%** | 确认后删除；最后一张可见工作表不能删除 |
| **%sheetCopy%** | 复制工作表 |
| **%sheetRename%** | 或双击名称；不含 `[ ] : ? * / ' "` |
| **%sheetColor%** | 标签颜色 |
| **%sheetHide%** | 公式仍可读取该表；{all-sheets} 重新显示它 |
| **%sheetLeft%**、**%sheetRight%** | 改变顺序；也可拖动标签 |

## 读取另一张工作表 {#references}

工作表名、感叹号、地址。名称含空格或符号时放在撇号中。

```
=%sheet%2!B2*2
='成绩 2'!B2
=SUM('成绩 2'!B2:B6)
```

引用需要键入：输入公式时切换标签会放弃输入。

要让所有工作表都能用名称读取某个区域，请以 **%workbook%** 为范围[命名](noms.html)。

=== nombres
# 数字格式

> 格式改变数字的显示，不改变其值：计算保留所有小数位。

## 选择格式 {#choisir}

**%format% › %fNumber%**，或按钮栏的 **%fGeneral%** 列表。

| 格式 | 示例 |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`，左对齐；输入保持为文本 |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`；0.25 变为 `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**、**%fTime%**、**%fDateTime%** | 用于日期：`%xDate%`、`3:00 PM`、`15:00`… |

货币符号由界面语言决定。

| 按钮 | 效果 |
| --- | --- |
| {percentage-format} | 百分比 |
| {number-decrease} | 减少一位小数 |
| {number-increase} | 增加一位小数 |

这些按钮也适用于[列表](listes.html)中的数字。要对值本身取整，请使用 `@ROUND`。

## 自定义格式 {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**：选择建议的格式，或编写代码。预览显示结果；**%guide%** 说明各符号；**%apply%** 应用到选区。

![自定义数字格式窗口](format-personnalise.webp 1280x760)

| 符号 | 作用 | 代码 | 1234.5 显示为 |
| --- | --- | --- | --- |
| `0` | 一位数字，包括零 | `c:0.00` | `n:1234.50` |
| `#` | 需要时才显示的数字 | `c:#.##` | `n:1234.5` |
| `c:,` | 千位分组 | `c:#,##0` | `n:1,235` |
| `%` | 百分比 | `0%` | `123450%` |
| `"文本"` | 文本、单位 | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | 科学记数法 | `c:0.00E+00` | `n:1.23E+03` |
| `;` | 正数、负数、零、文本的格式 | `0;-0;"无"` | `1235` |
| `[Red]` | 颜色 | `0;[Red]-0` | 负数为红色 |

代码使用该语言的分隔符键入；窗口显示保存时的形式（`#,##0.00`），与 Excel 相同。

### 日期与时间 {#dates-heures}

| 代码 | 2026 年 8 月 29 日 14:30 |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

月份和星期的名称以英文显示。

### 单位 {#unites}

在 **%units%** 下有 `c:0.00 "V"`、`c:0.00 "Ω"`、`c:0.00 "mm"` 等格式：单元格仍是数字，可以参与计算。

=== mise-en-forme
# 格式设置

## 文本 {#texte}

| 命令 | 位置 |
| --- | --- |
| 粗体、斜体、下划线 | {bold} {italic} {underline}；[[Ctrl+B]]、[[Ctrl+I]]、[[Ctrl+U]] |
| 字体 | **Arial** 列表：十三种字体 |
| 字号 | **10** 列表，或 **%formatMenu% › %fontSize%**：9 到 72 |
| 文字颜色、填充颜色 | {font-color} {background} |
| 清除格式 | {clear-format}、**%formatMenu% › %clearFormat%** |

在颜色面板中，**%resetColor%** 移除颜色；**%customColor%** 打开系统的取色器。

修改单元格时，格式应用于所选的那部分文本。

## 对齐 {#alignement}

| 命令 | 选项 |
| --- | --- |
| {align-left} 水平 | 左、中、右 |
| {align-top} 垂直 | 上、中、下 |
| {text-rotation-none} 旋转 | 倾斜、垂直、堆叠 |
| {text-overflow} 换行 | **%wrapOverflow%**：延伸到相邻空单元格；**%wrap%**：分多行；**%wrapClip%**：在边框处截断 |

未选择对齐方式时，数字和日期靠右，其余靠左。

## 边框 {#bordures}

{border-all} 绘制所选边框；其箭头提供各边（上、外、内、全部、无、对角线）、线条的**颜色**和**样式**。请先选颜色和样式，再选边。

## 合并 {#fusion}

{merge-all} 或 **%formatMenu% › %mergeCells%**：

| 命令 | 效果 |
| --- | --- |
| **%mergeAll%** | 合并为一个单元格，只保留一项内容 |
| **%mergeVertical%** | 每列一个单元格 |
| **%mergeHorizontal%** | 每行一个单元格 |
| **%unmerge%** | 恢复单元格 |

含合并单元格的区域不能排序或筛选。

## 交替颜色 {#alternees}

{alternating} 或 **%formatMenu% › %alternatingColors%** 为所选区域隔行着色，可带标题行。三种颜色均可选择。

![交替颜色窗口](couleurs-alternees.webp 1280x760)

它们是普通的填充颜色：不随排序或插入行变化。**%clearAlternating%** 将其从区域中移除。

## 网格线 {#quadrillage}

{gridlines} 或 **%view% › %show% › %gridlines%** 在工作簿的所有工作表中隐藏或显示灰线。[打印](impression.html)有单独的设置。

要让颜色取决于值，请参见[条件格式](conditionnelle.html)。

=== conditionnelle
# 条件格式

> 规则改变区域中满足条件的单元格的外观，并随输入或计算的值而变化。

## 创建规则 {#creer}

1. 选择区域，不含标题。
2. {conditional} 或 **%format% › %conditionalFormatting%**。
3. 选择条件、比较值、颜色或样式。
4. **%cfAdd%**。

![条件格式窗口，已应用一条规则](conditionnelle.webp 1280x760)

| 条件 | 单元格 |
| --- | --- |
| `<` | 小于 |
| `>` | 大于 |
| `=` | 等于 |
| `!=` | 不等于 |
| `[]` | 介于两个值之间（含端点） |
| `abc` | 包含某文本，不区分大小写 |

## 与什么比较 {#comparer}

| %cfCompareTo% | 示例 |
| --- | --- |
| **%cfValue%** | 低于 10 的成绩 |
| **%cfCell%** | 低于 `F1` 中所写界限的成绩 |
| **%cfColumn%** | C 列中逐行大于 B 列的值 |

## 外观 {#apparence}

**%cfText%** 和 **%cfBackground%** 选择颜色，**%cfNone%** 移除颜色；**B**、*I*、**U** 设为粗体、斜体、下划线。至少需要一种颜色或样式。

## 多条规则 {#regles}

左栏列出工作表的规则：**%cfEdit%**、**%cfDelete%**。如果多条规则适用于同一单元格，列表中最后一条按颜色逐项优先。

warn: 在规则覆盖的区域中，直接给单元格设置的文字和填充颜色不再显示。

规则以 Excel 条件格式的形式保存在 Excel 文件中。

=== lignes-colonnes
# 行与列

## 大小 {#taille}

| 操作 | 效果 |
| --- | --- |
| 拖动列标的右边框 | 改变列宽 |
| 拖动行标的下边框 | 改变行高 |
| 右键单击行标或列标 › **%width%**、**%height%** | 以像素设置所有选中列或行的大小 |

## 插入、删除 {#inserer}

在单元格或行列标上右键：**%rowAbove%**、**%rowBelow%**、**%columnLeft%**、**%columnRight%**。数量在框中键入。在行列标上右键：**%deleteRow%**、**%deleteColumn%**。

![右键菜单](menu-contextuel.webp 760x650)

公式会自动调整：其引用随移动的单元格变化。上限为 10 000 行、1 000 列。

## 隐藏 {#masquer}

在行列标上右键 › **%hideRow%**、**%hideColumn%**。隐藏的单元格仍会计算。要重新显示，请选择其两侧的行列标，然后右键 › **%showHidden%**。

## 冻结 {#figer}

冻结的行和列在滚动时保持可见。选择边界单元格，然后 {freeze-row-col} 或 **%view% › %freeze%**：

| 命令 | 保持可见 |
| --- | --- |
| **%freezeRow%** | 直到该单元格所在行（含） |
| **%freezeColumn%** | 直到该单元格所在列（含） |
| **%freezeCell%** | 两者 |
| **%freezeCancel%** | 无 |

要保留标题行：单击第 1 行的单元格，**%freezeRow%**。

=== tri-filtre
# 排序、筛选、查找

## 排序 {#trier}

| 命令 | 效果 |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**、**%sortDescending%** | 按选区的第一列排序；也可用 {filter} 和右键 |
| 右键 › **%sortRange%** | 选择排序列、顺序，以及第一行是否为标题 |

![区域排序窗口](tri.webp 1280x760)

请选择整个表，而不是单独一列：各行必须保持完整。含合并单元格的区域不能排序。

## 筛选 {#filtrer}

1. 选择表，包括标题。
2. **%data% › %sortAndFilter% › %createFilter%**，或 {filter}，或右键 › **%filterRange%**。
3. 单击某列的箭头。

![某列的筛选](filtre.webp 1280x760)

| 列的菜单 | 效果 |
| --- | --- |
| **%sortByAsc%**、**%sortByDesc%** | 对表的行排序 |
| **%filterByColor%** | 按填充颜色或文字颜色 |
| **%filterByValues%** | 勾选要保留的值；**%filterAll%**、**%filterNone%**、**%filterInverse%**；输入框用于查找值 |
| **%filterConfirm%** | 应用 |
| **%clearFilter%** | 移除表的筛选 |

被排除的行只是隐藏，不会删除。多列的筛选同时生效。**%data% › %sortAndFilter% › %clearFilter%** 移除筛选。

## 查找、替换 {#rechercher}

[[Ctrl+F]] 打开 **%find%**，[[Ctrl+H]] 打开 **%replace%**。

![查找](rechercher.webp 1280x660)

| 选项 | 效果 |
| --- | --- |
| **%regex%** | 查找的文本是正则表达式：`^A` 找到以 A 开头的内容 |
| **%wholeWord%** | 整个单元格等于该文本 |
| **%matchCase%** | 区分大小写 |
| **%findAll%** | 列出找到的单元格；单击一行即可跳转 |
| **%findNext%** | 转到下一个 |
| **%replaceOne%**、**%replaceAll%** | 一个单元格、全部 |

查找范围是当前显示的工作表。

=== controles
# 复选框、列表与日历

![复选框、下拉列表和日期的日历](controles.webp 1280x560)

## 复选框 {#cases}

选择单元格，**%insert% › %checkbox%**。单击可勾选或取消；单元格的值为 TRUE 或 FALSE。

```
=IF(B2, "已完成", "待办")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

第二个公式对勾选行的 C 列值求和；第三个公式统计勾选的数目。

## 下拉列表 {#listes}

选择单元格，**%insert% › %dropdown%**。

| 来源 | 内容 |
| --- | --- |
| **%listValues%** | 选项，每个输入框一个；**%addOption%**；不含逗号 |
| **%listRange%** | 以其单元格为选项的区域：`%sheet%2!$A$1:$A$10` |

不带 `$` 的区域会像填充的公式一样逐格移动。其单元格变化时，选项随之变化。

单元格显示箭头；单击打开选项。不接受列表以外的值。

## 日历 {#calendrier}

双击日期单元格会打开日历：选择日期，用 **<** 和 **>** 切换月份，**%today%** 选择今天。凡设有日期格式的单元格（即使为空）都会打开日历，除非其中有公式或已[锁定](protection.html)。

tip: 要用日历填写一列日期：选择该列并设置 **%fDate%** 格式。

## 移除 {#retirer}

[[Delete]] 移除单元格中的复选框或列表及其值。

复选框和列表保存在 Excel 文件中；复选框在其中即为 Excel 复选框。

=== graphiques
# 图表与迷你图

## 创建图表 {#creer}

1. 选择数据。
2. {chart} 或 **%insert% › %chart%**。
3. 选择类型和选项；预览随之变化。
4. **%chartAdd%**，然后 **%chartClose%**。

![图表窗口](graphique.webp 1280x900)

| 选区 | 解释为 |
| --- | --- |
| 一列或一行数字 | 数据 |
| 两列 | 第一列为标签，第二列为数据 |
| 两行 | 第一行为标签，第二行为数据 |
| 用 [[Ctrl]] 选择的两个分开的列 | 同上 |

一个图表显示一个系列：一行或一列数据。没有数字的单元格（如标题）会被忽略。

## 类型 {#types}

| 类型 | 用于 | 标签 |
| --- | --- | --- |
| **%tBar%** | 比较 | 在柱形下方 |
| **%tLine%** | 变化趋势 | 在横轴上 |
| **%tScatter%** | 两个量的关系 | 若为数字，则是横坐标；否则为 1、2、3… |
| **%tPie%** | 占比；正值 | 在图例或扇区上 |

最多 120 个值，饼图 24 个。

![四种图表](graphiques.webp 1280x640)

## 选项 {#options}

| 字段 | 内容 |
| --- | --- |
| **%chartTitle%** | 必填；显示在图表顶部 |
| **%chartColor%** | 取色器或代码 `#4F81BD`；扇区有各自的颜色 |
| **%chartRange%** | 区域：`B2:B6` |
| **%chartLabels%** | **%lNone%**；**%lColumn%**（`A`）；**%lRow%**（`1`）；**%lRange%**，与数据大小相同 |
| **%chartOptions%** | 数值、图例、横轴、纵轴、网格 |

## 移动、修改 {#modifier}

- 拖动标题条可移动图表；拖动右下角可调整大小。
- **%chartEdit%** 重新打开窗口，**%chartDelete%** 删除图表。窗口中还列出工作表的所有图表。
- 图表随其单元格的数据变化。

图表以真正的图表保存在 Excel 文件中，DocCells 可再次读取。它们不会随工作表[打印](impression.html)。

## 迷你图 {#sparklines}

`SPARKLINE` 函数在单元格中绘制微型图表。

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![折线和柱形迷你图](sparklines.webp 900x300)

选项写在花括号中：名称、反斜杠、值；选项之间用逗号分隔。

| `charttype` | 图形 | 专用选项 |
| --- | --- | --- |
| `"line"`（默认） | 折线 | `color`、`linewidth`、`xmin`、`xmax`、`ymin`、`ymax` |
| `"bar"` | 堆积条形 | `max`、`color1`、`color2` |
| `"column"` | 柱形 | `color`、`negcolor`、`lowcolor`、`highcolor`、`firstcolor`、`lastcolor`、`axis`、`axiscolor`、`ymin`、`ymax` |
| `"winloss"` | 盈亏 | 同上，但没有 `ymin` 和 `ymax` |

通用选项：`empty`（`"zero"` 或 `"ignore"`）、`nan`（`"convert"` 或 `"ignore"`）、`rtl`（从右到左）。[SPARKLINE 文档](../../sparkline/zh.html)给出所有取值及示例。

要画得更大，请加大行高和列宽，或合并单元格。

=== images-liens
# 图片与链接

## 图片 {#images}

{image} 或 **%insert% › %image%** 在选区位置插入计算机上的图片。

| 操作 | 效果 |
| --- | --- |
| 拖动图片 | 移动 |
| 拖动控制点 | 调整大小 |
| 选中图片后按 [[Delete]] | 删除 |

图片保存在 Excel 文件中的原位置。

## 链接 {#liens}

选择单元格，右键 › **%link%**。

| %linkType% | 地址 |
| --- | --- |
| 网页（**%linkWeb%**） | `https://…` |
| 单元格区域（**%linkCells%**） | `%sheet%1!A1:C8` |
| **%linkSheet%** | 工作簿中的工作表 |

**%linkText%** 成为单元格的内容，蓝色带下划线。选中单元格时，其下方出现 **%linkOpen%**。

warn: 链接不保存在 Excel 文件中：只保存其文本。

=== impression
# 打印

**%file% › %print%** 或 [[Ctrl+P]] 按打印效果显示页面。

![打印预览](imprimer.webp 1280x760)

| 设置 | 选项 |
| --- | --- |
| **%printContent%** | 当前工作表，或打开窗口前选择的单元格 |
| **%printPaper%** | A4、Letter |
| **%printOrientation%** | 纵向、横向 |
| **%printScale%** | **%printActual%**；**%printWidth%**：所有列在一页宽度内；**%printPage%** |
| **%printMargins%** | 普通、窄、宽 |
| **%printFormatting%** | 网格线、行列标、填充颜色 |

**%printButton%** 打开浏览器的窗口，可选择打印机或保存为 PDF。

- 只打印单元格及其格式：不打印图表、图片和迷你图。
- 隐藏的行和列不打印。
- 复选框打印为 TRUE 或 FALSE。
- 每次打印一张工作表。

tip: 要连同图表一起打印，请保存工作簿并用 Excel 或 LibreOffice 打开。

=== protection
# 保护

> 受保护的工作簿只能在未锁定的单元格中修改：可用来准备练习表。

## 为学生准备工作表 {#preparer}

1. 选择要填写的单元格，右键 › **%unlock%**。
2. {protect} 或 **%tools% › %protectWorkbook%**。
3. 保存，然后[分发文件或链接](partager.html)。

起初所有单元格都是锁定的；锁定只在受保护的工作簿中生效。**%lock%** 可恢复锁定。

## 保护阻止的操作 {#effets}

| 受保护的工作簿中 | 锁定的单元格 | 未锁定的单元格 |
| --- | --- | --- |
| 键入、清除 | 否 | 是 |
| 日期的日历 | 否 | 是 |
| 列宽和行高 | 否 | 否 |
| 交替颜色、插入复选框和列表、菜单填充 | 否 | 否 |
| 格式设置、插入行列、图表 | 是 | 是 |

保护作用于所有工作表。它与未锁定的单元格一起保存在 Excel 文件中，DocCells 和 Excel 都可读取。

## 学生模式 {#eleve}

地址中的 `?mode=student` 打开 DocCells 时没有 {protect} 按钮，也没有 **%unlock%** 和 **%defineName%** 命令；**%protectWorkbook%** 不可用。学生无法取消保护。

```
https://…/doccells/?mode=student&url=https://…/exercise.xlsx
```

note: 这是使用层面的保护，没有密码：用其他电子表格打开文件，或不带 `mode=student` 打开，都可以取消保护。

=== partager
# 共享与嵌入

## 通过链接打开工作簿 {#url}

`?url=` 后接在线 `.xlsx` 文件的地址，即可在 DocCells 中打开。

```
https://…/doccells/?url=https://example.org/marks.xlsx
```

存放文件的网站必须允许其他网站读取（CORS 标头）；与 DocCells 放在同一网站的文件没有此限制。每个人打开的是自己的副本：更改不会写回原文件。

## Google 表格 {#google}

也可以使用 Google 表格的地址。

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- 将其共享给“知道链接的任何人”。
- DocCells 每次打开时读取 Excel 格式的副本：Google 文档不会被修改。
- 存放 DocCells 的网站必须能运行 PHP；最大 25 MB。

## 地址选项 {#options}

| 选项 | 效果 |
| --- | --- |
| `url=…` | 打开工作簿或 Google 表格 |
| `mode=student` | [学生模式](protection.html#eleve) |
| `lang=zh-CN` | 指定语言：`de`、`el`、`en`、`es`、`fr`、`hi`、`it`、`nl`、`pt`、`ru`、`zh-CN`、`zh-TW` |

各选项依次排列，用 `&` 分隔：`?lang=zh-CN&mode=student&url=…`。第一个选项在 `?` 之后。

## 在网页中 {#integrer}

```
<iframe src="https://…/doccells/?url=https://example.org/marks.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

在框架中，DocCells 没有菜单、打开和保存按钮以及恢复副本：只显示按钮栏、公式栏和工作表。

## 通过程序 {#programme}

网页可以控制 DocCells：加载工作簿、读写单元格、跟踪其值。`embed` 选项打开此模式；面向开发者的说明见项目的 [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) 文件（法语）。

=== docgeo
# 与 DocGeo 一起使用

> DocGeo 是 DocTools 的动态几何软件，其中包含 DocCells：图形旁边的工作表，两者可互相读取。

在 DocGeo 中，**%file% › %gView% › %gSheetView%** 在图形旁添加工作表；**%file% › %gTab% › %gSheetTab%** 将其作为标签页。

## GEO 函数 {#geo}

在单元格中，`GEO` 读取图形中某个对象的值，对象名放在引号中。

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'图形 1'!c")
```

- 操作图形时，单元格随之变化。
- 点按其坐标的[列表](listes.html)读取：`=GEO("A")*2` 也是一个点。
- 输入公式时，单击图形中的对象会写入 `GEO` 及其名称。
- 未知对象得 `#N/A`。在 DocGeo 之外，`GEO` 总是得 `#N/A`。
- `GEO` 在所有语言中名称相同。

## 图形读取单元格 {#figure}

在 DocGeo 的公式中，`!B3` 表示单元格，`!B2:B21` 表示区域。

## 与单独使用 DocCells 的区别 {#differences}

| 在 DocGeo 中 | |
| --- | --- |
| 菜单和按钮 | 工作表处于活动状态时，显示在 DocGeo 的栏中 |
| 文件 | DocGeo 的文件：工作表保存在 `.dgo` 中，包括列表和链接 |
| 工作表 | 每个视图一张；多个电子表格标签页可互相读取 |
| 撤销 | 单元格中的 [[Ctrl+Z]] 只撤销单元格的操作 |

详情见 DocGeo 手册的[电子表格](https://doctools.org/apps/docgeo/tutorials/zh/tableur.html)页面。

=== fonctions
# 函数

> DocCells 计算的 %functions% 个函数，按领域分类，各附一个示例。

- 搜索：在页面顶部的搜索框（[[/]]）中键入函数名，即可找到它所在的行。
- 参数之间用逗号分隔；方括号 `[ ]` 中的参数可省略。
- `@TRUE()` 和 `@FALSE()` 要带括号；也可写 1 和 0。
- “区域”参数可以是[列表](listes.html)：`=AVERAGE([12, 15, 8])`。
- 另见[公式](formules.html)：运算符、引用、错误。

## 示例所用的单元格 {#exemples}

示例读取这张工作表：

%%sample%%

%%functions%%

## 不计算的函数 {#non-calculees}

DocCells 的自动完成和公式库也列出了一些不计算的函数：它们得 `#NAME?` 或 `#ERROR!`。Excel 的新函数也是如此。

| 不计算 | 替代方法 |
| --- | --- |
| `TEXT`、`FIXED`、`DOLLAR` | 单元格的[数字格式](nombres.html) |
| `XLOOKUP`、`OFFSET`、`INDIRECT`、`ADDRESS` | `INDEX` 和 `MATCH`、`VLOOKUP`、`CHOOSE` |
| `FILTER`、`SORT`、`SEQUENCE`、`LET`、`LAMBDA` | [排序和筛选](tri-filtre.html)；[填充](selection.html#recopier)公式 |
| `MAXIFS`、`MINIFS`、`TEXTJOIN` | 筛选；`&` 运算符 |
| `MMULT`、`MDETERM`、`MINVERSE` | `SUMPRODUCT`，每个元素一个公式 |
| `HYPERLINK` | [插入链接](images-liens.html#liens) |
| Excel 中带点的名称：`RANK.EQ`、`VAR.S`、`NORM.DIST`… | 不带点的名称或旧名称：`RANK`、`VAR`、`NORMDIST` |
| 数据库函数（`DSUM`…）、票息与证券（`PRICE`、`COUPNUM`…）、`ISBLANK`、`CELL`、`ISFORMULA` | `SUMIFS`；空单元格用 `=A1=""` |

=== raccourcis
# 快捷键与手势

## 文件 {#fichier}

| 按键 | 效果 |
| --- | --- |
| [[Ctrl+O]] | 打开 |
| [[Ctrl+S]] | 保存；在 Firefox 和 Safari 中为下载 |
| [[Ctrl+P]] | 打印 |

## 编辑 {#edition}

| 按键 | 效果 |
| --- | --- |
| [[Ctrl+Z]]；[[Ctrl+Y]]、[[Ctrl+Shift+Z]] | 撤销；重做 |
| [[Ctrl+C]]、[[Ctrl+X]]、[[Ctrl+V]] | 复制、剪切、粘贴 |
| [[Ctrl+D]]；[[Ctrl+R]] | 向下填充；向右填充 |
| [[Delete]]、[[⌫]] | 清空单元格 |
| [[Ctrl+F]]；[[Ctrl+H]] | 查找；替换 |

## 格式设置 {#mise-en-forme}

| 按键 | 效果 |
| --- | --- |
| [[Ctrl+B]]、[[Ctrl+I]]、[[Ctrl+U]] | 粗体、斜体、下划线 |

## 移动、选择 {#se-deplacer-selectionner}

| 按键 | 效果 |
| --- | --- |
| 方向键 | 相邻单元格 |
| [[Tab]]、[[Shift+Tab]] | 下一个、上一个单元格 |
| [[Shift]] 加方向键 | 扩展选区 |
| [[Shift]] 加单击 | 选到该单元格 |
| [[Ctrl]] 加单击 | 添加到选区 |
| [[Ctrl+A]] | 整张工作表 |

## 输入 {#saisie}

| 按键 | 效果 |
| --- | --- |
| [[F2]]、[[Enter]]、双击 | 修改单元格 |
| [[Enter]] | 确认并下移 |
| [[Esc]] | 放弃 |
| [[Alt+Enter]] | 在单元格内换行 |
| [[↑]] [[↓]]、[[Enter]]、[[Tab]] | 浏览、选择建议的函数 |
| 在工作表上单击或拖动 | 在公式中插入引用 |

## 鼠标 {#souris}

| 手势 | 效果 |
| --- | --- |
| 拖动蓝色手柄 | [填充](selection.html#recopier) |
| 拖动选区边框 | [移动](selection.html#deplacer) |
| 拖动行列标的边框 | [改变列宽、行高](lignes-colonnes.html#taille) |
| 右键 | 单元格、行列标、标签的菜单 |
| 双击日期 | [日历](controles.html#calendrier) |
| 双击标签 | 重命名工作表 |
| 拖动标签 | 移动工作表 |
| 放下 `.xlsx` 文件 | 打开 |

=== excel
# 与 Excel 的兼容性

> DocCells 读写 Excel `.xlsx` 格式。以下内容在读写两个方向都会保留。

## 保留的内容 {#conserve}

| 项目 | 说明 |
| --- | --- |
| 值、文本、日期、公式 | 公式以 DocCells 的语言显示 |
| [数字格式](nombres.html) | 包括自定义格式 |
| 字体、颜色、对齐、旋转、换行 | |
| 边框、合并单元格 | |
| 列宽、行高、隐藏的行列 | |
| [冻结的行列](lignes-colonnes.html#figer)、网格线 | |
| 多张工作表 | |
| [命名区域](noms.html) | |
| [条件格式](conditionnelle.html) | DocCells 的规则，以及 Excel 的简单规则（比较、包含文本） |
| [复选框、下拉列表](controles.html) | |
| [图表](graphiques.html) | 写为 Excel 图表；DocCells 的图表可再次读取 |
| [图片](images-liens.html) | |
| [筛选](tri-filtre.html#filtrer) | |
| [保护](protection.html)、未锁定的单元格 | |

## 不保留的内容 {#perdu}

| 项目 | 变为 |
| --- | --- |
| [链接](images-liens.html#liens) | 其文本 |
| 单元格中的[列表](listes.html) | 文本 `n:[2, 1]` |
| DocCells 或 Google 表格的迷你图 | `SPARKLINE` 公式，DocCells 可再次读取；Excel 不识别 |
| 在 Excel 中创建的图表 | 不保留 |
| 数据透视表、宏、切片器、批注 | 不保留 |
| 使用色阶、数据条、图标的条件格式 | 不保留 |

tip: 替换复杂的 Excel 工作簿之前，请先在 DocCells 中以另一个名称保存（**%saveAs%**）。

## 列表 {#listes}

从 `.xlsx` 重新打开的列表是文本：重新键入即可变回列表。由公式计算的列表在公式重新计算时恢复为列表。

## 公式 {#formules}

打开时，公式一般保留 Excel 保存的结果，直到其某个单元格发生变化。[DocCells 不计算](fonctions.html#non-calculees)的函数此时得 `#NAME?` 或 `#ERROR!`。

## 其他格式 {#formats}

| 格式 | 方法 |
| --- | --- |
| `.csv` | 用文本编辑器打开并复制；如果值以制表符分隔，则粘贴到 DocCells；否则转换为 `.xlsx` |
| `.ods`、`.xls` | 用 LibreOffice 或 Excel 另存为 `.xlsx` |
| Google 表格 | [通过链接](partager.html#google)，或下载为 `.xlsx` |
| PDF | [打印](impression.html)，“另存为 PDF” |

=== faq
# 常见问题

## 输入 {#saisie}

### 键入的日期没有被识别

对 DocCells 而言，`11/25/2026` 是文本。请键入 `2026-11-25`，然后选择 **%fDate%** 格式（[日期](saisie.html#dates)）。

### 显示数字而不是日期

日期是天数：给单元格设置 **%fDate%** 格式（**%format% › %number%**）。

### 数字没有相加

左对齐的是文本。在单元格中键入单位或小数逗号会使其变为文本（[类型](saisie.html#types)）。

### 编号开头的零消失了

键入前设置 **%fText%** 格式，或以撇号开头（[文本](saisie.html#textes)）。

### 数字要求用逗号而不是小数点

DocCells 采用浏览器的语言。`?lang=zh-CN` 可指定语言（[语言](demarrage.html#langue)）。

## 公式 {#formules}

### TRUE 或 FALSE 得到 `#NAME?`

请写 `@TRUE()` 和 `@FALSE()`，或 1 和 0（[条件](formules.html#conditions)）。

### DocCells 建议的函数得到 `#NAME?`

并非所有建议的函数都会计算（[不计算的函数](fonctions.html#non-calculees)）。

### `@IFERROR` 不处理 DIV/0

请检查除数：`=IF(B2, A2/B2, "")`（[错误](formules.html#erreurs)）。

### 粘贴后公式没有保留

右键菜单的 **%paste%** 粘贴值；[[Ctrl+V]] 粘贴公式（[复制](selection.html#copier)）。

### 写出月份名称，或在文本中设置数字格式

`@TEXT` 函数不计算：请给单独的单元格设置[格式](nombres.html)。

### 统计勾选的复选框

`=SUMPRODUCT(B2:B6, B2:B6)`（[复选框](controles.html#cases)）。

### `=TODAY()+1` 得到 #VALUE!

将 `=TODAY()` 放在单元格中，再对该单元格相加（[日期](formules.html#dates)）。

## 呈现 {#presentation}

### 单元格的颜色不变

该单元格在某条[条件格式](conditionnelle.html#regles)规则的区域内。

### 某个按钮不见了

窗口较窄：它在 {more} 后面。

### 无法排序或筛选

区域中有合并单元格：请取消合并。

## 文件 {#fichiers}

### 保存时下载了新文件

在 Firefox 和 Safari 中是这样。Chrome 和 Edge 会写入文件（[保存](demarrage.html#enregistrer)）。

### 页面未保存就关闭了

在同一浏览器中重新打开 DocCells：它会询问是否恢复副本（[恢复](demarrage.html#recuperer)）。

### 图表没有打印

打印只包含单元格（[打印](impression.html)）。

### `?url=` 链接打不开工作簿

存放文件的网站可能不允许其他网站读取。Google 表格必须通过链接共享（[共享](partager.html)）。

### 链接不见了

链接不保存在 Excel 格式中（[不保留的内容](excel.html#perdu)）。

## 学生 {#eleves}

### 学生能修改公式吗？

在受保护的工作簿中，除未锁定的单元格外不能修改（[保护](protection.html)）。在链接中加入 `mode=student`，学生就无法取消保护。
