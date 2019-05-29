// @flow
import React from 'react'
import Box from 'ui-box'

export default function Strong({ children, ...styles }) {
  return (
    <Box is="strong" {...styles}>
      {children}
    </Box>
  )
}
