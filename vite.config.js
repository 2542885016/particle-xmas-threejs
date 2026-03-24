import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  // 如果是 GitHub Pages
  if (mode === "gh-pages") {
    return {
      base: "/particle-xmas/",
    };
  }

  // 默认（Vercel / 本地 / 未来平台）
  return {
    base: "./",
  };
});
