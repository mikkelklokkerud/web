import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Services = () => {
  const { design, cms, migrate } = useStaticQuery(
    graphql`
      query {
        design: file(name: { eq: "design" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        cms: file(name: { eq: "cms" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        migrate: file(name: { eq: "migrate" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    `
  )
  return (
    <div className="flex flex-col bg-black pb-5">
      <div className="justify-center bg-black text-white flex pb-20 md:mt-3 flex-col lg:flex-row items-center">
        <div className="flex flex-col md:flex-row max-w-twelve mt-10 md:mt-0 justify-center md:pt-8 xl:mx-8 mb-8">
          <div className="flex flex-col items-center text-center w-64 my-5 z-10">
            <GatsbyImage
              image={design.childImageSharp.gatsbyImageData}
              style={{ filter: "invert()" }}
              alt="migration icon"
              className=""
            />
            <h2 className="text-xl mt-4 mb-3 font-bold">Platform migration</h2>
            <p className="pt-0 mb-1 text-base leading-normal italic">
              Planning to migrate your existing website to Gatsby.js or Next.js?
            </p>
            <p className="pt-3 text-base leading-normal">
              Maintaining existing designs, content creation experience and SEO
              are usually integral parts of a website migration project. I
              provide know-how and detail orientation needed for the job.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:-mt-20 items-center text-center w-64 mx-3 xl:mx-8 mb-10 ">
          <GatsbyImage
            image={cms.childImageSharp.gatsbyImageData}
            style={{ filter: "invert()" }}
            alt="customisation icon"
            className="relative z-10"
          />
          <h2 className="text-xl mt-4 font-bold z-10">
            Headless CMS Customization
          </h2>
          <p className="pt-0 mt-4 mb-1 text-base leading-normal italic">
            Need a clean and simple CMS tailored to your ideal content authoring
            flow?
          </p>
          <p className="pt-3 text-base leading-normal">
            I can help you select the perfect Headless CMS plaform for your
            needs, and customize it to your exact requirements.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center text-center mt-5 w-64 xl:mx-8 mb-8">
            <GatsbyImage
              image={migrate.childImageSharp.gatsbyImageData}
              alt="optimisation icon"
              style={{ filter: "invert()" }}
            />
            <h2 className="text-xl mt-4 font-bold">Lighthouse Optimisation</h2>
            <p className="pt-0 mt-4 mb-1 text-base leading-normal italic">
              Not seeing incineratingly fast page-load speeds with your static
              website?
            </p>
            <p className="pt-3 text-base leading-normal">
              Even though static sites are typically fast and secure out of the
              box, there are several pitfalls to avoid in order for a site to
              remain secure and performant throughout the development process. I
              can help optimise for this.
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://www.upwork.com/fl/mikkelklokkerud"
        className="mx-auto mb-24 -mt-10 md:-mt-20"
      >
        <button className="hover:bg-white rounded py-3 bg-black border-white hover:text-black border border-4 text-white w-48 font-bold">
          Hire me
        </button>
      </a>
    </div>
  )
}

export default Services
