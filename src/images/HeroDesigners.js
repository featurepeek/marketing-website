import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function HeroDesigners(props) {
  const { hero } = useStaticQuery(
    graphql`
      query HeroDesigners {
        hero: file(absolutePath: { regex: "/ux-designers.png/" }) {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      critical
      loading="eager"
      fluid={hero.childImageSharp.fluid}
      alt="Built for UX Designers"
      style={{
        backgroundPosition: '0 0px',
        backgroundSize: 'contain',
        height: 800,
        ...props.style,
      }}
    >
      {props.children}
    </BackgroundImage>
  )
}
