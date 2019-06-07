import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Mask from 'components/Mask'

export default function PageViews() {
  const { img } = useStaticQuery(
    graphql`
      query PageViews {
        img: file(absolutePath: { regex: "/page-views.png/" }) {
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
      <Image fluid={img.childImageSharp.fluid} alt="See who has viewed your environments" />
    </Mask>
  )
}
