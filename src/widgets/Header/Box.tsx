export const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex gap-10 items-center justify-between h-full">
      {children}
    </div>
  );
};
