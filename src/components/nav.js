// @flow
import React from 'react'
import Box from 'ui-box'

import Button from 'primitives/button'
import Flex from 'primitives/flex'
import Link from 'primitives/link'

export default function Nav() {
  return (
    <Box
      is="header"
      background="#fff"
      // height={72}
      paddingX={16}
      paddingY={8}
      position="fixed"
      top={0}
      width="100%"
      zIndex={999}
    >
      <Flex justifyContent="space-between">
        <nav>
          <Flex alignItems="center">
            <Link href="/" underline={false}>
              <img src="/img/logo-full.svg" height="60" style={{ marginBottom: 0 }} />
            </Link>
            <Box marginLeft={40}>
              <Link color="#103c52" href="/for-frontend-developers" fontSize={17}>Product</Link>
            </Box>
            <Box marginLeft={40}>
              <Link color="#103c52" href="/how-it-works" fontSize={17}>How it works</Link>
            </Box>
            <Box marginLeft={40}>
              <Link color="#103c52" href="/pricing" fontSize={17}>Pricing</Link>
            </Box>
          </Flex>
        </nav>
        <Flex
          alignItems="center"
          justifyContent="center"
          width={220}
        >
          <Button href="https://dashboard.featurepeek.com">Start your free trial</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
