// @flow
import React from 'react'
import Box from 'ui-box'

import { Heading, Icon, Paragraph } from 'primitives'

import { features } from 'copy/homePage'

// import { rhythm, scale } from 'utils/typography'

export default function FeatureGrid(props) {
  return (
    <Box marginY={200}>
      {features.map(feature => (
        <Box display="inline-block" marginBottom={40} padding={16} width="33.33%" style={{ verticalAlign: 'top' }}>
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
