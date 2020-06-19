import React from "react"
import styles from "./AboutIntro.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';



const introText1 =
  "Hi, my name is Mikkel. I am a Gatsby Developer from Norway."
const introText2 =
  "In short, I customize blazing fast web apps and sites using Gatsby.js, Headless CMSes and typically Netlify for hosting."
const introText3 =
  "If you want an ultra fast, reliable and secure website in 2020, this tech is the way to go. Contact me on UpWork, I'd be happy to put together a carefully customised solution according to your specific needs."
const introText4 = `Contact`
const introTitle = "About"


const AboutIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/about2bw.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          }
      }
    }
  `)

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
              #me #headless #webdev
            </h1>
            <p className={styles.textcontainer__text}>{introText2}</p>
            <p className={styles.textcontainer__text}>{introText3}</p>
            <a href="https://www.upwork.com/fl/mikkelklokkerud"><button className="mt-5 py-3 px-5 bg-black text-white rounded w-full pointer hover:bg-gray-800">Mikkel On UpWork</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutIntro
