import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import tailwind from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    svgr(),   // 👈 debe ir primero para capturar .svg
    react(),
    tailwind()
  ],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) }
  }
});
