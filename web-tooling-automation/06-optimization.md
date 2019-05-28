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

## CSS Concatenation
- Advantages
  - Reduce the number of HTTP requests needed to load the page.
  - Easier for dependency management with one `script` block.
- Glue CSS and JavaScript files together through concatenation.
- The files are then crunched together through minification.
- Sass does both concatenation and minification.
  - Include a single Sass file in the html.
  - Then use the `@import` directive in the Sass to input other files.
  - These inputs will be put inline and turned into one big CSS file by the Sass compiler.

## Production ready version site

```js
gulp.task('dist', gulp.series(
  'copy-html',
  'copy-images',
  'styles',
  'lint',
  'scripts-dist'
));
```
