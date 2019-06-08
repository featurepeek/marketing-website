import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Mask from 'components/Mask'

export default function Commenting() {
  const { img } = useStaticQuery(
    graphql`
      query Commenting {
        img: file(absolutePath: { regex: "/commenting.png/" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Mask>
      <Image
        fluid={img.childImageSharp.fluid}
        alt="Annotate directly on the implementation by leaving comments on DOM elements"
      />
    </Mask>
  )
}
