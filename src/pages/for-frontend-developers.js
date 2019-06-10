import React from 'react'
// import Box from 'ui-box'
import { graphql } from 'gatsby'

import copyWritings from 'copy/forFrontendDevelopers'

import { Heading, Paragraph } from 'primitives'

import HeroFrontend from 'images/HeroFrontend'
import Layout from 'components/Layout'
import NextPrevButtons from 'components/NextPrevButtons'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const theme = gradientMap.green[0]
  return (
    <Layout background="#eef6ef" location={props.location}>
      <SEO title="FeaturePeek for Front-end Developers" />
      <HeroFrontend>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          Front-end Developers
        </Heading>
        <Paragraph {...scale(1 / 4)} width="50%">
          Instant, dedicated environments for every open pull request.
        </Paragraph>
      </HeroFrontend>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <NextPrevButtons prev="managers" next="designers" />
    </Layout>
  )
}
