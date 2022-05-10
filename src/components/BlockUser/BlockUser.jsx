import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BlockUser.module.css";
import { getUsers } from "../../redux/actions/usersActions";

let followers = 0;
let following = 0;

export const BlockUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (users.followers >= 1000) {
    followers = (users.followers / 1000).toFixed(1) + "k";
  } else {
    followers = users.followers;
  }

  if (users.following >= 1000) {
    following = (users.following / 1000).toFixed(1) + "k";
  } else {
    following = users.following;
  }

  return (
    <div className={styles.blockuser}>
      <img className={styles.avatar} src={users.avatar_url} alt="avatar" />
      <p className={styles.avatarname}>{users.name}</p>
      <a className={styles.username} href={users.html_url} target="_blank">
        {users.login}
      </a>
      <div className={styles.userInfo}>
        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/followers.svg"
            alt="followers"
          />
          {followers} followers
        </p>

        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/following.svg"
            alt="following"
          />
          {following} following
        </p>
      </div>
    </div>
  );
};
