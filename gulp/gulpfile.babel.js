'use strict';

import gulp from 'gulp';
import newer from 'gulp-newer';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

gulp.task('scripts', () => {
    return gulp.src('/dev/**/*.js', since('scripts'))
        .pipe(newer())
        .pipe(gulp.dest('/prod'))
});

function since(taskName) {
    return {
        since: gulp.lastRun(taskName)
    };
}