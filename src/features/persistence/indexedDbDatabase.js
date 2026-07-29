const DATABASE_NAME = "doccells";
const DATABASE_VERSION = 2;

export const RECOVERY_STORE_NAME = "recovery";
export const RECENT_FILES_STORE_NAME = "recent-files";

const REQUIRED_STORES = [RECOVERY_STORE_NAME, RECENT_FILES_STORE_NAME];

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
      REQUIRED_STORES.forEach((storeName) => {
        if (!database.objectStoreNames.contains(storeName)) {
          database.createObjectStore(storeName);
        }
      });
    };
    request.onsuccess = () => resolve(request.result);
  });

export const runStoreRequest = async (storeName, mode, operation) => {
  const database = await openDatabase();

  try {
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
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
