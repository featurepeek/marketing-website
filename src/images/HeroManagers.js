import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import MediaQuery from 'react-responsive'

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
    <MediaQuery maxWidth={904}>
      {mobile => (
        <BackgroundImage
          fadeIn="soft"
          fluid={img.childImageSharp.fluid}
          alt="Built for Project Managers"
          style={{
            backgroundPosition: mobile ? 'bottom' : 'top',
            backgroundSize: 'contain',
            height: mobile ? 520 : 720,
            ...props.style,
          }}
        >
          {props.children}
        </BackgroundImage>
      )}
    </MediaQuery>
  )
}
