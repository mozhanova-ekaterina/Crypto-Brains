const variants = {
  center: {
    background:
      "linear-gradient(to right, transparent, var(--grey-paragraph-6), transparent)",
  },
  left: {
    background:
      "linear-gradient(to right, var(--grey-paragraph-6), transparent)",
  },
  right: {
    background:
      "linear-gradient(to left, var(--grey-paragraph-6), transparent)",
  },
} satisfies Record<string, React.CSSProperties>;

type Props = {
  variant?: keyof typeof variants;
  className?: string;
};

export const SectionDivider = ({ variant = "center", ...props }: Props) => {
  return (
    <div
      style={{
        height: "1px",
        width: "100%",
        opacity: 0.4,
        ...variants[variant],
      }}
      {...props}
    ></div>
  );
};
