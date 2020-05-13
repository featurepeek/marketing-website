import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import MediaQuery from 'react-responsive'
import Box from 'ui-box'

import { Flex, Heading, Icon, Link, Paragraph, Text } from 'primitives'

import Faqs from 'components/Faqs'
import PricingColumn from 'components/PricingColumn'
import Layout from 'components/Layout'
import SocialProof from 'components/SocialProof'
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
          <SEO title="Pricing" location={props.location} />
          <Heading marginTop={0} size={500} textAlign={mobile ? 'left' : 'center'}>
            Flexible plans for teams of all sizes.
          </Heading>
          <Heading
            h={2}
            marginTop={0}
            marginBottom={mobile ? 80 : 160}
            opacity={0.4}
            size={360}
            textAlign={mobile ? 'left' : 'center'}
          >
            Our plans are simple and straightforward.
          </Heading>
          <Flex justifyContent="center">
            <Paragraph
              background="#f8f8f8"
              borderRadius={12}
              paddingX={32}
              paddingY={8}
              position="relative"
              top={mobile ? -40 : -80}
              textAlign="center"
            >
              <Icon color="#2896e0" icon="fas fa-info-circle" marginRight={8} />
              <Text fontWeight={500}>
                These plans only apply to FeaturePeek Teams. <Link href="/product/indie">FeaturePeek Indie</Link> is
                free!
              </Text>
            </Paragraph>
          </Flex>
          <Flex alignItems="center" marginBottom={mobile ? 80 : 160}>
            {sortedProducts.map(product => (
              <PricingColumn key={product.id} hasMounted={hasMounted} product={product} />
            ))}
          </Flex>
          <SocialProof heading="Don't just take our word for it..." />
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
