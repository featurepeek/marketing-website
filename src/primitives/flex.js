// @flow
import React from 'react'
import Box from 'ui-box'

export default function Flex({ children, ...styles }) {
  return (
    <Box
      display="flex"
      {...styles}
    >
      {children}
    </Box>
  )
}
