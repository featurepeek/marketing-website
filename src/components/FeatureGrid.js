// @flow
import React from 'react'
import Box from 'ui-box'

import { Heading, Icon, Paragraph } from 'primitives'

import { features } from 'copy/homePage'

// import { rhythm, scale } from 'utils/typography'

export default function FeatureGrid(props) {
  return (
    <Box marginTop={200} marginBottom={100}>
      {features.map((feature, i) => (
        <Box
          display="inline-block"
          marginBottom={56}
          paddingRight={i % 3 !== 2 ? 32 : 0}
          paddingLeft={i % 3 !== 0 ? 32 : 0}
          paddingX={i % 3 === 1 ? 16 : 'inherit'}
          width="33.33%"
          style={{ verticalAlign: 'top' }}
        >
          <Icon color="#05c5cc" icon={feature.icon} fontSize={28} />
          <Heading h={4} marginTop={16} size={300}>
            {feature.heading}
          </Heading>
          <Paragraph>{feature.body}</Paragraph>
        </Box>
      ))}
    </Box>
  )
}
