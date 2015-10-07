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

// HTML
gulp.task('html', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

// Watch for SASS changes
gulp.task('watch:sass', function() {
  gulp.watch('src/css/**/*.scss', ['styles']);
});

// Build Everything
gulp.task('build', ['styles', 'html']);

// Default: Build Everything
gulp.task('default', ['build']);
