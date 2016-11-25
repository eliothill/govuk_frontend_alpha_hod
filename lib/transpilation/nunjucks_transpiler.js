'use strict'

// Nunjucks templates
// The original template is already in Nunjucks, but needs version markers added

const assetPath = (asset, version) => `{{ asset_path }}${asset}?${version}`

const componentArgs = (file, name, args) => {
  const func = `${name}(${args.join(', ')})`
  const parts = [
    `{% macro ${func} %}`,
    file.contents,
    '{% endmacro %}'
  ]
  return parts.join('\n')
}

module.exports.assetPath = assetPath
module.exports.componentArgs = componentArgs
