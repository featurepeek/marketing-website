// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Flex, Heading } from 'primitives'

import Testimonial from 'components/Testimonial'

// import { rhythm, scale } from 'utils/typography'

const testimonials = [
  {
    company: 'Weights and Biases',
    companyAvatar: 'https://avatars2.githubusercontent.com/u/26401354?v=4',
    name: 'Shawn Lewis',
    quote: 'FeaturePeek has increased our productivity 10000000%.',
    title: 'CTO',
    url: 'https://www.wandb.com',
    userAvatar: 'https://avatars1.githubusercontent.com/u/499383?v=4',
  },
  {
    company: 'Coil HQ',
    companyAvatar: 'https://avatars3.githubusercontent.com/u/39016252?v=4',
    name: 'Travis Crist',
    quote: 'FeaturePeek is super cool. This quote has a few sentences. So that it is longer than others.',
    title: 'Front-end Engineer',
    url: 'https://coil.com',
    userAvatar: 'https://avatars0.githubusercontent.com/u/4206970?v=4',
  },
  {
    company: 'GitStart',
    companyAvatar: 'https://avatars3.githubusercontent.com/u/31163758?v=4',
    name: 'Hamza Zia',
    quote:
      'FeaturePeek allowed us to save a TON of time reviewing PRs and getting direct feedback from external stakeholders. FeaturePeek is now a critical integration with every new project that is rolled out by GitStart!',
    title: 'CEO',
    url: 'https://gitstart.com',
    userAvatar: 'https://avatars1.githubusercontent.com/u/206640?v=4',
  },
]

export default function SocialProof({ extraMarginTop, heading }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box
          // background="#f8f8f8"
          marginX={mobile ? -15 : -39}
          marginBottom={-40}
          paddingX={mobile ? 16 : 40}
          // paddingTop={40}
        >
          <Heading h={3} marginTop={extraMarginTop || 40} size={360} textAlign="center">
            {heading}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between" marginBottom={160} marginTop={80}>
            {testimonials.map(testimonial => (
              <Testimonial {...testimonial} />
            ))}
          </Flex>
        </Box>
      )}
    </MediaQuery>
  )
}
