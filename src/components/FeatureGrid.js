// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Heading, Icon, Paragraph } from 'primitives'

import { features } from 'copy/homePage'

// import { rhythm, scale } from 'utils/typography'

export default function FeatureGrid(props) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box marginTop={mobile ? 100 : 200} marginBottom={mobile ? 40 : 100}>
          {features.map((feature, i) => (
            <Box
              display="inline-block"
              marginBottom={56}
              paddingX={mobile ? 0 : i % 3 === 1 ? 8 : 'inherit'}
              paddingRight={mobile ? 0 : i % 3 !== 2 ? 16 : 0}
              paddingLeft={mobile ? 0 : i % 3 !== 0 ? 16 : 0}
              width={mobile ? '100%' : '33.33%'}
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
      )}
    </MediaQuery>
  )
}
