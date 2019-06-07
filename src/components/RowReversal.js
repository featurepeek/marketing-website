// @flow
import React from 'react'
import Box from 'ui-box'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import { rhythm, scale } from 'utils/typography'

export default function RowReversal(props) {
  const { copyWritings, theme, flip = 0 } = props
  return (
    <Box marginTop={100}>
      {copyWritings.map(({ heading, paragraphs, color, buttonProps }, i) => (
        <Flex key={heading} flexDirection={i % 2 === flip ? 'row' : 'row-reverse'}>
          <Box width="45%">
            <Heading color={theme || color || 'inherit'} h={2} {...scale(1.2)} marginBottom={rhythm(1)}>
              {heading}
            </Heading>
            {paragraphs.map(paragraph => (
              <Paragraph key={paragraph} {...scale(1 / 4)} marginBottom={rhythm(0.75)}>
                {paragraph}
              </Paragraph>
            ))}
            {buttonProps && (
              <Flex alignItems="center" height={100}>
                <Button {...buttonProps} />
              </Flex>
            )}
          </Box>
          <Box width="45%" />
        </Flex>
      ))}
    </Box>
  )
}
