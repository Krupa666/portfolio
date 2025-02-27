import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import TextChange from "./TextChange";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}><TextChange/></h1>
        <p className={styles.description}>
        Iam a Student of Btech with high curiosity in developing my self in every field

        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krupa.nkr6@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myhero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
