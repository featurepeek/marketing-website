import React from 'react'
// import Box from 'ui-box'
import { graphql } from 'gatsby'

import copyWritings from 'copy/forProjectManagers'

import { Button, Flex, Heading, Paragraph } from 'primitives'

import HeroManagers from 'images/HeroManagers'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForProjectManagers(props) {
  const theme = gradientMap.blue[0]
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout background="#e8f4f8" location={props.location}>
      <SEO title="FeaturePeek for Project Managers" />
      <HeroManagers>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          Project Managers
        </Heading>
        <Paragraph {...scale(1 / 4)} width="50%">
          Get a visual overview of your team's work in progress.
        </Paragraph>
      </HeroManagers>
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
