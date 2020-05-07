// @flow
import React from 'react'
import Box from 'ui-box'

import { Flex, Link, Paragraph, Strong, Text } from 'primitives'

// import { rhythm, scale } from 'utils/typography'

export default function Testimonial({ name, title, userAvatar, company, companyAvatar, quote, url }) {
  return (
    <Box
      background="white"
      borderColor="#eee"
      borderStyle="solid"
      borderWidth={1}
      borderRadius={8}
      boxShadow="0 4px 32px #e8e8e8"
      paddingX={32}
      paddingY={40}
      paddingBottom={24}
      position="relative"
      marginX={8}
      marginY={32}
      maxWidth={540}
    >
      <Flex flexDirection="row" justifyContent="center" position="relative" width="100%">
        <Box position="absolute" top={-72}>
          {companyAvatar}
        </Box>
      </Flex>
      <Paragraph fontSize={18} marginBottom={48}>
        &quot;{quote}&quot;
      </Paragraph>
      <Flex
        alignItems="center"
        background="#f9f9fb"
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
        flexDirection="row"
        marginY={-24}
        paddingY={24}
        marginX={-32}
        paddingX={32}
      >
        <Box
          background="white"
          borderColor="#ddd"
          borderStyle="solid"
          borderWidth={1}
          borderRadius={99}
          lineHeight={0}
          marginBottom={0}
          padding={4}
        >
          {userAvatar}
        </Box>
        <Box marginLeft={24}>
          <Paragraph margin={0}>
            <Strong fontSize={19}>{name}</Strong>
          </Paragraph>
          <Text fontSize={17}>
            {title},{' '}
            <Link href={url} target="_blank">
              {company}
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
