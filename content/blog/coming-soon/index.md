---
title: Party like it's 2017 with fidget spinners
date: "2019-06-04T22:12:03.284Z"
description: The tye-dye one looks dope.
hero: hero.jpg
---

# Coming soon! Stay tuned :-) 

Here are some ideas that I am sharing. 

```js
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

```
 