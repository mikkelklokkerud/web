import React, { Component } from 'react';
import styles from "./Header_Simple.module.css";
import  Link  from "gatsby-link";

class Header_Simple extends Component {
    render() { 
        return ( 
            <div className={styles.container}>
                <div className={styles.logocontainer}>
                    
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <Link to={"/"}><a className={styles.link}>ARCHIVE</a></Link>
                        <Link to={"/about/"}><a className={styles.link}>ABOUT</a></Link>
                        <Link to={"/contact/"}><a className={styles.link}>CONTACT</a></Link>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Header_Simple;