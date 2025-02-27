'use strict'

const gulp = require('gulp')
// require the Fractal instance
const fractal = require('../../fractal/config/fractal.js')
// keep a reference to the fractal CLI console utility
const logger = fractal.cli.console

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', function () {
  const builder = fractal.web.builder()
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'))
  builder.on('error', err => logger.error(err.message))
  return builder.build().then(() => {
    logger.success('Fractal build completed!')
  })
})
