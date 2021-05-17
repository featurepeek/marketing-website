// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Flex, Heading } from 'primitives'

import { track } from 'utils/analytics'
import NetliPeek from 'images/NetliPeek'
// import { rhythm, scale } from 'utils/typography'

export default function Hero() {
  return (
    <MediaQuery maxWidth={904}>
      {mobile => (
        <>
          <Box
            background="linear-gradient(#fff, #effefe)"
            margin={-39}
            paddingBottom={80}
            paddingTop={40}
            paddingX={mobile ? 39 : 40}
          >
            <Flex alignItems="center" className="hero-flex-direction-fouc" justifyContent="center">
              <Box className="hero-fouc" width={mobile ? '100%' : 420}>
                <Heading color="#a6a7b0" h={2} lineHeight={1.4} size={240} textAlign={mobile ? 'center' : 'left'}>
                  FeaturePeek is now a part of Netlify! We're working together to help teams deliver better web
                  experiences by sharing, reviewing, and managing feedback with collaborative Deploy Previews.
                </Heading>
              </Box>
              <Box
                paddingLeft={mobile ? 64 : 80}
                paddingRight={mobile ? 64 : 0}
                paddingTop={mobile ? 16 : 64}
                paddingBottom={mobile ? 32 : 64}
                width={mobile ? '100%' : '50%'}
              >
                <NetliPeek />
              </Box>
            </Flex>
            <Flex justifyContent="center" flexDirection="row" marginTop={40}>
              <Flex width={440}>
                <Flex alignItems="center" justifyContent="center" height={100} width="100%">
                  <Button
                    href="https://netlify.com/products/deploy-previews"
                    iconAfter={mobile ? undefined : 'fas fa-arrow-right'}
                    onClick={() => track('Clicked CTA', { cta: 'Hero' })}
                  >
                    Check out the launch
                  </Button>
                </Flex>
                <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? '100%' : 260}>
                  <Button background="white" href="/blog/featurepeek-has-joined-netlify/">
                    Learn more
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box marginX={-39} marginTop={-39}>
            <img alt="" height="40" src="/img/curve.svg" width="100%" />
          </Box>
        </>
      )}
    </MediaQuery>
  )
}
