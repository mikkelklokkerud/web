import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPage from "./../Pages/PostPage/PostPage";
import AboutPage from "./../Pages/AboutPage/AboutPage";
import ContactPage from "./../Pages/ContactPage/ContactPage";
import ArchivePage from "./../Pages/ArchivePage/ArchivePage";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Route exact path="/" component={ArchivePage} />
					<Route exact path="/about/" component={AboutPage} />
					<Route exact path="/contact/" component={ContactPage} />
					<Route exact path="/post/:id" component={PostPage} />
				</Fragment>
			</Router>
		);
	}
}

export default App;
