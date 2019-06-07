import React from 'react'
// import Box from 'ui-box'
import { graphql } from 'gatsby'

import copyWritings from 'copy/forFrontendDevelopers'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import HeroFrontend from 'images/HeroFrontend'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const theme = gradientMap.green[0]
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout background="#eef6ef" location={props.location}>
      <SEO title="FeaturePeek for Front-end Developers" />
      <HeroFrontend>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          Front-end Developers
        </Heading>
        <Paragraph {...scale(1 / 4)} width="50%">
          Instant, dedicated environments for every open pull request.
        </Paragraph>
        <Paragraph {...scale(1 / 4)} width="50%">
          Get feedback from your designers earlier
          <br />
          so that you aren't scrambling at the end of a release.
        </Paragraph>
      </HeroFrontend>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <Flex justifyContent="space-evenly" marginTop={200} width="100%">
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-project-managers" background="blue" iconBefore="fas fa-arrow-left" width={300}>
            Project Managers
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-ux-designers" background="pink" iconAfter="fas fa-arrow-right" width={300}>
            UX Designers
          </Button>
        </Flex>
      </Flex>
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
