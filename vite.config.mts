/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  base: '/seatcode/',
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets"
    },
  },
});
