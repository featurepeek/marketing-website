// @flow
import React from 'react'
import Box from 'ui-box'

import Icon from 'primitives/Icon'
import Link from 'primitives/Link'

import { gradientMap } from 'utils/color'

export default function Button({ background = 'teal', children, href, iconBefore, iconAfter, target, ...styles }) {
  const [from, to] = gradientMap[background]
  return (
    <Box
      alignItems="center"
      background={`linear-gradient(${from}, ${to})`}
      backgroundColor={from}
      border="0"
      borderRadius={36}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.15)"
      className="button"
      // color="#fff"
      // cursor="pointer"
      // display="block"
      fontSize={18}
      fontWeight={500}
      justifyContent="center"
      // paddingX={16}
      // paddingY={8}
      textShadow="0 0 2px rgba(0, 0, 0, 0.2)"
      transition="all 0.1s cubic-bezier(0, 0, 1, 2)"
      whiteSpace="nowrap"
      {...styles}
    >
      <Link
        color="white"
        href={href}
        paddingBottom={10}
        paddingLeft={20}
        paddingRight={20}
        paddingTop={10}
        target={target}
        underline={false}
      >
        {iconBefore && <Icon icon={iconBefore} marginRight={12} />}
        {children}
        {iconAfter && <Icon icon={iconAfter} marginLeft={12} />}
      </Link>
    </Box>
  )
}
