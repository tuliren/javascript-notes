# Optimization

## Development and Production Modes
- Development tasks contain things needed all the time
  - Sass processing
  - Live editing

## Development Mode
- Create a `dist` that holds generated file separated from the source files
- `dist` stands for distribution. The code there is the minimized and optimized output of the build process.

```
- dist/
  - css/
  - js/
  - index.html
```
 
 - Update `gulpfile`

```js
// change this line
.pipe(gulp.dest('./css'))
// to this lines
.pipe(gulp.dest('dist/css'))

// copy files
gulp.task('copy-html', function() {
  gulp
    .src('./index.html')
    .pipe(gulp.dest('./dist'))
});
gulp.task('copy-images', function() {
  gulp
    .src('img/*')
    .pipe(gulp.dest('dist/img'))
});

// set new watch
watch('/index.html', gulp.series('copy-html'));
```
