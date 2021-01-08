// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Column, Flex, Heading } from 'primitives'

import Faq from 'components/Faq'

// import { rhythm, scale } from 'utils/typography'

export default function Faqs({ heading, faqs }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box
          background="#f9f9fb"
          marginX={mobile ? -15 : -39}
          marginBottom={-40}
          paddingX={mobile ? 16 : 40}
          paddingY={40}
        >
          <Heading h={3} id="faqs" margin={40} size={360} textAlign="center">
            {heading}
          </Heading>
          <Flex id="product-faqs" marginY={80}>
            {faqs.map((column, i) => (
              <Column
                key={i}
                marginLeft={mobile ? 0 : i % 2 === 0 ? 0 : 16}
                marginRight={mobile ? 0 : i % 2 === 0 ? 16 : 0}
              >
                {column.map(faq => (
                  <Faq key={faq.question} {...faq} />
                ))}
              </Column>
            ))}
          </Flex>
        </Box>
      )}
    </MediaQuery>
  )
}
