import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function SaveTime() {
  const { img } = useStaticQuery(
    graphql`
      query SaveTime {
        img: file(absolutePath: { regex: "/save-time.png/" }) {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Save time during your release cycle" />
}
