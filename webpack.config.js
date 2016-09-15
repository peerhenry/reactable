var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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

function getTypescriptLoader(){
  var babelSettings = {
      presets: ['react', 'es2015', 'stage-0'],
      plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
    };
  return {
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components|lib)/,
    loader: "babel-loader?" + JSON.stringify(babelSettings) + "!ts-loader"
  };
}

function getSassLoader(){
  return {
    test: /\.scss$/,
    //loaders: ["style", "css", "sass"]
    loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
  };
}

function getPugLoader(){
  return {
    test: /\.pug$/,
    loader: "pug-loader",
    query: {
      pretty: debug
    }
  }
}

function getLoaders(){
  return [
    getBabelLoader(),
    getSassLoader(),
    getPugLoader(),
    getTypescriptLoader()
  ]
}

function getWebpackPlugin(){
  return new HtmlWebpackPlugin({
    template: "index.pug"
  })
}

function getExtractTextPlugin(){
  return new ExtractTextPlugin("style.css");
}

function getPlugins(){
  return debug ? [ getWebpackPlugin(), getExtractTextPlugin() ] : [
      getWebpackPlugin(), getExtractTextPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
}

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx", ".scss"],
    root: path.resolve(__dirname),
    alias: {
      stores: "src/stores",
      actions: "src/actions",
      api: "src/api",
      models: "src/models",
      components: "src/components",
      styles: "src/stylesheets"
    }
  },
  entry: {
    "client.min.js": "./client.jsx"
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
  externals: {
    "react": "React",
    "react-DOM": "ReactDOM"
  }
  //watch: true
};