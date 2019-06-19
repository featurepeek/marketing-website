// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'
import jump from 'jump.js'

import { Flex, Heading, Link } from 'primitives'

import HeroDashboard from 'images/HeroDashboard'

// import { rhythm, scale } from 'utils/typography'

export default function Hero() {
  const scrollToDemo = event => {
    event.preventDefault()
    window.history.replaceState({}, '', '#demo')
    jump('#demo', {
      duration: 600,
    })
  }

  const scrollToVideo = event => {
    event.preventDefault()
    window.history.replaceState({}, '', '#video')
    jump('#video', {
      duration: 600,
    })
  }

  return (
    <MediaQuery maxWidth={904}>
      {mobile => (
        <Flex margin={mobile ? -15 : -39} padding={mobile ? 16 : 40} overflowX="hidden">
          <Box left={-48} top={-24} overflow="hidden" position="relative" width={mobile ? '100%' : '60%'}>
            <HeroDashboard />
          </Box>
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
            <Heading h={3} opacity={0.4} size={360}>
              All without merges,
              <br />
              run-time dependencies,
              <br />
              or browser extensions.
            </Heading>
            <Heading h={3} marginTop={32} size={360}>
              <Link href="#demo" onClick={scrollToDemo}>
                <span>See a demo.</span>
              </Link>
            </Heading>
            <Heading h={3} marginTop={0} size={360}>
              <Link href="#video" onClick={scrollToVideo}>
                <span>Watch a video.</span>
              </Link>
            </Heading>
          </Box>
        </Flex>
      )}
    </MediaQuery>
  )
}
