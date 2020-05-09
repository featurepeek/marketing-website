import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Shawn() {
  const { img } = useStaticQuery(
    graphql`
      query Shawn {
        img: file(absolutePath: { regex: "/shawn.jpg/" }) {
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
      alt="Shawn"
      style={{
        borderRadius: 99,
        height: 64,
        width: 64,
      }}
    />
  )
}
