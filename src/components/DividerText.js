import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const DividerText = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allFile(filter: { relativeDirectory: { eq: "images/index" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.allFile.edges)
  return (
    <div className="flex pt-12 lg:py-24 items-center justify-center bg-black relative">

        <div className="absolute hidden md:block top-0">
          <BackgroundImage
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            className=" bg-fixed bg-center h-sm "
            style={{ filter: "grayscale(100%)" }}
            alt="stars"
          >
            <div
              className="h-sm w-screen"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
              }}
            ></div>
          </BackgroundImage>
        </div>
        <div className="max-w-twelve flex flex-col justify-center items-center px-10 text-white z-10">
          <div
            className="w-32 mb-2 ml-10 mb-5 rotate-45"
            style={{ filter: "invert()" }}
          >
            <Image
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              className="transform rotate-45"
              className="w-24 rotate-45"
              alt="rocket"
            />
          </div>
          <h2 className="lg:text-3xl text-2xl text-center z-20">
            Gatsby + Headless CMS = Win
          </h2>
          <p className="max-w-lg text-center pt-4">
            I would argue Gatsby.js with a Headless CMS is THE best option in
            2020 for 90% of E-commerce and blogger websites.
          </p>
        </div>

      </div>
  )
}

export default DividerText
