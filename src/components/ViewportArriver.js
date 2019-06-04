// @flow
import React, { useState, useEffect, useRef } from 'react'
import Box from 'ui-box'

import { Paragraph } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function ViewportArriver(props) {
  const { paragraph, handleArrival, handleDeparture } = props
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
      <div ref={imageEl} style={{ background: '#a0b1b9', height: 300, marginTop: 60, width: '100%' }} />
      <Paragraph marginTop={16} marginBottom={160}>
        {paragraph}
      </Paragraph>
    </Box>
  )
}
