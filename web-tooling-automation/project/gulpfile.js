/* eslint-env node */

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();
const jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('styles', function() {
  return gulp
    .src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('lint', function() {
  return  gulp
    .src(['js/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});

gulp.task('test-console', function() {
  return gulp
    .src('tests/spec/extraSpec.js')
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless({ driver: 'chrome' }));
});

gulp.task('test-browser', function() {
  gulp
    .src('tests/spec/extraSpec.js')
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 3001 }));
});

gulp.task('copy-html', function() {
  return gulp
    .src('./index.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('copy-images', function() {
  return gulp
    .src('img/*')
    .pipe(gulp.dest('dist/img'))
});

// default task
gulp.task('default', gulp.series('copy-html', 'copy-images', 'styles', 'lint', function() {
  // watch for sass changes and run styles task
  watch('sass/**/*.scss', gulp.series('styles'));
  watch('js/**/*.js', gulp.series('lint'));
  watch('/index.html', gulp.series('copy-html'));

  browserSync.init({
    server: "./"
  });
}));
