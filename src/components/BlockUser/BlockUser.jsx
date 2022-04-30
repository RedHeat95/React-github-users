import styles from "./BlockUser.module.css";

export const BlockUser = () => {
  return (
    <div className={styles.blockuser}>
      <img
        className={styles.avatar}
        src="./assets/images/redheat.jpg"
        alt="avatar"
      />
      <p className={styles.avatarname}>Dan Abramov</p>
      <a className={styles.username} href="#">
        gaearon
      </a>
      <div className={styles.userInfo}>
        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/followers.svg"
            alt="followers"
          />
          65.8k followers
        </p>

        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/following.svg"
            alt="following"
          />
          171 following
        </p>
      </div>
    </div>
  );
};
