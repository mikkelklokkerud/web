import React, { Component } from "react"
import styles from "./MailChimpForm.module.css"
import addToMailchimp from "gatsby-plugin-mailchimp"

class MailChimpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      setEmail: false,
      msg: " Sign Up Now!",
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
            msg: " Subscribed. THANKS!",
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
      <form onSubmit={this.handleSubmit} className={styles.emailListForm}>
        <h3 className="text-xl max-w-xl leading-relaxed">
          Course coming soon:
        </h3>
        <div className="text-red-300 font-bold text-3xl mb-8">
          KICKSTART YOUR CAREER CHANGE!
        </div>
        <h2 className="text-xl mb-10 text-center max-w-xl leading-relaxed">
          I learnt <span className="font-bold">how to code</span> from scratch
          and verifiably <span className="font-bold">earnt over $25'000</span>{" "}
          from freelancing as a React web app developer all{" "}
          <span className="font-bold underline">
            within the first 12 months!
          </span>{" "}
        </h2>
        <h2 className="text-lg text-center max-w-xl leading-relaxed">
          And, I believe you can do the same.
        </h2>
        <h2 className="text-lg mb-10 text-center leading-relaxed">
          Sign up and I'll send you a video with my step-by-step approach.
        </h2>
        <div className={styles.wrapper}>
          <input
            placeholder="Email address"
            name="email"
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <button className="theme-bg-accent2" type="submit">
            Sign Up
          </button>
        </div>
        <p className={styles.thankYou}>{this.state.thankYouMsg}</p>
        <p className="italic">
          (Currently in the making but you'll get it as soon as it's and ready!)
        </p>
      </form>
    )
  }
}

export default MailChimpForm
