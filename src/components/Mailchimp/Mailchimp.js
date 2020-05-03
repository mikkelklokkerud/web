import React from "react";
import styles from "./Mailchimp.module.css";
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class MyGatsbyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mailSubmit: {}

        }
    }
    // Since `addToMailchimp` returns a promise, you
    // can handle the response in two different ways:
  
    // Note that you need to send an email & optionally, listFields
    // these values can be pulled from React state, form fields,
    // or wherever.  (Personally, I recommend storing in state).
  
    // 1. via `.then`
    _handleSubmit = e => {
      e.preventDefault();
      addToMailchimp(email, {}) 
      .then(data => {
        console.log(data)
        this.setState({
            mailSubmit: data
        })
      })
      .catch((err) => {
          console.log(err)
      })
    }
  
    render () {
      return (
        <form onSubmit={this._handleSubmit(email, {listFields})} className={styles.form} >
          
        </form>
      )
    }
  }