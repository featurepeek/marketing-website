import React from 'react'
import { graphql } from 'gatsby'
import Box from 'ui-box'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import JoinMailingList from 'components/JoinMailingList'

import { Flex, Heading, Icon, Link, Paragraph } from 'primitives'

import { rhythm } from 'utils/typography'

export default function Campaign(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const campaigns = data.allMailchimpCampaign.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All product updates" location={props.location} />
      <Heading marginTop={0} size={500} textAlign="center">
        FeaturePeek Product Updates
      </Heading>
      <Paragraph textAlign="center">
        We send out a product newsletter once or twice a month, informing our users of new features and product
        improvements.
      </Paragraph>
      <Paragraph marginBottom={24} textAlign="center">
        Enter your email address below to get notified as soon as new features become available.
      </Paragraph>
      <center>
        <Box marginBottom={80} maxWidth={320}>
          <JoinMailingList />
        </Box>
      </center>
      <Box background="#f8f8f8" margin={-39} paddingX={40}>
        <Flex justifyContent="center">
          <Box marginBottom={80} maxWidth={880}>
            <Heading marginTop={40} marginLeft={16} size={300}>
              Archive
            </Heading>
            {campaigns
              .sort((a, b) => (new Date(a.node.send_time) < new Date(b.node.send_time) ? 1 : -1))
              .map(({ node }) => {
                const title = node.settings.title
                return (
                  <Box
                    key={node.campaignId}
                    background="white"
                    borderRadius={8}
                    boxShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
                    margin={16}
                    paddingX={16}
                    paddingY={8}
                  >
                    <Flex>
                      <Icon icon="far fa-newspaper" color="#ccc" fontSize={32} marginRight={16} marginTop={4} />
                      <Box>
                        <small>{node.send_time}</small>
                        <h3 style={{ marginBottom: rhythm(1 / 4), marginTop: rhythm(1 / 4) }}>
                          <Link href={`/product-updates/${node.campaignId}`}>
                            {title.replace(/product updates?:/gi, '')}
                          </Link>
                        </h3>
                        <p>{node.settings.preview_text}</p>
                      </Box>
                    </Flex>
                  </Box>
                )
              })}
          </Box>
        </Flex>
      </Box>
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
