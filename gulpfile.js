var iconColor = '#bb11aa';
var destinationPath = './build';
var svgPath = './*/svg/production/*_24px.svg';


var gulp = require('gulp');
var raster = require('gulp-raster');
var rename = require('gulp-rename');
var lazypipe = require('lazypipe');
var clone = require('gulp-clone');
var cheerio = require('gulp-cheerio');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');


gulp.task('default', function(callback) {
    runSequence('_clean',
        '_ios1x',
        '_ios2x',
        '_ios3x',
        '_android1x',
        '_android15x',
        '_android2x',
        '_android3x',
        '_android4x',
        callback);
});


gulp.task('_ios1x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 1}))
        .pipe(rename({extname: '.png', suffix: ''}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'ios';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('_ios2x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 2}))
        .pipe(rename({extname: '.png', suffix: '@2x'}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'ios';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('_ios3x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 3}))
        .pipe(rename({extname: '.png', suffix: '@3x'}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'ios';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('_android1x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 1}))
        .pipe(rename({extname: '.png'}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'android/drawable-mdpi';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('_android15x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 1.5}))
        .pipe(rename({extname: '.png'}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'android/drawable-hdpi';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('_android2x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 2}))
        .pipe(rename({extname: '.png'}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'android/drawable-xhdpi';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('_android3x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 3}))
        .pipe(rename({extname: '.png'}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'android/drawable-xxhdpi';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('_android4x', function () {
    return gulp.src(svgPath)
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/_24px$/, '');
            opt.dirname = opt.dirname.replace(/svg\/production$/, '');
            return opt;
        }))
        .pipe(colorize(iconColor))
        .pipe(raster({format: 'png', scale: 4}))
        .pipe(rename({extname: '.png'}))
        .pipe(rename(function(opt) {
            opt.dirname = opt.dirname + '/' + 'android/drawable-xxxhdpi';
            return opt;
        }))
        .pipe(gulp.dest(destinationPath));
});



gulp.task('_clean', function() {
    return gulp.src(destinationPath, { read: false })
        .pipe(rimraf());
});


function colorize (color) {
    var sink;
    return (lazypipe()
        .pipe(function () {
            sink = clone.sink();
            return sink;
        })
        .pipe(cheerio, function ($) {
            $('svg').attr('fill', color);
        })
        .pipe(function () {
            return sink.tap();
        })
    )();
}
 