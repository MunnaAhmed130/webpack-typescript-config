module.exports = {
  mode: "production",

  devtool: false,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: / node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
};
