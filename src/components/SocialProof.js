// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Flex, Heading } from 'primitives'

import Testimonial from 'components/Testimonial'

import Shawn from 'images/socialproof/Shawn'
import WandB from 'images/socialproof/WandB'
import Hamza from 'images/socialproof/Hamza'
import GitStart from 'images/socialproof/GitStart'
import Andros from 'images/socialproof/Andros'
import Coil from 'images/socialproof/Coil'

// import { rhythm, scale } from 'utils/typography'

const testimonials = [
  {
    company: 'Weights & Biases',
    companyAvatar: <WandB />,
    name: 'Shawn Lewis',
    quote:
      'With FeaturePeek, we can review UI as easily (and as often) as we review code. Our product is better because of it.',
    title: 'CTO',
    url: 'https://www.wandb.com',
    userAvatar: <Shawn />,
  },
  {
    company: 'GitStart',
    companyAvatar: <GitStart />,
    name: 'Hamza Zia',
    quote:
      'FeaturePeek allowed us to save a ton of time reviewing PRs and getting direct feedback from external stakeholders. FeaturePeek is now a critical integration with every new project that is rolled out by GitStart!',
    title: 'CEO',
    url: 'https://gitstart.com',
    userAvatar: <Hamza />,
  },
  {
    company: 'Coil',
    companyAvatar: <Coil />,
    name: 'Andros Wong',
    quote:
      'Using FeaturePeek has reduced the disconnect between our design and engineering teams. It has made design reviews much easier, allowing for quicker code deploys.',
    title: 'Software Engineer',
    url: 'https://coil.com',
    userAvatar: <Andros />,
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
