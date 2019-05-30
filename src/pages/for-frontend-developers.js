import React from 'react'
// import Box from 'ui-box'
import { graphql } from 'gatsby'

import copyWritings from 'copy/forFrontendDevelopers'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const theme = '#5abf7e'
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout location={props.location}>
      <SEO title="FeaturePeek for Front-end Developers" />
      <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
        FeaturePeek for
      </Heading>
      <Heading color={theme} marginTop={0} {...scale(2.25)}>
        Front-end Developers
      </Heading>
      <Paragraph {...scale(1 / 4)}>FeaturePeek is a game-changer for your development workflow.</Paragraph>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <Flex justifyContent="space-evenly" marginTop={200} width="100%">
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-product-managers" background="blue" iconBefore="fas fa-arrow-left" width={240}>
            Product Managers
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-ux-designers" background="pink" iconAfter="fas fa-arrow-right" width={240}>
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
