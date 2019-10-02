import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

import { Heading, Link, Paragraph } from 'primitives'

import { rhythm } from 'utils/typography'

export default function Campaign(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const campaigns = data.allMailchimpCampaign.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All campaigns" location={props.location} />
      <Heading marginTop={0} size={400}>
        FeaturePeek product updates
      </Heading>
      <Paragraph>
        We send out a product newsletter once or twice a month, informing our users of new features and product
        improvements.
      </Paragraph>
      <Paragraph marginBottom={40}>
        Below is an archive of the product newsletters we've sent out in the past.
      </Paragraph>
      {campaigns.map(({ node }) => {
        const title = node.settings.title
        return (
          <div key={node.campaignId}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link href={`/product-updates/${node.campaignId}`}>{title}</Link>
            </h3>
            <small>{node.send_time}</small>
            <p>{node.settings.preview_text}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMailchimpCampaign(filter: { status: { eq: "sent" }, settings: { title: { ne: "" } } }) {
      edges {
        node {
          settings {
            preview_text
            subject_line
            title
          }
          campaignId
          send_time(formatString: "MMMM DD, YYYY")
          status
        }
      }
    }
  }
`
