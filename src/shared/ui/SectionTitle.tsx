type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const SectionTitle = ({ children, style }: Props) => {
  return (
    <h2
      style={{
        fontSize: "var(--font-size-4xl)",
        fontWeight: 700,
        color: "var(--white)",
        ...style,
      }}
    >
      {children}
    </h2>
  );
};
