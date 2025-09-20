import { Button } from "../../shared/ui/Button/Button";
import { Divider } from "../../shared/ui/Dividers/Divider";
import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { MenuList } from "./MenuList";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner + " container"}>
        <div className={styles.logo}>
          <Logo />
          <Divider />
        </div>
        <MenuList />

        <div className={styles.actions}>
          <Button w="140px">Log In</Button>
          <Button w="140px" variant="primary">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
