// @flow
import React from 'react'
import Box from 'ui-box'

import { Button, Flex, Heading, Icon, Paragraph, Strong } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function CtaBox({ question, answer }) {
  return (
    <Box background="radial-gradient(#0d5166, #0a3e53)" paddingX={80} paddingY={120}>
      <Heading color="white" h={5} size={500} textAlign="center">
        Request your free trial today.
      </Heading>
      {/* <Paragraph color="white" fontSize={40} textAlign="center">Request your free trial now.</Paragraph> */}
      <Flex alignItems="center" justifyContent="center" height={100}>
        <Button href="/pricing">Get started</Button>
      </Flex>
    </Box>
  )
}
