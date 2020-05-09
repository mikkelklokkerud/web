import React, { Component } from "react"
import styles from "./Divider_Colors.module.css"

const Divider_Colors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__block}>
        <div className="theme-bg-main"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-accent1"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-main"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-accent2"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-main"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-accent1"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-main"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-accent2"></div>
      </div>
      <div className={styles.container__block}>
        <div className="theme-bg-main"></div>
      </div>
    </div>
  )
}

export default Divider_Colors
