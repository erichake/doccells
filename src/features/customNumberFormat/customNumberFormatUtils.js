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

const stripQuotedText = (format) => format.replace(/"(?:[^"]|"")*"/g, "");

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
  const unquoted = stripQuotedText(format);
  if (!/[0#?]/.test(unquoted)) return texts.missingPlaceholder;

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

  try {
    formatValue(format, 1234.56);
    formatValue(format, -1234.56);
  } catch {
    return texts.invalid;
  }
  return "";
};

export const getCustomNumberFormatTexts = (custom = {}) => ({
  menuItem: custom.menuItem ?? "Custom number format…",
  title: custom.title ?? "Custom number formats",
  formatLabel: custom.formatLabel ?? "Format code",
  inputPlaceholder: custom.inputPlaceholder ?? "For example: #,##0.00",
  apply: custom.apply ?? "Apply",
  cancel: custom.cancel ?? "Cancel",
  close: custom.close ?? "Close",
  preview: custom.preview ?? "Preview",
  presets: custom.presets ?? "Suggested formats",
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
    invalid: custom.errors?.invalid ?? "This format code is not valid.",
  },
});
