import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function WandB() {
  const { img } = useStaticQuery(
    graphql`
      query WandB {
        img: file(absolutePath: { regex: "/wandb.png/" }) {
          childImageSharp {
            fixed(width: 64, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Image
      fixed={img.childImageSharp.fixed}
      alt="WandB"
      style={{
        borderRadius: 16,
        height: 64,
        width: 64,
      }}
    />
  )
}
