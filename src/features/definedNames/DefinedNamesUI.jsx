/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  getVisibleDefinedNames,
  isValidDefinedName,
  parseDefinedNameReference,
} from "./definedNamesUtils.js";
import { getDefinedNamesTexts } from "./definedNamesTexts.js";
import "./DefinedNamesUI.css";

const NameDialog = ({
  definedNames,
  initialReference,
  locale,
  open,
  sheets,
  onClose,
  onDelete,
  onSave,
}) => {
  const texts = getDefinedNamesTexts(locale);
  const [editingKey, setEditingKey] = useState(null);
  const [form, setForm] = useState({
    name: "",
    scopeSheetId: null,
    refersTo: initialReference,
  });
  const [error, setError] = useState("");
  const visibleNames = useMemo(
    () => getVisibleDefinedNames(definedNames),
    [definedNames],
  );

  useEffect(() => {
    if (!open) return;
    setEditingKey(null);
    setForm({ name: "", scopeSheetId: null, refersTo: initialReference });
    setError("");
  }, [initialReference, open]);

  if (!open) return null;

  const resetForm = () => {
    setEditingKey(null);
    setForm({ name: "", scopeSheetId: null, refersTo: initialReference });
    setError("");
  };

  const save = () => {
    const name = form.name.trim();
    if (!isValidDefinedName(name)) {
      setError(texts.invalidName);
      return;
    }
    if (!parseDefinedNameReference(form.refersTo)) {
      setError(texts.invalidReference);
      return;
    }
    const key = `${form.scopeSheetId ?? "workbook"}:${name.toLowerCase()}`;
    const duplicate = visibleNames.some((item) => {
      const itemKey = `${item.scopeSheetId ?? "workbook"}:${item.name.toLowerCase()}`;
      return itemKey === key && itemKey !== editingKey;
    });
    if (duplicate) {
      setError(texts.duplicate);
      return;
    }
    onSave(
      {
        name,
        scopeSheetId: form.scopeSheetId,
        refersTo: form.refersTo.replace(/^=/, ""),
        hidden: false,
        comment: "",
      },
      editingKey,
    );
    resetForm();
    onClose();
  };

  return createPortal(
    <div className="dc-defined-name-backdrop" role="presentation">
      <section
        className="dc-defined-name-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dc-defined-name-title"
      >
        <header>
          <h2 id="dc-defined-name-title">
            {editingKey ? texts.editTitle : texts.title}
          </h2>
          <button type="button" className="dc-defined-name-close" onClick={onClose}>
            ×
          </button>
        </header>

        <div className="dc-defined-name-fields">
          <label>
            <span>{texts.name}</span>
            <input
              autoFocus
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
            />
          </label>
          <label>
            <span>{texts.scope}</span>
            <select
              value={form.scopeSheetId ?? ""}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  scopeSheetId: event.target.value || null,
                }))
              }
            >
              <option value="">{texts.workbook}</option>
              {sheets.map((sheet) => (
                <option key={sheet.id} value={sheet.id}>
                  {sheet.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>{texts.reference}</span>
            <input
              dir="ltr"
              value={form.refersTo}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  refersTo: event.target.value,
                }))
              }
            />
          </label>
          {error ? <p className="dc-defined-name-error">{error}</p> : null}
        </div>

        <div className="dc-defined-name-list">
          <div className="dc-defined-name-list-heading">
            <strong>{texts.manager}</strong>
            <button type="button" onClick={resetForm}>{texts.newName}</button>
          </div>
          {visibleNames.length === 0 ? (
            <p className="dc-defined-name-empty">{texts.empty}</p>
          ) : (
            visibleNames.map((item) => {
              const key = `${item.scopeSheetId ?? "workbook"}:${item.name.toLowerCase()}`;
              const scope =
                item.scopeSheetId == null
                  ? texts.workbook
                  : sheets.find((sheet) => String(sheet.id) === String(item.scopeSheetId))
                    ?.name || "?";
              return (
                <div className="dc-defined-name-row" key={key}>
                  <button
                    type="button"
                    className="dc-defined-name-row-main"
                    onClick={() => {
                      setEditingKey(key);
                      setForm({
                        name: item.name,
                        scopeSheetId: item.scopeSheetId,
                        refersTo: item.refersTo,
                      });
                      setError("");
                    }}
                  >
                    <strong>{item.name}</strong>
                    <span>{scope} · {item.refersTo}</span>
                  </button>
                  <button type="button" onClick={() => onDelete(key)}>
                    {texts.remove}
                  </button>
                </div>
              );
            })
          )}
        </div>

        <footer>
          <button type="button" className="dc-defined-name-primary" onClick={save}>
            {texts.save}
          </button>
          <button type="button" onClick={onClose}>{texts.cancel}</button>
        </footer>
      </section>
    </div>,
    document.body,
  );
};

export const DefinedNamesUI = ({
  activeSheetId,
  definedNames,
  initialReference,
  locale,
  locationText,
  sheets,
  onDelete,
  onNavigate,
  onSave,
}) => {
  const texts = getDefinedNamesTexts(locale);
  const [host, setHost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const findHost = () =>
      setHost(document.querySelector(".fortune-name-box-container"));
    findHost();
    const observer = new MutationObserver(findHost);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const openDialog = () => {
      setMenuOpen(false);
      setDialogOpen(true);
    };
    window.addEventListener("doccells:open-defined-name-dialog", openDialog);
    return () =>
      window.removeEventListener("doccells:open-defined-name-dialog", openDialog);
  }, []);

  const names = getVisibleDefinedNames(definedNames).filter(
    (item) =>
      item.scopeSheetId == null ||
      String(item.scopeSheetId) === String(activeSheetId),
  );
  if (!host) return null;

  return (
    <>
      {createPortal(
        <div className="dc-name-box">
          <button
            type="button"
            className="dc-name-box-trigger"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
          >
            <span>{locationText || ""}</span>
            <span className="dc-name-box-chevron" aria-hidden="true" />
          </button>
          {menuOpen ? (
            <div className="dc-name-box-menu">
              <button
                type="button"
                className="dc-name-box-manager"
                onClick={() => {
                  setMenuOpen(false);
                  setDialogOpen(true);
                }}
              >
                {texts.manager}
              </button>
              {names.map((item) => (
                <button
                  type="button"
                  key={`${item.scopeSheetId ?? "workbook"}:${item.name}`}
                  onClick={() => {
                    setMenuOpen(false);
                    onNavigate(item);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          ) : null}
        </div>,
        host,
      )}
      <NameDialog
        definedNames={definedNames}
        initialReference={initialReference}
        locale={locale}
        open={dialogOpen}
        sheets={sheets}
        onClose={() => setDialogOpen(false)}
        onDelete={onDelete}
        onSave={onSave}
      />
    </>
  );
};
