// @flow
import React, { useState } from 'react'
import Box from 'ui-box'

import { Button, Flex, Link } from 'primitives'

import SubNav from 'components/SubNav'

export default function Nav() {
  const [isShowingSubNav, setShowingSubNav] = useState(false)
  return (
    <Box is="header" background="#fff" paddingX={16} paddingY={8} position="fixed" top={0} width="100%" zIndex={999}>
      <Flex justifyContent="space-between">
        <nav>
          <Flex alignItems="center">
            <Link href="/" underline={false}>
              <img
                alt="FeaturePeek Logo"
                src="/img/logo-full.svg"
                height="60"
                style={{ marginBottom: 0 }}
                width="263"
              />
            </Link>
            <Box marginLeft={40} position="relative" onMouseLeave={() => setShowingSubNav(false)}>
              <Link
                color="#103c52"
                href="/for-frontend-developers"
                fontSize={17}
                onMouseEnter={() => setShowingSubNav(true)}
              >
                Built for
              </Link>
              <SubNav isShowing={isShowingSubNav} />
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
