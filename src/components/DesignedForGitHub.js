// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import IntegrationsOrbit from 'components/IntegrationsOrbit'

// import { rhythm, scale } from 'utils/typography'\

export default function DesignedForGitHub(props) {
  return (
    <MediaQuery maxWidth={1000}>
      {mobile => (
        <Flex alignItems="center">
          <Box width={mobile ? '100%' : '50%'}>
            <Heading h={3} marginTop={mobile ? 40 : 0} size={500}>
              Designed for GitHub.
            </Heading>
            <Heading h={4} marginBottom={40} opacity={0.4} size={360}>
              Integrates with everything else.
            </Heading>
            <Paragraph fontSize={18}>
              FeaturePeek plugs in with familiar tools so you can continue to use the services that you've come to know
              and love. Since FeaturePeek is designed to be platform agnostic, we can tie into what you already have for
              a seamless setup.
            </Paragraph>
            <Paragraph fontSize={18}>
              From Continuous Integration services to container registries, and from bug tracking platforms to getting
              notified in Slack, we've got you covered.
            </Paragraph>
            <Flex alignItems="center" height={100} marginTop={mobile ? 40 : 0}>
              <Button href="/how-it-works" iconAfter="fas fa-arrow-right">
                Learn how to set up your frontend
              </Button>
            </Flex>
          </Box>
          <Flex alignItems="center" width={mobile ? '100%' : '50%'} overflow={mobile ? 'hidden' : undefined}>
            <IntegrationsOrbit mobile={mobile} />
          </Flex>
        </Flex>
      )}
    </MediaQuery>
  )
}
