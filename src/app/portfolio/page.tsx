import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => (
  <div className={styles.container}>
    <h1 className={styles.selectTitle}>Choose a Gallery</h1>
    <div className={styles.items}>
      <Link href="/portfolio/illustrations" className={styles.item}>
        <span className={styles.titleOne}>Illustrations</span>
      </Link>
      <Link href="/portfolio/websites" className={styles.item}>
        <span className={styles.titleTwo}>Websites</span>
      </Link>
      <Link href="/portfolio/apps" className={styles.item}>
        <span className={styles.titleThree}>Apps</span>
      </Link>
    </div>
  </div>
);

export default Portfolio;
