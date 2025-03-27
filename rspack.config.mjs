import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "production",
  devtool: false,
  entry: {
    main: {
      import: "./src/index.js",
      filename: "main.js",
    },
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
  },
  experiments: {
    css: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        foo: {
          test: /foo\.js/,
          name: 'foo',
          chunks: 'all',
          priority: 0,
          enforce: true
        }
      }
    },
  },
};

export default config;
