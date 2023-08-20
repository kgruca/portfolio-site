import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import fatKitty from "/public/fatKitty.png";

const Blog = () => (
  <div className={styles.container}>
    <Link href="/testID" className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={fatKitty}
          alt=""
          height={250}
          width={400}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Description</p>
      </div>
    </Link>
  </div>
);

export default Blog;
