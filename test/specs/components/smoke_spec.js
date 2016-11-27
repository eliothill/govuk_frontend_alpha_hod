const expect = require('chai').expect
const nunjucks = require('nunjucks')

const components = require('../../../app/data')

const expectComponentRenders = (name, input) => {
  let componentPath = `app/components/${name}.html.nunjucks`
  expect(() => {
    nunjucks.render(componentPath, input)
  }).to.not.throw()
}

describe('Components render examples without errors', function () {
  Object.keys(components).map(componentName => {
    it(`${componentName} (default) renders without error`, () => {
      // This only renders the first/main example, @TODO render all variants
      expectComponentRenders(componentName, components[componentName].context)
    })
  })
})
