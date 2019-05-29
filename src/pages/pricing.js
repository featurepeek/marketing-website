import React, { useState, useEffect } from 'react'
import Box from 'ui-box'
import { graphql } from 'gatsby'
import Switch from 'rc-switch'

import Button from 'primitives/button'
import Column from 'primitives/column'
import Heading from 'primitives/heading'
import Icon from 'primitives/icon'
import Flex from 'primitives/flex'
import Li from 'primitives/li'
import Ul from 'primitives/ul'

import Footer from 'components/footer'
import Nav from 'components/nav'
import SEO from 'components/seo'

import { dollarsFromCents } from 'utils/money'

export default function Pricing({ data }) {
  const [isMonthly, setMonthly] = useState(false)
  const [hasMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const plans = data.allStripePlan.edges
  const products = data.allStripeProduct.edges.map(product => {
    const matchingPlans = plans.map(({ node }) => node).filter(plan => plan.product === product.node.id)
    return {
      ...product.node,
      plans: matchingPlans,
    }
  })

  const togglePlan = () => {
    setMonthly(!isMonthly)
  }

  const sortedProducts = products.sort((a, b) => parseInt(a.metadata.position, 10) > parseInt(b.metadata.position, 10))

  return (
    <section>
      <SEO title="Pricing" />
      <Nav />
      <Box marginY={100}>
        <Heading marginX={40} marginTop={160} marginBottom={16} size={500} textAlign="center">
          Flexible plans for companies of all sizes.
        </Heading>
        <Heading marginX={40} marginTop={0} marginBottom={160} opacity={0.4} size={360} textAlign="center">
          Our plans are simple and straightforward.
        </Heading>
        <Flex alignItems="center" marginX={40} marginBottom={200}>
          {sortedProducts.map((product, i) => (
            <Column
              key={product.id}
              background={
                product.metadata.recommended ? 'linear-gradient(#fcfcd4, #fefdb3)' : 'linear-gradient(#eefcfd, #e6f4f1)'
              }
              border={product.metadata.recommended ? '3px solid #fefdb3' : '3px solid #e6f4f1'}
              borderRadius={16}
              // boxShadow="0 0 1px 0 rgba(67, 90, 111, 0.3), 0 2px 4px -2px rgba(67, 90, 111, 0.47)"
              margin={12}
              position="relative"
              transition="transform 1.5s ease"
              transform={hasMounted ? `translateY(0px)` : `translateY(${product.metadata.recommended ? 240 : 200}px)`}
            >
              {product.metadata.recommended && (
                <Flex justifyContent="center">
                  <Heading h={6} size={200} opacity={0.5} position="absolute" top={-72}>
                    <Icon icon="fas fa-magic" marginRight={8} /> most popular
                  </Heading>
                </Flex>
              )}
              <Heading h={2} color="#103c52" marginTop={16} size={300} textAlign="center">
                {product.name}
              </Heading>
              <Box paddingX={32}>
                {product.plans[0].amount === 0 && (
                  <Heading h={2} marginTop={0} size={200} textAlign="center">
                    For public repositories only
                  </Heading>
                )}
                {product.plans.length > 1 && (
                  <Box>
                    <Flex justifyContent="center" marginBottom={24}>
                      <Heading h={2} margin={0} size={500}>
                        {isMonthly
                          ? dollarsFromCents(product.plans[0].amount / 12)
                          : dollarsFromCents(product.plans[1].amount)}
                      </Heading>
                      <Box marginLeft={8}>
                        <p style={{ marginBottom: 0, position: 'relative', top: 8 }}>
                          <em style={{ opacity: 0.5 }}>per user</em>
                        </p>
                        <p style={{ marginBottom: 0 }}>
                          <em style={{ opacity: 0.5 }}>per month</em>
                        </p>
                      </Box>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <strong
                        onClick={() => setMonthly(false)}
                        style={{ cursor: 'pointer', opacity: isMonthly ? 0.4 : 1, transition: 'opacity 0.3s ease' }}
                      >
                        Monthly
                      </strong>
                      <Switch checked={isMonthly} onChange={togglePlan} />
                      <strong
                        onClick={() => setMonthly(true)}
                        style={{ cursor: 'pointer', opacity: isMonthly ? 1 : 0.4, transition: 'opacity 0.3s ease' }}
                      >
                        Annually
                      </strong>
                    </Flex>
                  </Box>
                )}
                {product.plans[0].amount >= 5000000 && (
                  <Heading h={2} marginTop={0} size={200} textAlign="center">
                    For security-focused companies
                  </Heading>
                )}
                <Ul marginTop={product.plans.length > 1 ? 40 : 84} marginBottom={40}>
                  {product.metadata.perks.split('\n').map(metadata => (
                    <Li key={metadata} fontSize={17} marginBottom={16}>
                      <Icon icon="fas fa-check" color="#5abf7e" marginRight={8} /> {metadata}
                    </Li>
                  ))}
                </Ul>
                <Flex alignItems="center" height={100} justifyContent="center">
                  <Button>{product.metadata.cta}</Button>
                </Flex>
                {product.plans[0].trial_period_days && (
                  <p style={{ opacity: 0.5, textAlign: 'center' }}>
                    <em>Comes with a {product.plans[0].trial_period_days}-day free trial</em>
                  </p>
                )}
              </Box>
            </Column>
          ))}
        </Flex>
      </Box>
      <Footer />
    </section>
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
