import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "process/browser": resolve(__dirname, "node_modules/process/browser.js"),
    },
  },
  define: {
    "process.env.OPRA_API_URL": JSON.stringify(
      process.env.OPRA_API_URL || "http://localhost:4001"
    ),
  },
  server: {
    port: 3000,
    cors: false,
    proxy: {
      "/api": {
        target: "https://api.kimvar.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
