// @flow
import React, { useState } from 'react'
import Box from 'ui-box'
import ReactPlayer from 'react-player'
import MediaQuery from 'react-responsive'

import { Flex, Link, Paragraph } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function ModalVideo({ isShowing, setShowing }) {
  const [isDemoShowing, setDemoShowing] = useState(false)
  const [isPlaying, setPlaying] = useState(true)

  const showDemoAfterTimeout = () => {
    setPlaying(true)
    setTimeout(() => {
      setDemoShowing(true)
    }, 60 * 1000)
  }

  const dismiss = () => {
    setShowing(false)
    setPlaying(false)
  }

  return (
    <MediaQuery maxWidth={720}>
      {mobile => (
        <Flex
          alignItems="center"
          ariaHidden={isShowing ? 'false' : 'true'}
          background="rgba(0, 0, 0, 0.5)"
          height="100%"
          justifyContent="center"
          left={0}
          onClick={dismiss}
          opacity={isShowing ? 1 : 0}
          pointerEvents={isShowing ? 'inherit' : 'none'}
          position="fixed"
          role="dialog"
          transition="opacity 0.3s ease"
          top={0}
          width="100%"
          zIndex={999}
        >
          <Box
            background="white"
            borderRadius={8}
            boxShadow="0 3px 6px rgba(0, 0, 0, 0.3), -10px 20px 40px rgba(0, 0, 0, 0.3)"
            onClick={e => e.stopPropagation()}
            padding={24}
            transform={`translateY(${isShowing ? 0 : 24}px)`}
            transition="transform 0.3s ease"
            // paddingBottom={64}
            width={mobile ? '100%' : undefined}
          >
            <ReactPlayer
              controls
              onPlay={showDemoAfterTimeout}
              playing={isPlaying}
              light
              url="https://www.youtube.com/embed/14UwLG1jQwU"
              width={mobile ? '100%' : 640}
              wrapper="center"
            />
            {isDemoShowing && (
              <Paragraph fontSize={18} marginTop={32} textAlign="center">
                Now that you get the gist, be sure to try out a <Link href="/demo">live demo</Link>.
              </Paragraph>
            )}
          </Box>
        </Flex>
      )}
    </MediaQuery>
  )
}
