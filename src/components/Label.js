// @flow
import React from 'react'
import { Strong } from 'primitives'

// utils
import { getTextColorForBackgroundColor } from 'utils/color'

export default function Label(props) {
  const { label } = props
  return (
    <Strong
      background={label.color}
      borderRadius={2}
      color={getTextColorForBackgroundColor(label.color)}
      display="inline-block"
      fontSize={12}
      marginBottom={2}
      marginRight={4}
      paddingX={6}
      paddingY={1}
      whiteSpace="nowrap"
    >
      {label.name}
    </Strong>
  )
}
