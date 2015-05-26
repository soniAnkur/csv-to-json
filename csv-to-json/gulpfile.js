var gulp = require('gulp');
var convert = require('gulp-convert');

gulp.task('csv2json', function(){
  gulp.src(['*.csv'])
    .pipe(convert({
      from: 'csv',
      to: 'json'
    }))
    .pipe(gulp.dest('dest/'));
});
