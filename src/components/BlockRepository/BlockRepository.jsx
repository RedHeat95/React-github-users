import styles from "./BlockRepository.module.css";
import { CardReposiroty } from "../CardRepository/CardRepository";

export const BlockRepository = () => {
  return (
    <div className={styles.blockRepository}>
      <p className={styles.title}>Repositories (249)</p>
      <CardReposiroty />
      <CardReposiroty />
      <CardReposiroty />
    </div>
  );
};
