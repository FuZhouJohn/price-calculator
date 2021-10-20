import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { svgBuilder } from "./src/plugins/svgBuilder";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), svgBuilder("./src/icons/")],
  resolve: {
    alias: {
      "src/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
