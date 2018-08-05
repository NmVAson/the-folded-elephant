var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
const mocha = require('gulp-mocha');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
 
gulp.task('js', function() {
    gulp.src(['./src/js/*.js'])
    .pipe(minify({
        noSource: true
    }))
    .pipe(gulp.dest('./public/dist'))
});

gulp.task('test', function() {
    gulp.src(['./test/*.spec.js'], {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('default', [ 'sass','js','test']);