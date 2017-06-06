var gulp = require('gulp'),
	imageResize = require('gulp-image-resize'),
	rename = require("gulp-rename"),
  imagemin = require('gulp-imagemin'),
  cleanCSS = require('gulp-clean-css'),
  htmlmin = require('gulp-htmlmin'),
  uglify = require('gulp-uglify'),
  pump = require('pump');



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


//Changing images for index web page
gulp.task('img-webdev', function () {
  gulp.src('src/img/mobilewebdev.jpg')
    .pipe(imageResize({
      width : 300,
      height : 250,
      upscale : false,
      format: "jpg"
    }))
    .pipe(rename({suffix: "-medium"}))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});




var resizeImageTasks = [];
//Changing image size for individual pages
["2048.png", "cam_be_like.jpg"].forEach(function(image){
  resizeImage = 'resize_' + image;
gulp.task(resizeImage, function () {
  gulp.src('src/img/' + image)
    .pipe(imageResize({
      width : 250,
      height : 300,
      upscale : false,
      format: "jpg"
    }))
    .pipe(rename({suffix: "-medium"}))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});
  resizeImageTasks.push(resizeImage);
})

gulp.task('resize-img-med', resizeImageTasks);


//Resizing pizzeria

var pizzeriaSize = [["small", 120, 80], ["medium", 300, 200], ["large", 600, 400]];

var resizePizzeria = [];

pizzeriaSize.forEach(function(size) {
  pizzeriaSize = 'resize_' + size[0];
  gulp.task(pizzeriaSize, function() {
    gulp.src('src/views/images/pizzeria.jpg')
        .pipe(imageResize({
          width: size[1],
          height: size[2],
          upscale: false,
          format: "jpg"
        }))
        .pipe(imagemin())
        .pipe(rename({suffix: "-" + size[0]}))
        .pipe(gulp.dest('dist/views/images/'));
  })
  resizePizzeria.push(pizzeriaSize);
})

gulp.task('resize-img-pizzeria', resizePizzeria);


var htmlPages = [['src/*.html', 'dist'], ["src/views/*.html", "dist/views"]];

var htmlMinified = [];
htmlPages.forEach(function(page){
  pathMinified = "path-" + page[0];
  gulp.task(pathMinified, function() {
  return gulp.src(page[0])
             .pipe(htmlmin({collapseWhitespace: true}))
             .pipe(gulp.dest(page[1]));
  });
  htmlMinified.push(pathMinified)
})

var cssSource = [['src/css/*.css', 'dist/css'], ['src/views/css/*.css', "dist/views/css"]];

var cssMinified = [];

cssSource.forEach(function(page){
  pathCSS = "path-" + page[0];
  gulp.task(pathCSS, function(){
    return gulp.src(page[0])
    .pipe(cleanCSS())
    .pipe(rename({suffix: "-minified"}))
    .pipe(gulp.dest(page[1]));
  })
  cssMinified.push(pathCSS);
})

gulp.task('minify-css', cssMinified);
gulp.task('minify-html', htmlMinified);

//Uglifying JavaScript
gulp.task('js-uglify', function (cb) {
  pump([
        gulp.src('src/views/js/*.js'),
        uglify(),
        gulp.dest('dist/views/js')
    ],
    cb
  );
});



//Defining tasks to watch
gulp.task('watch', function(){
  gulp.watch('src/*.html', ['minify-html'])
  gulp.watch('src/views/*.html', ['minify-html'])
  gulp.watch('src/css/*.css', ['minify-css'])
  gulp.watch('src/views/css/*.css', ['minify-css'])
  gulp.watch('src/views/js/*.js', ['js-uglify'])
});


//Defining default tasks
gulp.task('default', ['img-resize', 'img-webdev', 'resize-img-med', 'resize-img-pizzeria',
                      'minify-css', 'minify-html', 'js-uglify'])






