import gulp from 'gulp';

import { paths, config } from './gulp/config';
import { js } from './gulp/js';
import { clean } from './gulp/clean';

config.prod = process.argv.indexOf('--prod') > -1;

function manifest() {
    return gulp.src(paths.manifest)
        .pipe(gulp.dest(config.prod ? paths.dest : paths.site));
};

function views() {
    return gulp.src(paths.views)
        .pipe(gulp.dest(config.prod ? paths.dest : `${paths.site}backoffice/`));
}

export const dev = gulp.task('dev',
    gulp.series(clean,
        gulp.parallel(
            manifest,
            views,
            js,
            done => {

                console.log('watching for changes... ctrl+c to exit');
                gulp.watch(paths.js, gulp.series(js, views));
                gulp.watch(paths.views, gulp.series(views));

                done();
            }
        )));
