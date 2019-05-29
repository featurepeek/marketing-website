// @flow
import React from 'react'
import Box from 'ui-box'

export default function Emphasis({ children, ...styles }) {
  return (
    <Box is="em" {...styles}>
      {children}
    </Box>
  )
}
