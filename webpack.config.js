const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
  },
};

module.exports = {
  // 1
  entry: "./src/index.js",
  // 2
  output: {
    path: "/dist",
    filename: "bundle.js",
  },
  // 3
  devServer: {
    contentBase: "./dist",
  },
};
