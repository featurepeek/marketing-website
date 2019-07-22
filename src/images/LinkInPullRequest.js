import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Mask from 'components/Mask'

export default function LinkInPullRequest() {
  const { img } = useStaticQuery(
    graphql`
      query LinkInPullRequest {
        img: file(absolutePath: { regex: "/deployment-status.png/" }) {
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
    <Mask padding={8}>
      <Image fluid={img.childImageSharp.fluid} alt="Automatic links posted as comments in the pull request" />
    </Mask>
  )
}
