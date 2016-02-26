var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');


// Transpile SASS, with Autoprefixer and Sourcemaps
gulp.task('sass', function() {
  gulp.src('_src/css/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css/'));
});

// Watch for SASS changes
gulp.task('watch:sass', function() {
  gulp.watch('_src/css/**/*.scss', ['sass']);
});

// Build Everything
gulp.task('build', ['sass']);

// Default: Build Everything
gulp.task('default', ['build']);
