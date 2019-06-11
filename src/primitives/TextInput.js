// @flow
import React from 'react'
import Box from 'ui-box'

// import Flex from 'primitives/flex'

export default function TextInput({ children, type = 'text', ...props }) {
  return (
    <Box
      is="input"
      type={type}
      background="white"
      border="0"
      borderRadius={8}
      paddingX={12}
      paddingY={8}
      width="100%"
      {...props}
    >
      {children}
    </Box>
  )
}
