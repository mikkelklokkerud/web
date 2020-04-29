import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import "./Post.css";

class Post extends Component {
	state = {
		imgUrl: "",
		isLoaded: false,
	};
	static propTypes = {
		post: PropTypes.object.isRequired,
	};

	componentDidMount() {
		const { featured_media } = this.props.post;
		const that = this;
		fetch(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`)
			.then((res) => res.json())
			.then((jsonRes) => jsonRes.media_details.sizes.full.source_url)
			.then((url) =>
				that.setState({
					imgUrl: url,
					isLoaded: true,
				})
			);
	}
	render() {
		const { id, modified, title, excerpt } = this.props.post;
		const shorterExcerpt = excerpt.rendered.split(" ").slice(0, 30).join(" ").concat(" ...");
		const { imgUrl, isLoaded } = this.state;
		if (isLoaded) {
			return (
				
				<div className={styles.container}>
					<Link to={`/post/${id}`}>
					<img
						className={styles.container__img}
						src={imgUrl}
						style={{ width: "100%" }}
						alt={title.rendered}
					/>
					<div className={styles.container__content}>
						<div className={styles.content__texts}>
						<h2 className={styles.texts__title}>{title.rendered}</h2>
						<small className={styles.texts__date}>Last Updated: {modified}</small>
						<div className={styles.texts__text} style={{   }} dangerouslySetInnerHTML={{ __html: shorterExcerpt }} />
					
						</div>
					</div>
					</Link>
				</div>
			);
		}
		return null;
	}
}

export default Post;
