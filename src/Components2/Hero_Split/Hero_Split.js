import React from "react";
import styles from "./Hero_Split.module.css";

class Hero_Split extends React.Component {
	render() {
		return (
			<div id="explore" className={styles.container}>
				<div className={styles.container__rightcontainer}>
					<div className={styles.rightcontainer__textcontainer}>
						<h1 className={styles.textcontainer__title}>{this.props.title}</h1>
						<p className={styles.textcontainer__subtitle}>
							{this.props.subtitle}
						</p>

						<p className={styles.textcontainer__text}>{this.props.text}</p>

						<div className={styles.right__btncontainer}>
							<button className={styles.btn}>{this.props.btnText1}</button>
							<button className={styles.btn}>{this.props.btnText2}</button>
						</div>
					</div>
				</div>
				<div className={styles.imgcontainer}>
				<div className={styles.leftcontainer__img} />
				</div>
			</div>
		);
	}
}

export default Hero_Split;
