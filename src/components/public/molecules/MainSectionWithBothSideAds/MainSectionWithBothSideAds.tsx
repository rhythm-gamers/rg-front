import { ReactNode } from "react";
import AdSideBox from "../../atoms/AdSideBox/AdSideBox";
import FullScreenSection from "../../atoms/FullScreenSection/FullScreenSection";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

interface IMainSectionWithBothSideAds {
  children: ReactNode;
  sectionTitle?: string;
}

const MainSectionWithBothSideAds = ({
  children,
  sectionTitle,
}: IMainSectionWithBothSideAds) => {
  return (
    <FullScreenSection direction="row">
      <AdSideBox />
      <main className="flex flex-col w-full">
        {sectionTitle && (
          <SectionTitle isImportant>{sectionTitle}</SectionTitle>
        )}
        {children}
      </main>
      <AdSideBox />
    </FullScreenSection>
  );
};

export default MainSectionWithBothSideAds;
