import React from "react"
import Link from "gatsby-link"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

class Hero_Featured extends React.Component {
  render() {
    const {
      key,
      publishedDate,
      title,
      slug,
      shortDescription,
      featuredType,
      page,
    } = this.props
    return (
      <div>
        <div className="h-screen lg:grid grid-cols-2 items-center sm:px-10 px-5 flex items-center flex-col justify-center lg:text-left">
          <div className="text-center w-4/6 sm:w-1/2 lg:w-auto sm:relative absolute top-0 mt-5">
            <StaticQuery
              query={graphql`
                query LogoQuery {
                  file(name: { eq: "logo-white-bg" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Image
                  fluid={data.file.childImageSharp.fluid}
                  className="mx-auto lg:w-9/12"
                  alt="MikkelCodes-logo"
                />
              )}
            />

            <p className="">Gatsby & Next + Headless CMS</p>
          </div>
          <div className="lg:border-l-2 border-black lg:pl-10 pr-6 py-16 mt-10 lg:mt-0 font-normal lg:max-w-auto max-w-lg sm:text-center lg:text-left">
            <Link key={key} to={`/blog/${slug}`}>
              <div className="">
                <div className="mb-5 block sm:hidden lg:block">Featured {featuredType}</div>
                <h2 className="text-2xl font-bold leading-tight mb-1">
                  {title}
                </h2>
                <small className="mt-3 mb-3 block">{publishedDate}</small>
                <p>{shortDescription}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero_Featured
