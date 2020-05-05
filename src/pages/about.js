import React, { Component } from "react"
import Layout from "./../components/layout"
import styles from "./about.module.css";
import AboutIntro from "./../components/AboutIntro/AboutIntro";

const introText1 = "Hi, my name is Mikkel Klokkerud. I am a web developer and tech blogger from Norway.";
const introText2 = "In short, I create web apps/sites and write about how I do it. Want to learn how to create a web app? Then, stick around here!";
const introText3 = "Reach me at: contact@mikkelcodes.com";
const introTitle = "About";

class AboutPage extends Component {
  state = {}
  render() {
    return (
      <Layout>

        <AboutIntro text1={introText1} text2={introText2} text3={introText3} title={introTitle} />


        <div className={styles.container}>
          
          <div className={styles.intro}>
   
  
          
          <h2>The blog</h2>

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
          
          {/* <h2>Built for me and you</h2>
          <p>
            On the page "Use My Stuff" I publish reusable code blocks
            from my personal library. Feel free to use whatever you want - I
            built it with my email subscribers in mind.
          </p>
          <p>
            Personally, I like creating my own little library of code blocks
            (modules/components) to always have my past work handily available
            to me when working on new projects. This makes me able to work more
            efficiently by not having to rewrite blocks of code I have written
            before. If you don't currently do this, I highly recommend adopting
            this practice for yourself.
          </p> */}

          <h2>My background</h2>
          <ul>
            <li>2014-2017: Bachelor in Business and Entrepreneurship from Norwegian
            Business School.</li>
            <li>2017 - 2020: Worked as a project management consultant
            in Kenya and Madagascar. Managed projects co-financed by Samsung Electronics and The World Bank.</li>
            <li>Built websites as a hobby for around 5 years.</li>
            <li>2020: Full throttle towards becoming a self-taught Full-Stack Developer. How far can I get in one year's time?</li>
          </ul>
          <h2>Web dev preferences</h2>
          <ul>
            <li><strong>JS library:</strong> React and Gatsby</li>
            <li><strong>Styling:</strong> CSS Modules</li>
            <li><strong>Back-end:</strong> Node.js and Express</li>
            <li><strong>Headless CMS:</strong> Contentful or Wordpress</li>
            <li><strong>Design:</strong> Sketch, Adobe Photoshop, Google SketchUp</li>
            <li><strong>SSR:</strong> Netlify</li>
          </ul>
          <br/>
          <p>
            Thanks for checking out my about page!
          </p>
        </div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
