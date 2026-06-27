import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const forDocTools = mode === "doctools";

  return {
    base: forDocTools ? "./" : "/fortunesheet/",
    plugins: [react()],
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
