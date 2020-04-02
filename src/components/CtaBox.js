// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Flex, Heading } from 'primitives'

import { track } from 'utils/analytics'
// import { rhythm, scale } from 'utils/typography'

export default function CtaBox({ question, answer }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box background="radial-gradient(#0d5166, #0a3e53)" paddingX={mobile ? 40 : 80} paddingY={mobile ? 60 : 120}>
          <Heading color="white" h={5} size={500} textAlign="center">
            Start a free trial today.
          </Heading>
          <Flex alignItems="center" justifyContent="center" height={100}>
            <Button href="https://dashboard.featurepeek.com" onClick={() => track('Clicked CTA', { cta: 'CtaBox' })}>
              Start two-week trial
            </Button>
          </Flex>
        </Box>
      )}
    </MediaQuery>
  )
}
