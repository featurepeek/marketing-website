import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Box from 'ui-box'

export default function SlackReviewers() {
  const { img } = useStaticQuery(
    graphql`
      query SlackReviewers {
        img: file(absolutePath: { regex: "/slack-reviewers.png/" }) {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Box padding={32}>
      <Image fluid={img.childImageSharp.fluid} alt="Remind your reviewers that they have pull requests to review" />
    </Box>
  )
}
