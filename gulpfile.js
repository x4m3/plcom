/* gulpfile.js - ready to drink up? */

var gulp = require('gulp');
var connect = require('gulp-connect');

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

gulp.task('build', function() {
	/* function to build shit */
});

gulp.task('default', ['src-serve']);
