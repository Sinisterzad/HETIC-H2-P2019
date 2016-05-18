var gulp = require('gulp')
var gutil = require('gulp-util')
var ftp = require('vinyl-ftp')
var ftpCredentials = require('./ftp.credentials')

gulp.task('deploy', function () {

  var conn = ftp.create({
    host: ftpCredentials.host,
    user: ftpCredentials.user,
    password: ftpCredentials.password,
    log: gutil.log
  })

  var globs = ['dist/**/*']

  return gulp.src(globs, { base: 'dist', buffer: false } )
    .pipe(conn.newer('/www/vuejs-portfolio')) // only upload newer files
    .pipe(conn.dest('/www/vuejs-portfolio'))

})