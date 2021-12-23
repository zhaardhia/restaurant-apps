/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: [
          /\.js$/, /.s?css$/
        ],
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          // MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
        ],
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
  //     // `...`,
  //     new CssMinimizerPlugin(),
  //   ],
  // },
  // plugins: [new MiniCssExtractPlugin()],
});

