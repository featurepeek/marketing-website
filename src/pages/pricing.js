import React from 'react'
import { graphql } from 'gatsby'

// import Column from "components/column"
import Footer from "components/footer"
import Nav from "components/nav"
import SEO from 'components/seo'

export default function Pricing(props) {
  const { data } = props
  const plans = data.allStripePlan.edges
  const products = data.allStripeProduct.edges.map(product => {
    const matchingPlans = plans.map(({ node }) => node).filter(plan => plan.product === product.node.id)
    return { 
      ...product.node, 
      plans: matchingPlans,
    }
  })

  return (
    <section>
      <SEO title="Pricing" />
      <Nav />
      {products.map(product => (
        <div>
          <h1 key={product.id}>{product.name}</h1>
          {product.plans.map(plan => (
            <h2 key={plan.id}>{plan.nickname}</h2>
          ))}
        </div>
      ))}
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
          created
          id
          metadata {
            foo
          }
          name
          object
          statement_descriptor
          type
          unit_label
          updated
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
          currency
          id
          interval
          interval_count
          metadata {
            projects
            environments
          }
          nickname
          object
          product
          trial_period_days
          usage_type
        }
      }
    }
  }
`
