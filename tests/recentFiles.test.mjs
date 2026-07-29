import test from "node:test";
import assert from "node:assert/strict";

import {
  isMissingRecentFileError,
  MAX_RECENT_FILES,
  normalizeRecentFiles,
  requestRecentFilePermission,
} from "../src/features/recentFiles/indexedDbRecentFiles.js";

const makeHandle = (name) => ({
  kind: "file",
  name,
  getFile() {},
});

test("normalizeRecentFiles valide, trie et limite les entrées", () => {
  const entries = Array.from({ length: MAX_RECENT_FILES + 3 }, (_, index) => ({
    id: `file-${index}`,
    name: `File ${index}.xlsx`,
    openedAt: index,
    handle: makeHandle(`File ${index}.xlsx`),
  }));
  entries.push({ id: "invalid", name: "", openedAt: 99, handle: null });

  const normalized = normalizeRecentFiles(entries);

  assert.equal(normalized.length, MAX_RECENT_FILES);
  assert.equal(normalized[0].id, `file-${MAX_RECENT_FILES + 2}`);
  assert.equal(normalized.at(-1).id, "file-3");
});

test("requestRecentFilePermission redemande une autorisation expirée", async () => {
  let requested = false;
  const handle = {
    queryPermission: async () => "prompt",
    requestPermission: async () => {
      requested = true;
      return "granted";
    },
  };

  assert.equal(await requestRecentFilePermission(handle), true);
  assert.equal(requested, true);
});

test("requestRecentFilePermission respecte un refus", async () => {
  const handle = {
    queryPermission: async () => "denied",
    requestPermission: async () => "denied",
  };

  assert.equal(await requestRecentFilePermission(handle), false);
});

test("les erreurs de fichier disparu sont identifiées", () => {
  assert.equal(isMissingRecentFileError({ name: "NotFoundError" }), true);
  assert.equal(isMissingRecentFileError({ name: "TypeMismatchError" }), true);
  assert.equal(isMissingRecentFileError({ name: "NotAllowedError" }), false);
});
