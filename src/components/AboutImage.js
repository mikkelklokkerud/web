import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/about2bw.jpg" }) {
        childImageSharp {
          fixed (width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Image fixed={data.file.childImageSharp.fixed} />
    </div>
  )
}

export default AboutImage
