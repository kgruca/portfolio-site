import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => (
  <div className={styles.container}>
    <div>&copy;2023 Gruca&Maso Productions, Inc. All rights reseved.</div>
    <div className={styles.social}>
      <Image
        src="/facebook-icon.png"
        width={20}
        height={20}
        alt="facebook"
        className={styles.icon}
      />
      <Image
        src="/github-icon.png"
        width={20}
        height={20}
        alt="github"
        className={styles.icon}
      />
      <Image
        src="/insta-icon.png"
        width={20}
        height={20}
        alt="instagram"
        className={styles.icon}
      />
      <Image
        src="/linkedin.png"
        width={20}
        height={20}
        alt="linkedin"
        className={styles.icon}
      />
      <Image
        src="/logo-white.png"
        width={20}
        height={20}
        alt="x"
        className={styles.icon}
      />
    </div>
  </div>
);

export default Footer;
