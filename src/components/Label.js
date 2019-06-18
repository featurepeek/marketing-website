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
      marginBottom={2}
      marginRight={4}
      paddingX={6}
      paddingY={3}
      size={300}
      whiteSpace="nowrap"
    >
      {label.name}
    </Strong>
  )
}
