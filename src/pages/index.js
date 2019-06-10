import React from 'react'
import { graphql } from 'gatsby'

import DesignedForGitHub from 'components/DesignedForGitHub'
import Hero from 'components/Hero'
import FeatureGrid from 'components/FeatureGrid'
import Layout from 'components/Layout'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'
import VideoWalkthrough from 'components/VideoWalkthrough'

import { valueProps } from 'copy/homePage'

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Hero />
      <RowReversal copyWritings={valueProps} flip={1} />
      <FeatureGrid />
      <DesignedForGitHub />
      <VideoWalkthrough />
    </Layout>
  )
}
