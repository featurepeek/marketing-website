import React from 'react'

import AsSeenOn from 'components/AsSeenOn'
import DesignedForGitHub from 'components/DesignedForGitHub'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'
import SocialProof from 'components/SocialProof'

import { Heading } from 'primitives'

import { valueProps } from 'copy/homePage'

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Overview" location={props.location} />
      <Heading marginBottom={40} marginTop={0} size={500} textAlign="center">
        Supercharged deployment previews for all
      </Heading>
      <Hero />
      <SocialProof extraMarginTop={160} heading="See what our users are saying..." />
      <RowReversal copyWritings={valueProps} flip={1} />
      <DesignedForGitHub />
      <AsSeenOn />
    </Layout>
  )
}
