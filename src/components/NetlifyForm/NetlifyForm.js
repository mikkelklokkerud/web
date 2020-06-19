import React from "react"
import styles from "./NetlifyForm.module.css"
import ReCAPTCHA from "react-google-recaptcha";

const NetlifyForm = () => (<>
  
  <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          className="mb-0"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div
            className="flex justify-center p-2 border-t-2 border-orange"
            id="contact"
            style={{ background: `black` }}
          >
            <div className="max-w-twelve my-10 w-5/6 md:w-4/6 flex py-12 flex-col">
              <h2 className="text-center text-white text-3xl -mt-3">Reach out.</h2>
              <p className="text-center text-white mb-6 text-lg">I normally respond within 24hrs.</p>
              <div className="flex flex-col md:flex-row min-w-full justify-center">
                <div
                  className="px-1 md:max-w-349px"
                  style={{
                    width: "100%",
                    paddingRight: "5px",

                  }}
                >
                  <input
                    className="mb-3 rounded w-full"
                    style={{ padding: "6px 16px", minHeight: "47px" }}
                    placeholder="Name*"
                    type="text"
                    name="name"
                  ></input>
                </div>
                <div
                  className="px-1 md:max-w-349px"
                  style={{
                    width: "100%",
                    paddingLeft: "5px",

                  }}
                >
                  <input
                    className="mb-3 rounded w-full"
                    style={{ padding: "6px 16px", minHeight: "47px" }}
                    placeholder="Email*"
                    type="email"
                    name="email"
                  ></input>
                </div>
              </div>
              <div className="flex min-w-full justify-center">
                <div
                  className="px-1"
                  style={{
                    maxWidth: "699px",
                    width: "100%",
                    paddingRight: "5px",
                  }}
                >
                  <textarea
                    className="mb-3 rounded w-full min-h-25"
                    rows="4"
                    style={{ padding: "6px 16px" }}
                    placeholder="Message*"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="flex min-w-full justify-center">
                <div
                  className="px-1"
                  style={{
                    maxWidth: "701px",
                    width: "100%",
                    paddingRight: "5px",
                    marginTop: "-6px",
                  }}
                >
                  {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}
                  <button
                    className={` bg-orange text-white font-bold rounded-md w-full border-2 border-white transition duration-300 ease-in-out transform hover:scale-110 hover:bg-lightgreen leading-none  `}
                    style={{ padding: "15px 30px" }}
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
 </>
        
  )


export default NetlifyForm