import React, { Component } from "react"
import Layout from "./../components/layout"
import AboutIntro from "./../components/AboutIntro/AboutIntro"
import NetlifyForm from "./../components/NetlifyForm"

const AboutPage = () => {

  return (
    <Layout>
      <AboutIntro
      />
      <div className="">
        <div className="w-11/12 md:max-w-720px mx-auto py-10">
          <h2 className="text-2xl mb-2">The blog</h2>
          <p className="mb-3">
            On this corner of the web I write about my journey as a web
            consultant and entrepreneur. This is also where share tools, tips
            and know-how as gathered along the way!
          </p>
          <h2 className="text-2xl mb-2 mt-5">My background</h2>
          <ul className="my-3">
            <li><strong className="font-bold">2013:</strong> Started making Wordpress websites as a side hustle.</li>
            <li>
              <strong className="font-bold">2014-2017:</strong> Bachelor in Business and Entrepreneurship from
              Norwegian Business School.
            </li>
            <li>
              <strong className="font-bold">2017 - 2020:</strong> Worked as a project management consultant in Kenya
              and Madagascar. Managed projects co-financed by Samsung
              Electronics and The World Bank.
            </li>
            <li>
              <strong className="font-bold">2020:</strong> Web development goes from being a side hustle to my main
              hustle! JAMstack for the win!
            </li>
          </ul>
          <h2 className="text-2xl mb-2 mt-5">Web dev preferences</h2>
          <ul>
            <li>
              <strong className="font-bold">JS library:</strong> React with Gatsby
            </li>
            <li>
              <strong className="font-bold">Styling:</strong> TailwindCSS or CSS Modules
            </li>
            <li>
              <strong className="font-bold">Back-end:</strong> Node.js with Express
            </li>
            <li>
              <strong className="font-bold">Headless CMS:</strong> Contentful or Sanity
            </li>
            <li>
              <strong className="font-bold">Wireframing:</strong> Sketch
            </li>
            <li>
              <strong className="font-bold">Hosting:</strong> Netlify
            </li>
          </ul>
          <br id="contact" />
        </div>
      </div>
      <NetlifyForm  />
      <div>
        </div>
    </Layout>
  )
}

export default AboutPage
