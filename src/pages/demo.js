import React from 'react'
import Helmet from 'react-helmet'

export default function DemoPage(props) {
  return (
    <Helmet>
      <meta httpEquiv="refresh" content="0;url=https://dashboard.featurepeek.com/demo" />
    </Helmet>
  )
}
