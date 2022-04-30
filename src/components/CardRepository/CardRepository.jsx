import styles from "./CardRepository.module.css";

export const CardReposiroty = () => {
  return (
    <div className={styles.cardReposiroty}>
      <a className={styles.cardTitle} href="#">
        react-hot-loader
      </a>
      <p className={styles.cardText}>
        Tweak React components in real time. (Deprecated: use Fast Refresh
        instead.
      </p>
    </div>
  );
};
