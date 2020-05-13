// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Icon, Flex, Link, ListItem, UnorderedList } from 'primitives'

import Banner from 'components/Banner'
import { track } from 'utils/analytics'

import Logo from '../../static/img/full-logo.svg'

export default function Nav() {
  const initialBannerState = typeof window !== 'undefined' ? !window.isHidingBanner : true
  const [isShowingBanner, setShowingBanner] = useState(initialBannerState)
  const [isShowingMobileNav, setShowingMobileNav] = useState(false)
  const [hasScrolled, setScrolled] = useState(false)

  const toggleMobileNav = () => {
    setShowingMobileNav(!isShowingMobileNav)
  }

  const dismissBanner = () => {
    setShowingBanner(false)
    window.isHidingBanner = true
  }

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
    <MediaQuery maxWidth={936}>
      {mobile => (
        <Box
          is="header"
          background="#fff"
          boxShadow={hasScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'}
          className="nav-padding-fouc"
          height={mobile && isShowingMobileNav ? 440 : 76}
          marginBottom={isShowingBanner ? 42 : 0}
          marginTop={8}
          // overflow={mobile ? 'hidden' : 'inherit'}
          paddingX={mobile ? 0 : 16}
          paddingY={8}
          position="sticky"
          top={isShowingBanner ? 42 : 0}
          transition="all 0.3s ease"
          width="100%"
          zIndex={999}
        >
          <Flex justifyContent="space-between" flexDirection="row">
            {isShowingBanner && <Banner dismiss={dismissBanner} />}
            <nav>
              <Flex alignItems="center">
                <Link href="/" underline={false}>
                  <Logo />
                </Link>
                {!mobile && (
                  <>
                    <Box marginLeft={20} paddingRight={16} paddingY={16} position="relative" top={2}>
                      <Link className="nav-links-hide-fouc" color="#103c52" href="/product/teams" fontSize={17}>
                        Teams
                      </Link>
                    </Box>
                    <Box className="nav-links-hide-fouc" paddingX={16} position="relative" top={2}>
                      <Link color="#103c52" href="/product/indie" fontSize={17}>
                        Indie
                      </Link>
                    </Box>
                    <Box className="nav-links-hide-fouc" paddingX={16} position="relative" top={2}>
                      <Link color="#103c52" href="/how-it-works" fontSize={17}>
                        Setup
                      </Link>
                    </Box>
                    <Box className="nav-links-hide-fouc" paddingX={16} position="relative" top={2}>
                      <Link color="#103c52" href="/pricing" fontSize={17}>
                        Pricing
                      </Link>
                    </Box>
                    <Box className="nav-links-hide-fouc" paddingX={16} position="relative" top={2}>
                      <Link color="#103c52" href="/blog" fontSize={17}>
                        Blog
                      </Link>
                    </Box>
                    <Box className="nav-links-hide-fouc" paddingX={16} position="relative" top={2}>
                      <Link color="#103c52" href="https://docs.featurepeek.com/intro" fontSize={17}>
                        Docs
                      </Link>
                    </Box>
                  </>
                )}
              </Flex>
            </nav>
            {mobile ? (
              <Flex alignItems="center" justifyContent="center" paddingRight={24}>
                <Icon
                  cursor="pointer"
                  icon={isShowingMobileNav ? 'fas fa-times' : 'fas fa-bars'}
                  fontSize={24}
                  onClick={toggleMobileNav}
                />
              </Flex>
            ) : (
              <Flex alignItems="center" className="nav-links-hide-fouc" justifyContent="center" width={224}>
                <Button
                  href="https://dashboard.featurepeek.com/login"
                  onClick={() => track('Clicked CTA', { cta: 'Nav' })}
                >
                  Log in / Sign up
                </Button>
              </Flex>
            )}
          </Flex>
          {mobile && isShowingMobileNav && (
            <Box>
              <UnorderedList marginLeft={76} marginTop={16}>
                <ListItem>
                  <Link href="/product/teams" fontSize={21}>
                    FeaturePeek Teams
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/product/indie" fontSize={21}>
                    FeaturePeek Indie
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/how-it-works" fontSize={21}>
                    How it works
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/pricing" fontSize={21}>
                    Pricing
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/blog" fontSize={21}>
                    Blog
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://docs.featurepeek.com/intro" fontSize={21}>
                    Documentation
                  </Link>
                </ListItem>
              </UnorderedList>
              <Flex alignItems="center" justifyContent="center" height={100} width="100%">
                <Button
                  href="https://dashboard.featurepeek.com/login"
                  onClick={() => track('Clicked CTA', { cta: 'Mobile Nav' })}
                >
                  Log in / Sign up
                </Button>
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </MediaQuery>
  )
}
