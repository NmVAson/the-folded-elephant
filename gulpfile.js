var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
 
gulp.task('compress', function() {
  gulp.src(['./src/js/*.js'])
    .pipe(minify({
        noSource: true
    }))
    .pipe(gulp.dest('./public/dist'))
});