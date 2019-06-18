// @flow
import React from 'react'
import Box from 'ui-box'

export default function Code({ children, ...styles }) {
  return (
    <Box
      is="code"
      background="rgba(16, 112, 202, 0.0588235)"
      borderRadius={2}
      boxShadow="rgba(16, 112, 202, 0.137255) 0px 0px 0px 1px inset"
      color="rgb(66, 90, 112)"
      paddingX={6}
      paddingY={3}
      {...styles}
    >
      {children}
    </Box>
  )
}
