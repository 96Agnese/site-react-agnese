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
        <Link to="/">Homepage</Link>
        <Link to="/contact">Contatti</Link>
        <a href="#carousel">Progetti</a>
        <Link to="/project">Blog</Link>
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
