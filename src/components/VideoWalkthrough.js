// @flow
import React from 'react'
import Box from 'ui-box'
import ReactPlayer from 'react-player'
import MediaQuery from 'react-responsive'

import { Heading } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function VideoWalkthrough() {
  return (
    <MediaQuery maxWidth={720}>
      {mobile => (
        <Box id="video" paddingTop={80}>
          <Heading size={500} textAlign={mobile ? 'left' : 'center'}>
            Video walkthrough
          </Heading>
          <Heading h={2} marginTop={0} opacity={0.4} size={360} textAlign={mobile ? 'left' : 'center'}>
            Watch FeaturePeek in action.
          </Heading>
          <center>
            <Box
              boxShadow="0 3px 6px rgba(0, 0, 0, 0.1), -10px 20px 40px rgba(0, 0, 0, 0.1)"
              marginTop={40}
              marginBottom={160}
              width={mobile ? '100%' : 640}
            >
              <ReactPlayer
                controls
                playing
                light
                url="https://www.youtube.com/embed/ekWUp-dls7k"
                width={mobile ? '100%' : 640}
                wrapper="center"
              />
            </Box>
          </center>
        </Box>
      )}
    </MediaQuery>
  )
}
