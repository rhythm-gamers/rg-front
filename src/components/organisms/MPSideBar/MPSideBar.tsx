import AuthAPI from "@/api/auth";
import CustomBtn from "@/components/atoms/CustomBtn/CustomBtn";
import { RefObject } from "react";

interface IMPSideBar {
  settingTitles: string[];
  moveToSettingRef: (ref: RefObject<HTMLTableSectionElement>) => void;
  refs: RefObject<HTMLTableSectionElement>[];
}

const MPSideBar = ({ settingTitles, moveToSettingRef, refs }: IMPSideBar) => {
  return (
    <aside className="flex flex-col justify-between min-w-[20rem] h-full gap-10 sticky top-20">
      <div className="h-[35rem] bg-white rounded-lg shadow-md">
        <div className="flex flex-col px-10">
          <h1 className="my-8 text-lg font-bold">마이페이지</h1>
          <div className="flex flex-col">
            {settingTitles.map((title, idx) => (
              <CustomBtn
                key={title}
                size="md"
                type="clear"
                onClick={() => moveToSettingRef(refs[idx])}
                className="text-left hover:text-rose-400"
                widthFull
              >
                {title}
              </CustomBtn>
            ))}
          </div>
        </div>
      </div>
      <CustomBtn
        size="xl"
        type="accept"
        widthFull
        roundedFull
        haveShadow
        onClick={() =>
          AuthAPI.login({
            username: process.env.NEXT_PUBLIC_API_ADMIN_ID,
            password: process.env.NEXT_PUBLIC_API_ADMIN_PW,
          })
        }
      >
        임시 로그인 버튼
      </CustomBtn>
    </aside>
  );
};

export default MPSideBar;
