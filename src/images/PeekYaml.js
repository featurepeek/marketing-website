import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function PeekYaml() {
  const { img } = useStaticQuery(
    graphql`
      query PeekYaml {
        img: file(absolutePath: { regex: "/peek-yaml.png/" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Add a peek.yml file to your repo root" />
}
