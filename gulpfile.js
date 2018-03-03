/* gulpfile.js - ready to drink up? */

var gulp = require('gulp'); /* u stupid or wat */
var pump = require('pump'); /* to handle shit errors */
var connect = require('gulp-connect'); /* http server */
var htmlmin = require('gulp-htmlmin'); /* shit-out the html */
var uglify = require('gulp-uglify'); /* kick the js in the ass */
var cleanCSS = require('gulp-clean-css'); /* shoot in the balls of the css */
var svgmin = require('gulp-svgmin'); /* give a shower to the svg */
var imagemin = require('gulp-imagemin'); /* the images */

gulp.task('src-serve', function() {
	connect.server({
		name: 'src server',
		root: 'src',
		host: '0.0.0.0',
		port: 8002,
		https: false
	});
});

gulp.task('out-serve', function() {
	connect.server({
		name: 'out server',
		root: 'out',
		host: '0.0.0.0',
		port: 8002,
		https: false
	});
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

gulp.task('css', () => {
	return gulp.src('src/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('out'));
});

gulp.task('svg', function() {
	return gulp.src('src/*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest('out'));
});

gulp.task('copy', function() {
	return gulp.src(['src/keybase.txt', 'src/names.mp3', 'src/pgp.asc'])
		.pipe(gulp.dest('out'));
});

gulp.task('img', function() {
	return gulp.src('src/*.{jpg,JPG,jpeg,JPEG,png,gif}')
		.pipe(imagemin({
			verbose: true
		}))
		.pipe(gulp.dest('out'));
});

gulp.task('default', function() {
	console.log("sup?");
});

gulp.task('build', ['html', 'css', 'js', 'svg', 'copy']);
