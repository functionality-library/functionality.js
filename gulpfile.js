var gulp = require("gulp");
var minify = require("gulp-clean-css");
var prefix = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var sass = require("gulp-sass")(require("sass"));
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var pug = require("gulp-pug");

// HTML Task
gulp.task("html", () => {
  require("./server.js");
  return gulp
    .src("./project/html/index.pug")
    .pipe(pug({ pretty: false }))
    .pipe(gulp.dest("./website"));
});

// CSS Styles Task
gulp.task("styles", () => {
  require("./server.js");
  return gulp
    .src("./project/css/main.scss")
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(minify())
    .pipe(gulp.dest("./website"));
});

// JS Tasks
gulp.task("scripts", () => {
  require("./server.js");
  return gulp
    .src([
      "./project/js/*.js",
      "./project/js/**/*.js",
      "!./project/js/functionalty.js",
    ])
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./dist"));
});

// Functionalty.js File Task
gulp.task("functionalty", () => {
  require("./server.js");
  return gulp
    .src("./project/js/functionalty.js")
    .pipe(uglify())
    .pipe(rename("functionalty.min.js"))
    .pipe(gulp.dest("./dist"));
});

// Watch Task (Main Task)
gulp.task("watch", () => {
  require("./server.js");
  gulp.watch("./project/html/index.pug", gulp.series("html"));
  gulp.watch("./project/css/main.scss", gulp.series("styles"));
  gulp.watch(
    [
      "./project/js/*.js",
      "./project/js/**/*.js",
      "!./project/js/functionalty.js",
    ],
    gulp.series("scripts")
  );
  gulp.watch("./project/js/functionalty.js", gulp.series("functionalty"));
});

// Making The Tasks Work Without Problems in Gulp V4.0.2
gulp.task(
  "default",
  gulp.parallel("html", "styles", "scripts", "functionalty", "watch")
);
