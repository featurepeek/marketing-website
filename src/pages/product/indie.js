import React from 'react'
// import Box from 'ui-box'

import copyWritings from 'copy/featuresIndie'

import { Heading } from 'primitives'

import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import Terminal from 'components/Terminal'
import SEO from 'components/Seo'

export default function Product(props) {
  return (
    <Layout location={props.location}>
      <SEO title="FeaturePeek Indie" location={props.location} />
      <Heading marginTop={0} size={500} textAlign="center">
        FeaturePeek Indie runs in your CLI
      </Heading>
      <Heading h={2} marginTop={0} marginBottom={80} opacity={0.4} size={360} textAlign="center">
        Review your static site with a single command
      </Heading>
      <Terminal />
      <RowReversal copyWritings={copyWritings} />
      {/* <NextPrevButtons prev="managers" next="designers" /> */}
    </Layout>
  )
}
