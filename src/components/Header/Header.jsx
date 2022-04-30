import styles from "./Header.module.css";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <img
          className={styles.headerLogo}
          src="./assets/images/logo.svg"
          alt="logo"
        />
        <div className={styles.headerSearch}>
          <img
            className={styles.searchImg}
            src="./assets/images/searchInput.svg"
            alt="search"
          />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Enter GitHub username"
          />
        </div>
      </Container>
    </div>
  );
};
