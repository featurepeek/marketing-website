import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Flex, Paragraph, Strong, Text } from 'primitives'

import { rhythm } from 'utils/typography'

export default function Bio(props) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const author = data.site.siteMetadata.authors[props.author]
        return (
          <Flex alignItems="center" flexDirection="row" marginBottom={rhythm(1)} marginTop={rhythm(2.5)}>
            <Image
              fixed={data[props.author].childImageSharp.fixed}
              alt={author.name}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 56,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <Paragraph marginBottom={0}>
              <Text>
                Written by <Strong>{author.name}</Strong>
              </Text>
              <br />
              <Text>{author.title}</Text>
            </Paragraph>
          </Flex>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    jasonbarry: file(absolutePath: { regex: "/jasonbarry.jpg/" }) {
      childImageSharp {
        fixed(width: 56, height: 56) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ericsilverman: file(absolutePath: { regex: "/ericsilverman.jpg/" }) {
      childImageSharp {
        fixed(width: 56, height: 56) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        authors {
          jasonbarry {
            name
            title
          }
          ericsilverman {
            name
            title
          }
        }
      }
    }
  }
`
