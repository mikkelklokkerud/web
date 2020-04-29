import React, { Component } from "react";
import styles from "./Reasons_Three.module.css";

class Reasons_Three extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.radius}>
				<div className={styles.content}>
					<h1 className={styles.container__title}>{this.props.title}</h1>
					<h3 className={styles.content__subtitle}>{this.props.subtitle}</h3>
					<div className={styles.container__reasons}>
						<div className={styles.reasons__reason}>
							<h3 className={styles.reason__title}>{this.props.heading1}</h3>
							<p className={styles.reason__text}>{this.props.text1}</p>
						</div>
						<div className={styles.reasons__reason}>
							<h3 className={styles.reason__title}>{this.props.heading2}</h3>
							<p className={styles.reason__text}>{this.props.text2}</p>
						</div>
						<div className={styles.reasons__reason}>
							<h3 className={styles.reason__title}>{this.props.heading3}</h3>
							<p className={styles.reason__text}>{this.props.text3}</p>
						</div>
					</div>
				</div>
				</div>
			</div>
		);
	}
}

export default Reasons_Three;
