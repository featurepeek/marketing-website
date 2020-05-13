// @flow
import React from 'react'
import Box from 'ui-box'

import { Flex, Heading } from 'primitives'

import TechCrunch from 'images/TechCrunch'

// import { rhythm, scale } from 'utils/typography'

export default function AsSeenOn({ question, answer }) {
  return (
    <Box className="as-seen-on" paddingBottom={32} paddingTop={104} width="100%">
      <Box
        background="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(173,173,173,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)"
        textAlign="center"
      >
        <Heading
          background="white"
          color="#ccc"
          display="inline-block"
          fontStyle="italic"
          margin={0}
          paddingX={16}
          size={300}
        >
          As seen on
        </Heading>
      </Box>
      <Flex alignItems="center" justifyContent="space-around" paddingY={32} textAlign="center" width="100%">
        <Box paddingY={16}>
          <a
            href="https://techcrunch.com/2020/05/13/featurepeek-moves-beyond-y-combinator-with-1-8m-seed/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TechCrunch />
          </a>
        </Box>
        <Box paddingY={16}>
          <a href="https://www.producthunt.com/posts/featurepeek" rel="noopener noreferrer" target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=161889&theme=light"
              alt="FeaturePeek - Front-end review for the whole team | Product Hunt Embed"
              style={{ width: 250, height: 54 }}
              width="250"
              height="54"
            />
          </a>
        </Box>
      </Flex>
    </Box>
  )
}
