import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function DesignComeToLife() {
  const { img } = useStaticQuery(
    graphql`
      query DesignComeToLife {
        img: file(absolutePath: { regex: "/design-come-to-life.png/" }) {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="See your designs come to life earlier in the release cycle" />
}
