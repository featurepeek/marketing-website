// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Flex, Heading } from 'primitives'

import HeroDashboard from 'images/HeroDashboard'

// import { rhythm, scale } from 'utils/typography'

export default function Hero() {
  return (
    <MediaQuery maxWidth={904}>
      {mobile => (
        <Flex margin={-39} padding={40} overflowX="hidden">
          <Box width={mobile ? '100%' : '40%'}>
            <Heading marginTop={0} size={500}>
              Collaborate on front-end websites like never before.
            </Heading>
            <Heading h={2} opacity={0.4} size={360}>
              Give feedback on your team's new features as they get implemented.
            </Heading>
            <Heading h={3} opacity={0.4} size={360}>
              No merging.
              <br />
              No hosting.
              <br />
              No browser extension.
            </Heading>
          </Box>
          <Box position="relative" left={39} width={mobile ? '100%' : '60%'}>
            <HeroDashboard />
          </Box>
        </Flex>
      )}
    </MediaQuery>
  )
}
