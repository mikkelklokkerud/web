import React from "react"
import styles from "./AboutIntro.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"



const introText1 =
  "Hi, my name is Mikkel. I am a Gatsby Developer from Norway."
const introText2 =
  "In short, I make blazing fast websites using Gatsby.js, typically coupled with a Headless CMS. If you want an ultra fast, reliable and secure website in 2021, this tech is the way to go. "
const introText3 =
  "Contact me on UpWork or through the contact form below, I'd be happy to put together a customized JAMstack solution for you, according to your specific needs. Let's chat."
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
              alt="mikkel klokkerud"
            />
          </div>
          <div className={styles.container__rightcontainer}>
            <div className={styles.rightcontainer__textcontainer}>
              <h2 className="text-white text-3xl mb-4">
                <span className="">{introTitle}</span>
              </h2>
              <p className={styles.textcontainer__text}>{introText1}</p>
            </div>
          </div>
        </div>
        <div className={styles.containerbelow}>
          <div className={styles.belowcontainer__textcontainer}>
            <h2 className="text-3xl mb-4">
              #me #headless #webdev
            </h2>
            <p className="mt-5 mb-4" style={{ fontSize: "18px" }}>{introText2}</p>
            <p className="" style={{ fontSize: "18px" }}>{introText3}</p>
            <a href="https://www.upwork.com/fl/mikkelklokkerud"><button className="mt-5 py-3 px-5 bg-black text-white rounded w-full pointer hover:bg-gray-800">Mikkel On UpWork</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutIntro
