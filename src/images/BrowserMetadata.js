import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Mask from 'components/Mask'

export default function BrowserMetadata() {
  const { img } = useStaticQuery(
    graphql`
      query BrowserMetadata {
        img: file(absolutePath: { regex: "/browser-metadata.png/" }) {
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
    <Mask paddingLeft={8} paddingRight={16} paddingY={8}>
      <Image fluid={img.childImageSharp.fluid} alt="Get browser metadata from a reviewer's environment automatically" />
    </Mask>
  )
}
