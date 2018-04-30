var gulp = require('gulp');
var ts = require('gulp-typescript');
var size    = require('gulp-size');
var del     = require('del');
var gzip = require('gulp-gzip');

gulp.task('ts', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'all.js'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['ts'], function() {
  return gulp.src('dist/**/*')
    .pipe(size({title: 'build', gzip: true}));
});

gulp.task('watch', ['clean'], function() {
    gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
