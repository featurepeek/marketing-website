import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Partnership() {
  const { img } = useStaticQuery(
    graphql`
      query Partnership {
        img: file(absolutePath: { regex: "/partnership.png/" }) {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Shorten feedback loops between Design and Engineering teams" />
}
