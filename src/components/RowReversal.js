// @flow
import React from 'react'
import Box from 'ui-box'

import { Flex, Heading, Paragraph } from 'primitives'

import { rhythm, scale } from 'utils/typography'

export default function RowReversal(props) {
  const { copyWritings, theme } = props
  return (
    <Box marginTop={300}>
      {copyWritings.map(({ heading, paragraphs }, i) => (
        <Flex key={heading} flexDirection={i % 2 === 0 ? 'row' : 'row-reverse'}>
          <Box width="45%">
            <Heading color={theme} h={2} {...scale(1.2)} marginBottom={rhythm(1)}>
              {heading}
            </Heading>
            {paragraphs.map(paragraph => (
              <Paragraph key={paragraph} {...scale(1 / 4)} marginBottom={rhythm(0.75)}>
                {paragraph}
              </Paragraph>
            ))}
          </Box>
          <Box width="45%" />
        </Flex>
      ))}
    </Box>
  )
}
