import React from 'react'

import AsSeenOn from 'components/AsSeenOn'
import DesignedForGitHub from 'components/DesignedForGitHub'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'
import VideoWalkthrough from 'components/VideoWalkthrough'

import { valueProps } from 'copy/homePage'

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Overview" location={props.location} />
      <Hero />
      <AsSeenOn />
      <RowReversal copyWritings={valueProps} flip={1} />
      <DesignedForGitHub />
      <VideoWalkthrough />
    </Layout>
  )
}
