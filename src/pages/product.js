import React from 'react'
import Box from 'ui-box'

import copyWritings from 'copy/teamFeatures'

import { Heading } from 'primitives'

// import HeroFrontend from 'images/HeroFrontend'
import Layout from 'components/Layout'
// import NextPrevButtons from 'components/NextPrevButtons'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

// import { gradientMap } from 'utils/color'
// import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Features" location={props.location} />
      <Heading marginTop={0} size={500} textAlign="center">
        FeaturePeek fits into your CI pipeline
      </Heading>
      <Box padding={16}>
        <img alt="Fits in your CI pipeline" src="/img/art/ci-pipeline-hero.svg" />
      </Box>
      <hr />
      <Heading marginTop={80} size={500} textAlign="center">
        Features for the whole team
      </Heading>
      <RowReversal copyWritings={copyWritings} />
      {/* <NextPrevButtons prev="managers" next="designers" /> */}
    </Layout>
  )
}
