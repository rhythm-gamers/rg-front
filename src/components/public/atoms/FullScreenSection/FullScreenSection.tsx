import { ReactNode } from "react";

interface IFullSizeSection {
  children: ReactNode;
  direction: "row" | "col";
  className?: string;
}

const FullScreenSection = ({
  children,
  className,
  direction,
}: IFullSizeSection) => {
  return (
    <section
      className={`flex w-screen h-screen ${
        direction === "col" && "flex-col"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default FullScreenSection;
