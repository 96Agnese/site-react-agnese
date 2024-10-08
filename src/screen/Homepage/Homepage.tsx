import React, { useEffect, useRef } from "react";
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
import wordpress from "../../assets/icons/wordpress.png";
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
import iocut from "../../assets/iocut.jpg";
import cvimage from "../../assets/cvimage.jpg";
import TimelineExperience from "../../components/TimelineExperience/TimelineExperience";
import TimelineInstruction from "../../components/TimerlineInstruction/TimelineInstruction";

import splash from "../../assets/splash.png";
import chooseFriends from "../../assets/choosefriends.png";
import opportunity from "../../assets/opportunity.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { Reveal } from "../../components/Reveal/Reveal";

const Homepage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // const ref = useRef(null);
  // const inView = useInView(ref, { once: true });
  // const mainControl = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     mainControl.start("visible");
  //   }
  // }, [inView]);

  return (
    <div className={styles["homepage"]}>
      <div className={styles["homepage__inline-header"]}>
        <img className={styles["homepage__img"]} src={cvimage} alt="" />
        <Reveal>
          <h2 className={styles["homepage__presentation"]}>
            Ciao! Mi chiamo Agnese e sono una{" "}
            <span className={styles["homepage__strong"]}>Sviluppatrice web</span> e una
            <span className={styles["homepage__strong"]}> social media manager</span>
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <h3 className={styles["homepage__title"]}>CHI SONO</h3>
      </Reveal>
      <div className={styles["homepage__container-about-me"]}>
        <div className={styles["homepage__container-info"]}>
          <div>
            <div className={styles["homepage__container-info__inline"]}>
              <img src={user} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Nome:</p>
              <p>Agnese Morlin</p>
            </div>
            <div className={styles["homepage__container-info__inline"]}>
              <img src={birthday} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Compleanno:</p>
              <p>09/08/1996</p>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={location} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Luogo:</p>
              <p>Nove, VI</p>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={graduation} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Studi:</p>
              <p>Università degli studi di Padova</p>
            </div>
          </div>

          <img src={iocut} className={styles["homepage__img-center"]} alt="" />

          <div>
            <div className={styles["homepage__container-info__inline"]}>
              <img src={mountains} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Interessi:</p>
              <p>Montagna, Corsa, Arrampicata</p>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={github} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>GitHub:</p>
              <a className="blu-color" href="https://github.com/96Agnese">
                Agnese
              </a>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={gmail} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Email:</p>
              <a className="blu-color" href="mailto:agnesemorlin@gmail.com">
                Agnese Morlin
              </a>
            </div>

            <div className={styles["homepage__container-info__inline"]}>
              <img src={house} height={24} width={24} alt="" />
              <p className={styles["homepage__container-info__key"]}>Hobbies:</p>
              <a className="blu-color" href="http://www.parcodelsojo.it/">
                Parco del Sojo
              </a>
            </div>
          </div>
        </div>
      </div>

      <Reveal>
        <p className={styles["homepage__subtitle"]}>
          Il tutto è iniziato con il framework Flutter dove l'ho l'imparato grazie a un bando
          regionale nel 2021 e da li piano piano mi sono appasionata del tech world. Ho iniziato a
          voler imparare a programmare ed ora eccomi qui ! La passione per i social invece nasce fin
          da ragazzina a voler sperimentare il mondo del marketing, delle strategie e cosi ho
          iniziato con il Parco del sojo
        </p>
      </Reveal>
      <Reveal>
        <h3 id="skills" className={styles["homepage__title"]}>
          COMPETENZE
        </h3>
      </Reveal>
      <CarouselSkills />

      <div className={styles["homepage__align-skills"]}>
        <img src={html} alt="20" height={70} />

        <img src={css} alt="20" height={70} />
        <img src={scss} alt="20" height={70} />
        <img src={ts} alt="20" height={70} />
        <img src={js} alt="20" height={70} />
        <img src={b} alt="20" height={70} />
        <img src={figma} alt="20" height={70} />
        <img src={flutter} alt="20" height={70} />
        <img src={wordpress} alt="20" height={70} />
      </div>

      <Reveal>
        <h3 id="experiences" className={styles["homepage__title"]}>
          ESPERIENZE
        </h3>
      </Reveal>

      <TimelineExperience />

      <Reveal>
        <h3 id="istruction" className={styles["homepage__title"]}>
          ISTRUZIONE
        </h3>
      </Reveal>
      <TimelineInstruction />

      <Reveal>
        <h3 id="projects" className={styles["homepage__title"]}>
          PROGETTI
        </h3>
      </Reveal>
      {/* <Card hoverable cover={<img alt="ehilapp" src={splash} />}>
        <Meta title="Ehilapp" description="React Native" />
      </Card> */}

      <div className={styles["homepage__direction"]}>
        <div className={styles["homepage__card"]}>
          <h2 className="white-color"> - Ehilapp</h2>
          <h4 className="white-color">Caritas Diocesana Veronese e CISL-Verona</h4>
          <div className={styles["homepage__inline"]}>
            <img src={splash} alt="" height={200} />
            <img src={chooseFriends} alt="" height={200} />
            <img src={opportunity} alt="" height={200} />
          </div>
        </div>

        <div className={styles["homepage__texts-ehilapp"]}>
          <h1 style={{ color: "#036c9a" }}>Ehilapp</h1>
          <p>
            <span style={{ fontWeight: "bold", color: "#036c9a" }}>Anno:</span> 2022
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold", color: "#036c9a" }}>Azienda:</span> Rawfish
          </p>
          <p className={styles["homepage__desc-ehilapp"]}>
            E' un’app creata in
            <span style={{ fontWeight: "bold", color: "#036c9a", paddingLeft: 4, paddingRight: 4 }}>
              React Native
            </span>
            con lo scopo di aiutare i cittadini a trovare i bonus, o le opportunità più vicine a
            loro. Ogni utente può decidere quale seguire tra i 7 amici presenti, semplicemente
            accendendo o spegnendo la relativa icona. All’interno dell’app il cittadino sarà in
            grado di visionare le opportunità non solo dello Stato italiano, ma anche del proprio
            Comune di residenza.
          </p>
          <a style={{ color: "#036c9a" }} href="https://ehilapp.it/">
            Scarica anche tu l'app!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
