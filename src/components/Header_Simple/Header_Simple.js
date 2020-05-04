import React, { Component } from 'react';
import styles from "./Header_Simple.module.css";
import Link  from "gatsby-link";
import { window } from "browser-monads";
import logo from "./MikkelCodes.png";
import Headroom from "react-headroom";
import ResponsiveNav from "./../ResponsiveNav/ResponsiveNav";




class Header_Simple extends Component {
    render() { 
        return ( <>
            {/* <Headroom> */}
            <ResponsiveNav
                navLinks={ navLinks }
                            />

            <div className={styles.mainNav}>
            <div className={styles.container}>
                <div className={styles.subcontainer}>
                    <div className={styles.logocontainer}>
                        <img className={styles.logo} src={logo} />
                        <p className={styles.tagline}>Front-End Wizard</p>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <Link to={"/"}><p className={window.location.href.length < 30 ? styles.link__active : styles.link__inactive}>ARCHIVE</p></Link>
                            <Link to={"/webapps"}><p className={window.location.href.indexOf("webapps") > 0 ? styles.link__active : styles.link__inactive}>WEB APPS</p></Link>
                            <Link to={"/tutorials"}><p className={window.location.href.indexOf("tutorials") > 0 ? styles.link__active : styles.link__inactive}>TUTORIALS</p></Link>
                            <Link to={"/usemystuff"}><p className={window.location.href.indexOf("usemystuff") > 0 ? styles.link__active : styles.link__inactive}>USE MY STUFF</p></Link>
                            <Link to={"/about"}><p className={window.location.href.indexOf("about") > 0 ? styles.link__active : styles.link__inactive}>ABOUT</p></Link>
                        </ul>
                        <div className={styles.burgerMenu}>
                            
                        </div>
                    </nav>
                </div>

            </div> 
            </div>
            {/* </Headroom> */}
            </>
         );
    }
}

const navLinks = [
    {
        text: "Archive",
        path: "/",
        icon: "ion-ios-megaphone"
    },
    {
        text: "Web Apps",
        path: "/webapps",
        icon: "ion-ios-hammer"
    },
    {
        text: "Tutorials",
        path: "/tutorials",
        icon: "ion-ios-paper"
    },
    {
        text: "Use My Stuff",
        path: "/usemystuff",
        icon: "ion-ios-briefcase"
    },
    {
        text: "About",
        path: "/about",
        icon: "ion-ios-mail"
    },
   
]

export default Header_Simple;