var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var pug = require('gulp-pug');

gulp.task('default', ['pug', 'webpack', 'webpack-dev-server']);

gulp.task('webpack', function(callback){
  var myConfig = Object.create(webpackConfig);
  webpack(myConfig, function(err, stats){
    if(err) throw new gutil.PLuginError('webpack', err);
    gutil.log('webpack', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack-dev-server", function(callback){
  var myConfig = Object.create(webpackConfig);
  var compiler = webpack(myConfig);
  new WebpackDevServer(compiler, myConfig.devServer).listen(8080);
});

gulp.task("pug", function(){
  return gulp.src('./src/index.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./build/'));
});

gulp.task("watch", function(){
  gulp.watch('./src/index.pug', ['pug']);
});