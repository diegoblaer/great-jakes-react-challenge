import { PauseIcon } from "../icons";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main>
      <div className={styles.banner}>
        <p>Protecting your brand.</p>
        <p>We’re on it.</p>
      </div>
      <div className={styles.carousel}>
        <div className={styles["img-carousel"]}>
          <img src="/Person1.png" alt="" />
          <img src="/Person2.png" alt="" />
          <img src="/Person3.png" alt="" />
          <img src="/Person4.png" alt="" />
          <img src="/Person5.png" alt="" />
        </div>
        <div className={styles.overlay}>
          <div>
            <PauseIcon />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
