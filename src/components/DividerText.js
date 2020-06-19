import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const DividerText = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allFile.edges[7].node.childImageSharp.fluid)
  console.log(data.allFile.edges[10].node.childImageSharp.fluid)
  return (
    <div className="flex pt-12 lg:py-24 md:-mt-10 lg:-mt-20 items-center justify-center bg-black relative">
      <div className="absolute hidden md:block top-0">
        <BackgroundImage
          fluid={data.allFile.edges[10].node.childImageSharp.fluid}
          className="bg-repeat-x bg-contain bg-center h-349px"
          style={{ filter: "grayscale(100%)" }}
        
        >
          <div className="h-xs w-screen" style={{ 
            background: "linear-gradient(0deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)", 
  filter: "grayscale(100%)"
            }}></div>
        </BackgroundImage>
      </div>
      <div className="max-w-twelve flex flex-col justify-center items-center px-10 text-white z-10">
        <div
          className="w-32 mb-2 ml-4 rotate-45"
          style={{ filter: "invert()" }}
        >
          <Image
            fluid={data.allFile.edges[7].node.childImageSharp.fluid}
            className="transform rotate-45"
          />
        </div>
        <h2 className="text-3xl text-center">Gatsby + Headless CMS = Win</h2>
        <p className="max-w-lg text-center">
          I would argue Gatsby.js with a Headless CMS is THE best option in 2020
          for 90% of E-commerce and blogger websites.
        </p>
      </div>
    </div>
  )
}

export default DividerText
