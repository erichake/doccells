/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  isValidDropdownRangeReference,
  normalizeDropdownRangeReference,
  parseDropdownOptions,
} from "./dataValidationUtils.js";

export const DropdownDialog = ({
  open,
  selectionLabel,
  texts,
  onClose,
  onInsert,
}) => {
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const [sourceType, setSourceType] = useState("list");
  const [rangeReference, setRangeReference] = useState("");
  const [error, setError] = useState("");
  const firstInputRef = useRef(null);
  const dialogRef = useRef(null);
  const normalizedOptions = useMemo(
    () => parseDropdownOptions(options),
    [options],
  );

  useEffect(() => {
    if (!open) return;
    setOptions([texts.defaultOption1, texts.defaultOption2]);
    setSourceType("list");
    setRangeReference("");
    setError("");
    requestAnimationFrame(() => {
      firstInputRef.current?.focus();
      firstInputRef.current?.select();
    });
  }, [open, texts.defaultOption1, texts.defaultOption2]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        submit();
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll(
          "button:not([disabled]), input:not([disabled])",
        ) || [],
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  if (!open) return null;

  const updateOption = (index, value) => {
    setOptions((current) =>
      current.map((option, optionIndex) =>
        optionIndex === index ? value : option,
      ),
    );
    setError("");
  };

  const submit = () => {
    if (sourceType === "range") {
      if (!isValidDropdownRangeReference(rangeReference)) {
        setError(texts.errors.range);
        return;
      }
      onInsert({
        sourceType: "range",
        reference: normalizeDropdownRangeReference(rangeReference),
      });
      return;
    }
    if (normalizedOptions.length === 0) {
      setError(texts.errors.empty);
      firstInputRef.current?.focus();
      return;
    }
    if (normalizedOptions.some((option) => option.includes(","))) {
      setError(texts.errors.comma);
      return;
    }
    onInsert({ sourceType: "list", options: normalizedOptions });
  };

  return (
    <div
      className="dc-dv-backdrop"
      onMouseDown={onClose}
    >
      <section
        aria-labelledby="dc-dv-title"
        aria-modal="true"
        className="dc-dv-dialog"
        onMouseDown={(event) => event.stopPropagation()}
        ref={dialogRef}
        role="dialog"
      >
        <header className="dc-dv-header">
          <div>
            <h2 id="dc-dv-title">{texts.title}</h2>
            <p>{texts.selection}: <strong>{selectionLabel}</strong></p>
          </div>
          <button
            aria-label={texts.close}
            className="dc-dv-close"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </header>

        <div className="dc-dv-body">
          <div className="dc-dv-source-tabs" role="tablist">
            <button
              aria-selected={sourceType === "list"}
              className={sourceType === "list" ? "is-active" : ""}
              onClick={() => {
                setSourceType("list");
                setError("");
              }}
              role="tab"
              type="button"
            >
              {texts.valuesMode}
            </button>
            <button
              aria-selected={sourceType === "range"}
              className={sourceType === "range" ? "is-active" : ""}
              onClick={() => {
                setSourceType("range");
                setError("");
              }}
              role="tab"
              type="button"
            >
              {texts.rangeMode}
            </button>
          </div>

          {sourceType === "list" ? (
            <>
              <label className="dc-dv-label">{texts.options}</label>
              <div className="dc-dv-options">
                {options.map((option, index) => (
                  <div className="dc-dv-option" key={index}>
                    <span aria-hidden="true" />
                    <input
                      aria-label={`${texts.option} ${index + 1}`}
                      onChange={(event) => updateOption(index, event.target.value)}
                      ref={index === 0 ? firstInputRef : null}
                      value={option}
                    />
                    <button
                      aria-label={`${texts.remove} ${index + 1}`}
                      disabled={options.length === 1}
                      onClick={() =>
                        setOptions((current) =>
                          current.filter((_, optionIndex) => optionIndex !== index),
                        )
                      }
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <button
                className="dc-dv-add"
                onClick={() => setOptions((current) => [...current, ""])}
                type="button"
              >
                + {texts.addOption}
              </button>
            </>
          ) : (
            <label className="dc-dv-range">
              <span className="dc-dv-label">{texts.rangeLabel}</span>
              <input
                autoFocus
                onChange={(event) => {
                  setRangeReference(event.target.value);
                  setError("");
                }}
                placeholder={texts.rangePlaceholder}
                value={rangeReference}
              />
            </label>
          )}
          {error ? <p className="dc-dv-error" role="alert">{error}</p> : null}
        </div>

        <footer className="dc-dv-footer">
          <button className="dc-dv-cancel" onClick={onClose} type="button">
            {texts.cancel}
          </button>
          <button className="dc-dv-insert" onClick={submit} type="button">
            {texts.insert}
          </button>
        </footer>
      </section>
    </div>
  );
};
