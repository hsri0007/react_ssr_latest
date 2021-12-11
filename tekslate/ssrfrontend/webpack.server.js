const path = require("path");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const mainConfig = {
  mode: "production",
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(commonConfig, mainConfig);
