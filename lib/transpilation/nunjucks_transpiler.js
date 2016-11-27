'use strict'

// Nunjucks templates
// The original template is already in Nunjucks, but needs version markers added

const assetPath = (asset, version) => `{{ asset_path }}${asset}?${version}`

const kebabToCamel = string => {
  return string.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase()
  })
}

const componentArgs = (fileContents, name, args) => {
  // Nunjucks macros can't contain hyphens, convention is camel case
  const func = `${kebabToCamel(name)}(${args.join(', ')})`
  const parts = [
    `{% macro ${func} %}`,
    fileContents,
    '{% endmacro %}'
  ]
  return parts.join('\n')
}

module.exports.assetPath = assetPath
module.exports.componentArgs = componentArgs
