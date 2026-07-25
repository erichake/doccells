const DATABASE_NAME = "doccells";
const DATABASE_VERSION = 1;
const STORE_NAME = "recovery";
const SNAPSHOT_KEY = "current-session";

export const AUTOSAVE_DEBOUNCE_MS = 800;

const dataToCelldata = (data) => {
  const celldata = [];
  if (!Array.isArray(data)) return celldata;

  data.forEach((row, r) => {
    if (!Array.isArray(row)) return;
    row.forEach((cell, c) => {
      if (cell == null) return;
      celldata.push({
        r,
        c,
        v: typeof cell === "object" ? cell : { v: cell, m: String(cell) },
      });
    });
  });

  return celldata;
};

const sanitizeCell = (cell) => {
  if (
    !cell?.v ||
    typeof cell.v !== "object" ||
    cell.v.m !== undefined ||
    cell.v.v == null
  ) {
    return cell;
  }

  const value = { ...cell.v };
  const displayValue = getFormulaDisplayValue(value.v, value);
  if (displayValue === undefined) {
    delete value.m;
  } else {
    value.m = displayValue;
  }
  return { ...cell, v: value };
};

const hasEntries = (value) =>
  Array.isArray(value)
    ? value.length > 0
    : Boolean(value && typeof value === "object" && Object.keys(value).length > 0);

const hasNonDefaultSizes = (sizes, defaultSize) =>
  Boolean(
    sizes &&
      typeof sizes === "object" &&
      Object.values(sizes).some((size) => Number(size) !== defaultSize),
  );

const hasMeaningfulCell = (cell) => {
  const value = cell?.v;
  if (value == null) return false;
  if (typeof value !== "object") return value !== "";

  if (value.v != null && value.v !== "") return true;
  if (value.m != null && value.m !== "") return true;
  if (value.f) return true;

  return Object.keys(value).some(
    (key) => !["v", "m", "f", "VF", "_dcCf"].includes(key),
  );
};

const DEFAULT_SHEET_NAME_RE =
  /^(Sheet|Feuille|Hoja|工作表|Folha|Tabelle|Φύλλο|Foglio|Blad|Лист|शीट)\s*\d+$/i;

export const hasMeaningfulRecoveryContent = (sheets) => {
  if (!Array.isArray(sheets) || sheets.length === 0) return false;
  if (sheets.length > 1) return true;

  return sheets.some((sheet) => {
    const cells =
      Array.isArray(sheet.celldata) && sheet.celldata.length > 0
        ? sheet.celldata
        : dataToCelldata(sheet.data);
    if (cells.some(hasMeaningfulCell)) return true;
    if (!DEFAULT_SHEET_NAME_RE.test(String(sheet.name || ""))) return true;
    if (sheet.showGridLines === false || sheet.showGridLines === 0) return true;
    if (sheet.frozen || sheet.filter || sheet.filter_select) return true;
    if (hasEntries(sheet.images)) return true;
    if (hasEntries(sheet.customCharts)) return true;
    if (hasEntries(sheet.customConditionalFormatting)) return true;

    const config = sheet.config || {};
    if (hasNonDefaultSizes(config.columnlen, 99)) return true;
    if (hasNonDefaultSizes(config.rowlen, 19)) return true;

    return [
      config.colhidden,
      config.rowhidden,
      config.borderInfo,
      config.merge,
      config.authority,
    ].some(hasEntries);
  });
};

// FortuneSheet reconstruit sa grille depuis `celldata` au montage. Les
// valeurs numériques ont besoin de leur représentation d'affichage `m` pour
// être dessinées dans le canvas. On répare les anciens instantanés qui n'en
// ont pas et on retire `data`, représentation vivante et redondante.
export const prepareSheetsForRecovery = (sheets) =>
  (sheets || []).map((sheet) => {
    const preparedSheet = { ...sheet };
    const sourceCells =
      Array.isArray(sheet.celldata) && sheet.celldata.length > 0
        ? sheet.celldata
        : dataToCelldata(sheet.data);

    preparedSheet.celldata = sourceCells.map(sanitizeCell);
    delete preparedSheet.data;
    return preparedSheet;
  });

const openDatabase = () =>
  new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not available in this browser."));
      return;
    }

    const request = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
    request.onerror = () => reject(request.error);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
  });

const runRequest = async (mode, operation) => {
  const database = await openDatabase();

  try {
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, mode);
      const store = transaction.objectStore(STORE_NAME);
      const request = operation(store);
      let result;

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        result = request.result;
      };
      transaction.oncomplete = () => resolve(result);
      transaction.onabort = () => reject(transaction.error);
      transaction.onerror = () => reject(transaction.error);
    });
  } finally {
    database.close();
  }
};

export const getRecoverySnapshot = async () => {
  const snapshot = await runRequest("readonly", (store) =>
    store.get(SNAPSHOT_KEY),
  );

  if (
    snapshot?.version !== 1 ||
    !Number.isFinite(snapshot.savedAt) ||
    !Array.isArray(snapshot.sheets) ||
    snapshot.sheets.length === 0
  ) {
    if (snapshot) await deleteRecoverySnapshot();
    return null;
  }

  if (!hasMeaningfulRecoveryContent(snapshot.sheets)) {
    await deleteRecoverySnapshot();
    return null;
  }

  return {
    ...snapshot,
    sheets: prepareSheetsForRecovery(snapshot.sheets),
  };
};

export const saveRecoverySnapshot = (sheets) => {
  if (!Array.isArray(sheets) || sheets.length === 0) {
    return Promise.resolve();
  }

  if (!hasMeaningfulRecoveryContent(sheets)) {
    return deleteRecoverySnapshot();
  }

  return runRequest("readwrite", (store) =>
    store.put(
      {
        version: 1,
        savedAt: Date.now(),
        sheets: prepareSheetsForRecovery(sheets),
      },
      SNAPSHOT_KEY,
    ),
  );
};

export const deleteRecoverySnapshot = () =>
  runRequest("readwrite", (store) => store.delete(SNAPSHOT_KEY));
import { getFormulaDisplayValue } from "../workbook/excelDateFormulaUtils.js";
