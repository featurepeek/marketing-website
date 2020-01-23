// @flow
import React from 'react'
import MediaQuery from 'react-responsive'
import Box from 'ui-box'

export default function TableOfContents({ html }) {
  return (
    <MediaQuery maxWidth={1232}>
      {mobile => (
        <Box style={{ position: 'sticky' }} top={96}>
          {!mobile && (
            <Box right={-304} position="absolute" width={264}>
              <div className="toc" dangerouslySetInnerHTML={{ __html: html }} />
            </Box>
          )}
        </Box>
      )}
    </MediaQuery>
  )
}
