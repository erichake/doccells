// The manual's pages (public/tutorials/<lang>/*.html), written from
// tools/manual/pages/<lang>.md, a file a language, its pages separated by
// "=== name | title in the contents" lines:
//
//   # ## ### Title {#id}   the ids are the same in every language
//   > lead   note: tip: warn:   - list   1. list   | table |   ``` code
//   ![alt](image.webp WxH)   [text](page.html#id)   **bold**   *italic*
//   {icon}        an icon of DocCells' toolbar
//   [[Ctrl+S]]    keys (Enter, Shift, Delete, Esc are translated: ui.json)
//   %file%        a text of the interface (terms.mjs)
//   `=SUM(A1, 2.5)`   a formula in canonical form, shown as typed in the
//                 language; `@SUM` a function's name, `n:1.5` a number or a
//                 list, `c:#,##0.00` a format code, `r:…` as it is

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { COUNT, functionTables, sampleTable } from "./functions.mjs";
import { language, localize, localizeCode } from "./terms.mjs";

const HERE = new URL("pages/", import.meta.url);
const UI = JSON.parse(readFileSync(new URL("ui.json", HERE), "utf8"));

// In the order of the languages' menu.
export const LANGS = Object.keys(UI).filter((lang) =>
    readdirSync(HERE).includes(`${lang}.md`),
);

const escape = (text) =>
    text.replace(
        /[&<>]/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c],
    );

export function writePages(lang, dir) {
    const tongue = language(lang);
    const { keys, docgeo, ui, name } = UI[lang];
    const terms = {
        ...tongue.terms,
        ...docgeo,
        functions: String(COUNT),
    };
    const problems = [];

    const term = (text) =>
        text.replace(/%(\w+)%/g, (all, key) => {
            if (key in terms) return terms[key];
            problems.push(`${lang}.md: no term ${all}`);
            return all;
        });
    const number = (text) =>
        tongue.comma
            ? text
                  .replace(/, /g, "\u0001")
                  .replace(/[.,]/g, (c) => (c === "." ? "," : tongue.group))
                  .replace(/\u0001/g, "; ")
            : text;
    const codeText = (source) => {
        const text = term(source);
        const body = text.slice(2);
        if (text.startsWith("n:")) return number(body);
        if (text.startsWith("c:")) return localizeCode(body, tongue);
        if (text.startsWith("r:")) return body;
        if (text.startsWith("=") && text.length > 1)
            return localize(text, tongue);
        return text.replace(
            /@([A-Z][A-Z0-9]*)/g,
            (all, fn) => tongue.names[fn] ?? fn,
        );
    };

    const inline = (source) => {
        const codes = [];
        let text = source.replace(/`([^`]+)`/g, (all, code) => {
            codes.push(`<code>${escape(codeText(code))}</code>`);
            return `\u0002${codes.length - 1}\u0002`;
        });
        text = term(text)
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(\w.*?)\*/g, "<em>$1</em>")
            .replace(/\[\[(.+?)\]\]/g, (all, combo) =>
                combo
                    .split("+")
                    .map((key) => `<kbd>${keys[key] ?? key}</kbd>`)
                    .join(" "),
            )
            .replace(/\{([a-z][\w-]*)\}/g, '<i data-i="$1"></i>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        return text.replace(/\u0002(\d+)\u0002/g, (all, k) => codes[k]);
    };

    const render = (source, titles) => {
        const lines = source.trim().split("\n");
        const out = [];
        const special = /^(#|\||- |\d+\. |> |!\[|```|<|%%|(note|tip|warn): )/;
        let i = 0;
        const take = (test) => {
            const taken = [];
            while (i < lines.length && test(lines[i])) taken.push(lines[i++]);
            return taken;
        };
        while (i < lines.length) {
            const line = lines[i];
            let m;
            if (!line.trim()) i++;
            else if ((m = line.match(/^(#{1,3}) (.+?)(?: \{#([\w-]+)\})?$/))) {
                const level = m[1].length;
                out.push(
                    `<h${level}${m[3] ? ` id="${m[3]}"` : ""}>${inline(m[2])}</h${level}>`,
                );
                i++;
            } else if (line.startsWith("> ")) {
                out.push(`<p class="lead">${inline(line.slice(2))}</p>`);
                i++;
            } else if ((m = line.match(/^!\[(.*?)\]\((\S+) (\d+)x(\d+)\)$/))) {
                const alt = term(m[1]).replace(/"/g, "&quot;");
                out.push(
                    `<figure><img src="img/${m[2]}" alt="${alt}" width="${m[3]}" height="${m[4]}" /></figure>`,
                );
                i++;
            } else if (line.startsWith("```")) {
                i++;
                const code = take((l) => !l.startsWith("```")).map(codeText);
                i++;
                out.push(`<pre><code>${escape(code.join("\n"))}</code></pre>`);
            } else if (line.startsWith("|")) {
                let rows = take((l) => l.startsWith("|")).map((l) =>
                    l
                        .trim()
                        .replace(/^\|\s?|\|$/g, "")
                        .split(" | ")
                        .map((c) => c.trim()),
                );
                let head = "";
                if (/^[-| ]+$/.test(rows[1]?.join(""))) {
                    head = `<thead><tr>${rows[0].map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead>`;
                    rows = rows.slice(2);
                }
                const body = rows
                    .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
                    .join("\n");
                out.push(
                    `<div class="table"><table>${head}<tbody>\n${body}\n</tbody></table></div>`,
                );
            } else if (/^(- |\d+\. )/.test(line)) {
                const tag = line.startsWith("-") ? "ul" : "ol";
                const items = take((l) => /^(- |\d+\. )/.test(l)).map(
                    (l) => `<li>${inline(l.replace(/^(- |\d+\. )/, ""))}</li>`,
                );
                out.push(`<${tag}>\n${items.join("\n")}\n</${tag}>`);
            } else if ((m = line.match(/^(note|tip|warn): (.+)$/))) {
                out.push(`<div class="${m[1]}"><p>${inline(m[2])}</p></div>`);
                i++;
            } else if (line === "%%sample%%") {
                out.push(sampleTable());
                i++;
            } else if (line === "%%functions%%") {
                const tables = functionTables(tongue, titles);
                problems.push(...tables.problems);
                out.push(tables.html);
                i++;
            } else if (line.startsWith("<")) {
                out.push(term(line));
                i++;
            } else {
                const text = [lines[i++], ...take((l) => l.trim() && !special.test(l))];
                out.push(`<p>${inline(text.join(" "))}</p>`);
            }
        }
        return out.join("\n");
    };

    const blocks = readFileSync(new URL(`${lang}.md`, HERE), "utf8")
        .split(/^=== /m)
        .slice(1)
        .map((block) => {
            const end = block.indexOf("\n");
            const [id, ...titles] = block
                .slice(0, end)
                .split("|")
                .map((t) => t.trim());
            return { id, titles, source: block.slice(end) };
        });
    const titlesOf = (id) => blocks.find((block) => block.id === id).titles;
    const pages = {};
    for (const { id, titles, source } of blocks) {
        if (id === "groups" || id === "categories") continue;
        const heading = term(source.match(/^# (.+)$/m)[1]);
        pages[id] = titles[0] ?? heading;
        writeFileSync(
            join(dir, `${id}.html`),
            `<!doctype html>
<!-- Generated from tools/manual/pages/${lang}.md: do not edit. -->
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${id === "index" ? heading : `${heading} — ${ui.title}`}</title>
<link rel="icon" type="image/png" href="../../favicon.png" />
<link rel="stylesheet" href="../manual.css" />
<script src="../icons.js" defer></script>
<script src="../langs.js" defer></script>
<script src="../manual.js" defer></script>
</head>
<body>
<main>
${render(source, titlesOf("categories"))}
</main>
</body>
</html>
`,
        );
    }
    return { name, groups: titlesOf("groups"), pages, ui, problems };
}

// langs.js, what manual.js needs of each language, its pages in the order of
// PAGES, and the languages of the manual's entry page.
export function writeLangs(written, manual) {
    const order = readFileSync(join(manual, "manual.js"), "utf8")
        .split("];")[0]
        .match(/[\w-]+(?=\.html)/g);
    const langs = Object.fromEntries(
        Object.entries(written).map(([lang, { name, groups, pages, ui }]) => [
            lang,
            { name, groups, pages: order.map((id) => pages[id]), ui },
        ]),
    );
    writeFileSync(
        join(manual, "langs.js"),
        "// Generated by tools/manual/generate.mjs: do not edit.\n" +
            `window.DC_LANGS = ${JSON.stringify(langs, null, 4)};\n`,
    );
    const entry = join(manual, "index.html");
    writeFileSync(
        entry,
        readFileSync(entry, "utf8")
            .replace(
                /const LANGS = \[.*?\];/s,
                `const LANGS = ${JSON.stringify(Object.keys(langs))};`,
            )
            .replace(
                /<ul>.*?<\/ul>/s,
                `<ul>\n${Object.entries(langs)
                    .map(
                        ([lang, { name }]) =>
                            `                <li><a href="${lang}/index.html">${name}</a></li>`,
                    )
                    .join("\n")}\n            </ul>`,
            ),
    );
}
