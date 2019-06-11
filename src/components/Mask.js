// @flow
import React from 'react'
import Box from 'ui-box'

export default function CtaBox({ children, round = true, shadow = true, ...styles }) {
  return (
    <Box
      background="white"
      borderRadius={round ? 8 : 0}
      boxShadow={shadow ? '0 2px 4px rgba(0, 0, 0, 0.08), -10px 20px 40px rgba(0, 0, 0, 0.08)' : undefined}
      overflow="hidden"
      {...styles}
    >
      {children}
    </Box>
  )
}
