import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function TechCrunch() {
  const { img } = useStaticQuery(
    graphql`
      query TechCrunch {
        img: file(absolutePath: { regex: "/techcrunch-logo.png/" }) {
          childImageSharp {
            fixed(width: 256, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <Image fixed={img.childImageSharp.fixed} alt="Featured on TechCrunch" />
}
