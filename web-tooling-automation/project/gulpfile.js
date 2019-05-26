const gulp = require("gulp");
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest("./css"));
});

// default default task
gulp.task("default", function() {
  // watch for sass changes and run styles task
  watch("sass/**/*.scss", gulp.series("styles"));
});
