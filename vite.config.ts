import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  root: "./project/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        entryFileNames: "functionality.min.js",
      },
    },
    emptyOutDir: true,
    assetsDir: "../dist",
    watch: {
      buildDelay: 0,
      clearScreen: true,
    },
  },
});
