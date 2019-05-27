// @flow
import React from 'react'
import Box from 'ui-box'
import { Link as GatsbyLink } from 'gatsby'

export default function Link({ children, href, ...props }) {
  return (
    <GatsbyLink className="link" to={href}>
      <Box
        is="span"
        color="#05c5cc"
        display="inline-block"
        transition="all 0.1s ease"
        {...props}
      >
        {children}
      </Box>
    </GatsbyLink>
  )
}
