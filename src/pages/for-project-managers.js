import React from 'react'

import copyWritings from 'copy/forProjectManagers'

import { Heading, Paragraph } from 'primitives'

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
      <SEO title="FeaturePeek for Project Managers" />
      <HeroManagers>
        <Heading color="#103c52" h={6} marginTop={0} {...scale(1 / 2)}>
          Built for
        </Heading>
        <Heading color={theme} marginTop={0} {...scale(2)}>
          Project Managers
        </Heading>
        <Paragraph {...scale(1 / 4)} width="50%">
          Get a visual overview of your team's work in progress.
        </Paragraph>
      </HeroManagers>
      <RowReversal copyWritings={copyWritings} theme={theme} />
      <NextPrevButtons prev="designers" next="developers" />
    </Layout>
  )
}
