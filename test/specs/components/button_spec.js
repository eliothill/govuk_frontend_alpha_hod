const expect = require('chai').expect
const nunjucks = require('nunjucks')

const componentPath = 'app/components/button.html.nunjucks'
const expectRender = (input, expected) => expect(nunjucks.render(componentPath, input)).to.equal(expected)

describe('Button component', function () {
  it('should render', function (done) {
    expectRender({text: 'hello!'}, `<button class="gv-c-button">
  hello!
</button>
`)
    done()
  })

  it('should render primary', function (done) {
    expectRender({text: 'hello!', isPrimary: true}, `<button class="gv-c-button gv-c-button--primary">
  hello!
</button>
`)
    done()
  })

  it('should render type', function (done) {
    expectRender({text: 'hello!', type: 'submit'}, `<button class="gv-c-button" type="submit">
  hello!
</button>
`)
    done()
  })
})
