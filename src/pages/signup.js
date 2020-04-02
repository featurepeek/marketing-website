import React from 'react'
import Box from 'ui-box'

import copyWritings from 'copy/signup'

import { Flex, Heading, Paragraph } from 'primitives'

import Layout from 'components/Layout'
// import NextPrevButtons from 'components/NextPrevButtons'
// import RowReversal from 'components/RowReversal'
import SEO from 'components/Seo'

export default function Signup(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Features" location={props.location} />
      <Heading marginTop={0} size={500} textAlign="center">
        Thanks for watching!
      </Heading>
      <Paragraph textAlign="center">Here are three reasons why you should start a free trial right now:</Paragraph>
      <Flex flexDirection="column" alignItems="center">
        {copyWritings.map(copy => (
          <Flex alignItems="center" borderTop="1px solid #eee" marginTop={24} width="80%">
            {copy.image}
            <Box>
              <Heading size={300}>{copy.heading}</Heading>
              {copy.paragraphs.map(p => (
                <Paragraph>{p}</Paragraph>
              ))}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Layout>
  )
}
