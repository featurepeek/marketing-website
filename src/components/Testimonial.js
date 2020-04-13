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
        <Box
          is="img"
          borderRadius={16}
          height={64}
          padding={4}
          position="absolute"
          src={companyAvatar}
          top={-72}
          width={64}
        />
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
          is="img"
          background="white"
          borderColor="#ddd"
          borderStyle="solid"
          borderWidth={1}
          borderRadius={99}
          height={64}
          marginBottom={0}
          padding={4}
          src={userAvatar}
          width={64}
        />
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
