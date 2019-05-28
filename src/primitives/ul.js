// @flow
import React from 'react'
import Box from 'ui-box'

export default function Ul({ children, ...styles }) {
  return (
    <Box
      is="ul"
      marginLeft={0}
      {...styles}
    >
      {children}
    </Box>
  )
}
