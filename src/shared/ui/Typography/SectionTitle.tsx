import clsx from "clsx";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  align?: "center" | "left" | "right";
};

export const SectionTitle = ({
  children,
  style,
  className,
  align = "center",
}: Props) => {
  return (
    <h2 className={clsx(styles.title, styles[align], className)} style={style}>
      {children}
    </h2>
  );
};
