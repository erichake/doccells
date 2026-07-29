const COPY = {
  en: {
    checkbox: "Checkbox",
    dropdown: "Dropdown",
    title: "Insert dropdown",
    selection: "Selection",
    options: "Options",
    option: "Option",
    defaultOption1: "Option 1",
    defaultOption2: "Option 2",
    addOption: "Add option",
    remove: "Remove option",
    insert: "Insert",
    cancel: "Cancel",
    close: "Close",
    errors: {
      empty: "Add at least one option.",
      comma: "An option cannot contain a comma.",
    },
  },
  "fr-FR": {
    checkbox: "Case à cocher",
    dropdown: "Liste déroulante…",
    title: "Insérer une liste déroulante",
    selection: "Sélection",
    options: "Options",
    option: "Option",
    defaultOption1: "Option 1",
    defaultOption2: "Option 2",
    addOption: "Ajouter une option",
    remove: "Supprimer l’option",
    insert: "Insérer",
    cancel: "Annuler",
    close: "Fermer",
    errors: {
      empty: "Ajoutez au moins une option.",
      comma: "Une option ne peut pas contenir de virgule.",
    },
  },
  "es-ES": { checkbox: "Casilla de verificación", dropdown: "Lista desplegable…", title: "Insertar lista desplegable", selection: "Selección", options: "Opciones", option: "Opción", defaultOption1: "Opción 1", defaultOption2: "Opción 2", addOption: "Añadir opción", remove: "Eliminar opción", insert: "Insertar", cancel: "Cancelar", close: "Cerrar" },
  de: { checkbox: "Kontrollkästchen", dropdown: "Drop-down-Liste…", title: "Drop-down-Liste einfügen", selection: "Auswahl", options: "Optionen", option: "Option", defaultOption1: "Option 1", defaultOption2: "Option 2", addOption: "Option hinzufügen", remove: "Option entfernen", insert: "Einfügen", cancel: "Abbrechen", close: "Schließen" },
  it: { checkbox: "Casella di controllo", dropdown: "Elenco a discesa…", title: "Inserisci elenco a discesa", selection: "Selezione", options: "Opzioni", option: "Opzione", defaultOption1: "Opzione 1", defaultOption2: "Opzione 2", addOption: "Aggiungi opzione", remove: "Rimuovi opzione", insert: "Inserisci", cancel: "Annulla", close: "Chiudi" },
  pt: { checkbox: "Caixa de seleção", dropdown: "Lista pendente…", title: "Inserir lista pendente", selection: "Seleção", options: "Opções", option: "Opção", defaultOption1: "Opção 1", defaultOption2: "Opção 2", addOption: "Adicionar opção", remove: "Remover opção", insert: "Inserir", cancel: "Cancelar", close: "Fechar" },
  nl: { checkbox: "Selectievakje", dropdown: "Vervolgkeuzelijst…", title: "Vervolgkeuzelijst invoegen", selection: "Selectie", options: "Opties", option: "Optie", defaultOption1: "Optie 1", defaultOption2: "Optie 2", addOption: "Optie toevoegen", remove: "Optie verwijderen", insert: "Invoegen", cancel: "Annuleren", close: "Sluiten" },
  ru: { checkbox: "Флажок", dropdown: "Раскрывающийся список…", title: "Вставить раскрывающийся список", selection: "Выделение", options: "Варианты", option: "Вариант", defaultOption1: "Вариант 1", defaultOption2: "Вариант 2", addOption: "Добавить вариант", remove: "Удалить вариант", insert: "Вставить", cancel: "Отмена", close: "Закрыть" },
  el: { checkbox: "Πλαίσιο ελέγχου", dropdown: "Αναπτυσσόμενη λίστα…", title: "Εισαγωγή αναπτυσσόμενης λίστας", selection: "Επιλογή", options: "Επιλογές", option: "Επιλογή", defaultOption1: "Επιλογή 1", defaultOption2: "Επιλογή 2", addOption: "Προσθήκη επιλογής", remove: "Κατάργηση επιλογής", insert: "Εισαγωγή", cancel: "Ακύρωση", close: "Κλείσιμο" },
  hi: { checkbox: "चेकबॉक्स", dropdown: "ड्रॉपडाउन…", title: "ड्रॉपडाउन डालें", selection: "चयन", options: "विकल्प", option: "विकल्प", defaultOption1: "विकल्प 1", defaultOption2: "विकल्प 2", addOption: "विकल्प जोड़ें", remove: "विकल्प हटाएँ", insert: "डालें", cancel: "रद्द करें", close: "बंद करें" },
  "zh-CN": { checkbox: "复选框", dropdown: "下拉列表…", title: "插入下拉列表", selection: "所选区域", options: "选项", option: "选项", defaultOption1: "选项 1", defaultOption2: "选项 2", addOption: "添加选项", remove: "删除选项", insert: "插入", cancel: "取消", close: "关闭" },
  "zh-TW": { checkbox: "核取方塊", dropdown: "下拉式選單…", title: "插入下拉式選單", selection: "所選範圍", options: "選項", option: "選項", defaultOption1: "選項 1", defaultOption2: "選項 2", addOption: "新增選項", remove: "移除選項", insert: "插入", cancel: "取消", close: "關閉" },
};

export const getDataValidationTexts = (locale) => {
  const fallback = COPY.en;
  const localized = COPY[locale] || fallback;
  return {
    ...fallback,
    ...localized,
    errors: {
      ...fallback.errors,
      ...localized.errors,
    },
  };
};
