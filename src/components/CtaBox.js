// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Flex, Heading } from 'primitives'

import { track } from 'utils/analytics'
// import { rhythm, scale } from 'utils/typography'

export default function CtaBox({ light, brew }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box
          background={light ? 'radial-gradient(#fff, #f8f8f8)' : 'radial-gradient(#0d5166, #0a3e53)'}
          paddingX={mobile ? 40 : 80}
          paddingY={mobile ? 60 : 120}
        >
          <>
            <Heading color={light ? undefined : 'white'} h={5} size={500} textAlign="center">
              FeaturePeek is joining Netlify.
            </Heading>
            <Flex alignItems="center" justifyContent="center" height={100}>
              <Button
                href="/blog/featurepeek-has-joined-netlify/"
                onClick={() => track('Clicked CTA', { cta: 'CtaBox' })}
              >
                Read the announcement
              </Button>
            </Flex>
          </>
        </Box>
      )}
    </MediaQuery>
  )
}
