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
        <Flex margin={mobile ? -15 : -39} padding={mobile ? 16 : 40} overflowX="hidden">
          <Box width={mobile ? '100%' : '40%'}>
            <Heading marginTop={0} size={500}>
              A new way to gather front-end feedback from your team.
            </Heading>
            <Heading h={2} opacity={0.4} size={360}>
              Spin up environments for every branch automatically.
            </Heading>
            <Heading h={2} opacity={0.4} size={360}>
              Annotate directly on the implementation.
            </Heading>
            {/* <Heading h={2} opacity={0.4} size={360}> */}
            {/*   See a real-time overview of your active projects. */}
            {/* </Heading> */}
            <Heading h={3} opacity={0.4} size={360}>
              All without merges,
              <br />
              run-time dependencies,
              <br />
              or browser extensions.
            </Heading>
          </Box>
          <Box position="relative" left={mobile ? 0 : 39} width={mobile ? '100%' : '60%'}>
            <HeroDashboard />
          </Box>
        </Flex>
      )}
    </MediaQuery>
  )
}
