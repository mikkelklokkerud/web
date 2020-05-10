import React from "react";
import styles from "./AboutIntro.module.css";
import { useStaticQuery, graphql } from "gatsby";

const introText1 =
"Hi, my name is Mikkel Klokkerud. I am a web developer and tech blogger from Norway."
const introText2 =
"In short, I create blazing fast web apps and sites using JamStack and Server-Side Rendering technology. My preferred jam involves Gatsby.js and GraphQL, combined with Netlify for hosting and automation."
const introText3 = "Want an ultra fast and reliable website, coupled with a headless CMS in 2020-style? Then, this technology is likely your best bet. And I can help you out."
const introText4 = "Reach me at: contact@mikkelcodes.com"
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
				<img className={styles.leftcontainer__img1} src={`https:${aboutImageUrl}`} alt="hello" />
				<div className={styles.container__rightcontainer}>
					<div className={styles.rightcontainer__textcontainer}>
						<h1 className={styles.textcontainer__title}><span className="">{introTitle}</span></h1>
						<p className={styles.textcontainer__text}>{introText1}</p>
					</div>
				</div>
			</div>
			<div  className={styles.containerbelow}>
				
					<div className={styles.belowcontainer__textcontainer}>
						<h1 className={styles.textcontainer__title}><span className="accent1">{`#me #jamstack #ssr`}</span></h1>
						<p className={styles.textcontainer__text}>{introText2}</p>
						<p className={styles.textcontainer__text}>{introText3}</p>
						<p className={styles.textcontainer__text}>{introText4}</p>
					</div>
		
				
			</div>
			</div>
			</>
		);
	}




export default AboutIntro;
