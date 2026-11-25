=== groups | 入門 | 輸入與計算 | 呈現 | 使用資料 | 分發 | 參考

=== categories | 函數 | 說明與範例 | 數學 | 三角 | 邏輯 | 統計 | 機率分布與檢驗 | 尋找與清單 | 文字 | 日期與時間 | 財務 | 進位制、單位、特殊函數 | 文字形式的複數 | 資訊

=== index | 首頁
# DocCells 使用手冊

> DocCells 是在瀏覽器中使用的多語言試算表，無需安裝，無需帳戶。它可以開啟和儲存 Excel 活頁簿（.xlsx）。

<div class="buttons"><a href="../../index.html?lang=zh-TW">開啟 DocCells</a></div>

![DocCells 視窗：功能表、按鈕、資料編輯列、設定了格式的成績表和一個圖表](interface.webp 1280x760)

## 六個基本操作

| 目的 | 操作 |
| --- | --- |
| 輸入 | 按一下儲存格，輸入，[[Enter]]（[輸入資料](saisie.html)） |
| 計算 | 輸入 `=` 和公式：`=AVERAGE(B2:B6)`（[公式](formules.html)） |
| 複製公式 | 拖曳選區的藍色控點，或 [[Ctrl+D]]（[填滿](selection.html#recopier)） |
| 設定格式 | **%format%** 功能表或按鈕（[格式設定](mise-en-forme.html)） |
| 繪製圖表 | 選擇資料，{chart}（[圖表](graphiques.html)） |
| 儲存 | [[Ctrl+S]]：Excel 檔案（[開啟與儲存](demarrage.html)） |

## 目錄 {#sommaire}

- [開啟與儲存](demarrage.html)：檔案、最近檔案、恢復、Google 試算表、語言。
- [介面](interface.html)：功能表、按鈕、資料編輯列、標籤、縮放。
- [輸入資料](saisie.html)，[選擇、複製、填滿](selection.html)。
- [公式](formules.html)，[清單與複數](listes.html)，[已命名範圍](noms.html)，[工作表](feuilles.html)。
- [數值格式](nombres.html)，[格式設定](mise-en-forme.html)，[條件式格式](conditionnelle.html)，[列與欄](lignes-colonnes.html)。
- [排序、篩選、尋找](tri-filtre.html)，[核取方塊、清單與日曆](controles.html)，[圖表與走勢圖](graphiques.html)，[圖片與連結](images-liens.html)，[列印](impression.html)。
- 為學生[保護](protection.html)活頁簿，[共用與嵌入](partager.html)，[與 DocGeo 一起使用](docgeo.html)。
- 參考：[%functions% 個函數](fonctions.html)，[快速鍵](raccourcis.html)，[與 Excel 的相容性](excel.html)，[常見問題](faq.html)。

## 約定

- 按鈕用其圖示表示（{bold} 粗體）。
- 在 Mac 上，[[Ctrl]] 指 [[⌘]]。
- 公式使用英文函數名、小數點，引數之間用逗號分隔。
- 搜尋手冊：[[/]] 或 [[Ctrl+K]]。詞語可按任意順序輸入；輸入函數名會找到它所在的列。

=== demarrage
# 開啟與儲存

## 開始 {#nouveau}

DocCells 開啟時是一個只有一張工作表的空活頁簿。要重新從空活頁簿開始，請重新整理頁面，或在瀏覽器的另一個分頁中開啟 DocCells。

## 開啟活頁簿 {#ouvrir}

| 方式 | 效果 |
| --- | --- |
| {open}、**%file% › %open%**、[[Ctrl+O]] | 選擇計算機上的 `.xlsx` 檔案 |
| 將檔案拖到頁面上 | 遮罩提示放置位置；該活頁簿替換當前開啟的活頁簿 |
| **%file% › %openRecent%** | 最近開啟或儲存的十個檔案（Chrome 和 Edge） |
| `?url=…` 連結 | 線上活頁簿或 Google 試算表（[共用](partager.html#url)） |

只讀取 Excel `.xlsx` 格式。舊的 `.xls`、`.ods` 和 `.csv` 檔案需先轉換。從 Excel 檔案中保留的內容見[與 Excel 的相容性](excel.html)。

warn: 開啟活頁簿會替換當前顯示的活頁簿：請先儲存更改。

### 最近檔案 {#recents}

瀏覽器可能再次請求讀取檔案的許可權。已移動、重新命名或刪除的檔案會從清單中移除。**%clearRecentFiles%** 清空清單。清單儲存在本計算機的此瀏覽器中。

## 儲存 {#enregistrer}

### Chrome 和 Edge

| 命令 | 效果 |
| --- | --- |
| {save}、**%file% › %save%**、[[Ctrl+S]] | 第一次詢問檔案位置；之後直接替換，不再詢問 |
| **%file% › %saveAs%** | 選擇另一個檔案 |

用 {open}、從最近檔案或透過拖放開啟的檔案會儲存回原處；瀏覽器會請求一次修改許可權。

活頁簿的名稱在功能表列末尾。紅點表示有未儲存的更改；此時瀏覽器分頁的標題以 ● 開頭。

### Firefox、Safari

這些瀏覽器不允許寫入檔案。**%file% › %export%** 或 [[Ctrl+S]] 以當前活頁簿的名稱下載活頁簿。

## 恢復未儲存的活頁簿 {#recuperer}

只要有未儲存的更改，DocCells 就在瀏覽器中保留一份副本，每次更改後不到一秒即更新。如果頁面未儲存就關閉，下次開啟 DocCells 時會顯示副本的日期，並詢問是否恢復（**%restore%** 或 **%ignore%**）。

- 儲存、匯出或開啟另一個活頁簿會清除該副本。
- 忽略副本會將其永久刪除。
- 僅當 DocCells 佔據整個頁面時才保留副本，嵌入其他頁面時不保留。

## 語言 {#langue}

DocCells 在其介面的十二種語言中採用瀏覽器的語言：德語、俄語、法語、荷蘭語、葡萄牙語、西班牙語、希臘語、義大利語、印地語、英語、簡體中文和繁體中文。其他語言使用英語。位址中的 `?lang=zh-TW` 可指定語言。

語言會改變功能表、函數名、小數分隔符、貨幣符號和日期顯示順序。儲存的檔案與語言無關：用法語編寫的活頁簿在德語介面中開啟時，公式顯示為德語。

=== interface
# 介面

![DocCells 視窗](interface.webp 1280x760)

從上到下：功能表列、按鈕列、資料編輯列、工作表、工作表標籤和縮放。

## 功能表 {#menus}

| 功能表 | 內容 |
| --- | --- |
| **%file%** | [開啟、儲存](demarrage.html)，[列印](impression.html) |
| **%edit%** | 復原、取消復原，[向下、向右填滿](selection.html#recopier) |
| **%view%** | [格線](mise-en-forme.html#quadrillage)，[凍結](lignes-colonnes.html#figer) |
| **%insert%** | [圖片](images-liens.html)，[圖表](graphiques.html)，[核取方塊、下拉式清單](controles.html) |
| **%format%** | [數字](nombres.html)，[文字、對齊、合併](mise-en-forme.html)，[交替色彩](mise-en-forme.html#alternees)，[條件式格式](conditionnelle.html) |
| **%data%** | [排序和篩選](tri-filtre.html) |
| **%tools%** | [保護](protection.html)，本手冊（**%manual%**），DocTools，原始碼，版本（**%about%**） |

勾號表示已啟用的選項：顯示格線、凍結儲存格、粗體、篩選、受保護的活頁簿。

![格式功能表和數值格式](menus.webp 1280x620)

## 按鈕列 {#boutons}

| 按鈕 | 作用 |
| --- | --- |
| {open} {save} | [開啟、儲存](demarrage.html) |
| {gridlines} | 顯示或隱藏[格線](mise-en-forme.html#quadrillage) |
| {alternating} | [交替色彩](mise-en-forme.html#alternees) |
| {conditional} | [條件式格式](conditionnelle.html) |
| {protect} | [保護](protection.html)；活頁簿受保護時呈藍色 |
| {chart} | [插入圖表](graphiques.html) |
| {image} | [插入圖片](images-liens.html) |
| {undo} {redo} | 復原、取消復原 |
| {clear-format} | 清除格式 |
| {percentage-format} {number-decrease} {number-increase} | [百分比、減少或增加小數位](nombres.html) |
| **%fGeneral%**、**Arial**、**10** | 數值格式、字型、字號 |
| {bold} {italic} {underline} | 粗體、斜體、下劃線 |
| {font-color} {background} | 文字色彩、填滿色彩 |
| {border-all} {merge-all} | [邊框、合併](mise-en-forme.html) |
| {align-left} {align-top} {text-rotation-none} {text-overflow} | 對齊、旋轉、換行 |
| {freeze-row-col} | [凍結](lignes-colonnes.html#figer) |
| {formula-sum} | [自動求和](formules.html#somme)及其他公式 |
| {filter} | [排序和篩選](tri-filtre.html) |

按鈕的小箭頭開啟其選項；按鈕本身重複上一次的選擇。視窗較窄時，最後幾個按鈕收在 {more} 後面。

## 資料編輯列 {#barre}

- 左側是**名稱方塊**：選區的位址，或[範圍的名稱](noms.html)。其箭頭列出已命名範圍，並可開啟名稱管理器。
- *fx* 右側是儲存格的內容，包括公式，可在此修改。

## 工作表 {#feuille}

- 按右鍵會根據位置開啟不同的功能表：儲存格、欄標題或列標題、工作表標籤。
- 新工作表有 84 列 60 欄（A 到 BH）。可透過右鍵 **%insertCells%** 新增（[列與欄](lignes-colonnes.html)）。
- 選區角上的藍色控點用於[填滿](selection.html#recopier)。

## 標籤與縮放 {#zoom}

底部的 {plus} 新增工作表，{all-sheets} 列出所有工作表（[工作表](feuilles.html)）。右側的 **−** 和 **+** 調整縮放；按一下百分比可選擇 10% 到 400%。

## 復原 {#annuler}

{undo} 或 [[Ctrl+Z]] 復原，{redo}、[[Ctrl+Y]] 或 [[Ctrl+Shift+Z]] 取消復原：輸入、貼上、格式設定、插入。開啟活頁簿、顯示或隱藏格線、保護活頁簿、新增名稱或條件式格式規則時，歷史記錄重新開始。圖表不在其中：用圖表自己的按鈕[修改或刪除](graphiques.html#modifier)。

=== saisie
# 輸入資料

## 在儲存格中書寫 {#ecrire}

| 操作 | 效果 |
| --- | --- |
| 在選中的儲存格上輸入 | 替換其內容 |
| 按兩下、[[F2]] 或 [[Enter]] | 修改其內容 |
| [[Enter]] | 確認並下移一個儲存格 |
| 按一下另一個儲存格 | 確認 |
| [[Esc]] | 放棄輸入 |
| [[Alt+Enter]] | 在儲存格內換行 |
| [[Delete]] 或 [[⌫]] | 清空選中的儲存格，包括核取方塊和下拉式清單；格式保留 |
| 右鍵 › **%clearContent%** | 同上 |

輸入時，方向鍵在文字中移動游標。其他時候，方向鍵、[[Tab]] 和 [[Shift+Tab]] 切換儲存格。

## DocCells 辨識的內容 {#types}

| 輸入 | 得到 |
| --- | --- |
| `12`、`-3`、`1e5` | 數字，右對齊 |
| `n:2.5` | 小數；分隔符是小數點 |
| `25%`、`n:2.5%` | 百分比 |
| `2026-11-25`、`2026/11/25` | 日期 |
| `2026-11-25 14:30` | 日期和時間 |
| `TRUE`、`FALSE` | 邏輯值 |
| `n:[2, 1]` | [清單](listes.html) |
| `=A1+B1` | [公式](formules.html) |
| 其他任何內容 | 文字，左對齊 |

### 日期 {#dates}

日期按年份在前輸入：`2026-11-25`。`11/25/2026` 仍是文字，不能參與計算。要改變顯示方式，請選擇 **%format% › %number% › %fDate%**（`%xDate%`）或[自訂格式](nombres.html#personnalise)。

按兩下日期儲存格會開啟[日曆](controles.html#calendrier)。`=TODAY()` 給出今天的日期。

### 由數字組成的文字 {#textes}

以零開頭的編號會丟失零：`007` 變成 7。要保留零，請先給儲存格設定 **%fText%** 格式（**%format% › %number% › %fText%**），或以單引號開頭：`'007`。

## 常見的輸入問題 {#erreurs}

| 看到的情況 | 原因 |
| --- | --- |
| 數字左對齊 | 它是文字：用了小數逗號、帶單位（`12 元`）、多了空格 |
| 顯示 `46351` 而不是日期 | 日期為 **%fGeneral%** 格式：設定為 **%fDate%** 格式 |
| 文字被相鄰儲存格截斷 | 加寬[欄](lignes-colonnes.html#taille)，或選擇 **%wrap%** |

需要單位時，只輸入數字並設定[格式](nombres.html)：貨幣，或自訂格式如 `c:0.00 "m"`。

=== selection
# 選擇、複製、填滿

## 選擇 {#selectionner}

| 操作 | 選區 |
| --- | --- |
| 按一下 | 一個儲存格 |
| 拖曳 | 一個範圍 |
| 按一下，再按 [[Shift]] 按一下 | 兩者之間的範圍 |
| [[Shift]] 加方向鍵 | 擴展範圍 |
| [[Ctrl]] 加按一下或拖曳 | 再加一個範圍 |
| 按一下字母、數字 | 一欄、一列 |
| 在字母、數字上拖曳 | 多欄、多列 |
| [[Ctrl+A]] | 整張工作表 |
| 名稱方塊的箭頭 | [已命名範圍](noms.html) |

選區的位址顯示在資料編輯列左側的名稱方塊中。

## 複製、剪下、貼上 {#copier}

[[Ctrl+C]]、[[Ctrl+X]]、[[Ctrl+V]]，或右鍵功能表的 **%copy%** 和 **%paste%**。
- 右鍵功能表的 **%paste%** 只貼上值，不含公式；[[Ctrl+V]] 貼上公式。
- 貼上的公式隨新位置變化：`=B2` 複製到下一列變成 `=B3`。`$` 符號固定列或欄（[參照](formules.html#references)）。
- 剪下的公式保留其參照。
- 從 Excel、Numbers、網頁或定位字元分隔的文字複製的表格會逐個儲存格貼上；數字和清單像輸入時一樣被辨識。
- 不能同時剪下或貼上多個範圍。

## 移動 {#deplacer}

拖曳選區的邊框：儲存格連同格式一起移動。

## 填滿 {#recopier}

選區右下角的藍色控點可向下、上、左、右拖曳。

| 起始儲存格 | 控點給出 |
| --- | --- |
| 一個公式 | 參照相應移動的公式 |
| 兩個數字 1 和 2 | 序列：3、4、5… |
| 單一數字、文字或日期 | 相同的值 |
| 兩個日期 | 以相同間隔繼續的日期 |

![用控點延續的序列 1、2](recopie.webp 760x300)

不用滑鼠，或範圍較大時：

| 命令 | 效果 |
| --- | --- |
| **%edit% › %fillDown%**、[[Ctrl+D]] | 將所選範圍的第一列複製到後續各列 |
| **%edit% › %fillRight%**、[[Ctrl+R]] | 將第一欄複製到後續各欄 |

如果只選中一列，[[Ctrl+D]] 將上一列複製進來；如果只選中一欄，[[Ctrl+R]] 將左側一欄複製進來。這些命令總是複製，不生成序列，並包括格式、邊框、核取方塊和下拉式清單。

tip: 要在整欄中使用公式：在頂部輸入，從該儲存格選到最後一個，[[Ctrl+D]]。

=== formules
# 公式

## 書寫公式 {#ecrire}

公式以 `=` 開頭，包含數字、引號中的文字、儲存格參照、運算子和[函數](fonctions.html)。

```
=B2*2
=(B2+C2+D2)/3
=AVERAGE(B2:B6)
="合計："&SUM(B2:B6)
```

儲存格顯示結果，資料編輯列顯示公式。依賴於已更改儲存格的儲存格會立即重新計算。

小數分隔符是小數點，引數之間用逗號分隔：`=ROUND(3.14159, 2)`。函數名可用小寫或大寫輸入：`=sum(B2:B6)` 和 `r:=SUM(B2:B6)` 都可以。

## 用滑鼠指定儲存格 {#souris}

輸入公式時，按一下工作表的儲存格會插入其位址，拖曳會插入範圍。每個參照在公式和工作表中都有自己的色彩。

## 自動完成 {#completion}

輸入名稱的前幾個字母後，DocCells 會列出包含這些字母的函數：[[↑]] [[↓]] 瀏覽，[[Enter]]、[[Tab]] 或按一下選擇。輸入左括號後，會顯示引數說明。

![輸入前幾個字母後列出的函數](completion.webp 760x560)

![函數的說明](aide-formule.webp 760x560)

## 自動求和 {#somme}

{formula-sum} 寫入求和公式。其箭頭提供 **%sum%**、**%average%**、**%count%**、**%max%**、**%min%** 和 **%allFormulas%**：在公式庫中，可按名稱、說明或類別尋找函數。

![公式庫](bibliotheque.webp 1280x760)

## 運算子 {#operateurs}

| 運算子 | 作用 |
| --- | --- |
| `+` `-` `*` `/` | 四則運算 |
| `^` | 乘方：`=2^10` |
| `%` | 百分比：`=20%*B2` |
| `&` | 連接文字：`=A2&" "&B2` |
| `=` `<>` | 等於、不等於 |
| `<` `>` `<=` `>=` | 比較 |
| `( )` | 優先順序 |

先乘方，再乘除，然後加減，最後比較。`=-2^2` 得 −4（Excel 中為 4）。

## 參照 {#references}

| 寫法 | 含義 |
| --- | --- |
| `B2` | 儲存格；隨填滿變化 |
| `$B$2` | 填滿時仍是同一儲存格 |
| `B$2`、`$B2` | 固定列、固定欄 |
| `B2:D6` | 範圍 |
| `B:B`、`2:2` | 整欄、整列 |
| `%sheet%2!B2`、`'成績 2'!B2` | [另一張工作表](feuilles.html#references)的儲存格 |
| `成績` | [已命名範圍](noms.html) |

向下填滿時，`=B2*$B$1` 變成 `=B3*$B$1`、`=B4*$B$1`…

## 條件 {#conditions}

```
=IF(B2>=10, "及格", "不及格")
=IF(AND(B2>=10, C2>=10), "是", "否")
=SWITCH(A2, "a", 1, "b", 2, 0)
=COUNTIF(B2:B6, ">10")
=SUMIF(A2:A6, "Ana", B2:B6)
=AVERAGEIF(B2:B6, "<10")
```

- 邏輯值寫作 `@TRUE()` 和 `@FALSE()`，帶括號。顯示為 TRUE 和 FALSE。
- 條件是文字：`">10"`、`"<>0"`、`"Ana"`。不辨識萬用字元 `*` 和 `?`。
- 空儲存格用 `=B2=""` 判斷；它不等於 0。

## 在表中尋找 {#chercher}

```
=VLOOKUP("Léa", A2:D6, 3, 0)
=INDEX(A2:A6, MATCH(MAX(B2:B6), B2:B6, 0))
```

第一個公式在表的第一欄中尋找 Léa，返回第三欄；最後的引數 0 要求精確匹配。第二個公式給出成績最好的人的姓名。

## 日期與時間 {#dates}

日期是天數，時間是一天的一部分：在儲存格中可以相加減。

```
=A2+7
=A3-A2
=DAYS(A3, A2)
=WEEKDAY(A2, 2)
```

由 `@DATE` 或 `@TODAY` 給出的日期必須經過儲存格才能相加：`=TODAY()+1` 得 `#VALUE!`，但如果 A1 中是 `=TODAY()`，則 `=A1+1` 得明天的日期。結果是數字：請設定 **%fDate%** 格式。

## 錯誤 {#erreurs}

| 顯示 | 原因 |
| --- | --- |
| `#NAME?` | 未知名稱：拼寫錯誤、[不計算](fonctions.html#non-calculees)的函數、`@TRUE` 缺少括號、文字缺少引號 |
| `#VALUE!` | 類型不符：需要數字處是文字 |
| `DIV/0` | 除以零或空儲存格 |
| `#N/A` | 找不到值（`@MATCH`、`@VLOOKUP`），或在 DocGeo 之外使用 `GEO` |
| `#REF!` | 儲存格或工作表不存在 |
| `#NUM!` | 數字超出定義域：`=SQRT(-1)` |
| `#ERROR!` | 公式書寫有誤，或函數不計算 |

`@IFERROR` 替換函數的錯誤（`#N/A`、`#NUM!`）：`=IFERROR(VLOOKUP(E1, A2:D6, 2, 0), "缺席")`。它不替換運算的錯誤（`DIV/0`、`#VALUE!`）：要避免除以零，請檢查除數，`=IF(B2, B3/B2, "")`，對零和空儲存格都適用。

=== listes
# 清單與複數

> DocCells 的儲存格可以包含數字清單。兩個數字的清單也是平面上的點，或一個複數。

## 書寫清單 {#ecrire}

用方括號，元素之間用逗號分隔。清單可以包含清單。

```
n:[2, 1]
n:[1.5, -3, 4]
n:[[1, 2], [3, 4]]
=[2, 1]*3
=[B2, C2]
```

沒有 `=` 時，清單是一個值；有 `=` 時，其元素可以是算式。在使用小數逗號的語言中，元素之間用分號分隔：`r:[2; 1]`。

## 運算 {#operations}

| 運算 | 結果 |
| --- | --- |
| `n:[1, 2, 3] + [1, 1, 1]` | `n:[2, 3, 4]`：逐項相加，長度相等 |
| `n:[1, 2, 3] * 2`、`n:[2, 4, 6] / 2` | `n:[2, 4, 6]`、`n:[1, 2, 3]` |
| `n:[2, 1] * [3, 2]` | `n:[4, 7]`：複數乘積 |
| `n:[4, 7] / [3, 2]` | `n:[2, 1]`：複數商 |
| `n:[2, 1] + 3` | `n:[5, 1]`：3 是實複數 |
| `n:[0, 1]^2` | `n:[-1, 0]`，有舍入誤差 |
| `n:[8, 0]^(1/3)` | 三個立方根的清單 |
| `n:-[2, 1]` | `n:[-2, -1]` |

其他任何組合都得 `#VALUE!`：兩個三元清單的乘積、長度不同、文字。

## 清單與函數 {#fonctions}

函數把清單看作範圍：

```
=SUM([1, 2, 3])
=MAX(A1)
=INDEX(A1, 2)
=AVERAGE([12, 15, 8])
=SUM([1, 2, 3] + [1, 1, 1]*2)
```

`=INDEX(A1, 2)` 給出 A1 中清單的第二個元素：點的縱座標，或複數的虛部。有些[函數](fonctions.html)返回清單：`@FREQUENCY`、`@LINEST`、`@TRANSPOSE`、`@UNIQUE`、`@SPLIT`。

## 顯示 {#affichage}

按鈕 {number-decrease} {number-increase} 和[數值格式](nombres.html)作用於清單中的每個數字：`n:[-0.14, 0.27]`。精確值保留不變。

## 範例：複數數列 {#exemple}

0 在 *z* ↦ *z*² + *c* 下的軌道：A1 中是 *c*，A2 中是 `n:[0, 0]`，A3 中是下面的公式，向下填滿。

```
=A2^2+$A$1
```

在 [DocGeo](docgeo.html) 中，這樣的一欄可以畫在圖形裡。

note: 在 Excel 檔案中，清單儲存為文字，結果為清單的公式的值也是如此（[相容性](excel.html#listes)）。

=== noms
# 已命名範圍

## 命名 {#definir}

1. 選擇儲存格或範圍。
2. 右鍵 › **%defineName%**（或名稱方塊的箭頭 › **%nameManager%**）。
3. 輸入名稱，選擇範圍，**%nameOk%**。

![新建名稱視窗](noms.webp 1280x760)

| 欄位 | 內容 |
| --- | --- |
| **%nameField%** | 以字母或 `_` 開頭；字母、數字、`_` 和 `.`，無空格；不能是 `B2` 這樣的位址 |
| **%scope%** | **%workbook%**：所有工作表都可讀取；某張工作表：僅該表可讀取，並優先於活頁簿的同名名稱 |
| **%refersTo%** | 儲存格或範圍，帶工作表：`'%sheet%1'!$B$2:$B$6` |

## 使用名稱 {#utiliser}

```
=AVERAGE(成績)
=價格*(1+稅率)
```

- 名稱方塊的箭頭列出名稱：選擇一個即選中其所在工作表中的範圍。
- 當選區恰好是已命名範圍時，名稱方塊顯示其名稱。
- [下拉式清單](controles.html#listes)可讀取由位址指定的儲存格範圍。

## 修改、刪除 {#gerer}

在 **%nameManager%** 中，按一下名稱可重新編輯其欄位；**%nameRemove%** 刪除它；**%nameNew%** 回到空名稱。刪除名稱前，請替換讀取它的公式：它們會保留最後的值，之後不再計算。

名稱儲存在 Excel 檔案中，並可從中讀取。

=== feuilles
# 工作表

## 新增、切換 {#ajouter}

- {plus} 新增工作表，命名為「%sheet%2」「%sheet%3」…
- 按一下標籤顯示該表；{all-sheets} 列出所有工作表（包括隱藏的），並顯示所選的表。

## 標籤的功能表 {#menu}

按右鍵標籤，或按一下其箭頭：

| 命令 | 效果 |
| --- | --- |
| **%sheetDelete%** | 確認後刪除；最後一張可見工作表不能刪除 |
| **%sheetCopy%** | 複製工作表 |
| **%sheetRename%** | 或按兩下名稱；不含 `[ ] : ? * / ' "` |
| **%sheetColor%** | 標籤色彩 |
| **%sheetHide%** | 公式仍可讀取該表；{all-sheets} 重新顯示它 |
| **%sheetLeft%**、**%sheetRight%** | 改變順序；也可拖曳標籤 |

## 讀取另一張工作表 {#references}

工作表名、感嘆號、位址。名稱含空格或符號時放在單引號中。

```
=%sheet%2!B2*2
='成績 2'!B2
=SUM('成績 2'!B2:B6)
```

參照需要輸入：輸入公式時切換標籤會放棄輸入。

要讓所有工作表都能用名稱讀取某個範圍，請以 **%workbook%** 為範圍[命名](noms.html)。

=== nombres
# 數值格式

> 格式改變數字的顯示，不改變其值：計算保留所有小數位。

## 選擇格式 {#choisir}

**%format% › %fNumber%**，或按鈕列的 **%fGeneral%** 清單。

| 格式 | 範例 |
| --- | --- |
| **%fGeneral%** | `n:1200.09` |
| **%fText%** | `n:1200.09`，左對齊；輸入保持為文字 |
| **%fNumber%** | `n:1200.09` |
| **%fPercent%** | `n:120009.00%`；0.25 變為 `n:25.00%` |
| **%fScientific%** | `n:1.20E+03` |
| **%fAccounting%** | `%xAccounting%` |
| **%fCurrency%** | `%xCurrency%` |
| **%fDate%**、**%fTime%**、**%fDateTime%** | 用於日期：`%xDate%`、`3:00 PM`、`15:00`… |

貨幣符號由介面語言決定。

| 按鈕 | 效果 |
| --- | --- |
| {percentage-format} | 百分比 |
| {number-decrease} | 減少一位小數 |
| {number-increase} | 增加一位小數 |

這些按鈕也適用於[清單](listes.html)中的數字。要對值本身取整，請使用 `@ROUND`。

## 自訂格式 {#personnalise}

**%format% › %fNumber% › %customNumberFormat%**：選擇建議的格式，或編寫代碼。預覽顯示結果；**%guide%** 說明各符號；**%apply%** 應用到選區。

![自訂數值格式視窗](format-personnalise.webp 1280x760)

| 符號 | 作用 | 代碼 | 1234.5 顯示為 |
| --- | --- | --- | --- |
| `0` | 一位數字，包括零 | `c:0.00` | `n:1234.50` |
| `#` | 需要時才顯示的數字 | `c:#.##` | `n:1234.5` |
| `c:,` | 千位分組 | `c:#,##0` | `n:1,235` |
| `%` | 百分比 | `0%` | `123450%` |
| `"文字"` | 文字、單位 | `c:0.0 "m"` | `n:1234.5 m` |
| `E+00` | 科學記數法 | `c:0.00E+00` | `n:1.23E+03` |
| `;` | 正數、負數、零、文字的格式 | `0;-0;"無"` | `1235` |
| `[Red]` | 色彩 | `0;[Red]-0` | 負數為紅色 |

代碼使用該語言的分隔符輸入；視窗顯示儲存時的形式（`#,##0.00`），與 Excel 相同。

### 日期與時間 {#dates-heures}

| 代碼 | 2026 年 8 月 29 日 14:30 |
| --- | --- |
| `dd/MM/yyyy` | `29/08/2026` |
| `d mmm yyyy` | `29 Aug 2026` |
| `dddd d mmmm yyyy` | `Saturday 29 August 2026` |
| `hh:mm` | `14:30` |
| `dd/MM/yyyy hh:mm` | `29/08/2026 14:30` |

月份和星期的名稱以英文顯示。

### 單位 {#unites}

在 **%units%** 下有 `c:0.00 "V"`、`c:0.00 "Ω"`、`c:0.00 "mm"` 等格式：儲存格仍是數字，可以參與計算。

=== mise-en-forme
# 格式設定

## 文字 {#texte}

| 命令 | 位置 |
| --- | --- |
| 粗體、斜體、下劃線 | {bold} {italic} {underline}；[[Ctrl+B]]、[[Ctrl+I]]、[[Ctrl+U]] |
| 字型 | **Arial** 清單：十三種字型 |
| 字號 | **10** 清單，或 **%formatMenu% › %fontSize%**：9 到 72 |
| 文字色彩、填滿色彩 | {font-color} {background} |
| 清除格式 | {clear-format}、**%formatMenu% › %clearFormat%** |

在色彩面板中，**%resetColor%** 移除色彩；**%customColor%** 開啟系統的色彩選擇器。

修改儲存格時，格式應用於所選的那部分文字。

## 對齊 {#alignement}

| 命令 | 選項 |
| --- | --- |
| {align-left} 水平 | 左、中、右 |
| {align-top} 垂直 | 上、中、下 |
| {text-rotation-none} 旋轉 | 傾斜、垂直、堆疊 |
| {text-overflow} 換行 | **%wrapOverflow%**：延伸到相鄰空儲存格；**%wrap%**：分多列；**%wrapClip%**：在邊框處截斷 |

未選擇對齊方式時，數字和日期靠右，其餘靠左。

## 邊框 {#bordures}

{border-all} 繪製所選邊框；其箭頭提供各邊（上、外、內、全部、無、對角線）、線條的**色彩**和**樣式**。請先選色彩和樣式，再選邊。

## 合併 {#fusion}

{merge-all} 或 **%formatMenu% › %mergeCells%**：

| 命令 | 效果 |
| --- | --- |
| **%mergeAll%** | 合併為一個儲存格，只保留一項內容 |
| **%mergeVertical%** | 每欄一個儲存格 |
| **%mergeHorizontal%** | 每列一個儲存格 |
| **%unmerge%** | 恢復儲存格 |

含合併儲存格的範圍不能排序或篩選。

## 交替色彩 {#alternees}

{alternating} 或 **%formatMenu% › %alternatingColors%** 為所選範圍隔列著色，可帶標題列。三種色彩均可選擇。

![交替色彩視窗](couleurs-alternees.webp 1280x760)

它們是普通的填滿色彩：不隨排序或插入列變化。**%clearAlternating%** 將其從範圍中移除。

## 格線 {#quadrillage}

{gridlines} 或 **%view% › %show% › %gridlines%** 在活頁簿的所有工作表中隱藏或顯示灰線。[列印](impression.html)有單獨的設定。

要讓色彩取決於值，請參見[條件式格式](conditionnelle.html)。

=== conditionnelle
# 條件式格式

> 規則改變範圍中滿足條件的儲存格的外觀，並隨輸入或計算的值而變化。

## 建立規則 {#creer}

1. 選擇範圍，不含標題。
2. {conditional} 或 **%format% › %conditionalFormatting%**。
3. 選擇條件、比較值、色彩或樣式。
4. **%cfAdd%**。

![條件式格式視窗，已應用一條規則](conditionnelle.webp 1280x760)

| 條件 | 儲存格 |
| --- | --- |
| `<` | 小於 |
| `>` | 大於 |
| `=` | 等於 |
| `!=` | 不等於 |
| `[]` | 介於兩個值之間（含端點） |
| `abc` | 包含某文字，不區分大小寫 |

## 與什麼比較 {#comparer}

| %cfCompareTo% | 範例 |
| --- | --- |
| **%cfValue%** | 低於 10 的成績 |
| **%cfCell%** | 低於 `F1` 中所寫界限的成績 |
| **%cfColumn%** | C 欄中逐列大於 B 欄的值 |

## 外觀 {#apparence}

**%cfText%** 和 **%cfBackground%** 選擇色彩，**%cfNone%** 移除色彩；**B**、*I*、**U** 設為粗體、斜體、下劃線。至少需要一種色彩或樣式。

## 多條規則 {#regles}

左欄列出工作表的規則：**%cfEdit%**、**%cfDelete%**。如果多條規則適用於同一儲存格，清單中最後一條按色彩逐項優先。

warn: 在規則覆蓋的範圍中，直接給儲存格設定的文字和填滿色彩不再顯示。

規則以 Excel 條件式格式的形式儲存在 Excel 檔案中。

=== lignes-colonnes
# 列與欄

## 大小 {#taille}

| 操作 | 效果 |
| --- | --- |
| 拖曳欄標題的右邊框 | 改變欄寬 |
| 拖曳列標題的下邊框 | 改變列高 |
| 按右鍵列標題或欄標題 › **%width%**、**%height%** | 以畫素設定所有選中欄或列的大小 |

## 插入、刪除 {#inserer}

在儲存格或欄列標題上右鍵：**%rowAbove%**、**%rowBelow%**、**%columnLeft%**、**%columnRight%**。數量在框中輸入。在欄列標題上右鍵：**%deleteRow%**、**%deleteColumn%**。

![右鍵功能表](menu-contextuel.webp 760x650)

公式會自動調整：其參照隨移動的儲存格變化。上限為 10 000 列、1 000 欄。

## 隱藏 {#masquer}

在欄列標題上右鍵 › **%hideRow%**、**%hideColumn%**。隱藏的儲存格仍會計算。要重新顯示，請選擇其兩側的欄列標題，然後右鍵 › **%showHidden%**。

## 凍結 {#figer}

凍結的列和欄在滾動時保持可見。選擇邊界儲存格，然後 {freeze-row-col} 或 **%view% › %freeze%**：

| 命令 | 保持可見 |
| --- | --- |
| **%freezeRow%** | 直到該儲存格所在列（含） |
| **%freezeColumn%** | 直到該儲存格所在欄（含） |
| **%freezeCell%** | 兩者 |
| **%freezeCancel%** | 無 |

要保留標題列：按一下第 1 列的儲存格，**%freezeRow%**。

=== tri-filtre
# 排序、篩選、尋找

## 排序 {#trier}

| 命令 | 效果 |
| --- | --- |
| **%data% › %sortAndFilter% › %sortAscending%**、**%sortDescending%** | 按選區的第一欄排序；也可用 {filter} 和右鍵 |
| 右鍵 › **%sortRange%** | 選擇排序列、順序，以及第一列是否為標題 |

![範圍排序視窗](tri.webp 1280x760)

請選擇整個表，而不是單獨一欄：各列必須保持完整。含合併儲存格的範圍不能排序。

## 篩選 {#filtrer}

1. 選擇表，包括標題。
2. **%data% › %sortAndFilter% › %createFilter%**，或 {filter}，或右鍵 › **%filterRange%**。
3. 按一下某欄的箭頭。

![某欄的篩選](filtre.webp 1280x760)

| 欄的功能表 | 效果 |
| --- | --- |
| **%sortByAsc%**、**%sortByDesc%** | 對錶的列排序 |
| **%filterByColor%** | 按填滿色彩或文字色彩 |
| **%filterByValues%** | 勾選要保留的值；**%filterAll%**、**%filterNone%**、**%filterInverse%**；輸入框用於尋找值 |
| **%filterConfirm%** | 應用 |
| **%clearFilter%** | 移除表的篩選 |

被排除的列只是隱藏，不會刪除。多欄的篩選同時生效。**%data% › %sortAndFilter% › %clearFilter%** 移除篩選。

## 尋找、替換 {#rechercher}

[[Ctrl+F]] 開啟 **%find%**，[[Ctrl+H]] 開啟 **%replace%**。

![尋找](rechercher.webp 1280x660)

| 選項 | 效果 |
| --- | --- |
| **%regex%** | 尋找的文字是正規表示式：`^A` 找到以 A 開頭的內容 |
| **%wholeWord%** | 整個儲存格等於該文字 |
| **%matchCase%** | 區分大小寫 |
| **%findAll%** | 列出找到的儲存格；按一下一列即可跳轉 |
| **%findNext%** | 轉到下一個 |
| **%replaceOne%**、**%replaceAll%** | 一個儲存格、全部 |

尋找範圍是當前顯示的工作表。

=== controles
# 核取方塊、清單與日曆

![核取方塊、下拉式清單和日期的日曆](controles.webp 1280x560)

## 核取方塊 {#cases}

選擇儲存格，**%insert% › %checkbox%**。按一下可勾選或取消；儲存格的值為 TRUE 或 FALSE。

```
=IF(B2, "已完成", "待辦")
=SUMPRODUCT(B2:B6, C2:C6)
=SUMPRODUCT(B2:B6, B2:B6)
```

第二個公式對勾選列的 C 欄值求和；第三個公式統計勾選的數目。

## 下拉式清單 {#listes}

選擇儲存格，**%insert% › %dropdown%**。

| 來源 | 內容 |
| --- | --- |
| **%listValues%** | 選項，每個輸入框一個；**%addOption%**；不含逗號 |
| **%listRange%** | 以其儲存格為選項的範圍：`%sheet%2!$A$1:$A$10` |

不帶 `$` 的範圍會像填滿的公式一樣逐格移動。其儲存格變化時，選項隨之變化。

儲存格顯示箭頭；按一下開啟選項。不接受清單以外的值。

## 日曆 {#calendrier}

按兩下日期儲存格會開啟日曆：選擇日期，用 **<** 和 **>** 切換月份，**%today%** 選擇今天。凡設有日期格式的儲存格（即使為空）都會開啟日曆，除非其中有公式或已[鎖定](protection.html)。

tip: 要用日曆填寫一欄日期：選擇該欄並設定 **%fDate%** 格式。

## 移除 {#retirer}

[[Delete]] 移除儲存格中的核取方塊或清單及其值。

核取方塊和清單儲存在 Excel 檔案中；核取方塊在其中即為 Excel 核取方塊。

=== graphiques
# 圖表與走勢圖

## 建立圖表 {#creer}

1. 選擇資料。
2. {chart} 或 **%insert% › %chart%**。
3. 選擇類型和選項；預覽隨之變化。
4. **%chartAdd%**，然後 **%chartClose%**。

![圖表視窗](graphique.webp 1280x900)

| 選區 | 解釋為 |
| --- | --- |
| 一欄或一列數字 | 資料 |
| 兩欄 | 第一欄為標籤，第二欄為資料 |
| 兩列 | 第一列為標籤，第二列為資料 |
| 用 [[Ctrl]] 選擇的兩個分開的欄 | 同上 |

一個圖表顯示一個系列：一列或一欄資料。沒有數字的儲存格（如標題）會被忽略。

## 類型 {#types}

| 類型 | 用於 | 標籤 |
| --- | --- | --- |
| **%tBar%** | 比較 | 在柱形下方 |
| **%tLine%** | 變化趨勢 | 在橫軸上 |
| **%tScatter%** | 兩個量的關係 | 若為數字，則是橫座標；否則為 1、2、3… |
| **%tPie%** | 佔比；正值 | 在圖例或扇區上 |

最多 120 個值，餅圖 24 個。

![四種圖表](graphiques.webp 1280x640)

## 選項 {#options}

| 欄位 | 內容 |
| --- | --- |
| **%chartTitle%** | 必填；顯示在圖表頂部 |
| **%chartColor%** | 色彩選擇器或代碼 `#4F81BD`；扇區有各自的色彩 |
| **%chartRange%** | 範圍：`B2:B6` |
| **%chartLabels%** | **%lNone%**；**%lColumn%**（`A`）；**%lRow%**（`1`）；**%lRange%**，與資料大小相同 |
| **%chartOptions%** | 數值、圖例、橫軸、縱軸、網格 |

## 移動、修改 {#modifier}

- 拖曳標題條可移動圖表；拖曳右下角可調整大小。
- **%chartEdit%** 重新開啟視窗，**%chartDelete%** 刪除圖表。視窗中還列出工作表的所有圖表。
- 圖表隨其儲存格的資料變化。

圖表以真正的圖表儲存在 Excel 檔案中，DocCells 可再次讀取。它們不會隨工作表[列印](impression.html)。

## 走勢圖 {#sparklines}

`SPARKLINE` 函數在儲存格中繪製微型圖表。

```
=SPARKLINE(B2:F2)
=SPARKLINE(B2:F2, {"charttype"\"column"})
=SPARKLINE(B2:F2, {"charttype"\"line", "color"\"#dc2626", "linewidth"\2})
=SPARKLINE(B2:F2, {"charttype"\"bar", "max"\100})
```

![折線和柱形走勢圖](sparklines.webp 900x300)

選項寫在花括號中：名稱、反斜槓、值；選項之間用逗號分隔。

| `charttype` | 圖形 | 專用選項 |
| --- | --- | --- |
| `"line"`（預設） | 折線 | `color`、`linewidth`、`xmin`、`xmax`、`ymin`、`ymax` |
| `"bar"` | 堆積條形 | `max`、`color1`、`color2` |
| `"column"` | 柱形 | `color`、`negcolor`、`lowcolor`、`highcolor`、`firstcolor`、`lastcolor`、`axis`、`axiscolor`、`ymin`、`ymax` |
| `"winloss"` | 盈虧 | 同上，但沒有 `ymin` 和 `ymax` |

通用選項：`empty`（`"zero"` 或 `"ignore"`）、`nan`（`"convert"` 或 `"ignore"`）、`rtl`（從右到左）。[SPARKLINE 文件](../../sparkline/zh_tw.html)給出所有取值及範例。

要畫得更大，請加大列高和欄寬，或合併儲存格。

=== images-liens
# 圖片與連結

## 圖片 {#images}

{image} 或 **%insert% › %image%** 在選區位置插入計算機上的圖片。

| 操作 | 效果 |
| --- | --- |
| 拖曳圖片 | 移動 |
| 拖曳控制點 | 調整大小 |
| 選中圖片後按 [[Delete]] | 刪除 |

圖片儲存在 Excel 檔案中的原位置。

## 連結 {#liens}

選擇儲存格，右鍵 › **%link%**。

| %linkType% | 位址 |
| --- | --- |
| 網頁（**%linkWeb%**） | `https://…` |
| 儲存格範圍（**%linkCells%**） | `%sheet%1!A1:C8` |
| **%linkSheet%** | 活頁簿中的工作表 |

**%linkText%** 成為儲存格的內容，藍色帶下劃線。選中儲存格時，其下方出現 **%linkOpen%**。

warn: 連結不儲存在 Excel 檔案中：只儲存其文字。

=== impression
# 列印

**%file% › %print%** 或 [[Ctrl+P]] 按列印效果顯示頁面。

![列印預覽](imprimer.webp 1280x760)

| 設定 | 選項 |
| --- | --- |
| **%printContent%** | 當前工作表，或開啟視窗前選擇的儲存格 |
| **%printPaper%** | A4、Letter |
| **%printOrientation%** | 縱向、橫向 |
| **%printScale%** | **%printActual%**；**%printWidth%**：所有欄在一頁寬度內；**%printPage%** |
| **%printMargins%** | 普通、窄、寬 |
| **%printFormatting%** | 格線、欄列標題、填滿色彩 |

**%printButton%** 開啟瀏覽器的視窗，可選擇印表機或儲存為 PDF。

- 只列印儲存格及其格式：不列印圖表、圖片和走勢圖。
- 隱藏的列和欄不列印。
- 核取方塊列印為 TRUE 或 FALSE。
- 每次列印一張工作表。

tip: 要連同圖表一起列印，請儲存活頁簿並用 Excel 或 LibreOffice 開啟。

=== protection
# 保護

> 受保護的活頁簿只能在未鎖定的儲存格中修改：可用來準備練習表。

## 為學生準備工作表 {#preparer}

1. 選擇要填寫的儲存格，右鍵 › **%unlock%**。
2. {protect} 或 **%tools% › %protectWorkbook%**。
3. 儲存，然後[分發檔案或連結](partager.html)。

起初所有儲存格都是鎖定的；鎖定只在受保護的活頁簿中生效。**%lock%** 可恢復鎖定。

## 保護阻止的操作 {#effets}

| 受保護的活頁簿中 | 鎖定的儲存格 | 未鎖定的儲存格 |
| --- | --- | --- |
| 輸入、清除 | 否 | 是 |
| 日期的日曆 | 否 | 是 |
| 欄寬和列高 | 否 | 否 |
| 交替色彩、插入核取方塊和清單、功能表填滿 | 否 | 否 |
| 格式設定、插入欄列、圖表 | 是 | 是 |

保護作用於所有工作表。它與未鎖定的儲存格一起儲存在 Excel 檔案中，DocCells 和 Excel 都可讀取。

## 學生模式 {#eleve}

位址中的 `?mode=student` 開啟 DocCells 時沒有 {protect} 按鈕，也沒有 **%unlock%** 和 **%defineName%** 命令；**%protectWorkbook%** 不可用。學生無法取消保護。

```
https://…/doccells/?mode=student&url=https://…/exercise.xlsx
```

note: 這是使用層面的保護，沒有密碼：用其他試算表開啟檔案，或不帶 `mode=student` 開啟，都可以取消保護。

=== partager
# 共用與嵌入

## 透過連結開啟活頁簿 {#url}

`?url=` 後接線上 `.xlsx` 檔案的位址，即可在 DocCells 中開啟。

```
https://…/doccells/?url=https://example.org/marks.xlsx
```

存放檔案的網站必須允許其他網站讀取（CORS 標頭）；與 DocCells 放在同一網站的檔案沒有此限制。每個人開啟的是自己的副本：更改不會寫回原檔案。

## Google 試算表 {#google}

也可以使用 Google 試算表的位址。

```
https://…/doccells/?url=https://docs.google.com/spreadsheets/d/…
```

- 將其共用給「知道連結的任何人」。
- DocCells 每次開啟時讀取 Excel 格式的副本：Google 文件不會被修改。
- 存放 DocCells 的網站必須能執行 PHP；最大 25 MB。

## 位址選項 {#options}

| 選項 | 效果 |
| --- | --- |
| `url=…` | 開啟活頁簿或 Google 試算表 |
| `mode=student` | [學生模式](protection.html#eleve) |
| `lang=zh-TW` | 指定語言：`de`、`el`、`en`、`es`、`fr`、`hi`、`it`、`nl`、`pt`、`ru`、`zh-CN`、`zh-TW` |

各選項依次排列，用 `&` 分隔：`?lang=zh-TW&mode=student&url=…`。第一個選項在 `?` 之後。

## 在網頁中 {#integrer}

```
<iframe src="https://…/doccells/?url=https://example.org/marks.xlsx"
    style="width:100%;height:500px;border:1px solid #ccc"></iframe>
```

在框架中，DocCells 沒有功能表、開啟和儲存按鈕以及恢復副本：只顯示按鈕列、資料編輯列和工作表。

## 透過程式 {#programme}

網頁可以控制 DocCells：載入活頁簿、讀寫儲存格、跟蹤其值。`embed` 選項開啟此模式；面向開發者的說明見專案的 [EMBED.md](https://github.com/erichake/doccells/blob/main/EMBED.md) 檔案（法語）。

=== docgeo
# 與 DocGeo 一起使用

> DocGeo 是 DocTools 的動態幾何軟體，其中包含 DocCells：圖形旁邊的工作表，兩者可互相讀取。

在 DocGeo 中，**%file% › %gView% › %gSheetView%** 在圖形旁新增工作表；**%file% › %gTab% › %gSheetTab%** 將其作為分頁。

## GEO 函數 {#geo}

在儲存格中，`GEO` 讀取圖形中某個物件的值，物件名放在引號中。

```
=GEO("AB")
=2*GEO("r")+1
=GEO("'圖形 1'!c")
```

- 操作圖形時，儲存格隨之變化。
- 點按其座標的[清單](listes.html)讀取：`=GEO("A")*2` 也是一個點。
- 輸入公式時，按一下圖形中的物件會寫入 `GEO` 及其名稱。
- 未知物件得 `#N/A`。在 DocGeo 之外，`GEO` 總是得 `#N/A`。
- `GEO` 在所有語言中名稱相同。

## 圖形讀取儲存格 {#figure}

在 DocGeo 的公式中，`!B3` 表示儲存格，`!B2:B21` 表示範圍。

## 與單獨使用 DocCells 的區別 {#differences}

| 在 DocGeo 中 | |
| --- | --- |
| 功能表和按鈕 | 工作表處於活動狀態時，顯示在 DocGeo 的欄中 |
| 檔案 | DocGeo 的檔案：工作表儲存在 `.dgo` 中，包括清單和連結 |
| 工作表 | 每個檢視一張；多個試算表分頁可互相讀取 |
| 復原 | 儲存格中的 [[Ctrl+Z]] 只復原儲存格的操作 |

詳情見 DocGeo 手冊的[試算表](https://doctools.org/apps/docgeo/tutorials/zh-TW/tableur.html)頁面。

=== fonctions
# 函數

> DocCells 計算的 %functions% 個函數，按領域分類，各附一個範例。

- 搜尋：在頁面頂部的搜尋框（[[/]]）中輸入函數名，即可找到它所在的列。
- 引數之間用逗號分隔；方括號 `[ ]` 中的引數可省略。
- `@TRUE()` 和 `@FALSE()` 要帶括號；也可寫 1 和 0。
- 「範圍」引數可以是[清單](listes.html)：`=AVERAGE([12, 15, 8])`。
- 另見[公式](formules.html)：運算子、參照、錯誤。

## 範例所用的儲存格 {#exemples}

範例讀取這張工作表：

%%sample%%

%%functions%%

## 不計算的函數 {#non-calculees}

DocCells 的自動完成和公式庫也列出了一些不計算的函數：它們得 `#NAME?` 或 `#ERROR!`。Excel 的新函數也是如此。

| 不計算 | 替代方法 |
| --- | --- |
| `TEXT`、`FIXED`、`DOLLAR` | 儲存格的[數值格式](nombres.html) |
| `XLOOKUP`、`OFFSET`、`INDIRECT`、`ADDRESS` | `INDEX` 和 `MATCH`、`VLOOKUP`、`CHOOSE` |
| `FILTER`、`SORT`、`SEQUENCE`、`LET`、`LAMBDA` | [排序和篩選](tri-filtre.html)；[填滿](selection.html#recopier)公式 |
| `MAXIFS`、`MINIFS`、`TEXTJOIN` | 篩選；`&` 運算子 |
| `MMULT`、`MDETERM`、`MINVERSE` | `SUMPRODUCT`，每個元素一個公式 |
| `HYPERLINK` | [插入連結](images-liens.html#liens) |
| Excel 中帶點的名稱：`RANK.EQ`、`VAR.S`、`NORM.DIST`… | 不帶點的名稱或舊名稱：`RANK`、`VAR`、`NORMDIST` |
| 資料庫函數（`DSUM`…）、票息與證券（`PRICE`、`COUPNUM`…）、`ISBLANK`、`CELL`、`ISFORMULA` | `SUMIFS`；空儲存格用 `=A1=""` |

=== raccourcis
# 快速鍵與手勢

## 檔案 {#fichier}

| 按鍵 | 效果 |
| --- | --- |
| [[Ctrl+O]] | 開啟 |
| [[Ctrl+S]] | 儲存；在 Firefox 和 Safari 中為下載 |
| [[Ctrl+P]] | 列印 |

## 編輯 {#edition}

| 按鍵 | 效果 |
| --- | --- |
| [[Ctrl+Z]]；[[Ctrl+Y]]、[[Ctrl+Shift+Z]] | 復原；取消復原 |
| [[Ctrl+C]]、[[Ctrl+X]]、[[Ctrl+V]] | 複製、剪下、貼上 |
| [[Ctrl+D]]；[[Ctrl+R]] | 向下填滿；向右填滿 |
| [[Delete]]、[[⌫]] | 清空儲存格 |
| [[Ctrl+F]]；[[Ctrl+H]] | 尋找；替換 |

## 格式設定 {#mise-en-forme}

| 按鍵 | 效果 |
| --- | --- |
| [[Ctrl+B]]、[[Ctrl+I]]、[[Ctrl+U]] | 粗體、斜體、下劃線 |

## 移動、選擇 {#se-deplacer-selectionner}

| 按鍵 | 效果 |
| --- | --- |
| 方向鍵 | 相鄰儲存格 |
| [[Tab]]、[[Shift+Tab]] | 下一個、上一個儲存格 |
| [[Shift]] 加方向鍵 | 擴展選區 |
| [[Shift]] 加按一下 | 選到該儲存格 |
| [[Ctrl]] 加按一下 | 新增到選區 |
| [[Ctrl+A]] | 整張工作表 |

## 輸入 {#saisie}

| 按鍵 | 效果 |
| --- | --- |
| [[F2]]、[[Enter]]、按兩下 | 修改儲存格 |
| [[Enter]] | 確認並下移 |
| [[Esc]] | 放棄 |
| [[Alt+Enter]] | 在儲存格內換行 |
| [[↑]] [[↓]]、[[Enter]]、[[Tab]] | 瀏覽、選擇建議的函數 |
| 在工作表上按一下或拖曳 | 在公式中插入參照 |

## 滑鼠 {#souris}

| 手勢 | 效果 |
| --- | --- |
| 拖曳藍色控點 | [填滿](selection.html#recopier) |
| 拖曳選區邊框 | [移動](selection.html#deplacer) |
| 拖曳欄列標題的邊框 | [改變欄寬、列高](lignes-colonnes.html#taille) |
| 右鍵 | 儲存格、欄列標題、標籤的功能表 |
| 按兩下日期 | [日曆](controles.html#calendrier) |
| 按兩下標籤 | 重新命名工作表 |
| 拖曳標籤 | 移動工作表 |
| 放下 `.xlsx` 檔案 | 開啟 |

=== excel
# 與 Excel 的相容性

> DocCells 讀寫 Excel `.xlsx` 格式。以下內容在讀寫兩個方向都會保留。

## 保留的內容 {#conserve}

| 專案 | 說明 |
| --- | --- |
| 值、文字、日期、公式 | 公式以 DocCells 的語言顯示 |
| [數值格式](nombres.html) | 包括自訂格式 |
| 字型、色彩、對齊、旋轉、換行 | |
| 邊框、合併儲存格 | |
| 欄寬、列高、隱藏的欄列 | |
| [凍結的欄列](lignes-colonnes.html#figer)、格線 | |
| 多張工作表 | |
| [已命名範圍](noms.html) | |
| [條件式格式](conditionnelle.html) | DocCells 的規則，以及 Excel 的簡單規則（比較、包含文字） |
| [核取方塊、下拉式清單](controles.html) | |
| [圖表](graphiques.html) | 寫為 Excel 圖表；DocCells 的圖表可再次讀取 |
| [圖片](images-liens.html) | |
| [篩選](tri-filtre.html#filtrer) | |
| [保護](protection.html)、未鎖定的儲存格 | |

## 不保留的內容 {#perdu}

| 專案 | 變為 |
| --- | --- |
| [連結](images-liens.html#liens) | 其文字 |
| 儲存格中的[清單](listes.html) | 文字 `n:[2, 1]` |
| DocCells 或 Google 試算表的走勢圖 | `SPARKLINE` 公式，DocCells 可再次讀取；Excel 不辨識 |
| 在 Excel 中建立的圖表 | 不保留 |
| 樞紐分析表、巨集、交叉分析篩選器、註解 | 不保留 |
| 使用色階、資料條、圖示的條件式格式 | 不保留 |

tip: 替換複雜的 Excel 活頁簿之前，請先在 DocCells 中以另一個名稱儲存（**%saveAs%**）。

## 清單 {#listes}

從 `.xlsx` 重新開啟的清單是文字：重新輸入即可變回清單。由公式計算的清單在公式重新計算時恢復為清單。

## 公式 {#formules}

開啟時，公式一般保留 Excel 儲存的結果，直到其某個儲存格發生變化。[DocCells 不計算](fonctions.html#non-calculees)的函數此時得 `#NAME?` 或 `#ERROR!`。

## 其他格式 {#formats}

| 格式 | 方法 |
| --- | --- |
| `.csv` | 用文字編輯器開啟並複製；如果值以定位字元分隔，則貼上到 DocCells；否則轉換為 `.xlsx` |
| `.ods`、`.xls` | 用 LibreOffice 或 Excel 另存為 `.xlsx` |
| Google 試算表 | [透過連結](partager.html#google)，或下載為 `.xlsx` |
| PDF | [列印](impression.html)，「另存為 PDF」 |

=== faq
# 常見問題

## 輸入 {#saisie}

### 輸入的日期沒有被辨識

對 DocCells 而言，`11/25/2026` 是文字。請輸入 `2026-11-25`，然後選擇 **%fDate%** 格式（[日期](saisie.html#dates)）。

### 顯示數字而不是日期

日期是天數：給儲存格設定 **%fDate%** 格式（**%format% › %number%**）。

### 數字沒有相加

左對齊的是文字。在儲存格中輸入單位或小數逗號會使其變為文字（[類型](saisie.html#types)）。

### 編號開頭的零消失了

輸入前設定 **%fText%** 格式，或以單引號開頭（[文字](saisie.html#textes)）。

### 數字要求用逗號而不是小數點

DocCells 採用瀏覽器的語言。`?lang=zh-TW` 可指定語言（[語言](demarrage.html#langue)）。

## 公式 {#formules}

### TRUE 或 FALSE 得到 `#NAME?`

請寫 `@TRUE()` 和 `@FALSE()`，或 1 和 0（[條件](formules.html#conditions)）。

### DocCells 建議的函數得到 `#NAME?`

並非所有建議的函數都會計算（[不計算的函數](fonctions.html#non-calculees)）。

### `@IFERROR` 不處理 DIV/0

請檢查除數：`=IF(B2, A2/B2, "")`（[錯誤](formules.html#erreurs)）。

### 貼上後公式沒有保留

右鍵功能表的 **%paste%** 貼上值；[[Ctrl+V]] 貼上公式（[複製](selection.html#copier)）。

### 寫出月份名稱，或在文字中設定數值格式

`@TEXT` 函數不計算：請給單獨的儲存格設定[格式](nombres.html)。

### 統計勾選的核取方塊

`=SUMPRODUCT(B2:B6, B2:B6)`（[核取方塊](controles.html#cases)）。

### `=TODAY()+1` 得到 #VALUE!

將 `=TODAY()` 放在儲存格中，再對該儲存格相加（[日期](formules.html#dates)）。

## 呈現 {#presentation}

### 儲存格的色彩不變

該儲存格在某條[條件式格式](conditionnelle.html#regles)規則的範圍內。

### 某個按鈕不見了

視窗較窄：它在 {more} 後面。

### 無法排序或篩選

範圍中有合併儲存格：請取消合併。

## 檔案 {#fichiers}

### 儲存時下載了新檔案

在 Firefox 和 Safari 中是這樣。Chrome 和 Edge 會寫入檔案（[儲存](demarrage.html#enregistrer)）。

### 頁面未儲存就關閉了

在同一瀏覽器中重新開啟 DocCells：它會詢問是否恢復副本（[恢復](demarrage.html#recuperer)）。

### 圖表沒有列印

列印只包含儲存格（[列印](impression.html)）。

### `?url=` 連結打不開活頁簿

存放檔案的網站可能不允許其他網站讀取。Google 試算表必須透過連結共用（[共用](partager.html)）。

### 連結不見了

連結不儲存在 Excel 格式中（[不保留的內容](excel.html#perdu)）。

## 學生 {#eleves}

### 學生能修改公式嗎？

在受保護的活頁簿中，除未鎖定的儲存格外不能修改（[保護](protection.html)）。在連結中加入 `mode=student`，學生就無法取消保護。
