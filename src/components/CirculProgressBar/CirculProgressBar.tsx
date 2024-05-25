import React, { FC } from "react";
import { Flex, Progress, ProgressProps } from "antd";
import styles from "./CircularProgressBar.module.scss";

interface CirculProgressBarProps {
  title: string;
  percent: number;
}

const conicColors: ProgressProps["strokeColor"] = {
  "0%": "#19a9e7",
  "100%": "#ffe58f",
};

const CirculProgressBar: FC<CirculProgressBarProps> = ({ title, percent }) => (
  <Flex
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    gap="large"
    wrap
  >
    <Progress
      size={100}
      type="circle"
      percent={percent}
      format={() => title}
      strokeColor={conicColors}
      className={styles["circular-progress"]}
    />
  </Flex>
);

export default CirculProgressBar;
