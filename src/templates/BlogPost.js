import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Box from 'ui-box'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import SEO from 'components/Seo'

import { Flex, Heading, ListItem, Link, Paragraph, UnorderedList } from 'primitives'

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
      <Flex background="linear-gradient(#fff, #effefe)" margin={-39} paddingBottom={80} paddingTop={40} paddingX={40}>
        <Flex alignItems="center" width="100%">
          <Box paddingRight={32}>
            <Link href="/blog" underline={false}>
              ← All blog posts
            </Link>
            <Heading marginTop={0} size={480}>
              {post.frontmatter.title}
            </Heading>
            <Paragraph color="#999" {...scale(-1 / 8)} marginBottom={rhythm(1)} marginTop={rhythm(-0.5)}>
              {post.frontmatter.date}
            </Paragraph>
            <Paragraph marginTop={0} fontSize={24}>
              {post.frontmatter.description}
            </Paragraph>
            <Bio />
          </Box>
        </Flex>
        <Box borderRadius={28} boxShadow="0 8px 16px rgba(0, 0, 0, 0.15)" overflow="hidden" width="100%">
          <Image fluid={post.frontmatter.hero.childImageSharp.fluid} />
        </Box>
      </Flex>
      <Box margin={-39}>
        <img alt="" height="40" src="/img/divider.svg" width="100%" />
      </Box>
      <Box marginTop={rhythm(4)} marginX="auto" maxWidth={rhythm(28)}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
      {/* <hr style={{ marginBottom: rhythm(1) }} /> */}
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
        hero {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
