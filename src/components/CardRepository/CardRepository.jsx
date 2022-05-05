import styles from "./CardRepository.module.css";

export const CardReposiroty = (props) => {
  const repo = props.repo;
  return (
    <div className={styles.cardReposiroty}>
      <a className={styles.cardTitle} href="#">
        {repo.name}
      </a>
      <p className={styles.cardText}>{repo.description}</p>
    </div>
  );
};
