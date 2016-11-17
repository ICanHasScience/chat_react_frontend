var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/views/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.js.jsx', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude : /node_modules/,
        loader: "babel-loader"
      }]
  },
  plugins: [HTMLWebpackPluginConfig]
};