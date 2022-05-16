import React from "react";
import { useSelector } from "react-redux";

import styles from "./Main.module.css";
import { Container } from "../Container/Container";
import { SearchUsers } from "../SearchUsers/SearchUsers";
import { EmptyState } from "../EmptyState/EmptyState";
import { BlockUser } from "../BlockUser/BlockUser";
import { BlockRepository } from "../BlockRepository/BlockRepository";

export const Main = () => {
  const isSearch = useSelector((state) => state.users.isSearch);
  const isNotFound = useSelector((state) => state.users.isNotFound);

  return (
    <div className={styles.main}>
      <Container>
        {isSearch ? (
          <>
            {isNotFound ? (
              <EmptyState
                image="./assets/images/user.svg"
                alt="user"
                text="User not found"
              />
            ) : (
              <div className={styles.mainWrapper}>
                <BlockUser />
                <BlockRepository />
              </div>
            )}
          </>
        ) : (
          <SearchUsers />
        )}
      </Container>
    </div>
  );
};
