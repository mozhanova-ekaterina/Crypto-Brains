import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { UiLink as Link } from "@/shared/ui/Links/Link";
import styles from "./WhyChoose.module.scss";

type Props = {
  title: string;
  text: string;
  number: number;
};

export const ListItem = ({ title, text, number }: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <div className={styles.number}>0{number}</div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.link}>
          <Link to="#">Start Now</Link>
        </div>
      </div>
      <SectionDivider variant="left" />
    </li>
  );
};
