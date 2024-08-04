import { ReactNode } from "react";
import FullScreenSection from "../../atoms/FullScreenSection/FullScreenSection";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

interface IMainSection {
  children: ReactNode;
  sectionTitle?: string;
}

const MainSection = ({ children, sectionTitle }: IMainSection) => {
  return (
    <FullScreenSection className="px-20 bg-gray-50" direction="col" asMainTag>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      {children}
    </FullScreenSection>
  );
};

export default MainSection;
