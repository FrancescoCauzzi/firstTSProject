const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts", // Your main TypeScript file
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist"),
  },
};
