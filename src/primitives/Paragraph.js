// @flow
import React from 'react'
import Box from 'ui-box'

export default function Paragraph({ children, ...styles }) {
  return (
    <Box is="p" {...styles}>
      {children}
    </Box>
  )
}
