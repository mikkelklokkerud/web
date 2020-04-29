import React, { Component } from "react";
import PostList from "../../PostList/PostList";
import Hero_Split from "../../Hero_Split/Hero_Split";
import SignUp from "../../SingUp/SingUp";
import Reasons__Three from "../../Reasons/Reasons_Three";
import FeaturedPost from "./../../FeaturedPost/FeaturedPost";
import Hero_Featured from "./../../Hero_featured/Hero_Featured";
import Header_Simple from "./../../Header_Simple/Header_Simple";

const hero_title = "Mikkel Klokkerud";
const hero_subtitle = "Web Consultant/Blogger";
const content =
	"I specialise in creating websites integrated with Wordpress CMS. Read my blog - I will show you how.";
const btnText1 = "Blog";
const btnText2 = "Projects";

const subscribeBtn = "Subscribe";
const signupTitle = `Wordpress Developer Kickstarter Course! Subscribe and get it for FREE now!`;

const reasons_three_title = "Feeling limited by Wordpress?";
const reasons_three_subtitle = "I can help you.";
const reasons_three_heading1 = "Custom theme";
const reasons_three_text1 =
	"I can help you customise your wordpress theme past limitations set by theme creators, or create it from scratch.";
const reasons_three_heading2 = "From Scratch";
const reasons_three_text2 =
	"Starting from scratch, I can develop a website exactly the way you want it. And you can keep the wordpress blogging system if desired.";
const reasons_three_heading3 = "Developer Course";
const reasons_three_text3 =
	"I can teach the coding skills you need to become a flexible wordpress developer.";

class ArchivePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			excerpt: [],
			date: [],
			modified: [],
			featured_media: [],
			title: "",
			isLoaded: false,
			imgurl: "",
			id: "",
		};
		this.getFeaturedPost = this.getFeaturedPost.bind(this);
	}

	getFeaturedPost(post) {
		this.setState({
			excerpt: post.excerpt.rendered,
			date: post.date.slice(0, 10),
			modified: post.modified,
			title: post.title.rendered,
			featured_media: post.featured_media,
			id: post.id,
			isLoaded: true,
		});
	}

	componentDidUpdate() {
		const { featured_media } = this.state;
		const that = this;
		fetch(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`)
			.then((res) => res.json())
			.then((jsonRes) => jsonRes.media_details.sizes.full.source_url)
			.then((imgurl) =>
				that.setState({
					url: imgurl,
				})
			);
	}

	render() {
		const {
			date,
			modified,
			excerpt,
			featured_media,
			title,
			url,
			id,
		} = this.state;
		return (
			<>
				<Header_Simple />

				<Hero_Featured
					id={id}
					featured_media={featured_media}
					title={title}
					excerpt={excerpt}
					date={date}
					modified={modified}
					imgurl={url}
				/>


				<PostList getFeaturedPost={this.getFeaturedPost} />
				
			</>
		);
	}
}

export default ArchivePage;
