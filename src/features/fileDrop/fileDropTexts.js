const TEXTS = {
  en: { title: "Drop to open the workbook", formats: "Excel workbook (.xlsx)" },
  "fr-FR": { title: "Déposez pour ouvrir le classeur", formats: "Classeur Excel (.xlsx)" },
  "es-ES": { title: "Suelte para abrir el libro", formats: "Libro de Excel (.xlsx)" },
  "zh-CN": { title: "松开以打开工作簿", formats: "Excel 工作簿 (.xlsx)" },
  "zh-TW": { title: "放開以開啟活頁簿", formats: "Excel 活頁簿 (.xlsx)" },
  hi: { title: "वर्कबुक खोलने के लिए छोड़ें", formats: "Excel वर्कबुक (.xlsx)" },
  ru: { title: "Отпустите, чтобы открыть книгу", formats: "Книга Excel (.xlsx)" },
  pt: { title: "Largue para abrir o livro", formats: "Livro do Excel (.xlsx)" },
  de: { title: "Zum Öffnen der Arbeitsmappe loslassen", formats: "Excel-Arbeitsmappe (.xlsx)" },
  el: { title: "Αφήστε το για να ανοίξει το βιβλίο εργασίας", formats: "Βιβλίο εργασίας Excel (.xlsx)" },
  it: { title: "Rilascia per aprire la cartella di lavoro", formats: "Cartella di lavoro Excel (.xlsx)" },
  nl: { title: "Loslaten om de werkmap te openen", formats: "Excel-werkmap (.xlsx)" },
};

export const getFileDropTexts = (locale) => TEXTS[locale] || TEXTS.en;
