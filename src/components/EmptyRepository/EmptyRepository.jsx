import styles from "./EmptyRepository.module.css";

export const EmptyRepository = () => {
  return (
    <div className={styles.emptyRepository}>
      <img
        className={styles.emptyRepositoryImg}
        src="./assets/images/empty.svg"
        alt="empty"
      />
      <p className={styles.emptyRepositoryText}>Repository list is empty</p>
    </div>
  );
};
