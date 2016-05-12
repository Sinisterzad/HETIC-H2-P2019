var gulp = require('gulp')
var stylus = require('gulp-stylus')
var babel = require('gulp-babel')
var livereload = require('gulp-livereload')

// Stylus task
gulp.task('stylus', function() {
  return gulp.src('./assets/css/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// Babel task
gulp.task('babel', function() {
  return gulp.src('./assets/js/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(livereload())
})

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('./assets/css/**/*.styl', ['stylus'])
  gulp.watch('./assets/js/**/*.js', ['babel'])
  livereload.listen()
})

// Move files
// gulp.task('move', function() {
//   gulp.src('index.html')
//     .pipe(gulp.dest('build/'))
// })

// The default task (called when you run 'gulp' from cli)
gulp.task('default', ['watch', 'stylus', 'babel'])