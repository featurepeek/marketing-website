// @flow
import React from 'react'
import Box from 'ui-box'

export default function Text({ children, ...styles }) {
  return (
    <Box is="span" {...styles}>
      {children}
    </Box>
  )
}
