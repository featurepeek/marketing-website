import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function HeroDashboard() {
  const { img } = useStaticQuery(
    graphql`
      query HeroDashboard {
        img: file(absolutePath: { regex: "/general-hero-2.png/" }) {
          childImageSharp {
            fixed(width: 1225, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )

  return <Image fixed={img.childImageSharp.fixed} alt="FeaturePeek Dashboard" />
}
