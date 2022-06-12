import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vitePluginImport from "vite-plugin-babel-import";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      supportTs: false,
    }),
    vitePluginImport([
      {
        libraryName: "element-plus",
        libraryDirectory: "es",
      },
    ]),
  ],
  resolve: {
    alia: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // proxy: {
  //   "/api": {
  //     target: "http://www.dev.com",
  //     changeOrigin: true,
  //     rewrite: path => path.replace(/^\/api/, ""),
  //   },
  // },
});
