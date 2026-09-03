// Détecte un lien de partage Google Sheets et construit l'URL du relais
// PHP (index.php?gsheet_export=...) qui contourne les restrictions CORS.

const GOOGLE_SHEET_PATH_RE = /^\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/;

export function extractGoogleSheetId(url) {
  let parsed;
  try {
    parsed = new URL(url, window.location.href);
  } catch {
    return null;
  }
  if (parsed.hostname !== "docs.google.com") return null;
  const match = parsed.pathname.match(GOOGLE_SHEET_PATH_RE);
  return match ? match[1] : null;
}

export function buildGoogleSheetProxyUrl(sheetId) {
  return `${window.location.pathname}?gsheet_export=${encodeURIComponent(sheetId)}`;
}
