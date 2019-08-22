import React from 'react'
import { graphql } from 'gatsby'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import SEO from 'components/Seo'

import { Heading, ListItem, Link, Paragraph, UnorderedList } from 'primitives'

import { rhythm, scale } from 'utils/typography'

export default function BlogPost(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        location={props.location}
      />
      <Heading marginTop={0} size={400}>
        {post.frontmatter.title}
      </Heading>
      <Paragraph {...scale(-1 / 5)} marginBottom={rhythm(1)} marginTop={rhythm(-1)}>
        {post.frontmatter.date}
      </Paragraph>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr style={{ marginBottom: rhythm(1) }} />
      <Bio />
      <UnorderedList display="flex" flexWrap="wrap" justifyContent="space-between">
        <ListItem>
          {previous && (
            <Link href={`/blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </ListItem>
        <ListItem>
          {next && (
            <Link href={`/blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </ListItem>
      </UnorderedList>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
