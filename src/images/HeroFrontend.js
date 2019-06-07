import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function HeroFrontend(props) {
  const { img } = useStaticQuery(
    graphql`
      query HeroFrontend {
        img: file(absolutePath: { regex: "/front-end-devs.png/" }) {
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
      fluid={img.childImageSharp.fluid}
      alt="Built for Front-end Developers"
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
