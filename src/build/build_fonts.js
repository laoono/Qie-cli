/**
 * @author: laoona
 * @date:  2020-07-31
 * @time: 15:53
 * @contact: laoono.com
 * @description: #
 */
const path = require('path');
const gulp = require('gulp');
const debug = require('gulp-debug');
const gutil = require('gulp-util');

const src = '/src/assets';
const projectDir = process.cwd();
const buildDir = path.join(projectDir, '/dist/fonts');

module.exports = () => {
  return gulp.src(projectDir + src + '/fonts/**/*')
    .pipe(debug({title: 'SLICE-FONTS: ' + gutil.colors.green('✔')}))
    .pipe(gulp.dest(buildDir));
}
