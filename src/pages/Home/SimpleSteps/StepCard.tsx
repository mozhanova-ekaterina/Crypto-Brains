import { UiLink as Link } from "@/shared/ui/Links/Link";
import styles from "./SimpleSteps.module.scss";

type Props = {
  icon_src: string;
  title: string;
  text: string;
  linkText: string;
};

export const StepCard = ({ icon_src, title, text, linkText }: Props) => {
  return (
    <div className={styles.card}>
      <img src={icon_src} alt="card-icon" className={styles.card_icon} />
      <h3 className={styles.card_title}>{title}</h3>
      <p>{text}</p>
      <Link to="#">{linkText}</Link>
    </div>
  );
};
