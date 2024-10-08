"use client";

import LevelCard from "../../molecules/LevelCard/LevelCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MouseEvent, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCurrentLevel } from "@/lib/features/levelTest/levelTestSlice";
import { ILevelTestRes } from "@/api/level_tests";

interface ILTLevelCards {
  levelTests: ILevelTestRes[];
}

const LTLevelCards = ({ levelTests }: ILTLevelCards) => {
  const storedCurrentLevel = useAppSelector(
    (state) => state.levelTest.currentLevel,
  );
  const currentLevel = useRef<number>(storedCurrentLevel);
  const sliderRef = useRef<Slider>(null);
  const isDragging = useRef<boolean>(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const navigateToLevelTestByKeyboard = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      if (isDragging.current) return;
      if (e.key === "Enter") {
        dispatch(setCurrentLevel(currentLevel.current));
        router.push(`/level_tests/${currentLevel.current - 1}`); // 임시 코드: 차후에 수정
      }
    },
    [dispatch, router],
  );
  const navigateToLevelTestByClick = (e: MouseEvent, level: number) => {
    e.preventDefault();
    if (isDragging.current) return;
    dispatch(setCurrentLevel(level));
    router.push(`/level_tests/${level - 1}`); // 임시 코드: 차후에 수정
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
        `[data-index='${currentLevel.current - 2}']`, // 임시 코드: 차후에 수정
      )?.firstChild?.firstChild as HTMLDivElement;
      console.log(focusTarget);

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
  }, [navigateToLevelTestByKeyboard]);

  return (
    <Slider
      ref={sliderRef}
      className="w-[90dvw] h-full bg-transparent z-50"
      {...settings}
    >
      {levelTests.map((levelTest) => (
        <LevelCard
          key={`levelTest ${levelTest.id}`}
          id={levelTest.id}
          level={levelTest.level}
          title={levelTest.title}
          onClick={navigateToLevelTestByClick}
        />
      ))}
    </Slider>
  );
};

export default LTLevelCards;
