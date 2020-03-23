import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'
import Cookies from 'js-cookie'
import queryString from 'query-string'

import CtaBox from 'components/CtaBox'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

import { rhythm } from 'utils/typography'

export default function Layout(props) {
  const { location, background, children } = props

  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    // ultra-hack to combat react-responsive + Gatsby SSR woes.
    // https://github.com/contra/react-responsive/issues/162
    const MAX_BREAK_POINT = 942
    if (!window._didInitialRender && window.innerWidth <= MAX_BREAK_POINT) {
      setInitialRender(false)
      setTimeout(() => {
        setInitialRender(true)
      }, 1)
      window._didInitialRender = true
    }

    // if there's a referral query param, save in a domain-wide cookie (to pass to dashboard)
    const { location } = document
    if (location.search) {
      const { r } = queryString.parse(location.search)
      if (r) {
        const opts = { expires: 365 * 10, domain: `dashboard.${location.host}`, secure: location.protocol === 'https:' }
        Cookies.set('referralCode', r, opts)
      }
    }
  }, [])

  if (!initialRender) {
    return null
  }

  return (
    <MediaQuery maxWidth={504}>
      {mobile => (
        <Box background={background ? background : undefined}>
          <Nav />
          <Box
            className="layout-padding-fouc"
            marginTop={16}
            marginX="auto"
            maxWidth={rhythm(64)}
            overflowX={location.pathname === '/' ? 'hidden' : undefined}
            padding={mobile ? 16 : rhythm(1.5)}
          >
            <main>{children}</main>
          </Box>
          <CtaBox />
          <Footer />
        </Box>
      )}
    </MediaQuery>
  )
}
