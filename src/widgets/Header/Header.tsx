import styles from "./Header.module.scss";
import { MenuList } from "./MenuList";
import { Logo } from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/Button/Button";
import { Divider } from "@/shared/ui/Dividers/Divider";
import { Link } from "react-router";
import { PATHS } from "@/app/paths";

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
          <Link to={PATHS.AUTH.LOGIN}>
            <Button w="140px">Log In</Button>
          </Link>
          <Link to={PATHS.AUTH.REGISTER}>
            <Button w="140px" variant="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
