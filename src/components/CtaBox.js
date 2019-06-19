// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Flex, Heading } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function CtaBox({ question, answer }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box background="radial-gradient(#0d5166, #0a3e53)" paddingX={mobile ? 40 : 80} paddingY={mobile ? 60 : 120}>
          <Heading color="white" h={5} size={500} textAlign="center">
            Request your free trial today.
          </Heading>
          {/* <Paragraph color="white" fontSize={40} textAlign="center">Request your free trial now.</Paragraph> */}
          <Flex alignItems="center" justifyContent="center" height={100}>
            <Button href="https://airtable.com/shrUZixSNBqSzmdTc?prefill_Plan=Business" target="_blank">
              Get started now
            </Button>
          </Flex>
        </Box>
      )}
    </MediaQuery>
  )
}
