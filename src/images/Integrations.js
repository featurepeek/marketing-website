import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function Integrations(props) {
  const { width = 800, height = 800 } = props
  const { img } = useStaticQuery(
    graphql`
      query Integrations {
        img: file(absolutePath: { regex: "/github-integrations.png/" }) {
          childImageSharp {
            fixed(width: 800, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Image
      fixed={img.childImageSharp.fixed}
      alt="Integrations"
      loading="eager"
      className="spin-forever"
      style={{ width, height }}
    />
  )
}
