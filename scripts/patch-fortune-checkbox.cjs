/**
 * Renders FortuneSheet data-validation checkboxes as centered controls,
 * keeps dropdown indicators visible, and makes validation-control changes
 * refresh dependent formulas.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(
  __dirname,
  "..",
  "node_modules",
  "@fortune-sheet",
  "core",
  "dist",
);
const BUNDLES = ["index.js", "index.esm.js"];

const OLD_ESM = `        var measureText = getMeasureText(value, renderCtx, this.sheetCtx);
        var textMetrics = measureText.width + 14;
        var oneLineTextHeight = measureText.actualBoundingBoxDescent + measureText.actualBoundingBoxAscent;
        var horizonAlignPos = pos_x + space_width;
        if (horizonAlign === 0) {
          horizonAlignPos = pos_x + cellWidth / 2 - textMetrics / 2;
        } else if (horizonAlign === 2) {
          horizonAlignPos = pos_x + cellWidth - space_width - textMetrics;
        }
        var verticalCellHeight = cellHeight > oneLineTextHeight ? cellHeight : oneLineTextHeight;
        var verticalAlignPos_text = pos_y + verticalCellHeight - space_height;
        renderCtx.textBaseline = "bottom";
        var verticalAlignPos_checkbox = verticalAlignPos_text - 13 * this.sheetCtx.zoomRatio;
        if (verticalAlign === 0) {
          verticalAlignPos_text = pos_y + verticalCellHeight / 2;
          renderCtx.textBaseline = "middle";
          verticalAlignPos_checkbox = verticalAlignPos_text - 6 * this.sheetCtx.zoomRatio;
        } else if (verticalAlign === 1) {
          verticalAlignPos_text = pos_y + space_height;
          renderCtx.textBaseline = "top";
          verticalAlignPos_checkbox = verticalAlignPos_text + 1 * this.sheetCtx.zoomRatio;
        }
        horizonAlignPos /= this.sheetCtx.zoomRatio;
        verticalAlignPos_text /= this.sheetCtx.zoomRatio;
        verticalAlignPos_checkbox /= this.sheetCtx.zoomRatio;
        renderCtx.lineWidth = 1;
        renderCtx.strokeStyle = "#000";
        renderCtx.strokeRect(horizonAlignPos, verticalAlignPos_checkbox, 10, 10);
        if (dataVerification["".concat(r, "_").concat(c)].checked) {
          renderCtx.beginPath();
          renderCtx.lineTo(horizonAlignPos + 1, verticalAlignPos_checkbox + 6);
          renderCtx.lineTo(horizonAlignPos + 4, verticalAlignPos_checkbox + 9);
          renderCtx.lineTo(horizonAlignPos + 9, verticalAlignPos_checkbox + 2);
          renderCtx.stroke();
          renderCtx.closePath();
        }
        renderCtx.fillStyle = normalizedAttr(flowdata, r, c, "fc");
        renderCtx.fillText(_.isNil(value) ? "" : value, horizonAlignPos + 14, verticalAlignPos_text);`;

const OLD_CJS = OLD_ESM.replace(
  `renderCtx.fillText(_.isNil(value) ? "" : value, horizonAlignPos + 14, verticalAlignPos_text);`,
  `renderCtx.fillText(___default['default'].isNil(value) ? "" : value, horizonAlignPos + 14, verticalAlignPos_text);`,
);

const REPLACEMENT = `        var checkboxSize = 14;
        var checkboxRadius = 2;
        var horizonAlignPos = Math.round((pos_x + cellWidth / 2) / this.sheetCtx.zoomRatio - checkboxSize / 2);
        var verticalAlignPos_checkbox = Math.round((pos_y + cellHeight / 2) / this.sheetCtx.zoomRatio - checkboxSize / 2);
        var checkboxItem = dataVerification["".concat(r, "_").concat(c)];
        var checkboxChecked = checkboxItem.checked || value === checkboxItem.value1;
        renderCtx.beginPath();
        renderCtx.moveTo(horizonAlignPos + checkboxRadius, verticalAlignPos_checkbox);
        renderCtx.lineTo(horizonAlignPos + checkboxSize - checkboxRadius, verticalAlignPos_checkbox);
        renderCtx.quadraticCurveTo(horizonAlignPos + checkboxSize, verticalAlignPos_checkbox, horizonAlignPos + checkboxSize, verticalAlignPos_checkbox + checkboxRadius);
        renderCtx.lineTo(horizonAlignPos + checkboxSize, verticalAlignPos_checkbox + checkboxSize - checkboxRadius);
        renderCtx.quadraticCurveTo(horizonAlignPos + checkboxSize, verticalAlignPos_checkbox + checkboxSize, horizonAlignPos + checkboxSize - checkboxRadius, verticalAlignPos_checkbox + checkboxSize);
        renderCtx.lineTo(horizonAlignPos + checkboxRadius, verticalAlignPos_checkbox + checkboxSize);
        renderCtx.quadraticCurveTo(horizonAlignPos, verticalAlignPos_checkbox + checkboxSize, horizonAlignPos, verticalAlignPos_checkbox + checkboxSize - checkboxRadius);
        renderCtx.lineTo(horizonAlignPos, verticalAlignPos_checkbox + checkboxRadius);
        renderCtx.quadraticCurveTo(horizonAlignPos, verticalAlignPos_checkbox, horizonAlignPos + checkboxRadius, verticalAlignPos_checkbox);
        renderCtx.closePath();
        renderCtx.lineWidth = 2;
        renderCtx.lineJoin = "round";
        if (checkboxChecked) {
          renderCtx.fillStyle = "#1a73e8";
          renderCtx.fill();
          renderCtx.strokeStyle = "#1a73e8";
          renderCtx.stroke();
          renderCtx.beginPath();
          renderCtx.moveTo(horizonAlignPos + 3, verticalAlignPos_checkbox + 7);
          renderCtx.lineTo(horizonAlignPos + 6, verticalAlignPos_checkbox + 10);
          renderCtx.lineTo(horizonAlignPos + 11, verticalAlignPos_checkbox + 4);
          renderCtx.lineWidth = 2;
          renderCtx.lineCap = "round";
          renderCtx.lineJoin = "round";
          renderCtx.strokeStyle = "#fff";
          renderCtx.stroke();
        } else {
          renderCtx.strokeStyle = "#7d7f82";
          renderCtx.stroke();
        }`;

const OLD_CHECKBOX_CHANGE = `  var d = getFlowdata(ctx);
  setCellValue(ctx, r, c, d, value);
}`;

const NEW_CHECKBOX_CHANGE = `  var d = getFlowdata(ctx);
  execFunctionGroup(ctx, r, c, value);
  setCellValue(ctx, r, c, d, value);
}`;

const OLD_DROPDOWN_CHANGE = `  setCellValue(ctx, rowIndex, colIndex, d, value);
  jfrefreshgrid(ctx, null, undefined);
}`;

const NEW_DROPDOWN_CHANGE = `  execFunctionGroup(ctx, rowIndex, colIndex, value);
  setCellValue(ctx, rowIndex, colIndex, d, value);
  jfrefreshgrid(ctx, null, undefined);
}`;

const OLD_DROPDOWN_FOCUS = `  if (item.type === "dropdown") {
    dropDownBtn.style.display = "block";
    dropDownBtn.style.maxWidth = "".concat(col - col_pre, "px");
    dropDownBtn.style.maxHeight = "".concat(row - row_pre, "px");
    dropDownBtn.style.left = "".concat(col - 20, "px");
    dropDownBtn.style.top = "".concat(row_pre + (row - row_pre - 20) / 2 - 2, "px");
  }`;

const NEW_DROPDOWN_FOCUS = `  if (item.type === "dropdown") {
    if (clickMode) {
      ctx.dataVerificationDropDownList = true;
    }
    dropDownBtn.style.display = "block";
    dropDownBtn.style.width = "".concat(Math.max(0, col - col_pre - 10), "px");
    dropDownBtn.style.height = "".concat(Math.max(0, row - row_pre - 6), "px");
    dropDownBtn.style.maxWidth = "".concat(col - col_pre, "px");
    dropDownBtn.style.maxHeight = "".concat(row - row_pre, "px");
    dropDownBtn.style.left = "".concat(col_pre + 5, "px");
    dropDownBtn.style.top = "".concat(row_pre + 3, "px");
  }`;

const OLD_DROPDOWN_ARROW = `        var dropdownArrowX = endX + offsetLeft - 8 * this.sheetCtx.zoomRatio;
        var dropdownArrowY = (startY + endY) / 2 + offsetTop;
        var dropdownArrowSize = 3 * this.sheetCtx.zoomRatio;
        renderCtx.beginPath();
        renderCtx.moveTo(dropdownArrowX - dropdownArrowSize, dropdownArrowY - dropdownArrowSize / 2);
        renderCtx.lineTo(dropdownArrowX + dropdownArrowSize, dropdownArrowY - dropdownArrowSize / 2);
        renderCtx.lineTo(dropdownArrowX, dropdownArrowY + dropdownArrowSize / 2);
        renderCtx.closePath();
        renderCtx.fillStyle = "#6b7280";`;

const NEW_DROPDOWN_ARROW = `        var dropdownArrowX = endX + offsetLeft - 22 * this.sheetCtx.zoomRatio;
        var dropdownArrowY = (startY + endY) / 2 + offsetTop + 0.5 * this.sheetCtx.zoomRatio;
        var dropdownArrowHalfWidth = 4.5 * this.sheetCtx.zoomRatio;
        var dropdownArrowHalfHeight = 3 * this.sheetCtx.zoomRatio;
        renderCtx.beginPath();
        renderCtx.moveTo(dropdownArrowX - dropdownArrowHalfWidth, dropdownArrowY - dropdownArrowHalfHeight);
        renderCtx.lineTo(dropdownArrowX + dropdownArrowHalfWidth, dropdownArrowY - dropdownArrowHalfHeight);
        renderCtx.lineTo(dropdownArrowX, dropdownArrowY + dropdownArrowHalfHeight);
        renderCtx.closePath();
        renderCtx.fillStyle = "#202124";`;

const OLD_NULL_DROPDOWN_ARROW = `        var nullDropdownArrowX = endX + offsetLeft - 8 * nullDropdownZoom;
        var nullDropdownArrowY = (startY + endY) / 2 + offsetTop;
        var nullDropdownArrowSize = 3 * nullDropdownZoom;
        renderCtx.beginPath();
        renderCtx.moveTo(nullDropdownArrowX - nullDropdownArrowSize, nullDropdownArrowY - nullDropdownArrowSize / 2);
        renderCtx.lineTo(nullDropdownArrowX + nullDropdownArrowSize, nullDropdownArrowY - nullDropdownArrowSize / 2);
        renderCtx.lineTo(nullDropdownArrowX, nullDropdownArrowY + nullDropdownArrowSize / 2);`;

const NEW_NULL_DROPDOWN_ARROW = `        var nullDropdownArrowX = endX + offsetLeft - 22 * nullDropdownZoom;
        var nullDropdownArrowY = (startY + endY) / 2 + offsetTop + 0.5 * nullDropdownZoom;
        var nullDropdownArrowHalfWidth = 4.5 * nullDropdownZoom;
        var nullDropdownArrowHalfHeight = 3 * nullDropdownZoom;
        renderCtx.beginPath();
        renderCtx.moveTo(nullDropdownArrowX - nullDropdownArrowHalfWidth, nullDropdownArrowY - nullDropdownArrowHalfHeight);
        renderCtx.lineTo(nullDropdownArrowX + nullDropdownArrowHalfWidth, nullDropdownArrowY - nullDropdownArrowHalfHeight);
        renderCtx.lineTo(nullDropdownArrowX, nullDropdownArrowY + nullDropdownArrowHalfHeight);`;

const DROPDOWN_RENDER = `      var dropdownRenderItem = dataVerification === null || dataVerification === void 0 ? void 0 : dataVerification["".concat(r, "_").concat(c)];
      if ((dropdownRenderItem === null || dropdownRenderItem === void 0 ? void 0 : dropdownRenderItem.type) === "dropdown") {
        var dropdownArrowX = endX + offsetLeft - 22 * this.sheetCtx.zoomRatio;
        var dropdownArrowY = (startY + endY) / 2 + offsetTop + 0.5 * this.sheetCtx.zoomRatio;
        var dropdownArrowHalfWidth = 4.5 * this.sheetCtx.zoomRatio;
        var dropdownArrowHalfHeight = 3 * this.sheetCtx.zoomRatio;
        renderCtx.beginPath();
        renderCtx.moveTo(dropdownArrowX - dropdownArrowHalfWidth, dropdownArrowY - dropdownArrowHalfHeight);
        renderCtx.lineTo(dropdownArrowX + dropdownArrowHalfWidth, dropdownArrowY - dropdownArrowHalfHeight);
        renderCtx.lineTo(dropdownArrowX, dropdownArrowY + dropdownArrowHalfHeight);
        renderCtx.closePath();
        renderCtx.fillStyle = "#202124";
        renderCtx.fill();
      }
`;

const OLD_DROPDOWN_BACKGROUND = `        var dropdownBackgroundItem = dataVerification === null || dataVerification === void 0 ? void 0 : dataVerification["".concat(r, "_").concat(c)];
        if ((dropdownBackgroundItem === null || dropdownBackgroundItem === void 0 ? void 0 : dropdownBackgroundItem.type) === "dropdown") {
          var dropdownZoom = this.sheetCtx.zoomRatio;
          var dropdownPillX = startX + offsetLeft + 5 * dropdownZoom;
          var dropdownPillY = startY + offsetTop + 3 * dropdownZoom;
          var dropdownPillWidth = Math.max(12 * dropdownZoom, cellWidth - 10 * dropdownZoom);
          var dropdownPillHeight = Math.max(12 * dropdownZoom, cellHeight - 6 * dropdownZoom);
          var dropdownPillRadius = Math.min(dropdownPillHeight / 2, 10 * dropdownZoom);
          renderCtx.beginPath();
          renderCtx.moveTo(dropdownPillX + dropdownPillRadius, dropdownPillY);
          renderCtx.lineTo(dropdownPillX + dropdownPillWidth - dropdownPillRadius, dropdownPillY);
          renderCtx.quadraticCurveTo(dropdownPillX + dropdownPillWidth, dropdownPillY, dropdownPillX + dropdownPillWidth, dropdownPillY + dropdownPillRadius);
          renderCtx.lineTo(dropdownPillX + dropdownPillWidth, dropdownPillY + dropdownPillHeight - dropdownPillRadius);
          renderCtx.quadraticCurveTo(dropdownPillX + dropdownPillWidth, dropdownPillY + dropdownPillHeight, dropdownPillX + dropdownPillWidth - dropdownPillRadius, dropdownPillY + dropdownPillHeight);
          renderCtx.lineTo(dropdownPillX + dropdownPillRadius, dropdownPillY + dropdownPillHeight);
          renderCtx.quadraticCurveTo(dropdownPillX, dropdownPillY + dropdownPillHeight, dropdownPillX, dropdownPillY + dropdownPillHeight - dropdownPillRadius);
          renderCtx.lineTo(dropdownPillX, dropdownPillY + dropdownPillRadius);
          renderCtx.quadraticCurveTo(dropdownPillX, dropdownPillY, dropdownPillX + dropdownPillRadius, dropdownPillY);
          renderCtx.closePath();
          renderCtx.fillStyle = "#e8eaed";
          renderCtx.fill();
        }
`;

const DROPDOWN_BACKGROUND = OLD_DROPDOWN_BACKGROUND.replace(
  `          renderCtx.fillStyle = "#e8eaed";`,
  `          renderCtx.fillStyle = this.sheetCtx.doccellsDropdownHoverCell === "".concat(r, "_").concat(c) ? "#d3d6da" : "#e8eaed";`,
);

const DROPDOWN_BACKGROUND_ANCHOR =
  `      } else {
        var _checksCF$dataBar`;

const OLD_NULL_DROPDOWN_RENDER = `      var nullDropdownSheetIndex = getSheetIndex(this.sheetCtx, this.sheetCtx.currentSheetId);
      var nullDropdownDataVerification = this.sheetCtx.luckysheetfile[nullDropdownSheetIndex].dataVerification;
      var nullDropdownItem = nullDropdownDataVerification === null || nullDropdownDataVerification === void 0 ? void 0 : nullDropdownDataVerification["".concat(r, "_").concat(c)];
      if ((nullDropdownItem === null || nullDropdownItem === void 0 ? void 0 : nullDropdownItem.type) === "dropdown") {
        var nullDropdownZoom = this.sheetCtx.zoomRatio;
        var nullDropdownCellWidth = endX - startX - 2;
        var nullDropdownCellHeight = endY - startY - 2;
        var nullDropdownPillX = startX + offsetLeft + 5 * nullDropdownZoom;
        var nullDropdownPillY = startY + offsetTop + 3 * nullDropdownZoom;
        var nullDropdownPillWidth = Math.max(12 * nullDropdownZoom, nullDropdownCellWidth - 10 * nullDropdownZoom);
        var nullDropdownPillHeight = Math.max(12 * nullDropdownZoom, nullDropdownCellHeight - 6 * nullDropdownZoom);
        var nullDropdownPillRadius = Math.min(nullDropdownPillHeight / 2, 10 * nullDropdownZoom);
        renderCtx.beginPath();
        renderCtx.moveTo(nullDropdownPillX + nullDropdownPillRadius, nullDropdownPillY);
        renderCtx.lineTo(nullDropdownPillX + nullDropdownPillWidth - nullDropdownPillRadius, nullDropdownPillY);
        renderCtx.quadraticCurveTo(nullDropdownPillX + nullDropdownPillWidth, nullDropdownPillY, nullDropdownPillX + nullDropdownPillWidth, nullDropdownPillY + nullDropdownPillRadius);
        renderCtx.lineTo(nullDropdownPillX + nullDropdownPillWidth, nullDropdownPillY + nullDropdownPillHeight - nullDropdownPillRadius);
        renderCtx.quadraticCurveTo(nullDropdownPillX + nullDropdownPillWidth, nullDropdownPillY + nullDropdownPillHeight, nullDropdownPillX + nullDropdownPillWidth - nullDropdownPillRadius, nullDropdownPillY + nullDropdownPillHeight);
        renderCtx.lineTo(nullDropdownPillX + nullDropdownPillRadius, nullDropdownPillY + nullDropdownPillHeight);
        renderCtx.quadraticCurveTo(nullDropdownPillX, nullDropdownPillY + nullDropdownPillHeight, nullDropdownPillX, nullDropdownPillY + nullDropdownPillHeight - nullDropdownPillRadius);
        renderCtx.lineTo(nullDropdownPillX, nullDropdownPillY + nullDropdownPillRadius);
        renderCtx.quadraticCurveTo(nullDropdownPillX, nullDropdownPillY, nullDropdownPillX + nullDropdownPillRadius, nullDropdownPillY);
        renderCtx.closePath();
        renderCtx.fillStyle = "#e8eaed";
        renderCtx.fill();
        var nullDropdownArrowX = endX + offsetLeft - 22 * nullDropdownZoom;
        var nullDropdownArrowY = (startY + endY) / 2 + offsetTop + 0.5 * nullDropdownZoom;
        var nullDropdownArrowHalfWidth = 4.5 * nullDropdownZoom;
        var nullDropdownArrowHalfHeight = 3 * nullDropdownZoom;
        renderCtx.beginPath();
        renderCtx.moveTo(nullDropdownArrowX - nullDropdownArrowHalfWidth, nullDropdownArrowY - nullDropdownArrowHalfHeight);
        renderCtx.lineTo(nullDropdownArrowX + nullDropdownArrowHalfWidth, nullDropdownArrowY - nullDropdownArrowHalfHeight);
        renderCtx.lineTo(nullDropdownArrowX, nullDropdownArrowY + nullDropdownArrowHalfHeight);
        renderCtx.closePath();
        renderCtx.fillStyle = "#202124";
        renderCtx.fill();
      }
`;

const NULL_DROPDOWN_RENDER = OLD_NULL_DROPDOWN_RENDER.replace(
  `        renderCtx.fillStyle = "#e8eaed";`,
  `        renderCtx.fillStyle = this.sheetCtx.doccellsDropdownHoverCell === "".concat(r, "_").concat(c) ? "#d3d6da" : "#e8eaed";`,
);

const NULL_DROPDOWN_RENDER_ANCHOR =
  `      renderCtx.fillRect(cellsize[0], cellsize[1], cellsize[2], cellsize[3]);
      if ("".concat(r, "_").concat(c) in dynamicArrayCompute) {`;

const DROPDOWN_RENDER_ANCHOR =
  `      (_this$sheetCtx$hooks$9 = (_this$sheetCtx$hooks9 = this.sheetCtx.hooks).afterRenderCell)`;

const OLD_EMPTY_VALIDATION = `      if ((dataVerification === null || dataVerification === void 0 ? void 0 : dataVerification["".concat(r, "_").concat(c)]) && !validateCellData(this.sheetCtx, dataVerification["".concat(r, "_").concat(c)], value)) {`;

const NEW_EMPTY_VALIDATION = `      if ((dataVerification === null || dataVerification === void 0 ? void 0 : dataVerification["".concat(r, "_").concat(c)]) && !isRealNull(value) && !validateCellData(this.sheetCtx, dataVerification["".concat(r, "_").concat(c)], value)) {`;

const OLD_DROPDOWN_RANGE_VALUE = `        if (!cell || !cell.v) {
          continue;
        }
        var v = cell.m || cell.v;`;

const NEW_DROPDOWN_RANGE_VALUE = `        if (!cell || isRealNull(cell.v)) {
          continue;
        }
        var v = isRealNull(cell.m) ? cell.v : cell.m;`;

const OLD_DROPDOWN_HOVER = `function handleOverlayMouseMove(ctx, globalCache, e, cellInput, scrollX, scrollY, container, fxInput) {
  if (onCommentBoxResize(ctx, globalCache, e)) return;`;

const NEW_DROPDOWN_HOVER = `function handleOverlayMouseMove(ctx, globalCache, e, cellInput, scrollX, scrollY, container, fxInput) {
  var dropdownHoverCell = getCellRowColumn(ctx, e, container, scrollX, scrollY);
  var dropdownHoverKey;
  if (dropdownHoverCell != null) {
    var dropdownHoverSheetIndex = getSheetIndex(ctx, ctx.currentSheetId);
    var dropdownHoverRules = dropdownHoverSheetIndex == null ? null : ctx.luckysheetfile[dropdownHoverSheetIndex].dataVerification;
    var dropdownHoverItem = dropdownHoverRules === null || dropdownHoverRules === void 0 ? void 0 : dropdownHoverRules["".concat(dropdownHoverCell.r, "_").concat(dropdownHoverCell.c)];
    if ((dropdownHoverItem === null || dropdownHoverItem === void 0 ? void 0 : dropdownHoverItem.type) === "dropdown") {
      dropdownHoverKey = "".concat(dropdownHoverCell.r, "_").concat(dropdownHoverCell.c);
    }
  }
  if (ctx.doccellsDropdownHoverCell !== dropdownHoverKey) {
    ctx.doccellsDropdownHoverCell = dropdownHoverKey;
  }
  if (onCommentBoxResize(ctx, globalCache, e)) return;`;

const OLD_EMPTY_FORMULA_REFERENCE = `    key: "tryGetCellAsNumber",
    value: function tryGetCellAsNumber(cell) {
      var _cell$ct;
      if ((cell === null || cell === void 0 ? void 0 : (_cell$ct = cell.ct) === null || _cell$ct === void 0 ? void 0 : _cell$ct.t) === "n") {`;

const NEW_EMPTY_FORMULA_REFERENCE = `    key: "tryGetCellAsNumber",
    value: function tryGetCellAsNumber(cell) {
      var _cell$ct;
      if (cell == null || isRealNull(cell.v)) {
        return "";
      }
      if ((cell === null || cell === void 0 ? void 0 : (_cell$ct = cell.ct) === null || _cell$ct === void 0 ? void 0 : _cell$ct.t) === "n") {`;

const OLD_DROPDOWN_TEXT_RENDER = `        this.cellTextRender(textInfo, renderCtx, {
          pos_x: _pos_x,
          pos_y: _pos_y
        });
        renderCtx.restore();`;

const NEW_DROPDOWN_TEXT_RENDER = `        if ((dropdownBackgroundItem === null || dropdownBackgroundItem === void 0 ? void 0 : dropdownBackgroundItem.type) === "dropdown" && !isRealNull(value)) {
          var dropdownTextZoom = this.sheetCtx.zoomRatio;
          var dropdownTextX = _pos_x + 12 * dropdownTextZoom;
          var dropdownTextY = (startY + endY) / 2 + offsetTop + 0.5 * dropdownTextZoom;
          var dropdownTextWidth = Math.max(0, cellWidth - 44 * dropdownTextZoom);
          renderCtx.save();
          renderCtx.beginPath();
          renderCtx.rect(dropdownTextX / dropdownTextZoom, _pos_y / dropdownTextZoom, dropdownTextWidth / dropdownTextZoom, cellHeight / dropdownTextZoom);
          renderCtx.clip();
          renderCtx.textAlign = "left";
          renderCtx.textBaseline = "middle";
          renderCtx.fillText(String(value), dropdownTextX / dropdownTextZoom, dropdownTextY / dropdownTextZoom);
          renderCtx.restore();
        } else {
          this.cellTextRender(textInfo, renderCtx, {
            pos_x: _pos_x,
            pos_y: _pos_y
          });
        }
        renderCtx.restore();`;

const OLD_DELETE_VALIDATION = `      var sheetIndex = getSheetIndex(ctx, ctx.currentSheetId);
      if (sheetIndex !== null && ctx.luckysheetfile[sheetIndex].data) {
        var _ctx$luckysheetfile$s;
        var _ref = (_ctx$luckysheetfile$s = ctx.luckysheetfile[sheetIndex]) !== null && _ctx$luckysheetfile$s !== void 0 ? _ctx$luckysheetfile$s : {},
          _ref$data = _ref.data,
          data = _ref$data === void 0 ? [] : _ref$data;`;

const NEW_DELETE_VALIDATION = `      var sheetIndex = getSheetIndex(ctx, ctx.currentSheetId);
      if (sheetIndex !== null && ctx.luckysheetfile[sheetIndex].data) {
        var _ctx$luckysheetfile$s;
        var _ref = (_ctx$luckysheetfile$s = ctx.luckysheetfile[sheetIndex]) !== null && _ctx$luckysheetfile$s !== void 0 ? _ctx$luckysheetfile$s : {},
          _ref$data = _ref.data,
          data = _ref$data === void 0 ? [] : _ref$data;
        var selectedDataVerification = ctx.luckysheetfile[sheetIndex].dataVerification;`;

const OLD_DELETE_VALIDATION_CELL = `            if (hyperlinkMap && hyperlinkMap["".concat(r, "_").concat(c)]) {
              delete hyperlinkMap["".concat(r, "_").concat(c)];
            }`;

const NEW_DELETE_VALIDATION_CELL = `            if (hyperlinkMap && hyperlinkMap["".concat(r, "_").concat(c)]) {
              delete hyperlinkMap["".concat(r, "_").concat(c)];
            }
            if (selectedDataVerification && selectedDataVerification["".concat(r, "_").concat(c)]) {
              delete selectedDataVerification["".concat(r, "_").concat(c)];
            }`;

let patched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-checkbox: ${bundle} not found, skipping`);
    continue;
  }
  let source = fs.readFileSync(file, "utf8");
  let bundleOk = true;
  source = source
    .replace(OLD_DROPDOWN_ARROW, NEW_DROPDOWN_ARROW)
    .replace(OLD_NULL_DROPDOWN_ARROW, NEW_NULL_DROPDOWN_ARROW)
    .replace(OLD_DROPDOWN_BACKGROUND, DROPDOWN_BACKGROUND)
    .replace(OLD_NULL_DROPDOWN_RENDER, NULL_DROPDOWN_RENDER);

  if (!source.includes(REPLACEMENT)) {
    const pattern = bundle === "index.esm.js" ? OLD_ESM : OLD_CJS;
    if (!source.includes(pattern)) {
      console.warn(
        `patch-fortune-checkbox: render pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(pattern, REPLACEMENT);
    }
  }

  if (!source.includes(NEW_CHECKBOX_CHANGE)) {
    if (!source.includes(OLD_CHECKBOX_CHANGE)) {
      console.warn(
        `patch-fortune-checkbox: checkbox update pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(OLD_CHECKBOX_CHANGE, NEW_CHECKBOX_CHANGE);
    }
  }

  if (!source.includes(NEW_DROPDOWN_CHANGE)) {
    if (!source.includes(OLD_DROPDOWN_CHANGE)) {
      console.warn(
        `patch-fortune-checkbox: dropdown update pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(OLD_DROPDOWN_CHANGE, NEW_DROPDOWN_CHANGE);
    }
  }

  if (!source.includes(NEW_DROPDOWN_FOCUS)) {
    if (!source.includes(OLD_DROPDOWN_FOCUS)) {
      console.warn(
        `patch-fortune-checkbox: dropdown focus pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(OLD_DROPDOWN_FOCUS, NEW_DROPDOWN_FOCUS);
    }
  }

  if (!source.includes(DROPDOWN_RENDER)) {
    if (!source.includes(DROPDOWN_RENDER_ANCHOR)) {
      console.warn(
        `patch-fortune-checkbox: dropdown render pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        DROPDOWN_RENDER_ANCHOR,
        `${DROPDOWN_RENDER}${DROPDOWN_RENDER_ANCHOR}`,
      );
    }
  }

  if (!source.includes(DROPDOWN_BACKGROUND)) {
    if (!source.includes(DROPDOWN_BACKGROUND_ANCHOR)) {
      console.warn(
        `patch-fortune-checkbox: dropdown background pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        DROPDOWN_BACKGROUND_ANCHOR,
        `      } else {\n${DROPDOWN_BACKGROUND}        var _checksCF$dataBar`,
      );
    }
  }

  if (!source.includes(NULL_DROPDOWN_RENDER)) {
    if (!source.includes(NULL_DROPDOWN_RENDER_ANCHOR)) {
      console.warn(
        `patch-fortune-checkbox: empty dropdown render pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        NULL_DROPDOWN_RENDER_ANCHOR,
        `      renderCtx.fillRect(cellsize[0], cellsize[1], cellsize[2], cellsize[3]);\n${NULL_DROPDOWN_RENDER}      if ("".concat(r, "_").concat(c) in dynamicArrayCompute) {`,
      );
    }
  }

  if (!source.includes(NEW_EMPTY_VALIDATION)) {
    if (!source.includes(OLD_EMPTY_VALIDATION)) {
      console.warn(
        `patch-fortune-checkbox: empty validation pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(OLD_EMPTY_VALIDATION, NEW_EMPTY_VALIDATION);
    }
  }

  if (!source.includes(NEW_DROPDOWN_RANGE_VALUE)) {
    if (!source.includes(OLD_DROPDOWN_RANGE_VALUE)) {
      console.warn(
        `patch-fortune-checkbox: dropdown range value pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        OLD_DROPDOWN_RANGE_VALUE,
        NEW_DROPDOWN_RANGE_VALUE,
      );
    }
  }

  if (!source.includes(NEW_DROPDOWN_HOVER)) {
    if (!source.includes(OLD_DROPDOWN_HOVER)) {
      console.warn(
        `patch-fortune-checkbox: dropdown hover pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(OLD_DROPDOWN_HOVER, NEW_DROPDOWN_HOVER);
    }
  }

  if (!source.includes(NEW_EMPTY_FORMULA_REFERENCE)) {
    if (!source.includes(OLD_EMPTY_FORMULA_REFERENCE)) {
      console.warn(
        `patch-fortune-checkbox: empty formula reference pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        OLD_EMPTY_FORMULA_REFERENCE,
        NEW_EMPTY_FORMULA_REFERENCE,
      );
    }
  }

  if (!source.includes(NEW_DROPDOWN_TEXT_RENDER)) {
    if (!source.includes(OLD_DROPDOWN_TEXT_RENDER)) {
      console.warn(
        `patch-fortune-checkbox: dropdown text pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        OLD_DROPDOWN_TEXT_RENDER,
        NEW_DROPDOWN_TEXT_RENDER,
      );
    }
  }

  if (!source.includes(NEW_DELETE_VALIDATION)) {
    if (!source.includes(OLD_DELETE_VALIDATION)) {
      console.warn(
        `patch-fortune-checkbox: delete validation pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        OLD_DELETE_VALIDATION,
        NEW_DELETE_VALIDATION,
      );
    }
  }

  if (!source.includes(NEW_DELETE_VALIDATION_CELL)) {
    if (!source.includes(OLD_DELETE_VALIDATION_CELL)) {
      console.warn(
        `patch-fortune-checkbox: delete validation cell pattern not found in ${bundle}`,
      );
      bundleOk = false;
    } else {
      source = source.replace(
        OLD_DELETE_VALIDATION_CELL,
        NEW_DELETE_VALIDATION_CELL,
      );
    }
  }

  if (!bundleOk) {
    continue;
  }
  fs.writeFileSync(file, source, "utf8");
  console.log(`patch-fortune-checkbox: patched ${bundle}`);
  patched += 1;
}

if (patched !== BUNDLES.length) process.exit(1);
