import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function CiScript() {
  const { img } = useStaticQuery(
    graphql`
      query CiScript {
        img: file(absolutePath: { regex: "/bash-script.png/" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Ping our service after your build phase in CI" />
}
