import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import MediaQuery from 'react-responsive'

import { Heading, Flex } from 'primitives'

import Faqs from 'components/Faqs'
import PricingColumn from 'components/PricingColumn'
import Layout from 'components/Layout'
import SEO from 'components/Seo'

import pricingFAQs from 'copy/pricingFAQs'

export default function Pricing(props) {
  const [hasMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const plans = props.data.allStripePlan.edges
  const products = props.data.allStripeProduct.edges.map(product => {
    const matchingPlans = plans.map(({ node }) => node).filter(plan => plan.product === product.node.id)
    return {
      ...product.node,
      plans: matchingPlans,
    }
  })

  const sortedProducts = products.sort((a, b) => parseInt(a.metadata.position, 10) - parseInt(b.metadata.position, 10))

  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Layout location={props.location}>
          <SEO title="Pricing" />
          <Flex alignItems="center" marginBottom={mobile ? 80 : 160}>
            {sortedProducts.map(product => (
              <PricingColumn key={product.id} hasMounted={hasMounted} product={product} />
            ))}
          </Flex>
          <Faqs heading="Pricing FAQs" faqs={pricingFAQs} />
        </Layout>
      )}
    </MediaQuery>
  )
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
