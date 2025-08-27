import clsx from "clsx";

export const SectionDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx("h-[1px] w-full", className)}
      style={{
        opacity: 0.4,
        background:
          "linear-gradient(to right, transparent, var(--grey-paragraph-6), transparent)",
      }}
    ></div>
  );
};
