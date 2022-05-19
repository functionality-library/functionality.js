var gulp = require("gulp");
var minify = require("gulp-clean-css");
var prefix = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("html", (done) => {
  gulp
    .src(["./project/css/*.css", "./project/css/**/*.css"])
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(minify())
    .pipe(gulp.dest("./website"));
  done();
});

gulp.task("css", (done) => {
  gulp
    .src(["./project/css/*.css", "./project/css/**/*.css"])
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(minify())
    .pipe(gulp.dest("./website"));
  done();
});

// JS Tasks
gulp.task("js", (done) => {
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
  gulp
    .src("./project/js/functionalty.js")
    .pipe(uglify())
    .pipe(rename("functionalty.min.js"))
    .pipe(gulp.dest("./dist"));
  done();
});

// Making The Tasks Work Without Problems in Gulp V4.0.2
gulp.task("default", gulp.parallel("html", "css", "js", "functionalty"));
