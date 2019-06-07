import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function OpenPullRequest() {
  const { img } = useStaticQuery(
    graphql`
      query OpenPullRequest {
        img: file(absolutePath: { regex: "/open-a-pull-request.png/" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Open up a new pull request" />
}
