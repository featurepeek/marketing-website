// @flow
import React from 'react'
import Box from 'ui-box'
import ReactGridGallery from 'react-grid-gallery'

import { Heading } from 'primitives'

const images = [
  {
    src: '/img/product/drawer-timeline.png',
    thumbnail: '/img/product/drawer-timeline.png',
    caption: 'FeaturePeek drawer shows a timeline of comments, views, and more',
    thumbnailCaption: 'Leave comments in the FeaturePeek drawer',
  },
  {
    src: '/img/product/drawer-tickets.png',
    thumbnail: '/img/product/drawer-tickets.png',
    caption: 'File tickets to third-party integrations like GitHub Issues, Trello, and Clubhouse',
    thumbnailCaption: 'File tickets to third-party integrations',
  },
  {
    src: '/img/product/annotate.png',
    thumbnail: '/img/product/annotate.png',
    caption: 'Capture screenshots and screen recordings, and annotate them',
    thumbnailCaption: 'Capture and annotate screenshots and recordings',
  },
  {
    src: '/img/product/measure.png',
    thumbnail: '/img/product/measure.png',
    caption: 'Measure the distance between DOM elements',
    thumbnailCaption: 'Measure the distance between DOM elements',
  },
]

export default function Gallery({ width }) {
  return (
    <>
      <Heading h={3} marginTop={160} size={480}>
        A floating UI overlays your deployments,
      </Heading>
      <Heading h={3} size={360} opacity={0.4}>
        making it easy for your reviewers to leave great feedback.
      </Heading>
      <Box marginLeft={-24} marginTop={40} marginBottom={80} overflowX="scroll" width="calc(100% + 24px)">
        <Box width={width}>
          <ReactGridGallery
            backdropClosesModal
            enableImageSelection={false}
            images={images}
            margin={24}
            rowHeight={340}
            showLightboxThumbnails
          />
        </Box>
      </Box>
    </>
  )
}
