import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function RealData() {
  const { img } = useStaticQuery(
    graphql`
      query RealData {
        img: file(absolutePath: { regex: "/real-data.png/" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Fill your designs with real production data" />
}
