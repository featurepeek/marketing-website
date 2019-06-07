// @flow
import React from 'react'
import Box from 'ui-box'

import { Column, Flex, Heading } from 'primitives'

import Faq from 'components/Faq'

// import { rhythm, scale } from 'utils/typography'

export default function Faqs({ heading, faqs }) {
  return (
    <Box background="#f8f8f8" margin={-39} padding={40}>
      <Heading h={3} margin={40} size={360} textAlign="center">
        {heading}
      </Heading>
      <Flex marginY={80}>
        {faqs.map((column, i) => (
          <Column key={i} marginLeft={i % 2 === 0 ? 0 : 16} marginRight={i % 2 === 0 ? 16 : 0}>
            {column.map(faq => (
              <Faq key={faq.question} {...faq} />
            ))}
          </Column>
        ))}
      </Flex>
    </Box>
  )
}
