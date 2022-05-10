import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Header.module.css";
import { getUsers } from "../../redux/actions/usersActions";
import { getRepos } from "../../redux/actions/reposActions";
import { Container } from "../Container/Container";

export const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(getUsers(searchValue));
      dispatch(getRepos(searchValue));
      setSearchValue("");
    }
  };

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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={searchHandler}
            type="text"
            placeholder="Enter GitHub username"
          />
        </div>
      </Container>
    </div>
  );
};
