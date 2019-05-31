import React, { useState } from 'react'
import Box from 'ui-box'
import { graphql } from 'gatsby'

import { Button, Code, Column, Flex, Heading, ListItem, Paragraph, Strong, UnorderedList } from 'primitives'

import Faqs from 'components/Faqs'
import Layout from 'components/Layout'
import SEO from 'components/Seo'
import ViewportArriver from 'components/ViewportArriver'

import { steps, elaborations } from 'copy/howItWorks'
import productFAQs from 'copy/productFAQs'

export default function HowItWorks(props) {
  const [stepIndex, setStepIndex] = useState(0)
  // const siteTitle = props.data.site.siteMetadata.title

  const increment = step => {
    setStepIndex(step + 1)
  }

  const decrement = step => {
    setStepIndex(step - 1)
  }

  return (
    <Layout location={props.location}>
      <SEO title="How it works" />
      <Heading marginTop={0} size={500} textAlign="center">
        Get up and running in no time.
      </Heading>
      <Heading h={2} marginTop={0} marginBottom={160} opacity={0.4} size={360} textAlign="center">
        Follow these four steps.
      </Heading>
      <Flex marginBottom={120}>
        <Column marginRight={32}>
          <Box position="sticky" top={160}>
            <Heading h={4} opacity={0.4} size={210}>
              Setup instructions
            </Heading>
            <Paragraph fontSize={24} marginBottom={32}>
              From static builds to Docker pushes, FeaturePeek supports various types of front-end architectures.
            </Paragraph>
            <UnorderedList marginLeft={32}>
              {steps.map((step, i) => (
                <ListItem key={step} fontSize={18} marginBottom={16} opacity={stepIndex === i ? 1 : 0.4}>
                  <Code color={stepIndex === i ? '#05c5cc' : 'inherit'} fontSize={18} marginRight={8}>
                    {i + 1}.
                  </Code>{' '}
                  <Strong color="#103c52">{step}</Strong>
                </ListItem>
              ))}
            </UnorderedList>
            <Flex alignItems="center" justifyContent="center" height={100} width={180}>
              <Button href="/pricing">Get started today</Button>
            </Flex>
          </Box>
        </Column>
        <Column marginLeft={32}>
          {elaborations.map(({ body }, i) => (
            <ViewportArriver
              key={body}
              paragraph={body}
              handleArrival={() => increment(i - 1)}
              handleDeparture={() => decrement(i - 1)}
            />
          ))}
        </Column>
      </Flex>
      <Faqs heading="Product FAQs" faqs={productFAQs} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
