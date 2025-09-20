import clsx from "clsx";
import styles from "./Typography.module.scss";
import { Title } from "./Title";

type Props = {
  children: React.ReactNode;
  style: React.CSSProperties;
  className: string;
  align: "center" | "left" | "right";
};

export const SectionTitle = ({
  children,
  style,
  className,
  align = "center",
}: Partial<Props>) => {
  return (
    <Title
      className={clsx(styles.section_title, styles[align], className)}
      style={style}
    >
      {children}
    </Title>
  );
};
