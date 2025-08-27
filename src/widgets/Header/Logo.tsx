import styles from "./Header.module.scss";
import logoSrc from "@images/Logo.png";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoSrc} alt="logo" />
    </div>
  );
};
