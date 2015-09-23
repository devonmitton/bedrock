var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
// var livereload   = require('gulp-livereload');


// Transpile SASS, with Autoprefixer and Sourcemaps
gulp.task('styles', function() {
  gulp.src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
    // .pipe(livereload());
});

// Default: watch the SASS files for changes
gulp.task('default', function() {
  // livereload.listen();
  gulp.watch('src/css/**/*.scss', ['styles']);
});
