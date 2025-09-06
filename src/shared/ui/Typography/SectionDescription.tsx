import clsx from "clsx";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  align?: "center" | "left" | "right";
};

export const SectionDescription = ({
  children,
  style,
  className,
  align = "center",
}: Props) => {
  return (
    <div
      className={clsx(styles.description, styles[align], className)}
      style={style}
    >
      {children}
    </div>
  );
};
