import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BlockUser.module.css";
import { getUsers } from "../../redux/actions/usersActions";

export const BlockUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={styles.blockuser}>
      <img className={styles.avatar} src={users.avatar_url} alt="avatar" />
      <p className={styles.avatarname}>{users.name}</p>
      <a className={styles.username} href="#">
        {users.login}
      </a>
      <div className={styles.userInfo}>
        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/followers.svg"
            alt="followers"
          />
          {users.followers} followers
        </p>

        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/following.svg"
            alt="following"
          />
          {users.following} following
        </p>
      </div>
    </div>
  );
};
