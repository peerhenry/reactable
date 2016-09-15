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

function getCssLoader(){
  return {
    test: /\.css$/,
    //loader: "style!css"
    loader: "css"
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
    //getCssLoader(),
    getPugLoader(),
    getTypescriptLoader()
  ]
}

function getWebpackPlugin(){
  return new HtmlWebpackPlugin({
    template: "index.pug"
  })
}

function getPlugins(){
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
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
    root: path.resolve(__dirname),
    alias: {
      stores: "src/js/stores",
      actions: "src/js/actions",
      api: "src/js/api",
      models: "src/js/models"
    }
  },
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
  externals: {
    "react": "React",
    "react-DOM": "ReactDOM"
  }
  //watch: true
};