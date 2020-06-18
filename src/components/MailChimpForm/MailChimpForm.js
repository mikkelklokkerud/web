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
        
        <h2 className="text-2xl mb-1 text-center">10 Must-Know Tips For An Instantaneous Page-Load</h2>
        <div className={styles.wrapper}>
          <input
            placeholder="Email address"
            name="email"
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <button className="theme-bg-accent2" type="submit">Get PDF</button>
        </div>
        <p className={styles.thankYou}>{this.state.thankYouMsg}</p>
      </form>
    )
  }
}

export default MailChimpForm
