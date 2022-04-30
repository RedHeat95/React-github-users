import styles from "./Main.module.css";
import { Container } from "../Container/Container";
import { SearchUsers } from "../SearchUsers/SearchUsers";
import { FoundUsers } from "../FoundUsers/FoundUsers";
import { BlockUser } from "../BlockUser/BlockUser";
import { BlockRepository } from "../BlockRepository/BlockRepository";
import { EmptyRepository } from "../EmptyRepository/EmptyRepository";
import { Preloader } from "../Preloader/Preloader";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.mainWrapper}>
          {/* <SearchUsers /> */}
          {/* <FoundUsers /> */}
          <BlockUser />
          <BlockRepository />
          {/* <EmptyRepository /> */}
          {/* <Preloader /> */}
        </div>
      </Container>
    </div>
  );
};
