import { ReactNode } from "react";

interface IFullScreenSection {
  children: ReactNode;
  direction: "row" | "col";
  className?: string;
  asMainTag?: boolean;
}

const FullScreenSection = ({
  children,
  className,
  direction,
  asMainTag,
}: IFullScreenSection) => {
  return (
    <>
      {asMainTag ? (
        <main
          className={`flex w-full min-h-[calc(100vh-3.75rem)] ${
            direction === "col" && "flex-col"
          } ${className}`}
        >
          {children}
        </main>
      ) : (
        <section
          className={`flex w-full min-h-[calc(100vh-3.75rem)] ${
            direction === "col" && "flex-col"
          } ${className}`}
        >
          {children}
        </section>
      )}
    </>
  );
};

export default FullScreenSection;
