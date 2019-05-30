import React from 'react'
// import Box from 'ui-box'
import { graphql } from 'gatsby'

import copyWritings from 'copy/forProductManagers'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForProductManagers(props) {
  const theme = gradientMap.blue[0]
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout background="#e8f4f8" location={props.location}>
      <SEO title="FeaturePeek for Product Managers" />
      <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
        FeaturePeek for
      </Heading>
      <Heading color={theme} marginTop={0} {...scale(2.25)}>
        Product Managers
      </Heading>
      <Paragraph {...scale(1 / 4)}>FeaturePeek is a game-changer for your development workflow.</Paragraph>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <Flex justifyContent="space-evenly" marginTop={200} width="100%">
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-ux-designers" background="pink" iconBefore="fas fa-arrow-left" width={300}>
            UX Designers
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-frontend-developers" background="green" iconAfter="fas fa-arrow-right" width={300}>
            Front-end Developers
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
