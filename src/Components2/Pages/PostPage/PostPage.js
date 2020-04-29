import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./PostPage.module.css";

class PostPage extends Component {
	state = {
		post: {},
		isLoaded: false,
	};

	componentDidMount() {
		const that = this;
		fetch(
			`http://localhost:8000/wp-json/wp/v2/posts/${that.props.match.params.id}`
		)
			.then((res) => res.json())
			.then((jsonRes) =>
				that.setState({
					post: jsonRes,
					isLoaded: true,
				})
			)
			.then((err) => console.log(err));
	}

	render() {
		console.log(this.state);
		const { post, isLoaded } = this.state;
		if (isLoaded) {
			return (
				<div className={styles.container}>
					<hr />
					<div className={styles.content}>
						<h1 className={styles.content__title}>{post.title.rendered}</h1>
						<small className={styles.content__date}>Last Updated: {post.modified}</small>
						<div className={styles.content__text}
							dangerouslySetInnerHTML={{ __html: post.content.rendered }}
						></div>
					</div>
					<Link to="/">Go Back</Link>
				</div>
			);
		}
		return <h3>Loading...</h3>;
	}
}

export default PostPage;
