import React from "react";
import styles from "./Header.module.scss";
import { Link, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <nav className={styles["header__nav"]}>
        <Link to="/">Homepage</Link>
        <Link to="/contact">Contatti</Link>
        <Link to="/project">Progetti</Link>
        <Link to="/project">Blog</Link>
      </nav>
    </div>
  );
};

export default Header;
