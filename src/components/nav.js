// @flow
import React from 'react'
import Box from 'ui-box'

import { Button, Flex, Link } from 'primitives'

export default function Nav() {
  return (
    <Box is="header" background="#fff" paddingX={16} paddingY={8} position="fixed" top={0} width="100%" zIndex={999}>
      <Flex justifyContent="space-between">
        <nav>
          <Flex alignItems="center">
            <Link href="/" underline={false}>
              <img alt="Square logo" src="/img/logo-full.svg" height="60" style={{ marginBottom: 0 }} width="263" />
            </Link>
            <Box marginLeft={40}>
              <Link color="#103c52" href="/for-frontend-developers" fontSize={17}>
                Product
              </Link>
            </Box>
            <Box marginLeft={40}>
              <Link color="#103c52" href="/how-it-works" fontSize={17}>
                How it works
              </Link>
            </Box>
            <Box marginLeft={40}>
              <Link color="#103c52" href="/pricing" fontSize={17}>
                Pricing
              </Link>
            </Box>
            <Box marginLeft={40}>
              <Link color="#103c52" href="/blog" fontSize={17}>
                Blog
              </Link>
            </Box>
          </Flex>
        </nav>
        <Flex alignItems="center" justifyContent="center" width={220}>
          <Button href="/pricing">Start your free trial</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
