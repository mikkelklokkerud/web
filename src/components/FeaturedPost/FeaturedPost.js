import React, { Component } from "react";
import styles from "./FeaturedPost.module.css";
import Post from "./../Post/Post";
import { Link } from "react-router-dom";

class FeaturedPost extends Component {
	render() {
		const { modified, date, excerpt, title, imgurl, id } = this.props;
		if (modified) {
			return (
                    <Link to={`/post/${id}`}>
				<div className={styles.container}>
					<div className={styles.subcontainer}>
					<img className={styles.img} src={imgurl} />
					<div className={styles.content}>
						<h4 className={styles.subtitle}>Featured Post:</h4>
						<h2 className={styles.title}>{title}</h2>
						<small className={styles.date}>Published: {date}</small>
						<div
							className={styles.excerpt}
							dangerouslySetInnerHTML={{ __html: excerpt }}
						/>
					
					</div>
					</div>
				</div>
                    </Link>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}

export default FeaturedPost;
