import MainSection from "@/components/molecules/MainSection/MainSection";
import { ReactNode } from "react";

interface IMyPageTP {
  SideBar: ReactNode;
  AccountSettings: ReactNode;
  PlateSettings: ReactNode;
  GameSettings: ReactNode;
}

const MyPageTP = ({
  SideBar,
  AccountSettings,
  PlateSettings,
  GameSettings,
}: IMyPageTP) => {
  return (
    <MainSection>
      <div className="flex w-full h-full px-20 py-5 gap-10">
        {SideBar}
        <section className="flex flex-col w-full bg-white shadow-md rounded-lg gap-12 px-20 py-12">
          {AccountSettings}
          {PlateSettings}
          {GameSettings}
        </section>
      </div>
    </MainSection>
  );
};

export default MyPageTP;
