import React from 'react'
import { graphql } from 'gatsby'

import Footer from "components/footer"
import Nav from "components/nav"
import SEO from 'components/seo'

import Button from "primitives/button"
import Column from "primitives/column"
import Flex from "primitives/flex"
import Heading from "primitives/heading"
import Link from "primitives/link"

export default function IndexPage(props) {
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <section>
      <SEO title="Home" />
      <Nav />
      {/* <Heading>Empower your designers. Liberate your developers.</Heading> */}
      <div style={{ height: '100vh' }} />
      <Footer marginTop={124} />
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
