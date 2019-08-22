import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Balance() {
  const { img } = useStaticQuery(
    graphql`
      query Balance {
        img: file(absolutePath: { regex: "/balance.png/" }) {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Be more included in Engineering's release process" />
}
