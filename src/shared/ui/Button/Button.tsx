import clsx from "clsx";

const variants = {
  primary: "bg-[var(--primary-9)] text-white",
  default: "bg-transparent text-white",
  outline: "border border-white text-white",
};

const sizes = {
  sm: "text-md py-[8px]",
  md: "text-xl py-[12px]",
  lg: "text-2xl py-[12px]",
};

type Props = {
  children: React.ReactNode;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  className?: string;
};

export const Button = ({
  children,
  variant = "default",
  className,
  size = "md",
}: Props) => {
  return (
    <button
      className={clsx(
        "rounded cursor-pointer outline-0",
        className,
        variants[variant],
        sizes[size]
      )}
    >
      {children}
    </button>
  );
};
