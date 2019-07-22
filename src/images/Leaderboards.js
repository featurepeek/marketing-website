import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Mask from 'components/Mask'

export default function Leaderboards() {
  const { img } = useStaticQuery(
    graphql`
      query Leaderboards {
        img: file(absolutePath: { regex: "/leaderboards.png/" }) {
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
      <Image fluid={img.childImageSharp.fluid} alt="Recognize and reward team engagement" />
    </Mask>
  )
}
