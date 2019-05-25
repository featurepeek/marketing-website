import React from "react"
import { graphql } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <section>
        <SEO title="Home" />
        <h1>FeaturePeek Marketing Home</h1>
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
