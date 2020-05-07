import React, { Component } from 'react';
import styles from './MailChimpForm.module.css';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class MailChimpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            setEmail: false,
            thankYouMsg: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        addToMailchimp(this.state.email)
        .then(data => console.log(data))
        .then( data => this.setState({
            email: "",
            setEmail: true,
            thankYouMsg: data.msg
        }))

        .catch(err => console.log(err))
    }
    
    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    };

    render() {
    
    return (
    <form onSubmit={this.handleSubmit} className={styles.emailListForm}>
      <h2 className={styles.title}>Gatsby Kickstarter Course coming soon!</h2>
      <h3 className={styles.subtitle}>Subscribers will get it for <span className="accent1">FREE</span> - Sign up now!<span className="accent1"></span></h3>
      <div className={styles.wrapper}>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={this.handleEmailChange}
        />
        <button type="submit">Teach Me</button>
      </div>
    <p className={styles.thankYou}>{this.state.thankYouMsg}</p>
    </form>
  );
};
}

export default MailChimpForm;