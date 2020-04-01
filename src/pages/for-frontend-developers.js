import React from 'react'

import copyWritings from 'copy/forFrontendDevelopers'

import { Heading } from 'primitives'

import HeroFrontend from 'images/HeroFrontend'
import Layout from 'components/Layout'
import NextPrevButtons from 'components/NextPrevButtons'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForFrontendDevelopers(props) {
  const theme = gradientMap.green[0] //  background="#eef6ef"
  return (
    <Layout location={props.location}>
      <SEO title="Built for Front-end Developers" location={props.location} />
      <HeroFrontend>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          Front-end Developers
        </Heading>
        <Heading color={theme} h={2} opacity={0.5} size={300} width="60%">
          Automatic environments for every open pull request.
        </Heading>
      </HeroFrontend>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <NextPrevButtons prev="managers" next="designers" />
    </Layout>
  )
}
