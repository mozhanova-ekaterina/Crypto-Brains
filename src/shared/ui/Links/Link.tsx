import { Link } from "react-router";
import styles from "./Links.module.scss";
import { LinkArrow } from "@/shared/images/icons/LinkArrow";

type Props = {
  children: React.ReactNode;
  to: string;
};

export const UiLink = ({ children, to }: Props) => {
  return (
    <div className={styles.link}>
      <Link to={to}>{children}</Link>
      <LinkArrow />
    </div>
  );
};
