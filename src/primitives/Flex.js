// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

export default function Flex({ children, ...styles }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box display="flex" flexDirection={mobile ? 'column' : 'row'} {...styles}>
          {children}
        </Box>
      )}
    </MediaQuery>
  )
}
