import React, { Component } from 'react';
import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";
import Header_Simple from "./../../Header_Simple/Header_Simple";


class AboutPage extends Component {
    render() { 
        return ( 
            <>
                <Header_Simple />
                <Link to={"/"}>Go back</Link>
                <div>About Page</div>
            </>
         );
    }
}
 
export default AboutPage;