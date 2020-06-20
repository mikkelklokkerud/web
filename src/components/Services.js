import React from "react"
import img1 from "../images/design.png"
import img2 from "../images/cms.png"
import img3 from "../images/migrate.png"

class Services extends React.Component {
  render() {
    return (
      <a href="https://www.upwork.com/fl/mikkelklokkerud">
        <div className="justify-center bg-black text-white flex pb-20 mt-8 flex-col lg:flex-row items-center">
          <div className="flex flex-col md:flex-row max-w-twelve justify-center xl:mx-8 mb-8">
            <div className="flex flex-col items-center text-center w-64 z-10">
              <img
                src={img3}
                style={{ filter: "invert()" }}
                alt="migration icon"
              />
              <h2 className="text-xl mt-4 mb-3 font-bold">Migration To Gatsby.js</h2>
              <p className="pt-0 mb-0 text-base leading-normal italic">
                Planning to migrate your existing website over to Gatsby.js?
              </p>
              <p className="pt-3 text-base leading-normal">
                Maintaining existing designs, content creation experience and
                SEO are usually integral parts of a website migration project. I
                provide know-how and detail orientation needed for the job.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:-mt-20 items-center text-center w-64 mx-3 xl:mx-8 mb-8">
            <img
              src={img1}
              style={{ filter: "invert()" }}
              alt="customisation icon"
              className=""
            />
            <h2 className="text-xl mt-4 font-bold z-10">
              Headless CMS Customization
            </h2>
            <p className="pt-0 mt-4 mb-3 text-base leading-normal italic">
              Need a clean and simple CMS tailored to your ideal content
              authoring flow?
            </p>
            <p className="pt-3 text-base leading-normal">
              I can help you select the perfect Headless CMS plaform for YOUR
              needs, and customize it to YOUR exact requirements. Using
              APIs/GraphQL, JSX and CSS/TailwindCSS I can also style/format how
              content is presented.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center text-center w-64 xl:mx-8 mb-8">
              <img
                src={img2}
                style={{ filter: "invert()" }}
                alt="optimisation icon"
              />
              <h2 className="text-xl mt-4 font-bold">Gatsby.js Optimisation</h2>
              <p className="pt-0 mt-4 mb-3 text-base leading-normal italic">
                Not seeing incineratingly fast page-load speeds with your
                gatsby.js website?
              </p>
              <p className="pt-3 text-base leading-normal">
                Even though Gatsby.js sites are fast and secure out of the box,
                there are several pitfalls to avoid in order to maintain this
                security and performance. I can help optimise your Gatsby site.
              </p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Services
