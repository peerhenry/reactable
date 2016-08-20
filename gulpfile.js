var gulp = require('gulp');
var gutil = require('gulp-util');
var pug = require('gulp-pug');
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

// MAIN COMMANDS

gulp.task('pug', function(){
  return gulp.src('./src/**/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./build/'));
});

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

gulp.task('browser', runCommand('"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome" http://localhost:8080'));

// COMPOSITE COMMANDS

gulp.task('run', function(){
  runSequence('webpack', 'dev');
});

gulp.task('default', function(){
  runSequence('webpack', ['dev', 'browser']);
});