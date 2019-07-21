import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function AnotherMachine() {
  const { img } = useStaticQuery(
    graphql`
      query AnotherMachine {
        img: file(absolutePath: { regex: "/another-machine.png/" }) {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Image
      fluid={img.childImageSharp.fluid}
      alt="See your build on another machine before committing to the main branch"
    />
  )
}
