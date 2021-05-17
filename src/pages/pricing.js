import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import MediaQuery from 'react-responsive'

import Layout from 'components/Layout'

export default function Pricing(props) {
  useEffect(() => {
    document.location.assign('/')
  }, [])

  return <MediaQuery maxWidth={800}>{mobile => <Layout location={props.location} />}</MediaQuery>
}

export const pageQuery = graphql`
  query {
    allStripeProduct {
      edges {
        node {
          active
          id
          metadata {
            position
            recommended
            cta
            cta_href
            perks
          }
          name
        }
      }
    }
    allStripePlan {
      edges {
        node {
          active
          amount
          billing_scheme
          created
          id
          interval
          nickname
          product
          trial_period_days
        }
      }
    }
  }
`
