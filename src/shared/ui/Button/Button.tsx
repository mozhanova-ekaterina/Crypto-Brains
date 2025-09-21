import clsx from "clsx";
import styles from "./Button.module.scss";
import type React from "react";

type Props = {
  className: string;
  variant: "default" | "primary" | "outline";
  size: "sm" | "md" | "lg";
  onClick: VoidFunction;
  children: React.ReactNode;
  iconL: React.ReactNode;
  iconR: React.ReactNode;
  style: React.CSSProperties;
  justify: React.CSSProperties["justifyContent"];
  w: React.CSSProperties["width"];
  h: React.CSSProperties["height"];
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
