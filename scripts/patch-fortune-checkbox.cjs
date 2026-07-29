/**
 * Renders FortuneSheet data-validation checkboxes as centered controls and
 * makes validation-control changes refresh dependent formulas.
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

let patched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-checkbox: ${bundle} not found, skipping`);
    continue;
  }
  let source = fs.readFileSync(file, "utf8");
  let bundleOk = true;

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

  if (!bundleOk) {
    continue;
  }
  fs.writeFileSync(file, source, "utf8");
  console.log(`patch-fortune-checkbox: patched ${bundle}`);
  patched += 1;
}

if (patched !== BUNDLES.length) process.exit(1);
