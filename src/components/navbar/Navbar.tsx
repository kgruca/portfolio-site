"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => (
  <div className={styles.container}>
    <Link href="/" className={styles.logo}>
      g&m
    </Link>
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.id} href={link.url} className={styles.link}>
          {link.title}
        </Link>
      ))}
      <button
        className={styles.logout}
        onClick={() => {
          console.log("logged out");
        }}
      >
        Logout
      </button>
    </div>
  </div>
);

export default Navbar;
