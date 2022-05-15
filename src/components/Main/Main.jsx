import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReactPaginate from "react-paginate";

import { getUsers, setIsSearch } from "../../redux/actions/usersActions";
import { getRepos, setCurrentPage } from "../../redux/actions/reposActions";

import styles from "./Main.module.css";
import { Container } from "../Container/Container";
// import { SearchUsers } from "../SearchUsers/SearchUsers";
// import { FoundUsers } from "../FoundUsers/FoundUsers";
import { BlockUser } from "../BlockUser/BlockUser";
// import { BlockRepository } from "../BlockRepository/BlockRepository";

import { CardReposiroty } from "../CardRepository/CardRepository";

export const Main = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.users.totalCount);
  // const isSearch = useSelector((state) => state.users.isSearch);
  // const isNotFound = useSelector((state) => state.users.isNotFound);
  const repos = useSelector((state) => state.repos.items);
  const perPage = useSelector((state) => state.repos.perPage);
  const currentPage = useSelector((state) => state.repos.currentPage);

  const [searchValue, setSearchValue] = useState("");
  const [currentItems, setCurrentItems] = useState(repos);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);

  useEffect(() => {
    setCurrentItems(repos);
    setEndOffset(itemOffset + perPage);
    setPageCount(Math.ceil(totalCount / perPage));
    dispatch(getRepos(searchValue, perPage, currentPage));
  }, [totalCount, repos, itemOffset, perPage, endOffset, currentPage]);

  const inputOnChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(setCurrentPage(1));
      setItemOffset(0);
      dispatch(setIsSearch(true));
      dispatch(getUsers(searchValue));
      dispatch(getRepos(searchValue, perPage, currentPage));
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % totalCount;
    setItemOffset(newOffset);
    dispatch(setCurrentPage(event.selected + 1));
  };

  return (
    <>
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
              onChange={inputOnChange}
              onKeyDown={searchHandler}
              type="text"
              placeholder="Enter GitHub username"
            />
          </div>
        </Container>
      </div>

      <div className={styles.main}>
        <Container>
          <div className={styles.mainWrapper}>
            <BlockUser />
            <div className={styles.blockRepository}>
              <p className={styles.title}>Repositories ({totalCount})</p>

              {currentItems.map((repo) => (
                <CardReposiroty repo={repo} key={repo.id} />
              ))}

              <div className={styles.pagination}>
                <p className={styles.paginationText}>
                  {itemOffset} - {endOffset} of {totalCount} items
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
          </div>
        </Container>
      </div>
    </>
  );
};
