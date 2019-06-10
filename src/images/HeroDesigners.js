import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import MediaQuery from 'react-responsive'

export default function HeroDesigners(props) {
  const { img } = useStaticQuery(
    graphql`
      query HeroDesigners {
        img: file(absolutePath: { regex: "/ux-designers.png/" }) {
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
          alt="Built for UX Designers"
          style={{
            backgroundPosition: mobile ? 'bottom' : 'top',
            backgroundSize: 'contain',
            height: mobile ? 480 : 740,
            ...props.style,
          }}
        >
          {props.children}
        </BackgroundImage>
      )}
    </MediaQuery>
  )
}
