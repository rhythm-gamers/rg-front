import LevelTestAPI from "@/api/level_tests";
import LevelCards from "@/components/level_tests/organisms/LevelCards/LevelCards";
import FullScreenSection from "@/components/public/atoms/FullScreenSection/FullScreenSection";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";

const RhythmLevelTests = async () => {
  const data = await LevelTestAPI.getAll();

  return (
    <FullScreenSection direction="col" className="bg-orange-100" asMainTag>
      <p>{+data}</p>
      <div className="flex w-full h-full justify-evenly items-center">
        <LevelCards />
        <div className="flex flex-col items-center gap-3 absolute bottom-8 mx-auto text-rose-400">
          <div className="flex justify-between w-[35rem]">
            <div className="flex items-center animate-leftDrag">
              <MdArrowBackIos className="text-rose-400" size={30} />
              <MdArrowBackIos className="text-rose-300" size={30} />
              <MdArrowBackIos className="text-rose-200" size={30} />
            </div>
            <TbHandClick className="animate-clickAndDrag" size={55} />
            <div className="flex items-center animate-rightDrag">
              <MdArrowForwardIos className="text-rose-200" size={30} />
              <MdArrowForwardIos className="text-rose-300" size={30} />
              <MdArrowForwardIos className="text-rose-400" size={30} />
            </div>
          </div>
          <p className="text-lg">좌우로 스크롤하세요!</p>
          <p className="text-black">Tip: 방향키로도 이동 가능해요.</p>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default RhythmLevelTests;
