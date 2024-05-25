import React from "react";
import { Carousel } from "antd";
import CirculProgressBar from "../CirculProgressBar/CirculProgressBar";
import {
  AlertOutlined,
  LeftOutlined,
  RightOutlined,
  GlobalOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import styles from "./CarouselSkills.module.scss";

const CarouselSkills: React.FC = () => (
  <Carousel effect="fade" className={styles["carousel-skills"]} arrows>
    <div>
      <div className={styles["carousel-skills__container-blu"]}>
        <div className={styles["carousel-skills__title-icon"]}>
          <AlertOutlined className={styles["carousel-skills__color-icon"]} />
          {/* //! SOFT SKILLS */}
          <h2>SOFT SKILLS</h2>
        </div>
        <div className={styles["carousel-skills__space-circle"]}>
          <CirculProgressBar title="Team work" percent={75} />
          <CirculProgressBar title="Leadership" percent={80} />
          <CirculProgressBar title="Problem Solving" percent={50} />
        </div>
      </div>
    </div>
    <div>
      <div className={styles["carousel-skills__container-blu"]}>
        <div className={styles["carousel-skills__title-icon"]}>
          <LeftOutlined className={styles["carousel-skills__color-icon"]} /> <p>/</p>
          <RightOutlined className={styles["carousel-skills__color-icon"]} />
          {/* //! TECNOLOGIES */}
          <h2>TECHOLOGIES</h2>
        </div>
        <div className={styles["carousel-skills__space-circle"]}>
          <CirculProgressBar title="React" percent={50} />
          <CirculProgressBar title="Bootstrap" percent={80} />
          <CirculProgressBar title="Flutter" percent={60} />
          <CirculProgressBar title="HTML/CSS" percent={90} />
          <CirculProgressBar title="SCSS" percent={90} />
          <CirculProgressBar title="GIT" percent={50} />
        </div>
      </div>
      <img src="/src/assets/icons/scss.png" alt="" />
    </div>
    <div>
      <div className={styles["carousel-skills__container-blu"]}>
        <div className={styles["carousel-skills__title-icon"]}>
          <GlobalOutlined className={styles["carousel-skills__color-icon"]} />
          {/* //! LANGUAGES */}
          <h2>LANGUAGES</h2>
        </div>
        <div className={styles["carousel-skills__space-circle"]}>
          <CirculProgressBar title="Javascript" percent={50} />
          <CirculProgressBar title="Typescript" percent={60} />
          <CirculProgressBar title="Dart" percent={40} />
        </div>
      </div>
    </div>
    <div>
      <div className={styles["carousel-skills__container-blu"]}>
        <div className={styles["carousel-skills__title-icon"]}>
          <LaptopOutlined className={styles["carousel-skills__color-icon"]} />
          {/* //! SYSTEMS */}
          <h2>SYSTEMS</h2>
        </div>
        <div className={styles["carousel-skills__space-circle"]}>
          <CirculProgressBar title="Windows" percent={90} />
          <CirculProgressBar title="MacOS" percent={80} />
        </div>
      </div>
    </div>
  </Carousel>
);

export default CarouselSkills;
