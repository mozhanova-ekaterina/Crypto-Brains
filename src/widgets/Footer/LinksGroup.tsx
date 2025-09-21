import { Title } from "@/shared/ui/Typography/Title";
import type { FooterGroup } from "./types";
import styles from "./Footer.module.scss";

export const LinksGroup = ({ group }: { group: FooterGroup }) => {
  return (
    <div className={styles.group}>
      <Title>{group.title}</Title>
      <ul className={styles.links}>
        {group.links.map((link) => (
          <li key={link.label} className={styles.link}>
            <a href={link.url}>
              {link.label}
              <span className={styles.additional}>{' '}{link.additionalText}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
