import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Andros() {
  const { img } = useStaticQuery(
    graphql`
      query Andros {
        img: file(absolutePath: { regex: "/andros-w.png/" }) {
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
      alt="Andros"
      style={{
        borderRadius: 99,
        height: 64,
        width: 64,
      }}
    />
  )
}
