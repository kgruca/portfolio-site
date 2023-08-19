"use client";
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const getPosition = (str: string, subStr: string, pos: number) => {
  let length = str.length,
    i = -1;

  while (pos-- && i++ < length) {
    i = str.indexOf(subStr, i);
    if (i < 0) break;
  }
  return i;
};

const Category = () => {
  const pathName = usePathname();
  const startPosition = getPosition(pathName, "/", 2) + 1;

  const categoryName = pathName.slice(startPosition);

  console.log(categoryName);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.catTitle}>{categoryName}</h1>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Description</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill
              src="/illustration2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
