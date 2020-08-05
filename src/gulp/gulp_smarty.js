/**
 * @author: laoona
 * @date:  2020-07-30
 * @time: 15:15
 * @contact: laoono.com
 * @description: #
 */

const gulp = require('gulp');
const smarty4js = require('gulp-smarty4js-render');
const path = require('path');

const {log} = require('../lib/index');

const projectDir = process.cwd();
const baseDir = path.join(projectDir, './src/views');

const srcFiles = path.join(baseDir, './**/*.tpl');
const distDir = path.join(projectDir, './dist/views');

module.exports = (config = {}) => {
  const smarty4jsConf = config.smarty4jsConf || {};

  return new Promise((resolve => {
    gulp.src([srcFiles])
      .pipe(smarty4js(smarty4jsConf))
      .on('error', function (error) {
        log.error(error.message);
        this.end();
      })
      .pipe(gulp.dest(distDir))
      .on('end', resolve);
  }));
}
