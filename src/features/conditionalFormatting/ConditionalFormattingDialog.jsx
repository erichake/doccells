/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONDITIONAL_COMPARE_TYPES,
  CONDITIONAL_RULE_TYPES,
  DEFAULT_CONDITIONAL_RULE,
  getConditionalFormattingTexts,
} from "./conditionalFormattingConstants.js";
import {
  columnNameToIndex,
  describeConditionalRule,
  getRulePreviewStyle,
  parseCellReference,
  parseRangeText,
  rangeToText,
} from "./conditionalFormattingUtils.js";

export const ConditionalFormattingDialog = ({
  open,
  sheetName,
  rules,
  initialRangeText,
  onClose,
  onSave,
  onDelete,
  texts,
}) => {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(DEFAULT_CONDITIONAL_RULE);
  const [error, setError] = useState("");
  const [dialogOffset, setDialogOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(null);
  const cf = getConditionalFormattingTexts(texts);

  const resetForm = useCallback(() => {
    const range = parseRangeText(initialRangeText) || DEFAULT_CONDITIONAL_RULE.range;
    setEditingId(null);
    setForm({
      ...DEFAULT_CONDITIONAL_RULE,
      id: `dc_cf_${Date.now()}`,
      rangeText: rangeToText(range),
      range,
    });
    setError("");
  }, [initialRangeText]);

  useEffect(() => {
    if (open) resetForm();
  }, [open, resetForm]);

  useEffect(() => {
    if (!open) return;
    setDialogOffset({ x: 0, y: 0 });
    setIsDragging(false);
    dragStartRef.current = null;
  }, [open]);

  const startDialogDrag = useCallback(
    (event) => {
      if (event.button !== 0 || event.target.closest("button")) return;
      if (window.matchMedia("(max-width: 760px)").matches) return;
      event.preventDefault();
      dragStartRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        offsetX: dialogOffset.x,
        offsetY: dialogOffset.y,
      };
      setIsDragging(true);
    },
    [dialogOffset],
  );

  useEffect(() => {
    if (!isDragging) return undefined;

    const moveDialog = (event) => {
      const dragStart = dragStartRef.current;
      if (!dragStart) return;
      setDialogOffset({
        x: dragStart.offsetX + event.clientX - dragStart.startX,
        y: dragStart.offsetY + event.clientY - dragStart.startY,
      });
    };

    const stopDialogDrag = () => {
      setIsDragging(false);
      dragStartRef.current = null;
    };

    window.addEventListener("mousemove", moveDialog);
    window.addEventListener("mouseup", stopDialogDrag);
    return () => {
      window.removeEventListener("mousemove", moveDialog);
      window.removeEventListener("mouseup", stopDialogDrag);
    };
  }, [isDragging]);

  const updateForm = (field, value) => {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === "rangeText") {
        const parsed = parseRangeText(value);
        if (parsed) next.range = parsed;
      }
      if (field === "condition" && value === "between") {
        next.compareType = "value";
      }
      if (field === "condition" && value === "textContains") {
        next.compareType = "value";
      }
      return next;
    });
  };

  const startEdit = (rule) => {
    setEditingId(rule.id);
    setForm({
      ...DEFAULT_CONDITIONAL_RULE,
      ...rule,
      rangeText: rule.rangeText || rangeToText(rule.range),
    });
    setError("");
  };

  const validateForm = () => {
    const range = parseRangeText(form.rangeText);
    if (!range) return cf.errors.range;
    if (form.condition === "between") {
      if (form.value === "" || form.value2 === "") {
        return cf.errors.between;
      }
    } else if (form.condition === "textContains") {
      if (!form.value) return cf.errors.text;
    } else if (form.compareType === "cell") {
      if (!parseCellReference(form.reference)) {
        return cf.errors.compareCell;
      }
    } else if (form.compareType === "sameRowColumn") {
      if (columnNameToIndex(form.reference) == null) {
        return cf.errors.compareColumn;
      }
    } else if (form.value === "") {
      return cf.errors.compareValue;
    }
    if (
      !form.textColor &&
      !form.backgroundColor &&
      !form.bold &&
      !form.italic &&
      !form.underline
    ) {
      return cf.errors.style;
    }
    return "";
  };

  const submitForm = (event) => {
    event.preventDefault();
    const validation = validateForm();
    if (validation) {
      setError(validation);
      return;
    }
    const parsedRange = parseRangeText(form.rangeText);
    const normalized = {
      ...form,
      id: editingId || form.id || `dc_cf_${Date.now()}`,
      range: parsedRange,
      rangeText: rangeToText(parsedRange),
      reference:
        form.compareType === "sameRowColumn"
          ? String(form.reference || "").replace(/[^A-Za-z]/g, "").toUpperCase()
          : form.reference,
    };
    onSave(normalized);
    resetForm();
  };

  if (!open) return null;

  const hasRules = rules.length > 0;
  const compareOptions = CONDITIONAL_COMPARE_TYPES.filter(
    (option) =>
      form.condition !== "between" &&
      (form.condition !== "textContains" || option.value === "value"),
  );

  return (
    <div className="dc-cf-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`dc-cf-dialog${isDragging ? " is-dragging" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={cf.title}
        style={{
          "--dc-cf-offset-x": `${dialogOffset.x}px`,
          "--dc-cf-offset-y": `${dialogOffset.y}px`,
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="dc-cf-header" onMouseDown={startDialogDrag}>
          <div>
            <h2>{cf.title}</h2>
            <p>{sheetName || cf.activeSheet}</p>
          </div>
          <button
            className="dc-cf-icon-button"
            type="button"
            aria-label={cf.close}
            title={cf.close}
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              focusable="false"
            >
              <path d="M5.5 5.5 14.5 14.5M14.5 5.5 5.5 14.5" />
            </svg>
          </button>
        </header>

        <div className="dc-cf-body">
          <aside className="dc-cf-rules">
            <div className="dc-cf-section-title">{cf.appliedRules}</div>
            {hasRules ? (
              <div className="dc-cf-rule-list">
                {rules.map((rule) => (
                  <article
                    className={`dc-cf-rule-card${
                      editingId === rule.id ? " is-active" : ""
                    }`}
                    key={rule.id}
                  >
                    <div className="dc-cf-rule-main">
                      <strong>{rule.rangeText || rangeToText(rule.range)}</strong>
                      <span>{describeConditionalRule(rule, cf)}</span>
                    </div>
                    <div className="dc-cf-rule-sample" style={getRulePreviewStyle(rule)}>
                      {cf.sample}
                    </div>
                    <div className="dc-cf-rule-actions">
                      <button type="button" onClick={() => startEdit(rule)}>
                        {cf.edit}
                      </button>
                      <button type="button" onClick={() => onDelete(rule.id)}>
                        {cf.delete}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="dc-cf-empty">
                {cf.noRules}
              </div>
            )}
          </aside>

          <form className="dc-cf-form" onSubmit={submitForm}>
            <div className="dc-cf-section-title">
              {editingId ? cf.editRule : cf.newRule}
            </div>

            <label className="dc-cf-field">
              <span>{cf.applyTo}</span>
              <input
                value={form.rangeText}
                onChange={(event) => updateForm("rangeText", event.target.value)}
                placeholder="A2:A100"
              />
            </label>

            <div className="dc-cf-field">
              <span>{cf.condition}</span>
              <div className="dc-cf-segmented">
                {CONDITIONAL_RULE_TYPES.map((type) => (
                  <button
                    className={form.condition === type.value ? "is-active" : ""}
                    key={type.value}
                    type="button"
                    title={cf.conditions[type.value]}
                    aria-label={cf.conditions[type.value]}
                    onClick={() => updateForm("condition", type.value)}
                  >
                    {type.symbol}
                  </button>
                ))}
              </div>
            </div>

            <label className="dc-cf-field">
              <span>{cf.compareTo}</span>
              <select
                value={form.compareType}
                onChange={(event) => updateForm("compareType", event.target.value)}
                disabled={form.condition === "between" || form.condition === "textContains"}
              >
                {compareOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {cf.compareTypes[option.value]}
                  </option>
                ))}
              </select>
            </label>

            {form.condition === "between" ? (
              <div className="dc-cf-pair">
                <label className="dc-cf-field">
                  <span>{cf.minValue}</span>
                  <input
                    value={form.value}
                    onChange={(event) => updateForm("value", event.target.value)}
                    placeholder="0"
                  />
                </label>
                <label className="dc-cf-field">
                  <span>{cf.maxValue}</span>
                  <input
                    value={form.value2}
                    onChange={(event) => updateForm("value2", event.target.value)}
                    placeholder="10"
                  />
                </label>
              </div>
            ) : form.compareType === "cell" ? (
              <label className="dc-cf-field">
                <span>{cf.cell}</span>
                <input
                  value={form.reference}
                  onChange={(event) => updateForm("reference", event.target.value)}
                  placeholder="B1"
                />
              </label>
            ) : form.compareType === "sameRowColumn" ? (
              <label className="dc-cf-field">
                <span>{cf.sameRowColumn}</span>
                <input
                  value={form.reference}
                  onChange={(event) => updateForm("reference", event.target.value)}
                  placeholder="B"
                />
              </label>
            ) : (
              <label className="dc-cf-field">
                <span>{form.condition === "textContains" ? cf.text : cf.value}</span>
                <input
                  value={form.value}
                  onChange={(event) => updateForm("value", event.target.value)}
                  placeholder={form.condition === "textContains" ? cf.textPlaceholder : "10"}
                />
              </label>
            )}

            <div className="dc-cf-colors">
              <label className="dc-cf-color-field">
                <span>{cf.textColor}</span>
                <input
                  type="color"
                  value={form.textColor || "#000000"}
                  onChange={(event) => updateForm("textColor", event.target.value)}
                />
                <button
                  type="button"
                  onClick={() => updateForm("textColor", "")}
                >
                  {cf.none}
                </button>
              </label>
              <label className="dc-cf-color-field">
                <span>{cf.backgroundColor}</span>
                <input
                  type="color"
                  value={form.backgroundColor || "#fff2cc"}
                  onChange={(event) =>
                    updateForm("backgroundColor", event.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => updateForm("backgroundColor", "")}
                >
                  {cf.none}
                </button>
              </label>
            </div>

            <div className="dc-cf-field">
              <span>{cf.style}</span>
              <div className="dc-cf-style-toggles">
                <button
                  className={form.bold ? "is-active" : ""}
                  type="button"
                  aria-pressed={form.bold}
                  title={cf.styleLabels.bold}
                  aria-label={cf.styleLabels.bold}
                  onClick={() => updateForm("bold", !form.bold)}
                >
                  B
                </button>
                <button
                  className={form.italic ? "is-active" : ""}
                  type="button"
                  aria-pressed={form.italic}
                  title={cf.styleLabels.italic}
                  aria-label={cf.styleLabels.italic}
                  onClick={() => updateForm("italic", !form.italic)}
                >
                  I
                </button>
                <button
                  className={form.underline ? "is-active" : ""}
                  type="button"
                  aria-pressed={form.underline}
                  title={cf.styleLabels.underline}
                  aria-label={cf.styleLabels.underline}
                  onClick={() => updateForm("underline", !form.underline)}
                >
                  U
                </button>
              </div>
            </div>

            <div className="dc-cf-preview" style={getRulePreviewStyle(form)}>
              {cf.preview}
            </div>

            {error && <div className="dc-cf-error">{error}</div>}

            <footer className="dc-cf-footer">
              <button type="button" onClick={onClose}>
                {cf.close}
              </button>
              <div className="dc-cf-footer-actions">
                <button type="button" onClick={resetForm}>
                  {cf.reset}
                </button>
                <button className="dc-cf-primary" type="submit">
                  {editingId ? cf.save : cf.add}
                </button>
              </div>
            </footer>
          </form>
        </div>
      </section>
    </div>
  );
};
