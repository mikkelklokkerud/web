import React from "react"
import img1 from "../images/design.png"
import img2 from "../images/cms.png"
import img3 from "../images/migrate.png"

class Services extends React.Component {
  render() {
    return (
      <div className="justify-center flex pb-20">
        <div className="flex flex-col md:flex-row max-w-twelve justify-center">
          <div className="flex flex-col items-center text-center w-64 mx-8">
            <img src={img3} />
            <h2 className="text-xl mt-3 font-bold">Migration To Gatsby.js</h2>
            <div className="border border-black border-1 w-20 mb-5 mt-2"></div>
            <p className="pt-0 mb-0 text-base leading-normal italic">
              Planning to migrate your existing website over to Gatsby.js?
            </p>
            <p className="pt-3 text-base leading-normal">
              Maintaining existing designs, content creation flow/experience and
              SEO are often integral parts of a website migration project. I
              provide know-how and detail orientation needed for the job.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-64 mx-8">
          <img src={img1} />
          <h2 className="text-xl mt-3 font-bold">Headless CMS Customization</h2>
          <div className="border border-black border-1 w-20 mb-5 mt-2"></div>
          <p className="pt-0 mb-0 text-base leading-normal italic">
            Need a clean and simple CMS tailored to your ideal content creation
            flow?
          </p>
          <p className="pt-3 text-base leading-normal">
            I can help you select the perfect Headless CMS plaform for YOUR
            needs, customize it to YOUR exact requirements and connect everything with CI/CD and web hooks.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center text-center w-64 mx-8">
            <img src={img2} />
            <h2 className="text-xl mt-3 font-bold">Gatsby.js Optimisation</h2>
            <div className="border border-black border-1 w-20 mb-5 mt-2"></div>
            <p className="pt-0 mb-0 text-base leading-normal italic">
              Not seeing incineratingly fast page-load speeds with your
              gatsby.js website?
            </p>
            <p className="pt-3 text-base leading-normal">
              Even if Gatsby.js sites are fast and secure out of the box, there are important pitfalls
              to avoid in order to maintain cybersecurity as well as blazingly fast page-loads. I can optimise your Gatsby site.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
