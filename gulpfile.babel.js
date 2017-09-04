'use strict';

import gulp from 'gulp';
import config from './config';

gulp.task('scripts', function(){
	return gulp.src(config.PATH.DEV+'/scripts/**/*.js')
		gulp.dest(config.PATH.PROD)
});

gulp.task('default', [
	'scripts'
]);