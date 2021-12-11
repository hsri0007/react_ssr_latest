const path = require("path");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");

const mainConfig = {
  mode: "production",
  entry: "./src/client/client.js",
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "client"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
    ],
  },
};

module.exports = merge(commonConfig, mainConfig);
