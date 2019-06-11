import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import MediaQuery from 'react-responsive'

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
    <MediaQuery maxWidth={904}>
      {mobile => (
        <BackgroundImage
          loading="eager"
          fadeIn={false}
          fluid={img.childImageSharp.fluid}
          alt="Built for Front-end Developers"
          style={{
            backgroundPosition: mobile ? 'bottom' : 'top',
            backgroundSize: 'contain',
            height: mobile ? 540 : 700,
            ...props.style,
          }}
        >
          {props.children}
        </BackgroundImage>
      )}
    </MediaQuery>
  )
}
