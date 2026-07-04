import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import SplashLogo from "./src/shared/SplashLogo.js";

const padDatePart = (value) => String(value).padStart(2, "0");

const getBuildDate = () => {
  const now = new Date();
  return `${now.getFullYear()}${padDatePart(now.getMonth() + 1)}${padDatePart(now.getDate())}`;
};

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
        name: "doccells-splash-logo",
        transformIndexHtml(html) {
          const splashMarkup = renderToStaticMarkup(
            createElement(SplashLogo, {
              tagline: "Simple. Fast.",
              version: `version ${buildDate}`,
              taglineId: "splash-tagline",
              versionId: "splash-version",
            }),
          );
          return html.replace("<!--SPLASH_LOGO-->", splashMarkup);
        },
      },
    ],
    build: forDocTools
      ? {
          outDir: "../doctools_MAIN/public/apps/doccells",
          emptyOutDir: true,
        }
      : undefined,
    server: {
      port: 5174,
      strictPort: true,
    },
  };
});
