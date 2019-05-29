// @flow
import React from 'react'
import Box from 'ui-box'
import { Link as GatsbyLink } from 'gatsby'

export default function Link({ children, href = '', target, underline = true, ...styles }) {
  const className = underline ? 'underline' : 'normal'
  const span = (
    <Box
      is="span"
      color="#05c5cc"
      display="inline-block"
      transition="all 0.1s ease"
      {...styles}
    >
      {children}
    </Box>
  )

  if (href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a className={className} href={href} target={target}>
        {span}
      </a>
    )
  }

  return (
    <GatsbyLink activeClassName="active-link" className={className} to={href} target={target}>
      {span}
    </GatsbyLink>
  )
}
