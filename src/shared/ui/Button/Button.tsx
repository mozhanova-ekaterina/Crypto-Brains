import clsx from "clsx";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "outline";
  className?: string;
  style?: React.CSSProperties;
};

export const Button = ({
  children,
  variant = "default",
  size = "md",
  style,
  ...props
}: Props) => {
  return (
    <button
      style={style}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        props.className
      )}
    >
      {children}
    </button>
  );
};
