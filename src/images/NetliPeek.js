import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function NetliPeek() {
  const { img } = useStaticQuery(
    graphql`
      query NetliPeek {
        img: file(absolutePath: { regex: "/netlipeek.png/" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="FeaturePeek + Netlify" />
}
