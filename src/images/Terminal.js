import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Terminal() {
  const { img } = useStaticQuery(
    graphql`
      query Terminal {
        img: file(absolutePath: { regex: "/terminal.png/" }) {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="No need to checkout branches locally" />
}
