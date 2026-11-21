import { locale as getFortuneLocale } from "@fortune-sheet/core";
import { SPLASH_TAGLINES } from "../../shared/splashTaglines.js";

const FALLBACK_TEXTS = {
  menuBarLabel: "DocCells menus",
  file: "File",
  edit: "Edit",
  view: "View",
  insert: "Insert",
  data: "Data",
  tools: "Tools",
  open: "Open",
  openRecent: "Open recent file",
  clearRecentFiles: "Clear list",
  export: "Export",
  print: "Print…",
  save: "Save",
  saveAs: "Save as...",
  untitled: "Untitled",
  unsavedChanges: "Unsaved changes",
  show: "Show",
  gridlines: "Gridlines",
  about: "About...",
  alternatingColors: "Alternating colors...",
  splashTagline: SPLASH_TAGLINES.en,
  licenseGithub: "License & GitHub",
  docToolsTitle: "DocCells is part of DocTools",
  docToolsDescription:
    "DocCells is the spreadsheet in DocTools, a platform for remediation, assessment and document sharing",
  discoverDocTools: "Discover DocTools",
};

const TRANSLATED_DOCUMENT = {
  "zh-CN": { save: "保存", saveAs: "另存为...", untitled: "无标题", unsavedChanges: "未保存的更改", openRecent: "打开最近的文件", clearRecentFiles: "清除列表" },
  "zh-TW": { save: "儲存", saveAs: "另存新檔...", untitled: "未命名", unsavedChanges: "未儲存的變更", openRecent: "開啟最近的檔案", clearRecentFiles: "清除清單" },
  en: { save: "Save", saveAs: "Save as...", untitled: "Untitled", unsavedChanges: "Unsaved changes", openRecent: "Open recent file", clearRecentFiles: "Clear list" },
  "fr-FR": { save: "Enregistrer", saveAs: "Enregistrer sous...", untitled: "Sans titre", unsavedChanges: "Modifications non enregistrées", openRecent: "Ouvrir un fichier récent", clearRecentFiles: "Effacer la liste" },
  "es-ES": { save: "Guardar", saveAs: "Guardar como...", untitled: "Sin título", unsavedChanges: "Cambios sin guardar", openRecent: "Abrir un archivo reciente", clearRecentFiles: "Borrar la lista" },
  hi: { save: "सहेजें", saveAs: "इस रूप में सहेजें...", untitled: "शीर्षकहीन", unsavedChanges: "सहेजे नहीं गए बदलाव", openRecent: "हाल की फ़ाइल खोलें", clearRecentFiles: "सूची साफ़ करें" },
  ru: { save: "Сохранить", saveAs: "Сохранить как...", untitled: "Без названия", unsavedChanges: "Несохранённые изменения", openRecent: "Открыть недавний файл", clearRecentFiles: "Очистить список" },
  pt: { save: "Guardar", saveAs: "Guardar como...", untitled: "Sem título", unsavedChanges: "Alterações não guardadas", openRecent: "Abrir ficheiro recente", clearRecentFiles: "Limpar lista" },
  de: { save: "Speichern", saveAs: "Speichern unter...", untitled: "Unbenannt", unsavedChanges: "Nicht gespeicherte Änderungen", openRecent: "Zuletzt verwendete Datei öffnen", clearRecentFiles: "Liste leeren" },
  el: { save: "Αποθήκευση", saveAs: "Αποθήκευση ως...", untitled: "Χωρίς τίτλο", unsavedChanges: "Μη αποθηκευμένες αλλαγές", openRecent: "Άνοιγμα πρόσφατου αρχείου", clearRecentFiles: "Εκκαθάριση λίστας" },
  it: { save: "Salva", saveAs: "Salva con nome...", untitled: "Senza titolo", unsavedChanges: "Modifiche non salvate", openRecent: "Apri un file recente", clearRecentFiles: "Cancella elenco" },
  nl: { save: "Opslaan", saveAs: "Opslaan als...", untitled: "Naamloos", unsavedChanges: "Niet-opgeslagen wijzigingen", openRecent: "Recent bestand openen", clearRecentFiles: "Lijst wissen" },
};

const TRANSLATED_FILL = {
  "zh-CN": { fillDown: "向下填充", fillRight: "向右填充" },
  "zh-TW": { fillDown: "向下填滿", fillRight: "向右填滿" },
  en: { fillDown: "Fill down", fillRight: "Fill right" },
  "fr-FR": { fillDown: "Recopier vers le bas", fillRight: "Recopier à droite" },
  "es-ES": { fillDown: "Rellenar hacia abajo", fillRight: "Rellenar hacia la derecha" },
  hi: { fillDown: "नीचे भरें", fillRight: "दाईं ओर भरें" },
  ru: { fillDown: "Заполнить вниз", fillRight: "Заполнить вправо" },
  pt: { fillDown: "Preencher para baixo", fillRight: "Preencher para a direita" },
  de: { fillDown: "Nach unten ausfüllen", fillRight: "Nach rechts ausfüllen" },
  el: { fillDown: "Συμπλήρωση προς τα κάτω", fillRight: "Συμπλήρωση προς τα δεξιά" },
  it: { fillDown: "Riempi in basso", fillRight: "Riempi a destra" },
  nl: { fillDown: "Omlaag doorvoeren", fillRight: "Rechts doorvoeren" },
};

const TRANSLATED_ABOUT = {
  "zh-CN": "关于...",
  "zh-TW": "關於...",
  en: "About...",
  "fr-FR": "A propos...",
  "es-ES": "Acerca de...",
  hi: "परिचय...",
  pt: "Acerca de...",
  de: "Über...",
  el: "Σχετικά...",
  it: "Informazioni...",
  nl: "Over...",
};

const TRANSLATED_FORMAT_MENU = {
  "zh-CN": { format: "格式", alignment: "对齐方式", clearFormat: "清除格式" },
  "zh-TW": { format: "格式", alignment: "對齊方式", clearFormat: "清除格式" },
  en: { format: "Format", alignment: "Alignment", clearFormat: "Clear formatting" },
  "fr-FR": { format: "Format", alignment: "Alignement", clearFormat: "Effacer la mise en forme" },
  "es-ES": { format: "Formato", alignment: "Alineación", clearFormat: "Borrar formato" },
  hi: { format: "प्रारूप", alignment: "संरेखण", clearFormat: "फ़ॉर्मेटिंग साफ़ करें" },
  ru: { format: "Формат", alignment: "Выравнивание", clearFormat: "Очистить форматирование" },
  pt: { format: "Formato", alignment: "Alinhamento", clearFormat: "Limpar formatação" },
  de: { format: "Format", alignment: "Ausrichtung", clearFormat: "Formatierung löschen" },
  el: { format: "Μορφή", alignment: "Στοίχιση", clearFormat: "Εκκαθάριση μορφοποίησης" },
  it: { format: "Formato", alignment: "Allineamento", clearFormat: "Cancella formattazione" },
  nl: { format: "Opmaak", alignment: "Uitlijning", clearFormat: "Opmaak wissen" },
};

const TRANSLATED_ALTERNATING_COLORS = {
  "zh-CN": {
    menuItem: "交替颜色...",
    title: "交替颜色",
    activeSheet: "当前工作表",
    range: "应用于范围",
    headerRow: "标题行",
    headerColor: "标题颜色",
    firstRowColor: "第一行颜色",
    secondRowColor: "第二行颜色",
    previewHeader: "标题",
    previewRow: "行",
    apply: "应用",
    clear: "移除颜色",
    cancel: "取消",
    close: "关闭",
    errors: { range: "区域格式应类似 A1:E20。" },
  },
  "zh-TW": {
    menuItem: "交錯色彩...",
    title: "交錯色彩",
    activeSheet: "目前工作表",
    range: "套用到範圍",
    headerRow: "標題列",
    headerColor: "標題色彩",
    firstRowColor: "第一列色彩",
    secondRowColor: "第二列色彩",
    previewHeader: "標題",
    previewRow: "列",
    apply: "套用",
    clear: "移除色彩",
    cancel: "取消",
    close: "關閉",
    errors: { range: "範圍格式應類似 A1:E20。" },
  },
  en: {
    menuItem: "Alternating colors...",
    title: "Alternating colors",
    activeSheet: "Active sheet",
    range: "Apply to range",
    headerRow: "Header row",
    headerColor: "Header color",
    firstRowColor: "First row color",
    secondRowColor: "Second row color",
    previewHeader: "Header",
    previewRow: "Row",
    apply: "Apply",
    clear: "Remove colors",
    cancel: "Cancel",
    close: "Close",
    errors: { range: "The range must look like A1:E20." },
  },
  "fr-FR": {
    menuItem: "Couleurs alternées...",
    title: "Couleurs alternées",
    activeSheet: "Feuille active",
    range: "Appliquer à la plage",
    headerRow: "Ligne d'en-tête",
    headerColor: "Couleur de l'en-tête",
    firstRowColor: "Couleur de première ligne",
    secondRowColor: "Couleur de deuxième ligne",
    previewHeader: "En-tête",
    previewRow: "Ligne",
    apply: "Appliquer",
    clear: "Retirer les couleurs",
    cancel: "Annuler",
    close: "Fermer",
    errors: { range: "La plage doit ressembler à A1:E20." },
  },
  "es-ES": {
    menuItem: "Colores alternos...",
    title: "Colores alternos",
    activeSheet: "Hoja activa",
    range: "Aplicar al intervalo",
    headerRow: "Fila de encabezado",
    headerColor: "Color del encabezado",
    firstRowColor: "Color de la primera fila",
    secondRowColor: "Color de la segunda fila",
    previewHeader: "Encabezado",
    previewRow: "Fila",
    apply: "Aplicar",
    clear: "Quitar colores",
    cancel: "Cancelar",
    close: "Cerrar",
    errors: { range: "El intervalo debe parecerse a A1:E20." },
  },
  hi: {
    menuItem: "बारी-बारी रंग...",
    title: "बारी-बारी रंग",
    activeSheet: "सक्रिय शीट",
    range: "रेंज पर लागू करें",
    headerRow: "शीर्षक पंक्ति",
    headerColor: "शीर्षक रंग",
    firstRowColor: "पहली पंक्ति का रंग",
    secondRowColor: "दूसरी पंक्ति का रंग",
    previewHeader: "शीर्षक",
    previewRow: "पंक्ति",
    apply: "लागू करें",
    clear: "रंग हटाएँ",
    cancel: "रद्द करें",
    close: "बंद करें",
    errors: { range: "रेंज A1:E20 जैसी होनी चाहिए।" },
  },
  ru: {
    menuItem: "Чередующиеся цвета...",
    title: "Чередующиеся цвета",
    activeSheet: "Активный лист",
    range: "Применить к диапазону",
    headerRow: "Строка заголовка",
    headerColor: "Цвет заголовка",
    firstRowColor: "Цвет первой строки",
    secondRowColor: "Цвет второй строки",
    previewHeader: "Заголовок",
    previewRow: "Строка",
    apply: "Применить",
    clear: "Удалить цвета",
    cancel: "Отмена",
    close: "Закрыть",
    errors: { range: "Диапазон должен выглядеть как A1:E20." },
  },
  pt: {
    menuItem: "Cores alternadas...",
    title: "Cores alternadas",
    activeSheet: "Folha ativa",
    range: "Aplicar ao intervalo",
    headerRow: "Linha de cabeçalho",
    headerColor: "Cor do cabeçalho",
    firstRowColor: "Cor da primeira linha",
    secondRowColor: "Cor da segunda linha",
    previewHeader: "Cabeçalho",
    previewRow: "Linha",
    apply: "Aplicar",
    clear: "Remover cores",
    cancel: "Cancelar",
    close: "Fechar",
    errors: { range: "O intervalo deve parecer-se com A1:E20." },
  },
  de: {
    menuItem: "Abwechselnde Farben...",
    title: "Abwechselnde Farben",
    activeSheet: "Aktives Blatt",
    range: "Auf Bereich anwenden",
    headerRow: "Kopfzeile",
    headerColor: "Kopfzeilenfarbe",
    firstRowColor: "Farbe der ersten Zeile",
    secondRowColor: "Farbe der zweiten Zeile",
    previewHeader: "Kopfzeile",
    previewRow: "Zeile",
    apply: "Anwenden",
    clear: "Farben entfernen",
    cancel: "Abbrechen",
    close: "Schließen",
    errors: { range: "Der Bereich muss wie A1:E20 aussehen." },
  },
  el: {
    menuItem: "Εναλλασσόμενα χρώματα...",
    title: "Εναλλασσόμενα χρώματα",
    activeSheet: "Ενεργό φύλλο",
    range: "Εφαρμογή στην περιοχή",
    headerRow: "Γραμμή κεφαλίδας",
    headerColor: "Χρώμα κεφαλίδας",
    firstRowColor: "Χρώμα πρώτης γραμμής",
    secondRowColor: "Χρώμα δεύτερης γραμμής",
    previewHeader: "Κεφαλίδα",
    previewRow: "Γραμμή",
    apply: "Εφαρμογή",
    clear: "Αφαίρεση χρωμάτων",
    cancel: "Ακύρωση",
    close: "Κλείσιμο",
    errors: { range: "Η περιοχή πρέπει να μοιάζει με A1:E20." },
  },
  it: {
    menuItem: "Colori alternati...",
    title: "Colori alternati",
    activeSheet: "Foglio attivo",
    range: "Applica all'intervallo",
    headerRow: "Riga di intestazione",
    headerColor: "Colore intestazione",
    firstRowColor: "Colore prima riga",
    secondRowColor: "Colore seconda riga",
    previewHeader: "Intestazione",
    previewRow: "Riga",
    apply: "Applica",
    clear: "Rimuovi colori",
    cancel: "Annulla",
    close: "Chiudi",
    errors: { range: "L'intervallo deve essere simile a A1:E20." },
  },
  nl: {
    menuItem: "Afwisselende kleuren...",
    title: "Afwisselende kleuren",
    activeSheet: "Actief blad",
    range: "Toepassen op bereik",
    headerRow: "Koprij",
    headerColor: "Kopkleur",
    firstRowColor: "Kleur eerste rij",
    secondRowColor: "Kleur tweede rij",
    previewHeader: "Kop",
    previewRow: "Rij",
    apply: "Toepassen",
    clear: "Kleuren verwijderen",
    cancel: "Annuleren",
    close: "Sluiten",
    errors: { range: "Het bereik moet eruitzien als A1:E20." },
  },
};

const TRANSLATED_LICENSE_LINK = {
  "zh-CN": "许可证与 GitHub",
  "zh-TW": "授權與 GitHub",
  en: "License & GitHub",
  "fr-FR": "Licence & Github",
  "es-ES": "Licencia y GitHub",
  hi: "लाइसेंस और GitHub",
  pt: "Licença e GitHub",
  de: "Lizenz & GitHub",
  el: "Άδεια & GitHub",
  it: "Licenza e GitHub",
  nl: "Licentie & GitHub",
};

const TRANSLATED_DOCTOOLS = {
  "zh-CN": {
    title: "DocCells 是 DocTools 的一部分",
    description:
      "DocCells 是 DocTools 的电子表格工具，DocTools 是一个用于补救教学、评估和文档共享的平台",
    discover: "探索 DocTools",
  },
  "zh-TW": {
    title: "DocCells 是 DocTools 的一部分",
    description:
      "DocCells 是 DocTools 的試算表工具，DocTools 是一個用於補救教學、評量和文件分享的平台",
    discover: "探索 DocTools",
  },
  en: {
    title: "DocCells is part of DocTools",
    description:
      "DocCells is the spreadsheet in DocTools, a platform for remediation, assessment and document sharing",
    discover: "Discover DocTools",
  },
  "fr-FR": {
    title: "DocCells fait partie de DocTools",
    description:
      "DocCells est le tableur de DocTools, une plateforme de remédiation, d'évaluation et de partage de documents",
    discover: "Découvrir DocTools",
  },
  "es-ES": {
    title: "DocCells forma parte de DocTools",
    description:
      "DocCells es la hoja de cálculo de DocTools, una plataforma de refuerzo, evaluación y uso compartido de documentos",
    discover: "Descubrir DocTools",
  },
  hi: {
    title: "DocCells, DocTools का हिस्सा है",
    description:
      "DocCells, DocTools का स्प्रेडशीट है, जो सुधारात्मक शिक्षण, मूल्यांकन और दस्तावेज़ साझा करने का एक मंच है",
    discover: "DocTools के बारे में जानें",
  },
  ru: {
    title: "DocCells является частью DocTools",
    description:
      "DocCells — это электронная таблица DocTools, платформы для коррекционного обучения, оценивания и обмена документами",
    discover: "Познакомиться с DocTools",
  },
  pt: {
    title: "O DocCells faz parte do DocTools",
    description:
      "O DocCells é a folha de cálculo do DocTools, uma plataforma de remediação, avaliação e partilha de documentos",
    discover: "Descobrir o DocTools",
  },
  de: {
    title: "DocCells ist Teil von DocTools",
    description:
      "DocCells ist die Tabellenkalkulation von DocTools, einer Plattform für Förderung, Bewertung und den Austausch von Dokumenten",
    discover: "DocTools entdecken",
  },
  el: {
    title: "Το DocCells αποτελεί μέρος του DocTools",
    description:
      "Το DocCells είναι το υπολογιστικό φύλλο του DocTools, μιας πλατφόρμας για ενισχυτική διδασκαλία, αξιολόγηση και κοινή χρήση εγγράφων",
    discover: "Ανακαλύψτε το DocTools",
  },
  it: {
    title: "DocCells fa parte di DocTools",
    description:
      "DocCells è il foglio di calcolo di DocTools, una piattaforma per il recupero, la valutazione e la condivisione di documenti",
    discover: "Scopri DocTools",
  },
  nl: {
    title: "DocCells maakt deel uit van DocTools",
    description:
      "DocCells is het rekenblad van DocTools, een platform voor remediëring, evaluatie en het delen van documenten",
    discover: "DocTools ontdekken",
  },
};

const stripShortcutHint = (text) =>
  typeof text === "string" ? text.replace(/\s*\([^)]*\)\s*$/, "") : text;

const pick = (...values) =>
  values.find((value) => typeof value === "string" && value.trim().length > 0) ||
  "";

export const getStandaloneMenuTexts = (appTexts, lang, currency = "$") => {
  const fortuneTexts = getFortuneLocale({ lang });
  const custom = appTexts?.standaloneMenu || {};
  const toolbar = fortuneTexts.toolbar || {};
  const freezen = fortuneTexts.freezen || {};
  const sort = fortuneTexts.sort || {};
  const filter = fortuneTexts.filter || {};
  const align = fortuneTexts.align || {};
  const textWrap = fortuneTexts.textWrap || {};
  const rotation = fortuneTexts.rotation || {};
  const merge = fortuneTexts.merge || {};
  const defaultFormats =
    typeof fortuneTexts.defaultFmt === "function"
      ? fortuneTexts.defaultFmt(currency)
      : [];
  const decimalSeparator = new Intl.NumberFormat(lang || "en", {
    minimumFractionDigits: 1,
  })
    .formatToParts(1.1)
    .find((part) => part.type === "decimal")?.value || ".";
  const numberFormats = defaultFormats.map((item) =>
    item.value === "split"
      ? "divider"
      : {
          ...item,
          example: item.example?.replace(/(?<=\d)\.(?=\d)/g, decimalSeparator),
        },
  );
  const formatLabel = (value, fallback) =>
    numberFormats.find((item) => item !== "divider" && item.value === value)?.text ||
    fallback;
  const about = TRANSLATED_ABOUT[lang] || TRANSLATED_ABOUT.en;
  const fillTexts = TRANSLATED_FILL[lang] || TRANSLATED_FILL.en;
  const splashTagline = SPLASH_TAGLINES[lang] || SPLASH_TAGLINES.en;
  const licenseLink =
    TRANSLATED_LICENSE_LINK[lang] || TRANSLATED_LICENSE_LINK.en;
  const formatMenu =
    TRANSLATED_FORMAT_MENU[lang] || TRANSLATED_FORMAT_MENU.en;
  const alternatingColorsTexts =
    TRANSLATED_ALTERNATING_COLORS[lang] || TRANSLATED_ALTERNATING_COLORS.en;
  const documentTexts =
    TRANSLATED_DOCUMENT[lang] || TRANSLATED_DOCUMENT.en;
  const docToolsTexts =
    TRANSLATED_DOCTOOLS[lang] || TRANSLATED_DOCTOOLS.en;

  return {
    menuBarLabel: pick(custom.menuBarLabel, FALLBACK_TEXTS.menuBarLabel),
    roots: {
      file: pick(custom.file, FALLBACK_TEXTS.file),
      edit: pick(custom.edit, FALLBACK_TEXTS.edit),
      view: pick(custom.view, FALLBACK_TEXTS.view),
      insert: pick(custom.insert, FALLBACK_TEXTS.insert),
      format: pick(custom.format, toolbar.format, formatMenu.format),
      data: pick(custom.data, FALLBACK_TEXTS.data),
      tools: pick(custom.tools, FALLBACK_TEXTS.tools),
    },
    items: {
      open: pick(custom.open, FALLBACK_TEXTS.open),
      openRecent: pick(
        custom.openRecent,
        documentTexts.openRecent,
        FALLBACK_TEXTS.openRecent,
      ),
      clearRecentFiles: pick(
        custom.clearRecentFiles,
        documentTexts.clearRecentFiles,
        FALLBACK_TEXTS.clearRecentFiles,
      ),
      export: pick(custom.export, FALLBACK_TEXTS.export),
      print: pick(custom.print, FALLBACK_TEXTS.print),
      save: pick(custom.save, documentTexts.save, FALLBACK_TEXTS.save),
      saveAs: pick(custom.saveAs, documentTexts.saveAs, FALLBACK_TEXTS.saveAs),
      untitled: pick(custom.untitled, documentTexts.untitled, FALLBACK_TEXTS.untitled),
      unsavedChanges: pick(
        custom.unsavedChanges,
        documentTexts.unsavedChanges,
        FALLBACK_TEXTS.unsavedChanges,
      ),
      undo: pick(toolbar.undo, "Undo"),
      redo: pick(toolbar.redo, "Redo"),
      fillDown: pick(custom.fillDown, fillTexts.fillDown),
      fillRight: pick(custom.fillRight, fillTexts.fillRight),
      clearFormat: pick(toolbar["clear-format"], formatMenu.clearFormat),
      alternatingColors: pick(
        appTexts?.alternatingColors?.menuItem,
        alternatingColorsTexts.menuItem,
        FALLBACK_TEXTS.alternatingColors,
      ),
      show: pick(custom.show, FALLBACK_TEXTS.show),
      gridlines: pick(custom.gridlines, FALLBACK_TEXTS.gridlines),
      freeze: pick(toolbar.freeze, freezen.default, "Freeze"),
      freezeRow: pick(
        freezen.freezenRowRange,
        toolbar.freezenRowRange,
        "Freeze to current row",
      ),
      freezeColumn: pick(
        freezen.freezenColumnRange,
        toolbar.freezenColumnRange,
        "Freeze to current column",
      ),
      freezeCell: pick(
        freezen.freezenRCRange,
        toolbar.freezenRCRange,
        "Freeze to current cell",
      ),
      freezeCancel: pick(
        freezen.freezenCancel,
        toolbar.freezenCancel,
        "Cancel freezing",
      ),
      image: pick(filter.image, "Image"),
      chart: pick(appTexts?.charts?.toolbar, toolbar.chart, "Chart"),
      bold: pick(
        stripShortcutHint(toolbar.bold),
        appTexts?.conditionalFormatting?.styleLabels?.bold,
        "Bold",
      ),
      italic: pick(
        stripShortcutHint(toolbar.italic),
        appTexts?.conditionalFormatting?.styleLabels?.italic,
        "Italic",
      ),
      underline: pick(
        stripShortcutHint(toolbar.underline),
        appTexts?.conditionalFormatting?.styleLabels?.underline,
        "Underline",
      ),
      number: formatLabel("##0.00", pick(fortuneTexts.format?.number, "Number")),
      text: formatLabel("@", pick(fortuneTexts.format?.text, "Text")),
      alignment: pick(custom.alignment, formatMenu.alignment),
      alignLeft: pick(align.left, toolbar["align-left"], "Left"),
      alignCenter: pick(align.center, toolbar["align-center"], "Center"),
      alignRight: pick(align.right, toolbar["align-right"], "Right"),
      alignTop: pick(align.top, toolbar["align-top"], "Top"),
      alignMiddle: pick(align.middle, toolbar["align-mid"], "Middle"),
      alignBottom: pick(align.bottom, toolbar["align-bottom"], "Bottom"),
      textWrap: pick(toolbar.textWrap, toolbar.textWrapMode, "Text wrapping"),
      wrapOverflow: pick(textWrap.overflow, "Overflow"),
      wrap: pick(textWrap.wrap, "Wrap"),
      wrapClip: pick(textWrap.clip, "Clip"),
      rotation: pick(toolbar.textRotate, toolbar.textRotateMode, "Rotation"),
      rotationNone: pick(rotation.none, "None"),
      rotationAngleUp: pick(rotation.angleup, "Tilt up"),
      rotationAngleDown: pick(rotation.angledown, "Tilt down"),
      rotationVertical: pick(rotation.vertical, "Stack vertically"),
      rotationUp: pick(rotation.rotationUp, "Rotate up"),
      rotationDown: pick(rotation.rotationDown, "Rotate down"),
      mergeCells: pick(toolbar["merge-cell"], toolbar.mergeCell, "Merge cells"),
      fontSize: pick(toolbar["font-size"], toolbar.fontSize, "Font size"),
      mergeAll: pick(merge.mergeAll, "Merge all"),
      mergeVertical: pick(merge.mergeV, "Merge vertically"),
      mergeHorizontal: pick(merge.mergeH, "Merge horizontally"),
      unmerge: pick(merge.mergeCancel, "Unmerge"),
      decreaseDecimals: pick(
        toolbar["number-decrease"],
        toolbar.numberDecrease,
        "Decrease decimal places",
      ),
      increaseDecimals: pick(
        toolbar["number-increase"],
        toolbar.numberIncrease,
        "Increase decimal places",
      ),
      customNumberFormat: pick(
        appTexts?.customNumberFormat?.menuItem,
        "Custom number format…",
      ),
      conditionalFormatting: pick(
        appTexts?.conditionalFormatting?.toolbar,
        toolbar.conditionalFormat,
        "Conditional formatting",
      ),
      sortAndFilter: pick(toolbar.sortAndFilter, "Sort and filter"),
      sortAscending: pick(sort.asc, filter.sortByAsc, "Ascending"),
      sortDescending: pick(sort.desc, filter.sortByDesc, "Descending"),
      createFilter: pick(filter.filter, toolbar.filter, "Create filter"),
      clearFilter: pick(filter.clearFilter, "Clear filter"),
      protectWorkbook: pick(
        appTexts?.toggleSheetProtection,
        "Protect / Unprotect workbook",
      ),
      about: pick(custom.about, about, FALLBACK_TEXTS.about),
      splashTagline: pick(
        custom.splashTagline,
        splashTagline,
        FALLBACK_TEXTS.splashTagline,
      ),
      licenseGithub: pick(
        custom.licenseGithub,
        licenseLink,
        FALLBACK_TEXTS.licenseGithub,
      ),
      docToolsTitle: pick(
        custom.docToolsTitle,
        docToolsTexts.title,
        FALLBACK_TEXTS.docToolsTitle,
      ),
      docToolsDescription: pick(
        custom.docToolsDescription,
        docToolsTexts.description,
        FALLBACK_TEXTS.docToolsDescription,
      ),
      discoverDocTools: pick(
        custom.discoverDocTools,
        docToolsTexts.discover,
        FALLBACK_TEXTS.discoverDocTools,
      ),
    },
    alternatingColors: {
      ...TRANSLATED_ALTERNATING_COLORS.en,
      ...alternatingColorsTexts,
      errors: {
        ...TRANSLATED_ALTERNATING_COLORS.en.errors,
        ...alternatingColorsTexts.errors,
      },
    },
    numberFormats,
  };
};
