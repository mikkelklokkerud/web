import React from "react";
import styles from "./AboutIntro.module.css";
import image1 from "../../images/about2r.jpg";
import image2 from "../../images/about1r.jpg";

class AboutIntro extends React.Component {
	render() {
		return (<>
		<div className={styles.parent}>
			<div  className={styles.container}>
				<img className={styles.leftcontainer__img1} src={image1} alt="hello" />
				<div className={styles.container__rightcontainer}>
					<div className={styles.rightcontainer__textcontainer}>
						<h1 className={styles.textcontainer__title}>{this.props.title}</h1>
						<p className={styles.textcontainer__text}>{this.props.text1}</p>
						{/* <p className={styles.textcontainer__text}>{this.props.text2}</p> */}
					</div>
				</div>
			</div>
			<div  className={styles.containerbelow}>
				
					<div className={styles.belowcontainer__textcontainer}>
						<h1 className={styles.textcontainer__title}>{`Sites'n Apps`}</h1>
						<p className={styles.textcontainer__text}>{this.props.text2}</p>
						<p className={styles.textcontainer__text}>{this.props.text3}</p>
					</div>
		
				
			</div>
			</div>
			</>
		);
	}
}

export default AboutIntro;
