import React from 'react'
import { graphql } from 'gatsby'
import Box from 'ui-box'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

import { Flex, Paragraph } from 'primitives'

export default function NotFoundPage(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404 Not Found" location={props.location} />
      {/* <Heading marginBottom={40} marginTop={0} size={500} textAlign="center">404: Not Found</Heading> */}
      <Flex justifyContent="center" position="relative" top={39}>
        <video autoPlay height={492} loop muted src="/video/404.mp4" width={480}>
          <source src="/video/404.mp4" type="video/mp4" />
        </video>
        <Box marginBottom={80} marginTop={32} marginX={32}>
          <Paragraph fontSize={32}>
            <em>The web page you seek</em>
          </Paragraph>
          <Paragraph fontSize={32}>
            <em>cannot be located, but</em>
          </Paragraph>
          <Paragraph fontSize={32}>
            <em>many more exist.</em>
          </Paragraph>
        </Box>
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
