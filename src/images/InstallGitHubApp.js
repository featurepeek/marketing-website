import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function InstallGitHubApp() {
  const { img } = useStaticQuery(
    graphql`
      query InstallGitHubApp {
        img: file(absolutePath: { regex: "/install-gh-app.png/" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Image fluid={img.childImageSharp.fluid} alt="Install our GitHub App" />
}
