const expect = require('chai').expect
const nunjucks = require('nunjucks')
const dedent = require('dedent-js')

const componentPath = 'app/components/button.html.nunjucks'
const expectComponent = (input, expected) => {
  expect(
    nunjucks.render(componentPath, input)
  ).to.equal(
    // Remove the additional template string indentation
    // Extra new line to match rendered ouput
    dedent(expected) + '\n'
  )
}

describe('Button component', function () {
  it('should render', () => {
    expectComponent(
      { text: 'hello!' },
      `<button class="gv-c-button">
        hello!
      </button>`
    )
  })

  it('should render primary', function () {
    expectComponent(
      { text: 'hello!', isPrimary: true },
      `<button class="gv-c-button gv-c-button--primary">
        hello!
      </button>`
    )
  })

  it('should render type', function () {
    expectComponent(
      {text: 'hello!', type: 'submit'},
      `<button class="gv-c-button" type="submit">
        hello!
      </button>`
    )
  })
})
