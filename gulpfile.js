var gulp = require("gulp");
var minify = require("gulp-clean-css");
var prefix = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var pug = require("gulp-pug");

gulp.task("html", (done) => {
  require("./server.js");
  gulp
    .src(["./project/html/*.pug", "./project/html/**/*.pug"])
    .pipe(pug({ pretty: false }))
    .pipe(gulp.dest("./website"));
  done();
});

gulp.task("styles", (done) => {
  require("./server.js");
  gulp
    .src(["./project/css/*.css", "./project/css/**/*.css"])
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(minify())
    .pipe(gulp.dest("./website"));
  done();
});

// JS Tasks
gulp.task("scripts", (done) => {
  require("./server.js");
  gulp
    .src([
      "./project/js/*.js",
      "./project/js/**/*.js",
      "!./project/js/functionalty.js",
    ])
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
  done();
});

// Functionalty.js File Task
gulp.task("functionalty", (done) => {
  require("./server.js");
  gulp
    .src("./project/js/functionalty.js")
    .pipe(uglify())
    .pipe(rename("functionalty.min.js"))
    .pipe(gulp.dest("./dist"));
  done();
});

// Watch Task
// gulp.task("watch", function () {
//   gulp.watch(["./project", "static/**/*.html"]);
// });

// Making The Tasks Work Without Problems in Gulp V4.0.2
gulp.task("default", gulp.parallel("html", "styles", "scripts", "functionalty"));
