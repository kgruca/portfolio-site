import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => (
  <div className={styles.container}>
    <div>&copy;2023 Gruca&Maso Productions, Inc. All rights reseved.</div>
    <div>
      <Image src="/facebook-icon.png" width={30} height={30} alt="facebook" />
      <Image src="/insta-icon.png" width={30} height={30} alt="instagram" />
      <Image src="/logo-white.png" width={30} height={30} alt="x" />
    </div>
  </div>
);

export default Footer;
