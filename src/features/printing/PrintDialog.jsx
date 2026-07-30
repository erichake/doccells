/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import {
  columnToName,
  createBorderMap,
  createPrintLayout,
  getCellDisplayText,
  getCellStyle,
} from "./printLayout.js";
import "./PrintDialog.css";

const DEFAULT_OPTIONS = {
  content: "sheet",
  paperSize: "A4",
  orientation: "portrait",
  scale: "fitWidth",
  margins: "normal",
  showGridLines: true,
  showHeaders: false,
  showBackgroundColors: true,
};

const getMergeMap = (sheet) => {
  const starts = new Map();
  const covered = new Set();
  Object.values(sheet?.config?.merge || {}).forEach((merge) => {
    if (!merge || merge.rs < 1 || merge.cs < 1) return;
    starts.set(`${merge.r}_${merge.c}`, merge);
    for (let row = merge.r; row < merge.r + merge.rs; row++) {
      for (let column = merge.c; column < merge.c + merge.cs; column++) {
        if (row !== merge.r || column !== merge.c) covered.add(`${row}_${column}`);
      }
    }
  });
  return { starts, covered };
};

const PrintPage = ({ sheet, page, layout, options, pageNumber }) => {
  const mergeMap = useMemo(() => getMergeMap(sheet), [sheet]);
  const rowSet = useMemo(() => new Set(page.rows), [page.rows]);
  const columnSet = useMemo(() => new Set(page.columns), [page.columns]);
  const pageMerges = useMemo(() => {
    const starts = new Map();
    const covered = new Set();
    mergeMap.starts.forEach((merge, key) => {
      const fits =
        Array.from({ length: merge.rs }, (_, index) => merge.r + index)
          .every((item) => rowSet.has(item)) &&
        Array.from({ length: merge.cs }, (_, index) => merge.c + index)
          .every((item) => columnSet.has(item));
      if (!fits) return;
      starts.set(key, merge);
      for (let row = merge.r; row < merge.r + merge.rs; row++) {
        for (let column = merge.c; column < merge.c + merge.cs; column++) {
          if (row !== merge.r || column !== merge.c) covered.add(`${row}_${column}`);
        }
      }
    });
    return { starts, covered };
  }, [columnSet, mergeMap, rowSet]);
  const cellMap = useMemo(() => {
    const map = new Map();
    (sheet?.celldata || []).forEach(({ r, c, v }) => map.set(`${r}_${c}`, v));
    return map;
  }, [sheet]);
  const borderMap = useMemo(
    () => createBorderMap(sheet?.config?.borderInfo),
    [sheet],
  );

  return (
    <section
      className="dc-print-page"
      style={{
        width: `${layout.pageWidth}px`,
        height: `${layout.pageHeight}px`,
        padding: `${layout.margin}px`,
      }}
      aria-label={`${sheet.name || "Sheet"} — ${pageNumber}`}
    >
      <div className="dc-print-page-content">
        <table className="dc-print-table">
          {options.showHeaders && (
            <thead>
              <tr>
                <th
                  className="dc-print-corner"
                  style={{
                    width: `${38 * layout.scale}px`,
                    minWidth: `${38 * layout.scale}px`,
                    height: `${24 * layout.scale}px`,
                  }}
                />
                {page.columns.map((column) => (
                  <th
                    key={column}
                    className="dc-print-column-heading"
                    style={{
                      width: `${layout.columnWidth(column) * layout.scale}px`,
                      height: `${24 * layout.scale}px`,
                    }}
                  >
                    {columnToName(column)}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {page.rows.map((row) => (
              <tr
                key={row}
                style={{ height: `${layout.rowHeight(row) * layout.scale}px` }}
              >
                {options.showHeaders && (
                  <th
                    className="dc-print-row-heading"
                    style={{
                      width: `${38 * layout.scale}px`,
                      minWidth: `${38 * layout.scale}px`,
                    }}
                  >
                    {row + 1}
                  </th>
                )}
                {page.columns.map((column) => {
                  const key = `${row}_${column}`;
                  if (pageMerges.covered.has(key)) return null;
                  const cell = sheet?.data?.[row]?.[column] ?? cellMap.get(key);
                  const merge = pageMerges.starts.get(key);
                  return (
                    <td
                      key={column}
                      colSpan={merge?.cs}
                      rowSpan={merge?.rs}
                      style={{
                        ...getCellStyle(
                          cell,
                          options.showGridLines,
                          options.showBackgroundColors,
                          layout.scale,
                        ),
                        ...borderMap.get(key),
                        padding: `${2 * layout.scale}px ${4 * layout.scale}px`,
                        width: `${layout.columnWidth(column) * layout.scale}px`,
                        minWidth: `${layout.columnWidth(column) * layout.scale}px`,
                        maxWidth: `${layout.columnWidth(column) * layout.scale}px`,
                      }}
                    >
                      <span className="dc-print-cell-text">
                        {getCellDisplayText(cell)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const SelectField = ({ label, value, onChange, children }) => (
  <label className="dc-print-field">
    <span>{label}</span>
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      {children}
    </select>
  </label>
);

export const PrintDialog = ({
  open,
  sheet,
  selection,
  texts,
  onClose,
}) => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setOptions(DEFAULT_OPTIONS);
    setError("");
  }, [open, sheet?.id]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  const requestedRange = options.content === "selection" ? selection : null;
  const layout = useMemo(
    () => open && sheet ? createPrintLayout(sheet, requestedRange, options) : null,
    [open, options, requestedRange, sheet],
  );

  if (!open || !sheet || !layout) return null;

  const updateOption = (key, value) => {
    setOptions((current) => ({ ...current, [key]: value }));
    setError("");
  };
  const chooseContent = (content) => {
    if (content === "selection" && !selection) {
      setError(texts.emptySelection);
      return;
    }
    updateOption("content", content);
  };
  const print = () => {
    if (options.content === "selection" && !selection) {
      setError(texts.emptySelection);
      return;
    }
    window.print();
  };

  return (
    <div className="dc-print-overlay" role="dialog" aria-modal="true" aria-labelledby="dc-print-title">
      <style>
        {`@media print { @page { size: ${options.paperSize} ${options.orientation}; margin: 0; } }`}
      </style>
      <aside className="dc-print-controls">
        <header className="dc-print-header">
          <button type="button" className="dc-print-close" onClick={onClose} aria-label={texts.cancel}>
            ×
          </button>
          <div>
            <h1 id="dc-print-title">{texts.title}</h1>
            <p>{sheet.name}</p>
          </div>
        </header>

        <div className="dc-print-settings">
          <fieldset>
            <legend>{texts.content}</legend>
            <label className="dc-print-radio">
              <input
                type="radio"
                checked={options.content === "sheet"}
                onChange={() => chooseContent("sheet")}
              />
              <span>{texts.activeSheet}</span>
            </label>
            <label className="dc-print-radio">
              <input
                type="radio"
                checked={options.content === "selection"}
                onChange={() => chooseContent("selection")}
                disabled={!selection}
              />
              <span>{texts.selection}</span>
            </label>
          </fieldset>

          <SelectField
            label={texts.paper}
            value={options.paperSize}
            onChange={(value) => updateOption("paperSize", value)}
          >
            <option value="A4">A4</option>
            <option value="Letter">Letter</option>
          </SelectField>
          <SelectField
            label={texts.orientation}
            value={options.orientation}
            onChange={(value) => updateOption("orientation", value)}
          >
            <option value="portrait">{texts.portrait}</option>
            <option value="landscape">{texts.landscape}</option>
          </SelectField>
          <SelectField
            label={texts.scale}
            value={options.scale}
            onChange={(value) => updateOption("scale", value)}
          >
            <option value="actual">{texts.actualSize}</option>
            <option value="fitWidth">{texts.fitWidth}</option>
            <option value="fitPage">{texts.fitPage}</option>
          </SelectField>
          <SelectField
            label={texts.margins}
            value={options.margins}
            onChange={(value) => updateOption("margins", value)}
          >
            <option value="normal">{texts.normal}</option>
            <option value="narrow">{texts.narrow}</option>
            <option value="wide">{texts.wide}</option>
          </SelectField>

          <fieldset>
            <legend>{texts.formatting}</legend>
            <label className="dc-print-check">
              <input
                type="checkbox"
                checked={options.showGridLines}
                onChange={(event) => updateOption("showGridLines", event.target.checked)}
              />
              <span>{texts.gridlines}</span>
            </label>
            <label className="dc-print-check">
              <input
                type="checkbox"
                checked={options.showHeaders}
                onChange={(event) => updateOption("showHeaders", event.target.checked)}
              />
              <span>{texts.headers}</span>
            </label>
            <label className="dc-print-check">
              <input
                type="checkbox"
                checked={options.showBackgroundColors}
                onChange={(event) =>
                  updateOption("showBackgroundColors", event.target.checked)
                }
              />
              <span>{texts.backgroundColors}</span>
            </label>
          </fieldset>
          {error && <p className="dc-print-error" role="alert">{error}</p>}
        </div>

        <footer className="dc-print-actions">
          <span>{texts.pages(layout.pages.length)}</span>
          <button type="button" className="dc-print-cancel" onClick={onClose}>
            {texts.cancel}
          </button>
          <button type="button" className="dc-print-submit" onClick={print}>
            {texts.print}
          </button>
        </footer>
      </aside>

      <main className="dc-print-preview">
        <div className="dc-print-pages">
          {layout.pages.map((page, index) => (
            <PrintPage
              key={`${page.verticalIndex}-${page.horizontalIndex}`}
              sheet={sheet}
              page={page}
              layout={layout}
              options={options}
              pageNumber={index + 1}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
