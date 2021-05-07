import React, { Component } from "react"
import styles from "./MailChimpForm.module.css"
import addToMailchimp from "gatsby-plugin-mailchimp"

class MailChimpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      setEmail: false,
      msg: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.setEmail) {
      addToMailchimp(this.state.email)
        .then(
          this.setState({
            email: "",
            setEmail: true,
            msg: true,
          })
        )

        .catch(err => console.log(err))
    }
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    return (
      <div className="bg-black py-20">
        <form onSubmit={this.handleSubmit} className={styles.emailListForm}>
          <h3 className="text-xl max-w-xl leading-relaxed">Coming soon:</h3>
          <div className="text-red-300 font-bold text-3xl">
            KICKSTART YOUR CAREER CHANGE!
          </div>
          <div className="border-2 border-white p-6 my-8 bg-gray-900 rounded-lg">
            <div className="text-xl font-bold underline">
              In 12 months I was able to:
            </div>
            <ul className="pt-3 text-left">
              <li>
                Become "good enough" in{" "}
                <span className="font-bold text-green-300">
                  HTML, CSS and JS
                </span>{" "}
                after 3 months
              </li>
              <li>
                Become "good enough" in{" "}
                <span className="font-bold text-green-300">
                  React and Headless CMS
                </span>{" "}
                after 2 months
              </li>
              <li>
                Become a web developer{" "}
                <span className="font-bold text-green-300">WITHOUT </span>
                spending thousands on a bootcamp
              </li>
              <li>
                Earn{" "}
                <span className="font-bold text-green-300">over $28'000</span>{" "}
                in my first 7 months of freelancing
              </li>
              <li>
                Create a{" "}
                <span className="font-bold text-green-300">
                  location independent
                </span>{" "}
                job for myself
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg text-center max-w-xl leading-relaxed font-bold text-red-300">
              And, I believe you can do the same.
            </h2>
            <h2 className="text-lg mb-2 text-center leading-relaxed">
              Sign up and I'll send you a video with my detailed approach.
            </h2>
          </div>
          <div className={styles.wrapper}>
            <input
              placeholder="Email address"
              name="email"
              type="text"
              onChange={this.handleEmailChange}
              value={this.state.email}
              className="rounded-lg"
            />
            <button
              className="theme-bg-accent2 ml-4 hover:bg-lightgreen hover:text-black rounded-lg"
              type="submit"
            >
              Continue
            </button>
          </div>
          <p className="italic -mt-2">
            (Currently in the making but you'll get it as soon as it's ready!)
          </p>
          <p
            className={`transform font-bold ${
              this.state.msg ? "opacity-100 translate-y-5" : "opacity-0"
            } transition duration-300`}
          >
            Subscribed, thanks. Check the email for details.
          </p>
        </form>
      </div>
    )
  }
}

export default MailChimpForm
