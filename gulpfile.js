"use strict";

var gulp         = require("gulp");
var sass         = require("gulp-sass");
var sourcemaps   = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var plumber      = require('gulp-plumber');

var target = {
  stylesheet_src  : "./scss/style.scss",
  stylesheet_dist : "./dist/stylesheets/"
}

gulp.task("stylesheets", function () {
  gulp.src(target.stylesheet_src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(target.stylesheet_dist))
});

gulp.task("watch", function() {
  gulp.watch(target.stylesheet_src, ["stylesheets"]);
});

gulp.task("default", ["stylesheets", "watch"]);