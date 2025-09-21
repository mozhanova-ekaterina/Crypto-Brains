import styles from "./Footer.module.scss";
import { Button } from "@/shared/ui/Button/Button";

export const FooterBottom = () => {
  return (
    <div className={styles.footer_bottom}>
      <div className={styles.copyright}>
        <p>©Copyright 2022 All Rights Are Reserved.</p>
        <DotDivider />
        <a href="#">Privacy Policy</a>
        <DotDivider />
        <a href="#">Terms of Use</a>
      </div>
      <div className={styles.actions}>
        <Button className={styles.button} size="sm" variant="outline">
          INR
        </Button>
        <Button className={styles.button} size="sm" variant="outline">
          English
        </Button>
      </div>
    </div>
  );
};

const DotDivider = () => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.4" cx="3" cy="3" r="3" fill="white" />
    </svg>
  );
};
