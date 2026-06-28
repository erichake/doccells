import JSZip from "jszip";
import {
  DOCCELLS_METADATA_SHEET_NAME,
  getChartLabelRange,
  getChartValueRange,
  normalizeChart,
} from "./chartUtils.js";

export { DOCCELLS_METADATA_SHEET_NAME };

const NS_REL =
  "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
const NS_REL_PACKAGE =
  "http://schemas.openxmlformats.org/package/2006/relationships";
const NS_DRAWING =
  "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing";
const NS_DRAWING_MAIN =
  "http://schemas.openxmlformats.org/drawingml/2006/main";
const NS_CHART =
  "http://schemas.openxmlformats.org/drawingml/2006/chart";
const NS_CHART_REL =
  "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart";
const NS_DRAWING_REL =
  "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
const CHART_CONTENT_TYPE =
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml";
const DRAWING_CONTENT_TYPE =
  "application/vnd.openxmlformats-officedocument.drawing+xml";

const escapeXml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const quoteSheetName = (name) => `'${String(name || "Sheet").replace(/'/g, "''")}'`;

const chartColor = (chart) =>
  String(chart?.color || "#4F81BD").replace("#", "").toUpperCase();

const columnToLetter = (idx) => {
  let result = "";
  let n = idx + 1;
  while (n > 0) {
    n -= 1;
    result = String.fromCharCode(65 + (n % 26)) + result;
    n = Math.floor(n / 26);
  }
  return result;
};

const rangeFormula = (sheetName, column, rowStart, rowEnd) =>
  `${quoteSheetName(sheetName)}!$${columnToLetter(column)}$${rowStart + 1}:$${columnToLetter(column)}$${rowEnd + 1}`;

const isChartUsable = (chart) => {
  if (!chart || typeof chart !== "object") return false;
  if (!chart.range && !chart.rangeText) return false;
  const range = getChartValueRange(chart);
  return Boolean(
    range?.row &&
      range?.column &&
      range.row[1] >= range.row[0] &&
      range.column[1] >= range.column[0],
  );
};

const getRelationshipIds = (xml) =>
  Array.from(String(xml || "").matchAll(/Id="(rId\d+)"/g))
    .map((match) => Number(match[1].replace("rId", "")))
    .filter(Number.isFinite);

const nextRelationshipId = (xml) => {
  const ids = getRelationshipIds(xml);
  return `rId${ids.length ? Math.max(...ids) + 1 : 1}`;
};

const appendRelationship = (xml, relationship) => {
  const relXml = `<Relationship Id="${relationship.id}" Type="${relationship.type}" Target="${relationship.target}"/>`;
  if (!xml) {
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="${NS_REL_PACKAGE}">${relXml}</Relationships>`;
  }
  return xml.replace("</Relationships>", `${relXml}</Relationships>`);
};

const normalizeDrawingTarget = (target) => {
  if (!target) return null;
  if (target.startsWith("/xl/")) return target.slice(1);
  if (target.startsWith("../")) return `xl/${target.replace(/^\.\.\//, "")}`;
  if (target.startsWith("xl/")) return target;
  return `xl/worksheets/${target}`.replace("/worksheets/../", "/");
};

const getExistingDrawing = (sheetXml, sheetRelsXml) => {
  const drawingRelId = sheetXml.match(/<drawing[^>]*r:id="([^"]+)"/)?.[1];
  if (!drawingRelId || !sheetRelsXml) return null;
  let target = null;
  for (const match of sheetRelsXml.matchAll(/<Relationship\b[^>]*\/>/g)) {
    const rel = match[0];
    if (rel.match(/\bId="([^"]+)"/)?.[1] !== drawingRelId) continue;
    target = rel.match(/\bTarget="([^"]+)"/)?.[1];
    break;
  }
  const path = normalizeDrawingTarget(target);
  return path ? { relId: drawingRelId, path } : null;
};

const getMaxNumber = (zip, regex) => {
  let max = 0;
  Object.keys(zip.files).forEach((path) => {
    const match = path.match(regex);
    if (match) max = Math.max(max, Number(match[1]));
  });
  return max;
};

const ensureContentType = (contentTypesXml, partName, contentType) => {
  if (contentTypesXml.includes(`PartName="${partName}"`)) return contentTypesXml;
  const override = `<Override PartName="${partName}" ContentType="${contentType}"/>`;
  return contentTypesXml.replace("</Types>", `${override}</Types>`);
};

const pxToAnchor = (position = {}) => {
  const colWidth = 100;
  const rowHeight = 24;
  const left = Math.max(0, Math.round(position.left ?? 160));
  const top = Math.max(0, Math.round(position.top ?? 120));
  const width = Math.max(260, Math.round(position.width ?? 380));
  const height = Math.max(190, Math.round(position.height ?? 260));
  const fromCol = Math.max(0, Math.floor(left / colWidth));
  const fromRow = Math.max(0, Math.floor(top / rowHeight));
  const toCol = Math.max(fromCol + 3, Math.ceil((left + width) / colWidth));
  const toRow = Math.max(fromRow + 8, Math.ceil((top + height) / rowHeight));
  return { fromCol, fromRow, toCol, toRow };
};

const chartTitleXml = (title) => `
<c:title>
  <c:tx><c:rich><a:bodyPr/><a:lstStyle/><a:p><a:r><a:rPr lang="fr-FR"/><a:t>${escapeXml(title || "Graphique")}</a:t></a:r></a:p></c:rich></c:tx>
  <c:layout/>
</c:title>`;

const dataLabelsXml = (showValues) =>
  showValues
    ? `<c:dLbls><c:showLegendKey val="0"/><c:showVal val="1"/><c:showCatName val="0"/><c:showSerName val="0"/><c:showPercent val="0"/><c:showBubbleSize val="0"/></c:dLbls>`
    : "";

const categoryXml = (formula) => {
  if (!formula) return "";
  return `<c:cat><c:strRef><c:f>${escapeXml(formula)}</c:f></c:strRef></c:cat>`;
};

const numericRefXml = (tag, formula) =>
  formula
    ? `<c:${tag}><c:numRef><c:f>${escapeXml(formula)}</c:f></c:numRef></c:${tag}>`
    : "";

const seriesShapeXml = (chart) => {
  const color = chartColor(chart);
  if (chart.type === "line") {
    return `<c:spPr><a:ln><a:solidFill><a:srgbClr val="${color}"/></a:solidFill></a:ln></c:spPr>`;
  }
  if (chart.type === "scatter") {
    return `<c:spPr><a:ln><a:noFill/></a:ln></c:spPr><c:marker><c:symbol val="circle"/><c:size val="6"/><c:spPr><a:solidFill><a:srgbClr val="${color}"/></a:solidFill><a:ln><a:solidFill><a:srgbClr val="${color}"/></a:solidFill></a:ln></c:spPr></c:marker>`;
  }
  if (chart.type === "pie") return "";
  return `<c:spPr><a:solidFill><a:srgbClr val="${color}"/></a:solidFill><a:ln><a:noFill/></a:ln></c:spPr>`;
};

const seriesXml = ({ chart, valueFormula, categoryFormula }) => `
<c:ser>
  <c:idx val="0"/>
  <c:order val="0"/>
  <c:tx><c:v>${escapeXml(chart.title || "Graphique")}</c:v></c:tx>
  ${seriesShapeXml(chart)}
  ${
    chart.type === "scatter"
      ? `${numericRefXml("xVal", categoryFormula || valueFormula)}${numericRefXml("yVal", valueFormula)}`
      : `${categoryXml(categoryFormula)}<c:val><c:numRef><c:f>${escapeXml(valueFormula)}</c:f></c:numRef></c:val>`
  }
</c:ser>`;

const axesXml = (catAxId, valAxId, chart) => `
<c:catAx>
  <c:axId val="${catAxId}"/>
  <c:scaling><c:orientation val="minMax"/></c:scaling>
  <c:delete val="0"/>
  <c:axPos val="b"/>
  <c:tickLblPos val="${chart.showXAxis ? "nextTo" : "none"}"/>
  <c:crossAx val="${valAxId}"/>
  <c:crosses val="autoZero"/>
  <c:auto val="1"/>
  <c:lblAlgn val="ctr"/>
  <c:lblOffset val="100"/>
</c:catAx>
<c:valAx>
  <c:axId val="${valAxId}"/>
  <c:scaling><c:orientation val="minMax"/></c:scaling>
  <c:delete val="0"/>
  <c:axPos val="l"/>
  ${chart.showGridlines ? "<c:majorGridlines/>" : ""}
  <c:numFmt formatCode="General" sourceLinked="1"/>
  <c:tickLblPos val="${chart.showYAxis ? "nextTo" : "none"}"/>
  <c:crossAx val="${catAxId}"/>
  <c:crosses val="autoZero"/>
  <c:crossBetween val="between"/>
</c:valAx>`;

const scatterAxesXml = (xAxId, yAxId, chart) => `
<c:valAx>
  <c:axId val="${xAxId}"/>
  <c:scaling><c:orientation val="minMax"/></c:scaling>
  <c:delete val="0"/>
  <c:axPos val="b"/>
  <c:numFmt formatCode="General" sourceLinked="1"/>
  <c:tickLblPos val="${chart.showXAxis ? "nextTo" : "none"}"/>
  <c:crossAx val="${yAxId}"/>
  <c:crosses val="autoZero"/>
  <c:crossBetween val="midCat"/>
</c:valAx>
<c:valAx>
  <c:axId val="${yAxId}"/>
  <c:scaling><c:orientation val="minMax"/></c:scaling>
  <c:delete val="0"/>
  <c:axPos val="l"/>
  ${chart.showGridlines ? "<c:majorGridlines/>" : ""}
  <c:numFmt formatCode="General" sourceLinked="1"/>
  <c:tickLblPos val="${chart.showYAxis ? "nextTo" : "none"}"/>
  <c:crossAx val="${xAxId}"/>
  <c:crosses val="autoZero"/>
  <c:crossBetween val="midCat"/>
</c:valAx>`;

const buildChartXml = ({ chart, sheetName, chartNo }) => {
  const valueRange = getChartValueRange(chart);
  const labelRange = getChartLabelRange(chart);
  const valueFormula = rangeFormula(
    sheetName,
    valueRange.column[0],
    valueRange.row[0],
    valueRange.row[1],
  );
  const categoryFormula = labelRange
    ? rangeFormula(
        sheetName,
        labelRange.column[0],
        labelRange.row[0],
        labelRange.row[1],
      )
    : "";
  const catAxId = 100000 + chartNo * 2;
  const valAxId = catAxId + 1;
  const ser = seriesXml({
    chart,
    sheetName,
    valueFormula,
    categoryFormula,
  });
  const dLbls = dataLabelsXml(chart.showValues);

  let plot;
  if (chart.type === "pie") {
    plot = `<c:pieChart><c:varyColors val="1"/>${ser}${dLbls}<c:firstSliceAng val="0"/></c:pieChart>`;
  } else if (chart.type === "scatter") {
    plot = `<c:scatterChart><c:scatterStyle val="marker"/>${ser}${dLbls}<c:axId val="${catAxId}"/><c:axId val="${valAxId}"/></c:scatterChart>${scatterAxesXml(catAxId, valAxId, chart)}`;
  } else if (chart.type === "line") {
    plot = `<c:lineChart><c:grouping val="standard"/>${ser}${dLbls}<c:marker val="1"/><c:smooth val="0"/><c:axId val="${catAxId}"/><c:axId val="${valAxId}"/></c:lineChart>${axesXml(catAxId, valAxId, chart)}`;
  } else {
    plot = `<c:barChart><c:barDir val="col"/><c:grouping val="clustered"/><c:varyColors val="0"/>${ser}${dLbls}<c:axId val="${catAxId}"/><c:axId val="${valAxId}"/></c:barChart>${axesXml(catAxId, valAxId, chart)}`;
  }

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<c:chartSpace xmlns:c="${NS_CHART}" xmlns:a="${NS_DRAWING_MAIN}" xmlns:r="${NS_REL}">
  <c:date1904 val="0"/>
  <c:lang val="fr-FR"/>
  <c:roundedCorners val="0"/>
  <c:chart>
    ${chartTitleXml(chart.title)}
    <c:plotArea><c:layout/>${plot}</c:plotArea>
    ${chart.showLegend === false ? "" : '<c:legend><c:legendPos val="b"/><c:layout/><c:overlay val="0"/></c:legend>'}
    <c:plotVisOnly val="1"/>
    <c:dispBlanksAs val="gap"/>
    <c:showDLblsOverMax val="0"/>
  </c:chart>
</c:chartSpace>`;
};

const chartAnchorXml = ({ chart, relId, graphicFrameId }) => {
  const anchor = pxToAnchor(chart.position);
  return `
<xdr:twoCellAnchor editAs="oneCell">
  <xdr:from><xdr:col>${anchor.fromCol}</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>${anchor.fromRow}</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:from>
  <xdr:to><xdr:col>${anchor.toCol}</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>${anchor.toRow}</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:to>
  <xdr:graphicFrame macro="">
    <xdr:nvGraphicFramePr><xdr:cNvPr id="${graphicFrameId}" name="${escapeXml(chart.title || "Graphique")}"/><xdr:cNvGraphicFramePr/></xdr:nvGraphicFramePr>
    <xdr:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></xdr:xfrm>
    <a:graphic><a:graphicData uri="${NS_CHART}"><c:chart xmlns:c="${NS_CHART}" xmlns:r="${NS_REL}" r:id="${relId}"/></a:graphicData></a:graphic>
  </xdr:graphicFrame>
  <xdr:clientData/>
</xdr:twoCellAnchor>`;
};

const createDrawingXml = () =>
  `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><xdr:wsDr xmlns:xdr="${NS_DRAWING}" xmlns:a="${NS_DRAWING_MAIN}"></xdr:wsDr>`;

const ensureWorksheetRelNamespace = (sheetXml) =>
  sheetXml.includes("xmlns:r=")
    ? sheetXml
    : sheetXml.replace("<worksheet ", `<worksheet xmlns:r="${NS_REL}" `);

const insertWorksheetDrawing = (sheetXml, relId) => {
  if (/<drawing[^>]*r:id=/.test(sheetXml)) return sheetXml;
  const drawing = `<drawing r:id="${relId}"/>`;
  return ensureWorksheetRelNamespace(sheetXml).replace("</worksheet>", `${drawing}</worksheet>`);
};

const getGraphicFrameMaxId = (drawingXml) => {
  let max = 1;
  for (const match of String(drawingXml || "").matchAll(/<xdr:cNvPr[^>]*id="(\d+)"/g)) {
    max = Math.max(max, Number(match[1]));
  }
  return max;
};

export const patchWorkbookWithNativeCharts = async (buffer, sheets) => {
  const chartTasks = [];
  sheets.forEach((sheet, sheetIndex) => {
    (sheet.customCharts || [])
      .filter(isChartUsable)
      .forEach((chart) => {
        chartTasks.push({ sheet, sheetIndex, chart: normalizeChart(chart) });
      });
  });
  if (!chartTasks.length) return buffer;

  const zip = await JSZip.loadAsync(buffer);
  let contentTypesXml = await zip.file("[Content_Types].xml").async("string");
  let nextChartNo = getMaxNumber(zip, /^xl\/charts\/chart(\d+)\.xml$/) + 1;
  let nextDrawingNo = getMaxNumber(zip, /^xl\/drawings\/drawing(\d+)\.xml$/) + 1;

  for (const task of chartTasks) {
    const sheetNo = task.sheetIndex + 1;
    const sheetPath = `xl/worksheets/sheet${sheetNo}.xml`;
    const sheetRelsPath = `xl/worksheets/_rels/sheet${sheetNo}.xml.rels`;
    let sheetXml = await zip.file(sheetPath).async("string");
    let sheetRelsXml = zip.file(sheetRelsPath)
      ? await zip.file(sheetRelsPath).async("string")
      : "";

    let drawing = getExistingDrawing(sheetXml, sheetRelsXml);
    if (!drawing) {
      const drawingNo = nextDrawingNo++;
      const drawingPath = `xl/drawings/drawing${drawingNo}.xml`;
      const drawingRelId = nextRelationshipId(sheetRelsXml);
      sheetRelsXml = appendRelationship(sheetRelsXml, {
        id: drawingRelId,
        type: NS_DRAWING_REL,
        target: `../drawings/drawing${drawingNo}.xml`,
      });
      sheetXml = insertWorksheetDrawing(sheetXml, drawingRelId);
      zip.file(drawingPath, createDrawingXml());
      contentTypesXml = ensureContentType(
        contentTypesXml,
        `/${drawingPath}`,
        DRAWING_CONTENT_TYPE,
      );
      drawing = { relId: drawingRelId, path: drawingPath };
    }

    const drawingRelsPath = drawing.path.replace(
      /^xl\/drawings\/(.+)$/,
      "xl/drawings/_rels/$1.rels",
    );
    let drawingXml = await zip.file(drawing.path).async("string");
    let drawingRelsXml = zip.file(drawingRelsPath)
      ? await zip.file(drawingRelsPath).async("string")
      : "";

    const chartNo = nextChartNo++;
    const chartPath = `xl/charts/chart${chartNo}.xml`;
    const chartRelId = nextRelationshipId(drawingRelsXml);
    zip.file(chartPath, buildChartXml({
      chart: task.chart,
      sheetName: task.sheet.name,
      chartNo,
    }));
    contentTypesXml = ensureContentType(
      contentTypesXml,
      `/${chartPath}`,
      CHART_CONTENT_TYPE,
    );
    drawingRelsXml = appendRelationship(drawingRelsXml, {
      id: chartRelId,
      type: NS_CHART_REL,
      target: `../charts/chart${chartNo}.xml`,
    });
    const graphicFrameId = getGraphicFrameMaxId(drawingXml) + 1;
    drawingXml = drawingXml.replace(
      "</xdr:wsDr>",
      `${chartAnchorXml({
        chart: task.chart,
        relId: chartRelId,
        graphicFrameId,
      })}</xdr:wsDr>`,
    );

    zip.file(sheetPath, sheetXml);
    zip.file(sheetRelsPath, sheetRelsXml);
    zip.file(drawing.path, drawingXml);
    zip.file(drawingRelsPath, drawingRelsXml);
  }

  zip.file("[Content_Types].xml", contentTypesXml);
  return zip.generateAsync({ type: "arraybuffer" });
};
