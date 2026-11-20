/**
 * Postinstall script: patches @fortune-sheet/core to fix the createFilter
 * auto-range detection bug.
 *
 * Bug: when only header cell(s) are selected before "Create filter",
 * FortuneSheet sets the filter range to the header row only. Sort and filter
 * then operate on an empty range and do nothing.
 *
 * Fix: scan rows below the header to find the actual data extent and include
 * those rows in the filter range, matching Excel/Google Sheets behaviour.
 * Covers both single-cell and multi-column header selections.
 */

const fs = require("fs");
const path = require("path");

const CORE_DIST = path.join(__dirname, "..", "node_modules", "@fortune-sheet", "core", "dist");
const BUNDLES = ["index.js", "index.esm.js"];

// Patch 1: single cell selected → extend row range downward
const OLD1 = `    if (ed_c == null) {
      ed_c = flowdata[curR].length - 1;
    }
    filterSave = normalizeSelection(ctx, [{
      row: [curR, curR],
      column: [st_c || 0, ed_c]
    }]);`;

const NEW1 = `    if (ed_c == null) {
      ed_c = flowdata[curR].length - 1;
    }
    var ed_r = curR;
    for (var r = curR + 1; r < flowdata.length; r += 1) {
      var rowHasData = false;
      for (var c2 = (st_c || 0); c2 <= ed_c; c2 += 1) {
        if (flowdata[r] && flowdata[r][c2] != null && !isRealNull(flowdata[r][c2].v)) {
          rowHasData = true;
          break;
        }
      }
      if (rowHasData) { ed_r = r; } else { break; }
    }
    filterSave = normalizeSelection(ctx, [{
      row: [curR, ed_r],
      column: [st_c || 0, ed_c]
    }]);`;

// Patch 2: multi-column single-row selection → extend row range downward
// Two variants: index.esm.js uses _.assign, index.js uses ___default['default'].assign
const OLD2 = `  } else if (last.row[1] - last.row[0] < 2) {
    ctx.luckysheet_shiftpositon = _.assign({}, last);
  }`;

const OLD2_CJS = `  } else if (last.row[1] - last.row[0] < 2) {
    ctx.luckysheet_shiftpositon = ___default['default'].assign({}, last);
  }`;

const NEW2_CJS = `  } else if (last.row[1] - last.row[0] < 2) {
    ctx.luckysheet_shiftpositon = ___default['default'].assign({}, last);
    if (last.row[0] === last.row[1] && flowdata != null) {
      var headerR = last.row[0];
      var startC = last.column[0];
      var endC = last.column[1];
      var ed_r2 = headerR;
      for (var r2 = headerR + 1; r2 < flowdata.length; r2 += 1) {
        var rowHasData2 = false;
        for (var c3 = startC; c3 <= endC; c3 += 1) {
          if (flowdata[r2] && flowdata[r2][c3] != null && !isRealNull(flowdata[r2][c3].v)) {
            rowHasData2 = true;
            break;
          }
        }
        if (rowHasData2) { ed_r2 = r2; } else { break; }
      }
      if (ed_r2 > headerR) {
        filterSave = normalizeSelection(ctx, [{
          row: [headerR, ed_r2],
          column: [startC, endC]
        }]);
        ctx.luckysheet_select_save = filterSave;
      }
    }
  }`;

const NEW2 = `  } else if (last.row[1] - last.row[0] < 2) {
    ctx.luckysheet_shiftpositon = _.assign({}, last);
    if (last.row[0] === last.row[1] && flowdata != null) {
      var headerR = last.row[0];
      var startC = last.column[0];
      var endC = last.column[1];
      var ed_r2 = headerR;
      for (var r2 = headerR + 1; r2 < flowdata.length; r2 += 1) {
        var rowHasData2 = false;
        for (var c3 = startC; c3 <= endC; c3 += 1) {
          if (flowdata[r2] && flowdata[r2][c3] != null && !isRealNull(flowdata[r2][c3].v)) {
            rowHasData2 = true;
            break;
          }
        }
        if (rowHasData2) { ed_r2 = r2; } else { break; }
      }
      if (ed_r2 > headerR) {
        filterSave = normalizeSelection(ctx, [{
          row: [headerR, ed_r2],
          column: [startC, endC]
        }]);
        ctx.luckysheet_select_save = filterSave;
      }
    }
  }`;

// Patch 3: filter values list shows "(Vide)" when cell.m is missing
// Falls back to String(cell.v) so real values are displayed
const OLD3 = `      } else {
        v = cell.v;
        _m = cell.m;
      }
      var data = valuesMap.get("".concat(v));
      var text = _m == null ? filter.valueBlank : "".concat(_m);`;

const NEW3 = `      } else {
        v = cell.v;
        _m = cell.m != null ? cell.m : String(cell.v);
      }
      var data = valuesMap.get("".concat(v));
      var text = _m == null ? filter.valueBlank : "".concat(_m);`;

// Patch 4: sort respects active filter — only visible rows are reordered
// Bug: sortSelection collected ALL rows (including filter-hidden ones) and passed
// them to sortDataRange which wrote them back to contiguous positions str..edr.
// This rearranged hidden rows so config.rowhidden pointed to wrong row indices,
// causing filtered-out rows to become visible after a sort.
// Fix: skip hidden rows when building data[], then use orderbydata directly to
// sort only the visible rows and write them back to their non-contiguous positions.
const OLD4 = `  var hasMc = false;
  var data = [];
  if (edr == null) return;
  for (var _r = str; _r <= edr; _r += 1) {
    var data_row = [];
    for (var c = c1; c <= c2; c += 1) {
      var _d$_r$c;
      if (d[_r][c] != null && ((_d$_r$c = d[_r][c]) === null || _d$_r$c === void 0 ? void 0 : _d$_r$c.mc) != null) {
        hasMc = true;
        break;
      }
      data_row.push(d[_r][c]);
    }
    data.push(data_row);
  }
  if (hasMc) {
    return;
  }
  sortDataRange(ctx, d, data, colIndex, isAsc, str, edr, c1, c2);
}`;

// _ is module-scope lodash in both ESM and CJS bundles, so one pattern covers both
const NEW4 = `  var hasMc = false;
  var data = [];
  var visibleRowIndices = [];
  if (edr == null) return;
  for (var _r = str; _r <= edr; _r += 1) {
    if (!_.isNil(ctx.config.rowhidden) && !_.isNil(ctx.config.rowhidden[_r])) {
      continue;
    }
    visibleRowIndices.push(_r);
    var data_row = [];
    for (var c = c1; c <= c2; c += 1) {
      var _d$_r$c;
      if (d[_r][c] != null && ((_d$_r$c = d[_r][c]) === null || _d$_r$c === void 0 ? void 0 : _d$_r$c.mc) != null) {
        hasMc = true;
        break;
      }
      data_row.push(d[_r][c]);
    }
    data.push(data_row);
  }
  if (hasMc) {
    return;
  }
  if (visibleRowIndices.length > 0 && visibleRowIndices.length < edr - str + 1) {
    var _ob4 = orderbydata(isAsc, colIndex, data);
    var _sd4 = _ob4.sortedData;
    var _ro4 = _ob4.rowOffsets;
    for (var _vi4 = 0; _vi4 < visibleRowIndices.length; _vi4 += 1) {
      var _actualRow4 = visibleRowIndices[_vi4];
      for (var _vc4 = c1; _vc4 <= c2; _vc4 += 1) {
        var _cellSort4 = _sd4[_vi4][_vc4 - c1];
        if (_cellSort4 != null && _cellSort4.f) {
          var _ct4;
          var _moveOffset4 = _ro4[_vi4];
          var _func4 = _cellSort4.f;
          if (_moveOffset4 > 0) {
            _func4 = "=".concat(functionCopy(ctx, _func4, "down", _moveOffset4));
          } else if (_moveOffset4 < 0) {
            _func4 = "=".concat(functionCopy(ctx, _func4, "up", -_moveOffset4));
          }
          var _funcV4 = execfunction(ctx, _func4, _actualRow4, _vc4, undefined, undefined, true);
          var _fv4 = _slicedToArray(_funcV4, 3);
          _cellSort4.v = _fv4[1];
          _cellSort4.f = _fv4[2];
          _cellSort4.m = update((((_ct4 = _cellSort4.ct) === null || _ct4 === void 0 ? void 0 : _ct4.fa) || "General"), _cellSort4.v);
        }
        d[_actualRow4][_vc4] = _cellSort4;
      }
    }
    jfrefreshgrid(ctx, d, [{ row: [str, edr], column: [c1, c2] }]);
  } else {
    sortDataRange(ctx, d, data, colIndex, isAsc, str, edr, c1, c2);
  }
}`;

// Patch 5: orderbydatafiler (sort from filter dropdown) respects active filter
// Same root cause as Patch 4 but in a different function: orderbydatafiler is
// called when the user clicks "Tri croissant / décroissant" inside the filter
// column dropdown. It also passes all rows to sortDataRange without skipping
// filter-hidden rows, causing the same breakage.
const OLD5 = `  str += 1;
  var hasMc = false;
  var data = [];
  for (var r = str; r <= edr; r += 1) {
    var data_row = [];
    for (var c = stc; c <= edc; c += 1) {
      var _d$r$c;
      if (d[r][c] != null && ((_d$r$c = d[r][c]) === null || _d$r$c === void 0 ? void 0 : _d$r$c.mc) != null) {
        hasMc = true;
        break;
      }
      data_row.push(d[r][c]);
    }
    data.push(data_row);
  }
  if (hasMc) {
    var _locale = locale(ctx),
      filter = _locale.filter;
    return filter.mergeError;
  }
  sortDataRange(ctx, d, data, curr - stc, asc, str, edr, stc, edc);
  return null;
}`;

const NEW5 = `  str += 1;
  var hasMc = false;
  var data = [];
  var visibleRowIndices5 = [];
  for (var r = str; r <= edr; r += 1) {
    if (!_.isNil(ctx.config.rowhidden) && !_.isNil(ctx.config.rowhidden[r])) {
      continue;
    }
    visibleRowIndices5.push(r);
    var data_row = [];
    for (var c = stc; c <= edc; c += 1) {
      var _d$r$c;
      if (d[r][c] != null && ((_d$r$c = d[r][c]) === null || _d$r$c === void 0 ? void 0 : _d$r$c.mc) != null) {
        hasMc = true;
        break;
      }
      data_row.push(d[r][c]);
    }
    data.push(data_row);
  }
  if (hasMc) {
    var _locale = locale(ctx),
      filter = _locale.filter;
    return filter.mergeError;
  }
  if (visibleRowIndices5.length > 0 && visibleRowIndices5.length < edr - str + 1) {
    var _ob5 = orderbydata(asc, curr - stc, data);
    var _sd5 = _ob5.sortedData;
    var _ro5 = _ob5.rowOffsets;
    for (var _vi5 = 0; _vi5 < visibleRowIndices5.length; _vi5 += 1) {
      var _actualRow5 = visibleRowIndices5[_vi5];
      for (var _vc5 = stc; _vc5 <= edc; _vc5 += 1) {
        var _cellSort5 = _sd5[_vi5][_vc5 - stc];
        if (_cellSort5 != null && _cellSort5.f) {
          var _ct5;
          var _moveOffset5 = _ro5[_vi5];
          var _func5 = _cellSort5.f;
          if (_moveOffset5 > 0) {
            _func5 = "=".concat(functionCopy(ctx, _func5, "down", _moveOffset5));
          } else if (_moveOffset5 < 0) {
            _func5 = "=".concat(functionCopy(ctx, _func5, "up", -_moveOffset5));
          }
          var _funcV5 = execfunction(ctx, _func5, _actualRow5, _vc5, undefined, undefined, true);
          var _fv5 = _slicedToArray(_funcV5, 3);
          _cellSort5.v = _fv5[1];
          _cellSort5.f = _fv5[2];
          _cellSort5.m = update((((_ct5 = _cellSort5.ct) === null || _ct5 === void 0 ? void 0 : _ct5.fa) || "General"), _cellSort5.v);
        }
        d[_actualRow5][_vc5] = _cellSort5;
      }
    }
    jfrefreshgrid(ctx, d, [{ row: [str, edr], column: [stc, edc] }]);
  } else {
    sortDataRange(ctx, d, data, curr - stc, asc, str, edr, stc, edc);
  }
  return null;
}`;

// patch-fortune-formula-names.cjs runs later in postinstall and marks formulas
// produced by functionCopy() as already canonical. Accept those post-formula
// variants as valid output too, so this script remains idempotent when the
// complete postinstall chain is run again.
const NEW4_AFTER_FORMULA_PATCH = NEW4.replace(
  "execfunction(ctx, _func4, _actualRow4, _vc4, undefined, undefined, true)",
  "__doccellsExecCanonicalFormula(ctx, _func4, _actualRow4, _vc4, undefined, undefined, true)",
);
const NEW5_AFTER_FORMULA_PATCH = NEW5.replace(
  "execfunction(ctx, _func5, _actualRow5, _vc5, undefined, undefined, true)",
  "__doccellsExecCanonicalFormula(ctx, _func5, _actualRow5, _vc5, undefined, undefined, true)",
);

// Patch 6: generated sheet names use the active locale prefix.
// Upstream always returns "SheetN"; this uses sheetconfig.text so French creates
// Feuille2 while still counting existing SheetN names from older workbooks.
const OLD6 = `function generateRandomSheetName(file, isPivotTable, ctx) {
  var index = file.length;
  var locale_pivotTable = locale(ctx).pivotTable;
  var title = locale_pivotTable.title;
  for (var i = 0; i < file.length; i += 1) {
    if (file[i].name.indexOf("Sheet") > -1 || file[i].name.indexOf(title) > -1) {
      var suffix = parseFloat(file[i].name.replace("Sheet", "").replace(title, ""));
      if (!Number.isNaN(suffix) && Math.ceil(suffix) > index) {
        index = Math.ceil(suffix);
      }
    }
  }
  if (isPivotTable) {
    return title + (index + 1);
  }
  return "Sheet".concat(index + 1);
}`;

const NEW6 = `function generateRandomSheetName(file, isPivotTable, ctx) {
  var index = file.length;
  var locale_pivotTable = locale(ctx).pivotTable;
  var title = locale_pivotTable.title;
  var sheetTitle = locale(ctx).sheetconfig.text || "Sheet";
  for (var i = 0; i < file.length; i += 1) {
    if (file[i].name.indexOf("Sheet") > -1 || file[i].name.indexOf(sheetTitle) > -1 || file[i].name.indexOf(title) > -1) {
      var suffix = parseFloat(file[i].name.replace("Sheet", "").replace(sheetTitle, "").replace(title, ""));
      if (!Number.isNaN(suffix) && Math.ceil(suffix) > index) {
        index = Math.ceil(suffix);
      }
    }
  }
  if (isPivotTable) {
    return title + (index + 1);
  }
  return "".concat(sheetTitle).concat(index + 1);
}`;

// Patch 7: clear content keeps explicit cell protection.
// FortuneSheet used to replace the whole cell with {}, so an unlocked cell
// (lo=0) became locked by default after Delete/Backspace or "Clear content".
const OLD7 = `            if (!data[r]) data[r] = [];
            if (data[r] && data[r][c]) {
              data[r][c] = {};
            }
            if (hyperlinkMap && hyperlinkMap["".concat(r, "_").concat(c)]) {`;

const NEW7 = `            if (!data[r]) data[r] = [];
            if (data[r] && data[r][c]) {
              var protectionLo = data[r][c].lo;
              data[r][c] = protectionLo == null ? {} : { lo: protectionLo };
            }
            if (hyperlinkMap && hyperlinkMap["".concat(r, "_").concat(c)]) {`;

// Patch 8: formula date functions should behave like Excel and return serials.
// FormulaJS returns Date objects for date formulas and its WORKDAY result is
// off by one in several timezone/date-serial cases. FortuneSheet then displays
// Date.toString() after fill-drag. Override WORKDAY/WORKDAY.INTL and keep
// formula results as Excel serial numbers so existing date formats render them.
const OLD8_ESM = `    this.parser = new Parser();
    this.parser.on("callCellValue"`;

const OLD8_CJS = `    this.parser = new formulaParser.Parser();
    this.parser.on("callCellValue"`;

const NEW8_ESM = `    this.parser = new Parser();
    var __doccellsExcelWorkday = function __doccellsExcelWorkday(startDate, days, weekend, holidays) {
      var toSerial = function toSerial(value) {
        if (Object.prototype.toString.call(value) === "[object Date]" && !_.isNil(value)) return datenum_local(value);
        if (_.isNumber(value)) return Number.isFinite(value) ? Math.floor(value) : null;
        if (_.isString(value) && value.trim() !== "") {
          var numeric = Number(value);
          return Number.isFinite(numeric) ? Math.floor(numeric) : null;
        }
        return null;
      };
      var serial = toSerial(startDate);
      var stepCount = Number(days);
      if (serial == null || !Number.isFinite(stepCount)) return error.v;
      var weekendMap = {
        1: [0, 6], 2: [0, 1], 3: [1, 2], 4: [2, 3], 5: [3, 4], 6: [4, 5], 7: [5, 6],
        11: [0], 12: [1], 13: [2], 14: [3], 15: [4], 16: [5], 17: [6]
      };
      var weekendDays = {};
      if (_.isString(weekend) && /^[01]{7}$/.test(weekend)) {
        weekend.split("").forEach(function (flag, index) {
          if (flag === "1") weekendDays[(index + 1) % 7] = true;
        });
      } else {
        (weekendMap[Number(weekend || 1)] || weekendMap[1]).forEach(function (day) { weekendDays[day] = true; });
      }
      var holidayDays = {};
      var holidayList = _.isArray(holidays) ? holidays.flat(Infinity) : holidays == null ? [] : [holidays];
      holidayList.forEach(function (holiday) {
        var h = toSerial(holiday);
        if (h != null) holidayDays[h] = true;
      });
      var step = stepCount < 0 ? -1 : 1;
      var remaining = Math.abs(Math.trunc(stepCount));
      while (remaining > 0) {
        serial += step;
        var day = new Date(Date.UTC(1899, 11, 30) + Math.floor(serial) * 86400000).getUTCDay();
        if (!weekendDays[day] && !holidayDays[serial]) remaining -= 1;
      }
      return serial;
    };
    this.parser.setFunction("WORKDAY", function (params) { return __doccellsExcelWorkday(params[0], params[1], 1, params[2]); });
    this.parser.setFunction("WORKDAY.INTL", function (params) { return __doccellsExcelWorkday(params[0], params[1], params[2], params[3]); });
    this.parser.on("callCellValue"`;

const NEW8_CJS = `    this.parser = new formulaParser.Parser();
    var __doccellsExcelWorkday = function __doccellsExcelWorkday(startDate, days, weekend, holidays) {
      var toSerial = function toSerial(value) {
        if (Object.prototype.toString.call(value) === "[object Date]" && !___default['default'].isNil(value)) return datenum_local(value);
        if (___default['default'].isNumber(value)) return Number.isFinite(value) ? Math.floor(value) : null;
        if (___default['default'].isString(value) && value.trim() !== "") {
          var numeric = Number(value);
          return Number.isFinite(numeric) ? Math.floor(numeric) : null;
        }
        return null;
      };
      var serial = toSerial(startDate);
      var stepCount = Number(days);
      if (serial == null || !Number.isFinite(stepCount)) return error.v;
      var weekendMap = {
        1: [0, 6], 2: [0, 1], 3: [1, 2], 4: [2, 3], 5: [3, 4], 6: [4, 5], 7: [5, 6],
        11: [0], 12: [1], 13: [2], 14: [3], 15: [4], 16: [5], 17: [6]
      };
      var weekendDays = {};
      if (___default['default'].isString(weekend) && /^[01]{7}$/.test(weekend)) {
        weekend.split("").forEach(function (flag, index) {
          if (flag === "1") weekendDays[(index + 1) % 7] = true;
        });
      } else {
        (weekendMap[Number(weekend || 1)] || weekendMap[1]).forEach(function (day) { weekendDays[day] = true; });
      }
      var holidayDays = {};
      var holidayList = ___default['default'].isArray(holidays) ? holidays.flat(Infinity) : holidays == null ? [] : [holidays];
      holidayList.forEach(function (holiday) {
        var h = toSerial(holiday);
        if (h != null) holidayDays[h] = true;
      });
      var step = stepCount < 0 ? -1 : 1;
      var remaining = Math.abs(Math.trunc(stepCount));
      while (remaining > 0) {
        serial += step;
        var day = new Date(Date.UTC(1899, 11, 30) + Math.floor(serial) * 86400000).getUTCDay();
        if (!weekendDays[day] && !holidayDays[serial]) remaining -= 1;
      }
      return serial;
    };
    this.parser.setFunction("WORKDAY", function (params) { return __doccellsExcelWorkday(params[0], params[1], 1, params[2]); });
    this.parser.setFunction("WORKDAY.INTL", function (params) { return __doccellsExcelWorkday(params[0], params[1], params[2], params[3]); });
    this.parser.on("callCellValue"`;

// Patch 9: Date formula results are Excel serials, not display strings.
const OLD9_ESM = `  if (Object.prototype.toString.call(result) === "[object Date]" && !_.isNil(result)) {
    result = result.toString();
  }`;

const OLD9_CJS = `  if (Object.prototype.toString.call(result) === "[object Date]" && !___default['default'].isNil(result)) {
    result = result.toString();
  }`;

const NEW9_ESM = `  if (Object.prototype.toString.call(result) === "[object Date]" && !_.isNil(result)) {
    result = datenum_local(result);
  }`;

const NEW9_CJS = `  if (Object.prototype.toString.call(result) === "[object Date]" && !___default['default'].isNil(result)) {
    result = datenum_local(result);
  }`;

// Patch 10: fill-handle (drag down) mis-formats recalculated formula cells.
// Bug: when dragging the fill handle down over a formula cell formatted as
// "##0.00" (the toolbar's "Number" format), updateDropCell stringified the
// value and literally appended ".00" (e.g. "9.5.00" for 9.5) instead of
// applying the format properly. genarate() then saw two decimal points and
// gave up, treating the result as opaque text — so non-integer values in the
// filled range displayed as garbage like "9.5.00" while integers happened to
// look fine ("9.00"). Real copy/paste never hit this: pasteHandlerOfCopyPaste
// already calls update(value.ct.fa, funcV[1]) (SSF.format) to reformat a
// recalculated formula's value, so we make the down-fill path do the same
// thing instead of the naive genarate(string-concat) hack.
const OLD10 = `                    var _cell$ct;
                    var mask = void 0;
                    if (((_cell$ct = cell.ct) === null || _cell$ct === void 0 ? void 0 : _cell$ct.fa) === "##0.00") {
                      mask = genarate("".concat(Math.round(cell.v * 1000000000) / 1000000000, ".00"));
                      cell.m = mask[0].toString();
                    } else {
                      mask = genarate(Math.round(cell.v * 1000000000) / 1000000000);
                      cell.m = mask[0].toString();
                    }`;

const NEW10 = `                    var _cell$ct;
                    var roundedV = Math.round(cell.v * 1000000000) / 1000000000;
                    if (((_cell$ct = cell.ct) === null || _cell$ct === void 0 ? void 0 : _cell$ct.fa) != null) {
                      cell.m = update(cell.ct.fa, roundedV);
                    } else {
                      var mask = genarate(roundedV);
                      cell.m = mask[0].toString();
                    }`;

// Patch 11: consecutive fill-handle drags must translate formulas from the
// actual source cell being repeated, not merely by the destination's offset
// inside the new apply range. For example, after B3:B7 has been produced from
// =B2+1, extending that selection must make B8 reference B7. Upstream cycles
// back to B3 and shifts it by only one row, incorrectly producing =B3+1.
const OLD11_DOWN = `var f = "=".concat(functionCopy(ctx, cell.f, "down", j - apply_str_r + 1));`;
const NEW11_DOWN = `var f = "=".concat(functionCopy(ctx, cell.f, "down", j - (copy_str_r + (j - apply_str_r) % csLen)));`;

const OLD11_UP = `var _f = "=".concat(functionCopy(ctx, _cell.f, "up", apply_end_r - _j + 1));`;
const NEW11_UP = `var _f = "=".concat(functionCopy(ctx, _cell.f, "up", (copy_end_r - (apply_end_r - _j) % csLen) - _j));`;

const OLD11_RIGHT = `var _f2 = "=".concat(functionCopy(ctx, _cell2.f, "right", _j2 - apply_str_c + 1));`;
const NEW11_RIGHT = `var _f2 = "=".concat(functionCopy(ctx, _cell2.f, "right", _j2 - (copy_str_c + (_j2 - apply_str_c) % csLen)));`;

const OLD11_LEFT = `var _f3 = "=".concat(functionCopy(ctx, _cell3.f, "left", apply_end_c - _j3 + 1));`;
const NEW11_LEFT = `var _f3 = "=".concat(functionCopy(ctx, _cell3.f, "left", (copy_end_c - (apply_end_c - _j3) % csLen) - _j3));`;

// Groups: each group has variants, exactly one must match per bundle
const PATCH_GROUPS = [
  { name: "single-cell header fix",    variants: [{ old: OLD1, new: NEW1 }] },
  { name: "multi-column header fix",   variants: [{ old: OLD2, new: NEW2 }, { old: OLD2_CJS, new: NEW2_CJS }] },
  { name: "filter values blank label fix", variants: [{ old: OLD3, new: NEW3 }] },
  {
    name: "sort respects active filter",
    variants: [
      { old: OLD4, new: NEW4 },
      { old: NEW4_AFTER_FORMULA_PATCH, new: NEW4_AFTER_FORMULA_PATCH },
    ],
  },
  {
    name: "filter-dropdown sort respects active filter",
    variants: [
      { old: OLD5, new: NEW5 },
      { old: NEW5_AFTER_FORMULA_PATCH, new: NEW5_AFTER_FORMULA_PATCH },
    ],
  },
  { name: "localized generated sheet names", variants: [{ old: OLD6, new: NEW6 }] },
  { name: "clear content keeps cell protection", variants: [{ old: OLD7, new: NEW7 }] },
  {
    name: "Excel-compatible date formulas",
    variants: [{ old: OLD8_ESM, new: NEW8_ESM }, { old: OLD8_CJS, new: NEW8_CJS }],
    // Les patchs suivants (noms définis, sparklines, moteur de formules)
    // modifient ce passage : son texte complet ne s'y retrouve plus quand le
    // postinstall est rejoué, ce repère si.
    applied: "var __doccellsExcelWorkday = function __doccellsExcelWorkday(",
  },
  { name: "Date formula serial values", variants: [{ old: OLD9_ESM, new: NEW9_ESM }, { old: OLD9_CJS, new: NEW9_CJS }] },
  { name: "fill-handle down keeps number format", variants: [{ old: OLD10, new: NEW10 }] },
  { name: "fill-handle down formula source offset", variants: [{ old: OLD11_DOWN, new: NEW11_DOWN }] },
  { name: "fill-handle up formula source offset", variants: [{ old: OLD11_UP, new: NEW11_UP }] },
  { name: "fill-handle right formula source offset", variants: [{ old: OLD11_RIGHT, new: NEW11_RIGHT }] },
  { name: "fill-handle left formula source offset", variants: [{ old: OLD11_LEFT, new: NEW11_LEFT }] },
];

let allPatched = 0;
for (const bundle of BUNDLES) {
  const file = path.join(CORE_DIST, bundle);
  if (!fs.existsSync(file)) { console.warn(`patch-fortune-core: ${bundle} not found, skipping`); continue; }
  let src = fs.readFileSync(file, "utf8");
  let groupsOk = 0;
  for (const group of PATCH_GROUPS) {
    let matched = Boolean(group.applied && src.includes(group.applied));
    for (const v of matched ? [] : group.variants) {
      if (src.includes(v.old)) { src = src.replace(v.old, v.new); matched = true; break; }
      if (src.includes(v.new)) { matched = true; break; }
    }
    if (matched) { groupsOk++; }
    else { console.warn(`patch-fortune-core: [${group.name}] pattern not found in ${bundle}`); }
  }
  if (groupsOk === PATCH_GROUPS.length) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`patch-fortune-core: patched ${bundle}`);
    allPatched++;
  }
}
if (allPatched === 0) process.exit(1);
