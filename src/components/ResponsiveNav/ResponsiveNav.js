import React, { useState } from 'react';
import styles from "./ResponsiveNav.module.css";
import Link from "gatsby-link";
import logo from "./MikkelCodes.png";


function ResponsiveNav ({ navLinks, background, hoverBackground, linkColor}) {
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    const [ navOpen, setNavOpen ] = useState(false)

    console.log(navOpen)
    return( <> 
                <div className={styles.imgcontainer}>
                    <img className={styles.img} src={logo} href="/" />
                </div>
        <nav
            class={styles.responsiveToolbar}
            style={{ background }}
        >
            <div className={styles[!navOpen ? "burgerOverlay" : ""]} onClick={ () => setNavOpen(!navOpen) } ><ul 
                style={{ background }}
                className={styles[navOpen ? "active" : ""]} >
                {navLinks.map( (link, index) => 
                <li
                // onClick={ () => setNavOpen(!navOpen) } 
                    onMouseEnter={ () => setHoverIndex(index) }
                    onMouseLeave={ () => setHoverIndex(-1) }
                    style={{ background: hoverIndex === index ? hoverBackground || "#999" : "" }}
                >
                    <Link 
                        to={link.path} 
                        style={{ color: linkColor }}
                    >
                        {link.text}
                        <i className={link.icon} />
                    </Link>
                </li> )}
                {/* <div className={styles.closeContainer}> */}
                <li className={styles.close}
                >CLOSE
                </li>
                {/* </div> */}
                
            </ul></div>
        </nav>
   </>)
}

export default ResponsiveNav;

// #ffc107 Peach Color