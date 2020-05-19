import React from "react"
import styles from "./Hero_Featured.module.css"
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
        <div className={styles.container}>
          <div className={styles.left}>
          
         
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
                <Image fluid={data.file.childImageSharp.fluid}                 
                  style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
                  alt="MikkelCodes-logo"

                  />
                 
                )}
              />
          

            <p className={styles.tagline}>
              on making stuff with Gatsby.js and GraphQL
            </p>
          </div>
          <div className={styles.right}>
            <Link key={key} to={`/blog/${slug}`}>
              <div className={styles.content}>
                <h1 className={styles.page}>{page}</h1>
                <h4 className={styles.subtitle}>Featured {featuredType}</h4>
                <h2 className={styles.title}>{title}</h2>
                <small className={styles.date}>{publishedDate}</small>
                <p className={styles.excerpt}>{shortDescription}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero_Featured
