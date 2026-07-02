import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
    plugins: [
      react(),
      {
        name: "doccells-build-version",
        transformIndexHtml(html) {
          return html.replaceAll("__DOCCELLS_BUILD_VERSION__", buildDate);
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
