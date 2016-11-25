'use strict'

// Nunjucks templates
// The original template is already in Nunjucks, but needs version markers added

const assetPath = (asset, version) => `{{ asset_path }}${asset}?${version}`

const componentArgs = (fileContents, name, args) => {
  const func = `${name}(${args.join(', ')})`
  const parts = [
    `{% macro ${func} %}`,
    fileContents,
    '{% endmacro %}'
  ]
  return parts.join('\n')
}

module.exports.assetPath = assetPath
module.exports.componentArgs = componentArgs
