import { ReactNode } from "react";

interface ISectionTitle {
  children: ReactNode;
  isImportant?: boolean;
  className?: string;
}

const SectionTitle = ({ children, isImportant, className }: ISectionTitle) => {
  return (
    <>
      {isImportant ? (
        <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>
      ) : (
        <h2 className={`text-4xl font-bold ${className}`}>{children}</h2>
      )}
    </>
  );
};

export default SectionTitle;
