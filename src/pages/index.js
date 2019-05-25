import React from 'react'
import { graphql } from 'gatsby'

import Column from "components/column"
import Flex from "components/flex"
import SEO from 'components/seo'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

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
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
