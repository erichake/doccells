/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CHART_LABEL_TYPES,
  CHART_TYPES,
  DEFAULT_CHART,
  columnToName,
  extractChartData,
  getChartLabelRange,
  getChartTexts,
  getInitialChartPosition,
  isChartDataRangeValid,
  isChartLabelRangeSizeValid,
  normalizeChart,
  rowReferenceToIndex,
} from "./chartUtils.js";
import {
  columnNameToIndex,
  parseRangeText,
  rangeToText,
} from "../conditionalFormatting/conditionalFormattingUtils.js";
import { ChartCard } from "./ChartRenderer.jsx";

const getRangeOrientation = (range) => {
  if (!range?.row || !range?.column) return "unknown";
  const rows = range.row[1] - range.row[0] + 1;
  const columns = range.column[1] - range.column[0] + 1;
  if (rows === 1 && columns > 1) return "horizontal";
  if (columns === 1 && rows > 1) return "vertical";
  return "unknown";
};

const getAllowedLabelTypes = (range) => {
  const orientation = getRangeOrientation(range);
  return CHART_LABEL_TYPES.filter((type) => {
    if (orientation === "horizontal") return type.value !== "sameRowColumn";
    if (orientation === "vertical") return type.value !== "sameColumnRow";
    return true;
  });
};

const isLabelTypeAllowed = (type, range) =>
  getAllowedLabelTypes(range).some((item) => item.value === type);

export const ChartDialog = ({
  open,
  sheet,
  charts,
  initialRangeText,
  initialLabels,
  editingChart,
  onClose,
  onSave,
  onDelete,
  texts: providedTexts,
}) => {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(DEFAULT_CHART);
  const [error, setError] = useState("");
  const [dialogOffset, setDialogOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(null);
  const texts = getChartTexts(providedTexts);

  const resetForm = useCallback(() => {
    const sourceRange = parseRangeText(initialRangeText) || DEFAULT_CHART.range;
    const sourceRows = sourceRange?.row
      ? sourceRange.row[1] - sourceRange.row[0] + 1
      : 1;
    const sourceColumns = sourceRange?.column
      ? sourceRange.column[1] - sourceRange.column[0] + 1
      : 1;
    const hasLabelRow = sourceRows === 2 && sourceColumns > 1;
    const hasLabelColumn = !hasLabelRow && sourceRows > 1 && sourceColumns > 1;
    let range = sourceRange;
    let labels = initialLabels?.type
      ? {
          ...DEFAULT_CHART.labels,
          ...initialLabels,
        }
      : DEFAULT_CHART.labels;

    if (!initialLabels?.type && hasLabelRow) {
      range = {
        row: [sourceRange.row[0] + 1, sourceRange.row[0] + 1],
        column: [...sourceRange.column],
      };
      labels = {
        type: "sameColumnRow",
        reference: String(sourceRange.row[0] + 1),
      };
    } else if (!initialLabels?.type && hasLabelColumn) {
      range = {
        row: [...sourceRange.row],
        column: [sourceRange.column[0] + 1, sourceRange.column[0] + 1],
      };
      labels = {
        type: "sameRowColumn",
        reference: columnToName(sourceRange.column[0]),
      };
    }
    setEditingId(null);
    setForm({
      ...DEFAULT_CHART,
      id: `dc_chart_${Date.now()}`,
      range,
      rangeText: rangeToText(range),
      labels,
      position: getInitialChartPosition(),
    });
    setError("");
  }, [initialLabels, initialRangeText]);

  useEffect(() => {
    if (!open) return;
    if (editingChart) {
      const normalized = normalizeChart(editingChart);
      setEditingId(normalized.id);
      setForm(normalized);
      setError("");
      return;
    }
    resetForm();
  }, [editingChart, open, resetForm]);

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

  const normalizedPreview = useMemo(() => normalizeChart(form), [form]);
  const previewData = useMemo(
    () => extractChartData(sheet, normalizedPreview),
    [normalizedPreview, sheet],
  );
  const usesAxes = form.type !== "pie";
  const labelTypes = useMemo(() => {
    const range = parseRangeText(form.rangeText);
    return getAllowedLabelTypes(range);
  }, [form.rangeText]);

  const updateForm = (field, value) => {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === "rangeText") {
        const parsed = parseRangeText(value);
        if (parsed) {
          next.range = parsed;
          const labelType = current.labels?.type || "none";
          if (!isLabelTypeAllowed(labelType, parsed)) {
            next.labels = DEFAULT_CHART.labels;
          }
        }
      }
      return next;
    });
    setError("");
  };

  const updateLabels = (field, value) => {
    setForm((current) => ({
      ...current,
      labels: {
        ...(current.labels || DEFAULT_CHART.labels),
        [field]: value,
        ...(field === "type" && value === "none" ? { reference: "" } : {}),
      },
    }));
    setError("");
  };

  const startEdit = (chart) => {
    const normalized = normalizeChart(chart);
    setEditingId(normalized.id);
    setForm(normalized);
    setError("");
  };

  const validateForm = () => {
    const range = parseRangeText(form.rangeText);
    if (!range) return texts.errors.range;
    if (!isChartDataRangeValid(range)) return texts.errors.dataColumn;
    if (!String(form.title || "").trim()) return texts.errors.title;
    const normalized = normalizeChart({ ...form, range });
    if (normalized.labels.type === "sameRowColumn") {
      if (columnNameToIndex(normalized.labels.reference) == null) {
        return texts.errors.labelColumn;
      }
    }
    if (normalized.labels.type === "sameColumnRow") {
      if (rowReferenceToIndex(normalized.labels.reference) == null) {
        return texts.errors.labelRow;
      }
    }
    if (normalized.labels.type === "range") {
      const labelRange = parseRangeText(normalized.labels.reference);
      if (!isChartDataRangeValid(labelRange)) return texts.errors.labelRange;
      if (!isChartLabelRangeSizeValid(range, labelRange)) {
        return texts.errors.labelRangeSize;
      }
    }
    const labelRange = getChartLabelRange(normalized);
    if (!isChartLabelRangeSizeValid(range, labelRange)) {
      return texts.errors.labelRangeSize;
    }
    const data = extractChartData(sheet, normalized);
    if (data.error) return data.error;
    return "";
  };

  const submitForm = (event) => {
    event.preventDefault();
    const validation = validateForm();
    if (validation) {
      setError(validation);
      return;
    }
    const range = parseRangeText(form.rangeText);
    onSave(normalizeChart({
      ...form,
      id: editingId || form.id || `dc_chart_${Date.now()}`,
      title: String(form.title || "").trim(),
      range,
      rangeText: rangeToText(range),
    }));
    resetForm();
  };

  if (!open) return null;

  const hasCharts = charts.length > 0;

  return (
    <div className="dc-chart-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`dc-chart-dialog${isDragging ? " is-dragging" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={texts.title}
        style={{
          "--dc-chart-offset-x": `${dialogOffset.x}px`,
          "--dc-chart-offset-y": `${dialogOffset.y}px`,
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="dc-chart-header" onMouseDown={startDialogDrag}>
          <div>
            <h2>{texts.title}</h2>
            <p>{sheet?.name || texts.activeSheet}</p>
          </div>
          <button
            className="dc-chart-icon-button"
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

        <div className="dc-chart-body">
          <aside className="dc-chart-list-panel">
            <div className="dc-chart-section-title">{texts.existingCharts}</div>
            {hasCharts ? (
              <div className="dc-chart-list">
                {charts.map((chart) => {
                  const normalized = normalizeChart(chart);
                  return (
                    <article
                      className={`dc-chart-list-card${
                        editingId === normalized.id ? " is-active" : ""
                      }`}
                      key={normalized.id}
                    >
                      <div>
                        <strong>{normalized.title}</strong>
                        <span>{normalized.rangeText}</span>
                      </div>
                      <div className="dc-chart-list-actions">
                        <button type="button" onClick={() => startEdit(normalized)}>
                          {texts.edit}
                        </button>
                        <button type="button" onClick={() => onDelete(normalized.id)}>
                          {texts.delete}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="dc-chart-empty">{texts.noCharts}</div>
            )}
          </aside>

          <form className="dc-chart-form" onSubmit={submitForm}>
            <div className="dc-chart-preview-shell">
              <div className="dc-chart-section-title">{texts.preview}</div>
              <div className="dc-chart-preview">
                {previewData.error ? (
                  <div className="dc-chart-card-error">{previewData.error}</div>
                ) : (
                  <ChartCard
                    chart={{
                      ...normalizedPreview,
                      position: { left: 0, top: 0, width: 360, height: 228 },
                    }}
                    sheet={sheet}
                    editable={false}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    onPositionChange={() => {}}
                  />
                )}
              </div>
            </div>

            <div className="dc-chart-controls">
              <div className="dc-chart-section-title">
                {editingId ? texts.editChart : texts.newChart}
              </div>

              <label className="dc-chart-field">
                <span>{texts.chartTitle}</span>
                <input
                  value={form.title}
                  onChange={(event) => updateForm("title", event.target.value)}
                  placeholder="Graphique"
                />
              </label>

              <div className="dc-chart-field">
                <span>{texts.type}</span>
                <select
                  value={form.type}
                  onChange={(event) => updateForm("type", event.target.value)}
                >
                  {CHART_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {texts.types[type.value] || type.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className="dc-chart-field">
                <span>{texts.color}</span>
                <span className="dc-chart-color-control">
                  <input
                    type="color"
                    value={
                      /^#[0-9a-f]{6}$/i.test(form.color || "")
                        ? form.color
                        : DEFAULT_CHART.color
                    }
                    onChange={(event) => updateForm("color", event.target.value)}
                  />
                  <input
                    value={form.color}
                    onChange={(event) => updateForm("color", event.target.value)}
                    placeholder="#4F81BD"
                  />
                </span>
              </label>

              <label className="dc-chart-field">
                <span>{texts.range}</span>
                <input
                  value={form.rangeText}
                  onChange={(event) => updateForm("rangeText", event.target.value)}
                  placeholder="B3:B24"
                />
              </label>

              <div className="dc-chart-field">
                <span>{texts.labels}</span>
                <select
                  value={form.labels?.type || "none"}
                  onChange={(event) => updateLabels("type", event.target.value)}
                >
                  {labelTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {texts.labelTypes[type.value]}
                    </option>
                  ))}
                </select>
              </div>

              {form.labels?.type === "sameRowColumn" && (
                <label className="dc-chart-field">
                  <span>{texts.labelColumnReference}</span>
                  <input
                    value={form.labels?.reference || ""}
                    onChange={(event) => updateLabels("reference", event.target.value)}
                    placeholder="A"
                  />
                </label>
              )}

              {form.labels?.type === "sameColumnRow" && (
                <label className="dc-chart-field">
                  <span>{texts.labelRowReference}</span>
                  <input
                    value={form.labels?.reference || ""}
                    onChange={(event) => updateLabels("reference", event.target.value)}
                    placeholder="2"
                  />
                </label>
              )}

              {form.labels?.type === "range" && (
                <label className="dc-chart-field">
                  <span>{texts.labelReference}</span>
                  <input
                    value={form.labels?.reference || ""}
                    onChange={(event) => updateLabels("reference", event.target.value)}
                    placeholder="A3:A24"
                  />
                </label>
              )}

              <div className="dc-chart-options">
                <div className="dc-chart-section-title">{texts.displayOptions}</div>
                <div className="dc-chart-switch-grid">
                  <label className="dc-chart-switch">
                    <input
                      type="checkbox"
                      checked={form.showValues}
                      onChange={(event) => updateForm("showValues", event.target.checked)}
                    />
                    <span>{texts.values}</span>
                  </label>
                  <label className="dc-chart-switch">
                    <input
                      type="checkbox"
                      checked={form.showLegend}
                      onChange={(event) => updateForm("showLegend", event.target.checked)}
                    />
                    <span>{texts.legend}</span>
                  </label>
                  {usesAxes && (
                    <label className="dc-chart-switch">
                      <input
                        type="checkbox"
                        checked={form.showXAxis}
                        onChange={(event) => updateForm("showXAxis", event.target.checked)}
                      />
                      <span>{texts.xAxis}</span>
                    </label>
                  )}
                  {usesAxes && (
                    <label className="dc-chart-switch">
                      <input
                        type="checkbox"
                        checked={form.showYAxis}
                        onChange={(event) => updateForm("showYAxis", event.target.checked)}
                      />
                      <span>{texts.yAxis}</span>
                    </label>
                  )}
                  {usesAxes && (
                    <label className="dc-chart-switch">
                      <input
                        type="checkbox"
                        checked={form.showGridlines}
                        onChange={(event) =>
                          updateForm("showGridlines", event.target.checked)
                        }
                      />
                      <span>{texts.gridlines}</span>
                    </label>
                  )}
                </div>
              </div>
            </div>

            {error && <div className="dc-chart-error">{error}</div>}

            <footer className="dc-chart-footer">
              <button type="button" onClick={onClose}>
                {texts.close}
              </button>
              <div className="dc-chart-footer-actions">
                <button type="button" onClick={resetForm}>
                  {texts.reset}
                </button>
                <button className="dc-chart-primary" type="submit">
                  {editingId ? texts.save : texts.add}
                </button>
              </div>
            </footer>
          </form>
        </div>
      </section>
    </div>
  );
};
