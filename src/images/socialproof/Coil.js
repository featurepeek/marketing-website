import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Coil() {
  const { img } = useStaticQuery(
    graphql`
      query Coil {
        img: file(absolutePath: { regex: "/coil.png/" }) {
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
      alt="Coil"
      style={{
        borderRadius: 16,
        height: 64,
        width: 64,
      }}
    />
  )
}
