// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'
import jump from 'jump.js'

import { Button, Flex, Heading } from 'primitives'

import HeroDashboard from 'images/HeroDashboard'

import { track } from 'utils/analytics'
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
            <Flex flexDirection="row">
              <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? '100%' : 180}>
                <Button
                  href="https://dashboard.featurepeek.com/login"
                  onClick={() => track('Clicked Plan', 'Hero')}
                  target="_blank"
                >
                  Get started now
                </Button>
              </Flex>
              <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? '100%' : 180}>
                <Button background="white" onClick={scrollToVideo}>
                  Watch a video
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box position="relative" top={mobile ? 0 : -48} left={mobile ? 0 : 39} width={mobile ? '100%' : '60%'}>
            <HeroDashboard />
          </Box>
        </Flex>
      )}
    </MediaQuery>
  )
}
