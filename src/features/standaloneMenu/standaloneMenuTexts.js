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
  const splashTagline = SPLASH_TAGLINES[lang] || SPLASH_TAGLINES.en;
  const licenseLink =
    TRANSLATED_LICENSE_LINK[lang] || TRANSLATED_LICENSE_LINK.en;
  const formatMenu =
    TRANSLATED_FORMAT_MENU[lang] || TRANSLATED_FORMAT_MENU.en;
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
      clearFormat: pick(toolbar["clear-format"], formatMenu.clearFormat),
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
    numberFormats,
  };
};
