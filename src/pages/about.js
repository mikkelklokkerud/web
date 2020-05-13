import React, { Component } from "react"
import Layout from "./../components/layout"
import styles from "./about.module.css"
import AboutIntro from "./../components/AboutIntro/AboutIntro";
import NetlifyForm from "./../components/NetlifyForm/NetlifyForm";


const AboutPage = () => {


  return (
    <Layout>

      <AboutIntro
      />
      
      <div className={styles.container}>


        <div className={styles.intro}>
          <h2 className="">The blog</h2>

          <p>A couple questions:</p>
      
          <ul>
            <li>
              Are you dedicated to become the best web developer you can be?
            </li>
            <li>
              Would you like to develop commercially viable apps and solutions?
            </li>
          </ul>
          <p>
            If so, I am with you! And this blog is all about us developer
            entrepreneurs.
          </p>
          <p>
            On this corner of the web I write about my journey as a web
            consultant and entrepreneur. This is also where share tools, tips
            and know-how as gathered along the way!
          </p>
          <h2>My background</h2>
          <ul>
            <li>2013: Started making Wordpress websites as a side hustle.</li>
            <li>
              2014-2017: Bachelor in Business and Entrepreneurship from
              Norwegian Business School.
            </li>
            <li>
              2017 - 2020: Worked as a project management consultant in Kenya
              and Madagascar. Managed projects co-financed by Samsung
              Electronics and The World Bank.
            </li>
            <li>
              2020: Web Development goes from being a side hustle to my main
              hustle! Jamstack for the win!
            </li>
          </ul>
          <h2>Web dev preferences</h2>
          <ul>
            <li>
              <strong>JS library:</strong> React and Gatsby
            </li>
            <li>
              <strong>Styling:</strong> CSS Modules
            </li>
            <li>
              <strong>Back-end:</strong> Node.js and Express
            </li>
            <li>
              <strong>Headless CMS:</strong> Contentful or Wordpress
            </li>
            <li>
              <strong>Design:</strong> Sketch, Adobe Photoshop, Google SketchUp
            </li>
            <li>
              <strong>SSR:</strong> Netlify
            </li>
          </ul>
          <br />
          {/* <p>Thanks for checking out my about page!</p> */}
      <NetlifyForm />
        </div>
      </div>
      <div className={styles.container}>
        </div>
    </Layout>
  )
}

// export const PageQuery = graphql`
// query AboutImageQuery{
//   allContentfulAsset(filter: {title: {eq: "About-Photo-Bw-Gradient"}}) {
//     edges {
//       node {
//         id
//         title
//         fluid {
//           src
//         }
//       }
//     }
//   }
// }
// `

export default AboutPage
