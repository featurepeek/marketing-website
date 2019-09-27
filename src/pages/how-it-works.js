import React, { useState } from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Column, Flex, Heading, ListItem, Paragraph, Strong, UnorderedList } from 'primitives'

import Faqs from 'components/Faqs'
import Layout from 'components/Layout'
import SEO from 'components/Seo'
import VideoWalkthrough from 'components/VideoWalkthrough'
import ViewportArriver from 'components/ViewportArriver'

import { steps, elaborations } from 'copy/howItWorks'
import productFAQs from 'copy/productFAQs'

import { track } from 'utils/analytics'

export default function HowItWorks(props) {
  const [stepIndex, setStepIndex] = useState(0)

  const increment = step => {
    setStepIndex(Math.min(step + 1, steps.length))
  }

  const decrement = step => {
    setStepIndex(Math.max(step - 1, 0))
  }

  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Layout location={props.location}>
          <SEO title="How it works" location={props.location} />
          <Heading marginTop={0} size={500} textAlign={mobile ? 'left' : 'center'}>
            Get up and running in no time.
          </Heading>
          <Heading
            h={2}
            marginTop={0}
            marginBottom={mobile ? 80 : 160}
            opacity={0.4}
            size={360}
            textAlign={mobile ? 'left' : 'center'}
          >
            Follow these four steps.
          </Heading>
          <Flex marginBottom={120}>
            <Column marginRight={mobile ? 0 : 32}>
              <Box position="sticky" top={160}>
                <Heading h={4} opacity={0.4} size={210}>
                  Setup instructions
                </Heading>
                <Paragraph fontSize={24} marginBottom={32}>
                  From static builds to Docker containers, FeaturePeek supports various types of front-end
                  architectures.
                </Paragraph>
                <UnorderedList marginLeft={mobile ? 0 : 32}>
                  {steps.map((step, i) => (
                    <ListItem
                      key={step}
                      fontSize={18}
                      marginBottom={16}
                      marginLeft={34}
                      opacity={stepIndex === i ? 1 : 0.4}
                      style={{ textIndent: -34 }}
                    >
                      <Strong fontFamily="monospace" fontSize={18} marginRight={8}>
                        {i + 1}.
                      </Strong>{' '}
                      <Strong color="#103c52">{step}</Strong>
                    </ListItem>
                  ))}
                </UnorderedList>
                <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? '100%' : 180}>
                  <Button
                    href="https://dashboard.featurepeek.com"
                    onClick={() => track('Clicked CTA', { cta: 'How it works' })}
                    target="_blank"
                  >
                    Get started now
                  </Button>
                </Flex>
              </Box>
            </Column>
            <Column marginTop={mobile ? 80 : 0} marginLeft={mobile ? 0 : 32}>
              {elaborations.map(({ strong, body, image }, i) => (
                <ViewportArriver
                  key={strong}
                  strong={strong}
                  paragraph={body}
                  image={image}
                  handleArrival={() => increment(i - 1)}
                  handleDeparture={() => decrement(i)}
                  last={i === elaborations.length - 1}
                  mobile={mobile}
                />
              ))}
            </Column>
          </Flex>
          <Faqs heading="Product FAQs" faqs={productFAQs} />
          <VideoWalkthrough />
        </Layout>
      )}
    </MediaQuery>
  )
}
