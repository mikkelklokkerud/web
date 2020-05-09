import React, { Component } from 'react';
import styles from "./Header_Simple.module.css";
import Link  from "gatsby-link";
import { window } from "browser-monads";
import logo from "./MikkelCodes.png";
import ResponsiveNav from "./../ResponsiveNav/ResponsiveNav";


class Header_Simple extends Component {

    constructor (props) {
        super(props);
        this.state = {
            pageIsAbout: false,
            mainNavBg: "white",
            mainNavColor: "black",
            mainNavPos: "",
            displayTagline: "block"
        }
    }

    componentWillMount() {

        if (!this.state.pageIsAbout && window.location.href.indexOf("about") > 0) {
            this.setState({
                pageIsAbout: true,
                mainNavBg: "black",
                mainNavColor: "white",
                displayTagline: "none"
            })
        } else if (this.state.pageIsAbout && window.location.href.indexOf("about") < 1) {
            this.setState({
                pageIsAbout: false,
                mainNavBg: "white",
                mainNavColor: "black",
                displayTagline: "none"

            })
        }
    }

    render() { 

        return ( <>
            
            <ResponsiveNav
                navLinks={ navLinks }
                            />
            <div className={styles.mainNav}>
            <div className={styles.container}>
                <div className={styles.subcontainer}>
                    <div className={styles.logocontainer}>
                        <img className={styles.logo} src={logo} />
                        <p className={styles.tagline} style={{ display: "none" }} ><strong>Mikkel Klokkerud // Gatsby & GraphQL</strong></p>
                    </div>
                    <nav className={styles.nav} style={{ backgroundColor: this.state.mainNavBg, color: this.state.mainNavColor }} >
                        <ul className={styles.list}>
                            <Link to={"/"}><p style={{ color: this.state.mainNavColor }} className={window.location.href.length < 30 ? styles.link__active : styles.link__inactive}>ARCHIVE</p></Link>
                            {/* <Link to={"/webapps"}><p style={{ color: this.state.mainNavColor }} className={window.location.href.indexOf("webapps") > 0 ? styles.link__active : styles.link__inactive}>WEB APPS</p></Link> */}
                            {/* <Link to={"/tutorials"}><p style={{ color: this.state.mainNavColor }} className={window.location.href.indexOf("tutorials") > 0 ? styles.link__active : styles.link__inactive}>TUTORIALS</p></Link> */}
                            <Link to={"/about"}><p  style={{ color: this.state.mainNavColor, borderBottom: "1px solid white" }} className={window.location.href.indexOf("about") > 0 ? styles.link__active : styles.link__inactive}>ABOUT</p></Link>
                        </ul>
                        <div className={styles.burgerMenu}>
                    </div>
                    </nav>
                </div>

            </div> 
            </div>
            </>
         );
    }
}

const navLinks = [
    {
        text: "Archive",
        path: "/",
        icon: "ion-ios-megaphone",
        id: 1
    },
    {
        text: "Web Apps",
        path: "/webapps",
        icon: "ion-ios-hammer",
        id: 2
    },
    {
        text: "Tutorials",
        path: "/tutorials",
        icon: "ion-ios-paper",
        id: 3
    },
    {
        text: "About",
        path: "/about",
        icon: "ion-ios-mail",
        id: 4
    },
   
]

export default Header_Simple;