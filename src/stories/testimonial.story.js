import React from 'react'
import { text } from '@storybook/addon-knobs'

import Testimonial from 'components/Testimonial'
import { Flex } from 'primitives'

export default { title: 'Testimonial' }

export const defaultTestimonial = () => (
  <Flex alignItems="center" justifyContent="center" width="100%">
    <Testimonial
      company={text('company', 'Weights and Biases')}
      companyAvatar={text('companyAvatar', 'https://avatars2.githubusercontent.com/u/26401354?v=4')}
      name={text('name', 'Shawn Lewis')}
      quote={text('quote', 'FeaturePeek has increased our productivity 10000000%.')}
      title={text('title', 'CTO')}
      url={text('url', 'https://www.wandb.com')}
      userAvatar={text('userAvatar', 'https://avatars1.githubusercontent.com/u/499383?v=4')}
    />
  </Flex>
)
