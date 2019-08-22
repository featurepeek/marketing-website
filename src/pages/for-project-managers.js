import React from 'react'

import copyWritings from 'copy/forProjectManagers'

import { Heading } from 'primitives'

import HeroManagers from 'images/HeroManagers'
import Layout from 'components/Layout'
import NextPrevButtons from 'components/NextPrevButtons'
import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

import { gradientMap } from 'utils/color'
import { scale } from 'utils/typography'

export default function ForProjectManagers(props) {
  const theme = gradientMap.blue[0]
  return (
    <Layout background="#e8f4f8" location={props.location}>
      <SEO title="Built for Project Managers" location={props.location} />
      <HeroManagers>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          Project Managers
        </Heading>
        <Heading color={theme} h={2} opacity={0.5} size={300} width="50%">
          Prevent last-minute scrambles at the end of your release cycle.
        </Heading>
      </HeroManagers>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <NextPrevButtons prev="designers" next="developers" />
    </Layout>
  )
}
