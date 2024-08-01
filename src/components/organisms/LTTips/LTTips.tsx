import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";

const LTTips = () => {
  return (
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
  );
};

export default LTTips;
