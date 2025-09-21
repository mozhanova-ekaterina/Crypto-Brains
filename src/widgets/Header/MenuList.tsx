import styles from "./Header.module.scss";
import { menuItems } from "./mocks";

export const MenuList = () => {
  return (
    <ul className={styles.menu}>
      {menuItems.map(({ label, path }) => (
        <li className={styles.item} key={path}>
          {label}
        </li>
      ))}
    </ul>
  );
};
