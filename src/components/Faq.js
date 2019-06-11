// @flow
import React from 'react'
import Box from 'ui-box'

import { Flex, Icon, Paragraph, Strong } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function Faq({ question, answer }) {
  return (
    <Box
      background="white"
      borderRadius={8}
      boxShadow="0 2px 4px #eee"
      paddingX={24}
      paddingY={32}
      marginBottom={32}
      width="100%"
    >
      <Flex flexDirection="row">
        <Icon icon="fas fa-question-circle" color="#05c5cc" fontSize={32} marginRight={16} />
        <div>
          <Paragraph>
            <Strong fontSize={19}>{question}</Strong>
          </Paragraph>
          <Paragraph>{answer}</Paragraph>
        </div>
      </Flex>
    </Box>
  )
}
