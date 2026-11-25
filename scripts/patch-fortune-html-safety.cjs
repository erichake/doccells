/**
 * Postinstall script: FortuneSheet writes cell content into the DOM with
 * innerHTML in several places without escaping it. A workbook loaded from an
 * untrusted source (embedded mode, EMBED.md: an archive passed by the host)
 * could then run script in DocCells' page, and in a same-origin host page.
 *
 * Core (@fortune-sheet/core):
 *   1. escapeHTMLTag escapes &, <, >, quotes. It used to return unchanged any
 *      text starting with "=" (formulas) or "<span": now only a sequence of
 *      plain spans passes unchanged (the HTML of getInlineStringHTML and of
 *      functionHTMLGenerate, whose texts are escaped by 2 and 3).
 *   2. getInlineStringHTML escapes each part's text and cleans its style.
 *   3. functionHTML (formula colouring while editing) escapes the text of
 *      string literals and other operands; findrangeindex counts the
 *      characters of the text, not of its entities (typing "<" or ">" put the
 *      caret out of the text, and the exception unmounted the application).
 *   4. handleFormulaInput: text copied to the formula bar is escaped.
 *   5. Range text (sheet names) inserted into the formula editor is escaped.
 *   6. Data validation hint and failure texts are escaped.
 *   7. The HTML table built for Copy is sanitized before being put in the
 *      page (cell styles, sizes and colours are concatenated into it).
 * React (@fortune-sheet/react):
 *   8. Comments (stored as HTML) are sanitized before being shown.
 *
 * The sanitizer parses the HTML in an inert document (DOMParser: no script,
 * no image loading), keeps a short list of formatting tags and attributes,
 * and serializes the result.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "node_modules", "@fortune-sheet");
const MARKER = "/* __doccells_html_safety__ */";

const SANITIZER = `
function __doccellsSanitizeHtml(html) {
  if (typeof html !== "string" || !/[<&]/.test(html)) return html;
  if (typeof DOMParser === "undefined") return __doccellsEscapeHtml(html);
  var doc = new DOMParser().parseFromString("<!doctype html><body>" + html, "text/html");
  var tags = /^(B|BR|COL|COLGROUP|DIV|EM|FONT|I|P|S|SPAN|STRIKE|STRONG|TABLE|TBODY|TD|TH|THEAD|TR|U)$/;
  var dropped = /^(SCRIPT|STYLE|TEMPLATE|IFRAME|FRAME|OBJECT|EMBED|SVG|MATH|NOSCRIPT|TEXTAREA|TITLE|XMP|NOEMBED|NOFRAMES|PLAINTEXT|SELECT|LINK|META|BASE)$/i;
  var attributes = /^(align|class|color|colspan|data-type|dir|face|height|index|rowspan|size|style|valign|width)$/;
  var unsafeValue = /url\\s*\\(|expression\\s*\\(|javascript:|@import|behavior/i;
  var clean = function (node) {
    var children = Array.prototype.slice.call(node.childNodes);
    for (var i = 0; i < children.length; i += 1) {
      var child = children[i];
      if (child.nodeType === 3) continue;
      if (child.nodeType !== 1 || dropped.test(child.tagName)) {
        node.removeChild(child);
        continue;
      }
      clean(child);
      if (!tags.test(child.tagName)) {
        while (child.firstChild) node.insertBefore(child.firstChild, child);
        node.removeChild(child);
        continue;
      }
      var names = Array.prototype.map.call(child.attributes, function (attribute) { return attribute.name; });
      for (var j = 0; j < names.length; j += 1) {
        if (!attributes.test(names[j].toLowerCase()) || unsafeValue.test(child.getAttribute(names[j]))) {
          child.removeAttribute(names[j]);
        }
      }
    }
  };
  clean(doc.body);
  return doc.body.innerHTML;
}`;

const ESCAPE = `
function __doccellsEscapeHtml(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}`;

const CORE_HELPERS = `
${MARKER}${ESCAPE}${SANITIZER}
function __doccellsCleanStyle(style) {
  return String(style).replace(/url\\s*\\(|expression\\s*\\(|@import|behavior/gi, "").replace(/['"<>&\\\\]/g, "");
}
function __doccellsIsSafeSpans(text) {
  return /^(?:<span(?: (?:class|dir|index|rangeindex|style)=(?:"[^"'<>&\\\\]*"|'[^"'<>&\\\\]*'))*>[^<>]*<\\/span>)+$/.test(text) &&
    !/url\\s*\\(|expression\\s*\\(|@import|behavior/i.test(text.replace(/>[^<>]*</g, "><"));
}
function __doccellsRestoreFormulaText(html) {
  return html
    // Opérateurs (<, >=, <>, &…), écrits tels quels par functionHTML.
    .replace(/(class="luckysheet-formula-text-calc">)(.{1,2}?)(<\\/span>)/g, function (all, open, operator, close) {
      return open + operator.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + close;
    })
    .replace(/\\uE000/g, "&lt;").replace(/\\uE001/g, "&gt;").replace(/\\uE002/g, "&amp;");
}
function __doccellsUnescapeFormulaText(text) {
  return text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
`;

const REACT_HELPERS = `
${MARKER}${ESCAPE}${SANITIZER}
`;

const coreReplacements = (lodash) => [
  // 1. escapeHTMLTag
  [
    `  if (str.substr(0, 5) === "<span" || ${lodash}.startsWith(str, "=")) {
    return str;
  }
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");`,
    `  if (__doccellsIsSafeSpans(str)) return str;
  return __doccellsEscapeHtml(str);`,
  ],
  // 2. getInlineStringHTML
  [
    `.concat(i, "' style='").concat(styleStr, "'>").concat(strObj.v, "</span>");`,
    `.concat(i, "' style='").concat(__doccellsCleanStyle(styleStr), "'>").concat(__doccellsEscapeHtml(strObj.v), "</span>");`,
  ],
  // 3. functionHTML : texte des opérandes (hors opérateurs) remplacé par des
  // caractères réservés, rendus en entités par functionHTMLGenerate.
  [
    `    } else {
      str += s;
    }
    if (i === funcstack.length - 1) {
      if (iscelldata(${lodash}.trim(str))) {
        var rangeIndex = rangeIndexes.length`,
    `    } else {
      str += s === "<" ? "\\uE000" : s === ">" ? "\\uE001" : s === "&" ? "\\uE002" : s;
    }
    if (i === funcstack.length - 1) {
      if (iscelldata(${lodash}.trim(str))) {
        var rangeIndex = rangeIndexes.length`,
  ],
  [
    `  return "<span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">=</span>".concat(functionHTML(txt));`,
    `  return __doccellsRestoreFormulaText("<span dir=\\"auto\\" class=\\"luckysheet-formula-text-color\\">=</span>".concat(functionHTML(txt)));`,
  ],
  // 3 bis. findrangeindex, qui place le curseur dans la formule coloriée,
  // compte les caractères de ce HTML : une entité (&gt;) n'en vaut qu'un.
  [
    `  var v_a = v.replace(re, "").split("</span>");
  var vp_a = vp.replace(re, "").split("</span>");`,
    `  var v_a = v.replace(re, "").split("</span>").map(__doccellsUnescapeFormulaText);
  var vp_a = vp.replace(re, "").split("</span>").map(__doccellsUnescapeFormulaText);`,
  ],
  // Place introuvable : curseur en fin de saisie. FortuneSheet y lisait
  // rangeResizeTo, vide hors redimensionnement d'une plage : l'exception
  // démontait toute l'application.
  [
    `    console.error(err);
    moveToEnd(ctx.formulaCache.rangeResizeTo[0]);`,
    `    console.error(err);
    var doccellsEditor = textDom && textDom.closest("[contenteditable]");
    if (doccellsEditor) moveToEnd(doccellsEditor);`,
  ],
  // 4. handleFormulaInput
  [
    `    if ($copyTo) $copyTo.innerHTML = value;
    $editor.innerHTML = escapeHTMLTag(value);`,
    `    if ($copyTo) $copyTo.innerHTML = escapeHTMLTag(value);
    $editor.innerHTML = escapeHTMLTag(value);`,
  ],
  // 5. Plages (noms de feuilles) dans l'éditeur de formule
  [`      span.innerHTML = range;`, `      span.textContent = range;`],
  [
    `.concat(colors[functionHTMLIndex], ";\\">").concat(range, "</span>");`,
    `.concat(colors[functionHTMLIndex], ";\\">").concat(__doccellsEscapeHtml(range), "</span>");`,
  ],
  [
    `.concat(getRangetxt(ctx, ctx.currentSheetId, {
    row: rowh,
    column: columnh
  }, ctx.currentSheetId), "</span>`,
    `.concat(__doccellsEscapeHtml(getRangetxt(ctx, ctx.currentSheetId, {
    row: rowh,
    column: columnh
  }, ctx.currentSheetId)), "</span>`,
  ],
  // 6. Validation des données
  [`    hintText += getHintText(ctx, item);`, `    hintText += __doccellsEscapeHtml(getHintText(ctx, item));`],
  [
    `    failureText += getFailureText(ctx, item);`,
    `    failureText += __doccellsEscapeHtml(getFailureText(ctx, item));`,
  ],
  // 7. Copie
  [
    `        ele.style.display = "block";
        ele.innerHTML = str;`,
    `        ele.style.display = "block";
        ele.innerHTML = __doccellsSanitizeHtml(str);`,
  ],
];

const reactReplacements = [
  // 8. Commentaires
  [`      root.current.innerHTML = initialContent;`, `      root.current.innerHTML = __doccellsSanitizeHtml(initialContent);`],
];

const BUNDLES = [
  { file: path.join(ROOT, "core", "dist", "index.esm.js"), replacements: coreReplacements("_"), helpers: CORE_HELPERS },
  {
    file: path.join(ROOT, "core", "dist", "index.js"),
    replacements: coreReplacements("___default['default']"),
    helpers: CORE_HELPERS,
  },
  { file: path.join(ROOT, "react", "dist", "index.esm.js"), replacements: reactReplacements, helpers: REACT_HELPERS },
  { file: path.join(ROOT, "react", "dist", "index.js"), replacements: reactReplacements, helpers: REACT_HELPERS },
];

let failures = 0;
for (const { file, replacements, helpers } of BUNDLES) {
  const name = path.relative(ROOT, file);
  if (!fs.existsSync(file)) {
    console.warn(`patch-fortune-html-safety: ${name} not found, skipping`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  let ok = true;
  for (const [old, next] of replacements) {
    if (src.includes(next)) continue;
    const count = src.split(old).length - 1;
    if (count !== 1) {
      console.error(`patch-fortune-html-safety: ${count} matches instead of 1 in ${name} for:\n${old.slice(0, 160)}`);
      ok = false;
      continue;
    }
    src = src.replace(old, () => next);
  }
  // Fonctions ajoutées en fin de fichier : remplacées à chaque passage. Ce
  // qu'un autre correctif a ajouté après elles (un export) est gardé.
  const helpersAt = src.indexOf(`\n${MARKER}`);
  let after = "";
  if (helpersAt >= 0) {
    const rest = src.slice(helpersAt);
    const exported = rest.search(/^exports?\b/m);
    if (exported >= 0) after = rest.slice(exported);
    src = src.slice(0, helpersAt);
  }
  src += helpers + after;
  if (!ok) {
    failures += 1;
    continue;
  }
  fs.writeFileSync(file, src, "utf8");
  console.log(`patch-fortune-html-safety: patched ${name}`);
}
if (failures > 0) process.exit(1);
