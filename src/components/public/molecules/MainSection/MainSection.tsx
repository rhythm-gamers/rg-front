import { ReactNode } from "react";
import FullScreenSection from "../../atoms/FullScreenSection/FullScreenSection";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

interface IMainSection {
  children: ReactNode;
  sectionTitle: string;
}

const MainSection = ({ children, sectionTitle }: IMainSection) => {
  return (
    <FullScreenSection className="px-20" direction="col">
      <SectionTitle>{sectionTitle}</SectionTitle>
      {children}
    </FullScreenSection>
  );
};

export default MainSection;
