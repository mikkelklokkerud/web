import React, { Component } from 'react';
import styles from "./Header_Simple.module.css";
import Link  from "gatsby-link";
import { window } from "browser-monads";
import logo from "./MikkelCodes.png";
import Headroom from "react-headroom";

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
            <Headroom>
            <div className={styles.container}>
                <div className={styles.logocontainer}>
                    <img className={styles.logo} src={logo} />
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <div className={styles.ul__first}>
                        <Link to={"/"}><p className={window.location.href.length < 30 ? styles.link__active : styles.link__inactive}>ARCHIVE</p></Link>
                        <Link to={"/webapps"}><p className={window.location.href.indexOf("webapps") > 0 ? styles.link__active : styles.link__inactive}>WEB APPS</p></Link>
                        </div>
                        <div className={styles.ul__second}>
                        <Link to={"/tutorials"}><p className={window.location.href.indexOf("tutorials") > 0 ? styles.link__active : styles.link__inactive}>TUTORIALS</p></Link>
                        <Link to={"/usemystuff"}><p className={window.location.href.indexOf("usemystuff") > 0 ? styles.link__active : styles.link__inactive}>USE MY STUFF</p></Link>
                        </div>
                    </ul>
                </nav>
            </div>
            </Headroom>
         );
    }
}
 
export default Header_Simple;