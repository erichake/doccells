import { FortuneSheetCelldata } from "./FortuneCell.js";
import {
  getXmlAttibute,
  getColumnWidthPixel,
  fromulaRef,
  getRowHeightPixel,
  getcellrange,
  generateRandomIndex,
  getPxByEMUs,
  getMultiSequenceToNum,
  getTransR1C1ToSequence,
  getPeelOffX14,
  getMultiFormulaValue,
} from "../common/method.js";
import {
  COMMON_TYPE2,
  DATA_VERIFICATION_MAP,
  DATA_VERIFICATION_TYPE2_MAP,
  worksheetFilePath,
} from "../common/constant.js";
import { getColor } from "./ReadXml.js";
import {
  FortuneSheetBase,
  FortuneConfig,
  FortunesheetCalcChain,
  FortuneSheetConfigMerge,
} from "./FortuneBase.js";
import dayjs from "dayjs";
export class FortuneSheet extends FortuneSheetBase {
  constructor(
    sheetName,
    sheetId,
    sheetOrder,
    isInitialCell = false,
    allFileOption,
  ) {
    //Private
    super();
    this.isInitialCell = isInitialCell;
    this.readXml = allFileOption.readXml;
    this.sheetFile = allFileOption.sheetFile;
    this.styles = allFileOption.styles;
    this.sharedStrings = allFileOption.sharedStrings;
    this.calcChainEles = allFileOption.calcChain;
    this.sheetList = allFileOption.sheetList;
    this.imageList = allFileOption.imageList;
    this.hide = allFileOption.hide;
    //Output
    this.name = sheetName;
    this.id = sheetId;
    this.order = sheetOrder.toString();
    this.config = new FortuneConfig();
    this.celldata = [];
    this.mergeCells = this.readXml.getElementsByTagName(
      "mergeCells/mergeCell",
      this.sheetFile,
    );
    let clrScheme = this.styles["clrScheme"];
    let sheetView = this.readXml.getElementsByTagName(
      "sheetViews/sheetView",
      this.sheetFile,
    );
    let showGridLines = "1",
      tabSelected = "0",
      zoomScale = "100",
      activeCell = "A1";
    if (sheetView.length > 0) {
      let attrList = sheetView[0].attributeList;
      showGridLines = getXmlAttibute(attrList, "showGridLines", "1");
      tabSelected = getXmlAttibute(attrList, "tabSelected", "0");
      zoomScale = getXmlAttibute(attrList, "zoomScale", "100");
      // let colorId = getXmlAttibute(attrList, "colorId", "0");
      let selections = sheetView[0].getInnerElements("selection");
      if (selections != null && selections.length > 0) {
        activeCell = getXmlAttibute(
          selections[0].attributeList,
          "activeCell",
          "A1",
        );
        let range = getcellrange(activeCell, this.sheetList, sheetId);
        this.luckysheet_select_save = [];
        this.luckysheet_select_save.push(range);
      }
      let panes = sheetView[0].getInnerElements("pane");
      if (panes != null && panes.length > 0) {
        let paneAttrs = panes[0].attributeList;
        let state = getXmlAttibute(paneAttrs, "state", "");
        let xSplit = parseInt(getXmlAttibute(paneAttrs, "xSplit", "0"), 10) || 0;
        let ySplit = parseInt(getXmlAttibute(paneAttrs, "ySplit", "0"), 10) || 0;
        if (state === "frozen" && (xSplit > 0 || ySplit > 0)) {
          let range = {
            row_focus: Math.max(0, ySplit - 1),
            column_focus: Math.max(0, xSplit - 1),
          };
          this.frozen = {
            type: xSplit > 0 && ySplit > 0
              ? "rangeBoth"
              : ySplit > 0
                ? "rangeRow"
                : "rangeColumn",
            range,
          };
        }
      }
    }
    this.showGridLines = showGridLines;
    this.status = tabSelected;
    this.zoomRatio = parseInt(zoomScale) / 100;
    let tabColors = this.readXml.getElementsByTagName(
      "sheetPr/tabColor",
      this.sheetFile,
    );
    if (tabColors != null && tabColors.length > 0) {
      let tabColor = tabColors[0],
        attrList = tabColor.attributeList;
      // if(attrList.rgb!=null){
      let tc = getColor(tabColor, this.styles, "b");
      this.color = tc;
      // }
    }
    let sheetFormatPr = this.readXml.getElementsByTagName(
      "sheetFormatPr",
      this.sheetFile,
    );
    let defaultColWidth, defaultRowHeight;
    if (sheetFormatPr.length > 0) {
      let attrList = sheetFormatPr[0].attributeList;
      defaultColWidth = getXmlAttibute(attrList, "defaultColWidth", "9.21");
      defaultRowHeight = getXmlAttibute(attrList, "defaultRowHeight", "19");
    }
    this.defaultColWidth = getColumnWidthPixel(parseFloat(defaultColWidth));
    this.defaultRowHeight = getRowHeightPixel(parseFloat(defaultRowHeight));
    this.generateConfigColumnLenAndHidden();
    let cellOtherInfo = this.generateConfigRowLenAndHiddenAddCell();
    if (this.calcChain == null) {
      this.calcChain = [];
    }
    let formulaListExist = {};
    for (let c = 0; c < this.calcChainEles.length; c++) {
      let calcChainEle = this.calcChainEles[c],
        attrList = calcChainEle.attributeList;
      if (attrList.i != sheetId) {
        continue;
      }
      let r = attrList.r,
        i = attrList.i,
        l = attrList.l,
        s = attrList.s,
        a = attrList.a,
        t = attrList.t;
      let range = getcellrange(r);
      let chain = new FortunesheetCalcChain();
      chain.r = range.row[0];
      chain.c = range.column[0];
      chain.id = this.id;
      this.calcChain.push(chain);
      formulaListExist["r" + r + "c" + c] = null;
    }
    if (this.formulaRefList != null) {
      for (let key in this.formulaRefList) {
        let funclist = this.formulaRefList[key];
        let mainFunc = funclist["mainRef"],
          mainCellValue = mainFunc.cellValue;
        let formulaTxt = mainFunc.fv;
        let mainR = mainCellValue.r,
          mainC = mainCellValue.c;
        // let refRange = getcellrange(ref);
        for (let name in funclist) {
          if (name == "mainRef") {
            continue;
          }
          let funcValue = funclist[name],
            cellValue = funcValue.cellValue;
          if (cellValue == null) {
            continue;
          }
          let r = cellValue.r,
            c = cellValue.c;
          let func = formulaTxt;
          let offsetRow = r - mainR,
            offsetCol = c - mainC;
          if (offsetRow > 0) {
            func = "=" + fromulaRef.functionCopy(func, "down", offsetRow);
          } else if (offsetRow < 0) {
            func =
              "=" + fromulaRef.functionCopy(func, "up", Math.abs(offsetRow));
          }
          if (offsetCol > 0) {
            func = "=" + fromulaRef.functionCopy(func, "right", offsetCol);
          } else if (offsetCol < 0) {
            func =
              "=" + fromulaRef.functionCopy(func, "left", Math.abs(offsetCol));
          }
          // console.log(offsetRow, offsetCol, func);
          cellValue.v.f = func;
          //添加共享公式链
          let chain = new FortunesheetCalcChain();
          chain.r = cellValue.r;
          chain.c = cellValue.c;
          chain.id = this.id;
          this.calcChain.push(chain);
        }
      }
    }
    //There may be formulas that do not appear in calcChain
    for (let key in cellOtherInfo.formulaList) {
      if (!(key in formulaListExist)) {
        let formulaListItem = cellOtherInfo.formulaList[key];
        let chain = new FortunesheetCalcChain();
        chain.r = formulaListItem.r;
        chain.c = formulaListItem.c;
        chain.id = this.id;
        this.calcChain.push(chain);
      }
    }
    // dataVerification config
    this.dataVerification = this.generateConfigDataValidations();
    // hyperlink config
    this.hyperlink = this.generateConfigHyperlinks();
    // conditional formatting config
    this.customConditionalFormatting = this.generateCustomConditionalFormatting();
    // sheet protection
    const sheetProtectionEls = this.readXml.getElementsByTagName("sheetProtection", this.sheetFile);
    if (sheetProtectionEls != null && sheetProtectionEls.length > 0) {
      const attr = sheetProtectionEls[0].attributeList;
      if (attr.sheet === "1") {
        this.config.authority = { sheet: 1 };
      }
    }
    // autoFilter → filter_select + filter
    const autoFilterEls = this.readXml.getElementsByTagName("autoFilter", this.sheetFile);
    if (autoFilterEls != null && autoFilterEls.length > 0) {
      const ref = getXmlAttibute(autoFilterEls[0].attributeList, "ref", null);
      if (ref) {
        const range = getcellrange(ref, this.sheetList, sheetId);
        if (range) {
          this.filter_select = {
            row: range.row,
            column: range.column,
          };
          const rowhidden = this.config?.rowhidden;
          if (rowhidden && Object.keys(rowhidden).length > 0) {
            this.filter = {
              0: {
                rowhidden: { ...rowhidden },
                str: range.row[0],
                edr: range.row[1],
                cindex: range.column[0],
                stc: range.column[0],
                edc: range.column[1],
              },
            };
          }
        }
      }
    }
    // sheet hide
    this.hide = this.hide;
    if (this.mergeCells != null) {
      for (let i = 0; i < this.mergeCells.length; i++) {
        let merge = this.mergeCells[i],
          attrList = merge.attributeList;
        let ref = attrList.ref;
        if (ref == null) {
          continue;
        }
        let range = getcellrange(ref, this.sheetList, sheetId);
        let mergeValue = new FortuneSheetConfigMerge();
        mergeValue.r = range.row[0];
        mergeValue.c = range.column[0];
        mergeValue.rs = range.row[1] - range.row[0] + 1;
        mergeValue.cs = range.column[1] - range.column[0] + 1;
        if (this.config.merge == null) {
          this.config.merge = {};
        }
        this.config.merge[range.row[0] + "_" + range.column[0]] = mergeValue;
      }
    }
    this.normalizeWrappedMergedText();
    let drawingFile = allFileOption.drawingFile,
      drawingRelsFile = allFileOption.drawingRelsFile;
    if (drawingFile != null && drawingRelsFile != null) {
      let twoCellAnchors = this.readXml.getElementsByTagName(
        "xdr:twoCellAnchor",
        drawingFile,
      );
      if (twoCellAnchors != null && twoCellAnchors.length > 0) {
        for (let i = 0; i < twoCellAnchors.length; i++) {
          let twoCellAnchor = twoCellAnchors[i];
          let editAs = getXmlAttibute(
            twoCellAnchor.attributeList,
            "editAs",
            "twoCell",
          );
          let xdrFroms = twoCellAnchor.getInnerElements("xdr:from"),
            xdrTos = twoCellAnchor.getInnerElements("xdr:to");
          let xdr_blipfills = twoCellAnchor.getInnerElements("a:blip");
          if (
            xdrFroms != null &&
            xdr_blipfills != null &&
            xdrFroms.length > 0 &&
            xdr_blipfills.length > 0
          ) {
            let xdrFrom = xdrFroms[0],
              xdrTo = xdrTos[0],
              xdr_blipfill = xdr_blipfills[0];
            let rembed = getXmlAttibute(
              xdr_blipfill.attributeList,
              "r:embed",
              null,
            );
            let imageObject = this.getBase64ByRid(rembed, drawingRelsFile);
            // let aoff = xdr_xfrm.getInnerElements("a:off"), aext = xdr_xfrm.getInnerElements("a:ext");
            // if(aoff!=null && aext!=null && aoff.length>0 && aext.length>0){
            //     let aoffAttribute = aoff[0].attributeList, aextAttribute = aext[0].attributeList;
            //     let x = getXmlAttibute(aoffAttribute, "x", null);
            //     let y = getXmlAttibute(aoffAttribute, "y", null);
            //     let cx = getXmlAttibute(aextAttribute, "cx", null);
            //     let cy = getXmlAttibute(aextAttribute, "cy", null);
            //     if(x!=null && y!=null && cx!=null && cy!=null && imageObject !=null){
            // let x_n = getPxByEMUs(parseInt(x), "c"),y_n = getPxByEMUs(parseInt(y));
            // let cx_n = getPxByEMUs(parseInt(cx), "c"),cy_n = getPxByEMUs(parseInt(cy));
            let x_n = 0,
              y_n = 0;
            let cx_n = 0,
              cy_n = 0;
            imageObject.fromCol = this.getXdrValue(
              xdrFrom.getInnerElements("xdr:col"),
            );
            imageObject.fromColOff = getPxByEMUs(
              this.getXdrValue(xdrFrom.getInnerElements("xdr:colOff")),
            );
            imageObject.fromRow = this.getXdrValue(
              xdrFrom.getInnerElements("xdr:row"),
            );
            imageObject.fromRowOff = getPxByEMUs(
              this.getXdrValue(xdrFrom.getInnerElements("xdr:rowOff")),
            );
            imageObject.toCol = this.getXdrValue(
              xdrTo.getInnerElements("xdr:col"),
            );
            imageObject.toColOff = getPxByEMUs(
              this.getXdrValue(xdrTo.getInnerElements("xdr:colOff")),
            );
            imageObject.toRow = this.getXdrValue(
              xdrTo.getInnerElements("xdr:row"),
            );
            imageObject.toRowOff = getPxByEMUs(
              this.getXdrValue(xdrTo.getInnerElements("xdr:rowOff")),
            );
            imageObject.originWidth = cx_n;
            imageObject.originHeight = cy_n;
            if (editAs == "absolute") {
              imageObject.type = "3";
            } else if (editAs == "oneCell") {
              imageObject.type = "2";
            } else {
              imageObject.type = "1";
            }
            imageObject.isFixedPos = false;
            imageObject.fixedLeft = 0;
            imageObject.fixedTop = 0;
            let imageBorder = {
              color: "#000",
              radius: 0,
              style: "solid",
              width: 0,
            };
            imageObject.border = imageBorder;
            let imageCrop = {
              height: cy_n,
              offsetLeft: 0,
              offsetTop: 0,
              width: cx_n,
            };
            imageObject.crop = imageCrop;
            let imageDefault = {
              height: cy_n,
              left: x_n,
              top: y_n,
              width: cx_n,
            };
            imageObject.default = imageDefault;
            if (this.images == null) {
              this.images = {};
            }
            this.images[generateRandomIndex("image")] = imageObject;
            //     }
            // }
          }
        }
      }
      let oneCellAnchors = this.readXml.getElementsByTagName(
        "xdr:oneCellAnchor",
        drawingFile,
      );
      if (oneCellAnchors != null && oneCellAnchors.length > 0) {
        for (let i = 0; i < oneCellAnchors.length; i++) {
          let oneCellAnchor = oneCellAnchors[i];
          let xdrFroms = oneCellAnchor.getInnerElements("xdr:from"),
            xdrExts = oneCellAnchor.getInnerElements("xdr:ext");
          let xdr_blipfills = oneCellAnchor.getInnerElements("a:blip");
          if (
            xdrFroms != null &&
            xdrExts != null &&
            xdr_blipfills != null &&
            xdrFroms.length > 0 &&
            xdrExts.length > 0 &&
            xdr_blipfills.length > 0
          ) {
            let xdrFrom = xdrFroms[0],
              xdrExt = xdrExts[0],
              xdr_blipfill = xdr_blipfills[0];
            let rembed = getXmlAttibute(
              xdr_blipfill.attributeList,
              "r:embed",
              null,
            );
            let imageObject = this.getBase64ByRid(rembed, drawingRelsFile);
            if (imageObject == null) {
              continue;
            }
            let cx_n = getPxByEMUs(
              parseInt(getXmlAttibute(xdrExt.attributeList, "cx", "0")),
            );
            let cy_n = getPxByEMUs(
              parseInt(getXmlAttibute(xdrExt.attributeList, "cy", "0")),
            );
            imageObject.fromCol = this.getXdrValue(
              xdrFrom.getInnerElements("xdr:col"),
            );
            imageObject.fromColOff = getPxByEMUs(
              this.getXdrValue(xdrFrom.getInnerElements("xdr:colOff")),
            );
            imageObject.fromRow = this.getXdrValue(
              xdrFrom.getInnerElements("xdr:row"),
            );
            imageObject.fromRowOff = getPxByEMUs(
              this.getXdrValue(xdrFrom.getInnerElements("xdr:rowOff")),
            );
            imageObject.toCol = imageObject.fromCol;
            imageObject.toColOff = imageObject.fromColOff + cx_n;
            imageObject.toRow = imageObject.fromRow;
            imageObject.toRowOff = imageObject.fromRowOff + cy_n;
            imageObject.originWidth = cx_n;
            imageObject.originHeight = cy_n;
            imageObject.type = "2";
            imageObject.isFixedPos = false;
            imageObject.fixedLeft = 0;
            imageObject.fixedTop = 0;
            let imageBorder = {
              color: "#000",
              radius: 0,
              style: "solid",
              width: 0,
            };
            imageObject.border = imageBorder;
            let imageCrop = {
              height: cy_n,
              offsetLeft: 0,
              offsetTop: 0,
              width: cx_n,
            };
            imageObject.crop = imageCrop;
            let imageDefault = {
              height: cy_n,
              left: 0,
              top: 0,
              width: cx_n,
            };
            imageObject.default = imageDefault;
            if (this.images == null) {
              this.images = {};
            }
            this.images[generateRandomIndex("image")] = imageObject;
          }
        }
      }
    }
  }
  decodeConditionalFormulaText(value) {
    return String(value || "")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/^=/, "")
      .trim();
  }
  getColumnNameFromIndex(index) {
    let name = "";
    let current = index + 1;
    while (current > 0) {
      current--;
      name = String.fromCharCode(65 + (current % 26)) + name;
      current = Math.floor(current / 26);
    }
    return name;
  }
  getConditionalRangeText(range) {
    const start = `${this.getColumnNameFromIndex(range.column[0])}${range.row[0] + 1}`;
    const end = `${this.getColumnNameFromIndex(range.column[1])}${range.row[1] + 1}`;
    return start === end ? start : `${start}:${end}`;
  }
  getConditionalFormulaValues(ruleElement) {
    const formulaElements = ruleElement.getInnerElements("formula");
    if (formulaElements == null) return [];
    return formulaElements.map((formula) =>
      this.decodeConditionalFormulaText(formula.value),
    );
  }
  cleanConditionalFormulaValue(value) {
    const text = this.decodeConditionalFormulaText(value);
    if (
      (text.startsWith('"') && text.endsWith('"')) ||
      (text.startsWith("'") && text.endsWith("'"))
    ) {
      return text.substring(1, text.length - 1).replace(/""/g, '"');
    }
    return text;
  }
  parseConditionalTarget(value) {
    const text = this.cleanConditionalFormulaValue(value).replace(/\$/g, "");
    const cellMatch = text.match(/^([A-Z]+)(\d+)$/i);
    if (cellMatch) {
      return {
        compareType: "cell",
        reference: `${cellMatch[1].toUpperCase()}${cellMatch[2]}`,
      };
    }
    return { compareType: "value", value: text };
  }
  getConditionalDxfStyle(dxfId) {
    const dxfs = this.styles["dxfs"] || [];
    const dxf = dxfId == null ? null : dxfs[parseInt(dxfId)];
    const style = {};
    if (dxf == null) return style;

    const font = dxf.getInnerElements("font");
    if (font != null && font[0]) {
      const bold = font[0].getInnerElements("b");
      const italic = font[0].getInnerElements("i");
      const underline = font[0].getInnerElements("u");
      if (bold != null && bold[0]?.attributeList?.val !== "0") {
        style.bold = true;
      }
      if (italic != null && italic[0]?.attributeList?.val !== "0") {
        style.italic = true;
      }
      if (underline != null && underline[0]?.attributeList?.val !== "0") {
        style.underline = true;
      }
    }
    const fontColor =
      font != null && font[0] ? font[0].getInnerElements("color") : null;
    if (fontColor != null && fontColor[0]) {
      style.textColor = getColor(fontColor[0], this.styles, "t");
    }

    const fill = dxf.getInnerElements("fill");
    const patternFill =
      fill != null && fill[0] ? fill[0].getInnerElements("patternFill") : null;
    if (patternFill != null && patternFill[0]) {
      const fgColor = patternFill[0].getInnerElements("fgColor");
      const bgColor = patternFill[0].getInnerElements("bgColor");
      const colorElement =
        fgColor != null && fgColor[0]
          ? fgColor[0]
          : bgColor != null && bgColor[0]
            ? bgColor[0]
            : null;
      if (colorElement != null) {
        style.backgroundColor = getColor(colorElement, this.styles, "b");
      }
    }

    return style;
  }
  getConditionalTextContainsValue(ruleElement, formulaValues) {
    const text = getXmlAttibute(ruleElement.attributeList, "text", null);
    if (text != null) return text;
    const formula = formulaValues[0] || "";
    const match = formula.match(/SEARCH\("((?:[^"]|"")*)"/i);
    return match ? match[1].replace(/""/g, '"') : "";
  }
  parseConditionalExpressionRule(ruleElement, range, style, id) {
    const formulaValues = this.getConditionalFormulaValues(ruleElement);
    const formula = formulaValues[0] || "";
    const comparison = formula.match(
      /^\$?([A-Z]+)\$?(\d+)\s*(<>|[<>=])\s*\$?([A-Z]+)\$?(\d+)$/i,
    );
    if (comparison == null) return null;

    const leftRow = parseInt(comparison[2]);
    const rightRow = parseInt(comparison[5]);
    const conditionMap = {
      ">": "greaterThan",
      "<": "lessThan",
      "=": "equal",
      "<>": "notEqual",
    };
    if (leftRow !== rightRow || !conditionMap[comparison[3]]) return null;

    return {
      id,
      enabled: true,
      rangeText: this.getConditionalRangeText(range),
      range,
      condition: conditionMap[comparison[3]],
      compareType: "sameRowColumn",
      value: "",
      value2: "",
      reference: comparison[4].toUpperCase(),
      textColor: style.textColor,
      backgroundColor: style.backgroundColor,
      bold: !!style.bold,
      italic: !!style.italic,
      underline: !!style.underline,
    };
  }
  parseConditionalCellIsRule(ruleElement, range, style, id) {
    const operator = getXmlAttibute(ruleElement.attributeList, "operator", null);
    const conditionMap = {
      greaterThan: "greaterThan",
      lessThan: "lessThan",
      equal: "equal",
      notEqual: "notEqual",
      between: "between",
    };
    const condition = conditionMap[operator];
    if (!condition) return null;
    const formulaValues = this.getConditionalFormulaValues(ruleElement);
    const firstTarget = this.parseConditionalTarget(formulaValues[0] || "");
    const rule = {
      id,
      enabled: true,
      rangeText: this.getConditionalRangeText(range),
      range,
      condition,
      compareType: firstTarget.compareType,
      value: firstTarget.value || "",
      value2: "",
      reference: firstTarget.reference || "",
      textColor: style.textColor,
      backgroundColor: style.backgroundColor,
      bold: !!style.bold,
      italic: !!style.italic,
      underline: !!style.underline,
    };
    if (condition === "between") {
      rule.compareType = "value";
      rule.value = this.cleanConditionalFormulaValue(formulaValues[0] || "");
      rule.value2 = this.cleanConditionalFormulaValue(formulaValues[1] || "");
      rule.reference = "";
    }
    return rule;
  }
  parseConditionalContainsTextRule(ruleElement, range, style, id) {
    const formulaValues = this.getConditionalFormulaValues(ruleElement);
    return {
      id,
      enabled: true,
      rangeText: this.getConditionalRangeText(range),
      range,
      condition: "textContains",
      compareType: "value",
      value: this.getConditionalTextContainsValue(ruleElement, formulaValues),
      value2: "",
      reference: "",
      textColor: style.textColor,
      backgroundColor: style.backgroundColor,
      bold: !!style.bold,
      italic: !!style.italic,
      underline: !!style.underline,
    };
  }
  generateCustomConditionalFormatting() {
    const conditionalFormattingElements = this.readXml.getElementsByTagName(
      "conditionalFormatting",
      this.sheetFile,
    );
    const rules = [];
    if (conditionalFormattingElements == null) return rules;

    for (let i = 0; i < conditionalFormattingElements.length; i++) {
      const conditionalFormatting = conditionalFormattingElements[i];
      const sqref = getXmlAttibute(
        conditionalFormatting.attributeList,
        "sqref",
        null,
      );
      if (!sqref) continue;

      const cfRules = conditionalFormatting.getInnerElements("cfRule");
      if (cfRules == null) continue;

      const refs = sqref.split(/\s+/).filter(Boolean);
      for (let refIndex = 0; refIndex < refs.length; refIndex++) {
        const range = getcellrange(refs[refIndex], this.sheetList, this.id);
        if (!range) continue;

        for (let ruleIndex = 0; ruleIndex < cfRules.length; ruleIndex++) {
          const cfRule = cfRules[ruleIndex];
          const type = getXmlAttibute(cfRule.attributeList, "type", null);
          const dxfId = getXmlAttibute(cfRule.attributeList, "dxfId", null);
          const style = this.getConditionalDxfStyle(dxfId);
          const id = `xlsx_cf_${this.id}_${i}_${refIndex}_${ruleIndex}`;
          let rule = null;

          if (type === "expression") {
            rule = this.parseConditionalExpressionRule(cfRule, range, style, id);
          } else if (type === "cellIs") {
            rule = this.parseConditionalCellIsRule(cfRule, range, style, id);
          } else if (type === "containsText") {
            rule = this.parseConditionalContainsTextRule(cfRule, range, style, id);
          }

          if (
            rule != null &&
            (rule.textColor ||
              rule.backgroundColor ||
              rule.bold ||
              rule.italic ||
              rule.underline)
          ) {
            rules.push(rule);
          }
        }
      }
    }

    return rules;
  }
  getXdrValue(ele) {
    if (ele == null || ele.length == 0) {
      return null;
    }
    return parseInt(ele[0].value);
  }
  getBase64ByRid(rid, drawingRelsFile) {
    let Relationships = this.readXml.getElementsByTagName(
      "Relationships/Relationship",
      drawingRelsFile,
    );
    if (Relationships != null && Relationships.length > 0) {
      for (let i = 0; i < Relationships.length; i++) {
        let Relationship = Relationships[i];
        let attrList = Relationship.attributeList;
        let Id = getXmlAttibute(attrList, "Id", null);
        let src = getXmlAttibute(attrList, "Target", null);
        if (Id == rid) {
          src = src.replace(/\.\.\//g, "");
          src = "xl/" + src;
          let imgage = this.imageList.getImageByName(src);
          return imgage;
        }
      }
    }
    return null;
  }
  /**
   * @desc This will convert cols/col to fortunesheet config of column'width
   */
  generateConfigColumnLenAndHidden() {
    let cols = this.readXml.getElementsByTagName("cols/col", this.sheetFile);
    for (let i = 0; i < cols.length; i++) {
      let col = cols[i],
        attrList = col.attributeList;
      let min = getXmlAttibute(attrList, "min", null);
      let max = getXmlAttibute(attrList, "max", null);
      let width = getXmlAttibute(attrList, "width", null);
      let hidden = getXmlAttibute(attrList, "hidden", null);
      let customWidth = getXmlAttibute(attrList, "customWidth", null);
      if (min == null || max == null) {
        continue;
      }
      let minNum = parseInt(min) - 1,
        maxNum = parseInt(max) - 1,
        widthNum = parseFloat(width);
      for (let m = minNum; m <= maxNum; m++) {
        if (width != null) {
          if (this.config.columnlen == null) {
            this.config.columnlen = {};
          }
          this.config.columnlen[m] = getColumnWidthPixel(widthNum);
        }
        if (hidden == "1") {
          if (this.config.colhidden == null) {
            this.config.colhidden = {};
          }
          this.config.colhidden[m] = 0;
          if (this.config.columnlen) {
            delete this.config.columnlen[m];
          }
        }
        if (customWidth != null) {
          if (this.config.customWidth == null) {
            this.config.customWidth = {};
          }
          this.config.customWidth[m] = 1;
        }
      }
    }
  }
  /**
   * @desc Normalize wrapped merged text so it renders and exports as full text.
   */
  normalizeWrappedMergedText() {
    if (!this.isInitialCell || this.config.merge == null || this.celldata.length === 0) {
      return;
    }
    for (let i = 0; i < this.celldata.length; i++) {
      const cell = this.celldata[i];
      const value = cell.v;
      if (value == null || value.tb !== "2") {
        continue;
      }
      const merge = this.config.merge[cell.r + "_" + cell.c];
      if (merge == null || merge.rs !== 1 || merge.cs <= 1) {
        continue;
      }
      const text = this.getCellTextForWrappedMerge(value);
      if (text.length === 0) {
        continue;
      }
      if (value.ct?.t === "inlineStr" && Array.isArray(value.ct.s)) {
        value.v = text;
        value.m = text;
        value.ct = { ...value.ct, t: "s" };
        delete value.ct.s;
      }
      const fontSize = value.fs || 11;
      const cellWidth = this.getMergedCellWidthForWrappedText(merge.c, merge.cs);
      const currentHeight = this.config.rowlen?.[cell.r] || this.defaultRowHeight;
      const estimatedHeight = this.estimateWrappedTextHeight(
        text,
        cellWidth,
        fontSize,
      );
      if (estimatedHeight > currentHeight + 2) {
        if (this.config.rowlen == null) {
          this.config.rowlen = {};
        }
        this.config.rowlen[cell.r] = estimatedHeight;
      }
    }
  }
  getCellTextForWrappedMerge(value) {
    if (value.ct?.s != null && value.ct.s.length > 0) {
      return value.ct.s.map((item) => item.v || "").join("");
    }
    return (value.m ?? value.v ?? "").toString();
  }
  getMergedCellWidthForWrappedText(startColumn, columnCount) {
    let width = 0;
    for (let c = startColumn; c < startColumn + columnCount; c++) {
      width += this.config.columnlen?.[c] || this.defaultColWidth;
    }
    return Math.max(width - 8, 1);
  }
  estimateWrappedTextHeight(text, cellWidth, fontSize) {
    const lineHeight = Math.ceil(fontSize * 1.35);
    let lineCount = 0;
    text.split(/\r\n|\r|\n/).forEach((line) => {
      let lineWidth = 0;
      let hasContent = false;
      const parts = line.match(/[^\S\r\n]+|\S+/g) || [""];
      parts.forEach((part) => {
        const partWidth = this.estimateTextWidthForWrappedText(part, fontSize);
        if (lineWidth > 0 && lineWidth + partWidth > cellWidth) {
          lineCount += 1;
          lineWidth = partWidth;
        } else {
          lineWidth += partWidth;
        }
        hasContent = hasContent || part.length > 0;
      });
      lineCount += hasContent ? 1 : 0;
    });
    return Math.ceil(lineCount * lineHeight + 6);
  }
  estimateTextWidthForWrappedText(text, fontSize) {
    let width = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/\s/.test(char)) {
        width += fontSize * 0.3;
      } else if (char.charCodeAt(0) > 255) {
        width += fontSize;
      } else if (/[A-Z0-9]/.test(char)) {
        width += fontSize * 0.62;
      } else {
        width += fontSize * 0.52;
      }
    }
    return width;
  }
  isBlankImportCell(cell) {
    return !/<(?:v|f|is|t)\b/.test(cell.elementString);
  }
  getBlankCellStyleSkip(styleId) {
    if (this.blankCellStyleSkipCache == null) {
      this.blankCellStyleSkipCache = {};
    }
    const key = styleId ?? "";
    if (key in this.blankCellStyleSkipCache) {
      return this.blankCellStyleSkipCache[key];
    }
    const attributeList = { r: "A1" };
    if (styleId != null) {
      attributeList.s = styleId;
    }
    const sampleCell = {
      attributeList,
      getInnerElements: () => null,
    };
    const sampleValue = new FortuneSheetCelldata(
      sampleCell,
      this.styles,
      this.sharedStrings,
      this.mergeCells,
      this.sheetFile,
      this.readXml,
    );
    const shouldSkip = this.isSkippableEmptyCellValue(sampleValue);
    this.blankCellStyleSkipCache[key] = shouldSkip;
    return shouldSkip;
  }
  isSkippableEmptyCellValue(cellValue) {
    const value = cellValue?.v;
    if (value == null || cellValue._borderObject != null) {
      return false;
    }
    if (value.v != null || value.m != null || value.f != null || value.mc != null) {
      return false;
    }
    if (value.bg != null || value.lo != null || value.qp != null) {
      return false;
    }
    const richText = value.ct?.s;
    return !(Array.isArray(richText) && richText.some((item) => item?.v));
  }
  /**
   * @desc This will convert cols/col to fortunesheet config of column'width
   */
  generateConfigRowLenAndHiddenAddCell() {
    let rows = this.readXml.getElementsByTagName(
      "sheetData/row",
      this.sheetFile,
    );
    let cellOtherInfo = {};
    let formulaList = {};
    cellOtherInfo.formulaList = formulaList;
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i],
        attrList = row.attributeList;
      let rowNo = getXmlAttibute(attrList, "r", null);
      let height = getXmlAttibute(attrList, "ht", null);
      let hidden = getXmlAttibute(attrList, "hidden", null);
      let customHeight = getXmlAttibute(attrList, "customHeight", null);
      if (rowNo == null) {
        continue;
      }
      let rowNoNum = parseInt(rowNo) - 1;
      if (height != null) {
        let heightNum = parseFloat(height);
        if (this.config.rowlen == null) {
          this.config.rowlen = {};
        }
        this.config.rowlen[rowNoNum] = getRowHeightPixel(heightNum);
      }
      if (hidden == "1") {
        if (this.config.rowhidden == null) {
          this.config.rowhidden = {};
        }
        this.config.rowhidden[rowNoNum] = 0;
        if (this.config.rowlen) {
          delete this.config.rowlen[rowNoNum];
        }
      }
      if (customHeight != null) {
        if (this.config.customHeight == null) {
          this.config.customHeight = {};
        }
        this.config.customHeight[rowNoNum] = 1;
      }
      if (this.isInitialCell) {
        let cells = row.getInnerElements("c");
        for (let key in cells) {
          let cell = cells[key];
          if (
            this.isBlankImportCell(cell) &&
            this.getBlankCellStyleSkip(cell.attributeList.s)
          ) {
            continue;
          }
          let cellValue = new FortuneSheetCelldata(
            cell,
            this.styles,
            this.sharedStrings,
            this.mergeCells,
            this.sheetFile,
            this.readXml,
          );
          if (cellValue._borderObject != null) {
            if (this.config.borderInfo == null) {
              this.config.borderInfo = [];
            }
            this.config.borderInfo.push(cellValue._borderObject);
            delete cellValue._borderObject;
          }
          // let borderId = cellValue._borderId;
          // if(borderId!=null){
          //     let borders = this.styles["borders"] as Element[];
          //     if(this.config._borderInfo==null){
          //         this.config._borderInfo = {};
          //     }
          //     if( borderId in this.config._borderInfo){
          //         this.config._borderInfo[borderId].cells.push(cellValue.r + "_" + cellValue.c);
          //     }
          //     else{
          //         let border = borders[borderId];
          //         let borderObject = new FortuneSheetborderInfoCellForImp();
          //         borderObject.rangeType = "cellGroup";
          //         borderObject.cells = [];
          //         let borderCellValue = new FortuneSheetborderInfoCellValue();
          //         let lefts = border.getInnerElements("left");
          //         let rights = border.getInnerElements("right");
          //         let tops = border.getInnerElements("top");
          //         let bottoms = border.getInnerElements("bottom");
          //         let diagonals = border.getInnerElements("diagonal");
          //         let left = this.getBorderInfo(lefts);
          //         let right = this.getBorderInfo(rights);
          //         let top = this.getBorderInfo(tops);
          //         let bottom = this.getBorderInfo(bottoms);
          //         let diagonal = this.getBorderInfo(diagonals);
          //         let isAdd = false;
          //         if(left!=null && left.color!=null){
          //             borderCellValue.l = left;
          //             isAdd = true;
          //         }
          //         if(right!=null && right.color!=null){
          //             borderCellValue.r = right;
          //             isAdd = true;
          //         }
          //         if(top!=null && top.color!=null){
          //             borderCellValue.t = top;
          //             isAdd = true;
          //         }
          //         if(bottom!=null && bottom.color!=null){
          //             borderCellValue.b = bottom;
          //             isAdd = true;
          //         }
          //         if(isAdd){
          //             borderObject.value = borderCellValue;
          //             this.config._borderInfo[borderId] = borderObject;
          //         }
          //     }
          // }
          if (cellValue._formulaType == "shared") {
            if (this.formulaRefList == null) {
              this.formulaRefList = {};
            }
            if (this.formulaRefList[cellValue._formulaSi] == null) {
              this.formulaRefList[cellValue._formulaSi] = {};
            }
            let fv;
            if (cellValue.v != null) {
              fv = cellValue.v.f;
            }
            let refValue = {
              t: cellValue._formulaType,
              ref: cellValue._fomulaRef,
              si: cellValue._formulaSi,
              fv: fv,
              cellValue: cellValue,
            };
            if (cellValue._fomulaRef != null) {
              this.formulaRefList[cellValue._formulaSi]["mainRef"] = refValue;
            } else {
              this.formulaRefList[cellValue._formulaSi][
                cellValue.r + "_" + cellValue.c
              ] = refValue;
            }
            // console.log(refValue, this.formulaRefList);
          }
          //There may be formulas that do not appear in calcChain
          if (cellValue.v != null && cellValue.v.f != null) {
            let formulaCell = {
              r: cellValue.r,
              c: cellValue.c,
            };
            cellOtherInfo.formulaList["r" + cellValue.r + "c" + cellValue.c] =
              formulaCell;
          }
          this.celldata.push(cellValue);
        }
      }
    }
    return cellOtherInfo;
  }
  /**
   * fortunesheet config of dataValidations
   *
   * @returns {IfortunesheetDataVerification} - dataValidations config
   */
  generateConfigDataValidations() {
    let rows = this.readXml.getElementsByTagName(
      "dataValidations/dataValidation",
      this.sheetFile,
    );
    let extLst =
      this.readXml.getElementsByTagName(
        "extLst/ext/x14:dataValidations/x14:dataValidation",
        this.sheetFile,
      ) || [];
    rows = rows.concat(extLst);
    let dataVerification = {};
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      let attrList = row.attributeList;
      let formulaValue = row.value;
      let type = getXmlAttibute(attrList, "type", null);
      if (!type) {
        continue;
      }
      let operator = "",
        sqref = "",
        sqrefIndexArr = [],
        valueArr = [];
      let _prohibitInput =
        getXmlAttibute(attrList, "allowBlank", null) !== "1" ? false : true;
      // x14 processing
      const formulaReg = new RegExp(/<x14:formula1>|<xm:sqref>/g);
      if (
        formulaReg.test(formulaValue) &&
        (extLst === null || extLst === void 0 ? void 0 : extLst.length) >= 0
      ) {
        operator = getXmlAttibute(attrList, "operator", null);
        const peelOffData = getPeelOffX14(formulaValue);
        sqref =
          peelOffData === null || peelOffData === void 0
            ? void 0
            : peelOffData.sqref;
        sqrefIndexArr = getMultiSequenceToNum(sqref);
        valueArr = getMultiFormulaValue(
          peelOffData === null || peelOffData === void 0
            ? void 0
            : peelOffData.formula,
        );
      } else {
        operator = getXmlAttibute(attrList, "operator", null);
        sqref = getXmlAttibute(attrList, "sqref", null);
        sqrefIndexArr = getMultiSequenceToNum(sqref);
        valueArr = getMultiFormulaValue(formulaValue);
      }
      let _type = DATA_VERIFICATION_MAP[type];
      let _type2 = null;
      let _value1 =
        (valueArr === null || valueArr === void 0 ? void 0 : valueArr.length) >=
        1
          ? valueArr[0]
          : "";
      let _value2 =
        (valueArr === null || valueArr === void 0
          ? void 0
          : valueArr.length) === 2
          ? valueArr[1]
          : "";
      let _hint = getXmlAttibute(attrList, "prompt", null);
      let _hintShow = _hint ? true : false;
      const matchType = COMMON_TYPE2.includes(_type) ? "common" : _type;
      _type2 = operator
        ? DATA_VERIFICATION_TYPE2_MAP[matchType][operator]
        : "bw";
      // mobile phone number processing
      if (
        _type === "text_content" &&
        ((_value1 === null || _value1 === void 0
          ? void 0
          : _value1.includes("LEN")) ||
          (_value1 === null || _value1 === void 0
            ? void 0
            : _value1.includes("len"))) &&
        (_value1 === null || _value1 === void 0
          ? void 0
          : _value1.includes("=11"))
      ) {
        _type = "validity";
        _type2 = "phone";
      }
      // date processing
      if (_type === "date") {
        const D1900 = new Date(1899, 11, 30, 0, 0, 0);
        _value1 = dayjs(D1900)
          .clone()
          .add(Number(_value1), "day")
          .format("YYYY-MM-DD");
        _value2 = dayjs(D1900)
          .clone()
          .add(Number(_value2), "day")
          .format("YYYY-MM-DD");
      }
      // checkbox and dropdown processing
      if (_type === "checkbox" || _type === "dropdown") {
        _type2 = null;
      }
      // dynamically add dataVerifications
      for (const ref of sqrefIndexArr) {
        dataVerification[ref] = {
          type: _type,
          type2: _type2,
          value1: _value1,
          value2: _value2,
          checked: false,
          remote: false,
          prohibitInput: _prohibitInput,
          hintShow: _hintShow,
          hintText: _hint,
        };
      }
    }
    return dataVerification;
  }
  /**
   * fortunesheet config of hyperlink
   *
   * @returns {IfortunesheetHyperlink} - hyperlink config
   */
  generateConfigHyperlinks() {
    var _a;
    let rows = this.readXml.getElementsByTagName(
      "hyperlinks/hyperlink",
      this.sheetFile,
    );
    let hyperlink = {};
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      let attrList = row.attributeList;
      let ref = getXmlAttibute(attrList, "ref", null),
        refArr = getMultiSequenceToNum(ref),
        _display = getXmlAttibute(attrList, "display", null),
        _address = getXmlAttibute(attrList, "location", null),
        _tooltip = getXmlAttibute(attrList, "tooltip", null);
      let _type = _address ? "internal" : "external";
      // external hyperlink
      if (!_address) {
        let rid = attrList["r:id"];
        let sheetFile = this.sheetFile;
        let relationshipList = this.readXml.getElementsByTagName(
          "Relationships/Relationship",
          `xl/worksheets/_rels/${sheetFile.replace(worksheetFilePath, "")}.rels`,
        );
        const findRid =
          relationshipList === null || relationshipList === void 0
            ? void 0
            : relationshipList.find((e) => e.attributeList["Id"] === rid);
        if (findRid) {
          _address = findRid.attributeList["Target"];
          _type =
            (_a = findRid.attributeList["TargetMode"]) === null || _a === void 0
              ? void 0
              : _a.toLocaleLowerCase();
        }
      }
      // match R1C1
      const addressReg = new RegExp(/^.*!R([\d$])+C([\d$])*$/g);
      if (addressReg.test(_address)) {
        _address = getTransR1C1ToSequence(_address);
      }
      // dynamically add hyperlinks
      for (const ref of refArr) {
        hyperlink[ref] = {
          linkAddress: _address,
          linkTooltip: _tooltip || "",
          linkType: _type,
          display: _display || "",
        };
      }
    }
    return hyperlink;
  }
}
