import clsx from "clsx";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
  style: React.CSSProperties;
  className: string;
};

export const Title = ({ className, children, ...props }: Partial<Props>) => {
  return (
    <h2 className={clsx(styles.title, className)} {...props}>
      {children}
    </h2>
  );
};
