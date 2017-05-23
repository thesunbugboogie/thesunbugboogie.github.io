'use strict';

const gulp = require('gulp'),
	  concat = require('gulp-concat'),
	  minCss = require('gulp-minify-css'),
	  rename = require('gulp-rename'),
	  uglify = require('gulp-uglify'),
	  stripDebug = require('gulp-strip-debug');

gulp.task('doIt', () => {
    //Concat and Minify CSS
    gulp.src(['./css/bootstrap-reboot.min.css',
    		  './css/bootstrap-grid.min.css',
    		  './css/bootstrap.min.css',
    		  './css/slick.css',
    		  './css/slick-theme.css',
    		  './css/vegas.min.css',
    		  './css/style.css',])
        .pipe(concat('build.css'))
        //.pipe(sourcemaps.init())
        .pipe(minCss({
            keepSpecialComments: 0
        }))
        //.pipe(sourcemaps.write('.'))
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest('./css'));

    //Combine JS Files
    gulp.src(['./js/jquery-3.2.1.min.js',
    		   './js/tether.min.js',
    		   './js/bootstrap.js',
    		   './js/vegas.min.js',
    		   './js/slick.min.js',
    		   './js/script.js'])
        .pipe(concat('bundle.js'))
        .pipe(stripDebug())
        .pipe(uglify()) // Minifies the concatenated js file.
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./js'));
});



















