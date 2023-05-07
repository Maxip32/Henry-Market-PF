import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingSection}>
      <div className={styles.landingBox}>
        <h1 className={`${styles.landingTitle} ${styles.welcome}`}>
         
        </h1>
        <Link to="/home">
          <button className={styles.landingButton}>Get in</button>
        </Link>
      </div>
    </div>
  );
}