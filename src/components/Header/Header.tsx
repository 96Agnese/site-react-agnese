import { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import menuwhite from "../../assets/icons/menu-white.png";

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
       
        <a href="#skills">Competenze</a>
        <a href="#experiences">Esperienze</a>
        <a href="#istruction">Istruzione</a>
        <a href="#projects">Progetti</a>

      </nav>

      <img
        className={styles["header__icon"]}
        onClick={Menu}
        src={menuwhite}
        alt=""
        height={24}
        width={24}
      />

      {onChange && (
        <div className={styles["header__container-mobile"]}>
          <a className={styles["header__link"]} href="#skills">
            Competenze
          </a>
          <a className={styles["header__link"]} href="#experiences">
            Esperienze
          </a>
          <a className={styles["header__link"]} href="#istruction">
            Istruzione
          </a>
          <a className={styles["header__link"]} href="#projects">
            Progetti
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
