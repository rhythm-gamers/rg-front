"use client";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import LevelCard from "../../molecules/LevelCard/LevelCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbHandClick } from "react-icons/tb";
import { MouseEvent, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCurrentLevel } from "@/lib/features/levelTest/levelTestSlice";

const LevelCards = () => {
  const storedCurrentLevel = useAppSelector(
    (state) => state.levelTest.currentLevel,
  );
  const currentLevel = useRef<number>(storedCurrentLevel);
  const sliderRef = useRef<Slider>(null);
  const isDragging = useRef<boolean>(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const navigateToLevelTestByKeyboard = (e: KeyboardEvent) => {
    e.preventDefault();
    if (isDragging.current) return;
    if (e.key === "Enter") {
      dispatch(setCurrentLevel(currentLevel.current));
      router.push(`/level_tests/${currentLevel.current}`);
    }
  };
  const navigateToLevelTestByClick = (e: MouseEvent, level: number) => {
    e.preventDefault();
    if (isDragging.current) return;
    dispatch(setCurrentLevel(level));
    router.push(`/level_tests/${level}`);
  };

  const settings = {
    initialSlide: currentLevel.current - 1,
    infinite: true,
    arrows: false,
    centerPadding: "120px",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
    lazyLoading: "ondemand",
    onInit: () => {
      const focusTarget = sliderRef.current?.innerSlider?.list?.querySelector(
        `[data-index='${currentLevel.current - 1}']`,
      )?.firstChild?.firstChild as HTMLDivElement;

      focusTarget?.focus();
    },
    beforeChange: () => {
      isDragging.current = true;
    },
    afterChange: (newIdx: number) => {
      const focusTarget = sliderRef.current?.innerSlider?.list?.querySelector(
        `[data-index='${newIdx}']`,
      )?.firstChild?.firstChild as HTMLDivElement;

      focusTarget?.focus();
      currentLevel.current = newIdx + 1;
      isDragging.current = false;
    },
  };

  useEffect(() => {
    window?.addEventListener("keydown", navigateToLevelTestByKeyboard);
    return () => {
      window?.removeEventListener("keydown", navigateToLevelTestByKeyboard);
    };
  }, []);

  return (
    <div className="flex w-full h-full justify-evenly items-center relative">
      <Slider
        ref={sliderRef}
        className="w-[90dvw] h-full bg-transparent z-50"
        {...settings}
      >
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <LevelCard
            key={value}
            level={value}
            onClick={navigateToLevelTestByClick}
          />
        ))}
      </Slider>
      <div className="flex flex-col items-center gap-3 absolute bottom-8 mx-auto text-rose-400">
        <div className="flex justify-between w-[30dvw]">
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
  );
};

export default LevelCards;
