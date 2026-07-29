import JSZip from "jszip";

const FEATURE_BAG_PATH =
  "xl/featurePropertyBag/featurePropertyBag.xml";
const FEATURE_BAG_REL_TYPE =
  "http://schemas.microsoft.com/office/2022/11/relationships/FeaturePropertyBag";
const FEATURE_BAG_CONTENT_TYPE =
  "application/vnd.ms-excel.featurepropertybag+xml";
const FEATURE_BAG_NAMESPACE =
  "http://schemas.microsoft.com/office/spreadsheetml/2022/featurepropertybag";
const XF_EXTENSION_URI = "{C7286773-470A-42A8-94C5-96B5CB345126}";

const FEATURE_BAG_XML =
  `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
  `<FeaturePropertyBags xmlns="${FEATURE_BAG_NAMESPACE}">` +
  `<bag type="Checkbox"/>` +
  `<bag type="XFControls"><bagId k="CellControl">0</bagId></bag>` +
  `<bag type="XFComplement"><bagId k="XFControls">1</bagId></bag>` +
  `<bag type="XFComplements" extRef="XFComplementsMapperExtRef">` +
  `<a k="MappedFeaturePropertyBags"><bagId>2</bagId></a>` +
  `</bag></FeaturePropertyBags>`;

const getAttribute = (xml, name) =>
  String(xml || "").match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? null;

const getBagBlocks = (xml) =>
  Array.from(
    String(xml || "").matchAll(/<bag\b[^>]*?(?:\/>|>[\s\S]*?<\/bag>)/g),
    (match) => match[0],
  );

export const getExcelCheckboxStyleIndexes = (files, cellXfs = []) => {
  const featurePath = Object.keys(files || {}).find(
    (path) =>
      path === FEATURE_BAG_PATH ||
      /\/featurePropertyBag(?:\d+)?\.xml$/i.test(path),
  );
  const featureXml = featurePath ? files[featurePath] : "";
  if (!String(featureXml).includes('type="Checkbox"')) return new Set();

  const bags = getBagBlocks(featureXml);
  const checkboxBags = new Set();
  const checkboxControls = new Set();
  const checkboxComplements = new Set();
  const checkboxMappings = new Set();

  bags.forEach((bag, index) => {
    if (getAttribute(bag, "type") === "Checkbox") checkboxBags.add(index);
  });
  bags.forEach((bag, index) => {
    if (getAttribute(bag, "type") !== "XFControls") return;
    const target = Number(
      bag.match(/<bagId\b[^>]*k="CellControl"[^>]*>(\d+)<\/bagId>/)?.[1],
    );
    if (checkboxBags.has(target)) checkboxControls.add(index);
  });
  bags.forEach((bag, index) => {
    if (getAttribute(bag, "type") !== "XFComplement") return;
    const target = Number(
      bag.match(/<bagId\b[^>]*k="XFControls"[^>]*>(\d+)<\/bagId>/)?.[1],
    );
    if (checkboxControls.has(target)) checkboxComplements.add(index);
  });
  bags.forEach((bag) => {
    if (getAttribute(bag, "type") !== "XFComplements") return;
    const targets = Array.from(
      bag.matchAll(/<bagId(?:\s[^>]*)?>(\d+)<\/bagId>/g),
      (match) => Number(match[1]),
    );
    targets.forEach((target, mappingIndex) => {
      if (checkboxComplements.has(target)) checkboxMappings.add(mappingIndex);
    });
  });

  const result = new Set();
  cellXfs.forEach((xf, styleIndex) => {
    const xml = xf?.elementString || "";
    const mappingIndex = Number(
      xml.match(/<xfpb:xfComplement\b[^>]*\bi="(\d+)"/)?.[1],
    );
    if (checkboxMappings.has(mappingIndex)) result.add(styleIndex);
  });
  return result;
};

const getCheckboxCellsBySheet = (sheets) =>
  (sheets || []).map((sheet) =>
    new Set(
      Object.entries(sheet?.dataVerification || {})
        .filter(([, rule]) => rule?.type === "checkbox")
        .map(([key]) => {
          const [row, column] = key.split("_").map(Number);
          if (!Number.isInteger(row) || !Number.isInteger(column)) return null;
          let col = column + 1;
          let columnName = "";
          while (col > 0) {
            col -= 1;
            columnName = String.fromCharCode(65 + (col % 26)) + columnName;
            col = Math.floor(col / 26);
          }
          return `${columnName}${row + 1}`;
        })
        .filter(Boolean),
    ),
  );

const getXfBlocks = (xml) =>
  Array.from(
    String(xml || "").matchAll(/<xf\b[^>]*?(?:\/>|>[\s\S]*?<\/xf>)/g),
    (match) => match[0],
  );

const addCheckboxExtension = (xfXml) => {
  const extension =
    `<ext uri="${XF_EXTENSION_URI}" xmlns:xfpb="${FEATURE_BAG_NAMESPACE}">` +
    `<xfpb:xfComplement i="0"/></ext>`;
  if (xfXml.includes("</extLst>")) {
    return xfXml.replace("</extLst>", `${extension}</extLst>`);
  }
  if (xfXml.endsWith("/>")) {
    return `${xfXml.slice(0, -2)}><extLst>${extension}</extLst></xf>`;
  }
  return xfXml.replace("</xf>", `<extLst>${extension}</extLst></xf>`);
};

const ensureContentType = (xml) => {
  if (xml.includes(`PartName="/${FEATURE_BAG_PATH}"`)) return xml;
  const override =
    `<Override PartName="/${FEATURE_BAG_PATH}" ` +
    `ContentType="${FEATURE_BAG_CONTENT_TYPE}"/>`;
  return xml.replace("</Types>", `${override}</Types>`);
};

const ensureFeatureRelationship = (xml) => {
  if (xml.includes(FEATURE_BAG_REL_TYPE)) return xml;
  const ids = Array.from(xml.matchAll(/\bId="rId(\d+)"/g), (match) =>
    Number(match[1]),
  ).filter(Number.isFinite);
  const id = `rId${ids.length ? Math.max(...ids) + 1 : 1}`;
  const relationship =
    `<Relationship Id="${id}" Type="${FEATURE_BAG_REL_TYPE}" ` +
    `Target="featurePropertyBag/featurePropertyBag.xml"/>`;
  return xml.replace(
    "</Relationships>",
    `${relationship}</Relationships>`,
  );
};

const patchCellStyles = (sheetXml, checkboxCells, getCheckboxStyle) =>
  sheetXml.replace(/<c\b[^>]*\br="([^"]+)"[^>]*>/g, (cellTag, address) => {
    if (!checkboxCells.has(address)) return cellTag;
    const currentStyle = Number(cellTag.match(/\bs="(\d+)"/)?.[1] || 0);
    const checkboxStyle = getCheckboxStyle(currentStyle);
    return /\bs="\d+"/.test(cellTag)
      ? cellTag.replace(/\bs="\d+"/, `s="${checkboxStyle}"`)
      : cellTag.replace("<c", `<c s="${checkboxStyle}"`);
  });

export const patchWorkbookWithNativeCheckboxes = async (buffer, sheets) => {
  const checkboxCellsBySheet = getCheckboxCellsBySheet(sheets);
  if (!checkboxCellsBySheet.some((cells) => cells.size > 0)) return buffer;

  const zip = await JSZip.loadAsync(buffer);
  const stylesEntry = zip.file("xl/styles.xml");
  const contentTypesEntry = zip.file("[Content_Types].xml");
  const workbookRelsEntry = zip.file("xl/_rels/workbook.xml.rels");
  if (!stylesEntry || !contentTypesEntry || !workbookRelsEntry) return buffer;

  let stylesXml = await stylesEntry.async("string");
  const cellXfsMatch = stylesXml.match(/<cellXfs\b[^>]*>[\s\S]*?<\/cellXfs>/);
  if (!cellXfsMatch) return buffer;
  const baseXfs = getXfBlocks(cellXfsMatch[0]);
  const checkboxStyleByBase = new Map();
  const appendedXfs = [];
  const getCheckboxStyle = (baseIndex) => {
    const safeBaseIndex = baseXfs[baseIndex] ? baseIndex : 0;
    if (checkboxStyleByBase.has(safeBaseIndex)) {
      return checkboxStyleByBase.get(safeBaseIndex);
    }
    const styleIndex = baseXfs.length + appendedXfs.length;
    appendedXfs.push(addCheckboxExtension(baseXfs[safeBaseIndex]));
    checkboxStyleByBase.set(safeBaseIndex, styleIndex);
    return styleIndex;
  };

  for (let index = 0; index < checkboxCellsBySheet.length; index += 1) {
    const cells = checkboxCellsBySheet[index];
    if (cells.size === 0) continue;
    const sheetPath = `xl/worksheets/sheet${index + 1}.xml`;
    const sheetEntry = zip.file(sheetPath);
    if (!sheetEntry) continue;
    const sheetXml = await sheetEntry.async("string");
    zip.file(
      sheetPath,
      patchCellStyles(sheetXml, cells, getCheckboxStyle),
    );
  }

  if (appendedXfs.length === 0) return buffer;
  const nextCellXfs = cellXfsMatch[0]
    .replace(/\bcount="\d+"/, `count="${baseXfs.length + appendedXfs.length}"`)
    .replace("</cellXfs>", `${appendedXfs.join("")}</cellXfs>`);
  stylesXml = stylesXml.replace(cellXfsMatch[0], nextCellXfs);
  zip.file("xl/styles.xml", stylesXml);
  zip.file(FEATURE_BAG_PATH, FEATURE_BAG_XML);
  zip.file(
    "[Content_Types].xml",
    ensureContentType(await contentTypesEntry.async("string")),
  );
  zip.file(
    "xl/_rels/workbook.xml.rels",
    ensureFeatureRelationship(await workbookRelsEntry.async("string")),
  );
  return zip.generateAsync({ type: "arraybuffer" });
};
