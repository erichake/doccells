import {
  datenum_local,
  is_date as isDateFormat,
} from "@fortune-sheet/core";

export const CUSTOM_NUMBER_FORMAT_PRESETS = [
  "#.00",
  "0",
  "0.00",
  "#,##0",
  "#,##0.00",
  "#,##0_);(#,##0)",
  "#,##0_);[Red](#,##0)",
  "#,##0.00_);(#,##0.00)",
  "0.00%",
  "0.00E+00",
];

export const CUSTOM_DATE_FORMAT_PRESETS = [
  "yyyy-MM-dd",
  "dd/MM/yyyy",
  "MM/dd/yyyy",
  "d mmm yyyy",
  "mmmm yyyy",
  "dddd d mmmm yyyy",
  "yyyy-MM-dd hh:mm",
  "dd/MM/yyyy hh:mm",
];

export const CUSTOM_DATE_FORMAT_PREVIEW_SERIAL = datenum_local(
  new Date(2026, 7, 29, 14, 30),
);

const CUSTOM_NUMBER_FORMAT_FALLBACKS = {
  en: {
    dateFormats: "Dates",
    missingPlaceholderOrDateToken:
      "Add at least one numeric placeholder (0, # or ?) or date/time token (d, m, y, h, s).",
  },
  "fr-FR": {
    dateFormats: "Dates",
    missingPlaceholderOrDateToken:
      "Ajoutez au moins un emplacement numérique (0, # ou ?) ou un jeton date/heure (d, m, y, h, s).",
  },
  "zh-CN": {
    dateFormats: "日期",
    missingPlaceholderOrDateToken:
      "请至少添加一个数字占位符（0、# 或 ?）或日期/时间标记（d、m、y、h、s）。",
  },
  "zh-TW": {
    dateFormats: "日期",
    missingPlaceholderOrDateToken:
      "請至少加入一個數字佔位符（0、# 或 ?）或日期/時間標記（d、m、y、h、s）。",
  },
  "es-ES": {
    dateFormats: "Fechas",
    missingPlaceholderOrDateToken:
      "Añade al menos un marcador numérico (0, # o ?) o un marcador de fecha/hora (d, m, y, h, s).",
  },
  hi: {
    dateFormats: "तिथियाँ",
    missingPlaceholderOrDateToken:
      "कम से कम एक संख्या प्लेसहोल्डर (0, # या ?) या दिनांक/समय टोकन (d, m, y, h, s) जोड़ें।",
  },
  ru: {
    dateFormats: "Даты",
    missingPlaceholderOrDateToken:
      "Добавьте хотя бы один числовой заполнитель (0, # или ?) или маркер даты/времени (d, m, y, h, s).",
  },
  pt: {
    dateFormats: "Datas",
    missingPlaceholderOrDateToken:
      "Adicione pelo menos um marcador numérico (0, # ou ?) ou um marcador de data/hora (d, m, y, h, s).",
  },
  de: {
    dateFormats: "Datumsangaben",
    missingPlaceholderOrDateToken:
      "Fügen Sie mindestens einen Zahlenplatzhalter (0, # oder ?) oder ein Datums-/Zeit-Token (d, m, y, h, s) hinzu.",
  },
  el: {
    dateFormats: "Ημερομηνίες",
    missingPlaceholderOrDateToken:
      "Προσθέστε τουλάχιστον ένα αριθμητικό σύμβολο κράτησης θέσης (0, # ή ?) ή ένα διακριτικό ημερομηνίας/ώρας (d, m, y, h, s).",
  },
  it: {
    dateFormats: "Date",
    missingPlaceholderOrDateToken:
      "Aggiungi almeno un segnaposto numerico (0, # o ?) o un token data/ora (d, m, y, h, s).",
  },
  nl: {
    dateFormats: "Datums",
    missingPlaceholderOrDateToken:
      "Voeg ten minste één numerieke tijdelijke aanduiding (0, # of ?) of datum-/tijdtoken (d, m, y, h, s) toe.",
  },
};

const getLocaleFallback = (locale) => {
  const localeId = String(locale || "en").toLowerCase();
  const languageId = localeId.split("-")[0];
  const exactKey = Object.keys(CUSTOM_NUMBER_FORMAT_FALLBACKS).find(
    (key) => key.toLowerCase() === localeId,
  );
  const languageKey = Object.keys(CUSTOM_NUMBER_FORMAT_FALLBACKS).find(
    (key) => key.toLowerCase().split("-")[0] === languageId,
  );
  return (
    CUSTOM_NUMBER_FORMAT_FALLBACKS[exactKey] ||
    CUSTOM_NUMBER_FORMAT_FALLBACKS[languageKey] ||
    CUSTOM_NUMBER_FORMAT_FALLBACKS.en
  );
};

const getLocalizedValue = (value, fallbackValue, englishDefault) =>
  value && value !== englishDefault ? value : fallbackValue;

const quoteFormatLiteral = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

export const getCurrencyFormatPresets = (currency, locale) => {
  const symbol = quoteFormatLiteral(currency || "$");
  const shortLocale = String(locale || "en").toLowerCase().split("-")[0];
  const symbolBefore = ["en", "zh", "hi", "pt", "nl"].includes(shortLocale);
  const withCurrency = (numberFormat) =>
    symbolBefore ? `${symbol}${numberFormat}` : `${numberFormat} ${symbol}`;

  return [
    withCurrency("#,##0.00"),
    withCurrency("#,##0"),
    `${withCurrency("#,##0.00")};[Red](${withCurrency("#,##0.00")})`,
  ];
};

export const CUSTOM_UNIT_FORMAT_PRESETS = [
  '0.00 "V"',
  '0.00 "A"',
  '0.00 "Ω"',
  '0.00 "Hz"',
  '0.00 "mm"',
];

const stripQuotedText = (format) => format.replace(/"(?:[^"]|"")*"/g, "");

const stripFormatLiterals = (format) =>
  stripQuotedText(format)
    .replace(/\[[^\]]*\]/g, "")
    .replace(/\\./g, "");

const hasDateTimeFormatToken = (format) =>
  /(?:y{2,4}|d{1,4}|m{1,5}|h{1,2}|s{1,2}|am\/pm|a\/p)/i.test(
    stripFormatLiterals(format),
  );

export const isCustomDateNumberFormat = (rawFormat, locale) => {
  const format = normalizeCustomNumberFormat(rawFormat, locale);
  if (!format) return false;
  try {
    if (!isDateFormat(format)) return false;
  } catch {
    return false;
  }
  return hasDateTimeFormatToken(format);
};

export const getCustomNumberFormatLocale = (locale) => {
  const parts = new Intl.NumberFormat(locale || "en", { minimumFractionDigits: 1 })
    .formatToParts(12345.5);
  const decimal = parts.find((part) => part.type === "decimal")?.value || ".";
  let group = parts.find((part) => part.type === "group")?.value || ",";
  if (/^[\u00a0\u202f ]$/.test(group)) group = " ";
  return { decimal, group };
};

const transformFormatSeparators = (rawFormat, transform) => {
  const format = String(rawFormat ?? "");
  let result = "";
  let inQuote = false;
  let bracketDepth = 0;
  let escaped = false;
  for (const char of format) {
    if (escaped) {
      result += char;
      escaped = false;
      continue;
    }
    if (char === "\\") {
      result += char;
      escaped = true;
      continue;
    }
    if (char === '"') {
      inQuote = !inQuote;
      result += char;
      continue;
    }
    if (!inQuote && char === "[") bracketDepth += 1;
    if (!inQuote && char === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    result += !inQuote && bracketDepth === 0 ? transform(char) : char;
  }
  return result;
};

export const localizeCustomNumberFormat = (canonicalFormat, locale) => {
  const { decimal, group } = getCustomNumberFormatLocale(locale);
  if (decimal === "." && group === ",") return String(canonicalFormat ?? "");
  return transformFormatSeparators(canonicalFormat, (char) => {
    if (char === ".") return decimal;
    if (char === ",") return group;
    return char;
  });
};

export const normalizeCustomNumberFormat = (rawFormat, locale) => {
  let format = String(rawFormat ?? "").trim();
  const { decimal, group } = getCustomNumberFormatLocale(locale);

  if (decimal !== "." || group !== ",") {
    format = transformFormatSeparators(format, (char) => {
      if (char === decimal) return "\u0000";
      if (group !== " " && char === group) return ",";
      return char;
    }).split("\u0000").join(".");
  }

  // Une espace de groupement tapée au clavier reste acceptée dans les locales
  // qui utilisent une espace fine ou insécable.
  if (group === " ") {
    format = format.replace(/([0#?])(?:\u00a0|\u202f|\s)+(?=[0#?])/g, "$1,");
  }

  return format;
};

export const validateCustomNumberFormat = (rawFormat, formatValue, texts, locale) => {
  const format = normalizeCustomNumberFormat(rawFormat, locale);
  if (!format) return texts.required;
  if (format.length > 160) return texts.tooLong;

  let inQuote = false;
  let bracketDepth = 0;
  let sectionCount = 1;
  for (let index = 0; index < format.length; index += 1) {
    const char = format[index];
    if (char === '"') inQuote = !inQuote;
    if (inQuote) continue;
    if (char === "[") bracketDepth += 1;
    if (char === "]") bracketDepth -= 1;
    if (char === ";" && bracketDepth === 0) sectionCount += 1;
    if (bracketDepth < 0) return texts.invalid;
  }
  if (sectionCount > 4) return texts.tooManySections;
  if (inQuote || bracketDepth !== 0) return texts.invalid;

  const unquoted = stripFormatLiterals(format);
  if (!/[0#?]/.test(unquoted) && !isCustomDateNumberFormat(format, locale)) {
    return texts.missingPlaceholderOrDateToken;
  }

  try {
    const previewValue = isCustomDateNumberFormat(format, locale)
      ? CUSTOM_DATE_FORMAT_PREVIEW_SERIAL
      : 1234.56;
    formatValue(format, previewValue);
    if (!isCustomDateNumberFormat(format, locale)) {
      formatValue(format, -1234.56);
    }
  } catch {
    return texts.invalid;
  }
  return "";
};

export const getCustomNumberFormatTexts = (custom = {}, locale) => {
  const fallback = getLocaleFallback(locale);

  return {
    menuItem: custom.menuItem ?? "Custom number format…",
    title: custom.title ?? "Custom number formats",
    formatLabel: custom.formatLabel ?? "Format code",
    inputPlaceholder: custom.inputPlaceholder ?? "For example: #,##0.00",
    apply: custom.apply ?? "Apply",
    cancel: custom.cancel ?? "Cancel",
    close: custom.close ?? "Close",
    preview: custom.preview ?? "Preview",
    presets: custom.presets ?? "Suggested formats",
    standardFormats: custom.standardFormats ?? "Numbers",
    dateFormats: getLocalizedValue(custom.dateFormats, fallback.dateFormats, "Dates"),
    currencyFormats: custom.currencyFormats ?? "Currency",
    unitFormats: custom.unitFormats ?? "Units",
    selection: custom.selection ?? "Selection",
    help: custom.help ?? "Format guide",
    helpTitle: custom.helpTitle ?? "How format codes work",
    helpZero: custom.helpZero ?? "0 always displays a digit, including a leading or trailing zero.",
    helpHash: custom.helpHash ?? "# displays a digit only when it is significant.",
    helpDecimal: custom.helpDecimal ?? "{separator} marks the decimal position in the format code.",
    helpGrouping: custom.helpGrouping ?? "{separator} adds digit grouping.",
    groupingSpace: custom.groupingSpace ?? "A space adds digit grouping.",
    helpSections: custom.helpSections ?? "; separates positive, negative, zero and text sections.",
    normalizedHint: custom.normalizedHint ?? "The format will be stored as {format}.",
    errors: {
      required: custom.errors?.required ?? "Enter a format code.",
      tooLong: custom.errors?.tooLong ?? "The format code is too long.",
      tooManySections: custom.errors?.tooManySections ?? "A format can contain at most four sections.",
      missingPlaceholder: custom.errors?.missingPlaceholder ?? "Add at least one numeric placeholder: 0, # or ?.",
      missingPlaceholderOrDateToken:
        getLocalizedValue(
          custom.errors?.missingPlaceholderOrDateToken,
          fallback.missingPlaceholderOrDateToken,
          CUSTOM_NUMBER_FORMAT_FALLBACKS.en.missingPlaceholderOrDateToken,
        ),
      invalid: custom.errors?.invalid ?? "This format code is not valid.",
    },
  };
};
