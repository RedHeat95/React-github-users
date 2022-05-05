import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BlockRepository.module.css";
import { getRepos } from "../../redux/actions/reposActions";
import { CardReposiroty } from "../CardRepository/CardRepository";

export const BlockRepository = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div className={styles.blockRepository}>
      <p className={styles.title}>Repositories ({repos.length})</p>
      <div>
        {repos.map((repo) => (
          <CardReposiroty key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};
