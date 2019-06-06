import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// import Box from 'ui-box'

// import { rhythm } from 'utils/typography'

export default function HeroFrontend(props) {
  const { hero } = useStaticQuery(
    graphql`
      query HeroQuery {
        hero: file(absolutePath: { regex: "/front-end-devs.png/" }) {
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
      alt="Built for Front-end Developers"
      style={{
        backgroundPosition: '0 0px',
        backgroundSize: 'contain',
        ...props.style,
      }}
    >
      {props.children}
    </BackgroundImage>
  )
}
