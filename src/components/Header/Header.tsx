import { SearchIcon } from "../icons";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <span>People</span>
            </li>
            <li>
              <span>Services</span>
            </li>
            <li>
              <span>Industries</span>
            </li>
            <li>
              <span>Firm</span>
            </li>
          </ul>
        </nav>
        <div className={styles.search}>
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
