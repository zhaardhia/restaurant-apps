/* eslint-disable import/no-import-module-exports */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: ['html-loader'],
      // },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          // options: {
          //   publicPath: path.resolve("src/public/images/hero"),
          // }
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]',
            // name: '[name].[hash:6].[ext]',
            // outputPath: 'images',
            // publicPath: 'images',
            // emitFile: true,
            // esModule: false
          },
        }],
      },
      {
        // test: /\.(html)$/,
        // use: ['html-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
      filename: 'sw.js',
    }),
    new WebpackPwaManifest({
      name: 'Restaurant Catalogue Web App',
      short_name: 'Restaurant App',
      description: 'The Top Restaurant Catalogue!',
      background_color: '#2F5D62',
      crossorigin: 'anonymous', // can be null, use-credentials or anonymous
      fingerprints: false,
      icons: [
        {
          src: path.resolve('src/public/images/icon/JaFood-putih.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512], // multiple sizes
          type: 'image/png',
          purpose: 'any',
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('src/public/images/icon/JaFood-putih.png'),
          sizes: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
  ],
};
