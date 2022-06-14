import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  root: "./project/ts/functionality",
  build: {
    outDir: "./../../../dist",
    rollupOptions: {
      output: {
        entryFileNames: "functionality.min.js",  
      }
    },
    emptyOutDir: true,
    assetsDir: "./../../../dist",
    watch: {
      buildDelay: 0,
      clearScreen: true,
    },
  },
});