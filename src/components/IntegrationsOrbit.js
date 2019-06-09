// @flow
import React from 'react'
import Box from 'ui-box'

import GitHubMark from 'images/GitHubMark'
import Integrations from 'images/Integrations'

export default function IntegrationsOrbit(props) {
  return (
    <Box position="relative" left={-280} width={800} height={800}>
      <Box position="absolute" width={800} height={800}>
        <GitHubMark />
      </Box>
      <Box position="absolute" width={800} height={800}>
        <Integrations />
      </Box>
    </Box>
  )
}
