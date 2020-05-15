import React from 'react'
import Helmet from 'react-helmet'

export default function Redirect() {
  return (
    <Helmet>
      <meta content="0;url=/product/teams" httpEquiv="refresh" />
    </Helmet>
  )
}
