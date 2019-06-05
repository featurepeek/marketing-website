// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'

import { Button, Flex, Link } from 'primitives'

import SubNav from 'components/SubNav'

export default function Nav() {
  const [isShowingSubNav, setShowingSubNav] = useState(false)
  const [hasScrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (!hasScrolled && window.scrollY > 32) {
        setScrolled(true)
      }

      if (hasScrolled && window.scrollY <= 32) {
        setScrolled(false)
      }
    }

    document.addEventListener('scroll', scrollListener)
    return () => {
      document.removeEventListener('scroll', scrollListener)
    }
  }, [hasScrolled])

  return (
    <Box
      is="header"
      background="#fff"
      boxShadow={hasScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'}
      paddingX={16}
      paddingY={8}
      marginTop={16}
      position="sticky"
      transition="box-shadow 0.15s ease"
      top={0}
      width="100%"
      zIndex={999}
    >
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
            <Box
              marginLeft={40}
              position="relative"
              onMouseEnter={() => setShowingSubNav(true)}
              onMouseLeave={() => setShowingSubNav(false)}
            >
              <Link color="#103c52" href="/for-frontend-developers" fontSize={17}>
                Product tour
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
            {/* <Box marginLeft={40}> */}
            {/*   <Link color="#103c52" href="/blog" fontSize={17}> */}
            {/*     Blog */}
            {/*   </Link> */}
            {/* </Box> */}
          </Flex>
        </nav>
        <Flex alignItems="center" justifyContent="center" width={240}>
          <Button href="https://airtable.com/shrUZixSNBqSzmdTc" target="_blank">
            Start your free trial
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
