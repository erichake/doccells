/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { parseRangeText } from "../conditionalFormatting/conditionalFormattingUtils.js";

const DEFAULT_COLORS = {
  headerColor: "#cfe8f8",
  firstRowColor: "#d9edf7",
  secondRowColor: "#ffffff",
};

export const AlternatingColorsDialog = ({
  open,
  initialRangeText,
  sheetName,
  texts,
  onApply,
  onClear,
  onClose,
}) => {
  const [rangeText, setRangeText] = useState(initialRangeText || "A1");
  const [hasHeader, setHasHeader] = useState(true);
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setRangeText(initialRangeText || "A1");
    setHasHeader(true);
    setColors(DEFAULT_COLORS);
    setError("");
  }, [initialRangeText, open]);

  const parsedRange = useMemo(() => parseRangeText(rangeText), [rangeText]);

  const updateColor = (key, value) => {
    setColors((current) => ({ ...current, [key]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!parsedRange) {
      setError(texts.errors.range);
      return;
    }
    onApply({
      range: parsedRange,
      rangeText,
      hasHeader,
      ...colors,
    });
  };

  const clear = () => {
    if (!parsedRange) {
      setError(texts.errors.range);
      return;
    }
    onClear(parsedRange);
  };

  if (!open) return null;

  return (
    <div className="dc-ac-backdrop" role="presentation" onMouseDown={onClose}>
      <form
        className="dc-ac-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={texts.title}
        onMouseDown={(event) => event.stopPropagation()}
        onSubmit={submit}
      >
        <header className="dc-ac-header">
          <div>
            <h2>{texts.title}</h2>
            <p>{sheetName || texts.activeSheet}</p>
          </div>
          <button
            className="dc-ac-icon-button"
            type="button"
            aria-label={texts.close}
            title={texts.close}
            onClick={onClose}
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" focusable="false">
              <path d="M5.5 5.5 14.5 14.5M14.5 5.5 5.5 14.5" />
            </svg>
          </button>
        </header>

        <div className="dc-ac-body">
          <label className="dc-ac-field">
            <span>{texts.range}</span>
            <input
              value={rangeText}
              onChange={(event) => {
                setRangeText(event.target.value);
                setError("");
              }}
              placeholder="A1:E20"
            />
          </label>

          <label className="dc-ac-check">
            <input
              type="checkbox"
              checked={hasHeader}
              onChange={(event) => setHasHeader(event.target.checked)}
            />
            <span>{texts.headerRow}</span>
          </label>

          <div className="dc-ac-colors">
            <label className="dc-ac-color-field">
              <span>{texts.headerColor}</span>
              <input
                type="color"
                value={colors.headerColor}
                onChange={(event) => updateColor("headerColor", event.target.value)}
                disabled={!hasHeader}
              />
            </label>
            <label className="dc-ac-color-field">
              <span>{texts.firstRowColor}</span>
              <input
                type="color"
                value={colors.firstRowColor}
                onChange={(event) => updateColor("firstRowColor", event.target.value)}
              />
            </label>
            <label className="dc-ac-color-field">
              <span>{texts.secondRowColor}</span>
              <input
                type="color"
                value={colors.secondRowColor}
                onChange={(event) => updateColor("secondRowColor", event.target.value)}
              />
            </label>
          </div>

          <div className="dc-ac-preview" aria-hidden="true">
            {hasHeader ? (
              <div
                className="dc-ac-preview-row is-header"
                style={{ backgroundColor: colors.headerColor }}
              >
                {texts.previewHeader}
              </div>
            ) : null}
            <div
              className="dc-ac-preview-row"
              style={{ backgroundColor: colors.firstRowColor }}
            >
              {texts.previewRow}
            </div>
            <div
              className="dc-ac-preview-row"
              style={{ backgroundColor: colors.secondRowColor }}
            >
              {texts.previewRow}
            </div>
            <div
              className="dc-ac-preview-row"
              style={{ backgroundColor: colors.firstRowColor }}
            >
              {texts.previewRow}
            </div>
          </div>

          {error ? <div className="dc-ac-error">{error}</div> : null}
        </div>

        <footer className="dc-ac-footer">
          <button type="button" onClick={clear}>
            {texts.clear}
          </button>
          <div className="dc-ac-footer-actions">
            <button type="button" onClick={onClose}>
              {texts.cancel}
            </button>
            <button className="dc-ac-primary" type="submit">
              {texts.apply}
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
};
