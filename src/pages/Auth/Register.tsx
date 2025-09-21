import { Title } from "@/shared/ui/Typography/Title";
import styles from "./Auth.module.scss";

export const Register = () => {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title}>Sign Up</Title>
    </div>
  );
};
