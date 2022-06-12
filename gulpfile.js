// Gulp Plugins
var gulp = require("gulp");
var minify = require("gulp-clean-css");
var prefix = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var sass = require("gulp-sass")(require("sass"));
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var pug = require("gulp-pug");
var livereload = require("gulp-livereload");
var zip = require("gulp-zip");
var sourcemaps = require("gulp-sourcemaps");

// HTML Task
gulp.task("html", () => {
  require("./server.js");
  return gulp
    .src(["./project/html/*.pug", "./project/html/pages/*.pug"])
    .pipe(pug({pretty: false}))
    .pipe(gulp.dest("./website"))
    .pipe(livereload());
});

// CSS Styles Task
gulp.task("styles", () => {
  require("./server.js");
  return gulp
    .src(["./project/css/*.scss", "./project/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefix("last 4 versions"))
    .pipe(concat("style.css"))
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./website/css"))
    .pipe(livereload());
});
// JS Tasks
gulp.task("scripts", () => {
  require("./server.js");
  return gulp
    .src([
      "./project/js/*.js",
      "./project/js/**/*.js",
      "!./project/js/functionality/*.ts",
      "!./project/js/functionality/*.js",
    ])
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./website/js"))
    .pipe(livereload());
});

// Functionalty.js File Task
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");

gulp.task("functionality", () => {
  var browserify = require("browserify");
  var source = require("vinyl-source-stream");
  var tsify = require("tsify");
  var sourcemaps = require("gulp-sourcemaps");
  var buffer = require("vinyl-buffer");

  livereload.listen();
  require("./server.js");
  return browserify({
    basedir: ".",
    debug: true,
    entries: ["project/ts/functionality/main.ts"],
    cache: {},
    packageCache: {},
  })
    .plugin(tsify)
    .transform("babelify", {
      presets: ["es2015"],
      extensions: [".ts"],
    })
    .bundle()
    .pipe(source("functionality.min.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

// Compressing The Dist Folder For The User
gulp.task("compress", () => {
  return gulp.src("./dist").pipe(zip("functionalty.zip")).pipe(gulp.dest("./"));
});

// Watch Task (Main Task)
gulp.task("watch", () => {
  require("./server.js");
  livereload.listen();
  gulp.watch(
    ["./project/html/*.pug", "./project/html/**/*.pug"],
    gulp.series("html")
  );

  gulp.watch(
    ["./project/css/*.scss", "./project/css/**/*.scss"],
    gulp.series("styles")
  );

  gulp.watch(
    ["./project/js/*.js", "./project/js/**/*.js"],
    gulp.series("scripts")
  );

  gulp.watch("./project/ts/functionality/*.ts", gulp.series("functionality"));
});
