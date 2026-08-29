/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { update as formatNumber } from "@fortune-sheet/core";
import {
  CUSTOM_DATE_FORMAT_PRESETS,
  CUSTOM_DATE_FORMAT_PREVIEW_SERIAL,
  CUSTOM_NUMBER_FORMAT_PRESETS,
  CUSTOM_UNIT_FORMAT_PRESETS,
  getCurrencyFormatPresets,
  getCustomNumberFormatLocale,
  getCustomNumberFormatTexts,
  isCustomDateNumberFormat,
  localizeCustomNumberFormat,
  normalizeCustomNumberFormat,
  validateCustomNumberFormat,
} from "./customNumberFormatUtils.js";

export const CustomNumberFormatDialog = ({
  open,
  initialFormat,
  selectionLabel,
  locale,
  currencySymbol,
  onApply,
  onClose,
  texts,
}) => {
  const copy = useMemo(
    () => getCustomNumberFormatTexts(texts, locale),
    [locale, texts],
  );
  const [format, setFormat] = useState("#,##0.00");
  const [error, setError] = useState("");
  const [helpOpen, setHelpOpen] = useState(false);
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const normalizedFormat = normalizeCustomNumberFormat(format, locale);
  const localeSeparators = useMemo(() => getCustomNumberFormatLocale(locale), [locale]);
  const presetGroups = useMemo(
    () => [
      { label: copy.standardFormats, formats: CUSTOM_NUMBER_FORMAT_PRESETS },
      { label: copy.dateFormats, formats: CUSTOM_DATE_FORMAT_PRESETS },
      { label: copy.currencyFormats, formats: getCurrencyFormatPresets(currencySymbol, locale) },
      { label: copy.unitFormats, formats: CUSTOM_UNIT_FORMAT_PRESETS },
    ],
    [
      copy.currencyFormats,
      copy.dateFormats,
      copy.standardFormats,
      copy.unitFormats,
      currencySymbol,
      locale,
    ],
  );

  const preview = useCallback((code) => {
    try {
      const normalized = normalizeCustomNumberFormat(code, locale);
      const value = isCustomDateNumberFormat(normalized, locale)
        ? CUSTOM_DATE_FORMAT_PREVIEW_SERIAL
        : 1234.56;
      return String(formatNumber(normalized, value));
    } catch {
      return "—";
    }
  }, [locale]);

  useEffect(() => {
    if (!open) return;
    setFormat(localizeCustomNumberFormat(initialFormat || "#,##0.00", locale));
    setError("");
    setHelpOpen(false);
    requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  }, [initialFormat, locale, open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), [tabindex="0"]',
        ) || [],
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  const currentError = useMemo(
    () => (error ? validateCustomNumberFormat(format, formatNumber, copy.errors, locale) : ""),
    [copy.errors, error, format, locale],
  );

  if (!open) return null;

  const applyFormat = () => {
    const validationError = validateCustomNumberFormat(format, formatNumber, copy.errors, locale);
    if (validationError) {
      setError(validationError);
      inputRef.current?.focus();
      return;
    }
    onApply(normalizedFormat);
  };

  const choosePreset = (preset) => {
    setFormat(localizeCustomNumberFormat(preset, locale));
    setError("");
    inputRef.current?.focus();
  };

  const normalizedHint =
    normalizedFormat && normalizedFormat !== format.trim()
      ? copy.normalizedHint.replace("{format}", normalizedFormat)
      : "";

  return (
    <div
      className="dc-nf-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className="dc-nf-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dc-nf-title"
      >
        <header className="dc-nf-header">
          <div>
            <h2 id="dc-nf-title">{copy.title}</h2>
          </div>
          <button className="dc-nf-close" type="button" onClick={onClose} aria-label={copy.close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </header>

        <div className="dc-nf-body">
          <div className="dc-nf-editor">
            <label htmlFor="dc-nf-input">{copy.formatLabel}</label>
            <div className={`dc-nf-input-row${currentError ? " has-error" : ""}`}>
              <input
                ref={inputRef}
                id="dc-nf-input"
                value={format}
                spellCheck="false"
                autoComplete="off"
                placeholder={localizeCustomNumberFormat("#,##0.00", locale)}
                aria-invalid={Boolean(currentError)}
                aria-describedby={currentError ? "dc-nf-error" : undefined}
                onChange={(event) => {
                  setFormat(event.target.value);
                  if (error) setError("validate");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    applyFormat();
                  }
                }}
              />
              <button type="button" className="dc-nf-apply" onClick={applyFormat}>
                {copy.apply}
              </button>
            </div>
            {currentError ? (
              <p className="dc-nf-error" id="dc-nf-error" role="alert">{currentError}</p>
            ) : normalizedHint ? (
              <p className="dc-nf-normalized">{normalizedHint}</p>
            ) : null}
          </div>

          <div className="dc-nf-summary">
            <div>
              <span>{copy.preview}</span>
              <strong>{preview(format)}</strong>
            </div>
            <div>
              <span>{copy.selection}</span>
              <strong>{selectionLabel || "A1"}</strong>
            </div>
            <button
              type="button"
              className="dc-nf-help-toggle"
              aria-expanded={helpOpen}
              onClick={() => setHelpOpen((value) => !value)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M9.8 9a2.3 2.3 0 1 1 3.3 2.1c-.8.4-1.1.9-1.1 1.7M12 16.5h.01" />
              </svg>
              {copy.help}
            </button>
          </div>

          {helpOpen && (
            <aside className="dc-nf-help">
              <strong>{copy.helpTitle}</strong>
              <dl>
                <div><dt>0</dt><dd>{copy.helpZero}</dd></div>
                <div><dt>#</dt><dd>{copy.helpHash}</dd></div>
                <div><dt>{localeSeparators.decimal}</dt><dd>{copy.helpDecimal.replace("{separator}", `« ${localeSeparators.decimal} »`)}</dd></div>
                <div><dt>{localeSeparators.group === " " ? "␠" : localeSeparators.group}</dt><dd>{copy.helpGrouping.replace("{separator}", localeSeparators.group === " " ? copy.groupingSpace : `« ${localeSeparators.group} »`)}</dd></div>
                <div><dt>;</dt><dd>{copy.helpSections}</dd></div>
              </dl>
            </aside>
          )}

          <div className="dc-nf-presets-heading">{copy.presets}</div>
          <div className="dc-nf-presets" role="listbox" aria-label={copy.presets}>
            {presetGroups.map((group) => (
              <div className="dc-nf-preset-group" role="group" aria-label={group.label} key={group.label}>
                <div className="dc-nf-preset-group-label">{group.label}</div>
                {group.formats.map((preset) => (
                  <button
                    type="button"
                    role="option"
                    aria-selected={normalizedFormat === preset}
                    className={normalizedFormat === preset ? "is-selected" : ""}
                    key={preset}
                    onClick={() => choosePreset(preset)}
                  >
                    <code>{localizeCustomNumberFormat(preset, locale)}</code>
                    <span>{preview(localizeCustomNumberFormat(preset, locale))}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <footer className="dc-nf-footer">
          <button type="button" className="dc-nf-cancel" onClick={onClose}>{copy.cancel}</button>
          <button type="button" className="dc-nf-apply dc-nf-apply-footer" onClick={applyFormat}>{copy.apply}</button>
        </footer>
      </section>
    </div>
  );
};
