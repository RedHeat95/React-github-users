import styles from "./Main.module.css";
import { Container } from "../Container/Container";
import { SearchUsers } from "../SearchUsers/SearchUsers";
import { FoundUsers } from "../FoundUsers/FoundUsers";
import { BlockUser } from "../BlockUser/BlockUser";
import { BlockRepository } from "../BlockRepository/BlockRepository";
import { useSelector } from "react-redux";

export const Main = () => {
  const users = useSelector((state) => state.users.items);
  const isSearch = useSelector((state) => state.users.isSearch);

  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.mainWrapper}>
          {isSearch ? (
            <>
              {users.length === 0 ? (
                <FoundUsers />
              ) : (
                <>
                  <BlockUser />
                  <BlockRepository />
                </>
              )}
            </>
          ) : (
            <SearchUsers />
          )}
        </div>
      </Container>
    </div>
  );
};
