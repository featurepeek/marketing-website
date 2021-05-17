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
          <Heading
            lineHeight={1.5}
            marginTop={0}
            marginX="auto"
            maxWidth={860}
            size={500}
            textAlign={mobile ? 'left' : 'center'}
          >
            Make deployment previews your hub for <span className="cpr-highlight">continuous product review.</span>
          </Heading>
          <Flex marginY={128}>
            <Column marginRight={mobile ? 0 : 32}>
              <Box position="sticky" top={160}>
                <Heading h={4} opacity={0.4} size={210}>
                  Setup instructions
                </Heading>
                <Paragraph fontSize={24} marginBottom={32}>
                  From static sites to Dockerized web apps, FeaturePeek Teams supports various types of frontend
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
