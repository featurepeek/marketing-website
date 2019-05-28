// @flow
import React from 'react'
import Box from 'ui-box'

// import Flex from 'primitives/flex'

export default function Button({ children, href, ...styles }) {
  return (
    <Box
      is={href ? 'a' : 'button'}
      background="linear-gradient(#05c5cc, #13b7d1)"
      backgroundColor="#05c5cc"
      border="0"
      borderRadius={36}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.15)"
      className="button"
      color="#fff"
      cursor="pointer"
      display="flex"
      fontSize={18}
      fontWeight={500}
      paddingX={16}
      paddingY={8}
      textShadow="0 0 2px rgba(0, 0, 0, 0.2)"
      transition="all 0.1s cubic-bezier(0, 0, 1, 2)"
      {...styles}
    >
      {children}
    </Box>
  )
}
