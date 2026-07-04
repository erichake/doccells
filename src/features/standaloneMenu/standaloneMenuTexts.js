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
  export: "Export",
  show: "Show",
  gridlines: "Gridlines",
  about: "About...",
  splashTagline: SPLASH_TAGLINES.en,
  licenseGithub: "License & GitHub",
  licenseNotice:
    "DocCells is licensed under GNU-GPL v3. It's free, open-source software, and anyone or any community caught red-handed copying and modifying its code will earn my deepest respect!",
  goToGithub: "Go to GitHub",
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

const TRANSLATED_LICENSE = {
  "zh-CN": {
    licenseGithub: "许可证与 GitHub",
    licenseNotice:
      "DocCells 采用 GNU-GPL v3 许可证。这是一款自由且免费的软件,任何被当场抓到复制和修改其代码的人或社区,都将获得我全部的敬意!",
    goToGithub: "前往 GitHub",
  },
  "zh-TW": {
    licenseGithub: "授權與 GitHub",
    licenseNotice:
      "DocCells 採用 GNU-GPL v3 授權條款。這是一款自由且免費的軟體,任何被當場抓到複製和修改其程式碼的人或社群,都將獲得我全部的敬意!",
    goToGithub: "前往 GitHub",
  },
  en: {
    licenseGithub: "License & GitHub",
    licenseNotice:
      "DocCells is licensed under GNU-GPL v3. It's free, open-source software, and anyone or any community caught red-handed copying and modifying its code will earn my deepest respect!",
    goToGithub: "Go to GitHub",
  },
  "fr-FR": {
    licenseGithub: "Licence & Github",
    licenseNotice:
      "DocCells est sous licence GNU-GPL v3. Il s'agit d'un logiciel libre et gratuit, et toute personne ou communauté prise en flagrant délit de copier et modifier son code fera l'objet de toute ma considération !",
    goToGithub: "Accéder au GitHub",
  },
  "es-ES": {
    licenseGithub: "Licencia y GitHub",
    licenseNotice:
      "DocCells está licenciado bajo GNU-GPL v3. Es un software libre y gratuito, y toda persona o comunidad sorprendida in fraganti copiando y modificando su código se ganará toda mi consideración!",
    goToGithub: "Ir a GitHub",
  },
  hi: {
    licenseGithub: "लाइसेंस और GitHub",
    licenseNotice:
      "DocCells, GNU-GPL v3 लाइसेंस के अंतर्गत है। यह मुफ़्त और मुक्त सॉफ़्टवेयर है, और जो भी व्यक्ति या समुदाय इसके कोड की नक़ल करते या उसमें बदलाव करते हुए पकड़ा जाएगा, उसे मेरा पूरा सम्मान मिलेगा!",
    goToGithub: "GitHub पर जाएँ",
  },
  pt: {
    licenseGithub: "Licença e GitHub",
    licenseNotice:
      "O DocCells está licenciado sob a GNU-GPL v3. É um software livre e gratuito, e qualquer pessoa ou comunidade flagrada a copiar e modificar o seu código receberá toda a minha consideração!",
    goToGithub: "Aceder ao GitHub",
  },
  de: {
    licenseGithub: "Lizenz & GitHub",
    licenseNotice:
      "DocCells steht unter der GNU-GPL-v3-Lizenz. Es ist freie und kostenlose Software, und jede Person oder Gemeinschaft, die dabei erwischt wird, ihren Code zu kopieren und zu verändern, wird sich meiner vollsten Anerkennung sicher sein!",
    goToGithub: "Zu GitHub",
  },
  el: {
    licenseGithub: "Άδεια & GitHub",
    licenseNotice:
      "Το DocCells διανέμεται υπό την άδεια GNU-GPL v3. Πρόκειται για ελεύθερο και δωρεάν λογισμικό, και όποιος ή όποια κοινότητα πιαστεί επ' αυτοφώρω να αντιγράφει και να τροποποιεί τον κώδικά του θα κερδίσει την απόλυτη εκτίμησή μου!",
    goToGithub: "Μετάβαση στο GitHub",
  },
  it: {
    licenseGithub: "Licenza e GitHub",
    licenseNotice:
      "DocCells è distribuito sotto licenza GNU-GPL v3. È un software libero e gratuito, e chiunque venga colto in flagrante a copiarne e modificarne il codice riceverà tutta la mia considerazione!",
    goToGithub: "Vai su GitHub",
  },
  nl: {
    licenseGithub: "Licentie & GitHub",
    licenseNotice:
      "DocCells is uitgebracht onder de GNU-GPL v3-licentie. Het is vrije en gratis software, en iedereen of elke gemeenschap die betrapt wordt op het kopiëren en aanpassen van de code, krijgt mijn volledige waardering!",
    goToGithub: "Naar GitHub",
  },
};

export const LICENSE_QUOTE = {
  text: "This song is Copyrighted in U.S., under Seal of Copyright # 154085, for a period of 28 years, and anybody caught singin it without our permission, will be mighty good friends of ourn, cause we don’t give a dern. Publish it. Write it. Sing it. Swing to it. Yodel it. We wrote it, that’s all we wanted to do.",
  author: "Woody Guthrie",
};

const stripShortcutHint = (text) =>
  typeof text === "string" ? text.replace(/\s*\([^)]*\)\s*$/, "") : text;

const pick = (...values) =>
  values.find((value) => typeof value === "string" && value.trim().length > 0) ||
  "";

export const getStandaloneMenuTexts = (appTexts, lang) => {
  const fortuneTexts = getFortuneLocale({ lang });
  const custom = appTexts?.standaloneMenu || {};
  const toolbar = fortuneTexts.toolbar || {};
  const freezen = fortuneTexts.freezen || {};
  const sort = fortuneTexts.sort || {};
  const filter = fortuneTexts.filter || {};
  const about = TRANSLATED_ABOUT[lang] || TRANSLATED_ABOUT.en;
  const splashTagline = SPLASH_TAGLINES[lang] || SPLASH_TAGLINES.en;
  const license = TRANSLATED_LICENSE[lang] || TRANSLATED_LICENSE.en;

  return {
    menuBarLabel: pick(custom.menuBarLabel, FALLBACK_TEXTS.menuBarLabel),
    roots: {
      file: pick(custom.file, FALLBACK_TEXTS.file),
      edit: pick(custom.edit, FALLBACK_TEXTS.edit),
      view: pick(custom.view, FALLBACK_TEXTS.view),
      insert: pick(custom.insert, FALLBACK_TEXTS.insert),
      format: pick(toolbar.format, "Format"),
      data: pick(custom.data, FALLBACK_TEXTS.data),
      tools: pick(custom.tools, FALLBACK_TEXTS.tools),
    },
    items: {
      open: pick(custom.open, FALLBACK_TEXTS.open),
      export: pick(custom.export, FALLBACK_TEXTS.export),
      undo: pick(toolbar.undo, "Undo"),
      redo: pick(toolbar.redo, "Redo"),
      clearFormat: pick(toolbar["clear-format"], "Clear format"),
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
        license.licenseGithub,
        FALLBACK_TEXTS.licenseGithub,
      ),
      licenseNotice: pick(
        custom.licenseNotice,
        license.licenseNotice,
        FALLBACK_TEXTS.licenseNotice,
      ),
      goToGithub: pick(
        custom.goToGithub,
        license.goToGithub,
        FALLBACK_TEXTS.goToGithub,
      ),
    },
  };
};
