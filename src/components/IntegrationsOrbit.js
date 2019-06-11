// @flow
import React from 'react'
import Box from 'ui-box'

import GitHubMark from 'images/GitHubMark'
import Integrations from 'images/Integrations'

// import { rhythm, scale } from 'utils/typography'

const size = mobile => (mobile ? 400 : 800)

export default function IntegrationsOrbit(props) {
  const { mobile } = props
  return (
    <Box position="relative" left={mobile ? 0 : -280} width={size(mobile)} height={size(mobile)}>
      <Box position="absolute" width={size(mobile)} height={size(mobile)}>
        <GitHubMark width={size(mobile)} height={size(mobile)} />
      </Box>
      <Box position="absolute" width={size(mobile)} height={size(mobile)}>
        <Integrations width={size(mobile)} height={size(mobile)} />
      </Box>
    </Box>
  )
}
