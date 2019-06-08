import React from 'react'
import { graphql } from 'gatsby'
import Box from 'ui-box'

import { Flex, Heading } from 'primitives'

import HeroDashboard from 'images/HeroDashboard'
import FeatureGrid from 'components/FeatureGrid'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { valueProps } from 'copy/homePage'

export default function IndexPage(props) {
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Flex>
        <Box width="40%">
          <Heading marginTop={0} size={500}>
            Collaborate on front-end websites like never before.
          </Heading>
          <Heading h={2} opacity={0.4} size={360}>
            Annotate directly on your team's new features as they get implemented.
          </Heading>
          <Heading h={3} opacity={0.4} size={360}>
            No merging.
            <br />
            No hosting.
            <br />
            No browser extension.
          </Heading>
        </Box>
        <Box position="relative" left={39} width="60%">
          <HeroDashboard />
        </Box>
      </Flex>
      <RowReversal copyWritings={valueProps} flip={1} />
      <FeatureGrid />
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
