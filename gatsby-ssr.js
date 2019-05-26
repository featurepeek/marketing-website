// @flow
const React = require('react')
const { renderToString } = require('react-dom/server')
const { extractStyles } = require('ui-box')

// ui-box css hydration
exports.replaceRenderer = ({ bodyComponent, setHeadComponents, setPostBodyComponents }) => {
  const bodyHTML = renderToString(bodyComponent)
  const { styles, cache } = extractStyles()

  setHeadComponents(
    <style dangerouslySetInnerHTML={{ __html: styles }} />
  )
  setPostBodyComponents(
    <script 
      id="ui-box-cache"
      type="application/json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cache) }}
    />
  )
}
