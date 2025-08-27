import React from "react";

export const SectionDescription = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        fontSize: "18px",
        lineHeight: "156%",
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
