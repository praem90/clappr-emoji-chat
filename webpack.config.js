const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const externals = {
  clappr: {
    amd: 'clappr',
    commonjs: 'clappr',
    commonjs2: 'clappr',
    root: 'Clappr'
  }
}

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  externals: externals,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'}
        ],
      },
      {
        test: /\.html/,
        loader: 'html-loader?minimize=true'
     },
    ],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: process.env.NODE_ENV === 'production' ? 'clappr-emoji-chat.min.js' : 'clappr-emoji-chat.js',
    library: 'EmojiChatPlugin',
    libraryTarget: 'umd',
  },
};
