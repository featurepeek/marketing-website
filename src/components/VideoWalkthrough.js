// @flow
import React from 'react'
import Box from 'ui-box'

import { Heading } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function VideoWalkthrough() {
  return (
    <Box>
      <Heading marginTop={200} size={500} textAlign="center">
        Video walkthrough
      </Heading>
      <Heading h={2} marginTop={0} opacity={0.4} size={360} textAlign="center">
        See FeaturePeek in action.
      </Heading>
      <center>
        <iframe
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          height="360"
          src="https://www.youtube.com/embed/14UwLG1jQwU"
          style={{
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1), -10px 20px 40px rgba(0, 0, 0, 0.1)',
            margin: '40px 0 160px',
          }}
          title="FeaturePeek product walkthrough"
          width="640"
        />
      </center>
    </Box>
  )
}
