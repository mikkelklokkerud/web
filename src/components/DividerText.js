import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const DividerText = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "images/straightrocket.png" }) {
        childImageSharp {
          fixed(height: 190) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  console.log(data.file.childImageSharp.fluid)
  return (
    <div
      className="flex py-24 -mt-10 items-center justify-center"
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(20,20,20,1) 100%)",
      }}
    >
      <div className="max-w-twelve flex flex-col justify-center items-center px-10 text-white">
        <div className="w-32 mb-2 ml-4 rotate-45" style={{ filter: "invert()" }}>
          <Image fixed={data.file.childImageSharp.fixed} className="transform rotate-45" />
        </div>
        <h2 className="text-3xl">Gatsby + Headless CMS = Win</h2>
        <p className="max-w-lg text-center">
          I would argue Gatsby.js with a Headless CMS is THE best option in 2020
          for 90% of E-commerce and blogger websites.
        </p>
      </div>
    </div>
  )
}

export default DividerText
