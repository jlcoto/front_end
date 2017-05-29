var gulp = require('gulp'),
	imageResize = require('gulp-image-resize'),
	rename = require("gulp-rename"),
  imagemin = require('gulp-imagemin');



//Changing images for index web page
gulp.task('img-resize', function () {
  gulp.src('src/img/*.{png,jpg}')
    .pipe(imageResize({
      width : 120,
      height : 85,
      upscale : false,
      format: "jpg"
    }))
    .pipe(rename({suffix: "-small"}))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});


gulp.task('img-resize-pizza', function () {
  gulp.src('src/views/images/*.{png,jpg}')
    .pipe(imageResize({
      width : 120,
      height : 85,
      upscale : false,
      format: "jpg"
    }))
    .pipe(rename({suffix: "-small"}))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/views/images/'));
});