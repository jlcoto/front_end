var gulp = require('gulp'),
	imageResize = require('gulp-image-resize'),
	rename = require("gulp-rename");



//Changing images for index web page
gulp.task('img-resize', function () {
  gulp.src('src/img/*.{png,jpg}')
    .pipe(imageResize({
      width : 120,
      height : 85,
      upscale : false,
      format: "jpeg"
    }))
    .pipe(rename({suffix: "-small"}))
    .pipe(gulp.dest('dist/img'));
});


gulp.task('img-resize', function () {
  gulp.src('src/img/*.{png,jpg}')
    .pipe(imageResize({
      width : 120,
      height : 85,
      upscale : false,
      format: "jpeg"
    }))
    .pipe(rename({suffix: "-small"}))
    .pipe(gulp.dest('dist/img'));
});