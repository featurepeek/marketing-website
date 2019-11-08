// @flow
import React from 'react'
import Box from 'ui-box'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TumblrShareButton,
  LineShareButton,
  PocketShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  LineIcon,
  PocketIcon,
  EmailIcon,
} from 'react-share'

import { Flex } from 'primitives'

export default function Share({ title, url }) {
  return (
    <Flex alignItems="center" flexDirection="column" left={-100} position="absolute">
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <FacebookShareButton title={title} url={url}>
          <FacebookIcon round size={40} />
        </FacebookShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <LinkedinShareButton title={title} url={url}>
          <LinkedinIcon round size={40} />
        </LinkedinShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <TwitterShareButton title={title} url={url}>
          <TwitterIcon round size={40} />
        </TwitterShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <RedditShareButton title={title} url={url}>
          <RedditIcon round size={40} />
        </RedditShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <TumblrShareButton title={title} url={url}>
          <TumblrIcon round size={40} />
        </TumblrShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <TelegramShareButton title={title} url={url}>
          <TelegramIcon round size={40} />
        </TelegramShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <WhatsappShareButton title={title} url={url}>
          <WhatsappIcon round size={40} />
        </WhatsappShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <LineShareButton title={title} url={url}>
          <LineIcon round size={40} />
        </LineShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <PocketShareButton title={title} url={url}>
          <PocketIcon round size={40} />
        </PocketShareButton>
      </Box>
      <Box cursor="pointer" marginBottom={8} textAlign="center">
        <EmailShareButton subject={title} url={url}>
          <EmailIcon round size={40} />
        </EmailShareButton>
      </Box>
    </Flex>
  )
}
