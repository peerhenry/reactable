var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

function getBabelLoader(){
  return {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|lib)/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015', 'stage-0'],
      plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
    }
  };
}

function getCssLoader(){
  return {
    test: /\.css$/,
    loader: "style!css"
  };
}

function getPugLoader(){
  return {
    test: /\.pug$/,
    loader: "pug-loader"
  }
}

function getLoaders()
{
  return [
    getBabelLoader(),
    getCssLoader(),
    getPugLoader()
  ]
}

function getWebpackPlugin(){
  return new HtmlWebpackPlugin({
    template: "index.pug"
  })
}

function getPlugins()
{
  return debug ? [ getWebpackPlugin() ] : [
      getWebpackPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
}

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    "client.min.js": "./jsx/client.jsx"
  },
  module: {
    loaders: getLoaders()
  },
  output: {
    path: __dirname + "/build/",
    filename: "[name]"
  },
  plugins: getPlugins(),
  devServer: {
    contentBase: "./build/",
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  //watch: true
};