const CELL_RANGE_RE = /^(?:(?:'((?:[^']|'')+)'|([^'!]+))!)?\$?([A-Z]+)\$?(\d+)(?::\$?([A-Z]+)\$?(\d+))?$/i;

const DEFAULT_OPTIONS = Object.freeze({ charttype: "line" });

const columnIndex = (letters) =>
  String(letters)
    .toUpperCase()
    .split("")
    .reduce((value, character) => value * 26 + character.charCodeAt(0) - 64, 0) - 1;

const splitOutsideQuotes = (text, separators) => {
  const parts = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"') {
      if (quoted && text[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (!quoted && separators.includes(character)) {
      parts.push(current.trim());
      current = "";
    } else {
      current += character;
    }
  }
  parts.push(current.trim());
  return parts;
};

const splitFormulaArguments = (text) => {
  let quoted = false;
  let braceDepth = 0;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"') {
      if (quoted && text[index + 1] === '"') index += 1;
      else quoted = !quoted;
    } else if (!quoted) {
      if (character === "{") braceDepth += 1;
      else if (character === "}") braceDepth -= 1;
      else if (braceDepth === 0 && (character === "," || character === ";")) {
        return [text.slice(0, index).trim(), text.slice(index + 1).trim()];
      }
    }
  }
  return [text.trim(), ""];
};

const parseScalar = (value) => {
  const text = String(value ?? "").trim();
  if (/^true$/i.test(text)) return true;
  if (/^false$/i.test(text)) return false;
  const numeric = Number(text.replace(",", "."));
  return text !== "" && Number.isFinite(numeric) ? numeric : text;
};

export const parseSparklineFormula = (formula) => {
  const text = String(formula || "").trim();
  const call = text.match(/^=\s*SPARKLINE\s*\((.*)\)\s*$/i);
  if (!call) return null;

  const [range, optionText] = splitFormulaArguments(call[1]);
  if (!range) return null;

  const options = { ...DEFAULT_OPTIONS };
  if (optionText.startsWith("{") && optionText.endsWith("}")) {
    const body = optionText.slice(1, -1);
    // French canonical formulas retain `\` between columns; their row
    // separator may be `;` (display) or `,` (internal FortuneSheet form).
    const rows = splitOutsideQuotes(body, body.includes("\\") ? [";", ","] : [";"]);
    rows.forEach((row) => {
      // In decimal-comma locales, a backslash separates array columns.
      const pair = splitOutsideQuotes(row, ["\\", ","]);
      if (pair.length >= 2 && pair[0]) {
        options[String(pair[0]).toLowerCase()] = parseScalar(pair[1]);
      }
    });
  }

  options.charttype = String(options.charttype || "line").toLowerCase();
  return { range, options };
};

export const resolveSparklineValues = (definition, sheets, activeSheetId) => {
  if (!definition) return [];
  const match = definition.range.match(CELL_RANGE_RE);
  if (!match) return [];
  const requestedName = (match[1] || match[2] || "").replace(/''/g, "'");
  const sheet = requestedName
    ? sheets.find((item) => String(item.name).toLowerCase() === requestedName.toLowerCase())
    : sheets.find((item) => String(item.id) === String(activeSheetId));
  if (!sheet) return [];

  const startColumn = columnIndex(match[3]);
  const startRow = Number(match[4]) - 1;
  const endColumn = columnIndex(match[5] || match[3]);
  const endRow = Number(match[6] || match[4]) - 1;
  const data = sheet.data || [];
  const values = [];
  const emptyMode = String(definition.options?.empty || "ignore").toLowerCase();
  const nanMode = String(definition.options?.nan || "ignore").toLowerCase();
  for (let row = startRow; row <= endRow; row += 1) {
    for (let column = startColumn; column <= endColumn; column += 1) {
      const cell = data[row]?.[column];
      const rawValue = cell?.v ?? cell?.m;
      const isBlank = rawValue == null || (typeof rawValue === "string" && rawValue.trim() === "");
      if (isBlank) {
        if (emptyMode === "zero") values.push(0);
        continue;
      }
      const value = Number(rawValue);
      if (Number.isFinite(value)) values.push(value);
      else if (nanMode === "convert") values.push(0);
    }
  }
  return values;
};

const color = (value, fallback) =>
  typeof value === "string" && value.trim() ? value.trim() : fallback;

const numericOption = (value, fallback) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

export const drawSparkline = (ctx, cellInfo, values, options = {}) => {
  if (!ctx || values.length === 0) return;
  const left = cellInfo.startX + 4;
  const top = cellInfo.startY + 3;
  const width = Math.max(1, cellInfo.endX - cellInfo.startX - 8);
  const height = Math.max(1, cellInfo.endY - cellInfo.startY - 6);
  const type = String(options.charttype || "line").toLowerCase();
  const entries = values.map((value, index) => ({ value, index }));
  const displayedEntries = options.rtl === true ? entries.reverse() : entries;

  ctx.save();
  ctx.beginPath();
  ctx.rect(left, top, width, height);
  ctx.clip();

  if (type === "bar") {
    const positive = displayedEntries.map(({ value, index }) => ({
      value: Math.max(0, value),
      index,
    }));
    const total = positive.reduce((sum, entry) => sum + entry.value, 0);
    const requestedMaximum = numericOption(options.max, total || 1);
    const maximum = requestedMaximum > 0 ? requestedMaximum : total || 1;
    let x = left;
    positive.forEach(({ value, index }) => {
      const remainingWidth = Math.max(0, width - (x - left));
      const barWidth = Math.max(0, Math.min(remainingWidth, (value / maximum) * width));
      ctx.fillStyle = color(options[`color${index + 1}`], index % 2 ? "#db4437" : "#4285f4");
      ctx.fillRect(x, top, barWidth, height);
      x += barWidth;
    });
  } else if (type === "column" || type === "winloss") {
    const lowestValue = Math.min(...values);
    const highestValue = Math.max(...values);
    const min = type === "winloss" ? -1 : Math.min(0, numericOption(options.ymin, lowestValue));
    const max = type === "winloss" ? 1 : Math.max(0, numericOption(options.ymax, highestValue));
    const span = max - min || 1;
    const zeroY = top + (max / span) * height;
    const gap = 1;
    const columnWidth = Math.max(1, width / values.length - gap);
    displayedEntries.forEach(({ value: rawValue, index }, visualIndex) => {
      const value = type === "winloss" ? Math.sign(rawValue) : rawValue;
      const valueY = top + ((max - value) / span) * height;
      let fill = color(options.color, "#4285f4");
      if (rawValue < 0) fill = color(options.negcolor, fill);
      if (rawValue === highestValue) fill = color(options.highcolor, fill);
      if (rawValue === lowestValue) fill = color(options.lowcolor, fill);
      if (index === 0) fill = color(options.firstcolor, fill);
      if (index === values.length - 1) fill = color(options.lastcolor, fill);
      ctx.fillStyle = fill;
      ctx.fillRect(left + visualIndex * (width / values.length), Math.min(zeroY, valueY), columnWidth, Math.max(1, Math.abs(valueY - zeroY)));
    });
    if (options.axis === true) {
      ctx.strokeStyle = color(options.axiscolor, "#777");
      ctx.beginPath();
      ctx.moveTo(left, zeroY);
      ctx.lineTo(left + width, zeroY);
      ctx.stroke();
    }
  } else {
    const min = numericOption(options.ymin, Math.min(...values));
    const max = numericOption(options.ymax, Math.max(...values));
    const span = max - min || 1;
    const defaultXMax = Math.max(1, values.length - 1);
    const requestedXMin = numericOption(options.xmin, 0);
    const requestedXMax = numericOption(options.xmax, defaultXMax);
    const minX = Math.min(requestedXMin, requestedXMax);
    const maxX = Math.max(requestedXMin, requestedXMax);
    const xSpan = maxX - minX || 1;
    ctx.strokeStyle = color(options.color, "#4285f4");
    ctx.lineWidth = Math.max(1, Number(options.linewidth) || 1.5);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    displayedEntries.forEach(({ value }, index) => {
      const x = values.length === 1 && options.xmin == null && options.xmax == null
        ? left + width / 2
        : left + ((index - minX) / xSpan) * width;
      const y = top + ((max - value) / span) * height;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
  ctx.restore();
};
