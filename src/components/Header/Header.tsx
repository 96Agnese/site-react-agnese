import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import menuwhite from "../../assets/icons/burger.png";
import closemenu from "../../assets/icons/close.png";

const Header = () => {
  const [onChange, setOnChange] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const Menu = () => {
    setOnChange(!onChange);
  };

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <p className={styles["header__name"]}>Agnese | Portfolio</p>

      <nav className={styles["header__nav"]}>
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
      </nav>

     {onChange ? (
      <img
        className={styles["header__icon"]}
        onClick={Menu}
        src={closemenu}
        alt=""
        height={24}
        width={24}
      />
     ) : <img
        className={styles["header__icon"]}
        onClick={Menu}
        src={menuwhite}
        alt=""
        height={24}
        width={24}
      />
    }


        <div className={`${styles["header__container-mobile"]} ${onChange ? styles.open : ''}`}>
          <a className={styles["header__link-mobile"]} href="#skills">
             Competenze
          </a>
          <a className={styles["header__link-mobile"]} href="#experiences">
             Esperienze
          </a>
          <a className={styles["header__link-mobile"]} href="#istruction">
            Istruzione
          </a>
          <a className={styles["header__link-mobile"]} href="#projects">
             Progetti
          </a>
        </div>
    </div>
  );
};

export default Header;
