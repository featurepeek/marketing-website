// @flow
import React, { useState, useEffect, useRef } from 'react'
import Box from 'ui-box'

import { Paragraph, Strong } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function ViewportArriver(props) {
  const { strong, paragraph, image, handleArrival, handleDeparture } = props
  const [isInViewport, setInViewport] = useState(false)
  const imageEl = useRef(null)

  useEffect(() => {
    const scrollListener = () => {
      if (!imageEl.current) {
        return
      }

      if (!isInViewport && imageEl.current.getBoundingClientRect().bottom < window.innerHeight) {
        handleArrival()
        setInViewport(true)
      }

      if (isInViewport && imageEl.current.getBoundingClientRect().bottom > window.innerHeight) {
        handleDeparture()
        setInViewport(false)
      }
    }

    document.addEventListener('scroll', scrollListener)
    return () => {
      document.removeEventListener('scroll', scrollListener)
    }
  }, [isInViewport, imageEl, handleArrival, handleDeparture])

  return (
    <Box>
      {image}
      <div ref={imageEl} style={{ height: 1, width: '100%' }} />
      <Paragraph marginTop={16} marginBottom={160}>
        <Strong>{strong}</Strong> {paragraph}
      </Paragraph>
    </Box>
  )
}
