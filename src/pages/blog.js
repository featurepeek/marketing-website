import React from 'react'
import { graphql } from 'gatsby'
import Box from 'ui-box'
import Image from 'gatsby-image'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

import { Link, Flex } from 'primitives'

import { rhythm } from 'utils/typography'

export default function Blog(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" location={props.location} />
      <Flex flexWrap="wrap" marginX={-16} width="calc(100% + 32px)">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Box
              key={node.fields.slug}
              borderRadius={8}
              className="hover-card"
              flexGrow={1}
              margin={16}
              maxWidth="calc(33.33% - 32px)"
              overflow="hidden"
            >
              <Link href={`/blog${node.fields.slug}`} display="block" underline={false}>
                <Image fluid={node.frontmatter.hero.childImageSharp.fluid} />
              </Link>
              <Box
                borderColor="#ccc"
                borderStyle="solid"
                borderBottomLeftRadius={8}
                borderBottomRightRadius={8}
                borderBottomWidth={1}
                borderLeftWidth={1}
                borderTopWidth={0}
                borderRightWidth={1}
                padding={16}
              >
                <h3 style={{ color: 'inherit', margin: 0 }}>
                  <Link href={`/blog${node.fields.slug}`} underline={false}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Box>
            </Box>
          )
        })}
      </Flex>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
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
    }
  }
`
