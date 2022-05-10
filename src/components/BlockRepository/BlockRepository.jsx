import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import styles from "./BlockRepository.module.css";
import { CardReposiroty } from "../CardRepository/CardRepository";
import { Preloader } from "../Preloader/Preloader";
import { EmptyRepository } from "../EmptyRepository/EmptyRepository";

export const BlockRepository = () => {
  const allRepos = useSelector((state) => state.users.items.public_repos);
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);

  const [currentItems, setCurrentItems] = useState(repos);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    setEndOffset(itemOffset + itemsPerPage);
    setCurrentItems(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / itemsPerPage));
  }, [repos, itemOffset, endOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {allRepos === 0 ? (
        <EmptyRepository />
      ) : (
        <>
          {isFetching ? (
            <div className={styles.blockRepository}>
              <p className={styles.title}>Repositories ({allRepos})</p>
              {currentItems.map((repo) => (
                <CardReposiroty repo={repo} key={repo.id} />
              ))}
              <div className={styles.pagination}>
                <p className={styles.paginationText}>
                  {itemOffset} - {endOffset} of {repos.length} items
                </p>
                <ReactPaginate
                  containerClassName={styles.paginationContainer}
                  previousClassName={styles.paginationPrevious}
                  nextClassName={styles.paginationNext}
                  activeClassName={styles.paginationActive}
                  activeLinkClassName={styles.paginationActiveLink}
                  previousLabel={
                    <img src="./assets/images/arrowLeft.svg" alt="arrowLeft" />
                  }
                  breakLabel="..."
                  nextLabel={
                    <img
                      src="./assets/images/arrowRight.svg"
                      alt="arrowRight"
                    />
                  }
                  pageCount={pageCount}
                  marginPagesDisplayed="1"
                  pageRangeDisplayed="2"
                  onPageChange={handlePageClick}
                />
              </div>
            </div>
          ) : (
            <Preloader />
          )}
        </>
      )}
    </>
  );
};
