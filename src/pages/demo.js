import React from 'react'

import Demo from 'components/Demo'
import Layout from 'components/Layout'
import SEO from 'components/Seo'

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Demo" location={props.location} />
      <Demo />
    </Layout>
  )
}
