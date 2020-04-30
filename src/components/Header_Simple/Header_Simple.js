import React, { Component } from 'react';
import styles from "./Header_Simple.module.css";
import Link  from "gatsby-link";

class Header_Simple extends Component {
    render() { 
        return ( 
            <div className={styles.container}>
                <div className={styles.logocontainer}>
                    
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <Link to={"/"}><p className={styles.link}>ARCHIVE</p></Link>
                        <Link to={"/usemystuff"}><p className={styles.link}>USE MY STUFF</p></Link>
                        <Link to={"/tutorials"}><p className={styles.link}>TUTORIALS</p></Link>
                        <Link to={"/about"}><p className={styles.link}>ABOUT</p></Link>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Header_Simple;