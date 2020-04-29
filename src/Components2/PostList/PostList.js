import React, { Component } from "react";
import Post_Big from "./../Post_Big/Post_Big";
import styles from "./PostList.module.css";

class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isLoaded: false,
			featured: [],
		};
		this.getFeatured = this.getFeatured.bind(this);
	}

	componentDidMount() {

		fetch("http://localhost:8000/wp-json/wp/v2/posts")
			.then((res) => {
				return res.json();
			})
			.then((jsonRes) => {
				this.setState({
					posts: jsonRes,
					isLoaded: true,
					featured: jsonRes[0],
				});
			})
			.catch((err) => console.log(err));
	}

	getFeatured() {
		this.props.getFeaturedPost(this.state.featured);
	}

	render() {

		const { posts, isLoaded } = this.state;
		if (isLoaded) {
			return (
				<div onLoad={this.getFeatured} id="blog" className={styles.container}>
					{posts.map((post) => (
						<Post_Big post={post} key={post.id} />
					))}
				</div>
			);
		}
		return <h3>Loading...</h3>;
	}
}

export default PostList;
