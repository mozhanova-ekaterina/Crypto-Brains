import { Button } from "@/shared/ui/Button/Button";
import { Background } from "./Background";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.inner + " container"}>
      <div className={styles.tag}>Crypto Brains</div>
      <div className={styles.title}>
        <h2>Buy & Sell Crypto Easy</h2>
        <h2>With Crypto Brains</h2>
        <div className={styles.divider}></div>
      </div>
      <p className={styles.description}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className={styles.buttons}>
        <Button w="200px" variant="primary">
          Start Now
        </Button>
        <Button w="200px" variant="outline">
          Beginner’s Guide
        </Button>
      </div>
      <Background />
    </section>
  );
};
