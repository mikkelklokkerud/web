import React, { Component } from 'react';
import styles from "./Header_Simple.module.css";
import Link  from "gatsby-link";
import { window } from "browser-monads";

// class Header_Simple extends Component {
//     render() { 
//         return ( 
//             <div className={styles.container}>
//                 <div className={styles.logocontainer}>
                    
//                 </div>
//                 <nav className={styles.nav}>
//                     <ul>
//                         <Link to={"/"}><p className={styles.link}>ARCHIVE</p></Link>
//                         <Link to={"/usemystuff"}><p className={styles.link}>USE MY STUFF</p></Link>
//                         <Link to={"/tutorials"}><p className={styles.link}>TUTORIALS</p></Link>
//                         <Link to={"/about"}><p className={styles.link}>ABOUT</p></Link>
//                     </ul>
//                 </nav>
//             </div>
//          );
//     }
// }
 
// export default Header_Simple;

class Header_Simple extends Component {
    render() { 
        return ( 
            <div className={styles.container}>
                <div className={styles.logocontainer}>
                    
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <Link to={"/"}><p className={window.location.href.length < 30 ? styles.link__active : styles.link__inactive}>ARCHIVE</p></Link>
                        <Link to={"/usemystuff"}><p className={window.location.href.indexOf("usemystuff") > 0 ? styles.link__active : styles.link__inactive}>USE MY STUFF</p></Link>
                        <Link to={"/tutorials"}><p className={window.location.href.indexOf("tutorials") > 0 ? styles.link__active : styles.link__inactive}>TUTORIALS</p></Link>
                        <Link to={"/about"}><p className={window.location.href.indexOf("about") > 0 ? styles.link__active : styles.link__inactive}>ABOUT</p></Link>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Header_Simple;