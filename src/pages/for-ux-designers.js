import React from 'react'

import copyWritings from 'copy/forUxDesigners'

import { Heading } from 'primitives'

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
    <Layout background="#fff6e7" location={props.location}>
      <SEO title="Built for UX Designers" />
      <HeroDesigners>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          UX Designers
        </Heading>
        <Heading color={theme} h={2} opacity={0.5} size={300} width="60%">
          Leave implementation feedback in a whole new way.
        </Heading>
      </HeroDesigners>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <NextPrevButtons prev="developers" next="managers" />
    </Layout>
  )
}
