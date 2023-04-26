import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from "../Image/logo.png"
export default function LandingPage() {
  return (
    <div className={styles.landingSection}>
      <div className={styles.landingBox}>
        <h1 className={`${styles.landingTitle} ${styles.welcome}`}>
         <img src={logo} alt="henry" />
        </h1>
        <Link to="/home">
          <button className={styles.landingButton}>Get In</button>
        </Link>
      </div>
    </div>
  );
}