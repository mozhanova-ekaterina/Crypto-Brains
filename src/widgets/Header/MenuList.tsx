import styles from "./Header.module.scss";
import { menuItems } from "./mocks";

export const MenuList = () => {
  return (
    <ul className={styles.menu}>
      {Object.entries(menuItems).map(([key, value]) => (
        <li className={styles.item} key={key}>
          {value}
        </li>
      ))}
    </ul>
  );
};
