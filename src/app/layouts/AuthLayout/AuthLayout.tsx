import bg from "./images/bg.png";
import styles from "./AuthLayout.module.scss";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
        ©Copyright 2022 All Rights Are Reserved.
      </div>

      <div className={styles.bg}>
        <img src={bg} alt="Auth Background" />
      </div>
    </div>
  );
};
