import React from 'react'
// import Box from 'ui-box'
import { graphql } from 'gatsby'

import copyWritings from 'copy/forUxDesigners'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import HeroDesigners from 'images/HeroDesigners'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const theme = gradientMap.pink[0]
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout background="#f8eff6" location={props.location}>
      <SEO title="FeaturePeek for UX Designers" />
      <HeroDesigners>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          UX Designers
        </Heading>
        <Paragraph {...scale(1 / 4)} width="50%">
          See your designs come to life earlier in the release cycle.
        </Paragraph>
      </HeroDesigners>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <Flex justifyContent="space-evenly" marginTop={200} width="100%">
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-frontend-developers" background="green" iconBefore="fas fa-arrow-left" width={300}>
            Front-end Developers
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="center" height={100} width={1}>
          <Button href="/for-project-managers" background="blue" iconAfter="fas fa-arrow-right" width={300}>
            Project Managers
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
