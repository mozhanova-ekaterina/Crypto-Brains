import clsx from "clsx";

export const Divider = ({ className }: { className?: string }) => {
  return <div className={clsx("opacity-40 border", className)}></div>;
};
