// @flow
import React from 'react'
import Box from 'ui-box'
import { Link as GatsbyLink } from 'gatsby'

export default function Link({ children, href = '', onMouseEnter, onMouseLeave, target, underline = true, ...styles }) {
  const className = underline ? 'underline' : 'normal'
  const span = (
    <Box is="span" color="#05c5cc" display="inline-block" transition="all 0.15s ease" {...styles}>
      {children}
    </Box>
  )

  if (!href || href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a className={className} href={href} target={target}>
        {span}
      </a>
    )
  }

  return (
    <GatsbyLink
      activeClassName={underline ? 'active-link' : undefined}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      partiallyActive
      to={href}
      target={target}
      style={href === '/' ? { lineHeight: 0 } : undefined}
    >
      {span}
    </GatsbyLink>
  )
}
