// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import ReactPaginate from "react-paginate";

// import styles from "./BlockRepository.module.css";
// import { CardReposiroty } from "../CardRepository/CardRepository";
// import { Preloader } from "../Preloader/Preloader";
// import { EmptyRepository } from "../EmptyRepository/EmptyRepository";

// export const BlockRepository = () => {
//   const isFetching = useSelector((state) => state.repos.isFetching);

//   return (
//     <div className={styles.blockRepository}>
//       <p className={styles.title}>Repositories ({totalCount})</p>
//       {currentItems.map((repo) => (
//         <CardReposiroty repo={repo} key={repo.id} />
//       ))}
//       <div className={styles.pagination}>
//         <p className={styles.paginationText}>
//           {itemOffset} - {endOffset} of {totalCount} items
//         </p>
//         <ReactPaginate
//           containerClassName={styles.paginationContainer}
//           previousClassName={styles.paginationPrevious}
//           nextClassName={styles.paginationNext}
//           activeClassName={styles.paginationActive}
//           activeLinkClassName={styles.paginationActiveLink}
//           previousLabel={
//             <img src="./assets/images/arrowLeft.svg" alt="arrowLeft" />
//           }
//           breakLabel="..."
//           nextLabel={
//             <img src="./assets/images/arrowRight.svg" alt="arrowRight" />
//           }
//           pageCount={pageCount}
//           marginPagesDisplayed="1"
//           pageRangeDisplayed="2"
//           onPageChange={handlePageClick}
//         />
//       </div>
//     </div>
//   );
// };
// if (itemOffset + perPage > totalCount) {
//   return setEndOffset(totalCount);
// } else {

// }
