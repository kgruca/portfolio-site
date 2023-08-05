import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = (props: { text: string; url: string }) => (
  <Link href={props.url}>
    <button className={styles.container}>{props.text}</button>
  </Link>
);

export default Button;
