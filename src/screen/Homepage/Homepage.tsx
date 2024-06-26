import React from "react";
import styles from "./Homepage.module.scss";
import io2 from "../../assets/io2.jpg";
import { Card } from "antd";
import CardTest from "../../components/Card/Card";
import CarouselSkills from "../../components/CarouselSkills/CarouselSkills";
import { FireOutlined } from "@ant-design/icons";
// skills
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import scss from "../../assets/icons/scss.png";
import ts from "../../assets/icons/ts.png";
import js from "../../assets/icons/js.png";
import b from "../../assets/icons/b.png";
import figma from "../../assets/icons/figma.png";
import flutter from "../../assets/icons/flutter.png";
// info
import location from "../../assets/info/location.png";
import birthday from "../../assets/info/birthday.png";
import graduation from "../../assets/info/graduation.png";
import mountains from "../../assets/info/mountains.png";
import github from "../../assets/info/github.png";
import gmail from "../../assets/info/gmail.png";
import house from "../../assets/info/house.png";
import user from "../../assets/info/user.png";
// io
import io from "../../assets/cvimage.jpg";

const Homepage = () => {
  return (
    <div className={styles["homepage"]}>
      <div className={styles["homepage__inline-header"]}>
        <img className={styles["homepage__img"]} src={io2} alt="" />
        <h2 className={styles["homepage__presentation"]}>
          Hello!
          <h2 className={styles["homepage__presentation"]}>My name in Agnese Morlin and i'm</h2>
          <span className={styles["homepage__strong"]}>Frontend Developer</span>
          <h2 className={styles["homepage__presentation"]}>
            and <span className={styles["homepage__strong"]}>Social media</span>{" "}
          </h2>
        </h2>
      </div>
      <h3 className={styles["homepage__title"]}>ABOUT ME</h3>
      <div className={styles["homepage__container-about-me"]}>
        <div className={styles["homepage__container-info"]}>
          <div>
            <div className={styles["homepage__container-info__inline"]}>
              <img src={user} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Fullname:</p>
              <p>Agnese Morlin</p>
            </div>
            <div className={styles["homepage__container-info__inline"]}>
              <img src={birthday} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Compleanno:</p>
              <p>09/08/1996</p>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={location} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Location:</p>
              <p>Nove, VI</p>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={graduation} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Study:</p>
              <p>Graduation Padua Dams</p>
            </div>
          </div>

          <img src={io} className={styles["homepage__img-center"]} alt="" />

          <div>
            <div className={styles["homepage__container-info__inline"]}>
              <img src={mountains} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Interests:</p>
              <p>Mountains, Running, Climbing</p>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={github} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>GitHub:</p>
              <a href="https://github.com/96Agnese">Agnese</a>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={gmail} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Email:</p>
              <a href="agnesemorlin@gmail.com">Agnese Morlin</a>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={house} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Hobbies:</p>
              <a href="http://www.parcodelsojo.it/">Parco del Sojo</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className={styles["homepage__subtitle"]}>
          Il tutto è iniziato con il framework Flutter dove l'ho l'imparato grazie a un bando
          regionale nel 2021 e da li piano piano mi sono appasionata del tech world. Ho iniziato a
          voler imparare a programmare ed ora eccomi qui !
        </p>
      </div>
      <h3 className={styles["homepage__title"]}>SKILLS</h3>
      <div id="carousel">
        <CarouselSkills />
      </div>
      <div className={styles["homepage__align-skills"]}>
        <img src={html} alt="20" height={70} />

        <img src={css} alt="20" height={70} />
        <img src={scss} alt="20" height={70} />
        <img src={ts} alt="20" height={70} />
        <img src={js} alt="20" height={70} />
        <img src={b} alt="20" height={70} />
        <img src={figma} alt="20" height={70} />
        <img src={flutter} alt="20" height={70} />
      </div>

      <h3 className={styles["homepage__title"]}>WORK EXPERIENCE</h3>
    </div>
  );
};

export default Homepage;
