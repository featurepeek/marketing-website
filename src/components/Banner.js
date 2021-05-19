// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Icon, Link, Paragraph, Text } from 'primitives'

export default function Banner(props) {
  return (
    <MediaQuery maxWidth={936}>
      {mobile => (
        <Box
          background="#1f2337"
          color="white"
          className="nav-padding-fouc"
          height={42}
          marginX={mobile ? 0 : -16}
          // overflow={mobile ? 'hidden' : 'inherit'}
          paddingX={16}
          paddingY={8}
          position="fixed"
          top={0}
          width="100%"
          zIndex={9}
        >
          <Paragraph textAlign="center" width="100%">
            <Link color="white !important" href="/blog/featurepeek-has-joined-netlify/">
              FeaturePeek has been acquired by Netlify!
              <Text className="nav-links-hide-fouc" color="#3f4250 !important" marginX={8}>
                {' '}
                &mdash;{' '}
              </Text>
              <Text className="nav-links-hide-fouc" color="white !important">
                {' '}
                Learn more in our founders' announcement post
              </Text>
              <Icon fontSize={12} icon="fas fa-arrow-right" marginLeft={8} position="relative" top={-1} />
            </Link>
          </Paragraph>
          <Icon
            color="#bbb"
            cursor="pointer"
            fontSize={12}
            icon="fas fa-times is-hidden-mobile"
            onClick={props.dismiss}
            position="absolute"
            right={24}
            top={16}
            zIndex={1000}
          />
        </Box>
      )}
    </MediaQuery>
  )
}
