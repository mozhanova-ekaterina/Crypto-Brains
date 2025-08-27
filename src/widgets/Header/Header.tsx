import { Button } from "../../shared/ui/Button/Button";
import { Divider } from "../../shared/ui/Dividers/Divider";
import { Box } from "./Box";
import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { MenuList } from "./MenuList";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Box>
        <div className="flex gap-10">
          <Logo />
          <Divider />
        </div>
        <MenuList />

        <div className="flex gap-2.5">
          <Button className="w-[140px]">Log In</Button>
          <Button className="w-[140px]" variant="primary">
            Sign Up
          </Button>
        </div>
      </Box>
    </header>
  );
};
