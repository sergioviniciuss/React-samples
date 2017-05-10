var gulp = require('gulp'); // build process
var gutil = require('gulp-util'); //print information at the command line - debugging
var source = require('vinyl-source-stream'); // throwing text files from one part of the build process to another
var browserify = require('browserify'); //make sure load order is done correctly
var watchify = require('watchify'); // watch for changes and rerun the build process
var reactify = require('reactify'); // works with browserify to handle converting jsx into js

gulp.task('default', function() {
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'], //the most parent component
		transform: [reactify], //while figuring out dependencies, also needs to transform/compile jsx into js
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) {
			gutil.log('Recompiling ' + file);
		}
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};
	build()
	bundler.on('update', build);
})