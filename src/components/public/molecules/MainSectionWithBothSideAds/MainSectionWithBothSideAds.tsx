import { ReactNode } from "react";
import AdSideBox from "../../atoms/AdSideBox/AdSideBox";
import FullScreenSection from "../../atoms/FullScreenSection/FullScreenSection";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

interface IMainSectionWithBothSideAds {
  children: ReactNode;
  sectionTitle: string;
}

const MainSectionWithBothSideAds = ({
  children,
  sectionTitle,
}: IMainSectionWithBothSideAds) => {
  return (
    <FullScreenSection direction="row">
      <AdSideBox />
      <main className="w-full flex flex-col">
        <section className="flex flex-col">
          <SectionTitle className="mt-10 mb-5" isImportant>
            {sectionTitle}
          </SectionTitle>
          {children}
        </section>
      </main>
      <AdSideBox />
    </FullScreenSection>
  );
};

export default MainSectionWithBothSideAds;
