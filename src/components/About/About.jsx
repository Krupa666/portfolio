import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/abiut.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h1>About Me</h1><br></br>
              <p>
                I'm Krupa Rakshan, an IT fresher and aspiring web developer with
                
                
                 a passion for coding and building interactive web applications.
              </p>
              <p> I specialize in front-end development with React and have a keen interest in mastering full-stack technologies.  </p>
              <p>My goal is to contribute to impactful web solutions while growing as a developer. </p>
                </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
