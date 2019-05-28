// @flow
import React from 'react'
import Box from 'ui-box'

export default function Icon({ icon, ...styles }) {
  return (
    <Box
      is="i"
      className={icon}
      {...styles}
    />
  )
}
