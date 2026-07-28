import JSZip from "jszip";

const escapeXml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const getAttribute = (xml, name) =>
  xml.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? null;

const getKey = (xml) =>
  `${getAttribute(xml, "name") || ""}:${getAttribute(xml, "localSheetId") || ""}`;

export const patchWorkbookWithDefinedNames = async (
  buffer,
  sheets,
  definedNames,
) => {
  if (!Array.isArray(definedNames) || definedNames.length === 0) return buffer;
  const zip = await JSZip.loadAsync(buffer);
  const workbookEntry = zip.file("xl/workbook.xml");
  if (!workbookEntry) return buffer;
  let workbookXml = await workbookEntry.async("string");
  const existingBlock = workbookXml.match(
    /<definedNames>([\s\S]*?)<\/definedNames>/,
  );
  const entries = existingBlock
    ? Array.from(
        existingBlock[1].matchAll(
          /<definedName\b[^>]*>[\s\S]*?<\/definedName>/g,
        ),
        (match) => match[0],
      )
    : [];
  const keys = new Set(entries.map(getKey));

  definedNames.forEach((item) => {
    if (!item?.name || !item?.refersTo) return;
    const localSheetId =
      item.scopeSheetId == null
        ? null
        : sheets.findIndex((sheet) => String(sheet.id) === String(item.scopeSheetId));
    if (item.scopeSheetId != null && localSheetId < 0) return;
    const key = `${item.name}:${localSheetId ?? ""}`;
    if (keys.has(key)) return;
    const attributes = [
      `name="${escapeXml(item.name)}"`,
      localSheetId == null ? "" : `localSheetId="${localSheetId}"`,
      item.hidden ? 'hidden="1"' : "",
      item.comment ? `comment="${escapeXml(item.comment)}"` : "",
    ].filter(Boolean).join(" ");
    entries.push(
      `<definedName ${attributes}>${escapeXml(item.refersTo)}</definedName>`,
    );
    keys.add(key);
  });

  const block = `<definedNames>${entries.join("")}</definedNames>`;
  workbookXml = existingBlock
    ? workbookXml.replace(existingBlock[0], block)
    : workbookXml.replace("</sheets>", `</sheets>${block}`);
  zip.file("xl/workbook.xml", workbookXml);
  return zip.generateAsync({ type: "arraybuffer" });
};
