import React from 'react'

import AsSeenOn from 'components/AsSeenOn'
import DesignedForGitHub from 'components/DesignedForGitHub'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'
import SocialProof from 'components/SocialProof'

import { Heading } from 'primitives'

import { valueProps } from 'copy/homePage'

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Overview" location={props.location} />
      <Heading marginBottom={40} marginTop={40} size={500} textAlign="center">
        FeaturePeek has joined Netlify!
      </Heading>
      <Hero />
      <SocialProof extraMarginTop={160} heading="See what our users are saying..." />
      <Gallery width={2640} />
      <RowReversal copyWritings={valueProps} flip={1} />
      <DesignedForGitHub />
      <AsSeenOn />
    </Layout>
  )
}
