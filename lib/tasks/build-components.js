'use strict'

const paths = require('../../config/paths.json')
const packageJson = require('../../package.json')

const gulp = require('gulp')
const rename = require('gulp-rename')

const transpiler = require('../transpilation/transpiler.js')

let transpileRunner = templateLanguage => {
  return gulp.src(paths.components + '*')
    .pipe(transpiler.transpileComponent(templateLanguage, packageJson.version))
    // no .html prefix like build:template, components have different naming convention
    // @FIXME: standardise the naming convention in source
    .pipe(rename({extname: '.' + templateLanguage}))
    .pipe(gulp.dest(paths.bundleComponents))
}

// Task for transpiling the templates
gulp.task('build:components', [
  'build:components:nunjucks'
])

gulp.task('build:components:nunjucks', transpileRunner.bind(null, 'nunjucks'))
