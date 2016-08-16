var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('gulp-run-sequence');
var webpack = require('webpack');
var WebpackDevDerver = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var exec = require('child_process').exec;

function runCommand(command){
  return function(cb){
    exec(command, function(err, stdout, stderr){
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('webpack', function(callback){
  webpackConfig.watch = true;
  webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('dev', runCommand("npm run dev"));

gulp.task('browser', runCommand('tb http://localhost:8080'));

gulp.task('default', function(){
  runSequence('webpack', ['dev', 'browser']);
});