import React from "react";
import { navigate } from "gatsby";
import Recaptcha from "react-google-recaptcha";
import styles from "./NetlifyForm.module.css";

// const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY

// if (typeof RECAPTCHA_KEY === 'undefined') {
//   throw new Error(`
//   Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined!
//   You probably forget to set it in your Netlify build environment variables.
//   Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
//   Note this demo is specifically for Recaptcha v2
//   `)
// }

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default function Index() {
	const [state, setState] = React.useState({});
	// const recaptchaRef = React.createRef()

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		// const recaptchaValue = recaptchaRef.current.getValue()
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				// 'g-recaptcha-response': recaptchaValue,
				...state,
			}),
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch((error) => alert(error));
	};

	return (

			<section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.content}>

              
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className={styles.input}
                      type={'text'}
                      name={'name'}
                      onChange={handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className={styles.field}>
                    <input
                      className={styles.input}
                      type={'email'}
                      name={'email'}
                      onChange={handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className={styles.textarea}
                      name={'message'}
                      onChange={handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                  {/* <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} /> */}
                </div>
                <div className="field">
                  <button className={styles.btn} type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

	);
}



