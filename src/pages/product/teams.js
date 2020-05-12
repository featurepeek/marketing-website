import React from 'react'
import Box from 'ui-box'

import copyWritings from 'copy/teamFeatures'

import { Heading } from 'primitives'

// import HeroFrontend from 'images/HeroFrontend'
import Layout from 'components/Layout'
// import NextPrevButtons from 'components/NextPrevButtons'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import HeroSVG from '../../../static/img/art/ci-pipeline-hero.svg'

export default function Product(props) {
  return (
    <Layout location={props.location}>
      <SEO title="FeaturePeek Teams" location={props.location} />
      <Heading marginTop={0} size={500} textAlign="center">
        FeaturePeek Teams fits into your CI pipeline
      </Heading>
      <Heading h={2} marginTop={0} opacity={0.4} size={360} textAlign="center">
        Get front-end staging environments on demand
      </Heading>
      <Box padding={16}>
        <HeroSVG />
      </Box>
      <hr style={{ background: '#eee' }} />
      <Heading marginTop={80} size={500} textAlign="center">
        Features for the whole team
      </Heading>
      <RowReversal copyWritings={copyWritings} />
      {/* <NextPrevButtons prev="managers" next="designers" /> */}
    </Layout>
  )
}
