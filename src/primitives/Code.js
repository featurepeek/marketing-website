// @flow
import React from 'react'
import Box from 'ui-box'

export default function Code({ children, ...styles }) {
  return (
    <Box is="code" {...styles}>
      {children}
    </Box>
  )
}
