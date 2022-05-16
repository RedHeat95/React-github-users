import React from "react";
import { useSelector } from "react-redux";

import styles from "./BlockRepository.module.css";
import { CardReposiroty } from "../CardRepository/CardRepository";
import { Pagination } from "../Pagination/Pagination";
import { Preloader } from "../Preloader/Preloader";
import { EmptyState } from "../EmptyState/EmptyState";

export const BlockRepository = () => {
  const totalCount = useSelector((state) => state.users.totalCount);
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  console.log(isFetching);

  return (
    <>
      {totalCount === 0 ? (
        <EmptyState
          image="./assets/images/empty.svg"
          alt="empty"
          text="Repository list is empty"
        />
      ) : (
        <>
          {isFetching ? (
            <div className={styles.blockRepository}>
              <p className={styles.title}>Repositories ({totalCount})</p>

              {repos.map((repo) => (
                <CardReposiroty repo={repo} key={repo.id} />
              ))}
              <Pagination />
            </div>
          ) : (
            <Preloader />
          )}
        </>
      )}
    </>
  );
};
