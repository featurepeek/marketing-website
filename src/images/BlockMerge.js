import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Mask from 'components/Mask'

export default function BlockMerge() {
  const { img } = useStaticQuery(
    graphql`
      query BlockMerge {
        img: file(absolutePath: { regex: "/block.png/" }) {
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
    <Mask padding={8}>
      <Image
        fluid={img.childImageSharp.fluid}
        alt="Block a pull request from being merged if it doesn't meet your expectations"
      />
    </Mask>
  )
}
