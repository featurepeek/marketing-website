import React from 'react'
import { graphql } from 'gatsby'

import Button from "components/button"
import Column from "components/column"
import Flex from "components/flex"
import Link from "components/link"
import SEO from 'components/seo'

export default function IndexPage(props) {
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <section>
      <SEO title="Home" />
      <h1>{siteTitle}</h1>
      <Flex marginBottom={40}>
        <Column>hi</Column>
        <Column>sup</Column>
        <Column>
          <Link href="/blog">Contact us</Link></Column>
        <Column>sup</Column>
      </Flex>
      <Button>Start your free trial</Button>
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
