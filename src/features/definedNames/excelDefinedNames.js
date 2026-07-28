const decodeXml = (value) =>
  String(value || "")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");

export const extractExcelDefinedNames = (workbookXml) => {
  if (!workbookXml) return [];
  const result = [];
  const pattern = /<definedName\b([^>]*)>([\s\S]*?)<\/definedName>/g;
  for (const match of String(workbookXml).matchAll(pattern)) {
    const attributes = {};
    for (const attribute of match[1].matchAll(/([\w:]+)="([^"]*)"/g)) {
      attributes[attribute[1]] = decodeXml(attribute[2]);
    }
    if (!attributes.name) continue;
    const localSheetIndex =
      attributes.localSheetId == null
        ? null
        : Number(attributes.localSheetId);
    result.push({
      name: attributes.name,
      refersTo: decodeXml(match[2]),
      localSheetIndex: Number.isInteger(localSheetIndex)
        ? localSheetIndex
        : null,
      hidden: attributes.hidden === "1",
      comment: attributes.comment || "",
    });
  }
  return result;
};
