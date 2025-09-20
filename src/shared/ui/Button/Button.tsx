import clsx from "clsx";
import styles from "./Button.module.scss";
import type React from "react";

type Props = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  variant: "default" | "primary" | "outline";
  className: string;
  style: React.CSSProperties;
  iconL: React.ReactNode;
  iconR: React.ReactNode;
  justify: React.CSSProperties["justifyContent"];
  w: React.CSSProperties["width"];
  h: React.CSSProperties["height"];
  onClick: VoidFunction;
};

export const Button = ({
  children,
  variant = "default",
  size = "md",
  style,
  iconL,
  iconR,
  justify = "center",
  w,
  h,
  className,
  ...props
}: Partial<Props>) => {
  return (
    <button
      style={{ ...style, justifyContent: justify, width: w, height: h }}
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {iconL}
      {children}
      {iconR}
    </button>
  );
};
