import React from 'react'

import copyWritings from 'copy/forUxDesigners'

import { Heading, Paragraph } from 'primitives'

import HeroDesigners from 'images/HeroDesigners'
import Layout from 'components/Layout'
import NextPrevButtons from 'components/NextPrevButtons'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const theme = gradientMap.pink[0]
  return (
    <Layout background="#f8eff6" location={props.location}>
      <SEO title="FeaturePeek for UX Designers" />
      <HeroDesigners>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          UX Designers
        </Heading>
        <Paragraph {...scale(1 / 4)} width="50%">
          See your designs come to life earlier in the release cycle.
        </Paragraph>
      </HeroDesigners>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <NextPrevButtons prev="developers" next="managers" />
    </Layout>
  )
}
