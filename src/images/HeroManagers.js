import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function HeroManagers(props) {
  const { img } = useStaticQuery(
    graphql`
      query HeroManagers {
        img: file(absolutePath: { regex: "/project-managers.png/" }) {
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
      fadeIn={false}
      fluid={img.childImageSharp.fluid}
      alt="Built for Project Managers"
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
