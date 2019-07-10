// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'
import jump from 'jump.js'

import { Flex, Heading, Link } from 'primitives'

import HeroDashboard from 'images/HeroDashboard'

// import { rhythm, scale } from 'utils/typography'

export default function Hero() {
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
        <Flex>
          <Box width={mobile ? '100%' : '40%'}>
            <Heading marginTop={0} size={500}>
              Front-end review for the whole team.
            </Heading>
            <Heading h={2} opacity={0.4} size={360}>
              Spin up environments for every branch automatically.
            </Heading>
            <Heading h={2} opacity={0.4} size={360}>
              Gather team feedback
              <br />
              earlier in the dev cycle.
            </Heading>
            <Heading h={3} opacity={0.4} size={360}>
              Without dependencies
              <br />
              or browser extensions.
            </Heading>
            <Heading h={3} marginTop={32} size={360}>
              <Link href="#video" onClick={scrollToVideo}>
                <span>Watch a video.</span>
              </Link>
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
