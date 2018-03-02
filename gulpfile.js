/* gulpfile.js - ready to drink up? */

var gulp = require('gulp');
var pump = require('pump'); /* to handle shit errors */
var connect = require('gulp-connect'); /* http server */
var htmlmin = require('gulp-htmlmin'); /* shit-out the html */
var uglify = require('gulp-uglify'); /* kick the js in the balls */

gulp.task('src-serve', function() {
	connect.server({
		name: 'src server',
		root: 'src',
		host: '0.0.0.0',
		port: 8002,
		https: false,
		livereload: true
	});
});

gulp.task('out-serve', function() {
	/* do your shit */
});

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('out'));
});


gulp.task('js', function (cb) {
	pump([
		gulp.src('src/*.js'),
		uglify(),
		gulp.dest('out')
	], cb);
});

gulp.task('build', ['html', 'css', 'js']);
gulp.task('default', ['src-serve']);
