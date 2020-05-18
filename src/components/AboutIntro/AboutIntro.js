import React from "react"
import styles from "./AboutIntro.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';



const introText1 =
  "Hi, my name is Mikkel. I am a Gatsby/GraphQL Developer from Norway."
const introText2 =
  "In short, I create blazing fast web apps and sites using JamStack and Server-Side Rendering technology. My preferred jam involves Gatsby.js and GraphQL, combined with Netlify for hosting and automation."
const introText3 =
  "Want an ultra fast and reliable website, coupled with a headless CMS 2020-style? Then, this technology is likely your best bet. And I can help you out."
const introText4 = `Contact`
const introTitle = "About"


const AboutIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/about2bw.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          }
      }
    }
  `)
  const aboutImageUrl = data
  console.log(data)
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div
            className={styles.leftcontainer__img1}           
          >
            <Image 
              fluid={data.file.childImageSharp.fluid}
              className={styles.leftcontainer__img1}
              backgroundColor={"black"}
            />
          </div>
          <div className={styles.container__rightcontainer}>
            <div className={styles.rightcontainer__textcontainer}>
              <h1 className={styles.textcontainer__title}>
                <span className="">{introTitle}</span>
              </h1>
              <p className={styles.textcontainer__text}>{introText1}</p>
            </div>
          </div>
        </div>
        <div className={styles.containerbelow}>
          <div className={styles.belowcontainer__textcontainer}>
            <h1 className={styles.textcontainer__title}>
              <span className="accent1">{`#me #jamstack #ssr`}</span>
            </h1>
            <p className={styles.textcontainer__text}>{introText2}</p>
            <p className={styles.textcontainer__text}>{introText3}</p>
            <button className={styles.btn} onClick={() => scrollTo('#contact')}>{introText4}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutIntro
