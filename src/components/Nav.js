// @flow
import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Icon, Flex, Link, ListItem, UnorderedList } from 'primitives'

import SubNav from 'components/SubNav'
import { track } from 'utils/analytics'

export default function Nav() {
  const [isShowingSubNav, setShowingSubNav] = useState(false)
  const [isShowingMobileNav, setShowingMobileNav] = useState(false)
  const [hasScrolled, setScrolled] = useState(false)

  const toggleMobileNav = () => {
    setShowingMobileNav(!isShowingMobileNav)
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
          marginTop={16}
          overflow={mobile ? 'hidden' : 'inherit'}
          paddingX={mobile ? 0 : 16}
          paddingY={8}
          position="sticky"
          top={0}
          transition="box-shadow 0.15s ease, height 0.3s ease"
          width="100%"
          zIndex={999}
        >
          <Flex justifyContent="space-between" flexDirection="row">
            <nav>
              <Flex alignItems="center">
                <Link href="/" underline={false}>
                  <img
                    alt="FeaturePeek Logo"
                    src="/img/logo-full.svg"
                    height="60"
                    style={{ marginBottom: 0, marginRight: 16 }}
                    width="263"
                  />
                </Link>
                {!mobile && (
                  <>
                    <Box
                      paddingRight={16}
                      paddingY={16}
                      position="relative"
                      onMouseEnter={() => setShowingSubNav(true)}
                      onMouseLeave={() => setShowingSubNav(false)}
                    >
                      <Link
                        className="nav-links-hide-fouc"
                        color="#103c52"
                        href="/for-frontend-developers"
                        fontSize={17}
                      >
                        Product
                      </Link>
                      <SubNav isShowing={isShowingSubNav} />
                    </Box>
                    <Box className="nav-links-hide-fouc" paddingX={16}>
                      <Link color="#103c52" href="/how-it-works" fontSize={17}>
                        Setup
                      </Link>
                    </Box>
                    <Box className="nav-links-hide-fouc" paddingX={16}>
                      <Link color="#103c52" href="/pricing" fontSize={17}>
                        Pricing
                      </Link>
                    </Box>
                    {/* <Box className="nav-links-hide-fouc" paddingX={16}> */}
                    {/*   <Link color="#103c52" href="/blog" fontSize={17}> */}
                    {/*     Blog */}
                    {/*   </Link> */}
                    {/* </Box> */}
                    <Box className="nav-links-hide-fouc" paddingX={16}>
                      <Link color="#103c52" href="https://docs.featurepeek.com/intro" fontSize={17} target="_blank">
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
                  href="https://dashboard.featurepeek.com"
                  onClick={() => track('Clicked CTA', { cta: 'Nav' })}
                  target="_blank"
                >
                  Go to Dashboard
                </Button>
              </Flex>
            )}
          </Flex>
          {mobile && isShowingMobileNav && (
            <Box>
              <UnorderedList marginLeft={76} marginTop={16}>
                <ListItem>
                  <Link href="/for-frontend-developers" fontSize={21}>
                    For Front-end Developers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/for-ux-designers" fontSize={21}>
                    For UX Designers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/for-project-managers" fontSize={21}>
                    For Project Managers
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
                  <Link href="https://docs.featurepeek.com/intro" fontSize={21}>
                    Documentation
                  </Link>
                </ListItem>
              </UnorderedList>
              <Flex alignItems="center" justifyContent="center" height={100} width="100%">
                <Button
                  href="https://dashboard.featurepeek.com"
                  onClick={() => track('Clicked CTA', { cta: 'Mobile Nav' })}
                  target="_blank"
                >
                  Go to Dashboard
                </Button>
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </MediaQuery>
  )
}
