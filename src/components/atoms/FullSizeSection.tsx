import { ReactNode } from "react";

interface IFullSizeSection {
  className?: string;
  children: ReactNode;
}

const FullSizeSection = ({ className, children }: IFullSizeSection) => {
  return (
    <section className={`w-full h-full ${className ?? ""}`}>{children}</section>
  );
};

export default FullSizeSection;
