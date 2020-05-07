import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function GitStart() {
  const { img } = useStaticQuery(
    graphql`
      query GitStart {
        img: file(absolutePath: { regex: "/gitstart.png/" }) {
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
      alt="GitStart"
      style={{
        borderRadius: 16,
        height: 64,
        width: 64,
      }}
    />
  )
}
