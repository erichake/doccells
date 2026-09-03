import { copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import SplashLogo from "./src/shared/SplashLogo.js";
import {
  SPLASH_RECOVERY_TEXTS,
  SPLASH_TAGLINES,
} from "./src/shared/splashTaglines.js";

const padDatePart = (value) => String(value).padStart(2, "0");

const getBuildDate = () => {
  const now = new Date();
  return `${now.getFullYear()}${padDatePart(now.getMonth() + 1)}${padDatePart(now.getDate())}`;
};

// Port du serveur PHP local démarré par `scripts/dev.sh` (npm run dev),
// utilisé pour relayer les requêtes `gsheet_export` du proxy Google Sheets
// pendant le développement (voir index.php).
const LOCAL_PHP_PORT = 8010;
const DOCTOOLS_OUT_DIR = "../doctools_MAIN/public/apps/doccells";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const forDocTools = mode === "doctools";
  const buildDate = getBuildDate();

  return {
    base: forDocTools ? "./" : "/fortunesheet/",
    define: {
      "import.meta.env.DOCCELLS_BUILD_VERSION": JSON.stringify(buildDate),
    },
    plugins: [
      react(),
      {
        name: "doccells-splash-screen",
        transformIndexHtml(html) {
          const splashMarkup = renderToStaticMarkup(
            createElement(SplashLogo, {
              tagline: SPLASH_TAGLINES.en,
              version: `version ${buildDate}`,
              taglineId: "splash-tagline",
              versionId: "splash-version",
            }),
          );
          return html
            .replace("<!--SPLASH_LOGO-->", splashMarkup)
            .replace(
              "/*__SPLASH_TAGLINES__*/ {}",
              JSON.stringify(SPLASH_TAGLINES),
            )
            .replace(
              "/*__SPLASH_RECOVERY_TEXTS__*/ {}",
              JSON.stringify(SPLASH_RECOVERY_TEXTS),
            );
        },
      },
      {
        // Relaie les requêtes gsheet_export vers le serveur PHP local
        // (démarré par `npm run dev` / scripts/dev.sh) pendant le dev.
        // Toute autre requête continue vers le pipeline Vite habituel
        // (HTML transformée, HMR, etc.) — même principe que le proxy
        // /apps de doctools_MAIN, adapté au fait que DocCells sert son
        // shell via Vite plutôt que via des fichiers déjà buildés.
        name: "doccells-php-gsheet-proxy",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const parsed = new URL(req.url ?? "/", "http://localhost");
            if (!parsed.pathname.endsWith("/index.php")) {
              return next();
            }
            if (!parsed.searchParams.has("gsheet_export")) {
              // Chargement de page normal (ex: ?url=...). Sans ce
              // ré-écriture, le serveur de fichiers statiques de Vite
              // renverrait le fichier index.php tel quel (source PHP en
              // clair) au lieu du shell SPA transformé. On redirige donc
              // en interne vers la racine (sous le `base` configuré), que
              // Vite traite toujours comme la page d'accueil — l'URL
              // affichée au navigateur ne change pas, seul le routage
              // interne est modifié.
              req.url = `${server.config.base}${parsed.search}`;
              return next();
            }
            try {
              const target = `http://localhost:${LOCAL_PHP_PORT}/index.php?gsheet_export=${encodeURIComponent(
                parsed.searchParams.get("gsheet_export"),
              )}`;
              const response = await fetch(target);
              res.statusCode = response.status;
              response.headers.forEach((value, key) => {
                if (key.toLowerCase() !== "transfer-encoding") {
                  res.setHeader(key, value);
                }
              });
              res.end(Buffer.from(await response.arrayBuffer()));
            } catch {
              res.statusCode = 502;
              res.end(
                `Serveur PHP local indisponible sur le port ${LOCAL_PHP_PORT}. ` +
                  "Lance `npm run dev` (pas `npm run dev:vite`) pour le démarrer automatiquement.",
              );
            }
          });
        },
      },
      forDocTools && {
        name: "doccells-copy-index-php",
        apply: "build",
        closeBundle() {
          copyFileSync(
            resolve(__dirname, "index.php"),
            resolve(__dirname, DOCTOOLS_OUT_DIR, "index.php"),
          );
        },
      },
    ].filter(Boolean),
    build: forDocTools
      ? {
          outDir: DOCTOOLS_OUT_DIR,
          emptyOutDir: true,
        }
      : undefined,
    server: {
      port: 5174,
      strictPort: true,
      // Le paramètre `?url=` de DocCells entre en collision avec la
      // syntaxe d'import d'assets réservée par Vite (`?url`), qui fait
      // alors passer toute requête contenant `url=` dans sa query string
      // par son contrôle de liste blanche fs.allow (403 sur les requêtes
      // qui ne pointent vers aucun fichier réel). Sans effet en
      // production, qui ne passe pas par Vite.
      fs: { strict: false },
    },
  };
});
