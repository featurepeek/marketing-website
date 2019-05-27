import React from 'react'
import { graphql } from 'gatsby'

import Column from "components/column"
import Flex from "components/flex"
import SEO from 'components/seo'

export default function IndexPage(props) {
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <section>
      <SEO title="Home" />
      <h1>{siteTitle}</h1>
      <Flex>
        <Column>hi</Column>
        <Column>sup</Column>
        <Column>sup</Column>
        <Column>sup</Column>
      </Flex>
    </section>
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
