import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Hamza() {
  const { img } = useStaticQuery(
    graphql`
      query Hamza {
        img: file(absolutePath: { regex: "/hamza.jpg/" }) {
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
      alt="Hamza"
      style={{
        borderRadius: 99,
        height: 64,
        width: 64,
      }}
    />
  )
}
