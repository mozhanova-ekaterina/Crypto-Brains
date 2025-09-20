import clsx from "clsx";
import { SectionDescription } from "./SectionDescription";
import { SectionTitle } from "./SectionTitle";
import styles from "./Typography.module.scss";

type Props = {
  title: string;
  text: string;
  align?: "center" | "left" | "right";
  direction?: "row" | "column";
  className?: string;
};

export const SectionHeader = ({
  title,
  text,
  align = "center",
  direction = "column",
  className,
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        styles.section_header,
        styles[direction],
        className
      )}
      {...props}
    >
      <SectionTitle align={align}>{title}</SectionTitle>
      <SectionDescription align={align}>{text}</SectionDescription>
    </div>
  );
};
