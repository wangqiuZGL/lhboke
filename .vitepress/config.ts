import { defineConfig } from "vitepress";
import docsConfig from "../docs/.vitepress/config";

// Cloudflare may run `vitepress build` at repository root.
// Force VitePress to use docs/ as source directory while reusing docs config.
export default defineConfig({
  ...docsConfig,
  srcDir: "docs",
});
