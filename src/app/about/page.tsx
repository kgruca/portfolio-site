import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CodeArt from "public/code-art.png";

const About = () => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src={CodeArt} fill alt="" className={styles.img} />
    </div>
    <div className={styles.imgText}>
      <h1 className={styles.imgTitle}>Digital Storytellers</h1>
      <h2 className={styles.imgDesc}>
        Handcrafting award-winning digital experiences
      </h2>
    </div>
    <div className={styles.aboutContainer}>
      <div className={styles.secondImg}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  </div>
);

export default About;
