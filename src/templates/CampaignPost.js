import React from 'react'
import { graphql } from 'gatsby'
import cheerio from 'cheerio'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

import { Heading, ListItem, Link, Paragraph, UnorderedList } from 'primitives'

import { rhythm, scale } from 'utils/typography'

export default function CampaignPost(props) {
  const post = props.data.mailchimpCampaign
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  // this is cool but doesn't work with node!
  // const parser = new DOMParser()
  // const doc = parser.parseFromString(post.html, 'text/html')
  // const bodyTable = doc.querySelector('.bodyContainer').innerHTML

  const $ = cheerio.load(post.html)
  const bodyTable = $('.bodyContainer').html()

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.settings.title} description={post.settings.preview_text} location={props.location} />
      <div style={{ margin: 'auto', maxWidth: 600 }}>
        <Link href="/product-updates" underline={false}>
          ← All product updates
        </Link>
        <Heading marginTop={0} size={400}>
          {post.settings.title}
        </Heading>
        {post.send_time !== 'Invalid date' && (
          <Paragraph {...scale(-1 / 5)} marginBottom={rhythm(1)} marginTop={rhythm(-1)}>
            {post.send_time}
          </Paragraph>
        )}
      </div>
      {
        <div
          id="campaign"
          dangerouslySetInnerHTML={{ __html: bodyTable }}
          style={{ borderRadius: 8, border: '1px solid #ddd', margin: 'auto', maxWidth: 600, padding: 32 }}
        />
      }
      <UnorderedList display="flex" flexWrap="wrap" justifyContent="space-between" marginTop={64}>
        <ListItem>
          {previous && previous.status === 'sent' && previous.settings.title && (
            <Link href={`/product-updates/${previous.campaignId}`} rel="prev">
              ← {previous.settings.title}
            </Link>
          )}
        </ListItem>
        <ListItem>
          {next && next.status === 'sent' && next.settings.title && (
            <Link href={`/product-updates/${next.campaignId}`} rel="next">
              {next.settings.title} →
            </Link>
          )}
        </ListItem>
      </UnorderedList>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CampaignPostById($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mailchimpCampaign(campaignId: { eq: $slug }) {
      html
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
`
