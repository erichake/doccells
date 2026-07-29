import {
  RECENT_FILES_STORE_NAME,
  runStoreRequest,
} from "../persistence/indexedDbDatabase.js";

const RECENT_FILES_KEY = "files";
export const MAX_RECENT_FILES = 10;

const isFileHandle = (handle) =>
  Boolean(handle && handle.kind === "file" && typeof handle.getFile === "function");

export const normalizeRecentFiles = (entries) =>
  (Array.isArray(entries) ? entries : [])
    .filter(
      (entry) =>
        entry &&
        typeof entry.id === "string" &&
        entry.id.length > 0 &&
        typeof entry.name === "string" &&
        entry.name.length > 0 &&
        Number.isFinite(entry.openedAt) &&
        isFileHandle(entry.handle),
    )
    .sort((left, right) => right.openedAt - left.openedAt)
    .slice(0, MAX_RECENT_FILES);

export const getRecentFiles = async () => {
  const entries = await runStoreRequest(
    RECENT_FILES_STORE_NAME,
    "readonly",
    (store) => store.get(RECENT_FILES_KEY),
  );
  return normalizeRecentFiles(entries);
};

const isSameFile = async (left, right) => {
  if (typeof left?.isSameEntry !== "function") return left === right;
  try {
    return await left.isSameEntry(right);
  } catch {
    return false;
  }
};

export const rememberRecentFile = async (handle) => {
  if (!isFileHandle(handle)) return getRecentFiles();

  const entries = await getRecentFiles();
  const duplicateChecks = await Promise.all(
    entries.map((entry) => isSameFile(entry.handle, handle)),
  );
  const nextEntries = normalizeRecentFiles([
    {
      id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
      name: handle.name,
      openedAt: Date.now(),
      handle,
    },
    ...entries.filter((_, index) => !duplicateChecks[index]),
  ]);

  await runStoreRequest(RECENT_FILES_STORE_NAME, "readwrite", (store) =>
    store.put(nextEntries, RECENT_FILES_KEY),
  );
  return nextEntries;
};

export const forgetRecentFile = async (id) => {
  const entries = await getRecentFiles();
  const nextEntries = entries.filter((entry) => entry.id !== id);
  await runStoreRequest(RECENT_FILES_STORE_NAME, "readwrite", (store) =>
    store.put(nextEntries, RECENT_FILES_KEY),
  );
  return nextEntries;
};

export const clearRecentFiles = async () => {
  await runStoreRequest(RECENT_FILES_STORE_NAME, "readwrite", (store) =>
    store.delete(RECENT_FILES_KEY),
  );
  return [];
};

export const requestRecentFilePermission = async (handle) => {
  const options = { mode: "read" };
  const permission = await handle.queryPermission?.(options);
  if (permission === "granted" || permission === undefined) return true;
  return (await handle.requestPermission?.(options)) === "granted";
};

export const isMissingRecentFileError = (error) =>
  ["NotFoundError", "TypeMismatchError"].includes(error?.name);
