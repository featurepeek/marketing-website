import React from 'react'
import Box from 'ui-box'

import copyWritings from 'copy/featuresTeam'

import { Heading } from 'primitives'

import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
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
        Deployment previews for enterprise teams
      </Heading>
      <Box padding={16}>
        <HeroSVG />
      </Box>
      <Gallery width={2640} />
      <Heading marginTop={160} size={500} textAlign="center">
        A better collaboration tool for UI/UX teams
      </Heading>
      <RowReversal copyWritings={copyWritings} />
      {/* <NextPrevButtons prev="managers" next="designers" /> */}
    </Layout>
  )
}
