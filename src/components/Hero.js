// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'
import ReactPlayer from 'react-player'

import { Button, Flex, Heading } from 'primitives'

import { track } from 'utils/analytics'
// import { rhythm, scale } from 'utils/typography'

export default function Hero() {
  return (
    <MediaQuery maxWidth={904}>
      {mobile => (
        <Flex alignItems="center" className="hero-flex-direction-fouc" justifyContent="center">
          <Box className="hero-fouc" width={mobile ? '100%' : 420}>
            <Heading h={2} opacity={0.4} size={320} textAlign={mobile ? 'center' : 'left'}>
              Get frontend staging
              <br />
              environments on demand.
            </Heading>
            <Heading h={2} opacity={0.4} size={320} textAlign={mobile ? 'center' : 'left'}>
              Gather team feedback
              <br />
              earlier in the dev cycle.
            </Heading>
            <Heading h={3} opacity={0.4} size={320} textAlign={mobile ? 'center' : 'left'}>
              Works with all frameworks
              <br />
              and hosting providers.
            </Heading>
            <Flex flexDirection="row" marginTop={40}>
              <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? '100%' : 200}>
                <Button
                  href="https://dashboard.featurepeek.com/login"
                  iconAfter={mobile ? undefined : 'fas fa-arrow-right'}
                  onClick={() => track('Clicked CTA', { cta: 'Hero' })}
                >
                  Get started now
                </Button>
              </Flex>
              <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? '100%' : 200}>
                <Button background="white" href="https://dashboard.featurepeek.com/demo">
                  View a demo
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box
            marginTop={mobile ? 80 : 0}
            paddingLeft={mobile ? 0 : 79}
            paddingRight={0}
            width={mobile ? '100%' : '60%'}
          >
            <Box boxShadow="0px 20px 80px rgba(40, 40, 40, 0.15)" position="relative" paddingTop="56.25%">
              <ReactPlayer
                className="react-player"
                config={{
                  youtube: {
                    preload: true,
                    playerVars: {
                      autoplay: 1,
                      modestbranding: 1,
                    },
                  },
                }}
                controls
                height="100%"
                muted
                playing
                url="https://www.youtube.com/embed/OSvst-lCySE?background=transparent"
                width="100%"
                wrapper="center"
              />
            </Box>
          </Box>
        </Flex>
      )}
    </MediaQuery>
  )
}
