import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, Route, Routes } from "react-router-dom";

const Header = () => {
  const [onChange, setOnChange] = useState(false);

  const Menu = () => {
    setOnChange(!onChange);
  };

  return (
    <div className={styles["header"]}>
      <div>
        <p className={styles["header__name"]}>Agnese | Portfolio</p>
      </div>
      <nav className={styles["header__nav"]}>
        <Link to="/">Homepage</Link>
        <Link to="/contact">Contatti</Link>
        <Link to="/project">Progetti</Link>
        <Link to="/project">Blog</Link>
      </nav>

      <button onClick={Menu} className={styles["header__icon"]}>
        icona
      </button>

      {onChange && (
        <div className={styles["header__container-mobile"]}>
          <Link className={styles["header__link"]} to="/contact">
            Contatti
          </Link>
          <Link className={styles["header__link"]} to="/project">
            Progetti
          </Link>
          <Link className={styles["header__link"]} to="/project">
            Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
