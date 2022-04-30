import styles from "./FoundUsers.module.css";

export const FoundUsers = () => {
  return (
    <div className={styles.foundUsers}>
      <img
        className={styles.foundUsersImg}
        src="./assets/images/user.svg"
        alt="user"
      />
      <p className={styles.foundUsersText}>User not found</p>
    </div>
  );
};
