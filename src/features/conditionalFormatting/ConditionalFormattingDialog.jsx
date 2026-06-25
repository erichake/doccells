/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import {
  CONDITIONAL_COMPARE_TYPES,
  CONDITIONAL_RULE_TYPES,
  DEFAULT_CONDITIONAL_RULE,
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
}) => {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(DEFAULT_CONDITIONAL_RULE);
  const [error, setError] = useState("");

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
    if (!range) return "La plage doit ressembler a A2:A100.";
    if (form.condition === "between") {
      if (form.value === "" || form.value2 === "") {
        return "Indique deux valeurs pour la condition entre.";
      }
    } else if (form.condition === "textContains") {
      if (!form.value) return "Indique le texte a rechercher.";
    } else if (form.compareType === "cell") {
      if (!parseCellReference(form.reference)) {
        return "La cellule de comparaison doit ressembler a B1.";
      }
    } else if (form.compareType === "sameRowColumn") {
      if (columnNameToIndex(form.reference) == null) {
        return "La colonne de comparaison doit ressembler a B.";
      }
    } else if (form.value === "") {
      return "Indique une valeur de comparaison.";
    }
    if (!form.textColor && !form.backgroundColor) {
      return "Choisis au moins une couleur de texte ou de fond.";
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
        className="dc-cf-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Formatage conditionnel"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="dc-cf-header">
          <div>
            <h2>Formatage conditionnel</h2>
            <p>{sheetName || "Feuille active"}</p>
          </div>
          <button className="dc-cf-icon-button" type="button" onClick={onClose}>
            <span aria-hidden="true">x</span>
          </button>
        </header>

        <div className="dc-cf-body">
          <aside className="dc-cf-rules">
            <div className="dc-cf-section-title">Regles appliquees</div>
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
                      <span>{describeConditionalRule(rule)}</span>
                    </div>
                    <div className="dc-cf-rule-sample" style={getRulePreviewStyle(rule)}>
                      Aa
                    </div>
                    <div className="dc-cf-rule-actions">
                      <button type="button" onClick={() => startEdit(rule)}>
                        Modifier
                      </button>
                      <button type="button" onClick={() => onDelete(rule.id)}>
                        Supprimer
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="dc-cf-empty">
                Aucune regle pour cette feuille.
              </div>
            )}
          </aside>

          <form className="dc-cf-form" onSubmit={submitForm}>
            <div className="dc-cf-section-title">
              {editingId ? "Modifier la regle" : "Nouvelle regle"}
            </div>

            <label className="dc-cf-field">
              <span>Appliquer a</span>
              <input
                value={form.rangeText}
                onChange={(event) => updateForm("rangeText", event.target.value)}
                placeholder="A2:A100"
              />
            </label>

            <div className="dc-cf-field">
              <span>Condition</span>
              <div className="dc-cf-segmented">
                {CONDITIONAL_RULE_TYPES.map((type) => (
                  <button
                    className={form.condition === type.value ? "is-active" : ""}
                    key={type.value}
                    type="button"
                    onClick={() => updateForm("condition", type.value)}
                  >
                    {type.symbol}
                  </button>
                ))}
              </div>
            </div>

            <label className="dc-cf-field">
              <span>Comparer a</span>
              <select
                value={form.compareType}
                onChange={(event) => updateForm("compareType", event.target.value)}
                disabled={form.condition === "between" || form.condition === "textContains"}
              >
                {compareOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            {form.condition === "between" ? (
              <div className="dc-cf-pair">
                <label className="dc-cf-field">
                  <span>Valeur min</span>
                  <input
                    value={form.value}
                    onChange={(event) => updateForm("value", event.target.value)}
                    placeholder="0"
                  />
                </label>
                <label className="dc-cf-field">
                  <span>Valeur max</span>
                  <input
                    value={form.value2}
                    onChange={(event) => updateForm("value2", event.target.value)}
                    placeholder="10"
                  />
                </label>
              </div>
            ) : form.compareType === "cell" ? (
              <label className="dc-cf-field">
                <span>Cellule</span>
                <input
                  value={form.reference}
                  onChange={(event) => updateForm("reference", event.target.value)}
                  placeholder="B1"
                />
              </label>
            ) : form.compareType === "sameRowColumn" ? (
              <label className="dc-cf-field">
                <span>Colonne meme ligne</span>
                <input
                  value={form.reference}
                  onChange={(event) => updateForm("reference", event.target.value)}
                  placeholder="B"
                />
              </label>
            ) : (
              <label className="dc-cf-field">
                <span>{form.condition === "textContains" ? "Texte" : "Valeur"}</span>
                <input
                  value={form.value}
                  onChange={(event) => updateForm("value", event.target.value)}
                  placeholder={form.condition === "textContains" ? "retard" : "10"}
                />
              </label>
            )}

            <div className="dc-cf-colors">
              <label className="dc-cf-color-field">
                <span>Texte</span>
                <input
                  type="color"
                  value={form.textColor || "#000000"}
                  onChange={(event) => updateForm("textColor", event.target.value)}
                />
                <button
                  type="button"
                  onClick={() => updateForm("textColor", "")}
                >
                  Aucun
                </button>
              </label>
              <label className="dc-cf-color-field">
                <span>Fond</span>
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
                  Aucun
                </button>
              </label>
            </div>

            <div className="dc-cf-preview" style={getRulePreviewStyle(form)}>
              Apercu de cellule
            </div>

            {error && <div className="dc-cf-error">{error}</div>}

            <footer className="dc-cf-footer">
              <button type="button" onClick={resetForm}>
                Nouvelle
              </button>
              <button className="dc-cf-primary" type="submit">
                {editingId ? "Enregistrer" : "Ajouter"}
              </button>
            </footer>
          </form>
        </div>
      </section>
    </div>
  );
};
