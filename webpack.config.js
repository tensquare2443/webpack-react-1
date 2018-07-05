const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom', 'react-router'];
const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
//the '[chunkhash]' gives bundle & vendor files unique hashes on updates, so browser will understand file change then redownload.
//the CommonsChunkPlugin thing takes any dupe files (in both bundle & vendor) and moves them to vendor only.
//the HtmlWebpackPlugin uses src/index.html to generate build/index.html, which injects all entry files.

module.exports = config;
