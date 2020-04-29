import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Post_Big.module.css";
import { Link } from "react-router-dom";

class Post_Big extends Component {
	state = {
		imgurl: "",
		isLoaded: false,
		id: "",
		title: "",
		excerpt: "",
		modified: "",
		date: "",
	};
	static propTypes = {
		post: PropTypes.object.isRequired,
	};

	componentDidMount() {
		const {
			featured_media,
			id,
			title,
			excerpt,
			modified,
			date,
		} = this.props.post;
		const that = this;
		fetch(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`)
			.then((res) => res.json())
			.then((jsonRes) => jsonRes.media_details.sizes.full.source_url)
			.then((url) =>
				that.setState({
					imgurl: url,
					isLoaded: true,
					id: id,
					title: title,
					excerpt: excerpt.rendered,
					modified: modified,
					date: date.slice(0, 10),
				})
			);
	}
	render() {
		const { id, modified, title, excerpt, date, imgurl, isLoaded } = this.state;
		// const shorterExcerpt = excerpt.rendered.split(" ").slice(0, 30).join(" ").concat(" ...");
		if (isLoaded) {
			return (
				<Link to={`/post/${id}`}>
					<div className={styles.container}>
						<div className={styles.subcontainer}>
							<img className={styles.img} src={imgurl} alt={title.rendered} />

							<div className={styles.content}>
								<h1 className={styles.title}>{title.rendered}</h1>
								<small className={styles.date}>Published: {date}</small>
								<small className={styles.date}>Written by: Mikkel Klokkerud</small>
								<div
									className={styles.excerpt}
									dangerouslySetInnerHTML={{ __html: excerpt }}
								/>
							</div>
						</div>
					</div>
				</Link>
			);
		}
		return null;
	}
}

export default Post_Big;