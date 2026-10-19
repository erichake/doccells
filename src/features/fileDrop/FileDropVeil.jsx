/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./FileDropVeil.css";

const isWorkbookFile = (file) => /\.xlsx$/i.test(file.name);

// A workbook file dropped on the page is handed to `onDropFile`, a veil showing
// where it can be dropped. Other drops, of text into a cell, are left alone.
// `onDropFile` also receives a promise of the file's handle, when the browser
// provides one, so that saving can write back to the dropped file.
export function FileDropVeil({ enabled, texts, onDropFile }) {
  const [active, setActive] = useState(false);
  const veilRef = useRef(null);
  const onDropFileRef = useRef(onDropFile);
  onDropFileRef.current = onDropFile;

  useEffect(() => {
    if (!enabled) return undefined;

    const hasFiles = (event) => event.dataTransfer?.types.includes("Files");
    const veil = veilRef.current;

    const handleDragEnter = (event) => {
      if (hasFiles(event)) setActive(true);
    };
    const handleDragOver = (event) => {
      if (hasFiles(event)) event.preventDefault();
    };
    // The veil's content ignoring the pointer, it is only left with the window.
    const handleDragLeave = () => setActive(false);
    const handleDrop = (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      setActive(false);
      const files = [...event.dataTransfer.files];
      const index = files.findIndex(isWorkbookFile);
      if (index < 0) return;
      // The handle can only be asked for while the drop event is dispatched.
      const item = [...event.dataTransfer.items].filter(
        (entry) => entry.kind === "file",
      )[index];
      const handle =
        typeof item?.getAsFileSystemHandle === "function"
          ? item.getAsFileSystemHandle().catch(() => null)
          : Promise.resolve(null);
      onDropFileRef.current(files[index], handle);
    };

    // Captured so that the sheet's own drag handlers cannot hide a file drag.
    window.addEventListener("dragenter", handleDragEnter, true);
    window.addEventListener("dragover", handleDragOver, true);
    window.addEventListener("drop", handleDrop, true);
    veil.addEventListener("dragleave", handleDragLeave);
    return () => {
      window.removeEventListener("dragenter", handleDragEnter, true);
      window.removeEventListener("dragover", handleDragOver, true);
      window.removeEventListener("drop", handleDrop, true);
      veil.removeEventListener("dragleave", handleDragLeave);
      setActive(false);
    };
  }, [enabled]);

  return (
    <div
      ref={veilRef}
      className={`dc-file-drop${active ? " is-active" : ""}`}
      aria-hidden="true"
    >
      <div className="dc-file-drop-card">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
          <g>
            <path d="M12 3v12M7 10l5 5 5-5" />
          </g>
        </svg>
        <strong>{texts.title}</strong>
        <small>{texts.formats}</small>
      </div>
    </div>
  );
}
