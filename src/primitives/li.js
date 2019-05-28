// @flow
import React from 'react'
import Box from 'ui-box'

export default function Li({ children, ...styles }) {
  return (
    <Box
      is="li"
      fontSize={15}
      listStyleType="none"
      marginBottom={4}
      {...styles}
    >
      {children}
    </Box>
  )
}
