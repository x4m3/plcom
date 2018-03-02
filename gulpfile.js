/* gulpfile.js - ready to drink up? */

var gulp = require('gulp');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');

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

gulp.task('build', ['html', 'css', 'js']);
gulp.task('default', ['src-serve']);
