import React from 'react'
import { graphql } from 'gatsby'

import { Heading } from 'primitives'

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
      <Heading marginTop={0} size={500}>
        Collaborate on front-end
        <br />
        implementations
        <br />
        like never before.
      </Heading>
      <Heading h={2} marginBottom={160} opacity={0.4} size={360}>
        Annotate directly on your
        <br />
        team's new features
        <br />
        as they get built.
        <br />
        <br />
        No merging.
        <br />
        No hosting.
        <br />
        No browser extension.
      </Heading>
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
