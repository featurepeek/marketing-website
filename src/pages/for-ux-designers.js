import React from 'react'

import copyWritings from 'copy/forUxDesigners'

import { Heading } from 'primitives'

// import HeroDesigners from 'images/HeroDesigners'
import Layout from 'components/Layout'
import NextPrevButtons from 'components/NextPrevButtons'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const theme = gradientMap.pink[0] //  background="#f8eff6"
  return (
    <Layout location={props.location}>
      <SEO title="Built for UX Designers" location={props.location} />
      <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
        Built for
      </Heading>
      <Heading color={theme} marginTop={0} {...scale(2)}>
        UX Designers
      </Heading>
      <Heading color={theme} h={2} opacity={0.5} size={300}>
        See your designs come to life earlier in the development cycle.
      </Heading>
      <RowReversal copyWritings={copyWritings} flip={1} theme={theme} />
      <NextPrevButtons prev="developers" next="managers" />
    </Layout>
  )
}
