import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function BirdsEyeView() {
  const { img } = useStaticQuery(
    graphql`
      query BirdsEyeView {
        img: file(absolutePath: { regex: "/birds-eye-view-cropped.png/" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="See a birds-eye view of your team's works in progress" />
}
