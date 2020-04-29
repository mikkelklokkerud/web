import React, { Component } from "react";
import styles from "./ContactPage.module.css";
import { Link } from "react-router-dom";
import Header_Simple from "./../../Header_Simple/Header_Simple";

class ContactPage extends Component {
	render() {
		return (
        <>
            <Header_Simple />
            <Link to={"/"}>Go back</Link>
            <div>Contact Page</div>
        </>
        )
	}
}

export default ContactPage;
