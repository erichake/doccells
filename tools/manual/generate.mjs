// Brings the manual (public/tutorials/<lang>) up to date with DocCells:
//
//   npm run manual                 pages, icons, screenshots and check
//   npm run manual -- pages        the pages, from pages/<lang>.md
//   npm run manual -- icons        icons.js, from the toolbar
//   npm run manual -- shots        the screenshots of shots.mjs
//   npm run manual -- check        what the pages name that does not exist
//   npm run manual -- shots fr     the same, for the languages named only
//   npm run manual -- shots tri.webp   the screenshots named only
//
// DocCells is built in a temporary folder and driven by Playwright, its files
// given to the browser by request interception: no server, no port (see
// AGENTS.md). Playwright is not a dependency: it is taken from
// PLAYWRIGHT_MODULE, else from the neighboring DocGeo project.

import {
    existsSync,
    mkdirSync,
    mkdtempSync,
    readFileSync,
    readdirSync,
    rmSync,
    statSync,
    writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";
import { LANGS, writeLangs, writePages } from "./pages.mjs";
import { SHOTS } from "./shots.mjs";

const require = createRequire(import.meta.url);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const MANUAL = join(ROOT, "public/tutorials");
const BASE = "http://localhost:5174/fortunesheet/";
const QUALITY = 0.86;
const TYPES = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".xlsx":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const args = process.argv.slice(2);
const files = args.filter((arg) => SHOTS.some(({ file }) => file === arg));
const tasks = args.filter(
    (arg) => !LANGS.includes(arg) && !files.includes(arg),
);
const langs = args.some((arg) => LANGS.includes(arg))
    ? LANGS.filter((lang) => args.includes(lang))
    : LANGS;
const wanted = (task) => !tasks.length || tasks.includes(task);
let failed = false;

// Identifiers as manual.js gives them to the headings that have none.
const slug = (text) =>
    text
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .replace(/[’']/g, "-")
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-|-$/g, "");

if (wanted("pages")) {
    // Every language, for langs.js.
    const written = {};
    for (const lang of LANGS) {
        mkdirSync(join(MANUAL, lang, "img"), { recursive: true });
        written[lang] = writePages(lang, join(MANUAL, lang));
        if (written[lang].problems.length) failed = true;
        written[lang].problems.forEach((problem) => console.error(problem));
    }
    writeLangs(written, MANUAL);
    console.log("pages:", LANGS.join(" "));
}

if (wanted("icons") || wanted("shots")) await drive();
if (wanted("check")) langs.forEach(check);
process.exit(failed ? 1 : 0);

async function drive() {
    const { chromium } = require(
        process.env.PLAYWRIGHT_MODULE ??
            join(ROOT, "../docgeo_MAIN/node_modules/playwright"),
    );
    const dist = mkdtempSync(join(tmpdir(), "doccells-manual-"));
    const browser = await chromium.launch();
    try {
        await build({
            root: ROOT,
            configFile: join(ROOT, "vite.config.js"),
            logLevel: "error",
            build: { outDir: dist, emptyOutDir: true, copyPublicDir: true },
        });
        if (wanted("icons")) await writeIcons(browser, dist);
        if (wanted("shots"))
            for (const lang of langs)
                for (const shot of SHOTS)
                    if (!files.length || files.includes(shot.file))
                        await capture(browser, dist, shot, lang);
    } finally {
        await browser.close();
        rmSync(dist, { recursive: true });
    }
}

async function open(browser, dist, { lang, viewport }) {
    const context = await browser.newContext({ locale: lang, viewport });
    await context.route(`${BASE}**`, async (route) => {
        const path = new URL(route.request().url()).pathname;
        const file = join(
            dist,
            path.replace("/fortunesheet/", "") || "index.html",
        );
        if (existsSync(file) && statSync(file).isFile())
            await route.fulfill({
                body: readFileSync(file),
                contentType: TYPES[extname(file)] ?? "application/octet-stream",
            });
        else await route.fulfill({ status: 404, body: "" });
    });
    const page = await context.newPage();
    page.setDefaultTimeout(10000);
    await page.goto(`${BASE}?lang=${lang}`);
    await page.evaluate(() => window.whenDocCellsReady());
    await page.waitForSelector("#splash-screen", { state: "detached" });
    await page.waitForTimeout(500);
    return page;
}

// The toolbar's icons: FortuneSheet's symbols by their ids, DocCells' own
// buttons by the names the manual gives them.
async function writeIcons(browser, dist) {
    const page = await open(browser, dist, {
        lang: "en",
        viewport: { width: 1700, height: 760 },
    });
    const icons = await page.evaluate(() => {
        const out = {};
        for (const symbol of document.querySelectorAll("symbol[id]")) {
            const attributes = [...symbol.attributes]
                .filter(({ name }) => /^(viewBox|fill|stroke.*)$/.test(name))
                .map(({ name, value }) => ` ${name}="${value}"`)
                .join("");
            out[symbol.id] = `<svg${attributes}>${symbol.innerHTML}</svg>`;
        }
        for (const [name, id] of Object.entries({
            open: "open",
            save: "export",
            gridlines: "gridlines",
            alternating: "alternating-colors",
            conditional: "conditional-format",
            protect: "protect-sheet",
            chart: "chart",
        })) {
            const svg = document
                .querySelector(`#custom-${id}-button svg`)
                .cloneNode(true);
            svg.removeAttribute("width");
            svg.removeAttribute("height");
            svg.removeAttribute("xmlns");
            out[name] = svg.outerHTML;
        }
        return out;
    });
    await page.context().close();
    // Only those the pages use.
    const used = new Set(
        LANGS.flatMap((lang) =>
            Object.values(pagesOf(lang)).flatMap((text) =>
                [...text.matchAll(/data-i="([^"]*)"/g)].map(([, name]) => name),
            ),
        ),
    );
    const kept = Object.fromEntries(
        Object.entries(icons)
            .filter(([name]) => used.has(name))
            .sort(([a], [b]) => (a < b ? -1 : 1))
            .map(([name, svg]) => [name, svg.replace(/\s+/g, " ")]),
    );
    writeFileSync(
        join(MANUAL, "icons.js"),
        "// Generated by tools/manual/generate.mjs from DocCells' toolbar: do not edit.\n" +
            `window.DC_ICONS = ${JSON.stringify(kept, null, 4)};\n`,
    );
    console.log("icons.js:", Object.keys(kept).length, "icons");
    for (const name of used)
        if (!(name in kept)) {
            failed = true;
            console.error(
                `no icon "${name}"; there are: ${Object.keys(icons).join(" ")}`,
            );
        }
}

async function capture(browser, dist, shot, lang) {
    const viewport = shot.viewport ?? { width: 1280, height: 760 };
    const page = await open(browser, dist, { lang, viewport });
    try {
        const clip = await shot.run(helpers(page, lang));
        await page.waitForTimeout(400);
        const png = await page.screenshot({ clip: clip ?? shot.clip });
        const { image, width, height } = await webp(browser, png);
        writeFileSync(join(MANUAL, lang, "img", shot.file), image);
        console.log(`${lang}/img/${shot.file} ${width}x${height}`);
    } catch (error) {
        failed = true;
        console.error(`${lang}/img/${shot.file}: ${error.message}`);
    } finally {
        await page.context().close();
    }
}

// What a shot's run receives. Menus and their items are designated by rank,
// the same in every language.
function helpers(page, lang) {
    const wait = (ms) => page.waitForTimeout(ms);
    const area = () => page.locator(".fortune-cell-area").boundingBox();
    const at = async (r, c) => {
        const { x, y } = await area();
        return [x + c * 99 + 49, y + r * 20 + 10];
    };
    const click = async (r, c, options) => {
        await page.mouse.click(...(await at(r, c)), options);
        await wait(200);
    };
    const drag = async (r, c, r2, c2) => {
        await page.mouse.move(...(await at(r, c)));
        await page.mouse.down();
        await page.mouse.move(...(await at(r2, c2)), { steps: 6 });
        await page.mouse.up();
        await wait(250);
    };
    const write = async (rows, r0 = 0, c0 = 0) => {
        await page.evaluate(
            (cells) => window.setCellValues(cells),
            rows.flatMap((row, i) =>
                row
                    .map((v, j) => ({ r: r0 + i, c: c0 + j, v }))
                    .filter(({ v }) => v != null),
            ),
        );
        await wait(700);
    };
    const menu = async (root, ...ranks) => {
        await page.locator(".dc-menu-root-button").nth(root).click();
        let items = page.locator(".dc-menu-popover").first();
        for (const [k, rank] of ranks.entries()) {
            const item = items.locator(":scope > .dc-menu-item-wrap").nth(rank);
            if (k < ranks.length - 1) {
                await item.hover();
                await wait(150);
                items = item.locator(":scope > .dc-menu-submenu");
            } else await item.locator(":scope > button").click();
        }
        await wait(500);
    };
    // The arrow of the toolbar's combo that shows an icon.
    const combo = async (icon) => {
        await page
            .locator(
                `.fortune-toobar-combo-container:has(use[*|href="#${icon}"]) .fortune-toolbar-combo-arrow`,
            )
            .first()
            .click();
        await wait(300);
    };
    const type = async (r, c, text) => {
        await click(r, c);
        await page.keyboard.type(text, { delay: 20 });
        await page.keyboard.press("Enter");
        await wait(250);
    };
    return { page, lang, wait, at, click, drag, write, menu, combo, type };
}

// Chromium encodes WebP itself: no image tool to install.
async function webp(browser, png) {
    const page = await browser.newPage();
    const [url, width, height] = await page.evaluate(
        async ([source, quality]) => {
            const image = new Image();
            image.src = source;
            await image.decode();
            const canvas = document.createElement("canvas");
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            canvas.getContext("2d").drawImage(image, 0, 0);
            return [
                canvas.toDataURL("image/webp", quality),
                canvas.width,
                canvas.height,
            ];
        },
        ["data:image/png;base64," + png.toString("base64"), QUALITY],
    );
    await page.close();
    return { image: Buffer.from(url.split(",")[1], "base64"), width, height };
}

function pagesOf(lang) {
    const dir = join(MANUAL, lang);
    return Object.fromEntries(
        readdirSync(dir)
            .filter((file) => file.endsWith(".html"))
            .map((file) => [file, readFileSync(join(dir, file), "utf8")]),
    );
}

// The pages, images, icons and links of the manual.
function check(lang) {
    const pages = pagesOf(lang);
    const problems = [];
    const listed = new Set(
        readFileSync(join(MANUAL, "manual.js"), "utf8")
            .split("const LANGS")[0]
            .match(/[\w-]+\.html/g),
    );
    for (const other of LANGS)
        for (const file of Object.keys(pagesOf(other)))
            if (!(file in pages))
                problems.push(`${file}: missing, ${other} has it`);
    for (const file of listed)
        if (!(file in pages)) problems.push(`manual.js: ${file} is missing`);
    const source = readFileSync(join(MANUAL, "icons.js"), "utf8");
    const icons = JSON.parse(
        source.slice(source.indexOf("{"), source.lastIndexOf(";")),
    );
    const ids = Object.fromEntries(
        Object.entries(pages).map(([file, text]) => [
            file,
            new Set([
                ...[...text.matchAll(/ id="([^"]*)"/g)].map(([, id]) => id),
                ...[...text.matchAll(/<h[23]>(.*?)<\/h[23]>/gs)].map(
                    ([, title]) => slug(title.replace(/<[^>]*>/g, "")),
                ),
            ]),
        ]),
    );
    const images = new Set();
    for (const [file, text] of Object.entries(pages)) {
        if (!listed.has(file))
            problems.push(`${file}: not listed in manual.js`);
        for (const [, name] of text.matchAll(/data-i="([^"]*)"/g))
            if (!(name in icons)) problems.push(`${file}: no icon "${name}"`);
        for (const [, image] of text.matchAll(/src="img\/([^"]*)"/g)) {
            images.add(image);
            if (!SHOTS.some((shot) => shot.file === image))
                problems.push(`${file}: img/${image} is not in shots.mjs`);
            else if (!existsSync(join(MANUAL, lang, "img", image)))
                problems.push(`${file}: img/${image} is missing`);
        }
        for (const [, target, anchor] of text.matchAll(
            /href="([\w-]+\.html)?(?:#([^"]*))?"/g,
        )) {
            const to = target ?? file;
            if (!(to in pages))
                problems.push(`${file}: link to ${to}, missing`);
            else if (anchor && !ids[to].has(decodeURIComponent(anchor)))
                problems.push(`${file}: no #${anchor} in ${to}`);
        }
    }
    for (const { file } of SHOTS)
        if (!images.has(file))
            problems.push(`shots.mjs: ${file} is used by no page`);
    if (problems.length) failed = true;
    console.log(
        problems.length
            ? problems.map((problem) => `${lang}/${problem}`).join("\n")
            : `check ${lang}: pages, links, icons and screenshots are consistent`,
    );
}
