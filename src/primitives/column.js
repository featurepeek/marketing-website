// @flow
import React from 'react'
import Box from 'ui-box'

export default function Column({ children, ...styles }) {
  return (
    <Box
      display="block"
      flexBasis={0}
      flexGrow={1}
      flexShrink={1}
      {...styles}
    >
      {children}
    </Box>
  )
}
