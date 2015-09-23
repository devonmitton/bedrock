var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');


// Transpile SASS, with Autoprefixer and Sourcemaps
gulp.task('styles', function() {
  gulp.src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});

// Default: watch the SASS files for changes
gulp.task('default', function() {
  gulp.watch('src/css/**/*.scss', ['styles']);
});
