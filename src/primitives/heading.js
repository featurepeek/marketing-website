// @flow
import React from 'react'
import Box from 'ui-box'

export default function Button({ children, h = 1, size = 600, ...styles }) {
  const tag = `h${h}`
  return (
    <Box
      is={tag}
      borderBottom="0"
      fontSize={size / 10}
      {...styles}
    >
      {children}
    </Box>
  )
}
