import React from "react";
import styles from "./AboutIntro.module.css";
import { useStaticQuery, graphql } from "gatsby";

const introText1 =
"Hi, my name is Mikkel Klokkerud. I am a web developer and tech blogger from Norway."
const introText2 =
"In short, I create web apps/sites and write about how I do it. Want to learn how to create a web app? Then, stick around here!"
const introText3 = "Reach me at: contact@mikkelcodes.com"
const introTitle = "About";

const AboutIntro = () => {	

	const data = useStaticQuery(graphql`
	query AboutIntroImageQuery {
	  allContentfulAsset(filter: {title: {eq: "About-Photo-Bw-Gradient"}}) {
		edges {
		  node {
			id
			title
			fluid {
			  src
			}
		  }
		}
	  }
	}
	`)
	const aboutImageUrl = data.allContentfulAsset.edges[0].node.fluid.src
		return (<>
		<div className={styles.parent}>
			<div  className={styles.container}>
				<img className={styles.leftcontainer__img1} src={`http:${aboutImageUrl}`} alt="hello" />
				<div className={styles.container__rightcontainer}>
					<div className={styles.rightcontainer__textcontainer}>
						<h1 className={styles.textcontainer__title}>{introTitle}</h1>
						<p className={styles.textcontainer__text}>{introText1}</p>
					</div>
				</div>
			</div>
			<div  className={styles.containerbelow}>
				
					<div className={styles.belowcontainer__textcontainer}>
						<h1 className={styles.textcontainer__title}>{`Sites'n Apps`}</h1>
						<p className={styles.textcontainer__text}>{introText2}</p>
						<p className={styles.textcontainer__text}>{introText3}</p>
					</div>
		
				
			</div>
			</div>
			</>
		);
	}




export default AboutIntro;
