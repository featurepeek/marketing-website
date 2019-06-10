import React from 'react'
import { graphql } from 'gatsby'
import Box from 'ui-box'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import Hero from 'components/Hero'
import FeatureGrid from 'components/FeatureGrid'
import IntegrationsOrbit from 'components/IntegrationsOrbit'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'
import VideoWalkthrough from 'components/VideoWalkthrough'

import { valueProps } from 'copy/homePage'

export default function IndexPage(props) {
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Hero />
      <RowReversal copyWritings={valueProps} flip={1} />
      <FeatureGrid />
      <Flex alignItems="center">
        <Box width="50%">
          <IntegrationsOrbit />
        </Box>
        <Box width="50%">
          <Heading h={3} marginTop={0} size={500}>
            Designed for GitHub.
          </Heading>
          <Heading h={4} marginBottom={40} opacity={0.4} size={360}>
            Integrates with everything else.
          </Heading>
          <Paragraph fontSize={18}>
            FeaturePeek plugs in with familiar tools so you can continue to use the services that you've come to know
            and love. Since FeaturePeek is designed to be platform agnostic, we can tie into what you already have for a
            seamless setup.
          </Paragraph>
          <Paragraph fontSize={18}>
            From Continuous Integration services to container registries, and from bug tracking platforms to getting
            notified in Slack, we've got you covered.
          </Paragraph>
          <Flex alignItems="center" height={100}>
            <Button href="/how-it-works" iconAfter="fas fa-arrow-right">
              Read how to install
            </Button>
          </Flex>
        </Box>
      </Flex>
      <VideoWalkthrough />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
