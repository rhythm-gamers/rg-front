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
        <h1 className={`text-2xl font-bold text-black ${className ?? ""}`}>
          {children}
        </h1>
      ) : (
        <h2 className={`text-2xl font-bold text-black ${className ?? ""}`}>
          {children}
        </h2>
      )}
    </>
  );
};

export default SectionTitle;
