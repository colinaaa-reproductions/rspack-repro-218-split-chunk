import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  source: {
    entry: {
      main: {
        import: "./src/index.js",
        filename: "main.js",
      },
    },
  },
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  performance: {
    chunkSplit: {
      forceSplitting: {
        foo: /foo\.js/
      }
    },
  },
});
