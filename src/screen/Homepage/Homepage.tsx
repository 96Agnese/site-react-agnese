import React from "react";
import styles from "./Homepage.module.scss";
import img from "../../assets/io.jpg";

const Homepage = () => {
  return (
    <div className={styles["homepage"]}>
      <div className={styles["homepage__inline"]}>
        <img className={styles["homepage__img"]} src={img} alt="" />
        <h1 className={styles["homepage__presentation"]}>
          Hi there! My name in Agnese and i'm{" "}
          <span className={styles["homepage__strong"]}>frontend developer</span>
        </h1>
      </div>

      <h3 className={styles["homepage__title"]}>About me</h3>
      <p className={styles["homepage__subtitle"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque, assumenda,
        repellat in adipisci ut esse sed soluta ducimus culpa nisi dolorem eveniet quia autem earum
        quae totam molestiae odit!
      </p>

      <h3 className={styles["homepage__title"]}>My skills</h3>
      <div className={styles["homepage__inline-circle"]}>
        <div className={styles["homepage__circle"]}>HTML</div>
        <div className={styles["homepage__circle"]}>CSS</div>
        <div className={styles["homepage__circle"]}>SCSS</div>
        <div className={styles["homepage__circle"]}>REACT</div>
        <div className={styles["homepage__circle"]}>JS</div>
        <div className={styles["homepage__circle"]}>GIT</div>
      </div>

      <h3 className={styles["homepage__title"]}>About me</h3>
    </div>
  );
};

export default Homepage;
