import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Colors from "public/colors.png";
import CodeArt from "public/code-art.png";
import Process from "public/process.png";
import Button from "@/components/button/Button";

const About = () => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src={Colors} fill alt="colors" className={styles.img} />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award-winning digital experiences
        </h2>
      </div>
    </div>
    <div className={styles.aboutContainer}>
      {/* <div className={styles.secondImg}>
        <Image src={Process} alt="process" className={styles.img} />
      </div> */}
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero
          justo laoreet sit amet cursus. Iaculis at erat pellentesque adipiscing
          commodo elit. Magnis dis parturient montes nascetur ridiculus mus
          mauris vitae. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. A scelerisque purus semper eget duis. Sodales ut etiam
          sit amet nisl. Nulla facilisi etiam dignissim diam quis enim lobortis
          scelerisque fermentum.
          <br />
          <br />
          Ac ut consequat semper viverra nam libero justo. Parturient montes
          nascetur ridiculus mus mauris vitae ultricies leo. Turpis egestas sed
          tempus urna et pharetra pharetra. Risus viverra adipiscing at in
          tellus integer feugiat scelerisque varius. Nec dui nunc mattis enim
          ut. Ac turpis egestas integer eget aliquet nibh praesent. Tortor
          consequat id porta nibh venenatis cras sed felis. Cursus eget nunc
          scelerisque viverra.
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What Do We Do?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero
          justo laoreet sit amet cursus. Iaculis at erat pellentesque adipiscing
          commodo elit. Magnis dis parturient montes nascetur ridiculus mus
          mauris vitae. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. A scelerisque purus semper eget duis. Sodales ut etiam
          sit amet nisl. Nulla facilisi etiam dignissim diam quis enim lobortis
          scelerisque fermentum.
          <br />
          Ac ut consequat semper viverra nam libero justo. Parturient montes
          nascetur ridiculus mus mauris vitae ultricies leo. Turpis egestas sed
          tempus urna et pharetra pharetra. Risus viverra adipiscing at in
          tellus integer feugiat scelerisque varius. Nec dui nunc mattis enim
          ut. Ac turpis egestas integer eget aliquet nibh praesent. Tortor
          consequat id porta nibh venenatis cras sed felis. Cursus eget nunc
          scelerisque viverra.
          <br />
          <br />
        </p>
        <Button url="/contact" text="Contact" />
      </div>
    </div>
  </div>
);

export default About;
