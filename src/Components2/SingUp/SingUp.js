import React from "react";
import styles from "./SignUp.module.css";

class SignUp extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.container__textcontainer}>
					<h3 className={styles.textcontainer__title}>{this.props.title}</h3>
				</div>
				<input
					type="text"
					placeholder="Your email address"
					className={styles.container__field}
				/>
				<button className={styles.container__btn}>{this.props.btnText}</button>
			</div>
		);
	}
}

export default SignUp;
