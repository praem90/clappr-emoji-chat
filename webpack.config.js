var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  externals: {
    clappr: 'Clappr',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
            compact: true,
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader?singleton=true', 'css-loader', 'sass-loader'],
      },
      {
       test: /\.html/, loader: 'html?minimize=false'
     },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    filename: 'dist/clappr-emoji-chat.js',
    library: 'EmojiChatPlugin',
    libraryTarget: 'umd',
  },
};
