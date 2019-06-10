import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

export default function GitHubMark(props) {
  const { width = 800, height = 800 } = props
  const { img } = useStaticQuery(
    graphql`
      query GitHubMark {
        img: file(absolutePath: { regex: "/github-mark.png/" }) {
          childImageSharp {
            fixed(width: 800, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <Image fixed={img.childImageSharp.fixed} alt="GitHub Mark" style={{ width, height }} />
}
